
import { getContent } from "@/src/lib/getContent";

type Params = { lang: "de" | "tr" };

export default function About({ params }: { params: Params }) {
  const datenschutz = getContent(params.lang, "datenschutz");

return(
    <section className="mb-6 md:mt-[-30]">

<h1 className="text-4xl font-bold text-center  m-10 ">Datenschutzerklärung</h1>
<div className=" text-center bg-[var(--color-foreground)] p-[30px] ">

<p className="text-[20px] lg:text-[25px]">{datenschutz.datenschutztext}</p>
<h4 className="font-bold text-[20px] lg:text-[25px]">{datenschutz.Verantwortlich}</h4>
<p className=" text-[20px] lg:text-[25px]">{datenschutz.nameD}</p>
<p className=" text-[20px] lg:text-[25px]">{datenschutz.addresse}</p>
<p className=" text-[20px] lg:text-[25px]">{datenschutz.ort}</p>
<p className=" text-[20px] lg:text-[25px]">{datenschutz.telefone}</p>
<p className=" text-[20px] lg:text-[25px]">{datenschutz.emailD}</p>
<h4 className=" font-bold text-[20px] lg:text-[25px]">{datenschutz.hosting}</h4>
<p className=" text-[20px] lg:text-[25px]">{datenschutz.hoster}</p>
<p className=" text-[20px] lg:text-[25px]">{datenschutz.hoster1}</p>
<p className=" text-[20px] lg:text-[25px]">{datenschutz.hoster2}</p>
<p className=" text-[20px] lg:text-[25px]">{datenschutz.hoster3}</p>
<p className=" text-[20px] lg:text-[25px]">{datenschutz.hoster4}</p>
<p className=" text-[20px] lg:text-[25px]">{datenschutz.hoster5}</p>
<h4 className=" font-bold text-[20px] lg:text-[25px]">{datenschutz.verschlüsselung}</h4>
<p className=" text-[20px] lg:text-[25px]">{datenschutz.verschlüsselungtext}</p>

<h4 className=" font-bold text-[20px] lg:text-[25px]">{datenschutz.erhebung}</h4>
<p className=" text-[20px] lg:text-[25px]">{datenschutz.erhebung0}</p>
<p className=" text-[20px] lg:text-[25px]">{datenschutz.erhebung1}</p>
<p className=" text-[20px] lg:text-[25px]">{datenschutz.erhebung2}</p>
<p className=" text-[20px] lg:text-[25px]">{datenschutz.erhebung3}</p>
<p className=" text-[20px] lg:text-[25px]">{datenschutz.erhebung4}</p>
<p className=" text-[20px] lg:text-[25px]">{datenschutz.erhebungText}</p>

<h4 className=" font-bold text-[20px] lg:text-[25px]">{datenschutz.rechte}</h4>
<p className=" text-[20px] lg:text-[25px]">{datenschutz.rechtetext}</p>
<p className=" text-[20px] lg:text-[25px]">{datenschutz.rechte1}</p>
<p className=" text-[20px] lg:text-[25px]">{datenschutz.rechte2}</p>
<p className=" text-[20px] lg:text-[25px]">{datenschutz.rechte3}</p>
<p className=" text-[20px] lg:text-[25px]">{datenschutz.rechte4}</p>
<p className=" text-[20px] lg:text-[25px]">{datenschutz.rechte5}</p>
<p className=" text-[20px] lg:text-[25px]">{datenschutz.rechte6}</p>

<h4 className=" font-bold text-[20px] lg:text-[25px]">{datenschutz.wiederspruchrecht}</h4>
<p className=" text-[20px] lg:text-[25px]">{datenschutz.wiederspruchrechttext}</p>
<p className=" text-[20px] lg:text-[25px]">{datenschutz.muster}</p>
<h4 className="text-[20px] lg:text-[25px]" >{datenschutz.an}</h4>
<h4 className="text-[20px] lg:text-[25px]">{datenschutz.betreff}</h4>
<p className=" text-[20px] lg:text-[25px]">{datenschutz.betreftext}</p>

<h4 className=" font-bold text-[20px] lg:text-[25px]">{datenschutz.änderung}</h4>
<p className=" text-[20px] lg:text-[25px]">{datenschutz.änderungtext}</p>




</div>

    </section>
)}