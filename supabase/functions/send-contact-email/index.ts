import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Brak wymaganych pól: name, email, message." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, serviceRoleKey);

    const { error: dbError } = await supabase
      .from("contact_requests")
      .insert({ name, email, phone, message });

    if (dbError) {
      return new Response(
        JSON.stringify({ error: "Nie udało się zapisać zapytania." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const ownerEmail = "daniel.niewiarowski@op.pl";
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    if (!resendApiKey) {
      return new Response(
        JSON.stringify({ error: "Wysyłka e-mail nie jest jeszcze skonfigurowana." }),
        { status: 503, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const emailSubject = `Nowe zapytanie ze strony — ${name}`;
    const emailBody = [
      `Nowe zapytanie z formularza kontaktowego na stronie kancelarii.`,
      ``,
      `Imię i nazwisko: ${name}`,
      `E-mail: ${email}`,
      phone ? `Telefon: ${phone}` : null,
      ``,
      `Treść wiadomości:`,
      message,
    ].filter(Boolean).join("\n");

    const resendResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Kancelaria <onboarding@resend.dev>",
          to: [ownerEmail],
          subject: emailSubject,
          text: emailBody,
        }),
      });

    if (!resendResponse.ok) {
      const errText = await resendResponse.text();
      return new Response(
        JSON.stringify({ error: `Błąd wysyłki e-mail: ${errText}` }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    return new Response(
      JSON.stringify({ success: true }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: err.message || "Wystąpił nieoczekiwany błąd." }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});
