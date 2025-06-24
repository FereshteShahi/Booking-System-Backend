"use client";

import { getContent } from "@/src/lib/getContent";
import { CostsBox } from "./CostsBox";
import Button from "./Button";
import Image from "next/image";

export default function Costs({ lang }: { lang: "de" | "tr" }) {
  const content = getContent(lang, "costs");

  

  return (
    <div className="bg-[var(--color-foreground)] text-center">
      <h4 className="font-semibold pt-5">{content.content}</h4>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-10 m-auto w-full max-w-md md:max-w-3xl">
        <CostsBox price="0 €" text={content.cost1 ?? ""} />
        <CostsBox price="90 €" text={content.cost2 ?? ""} />
        <div className="col-span-2 md:col-span-1 flex justify-center">
          <CostsBox price="140 €" text={content.cost3 ?? ""} />
        </div>
      </div>
      <div className="lg:flex lg:justify-center lg:mt-10 lg:mr-12">
        <Button text={content.costButton ?? ""} onClick={()=>{
          const el = document.getElementById("kontakt");
          if(el){
            el.scrollIntoView({ behavior: "smooth" });
          }
        }}/>
      </div>
      <div className="flex flex-col items-center justify-around mt-10 lg:flex lg:flex-row ">
        <div className="lg:-mt-40">
          <p className="font-bold text-3xl lg:text-left lg:!text-4xl px-8 ">{content.conditions}</p>
          <ul className="list-disc pl-5 mt-10 w-100 lg:w-150">
            <li className="text-left ml-5 font-handlee lg:text-2xl">{content.condition1}</li>
            <li className="text-left ml-5 font-handlee lg:text-2xl">{content.condition2}</li>
            <li className="text-left ml-5 font-handlee lg:text-2xl">{content.condition3}</li>
            <li className="text-left ml-5 font-handlee lg:text-2xl">{content.condition4}</li>
          </ul>
        </div>
        <div className=" mb-10">
          <Image
            src="/images/behandlungsk.jpeg"
            alt="Duygu Fröhlich"
            width={500}
            height={500}
            priority
            className="m-auto mt-10 rounded-[50px] shadow-lg w-[250px] h-[250px] lg:w-[500px] lg:h-[500px] md:w-[400px] md:h-[400px] object-cover"
          />
        </div>

      </div>
    </div>
  );
}
