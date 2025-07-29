import Skills from "./Skills";
import {aboutData} from "../data/aboutData";

export default function About() {
  return (
    <article className="about active" data-page="about">
      <header>
        <h2 className="h2 article-title">Sobre mí</h2>
      </header>

      <section className="about-text">
        <p>{aboutData.description1}</p>
        <p>{aboutData.description2}</p>
      </section>

      <Skills />
    </article>
  );
}
