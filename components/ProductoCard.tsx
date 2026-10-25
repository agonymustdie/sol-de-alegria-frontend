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
    <article className="card h-100 shadow-sm border-0 m-0 w-100 p-0 text-start">
      <div className="card-body d-flex flex-column p-4">
        <h3 className="card-title fs-5">{nombre}</h3>

        <p className="card-text text-secondary">{descripcion}</p>

        <p className="fw-bold fs-5 mt-auto">
          ${precio.toLocaleString("es-CL")}
        </p>

        <Link
          href={`/productos/${id}`}
          className="btn btn-outline-secondary mb-2"
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
