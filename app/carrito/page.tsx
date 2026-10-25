"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type ProductoCarrito = {
  id: number;
  nombre: string;
  precio: number;
  cantidad: number;
};

export default function CarritoPage() {
  const [carrito, setCarrito] = useState<ProductoCarrito[]>([]);

    useEffect(() => {
    const guardados = localStorage.getItem("carrito");

    if (guardados) {
        setCarrito(JSON.parse(guardados));
    } else {
        setCarrito([]);
    }
    }, []);

  function eliminarProducto(id: number) {
    const actualizado = carrito.filter(
      (producto) => producto.id !== id
    );

    setCarrito(actualizado);
    localStorage.setItem("carrito", JSON.stringify(actualizado));
  }

  function cambiarCantidad(id: number, cambio: number) {
    const actualizado = carrito.map((producto) => {
      if (producto.id === id) {
        return {
          ...producto,
          cantidad: Math.max(1, producto.cantidad + cambio),
        };
      }

      return producto;
    });

    setCarrito(actualizado);
    localStorage.setItem("carrito", JSON.stringify(actualizado));
  }

  const total = carrito.reduce(
    (suma, producto) => suma + producto.precio * producto.cantidad,
    0
  );

  return (
    <main className="container py-5">
      <section className="py-4">
        <h2 className="mb-4">Carrito de compras</h2>

        {carrito.length === 0 ? (
          <p>Tu carrito está vacío.</p>
        ) : (
          <div>
            {carrito.map((producto) => (
              <div
                key={producto.id}
                className="card mb-3 p-3 text-start"
              >
                <h3 className="fs-5">{producto.nombre}</h3>

                <p>
                  Precio: ${producto.precio.toLocaleString("es-CL")}
                </p>

                <div className="d-flex align-items-center gap-3 mb-3">
                  <span>Cantidad:</span>

                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={() => cambiarCantidad(producto.id, -1)}
                  >
                    -
                  </button>

                  <span>{producto.cantidad}</span>

                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={() => cambiarCantidad(producto.id, 1)}
                  >
                    +
                  </button>
                </div>

                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => eliminarProducto(producto.id)}
                >
                  Eliminar
                </button>
              </div>
            ))}

            <h3 className="mt-4">
              Total: ${total.toLocaleString("es-CL")}
            </h3>
            <Link href="/checkout" className="btn btn-warning mt-3">
                Finalizar compra
            </Link>
          </div>
        )}
      </section>
    </main>
  );
}
