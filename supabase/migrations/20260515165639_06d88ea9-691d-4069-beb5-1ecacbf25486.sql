DROP POLICY "Anyone can submit contact request" ON public.contact_requests;
CREATE POLICY "Anyone can submit contact request"
  ON public.contact_requests FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    length(nom) between 1 and 120
    and length(email) between 3 and 254
    and email like '%_@_%.__%'
    and length(message) between 1 and 4000
    and (telephone is null or length(telephone) <= 40)
    and (entreprise is null or length(entreprise) <= 200)
    and (type_projet is null or length(type_projet) <= 100)
  );