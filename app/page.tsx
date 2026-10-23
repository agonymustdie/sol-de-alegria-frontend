import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section>
        <h2>Haz de tu celebración un día inolvidable</h2>
        <p>
          En Sol de Alegría nos encargamos de crear experiencias
          especiales para celebraciones infantiles.
        </p>
        <Link href="/productos">
          <button type="button">Ver nuestros servicios</button>
        </Link>
      </section>

      <section>
        <h2>¿Qué ofrecemos?</h2>

        <article>
          <h3>Celebraciones</h3>
          <p>
            Organizamos eventos infantiles adaptados a las
            necesidades de cada cliente.
          </p>
        </article>

        <article>
          <h3>Minutas</h3>
          <p>
            Contamos con diferentes alternativas de alimentación
            para tus celebraciones.
          </p>
        </article>

        <article>
          <h3>Temáticas</h3>
          <p>
            Puedes elegir distintas temáticas para crear una
            celebración personalizada.
          </p>
        </article>
      </section>

      <section>
        <h2>¿Listo para celebrar?</h2>
        <p>
          Revisa nuestros productos y comienza a preparar
          tu próxima celebración.
        </p>
        <Link href="/productos">
          <button type="button">Comenzar</button>
        </Link>
      </section>
    </main>
  );
}
