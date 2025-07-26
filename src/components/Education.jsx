import { educationData } from "../data/educationData";
import {MdSchool} from "react-icons/md";

export default function Education() {
  return (
    <section className="timeline">
      <div className="title-wrapper">
        <div className="icon-box">
          <MdSchool />
        </div>
        <h3 className="h3">Educación</h3>
      </div>

      <ol className="timeline-list">
        {educationData.map((item, index) => (
          <li className="timeline-item" key={index}>
            <h4 className="h4 timeline-item-title">{item.course}</h4>
            <span>{item.startYear} - {item.endYear}</span>
            <p className="timeline-text">{item.institution}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
