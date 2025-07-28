import React from 'react';
import { skillsData } from '../data/skillsData';

export default function Skills() {
  return (
    <section className="testimonials">
      <h3 className="h3 testimonials-title">Habilidades</h3>
      <p className="testimonials-intro">
        Lista de herramientas y tecnologías que manejo ordenadas alfabéticamente:
      </p>
      <ul className="testimonials-list has-scrollbar">
        {skillsData.map((skill, index) => (
          <li className="testimonials-item" key={index}>
            <div className="content-card" data-testimonials-item>
              <figure className="testimonials-avatar-box">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  width="60"
                  data-testimonials-avatar
                />
              </figure>

              <h4 className="h4 testimonials-item-title" data-testimonials-title>
                {skill.name}
              </h4>

              <div className="testimonials-text" data-testimonials-text>
                <p>{skill.description}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
