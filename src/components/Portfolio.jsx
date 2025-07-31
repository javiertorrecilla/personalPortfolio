import Projects from "./Projects";

export default function Portfolio() {
  return (
    <article className="portfolio active" data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Portafolio</h2>
      </header>

      <Projects />

    </article>
  );
}