import { publications } from "../../data/publications";
import Card from "../ui/Card";
import Button from "../ui/Button";

export default function Publication() {
  return (
    <section id="publication" className="mx-[5%] lg:mx-40 pt-[4vh] box-border relative h-fit min-h-fit mt-8 lg:mt-0">
      <p className="text-text-dim text-[0.85rem] font-semibold tracking-[0.12em] uppercase text-center">
        Browse My Recent
      </p>
      <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-[-0.02em] text-text text-center">
        Publication
      </h1>
      <div className="flex flex-wrap justify-center gap-6 mt-8 mb-8">
        {publications.map((pub) => (
          <Card key={pub.title} accentClassName="border-l-accent-green bg-surface" className="!flex-none w-full sm:w-80 !p-4">
            <img src={pub.image} alt={pub.alt} className="rounded-xl border border-border w-full h-36 object-cover object-top mx-auto" />
            <h2 className="font-display font-bold text-sm mt-3 text-text leading-snug">{pub.title}</h2>
            <p className="text-[0.75rem] text-text-faint mt-1.5 mb-3">
              {pub.journal} &middot; DOI:{" "}
              <a href={pub.doiHref} target="_blank" rel="noopener noreferrer" className="text-accent-cyan hover:text-text">
                {pub.doi}
              </a>{" "}
              &middot; {pub.date}
            </p>
            <div className="flex justify-center flex-wrap gap-3">
              {pub.buttons.map((btn) => (
                <Button key={btn.label} label={btn.label} href={btn.href} />
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}