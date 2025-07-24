

export default function Map() {
  return (
    <section className="mapbox" data-mapbox>
      <figure>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3183.625905511212!2d-4.428055284587129!3d36.721261679964794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72f79cd7e05fbf%3A0x4bb92df7580129e6!2sM%C3%A1laga!5e0!3m2!1ses!2ses!4v1699983212345!5m2!1ses!2ses"
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
