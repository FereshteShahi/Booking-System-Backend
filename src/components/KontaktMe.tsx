import Image from "next/image";
import Link from "next/link";
import { getContent } from "../lib/getContent";
import { MapPin, Mail, Phone } from "lucide-react";
import Button from "../components/Button";


export default function KontaktMe({ lang }: { lang: "de" | "tr" }) {
  const contactContent = getContent(lang, "contact");
  const de = lang || "de";

  return (
    <div className="bg-[var(--color-foreground)] text-center">
      <h4 className="w-full text-center mb-4 md:text-md md:pt-8 md:w-150 lg:text-lg lg: pt-8 lg:w-200 xl:text-2xl md:text-center">{contactContent.content}</h4>
      <div className="md:flex md:flex-row-reverse md:gap-5 md:items-center md:pb-10 lg:pb-20">
        <Image
          src="/images/praxis.jpeg"
          alt="Praxis"
          width={250}
          height={250}
          className="m-auto rounded-[52px] shadow-lg md:w-[450px] md:h-[400px] md:mx-10 xl:mr-20 xl:w-[550px] xl:h-[500px]"
          priority
          loading="eager"
        />
        <div className="mt-5 mb-5 flex justify-center items-center md:justify-start md:items-start md:flex-col md:gap-5">
          <div className="flex flex-col items-start space-y-6 md:justify-start md:items-start lg:mr-[100px] lg:mb[100px] xl:mr-[150px]">
            {/* Address with Google Maps link */}
            <a
              href="https://www.google.com/maps/place/Asamstraße+8,+81541+München"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4  hover:underline"
            >
              <MapPin className="w-8 h-8 mt-1 md:w-10 md:h-10 xl:h-15 xl:w-15" />
              <div className="flex flex-col">
                <p className="text-lg lg:text-2xl xl:text-3xl">Asamstraße 8</p>
                <p className="text-lg lg:text-2xl xl:text-3xl">81541 München</p>
              </div>
            </a>

            {/* Phone with tel: link */}
            <a
              href="tel:+4915781639662"
              className="flex items-center gap-4  hover:underline"
            >
              <Phone className="w-8 h-8 md:w-10 md:h-10 xl:h-15 xl:w-15" />
              <p className="text-lg font-medium lg:text-2xl xl:text-3xl">+49 1578 1639662</p>
            </a>

            <a
              href="mailto:duygu.froehlich@web.de"
              className="flex items-center gap-4 hover:underline"
            >
              <Mail className="w-8 h-8 md:w-10 md:h-10 xl:h-15 xl:w-15" />
              <p className="text-lg font-medium lg:text-2xl xl:text-3xl">duygu.froehlich@web.de</p>
            </a>
          </div>
        </div>
      </div>

       

      <Link href={`/${lang}/contact`} className="">

        <Button text={contactContent.contactButton ?? ""}  />        

      </Link>

           <Link href={`/${lang}/registerPatient`} className="">
        <Button text="Registrieren"  />
        

      </Link>
      <div className="h-15">

      </div>


  <div>
              <p className="text-sm   text-[var(--color-background)]-600"></p>
                Bereits registriert?{" "}
                <Link href={`/${de}/login`} className="text-[var(--color-primary)]-500 hover:underline ">
                  Einloggen{''}
                </Link>
            </div>

    </div>
  )

}