"use client";
import { useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { getContent } from "@/src/lib/getContent";
import Button from "@/src/components/Button";

type Params = { lang: "de" | "tr" };

export default function Contact({ params }: { params: Params }) {
  const formRef = useRef<HTMLFormElement>(null);
  const contactContent = getContent(params.lang, "kontaktpage");

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
      )
      .then(
        () => {
          alert("Nachricht erfolgreich gesendet!");
          formRef.current?.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error);
          alert("Es gab ein Problem beim Senden der Nachricht.");
        }
      );
  };

  return (
    <div className="py-10 px-4 min-h-screen">
      <h2 className="text-center text-2xl font-semibold text-[var(--color-heading)] mb-10">
        {contactContent.title}
      </h2>

      <form ref={formRef} onSubmit={sendEmail} className="max-w-xl mx-auto space-y-6">
        <div className="flex gap-4">
          <div className="w-1/2">
            <label htmlFor="name" className="block mb-1 text-[var(--color-heading)] font-semibold">
              {contactContent.name}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-[var(--color-foreground)] rounded-xl py-3 px-4 lg:py-4 lg:px-5 text-green-900 placeholder-gray-400 focus:outline-none lg:text-base"
              placeholder={contactContent.namePlaceholder ?? "deinen Namen eingeben"}
              required
            />
          </div>

          <div className="w-1/2">
            <label htmlFor="vorname" className="block mb-1 text-[var(--color-heading)] font-semibold">
              {contactContent.vorname}
            </label>
            <input
              type="text"
              id="vorname"
              name="vorname"
              className="w-full bg-[var(--color-foreground)] rounded-xl py-3 px-4 lg:py-4 lg:px-5 text-green-900 placeholder-gray-400 focus:outline-none lg:text-base"
              placeholder={contactContent.vornamePlaceholder}
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="telefonnummer" className="block mb-1 text-[var(--color-heading)] font-semibold">
            {contactContent.telefonnummer}
          </label>
          <input
            type="text"
            id="telefonnummer"
            name="telefonnummer"
            className="w-full bg-[var(--color-foreground)] rounded-xl py-3 px-4 lg:py-4 lg:px-5 text-green-900 placeholder-gray-400 focus:outline-none lg:text-base"
            placeholder={contactContent.telefonnummerPlaceholder}
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-1 text-[var(--color-heading)] font-semibold">
            {contactContent.email}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full bg-[var(--color-foreground)] rounded-xl py-3 px-4 lg:py-4 lg:px-5 text-green-900 placeholder-gray-400 focus:outline-none lg:text-base"
            placeholder={contactContent.emailPlaceholder}
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block mb-1 text-[var(--color-heading)] font-semibold">
            {contactContent.nachricht}
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full bg-[var(--color-foreground)] rounded-xl py-3 px-4 lg:py-4 lg:px-5 focus:outline-none lg:text-base"
            placeholder={contactContent.nachrichtPlaceholder}
            required
          ></textarea>
        </div>

        <div className="text-center">
          <Button text={contactContent.button ?? "Senden"} type="submit" />
        </div>
      </form>
    </div>
  );
}
