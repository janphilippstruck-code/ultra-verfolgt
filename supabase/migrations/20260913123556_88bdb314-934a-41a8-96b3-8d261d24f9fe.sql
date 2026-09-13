CREATE TABLE public.season2_interest (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  role TEXT NOT NULL,
  has_partner BOOLEAN NOT NULL,
  message TEXT,
  privacy_consent BOOLEAN NOT NULL DEFAULT false
);

GRANT ALL ON public.season2_interest TO service_role;

ALTER TABLE public.season2_interest ENABLE ROW LEVEL SECURITY;
