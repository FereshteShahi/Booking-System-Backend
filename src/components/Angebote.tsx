import { getContent } from "../lib/getContent";
import Image from "next/image";
import Quote from "./Quote";

export default function Angebote({ lang }: { lang: "de" | "tr" }) {
  const content = getContent(lang, "angebote");
  const q = getContent(lang, "quotes");

  return (
    <section className="bg-[var(--color-foreground)] pt-10">
      {/* Therapy 1 */}
      <div>
        <h3 className="text-xl font-semibold m-6 text-center md:text-[18px] lg:text-[25px]">
          {content.therapie1}
        </h3>

        <div className="flex flex-col justify-between lg:flex-row items-center lg:items-start text-left gap-[10%] max-w-5xl mx-auto px-4 py-10">
          <Image
            src="/images/einzelth.jpeg"
            alt="Paartherapie"
            width={450}
            height={390}
            priority
            className="rounded-[52px] w-[295px] h-[360px] md:w-[360px] md:h-[480px] lg:w-[500px] lg:h-[580px]"
          />
          <div className="flex flex-col">
            <p className="pt-6 w-full m-auto lg:text-left lg:m-0 lg:!text-[20px] lg:w-2/2 lg:mt-10">
              {content.content1}
            </p>
            <div className="self-start md:self-center">
              <Quote
                text={q.quoteTherapie1 || "default quote"}
                author={q.quoteTherapie1Author || "default author"}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Therapy 2 */}
      <div>
        <h3 className="text-xl font-semibold m-6 text-center md:text-[18px] lg:text-[25px]">
          {content.therapie2}
        </h3>

        <div className="flex flex-col justify-between lg:flex-row items-center lg:items-start text-left gap-[10%] max-w-5xl mx-auto px-4 py-10">
          <Image
            src="/images/paarth.jpg"
            alt="Paartherapie"
            width={450}
            height={390}
            priority
            className="rounded-[52px] w-[295px] h-[360px] md:w-[360px] md:h-[480px] lg:w-[500px] lg:h-[580px]"
          />
          <div className="flex flex-col">
            <p className="pt-6 w-full m-auto lg:text-left lg:m-0 lg:!text-[20px] lg:w-2/2 lg:mt-10">
              {content.content2}
            </p>
            <div className="self-start md:self-center">
              <Quote
                text={q.quoteTherapie2 || "default quote"}
                author={q.quoteTherapie2Author || "default author"}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Therapy 3 */}
      <div>
        <h3 className="text-xl font-semibold m-6 text-center md:text-[18px] lg:text-[25px]">
          {content.therapie3}
        </h3>

        <div className="flex flex-col justify-between lg:flex-row items-center lg:items-start text-left gap-[10%] max-w-5xl mx-auto px-4 py-10">
          <Image
            src="/images/erziehungsb.jpeg"
            alt="Paartherapie"
            width={450}
            height={390}
            priority
            className="rounded-[52px] w-[295px] h-[360px] md:w-[360px] md:h-[480px] lg:w-[500px] lg:h-[580px]"
          />
          <div className="flex flex-col">
            <p className="pt-6 w-full m-auto lg:text-left lg:m-0 lg:!text-[20px] lg:w-2/2 lg:mt-10">
              {content.content3}
            </p>
            <div className="self-start md:self-center">
              <Quote
                text={q.quoteTherapie3 || "default quote"}
                author={q.quoteTherapie3Author || "default author"}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Angebote Info */}
      <h3 className="text-xl font-semibold  m-4 text-center md:text-[18px] lg:text-[25px] lg:!text-center lg:mr-60 lg:!mb-[-40px]">
        {content.angeboteInfoTitle}
      </h3>

      <ul className="list-disc  mt-10 lg:w-[1000px] p-10  mx-auto">
        <li className="text-left ml-5 font-handlee lg:text-2xl">{content.angeboteInfoContent1}</li>
        <br />
        <li className="text-left ml-5 font-handlee lg:text-2xl">{content.angeboteInfoContent2}</li>
        <br />
        <li className="text-left ml-5 font-handlee lg:text-2xl">{content.angeboteInfoContent3}</li>
        <br />
        <li className="text-left ml-5 font-handlee lg:text-2xl">{content.angeboteInfoContent4}</li>
      </ul>
    </section>
  );
}
