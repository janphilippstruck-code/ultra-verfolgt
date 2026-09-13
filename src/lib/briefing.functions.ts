import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import type { Briefing } from "@/content/briefing-types";

const inputSchema = z.object({
  group: z.enum(["laeufer", "sucher"]),
  password: z.string().min(1).max(200),
});

export type UnlockResult =
  | { ok: true; briefing: Briefing }
  | { ok: false; error: string };

function safeEqual(a: string, b: string) {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

export const unlockBriefing = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => inputSchema.parse(data))
  .handler(async ({ data }): Promise<UnlockResult> => {
    const { getBriefing, getBriefingPasswordEnvName } = await import(
      "@/content/briefings.server"
    );

    const expected = process.env[getBriefingPasswordEnvName(data.group)];

    // Leichter Brute-Force-Schutz
    await new Promise((r) => setTimeout(r, 400));

    if (!expected) {
      return { ok: false, error: "Dieser Bereich ist derzeit nicht freigeschaltet." };
    }

    if (!safeEqual(data.password.trim(), expected.trim())) {
      return { ok: false, error: "Passwort nicht korrekt." };
    }

    return { ok: true, briefing: getBriefing(data.group) };
  });
