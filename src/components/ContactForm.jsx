import { useState } from "react";
import { FiSend } from "react-icons/fi";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="contact-form">
      <h3 className="h3 form-title">Formulario de Contacto</h3>

      <form
        className="form"
        action="https://formsubmit.co/javiertorrecillareyes@gmail.com"
        method="POST"
      >
        <div className="input-wrapper">
          <input
            type="text"
            name="nombre"
            className="form-input"
            placeholder="Nombre completo"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            className="form-input"
            placeholder="Correo electrónico"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <textarea
          name="mensaje"
          className="form-input"
          placeholder="Tu mensaje"
          rows="5"
          value={formData.mensaje}
          onChange={handleChange}
          required
        />

        <button className="form-btn" type="submit">
          <FiSend />
          <span>Enviar mensaje</span>
        </button>

        {/* Campos ocultos de FormSubmit */}
        <input type="hidden" name="_next" value="https://javiertorrecilla-portfolio.vercel.app/" />
        <input type="hidden" name="_captcha" value="false" />
        <input
          type="hidden"
          name="_subject"
          value="Nuevo mensaje desde Portfolio"
        />
        <input type="hidden" name="_template" value="table" />
      </form>
    </section>
  );
};

export default ContactForm;
