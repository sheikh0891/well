import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";

const contactSchema = z.object({
  nom: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(254),
  telephone: z.string().trim().max(40).optional().or(z.literal("")),
  entreprise: z.string().trim().max(200).optional().or(z.literal("")),
  type_projet: z.string().trim().max(100).optional().or(z.literal("")),
  message: z.string().trim().min(1).max(4000),
});

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    const url = process.env.SUPABASE_URL;
    const key = process.env.SUPABASE_PUBLISHABLE_KEY;
    if (!url || !key) throw new Error("Backend non configuré");
    const supabase = createClient(url, key);
    const { error } = await supabase.from("contact_requests").insert({
      nom: data.nom,
      email: data.email,
      telephone: data.telephone || null,
      entreprise: data.entreprise || null,
      type_projet: data.type_projet || null,
      message: data.message,
    });
    if (error) {
      console.error("Contact insert error", error);
      throw new Error("Échec de l'envoi du formulaire");
    }
    return { success: true };
  });
