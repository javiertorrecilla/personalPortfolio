import Education from "./Education";
import Experience from "./Experience";

export default function Resume() {
  return (
    <article className="resume active" data-page="resume">
      <header>
        <h2 className="h2 article-title">Currículum</h2>
      </header>

      <div className="resume-grid">
        <Education />
        <Experience />
      </div>
    </article>
  );
}
