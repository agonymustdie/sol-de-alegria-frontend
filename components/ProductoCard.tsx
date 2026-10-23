import Link from "next/link";

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
    <article>
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
      <p>Precio: ${precio.toLocaleString("es-CL")}</p>

      <Link href={`/productos/${id}`}>
        Ver detalle
      </Link>

      <div>
        <button type="button">Agregar al carrito</button>
      </div>
    </article>
  );
}
