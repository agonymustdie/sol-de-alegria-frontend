import Link from "next/link";

export default function BlogsPage() {
  return (
    <main className="container py-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold mb-3">Blog Sol de Alegría</h1>

        <p className="text-secondary">
          Descubre consejos, ideas y recomendaciones
          para organizar celebraciones infantiles.
        </p>
      </div>

      <div className="row g-4">
        <div className="col-12 col-md-6">
          <article className="card border-0 shadow-sm h-100 overflow-hidden">
            <div className="bg-light text-center py-5">
              <span style={{ fontSize: "60px" }}>🎂</span>
            </div>

            <div className="card-body p-4 d-flex flex-column">
              <h2 className="card-title fs-4 fw-bold mb-3">
                5 ideas para un cumpleaños infantil
              </h2>

              <p className="card-text text-secondary mb-4">
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
            </div>
          </article>
        </div>

        <div className="col-12 col-md-6">
          <article className="card border-0 shadow-sm h-100 overflow-hidden">
            <div className="bg-light text-center py-5">
              <span style={{ fontSize: "60px" }}>🎈</span>
            </div>

            <div className="card-body p-4 d-flex flex-column">
              <h2 className="card-title fs-4 fw-bold mb-3">
                ¿Cómo elegir una temática?
              </h2>

              <p className="card-text text-secondary mb-4">
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
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}
