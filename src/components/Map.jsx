

export default function Map() {
  return (
    <section className="mapbox" data-mapbox>
      <figure>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51170.89540740528!2d-4.49046634305642!3d36.71821490105091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7259c44fdb212d%3A0x6025dc92c9ca32cf!2zTcOhbGFnYQ!5e0!3m2!1ses!2ses!4v1757499487695!5m2!1ses!2ses"
          width="100%"
          height="300"
          loading="lazy"
          title="Mapa de Málaga"
          style={{ border: 0 }}
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </figure>
    </section>
  );
}


