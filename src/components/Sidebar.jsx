import '../styles.css';

import { MdAlternateEmail, MdOutlinePhoneIphone, MdOutlineCalendarMonth, MdLocationOn } from 'react-icons/md';

import fotoPersonal from '../assets/png/fotoPersonal.png';

function Sidebar() {
  return (
    <aside className="sidebar active">
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src={fotoPersonal} alt="Javier Torrecilla Reyes" width="80" />
        </figure>

        <div className="info-content">
          <h1 className="name">Javier Torrecilla Reyes</h1>
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
              <a href="mailto:javiertorrecillareyes@gmail.com" className="contact-link">javiertorrecillareyes@gmail.com</a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <MdOutlinePhoneIphone className="icon-phone" />
            </div>
            <div className="contact-info">
              <p className="contact-title">Móvil</p>
              <a href="tel:+12133522795" className="contact-link">+34 622680875</a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <MdOutlineCalendarMonth className="icon-calendar" />
            </div>
            <div className="contact-info">
              <p className="contact-title">Fecha de Nacimiento</p>
              <time dateTime="1982-06-23">16/01/2003</time>
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
            <a href="#" className="social-link">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
          </li>
          <li className="social-item">
            <a href="#" className="social-link">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
