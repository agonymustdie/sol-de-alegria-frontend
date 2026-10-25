import Link from "next/link";
import { notFound } from "next/navigation";
import { productos } from "../../../data/productos";
import BotonCarrito from "../../../components/BotonCarrito";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ProductoDetalle({ params }: Props) {
    
  const { id } = await params;

  const producto = productos.find(
    (producto) => producto.id === Number(id)
  );

  if (!producto) {
    notFound();
  }

    return (
    <main className="container py-5">
        <section className="py-4">
        <h2 className="mb-3">Detalle del producto</h2>
        <p className="text-secondary mb-4">
            Conoce nuestros productos y servicios para tu celebración.
        </p>

        <div className="card shadow-sm border-0 mx-auto text-start" style={{ maxWidth: "650px" }}>
            <div className="card-body p-4">
            <h3 className="fs-3 mb-3">{producto.nombre}</h3>

            <p className="text-secondary mb-4">
                {producto.descripcion}
            </p>

            <h4 className="fw-bold mb-4">
                ${producto.precio.toLocaleString("es-CL")}
            </h4>

            <div className="d-grid gap-2">
                <BotonCarrito id={producto.id} nombre={producto.nombre} precio={producto.precio}/>
                <Link href="/productos" className="btn btn-outline-secondary">
                Volver a productos
                </Link>
            </div>
            </div>
        </div>
        </section>
    </main>
    );
}
