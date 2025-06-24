import {getContent} from "@/src/lib/getContent";
import Image from "next/image";
import Button from "@/src/components/Button";
import Quote from "@/src/components/Quote";
import Link from "next/link";

export default function Startseite({lang}: {lang: "de" | "tr"}) {
  const h = getContent(lang, "home");
  const q = getContent(lang, "quotes");
  return (
    <div className="bg-[var(--color-foreground)] text-center w-[100%] ">
      <div className="flex flex-col items-center justify-center lg:flex-row lg:items-start lg:gap-10">
      <div className="pt-8 ">
      <Image 
      src="/images/hero.jpeg"
      alt="Hero Image"
      width={295}
      height={360}
      priority
      className="rounded-[52] m-auto lg:w-[400px] lg:h-[600px] "
      />
      </div>
      <p className="pt-6 px-4 w-full m-auto lg:text-left lg:m-0 lg:!text-[20px] lg:w-1/2 lg:mt-20 ">{h.description}</p>
      </div>
      <div className="flex items-center mt-8 md:justify-center md:gap-10 lg:justify-center lg:ml-120 lg:-mt-50 lg:gap-20 ">
        <div className="md:">
        <Link href={`/${lang}/about`}>
        <Button text={h.buttonText} className=""/>
        </Link>
        </div>
        <div className="">
        <Quote text={q?.quoteHome || "default quote"} author={q?.quoteHomeAuthor || "anonymous"} />
        </div>
      </div>

      <div>
      <div className="flex justify-center -mt-2 lg:mt-15">

        <Image 
        src={h.wordcloudPhoto || "/images/default-wordcloud.jpg"}
        alt="Wordcloud"
        width={450}
        height={390}
        priority
        className="lg:w-[650px] lg:h-[550px]"
        
        />
      </div>
    </div>
     </div>
  );
}