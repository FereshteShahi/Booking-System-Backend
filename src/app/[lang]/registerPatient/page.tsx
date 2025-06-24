"use client";

import Button from "@/src/components/Button";
import Link from "next/link";
import { getContent } from "@/src/lib/getContent";
import { register } from "@/src/actions/patient";

export default function Register({ lang }: { lang: "de" | "tr" }) {

  const de = lang || "de"; // Default to 'de' if lang is not provided

  const handleSubmit = async (formData: FormData) => {

    const username = formData.get("username") as string;
    const password = formData.get("password") as string;
    const email = formData.get("email") as string;
    const telefonnummer = formData.get("telefonnummer") as string;
    const geburtstag = formData.get("geburtstag") as string;

    await register({ username, password, email, telefonnummer, geburtstag, lang });
  };

  return (
    <div className="bg-white  ">
      <div className="bg-[var(--color-background)] text-center py-10 px-4 ">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8">
          Jetzt Registrieren
        </h1>

        <div className="max-w-2xl mx-auto bg-[var(--color-foreground)] p-10 rounded-[52px] shadow-lg">
          <form
            action={handleSubmit}
            className="space-y-6 text-left"
          >
            <div>
              <label
                htmlFor="username"
                className="block mb-2 text-lg font-medium text-[var(--color-background)]-700"
              >
                Benutzername
              </label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Benutzername"
                required
                className="w-full p-4 border border-[var(--color-background)]-300 rounded-lg text-lg"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-lg font-medium text-[var(--color-background)]-700"
              >
                E-Mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="E-Mail"
                required
                className="w-full p-4 border border-[var(--color-background)]-300 rounded-lg text-lg"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-lg font-medium text-[var(--color-background)]-700"
              >
                Passwort
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Passwort"
                required
                className="w-full p-4 border border-[var(--color-background)]-300 rounded-lg text-lg"
              />
            </div>

            <div>
              <label
                htmlFor="telefonnummer"
                className="block mb-2 text-lg font-medium text-[var(--color-background)]-700"
              >
                Telefonnummer
              </label>
              <input
                type="text"
                id="telefonnummer"
                name="telefonnummer"
                placeholder="Telefonnummer"
                className="w-full p-4 border border-[var(--color-background)]-300 rounded-lg text-lg"
              />
            </div>

            <div>
              <label
                htmlFor="geburtstag"
                className="block mb-2 text-lg font-medium text-[var(--color-background)]-700"
              >
                Geburtsdatum
              </label>
              <input
                type="date"
                id="geburtstag"
                name="geburtstag"
                required
                className="w-full p-4 border border-[var(--color-background)]-300 rounded-lg text-lg"
              />
            </div>
            <div>

              <p className="text-sm text-[var(--color-background)]-600"></p>
                Bereits registriert?{" "}
                <Link href={`/${de}/login`} className="text-[var(--color-primary)]-500 hover:underline">
                  Einloggen{''}

                </Link>
            </div>
            <div className="flex justify-center text-center">
                <Button text="Registrieren" type="submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
