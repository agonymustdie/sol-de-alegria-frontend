import Link from "next/link";
import BotonCarrito from "./BotonCarrito";

type ProductoCardProps = {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
};

export default function ProductoCard({
  id,
  nombre,
  descripcion,
  precio,
}: ProductoCardProps) {
  return (
    <article className="card h-100 border-0 shadow-sm overflow-hidden">
      <div className="bg-light text-center py-5">
        <span className="fs-1">🎉</span>
      </div>

      <div className="card-body d-flex flex-column p-4">
        <h3 className="card-title fs-5 fw-bold mb-3">
          {nombre}
        </h3>

        <p className="card-text text-secondary mb-3">
          {descripcion}
        </p>

        <p className="precio-nuevo mt-auto mb-3">
          ${precio.toLocaleString("es-CL")}
        </p>

        <Link
          href={`/productos/${id}`}
          className="btn btn-outline-dark mb-2"
        >
          Ver detalle
        </Link>

        <BotonCarrito
          id={id}
          nombre={nombre}
          precio={precio}
        />
      </div>
    </article>
  );
}
