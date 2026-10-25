import Link from "next/link";

export default function BlogsPage() {
  return (
    <main className="container py-5">
      <section className="py-4">
        <h2 className="mb-3">Blog Sol de Alegría</h2>

        <p>
          Descubre consejos, ideas y recomendaciones
          para organizar celebraciones infantiles.
        </p>
      </section>

      <section className="py-4">
        <div className="row g-4">
          <div className="col-12 col-md-6">
            <article className="card p-4 shadow-sm h-100 w-100">
              <h3 className="fs-5">
                5 ideas para un cumpleaños infantil
              </h3>

              <p>
                Descubre algunas ideas sencillas para
                transformar un cumpleaños en una celebración
                entretenida y especial.
              </p>

              <Link
                href="/blogs/1"
                className="btn btn-warning mt-auto"
              >
                Leer artículo
              </Link>
            </article>
          </div>

          <div className="col-12 col-md-6">
            <article className="card p-4 shadow-sm h-100 w-100">
              <h3 className="fs-5">
                ¿Cómo elegir una temática?
              </h3>

              <p>
                Elegir una temática puede ser una de las
                partes más entretenidas al organizar una
                celebración infantil.
              </p>

              <Link
                href="/blogs/2"
                className="btn btn-warning mt-auto"
              >
                Leer artículo
              </Link>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
