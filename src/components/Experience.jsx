import React from "react";
import { experienceData } from "../data/experienceData";
import {FaLaptopCode} from "react-icons/fa";

export default function Experience() {
  return (
    <section className="timeline">
      <div className="title-wrapper">
        <div className="icon-box">
          <FaLaptopCode />
        </div>
        <h3 className="h3">Experiencia Laboral</h3>
      </div>

      <ol className="timeline-list">
        {experienceData.map((item, index) => (
          <li className="timeline-item" key={index}>
            <h4 className="h4 timeline-item-title">{item.company}</h4>
            <span>{item.startYear} - {item.endYear}</span>
            <p className="timeline-text">{item.jobtitle}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
