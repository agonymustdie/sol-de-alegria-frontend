export default function NosotrosPage() {
  return (
    <main className="container py-5">
      <section className="py-4">
        <h2 className="mb-3">¿Quiénes somos?</h2>

        <p>
          Sol de Alegría es un emprendimiento dedicado a la
          organización y realización de eventos infantiles.
        </p>

        <p>
          Buscamos entregar experiencias entretenidas y
          personalizadas para que cada celebración sea
          un momento especial.
        </p>
      </section>

      <section className="py-4">
        <h2 className="mb-4">Nuestra misión</h2>

        <div className="row g-4">
          <div className="col-12 col-md-4">
            <article className="card p-4 shadow-sm h-100 w-100">
              <h3 className="fs-5">Crear experiencias</h3>
              <p>
                Trabajamos para ofrecer celebraciones
                adaptadas a las necesidades de cada cliente.
              </p>
            </article>
          </div>

          <div className="col-12 col-md-4">
            <article className="card p-4 shadow-sm h-100 w-100">
              <h3 className="fs-5">Calidad</h3>
              <p>
                Buscamos entregar productos y servicios
                de calidad para cada evento.
              </p>
            </article>
          </div>

          <div className="col-12 col-md-4">
            <article className="card p-4 shadow-sm h-100 w-100">
              <h3 className="fs-5">Familias</h3>
              <p>
                Queremos que las familias puedan disfrutar
                de sus celebraciones sin preocuparse por
                todos los detalles de la organización.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
