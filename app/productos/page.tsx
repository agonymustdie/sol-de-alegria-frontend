import ProductoCard from "../../components/ProductoCard";
import { productos } from "../../data/productos";

export default function ProductosPage() {
  return (
    <main className="container py-5">
      <section className="text-center py-4">
        <h2 className="mb-3">Nuestros productos</h2>
        <p>
          Encuentra diferentes productos y servicios para hacer de tu
          celebración un momento especial.
        </p>
      </section>

      <section className="py-4">
        <div className="row g-4">
          {productos.map((producto) => (
            <div
              key={producto.id}
              className="col-12 col-md-6 col-lg-4"
            >
              <ProductoCard
                id={producto.id}
                nombre={producto.nombre}
                descripcion={producto.descripcion}
                precio={producto.precio}
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
