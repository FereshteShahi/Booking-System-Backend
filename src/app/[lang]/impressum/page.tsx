import { getContent } from "@/src/lib/getContent";

type Params = { lang: "de" | "tr" };

export default function Impressum({ params }: { params: Params }) {
  const impressumContent = getContent(params.lang, "impressum");

  return (
    <main className=" py-8 text-[var(--color-heading)]">
      <h1 className="text-4xl font-bold text-center mb-10">
        {impressumContent.title}
      </h1>

      <section className="w-full text-center space-y-12 bg-[var(--color-foreground)] p-6 pb-[33.8vh] md:pb-[28.5vh]">
        {/* Contact Info */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">{impressumContent.content}</h2>
          <p>{impressumContent.name}</p>
          <p>{impressumContent.jobtitle}</p>
          <p>{impressumContent.address}</p>
          <p>{impressumContent.telefon}</p>
          <p>{impressumContent.email}</p>
        </div>

        {/* Responsible Person */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">{impressumContent.responsible}</h2>
          <p>{impressumContent.responsibleName}</p>
          <p>{impressumContent.address}</p>
        </div>
      </section>
    </main>
  );
}
