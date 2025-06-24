import Startseite from "@/src/components/Startseite";
import { getContent } from "@/src/lib/getContent";
import Angebote from "@/src/components/Angebote";
import Costs from "@/src/components/Costs";
import KontaktMe from "@/src/components/KontaktMe";
type Params = { lang: "de" | "tr" };

export default async function Home( { params }: { params: Params }) {
  const content = getContent(params.lang, "home");
  const angebottitle = getContent(params.lang, "angebote");
  const costs = getContent(params.lang, "costs");
  const contact = getContent(params.lang, "contact");

  return (
    <main className="">
    <section id="home">
      <div className="w-80 m-auto text-center  lg:w-1/2 md:w-100 lg:mt-5  ">
      <h1 className="lg:text-3xl md: text-1xl">{content.name}</h1>
      <h1 className="lg:text-3xl md: text-1xl" >{content.title}</h1>
      <h1 className="lg:text-3xl md: text-1xl">{content.title2}</h1>
      </div>
      <Startseite lang={params.lang} />
    </section>
    <section >
    <h2 id="angebote" className="m-10 text-center text-[30px] ">{angebottitle.title}</h2>
    
    <Angebote lang={params.lang} />
    </section>
    <section id="costs">
    <h2 className="m-10 text-center text-[30px] ">{costs.title}</h2>
    <Costs lang={params.lang} />
    </section>
    <section>
    <h2  id="kontakt" className="m-5 text-center text-[30px] ">{contact.title}</h2>
    <KontaktMe lang={params.lang}/>
    </section>
    <div className="h-10">

    </div>

  </main>

  );
}
