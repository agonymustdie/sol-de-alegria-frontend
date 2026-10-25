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
      <h1 className="fw-bold mb-3">Carrito de compras</h1>

      <p className="text-secondary mb-4">
        Revisa tus productos antes de finalizar la compra.
      </p>

      {carrito.length === 0 ? (
        <div className="alert alert-info text-center p-4">
          <p className="mb-3">Tu carrito está vacío.</p>

          <Link href="/productos" className="btn btn-warning">
            Ver productos
          </Link>
        </div>
      ) : (
        <div className="row g-4">
          <div className="col-12 col-lg-8">
            {carrito.map((producto) => (
              <div
                key={producto.id}
                className="card border-0 shadow-sm mb-3"
              >
                <div className="card-body p-4">
                  <div className="d-flex justify-content-between align-items-start gap-3">
                    <div>
                      <h2 className="fs-5 fw-bold">
                        {producto.nombre}
                      </h2>

                      <p className="text-secondary mb-3">
                        Precio unitario: $
                        {producto.precio.toLocaleString("es-CL")}
                      </p>
                    </div>

                    <button
                      type="button"
                      className="btn btn-outline-danger btn-sm"
                      onClick={() => eliminarProducto(producto.id)}
                    >
                      Eliminar
                    </button>
                  </div>

                  <div className="d-flex flex-wrap align-items-center gap-3">
                    <span>Cantidad:</span>

                    <div className="d-flex align-items-center gap-3">
                      <button
                        type="button"
                        className="btn btn-outline-secondary btn-sm"
                        onClick={() => cambiarCantidad(producto.id, -1)}
                      >
                        -
                      </button>

                      <span>{producto.cantidad}</span>

                      <button
                        type="button"
                        className="btn btn-outline-secondary btn-sm"
                        onClick={() => cambiarCantidad(producto.id, 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <hr />

                  <p className="fw-bold mb-0">
                    Subtotal: $
                    {(producto.precio * producto.cantidad).toLocaleString("es-CL")}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="col-12 col-lg-4">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4">
                <h2 className="fs-5 fw-bold mb-4">
                  Resumen de compra
                </h2>

                <div className="d-flex justify-content-between mb-3">
                  <span>Productos</span>
                  <span>
                    {carrito.reduce(
                      (suma, producto) => suma + producto.cantidad,
                      0
                    )}
                  </span>
                </div>

                <hr />

                <div className="d-flex justify-content-between fw-bold fs-5 mb-4">
                  <span>Total</span>
                  <span>${total.toLocaleString("es-CL")}</span>
                </div>

                <Link
                  href="/checkout"
                  className="btn btn-warning w-100 mb-2"
                >
                  Finalizar compra
                </Link>

                <Link
                  href="/productos"
                  className="btn btn-outline-dark w-100"
                >
                  Seguir comprando
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
