import Link from "next/link";

const seccionesAdmin = [
  {
    titulo: "Mensajes",
    descripcion: "Revisa los mensajes recibidos desde el formulario de contacto.",
    href: "/admin/mensajes",
  },
  {
    titulo: "Productos",
    descripcion: "Agrega, edita y administra los productos del catálogo.",
    href: "/admin/productos",
  },
  {
    titulo: "Pedidos",
    descripcion: "Consulta los pedidos y actualiza su estado.",
    href: "/admin/pedidos",
  },
];

export default function AdminPage() {
  return (
    <main className="container py-5">
      <section className="bg-warning rounded-4 p-4 p-md-5 mb-5 shadow-sm">
        <div className="row align-items-center g-4">
          <div className="col-12 col-lg-8">
            <span className="badge bg-dark text-warning mb-3">
              ADMINISTRACIÓN
            </span>
            <h1 className="display-6 fw-bold mb-3">
              Panel de administración
            </h1>
            <p className="lead mb-0">
              Gestiona tu tienda desde un solo lugar. Elige una sección para
              comenzar.
            </p>
          </div>
          <div className="col-12 col-lg-4 text-lg-end">
            <span className="display-1" aria-hidden="true">
              ☀
            </span>
          </div>
        </div>
      </section>

      <section aria-labelledby="secciones-admin">


        <div className="row g-4">
          {seccionesAdmin.map((seccion, index) => (
            <div className="col-12 col-md-4" key={seccion.href}>
              <Link
                href={seccion.href}
                className="card border-0 border-top border-warning border-4 shadow-sm h-100 text-decoration-none text-dark"
              >
                <div className="card-body p-4 p-lg-5 d-flex flex-column">
                  <span className="badge bg-light text-dark align-self-start mb-4">
                    0{index + 1}
                  </span>
                  <h3 className="fs-3 fw-bold">{seccion.titulo}</h3>
                  <p className="text-secondary flex-grow-1 mb-4">
                    {seccion.descripcion}
                  </p>
                  <span className="fw-bold text-dark">
                    Ir a {seccion.titulo.toLowerCase()} <span aria-hidden="true">→</span>
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
