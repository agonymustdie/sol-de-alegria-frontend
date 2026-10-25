import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="bg-warning text-center py-5">
        <div className="container py-4">
          <h1 className="display-5 fw-bold mb-3">
            Haz de tu celebración un día inolvidable
          </h1>

          <p className="lead mb-4">
            En Sol de Alegría nos encargamos de crear experiencias
            especiales para celebraciones infantiles.
          </p>

          <Link href="/productos" className="btn btn-dark btn-lg">
            Ver nuestros servicios
          </Link>
        </div>
      </section>

      <section className="container py-5">
        <h2 className="text-center fw-bold mb-4">
          ¿Qué ofrecemos?
        </h2>

        <div className="row g-4">
          <div className="col-12 col-md-4">
            <div className="card h-100 text-center">
              <div className="card-body p-4">
                <h3 className="card-title fs-4 mb-3">
                  Celebraciones
                </h3>

                <p className="card-text">
                  Organizamos eventos infantiles adaptados a las
                  necesidades de cada cliente.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="card h-100 text-center">
              <div className="card-body p-4">
                <h3 className="card-title fs-4 mb-3">
                  Minutas
                </h3>

                <p className="card-text">
                  Contamos con diferentes alternativas de alimentación
                  para tus celebraciones.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="card h-100 text-center">
              <div className="card-body p-4">
                <h3 className="card-title fs-4 mb-3">
                  Temáticas
                </h3>

                <p className="card-text">
                  Puedes elegir distintas temáticas para crear una
                  celebración personalizada.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container text-center py-5">
        <div className="bg-white rounded shadow-sm p-5">
          <h2 className="fw-bold mb-3">
            ¿Listo para celebrar?
          </h2>

          <p className="mb-4">
            Revisa nuestros productos y comienza a preparar
            tu próxima celebración.
          </p>

          <Link href="/productos" className="btn btn-warning btn-lg">
            Comenzar
          </Link>
        </div>
      </section>
    </main>
  );
}
