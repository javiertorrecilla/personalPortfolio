import '../styles.css';

import {contactsData} from '../data/contactsData.js';
import {socialsData} from '../data/socialsData.js';
import {headerData} from '../data/headerData.js';

import { MdAlternateEmail, MdOutlinePhoneIphone, MdOutlineCalendarMonth, MdLocationOn } from 'react-icons/md';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { GrDocumentText } from 'react-icons/gr';

import fotoPersonal from '../assets/png/fotoPersonal.png';

function Sidebar() {
  return (
    <aside className="sidebar active">
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src={fotoPersonal} alt="Javier Torrecilla Reyes" width="80" />
        </figure>

        <div className="info-content">
          <h1 className="name">{contactsData.name}</h1>
          <p className="title">Ingeniero de Software</p>
        </div>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <MdAlternateEmail className="icon-email" />
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href="mailto:javiertorrecillareyes@gmail.com" className="contact-link">{contactsData.email}</a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <MdOutlinePhoneIphone className="icon-phone" />
            </div>
            <div className="contact-info">
              <p className="contact-title">Móvil</p>
              <a href="tel:+34622680875" className="contact-link">{contactsData.phone}</a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <MdOutlineCalendarMonth className="icon-calendar" />
            </div>
            <div className="contact-info">
              <p className="contact-title">Fecha de Nacimiento</p>
              <time dateTime="2003-01-16">{contactsData.date}</time>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <MdLocationOn className="icon-location" />
            </div>
            <div className="contact-info">
              <p className="contact-title">Dirección</p>
              <address>Málaga, Andalucía, España</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          <li className="social-item">
            <a href={socialsData.linkedIn} className="social-link">
              <FaLinkedin className="icon-linkedin" />
            </a>
          </li>
          <li className="social-item">
            <a href={socialsData.github} className="social-link">
              <FaGithub className="icon-github" />
            </a>
          </li>
          <li className="social-item">
            <a
              href={headerData.resumePdf}
              download='CV_Javier_Torrecilla_Reyes'
              target='_blank'
              rel='noreferrer'
              className="social-link"
            >
              <GrDocumentText className="icon-resume" />
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}


export default Sidebar;
