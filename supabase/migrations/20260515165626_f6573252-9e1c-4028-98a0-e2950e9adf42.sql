CREATE TABLE public.contact_requests (
  id uuid primary key default gen_random_uuid(),
  nom text not null,
  email text not null,
  telephone text,
  entreprise text,
  type_projet text,
  message text not null,
  created_at timestamptz not null default now()
);
ALTER TABLE public.contact_requests ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit contact request"
  ON public.contact_requests FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);