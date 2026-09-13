import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const inputSchema = z.object({
  name: z.string().trim().min(2, "Bitte gib deinen Namen an.").max(120),
  email: z.string().trim().email("Bitte gib eine gültige E-Mail-Adresse an.").max(200),
  role: z.enum(["laeufer", "sucher", "beides"]),
  hasPartner: z.boolean(),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
  privacyConsent: z.literal(true),
  // Honeypot – wird von Menschen nie ausgefüllt
  website: z.string().max(0).optional().or(z.literal("")),
});

export type Season2Result = { ok: true } | { ok: false; error: string };

export const submitSeason2Interest = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => data)
  .handler(async ({ data }): Promise<Season2Result> => {
    const parsed = inputSchema.safeParse(data);
    if (!parsed.success) {
      return {
        ok: false,
        error: parsed.error.issues[0]?.message ?? "Bitte überprüfe deine Angaben.",
      };
    }
    const v = parsed.data;
    if (v.website) return { ok: true };

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("season2_interest").insert({
      name: v.name,
      email: v.email.toLowerCase(),
      role: v.role,
      has_partner: v.hasPartner,
      message: v.message ? v.message : null,
      privacy_consent: true,
    });

    if (error) {
      console.error("season2_interest insert failed", error);
      return { ok: false, error: "Das hat leider nicht geklappt. Bitte versuche es später erneut." };
    }

    return { ok: true };
  });
