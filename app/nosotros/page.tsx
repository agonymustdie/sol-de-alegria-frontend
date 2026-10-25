import Link from "next/link";

export default function NosotrosPage() {
  return (
    <main className="container py-5">
      <section className="text-center mb-5">
        <h1 className="fw-bold mb-3">¿Quiénes somos?</h1>

        <p className="lead text-secondary mx-auto" style={{ maxWidth: "750px" }}>
          Sol de Alegría es un emprendimiento dedicado a la
          organización y realización de eventos infantiles.
        </p>

        <p className="text-secondary mx-auto" style={{ maxWidth: "750px" }}>
          Buscamos entregar experiencias entretenidas y
          personalizadas para que cada celebración sea
          un momento especial.
        </p>
      </section>

      <section className="py-4">
        <h2 className="fw-bold text-center mb-4">
          Nuestra misión
        </h2>

        <div className="row g-4">
          <div className="col-12 col-md-4">
            <article className="card border-0 shadow-sm h-100">
              <div className="card-body p-4 text-center">
                <div className="fs-1 mb-3">🎉</div>

                <h3 className="fs-5 fw-bold mb-3">
                  Crear experiencias
                </h3>

                <p className="text-secondary mb-0">
                  Trabajamos para ofrecer celebraciones
                  adaptadas a las necesidades de cada cliente.
                </p>
              </div>
            </article>
          </div>

          <div className="col-12 col-md-4">
            <article className="card border-0 shadow-sm h-100">
              <div className="card-body p-4 text-center">
                <div className="fs-1 mb-3">⭐</div>

                <h3 className="fs-5 fw-bold mb-3">
                  Calidad
                </h3>

                <p className="text-secondary mb-0">
                  Buscamos entregar productos y servicios
                  de calidad para cada evento.
                </p>
              </div>
            </article>
          </div>

          <div className="col-12 col-md-4">
            <article className="card border-0 shadow-sm h-100">
              <div className="card-body p-4 text-center">
                <div className="fs-1 mb-3">❤️</div>

                <h3 className="fs-5 fw-bold mb-3">
                  Familias
                </h3>

                <p className="text-secondary mb-0">
                  Queremos que las familias puedan disfrutar
                  de sus celebraciones sin preocuparse por
                  todos los detalles de la organización.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="bg-warning rounded p-4 p-md-5 text-center">
          <h2 className="fw-bold mb-3">
            Celebra con nosotros
          </h2>

          <p className="mb-4">
            Conoce nuestros productos y servicios para preparar
            una celebración inolvidable.
          </p>

          <Link href="/productos" className="btn btn-dark">
            Ver nuestros servicios
          </Link>
        </div>
      </section>
    </main>
  );
}
