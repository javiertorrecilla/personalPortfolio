import Map from './Map';
import ContactForm from './ContactForm';

export default function Contact() {
  return (
    <article className="contact active" data-page="contact">
          <header>
              <h2 className="h2 article-title">Contacto</h2>
          </header>
      
        <Map />
        <ContactForm />

      </article>
  );
}