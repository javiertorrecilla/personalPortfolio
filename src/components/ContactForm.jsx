import React, { useRef } from "react";
import { FiSend } from "react-icons/fi";

export default function ContactForm() {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(form.current);
    const name = data.get("fullname");
    const email = data.get("email");
    const message = data.get("message");

    const subject = `Mensaje de ${name}`;
    const body = `${message}\n\nDesde: ${email}`;
    const mailtoLink = `mailto:javiertorrecillareyes@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  return (
    <section className="contact-form">
      <h3 className="h3 form-title">Formulario de Contacto</h3>

      <form ref={form} onSubmit={handleSubmit} className="form">
        <div className="input-wrapper">
          <input
            type="text"
            name="fullname"
            className="form-input"
            placeholder="Nombre completo"
            required
          />
          <input
            type="email"
            name="email"
            className="form-input"
            placeholder="Correo electrónico"
            required
          />
        </div>

        <textarea
          name="message"
          className="form-input"
          placeholder="Tu mensaje"
          required
        ></textarea>

        <button className="form-btn" type="submit">
          <FiSend />
          <span>Enviar mensaje</span>
        </button>
      </form>
    </section>
  );
}
