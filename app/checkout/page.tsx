"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type ProductoCarrito = {
  id: number;
  nombre: string;
  precio: number;
  cantidad: number;
};

export default function CheckoutPage() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");
  const [carrito, setCarrito] = useState<ProductoCarrito[]>([]);

  useEffect(() => {
    const guardados = localStorage.getItem("carrito");

    if (guardados) {
      setCarrito(JSON.parse(guardados));
    }
  }, []);

  const total = carrito.reduce(
    (suma, producto) => suma + producto.precio * producto.cantidad,
    0
  );

  function confirmarCompra(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!nombre.trim() || !correo.trim() || !telefono.trim() || !direccion.trim()) {
      alert("Debes completar todos los campos");
      return;
    }

    if (!correo.includes("@")) {
      alert("Ingresa un correo válido");
      return;
    }

    const guardadosCarrito = localStorage.getItem("carrito");
    const productos = guardadosCarrito
      ? JSON.parse(guardadosCarrito)
      : [];

    if (productos.length === 0) {
      alert("Tu carrito está vacío");
      return;
    }

    const pedido = {
      nombre,
      correo,
      telefono,
      direccion,
      productos,
      fecha: new Date().toLocaleString("es-CL"),
      estado: "Pendiente",
    };

    const guardados = localStorage.getItem("pedidos");
    const pedidos = guardados ? JSON.parse(guardados) : [];

    pedidos.push(pedido);

    localStorage.setItem("pedidos", JSON.stringify(pedidos));
    localStorage.removeItem("carrito");

    setCarrito([]);
    setNombre("");
    setCorreo("");
    setTelefono("");
    setDireccion("");

    alert("¡Compra realizada correctamente!");
  }

  return (
    <main className="container py-5">
      <h1 className="fw-bold mb-3">Finalizar compra</h1>

      <p className="text-secondary mb-4">
        Completa tus datos para confirmar tu pedido.
      </p>

      <div className="row g-4">
        <div className="col-12 col-lg-7">
          <form
            onSubmit={confirmarCompra}
            className="card border-0 shadow-sm p-4"
          >
            <h2 className="fs-5 fw-bold mb-4">
              Datos del cliente
            </h2>

            <div className="mb-3">
              <label htmlFor="nombre" className="form-label">
                Nombre completo
              </label>
              <input
                id="nombre"
                type="text"
                className="form-control"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="correo" className="form-label">
                Correo electrónico
              </label>
              <input
                id="correo"
                type="email"
                className="form-control"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="telefono" className="form-label">
                Teléfono
              </label>
              <input
                id="telefono"
                type="tel"
                className="form-control"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="direccion" className="form-label">
                Dirección
              </label>
              <input
                id="direccion"
                type="text"
                className="form-control"
                value={direccion}
                onChange={(e) => setDireccion(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="btn btn-warning"
              disabled={carrito.length === 0}
            >
              Confirmar compra
            </button>
          </form>
        </div>

        <div className="col-12 col-lg-5">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4">
              <h2 className="fs-5 fw-bold mb-4">
                Resumen del pedido
              </h2>

              {carrito.length === 0 ? (
                <p className="text-secondary">
                  No tienes productos en el carrito.
                </p>
              ) : (
                carrito.map((producto) => (
                  <div
                    key={producto.id}
                    className="d-flex justify-content-between gap-3 mb-3"
                  >
                    <span>
                      {producto.nombre} x {producto.cantidad}
                    </span>

                    <span>
                      ${(producto.precio * producto.cantidad).toLocaleString("es-CL")}
                    </span>
                  </div>
                ))
              )}

              <hr />

              <div className="d-flex justify-content-between fw-bold fs-5">
                <span>Total</span>
                <span>${total.toLocaleString("es-CL")}</span>
              </div>

              <Link
                href="/carrito"
                className="btn btn-outline-dark w-100 mt-4"
              >
                Volver al carrito
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
