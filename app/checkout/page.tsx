"use client";

import { useState } from "react";

export default function CheckoutPage() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");

  function obtenerCarrito() {
    const guardados = localStorage.getItem("carrito");
    return guardados ? JSON.parse(guardados) : [];
  }

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

    const carrito = obtenerCarrito();

    if (carrito.length === 0) {
      alert("Tu carrito está vacío");
      return;
    }

    const pedido = {
      nombre,
      correo,
      telefono,
      direccion,
      productos: carrito,
      fecha: new Date().toLocaleString("es-CL"),
    };

    const guardados = localStorage.getItem("pedidos");
    const pedidos = guardados ? JSON.parse(guardados) : [];

    pedidos.push(pedido);

    localStorage.setItem("pedidos", JSON.stringify(pedidos));
    localStorage.removeItem("carrito");

    alert("¡Compra realizada correctamente!");

    setNombre("");
    setCorreo("");
    setTelefono("");
    setDireccion("");
  }

  return (
    <main className="container py-5">
      <section className="py-4">
        <h2 className="mb-3">Finalizar compra</h2>
        <p className="mb-4">
          Completa tus datos para confirmar tu pedido.
        </p>

        <form
          onSubmit={confirmarCompra}
          className="card p-4 shadow-sm mx-auto"
          style={{ maxWidth: "600px" }}
        >
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

          <button type="submit" className="btn btn-warning">
            Confirmar compra
          </button>
        </form>
      </section>
    </main>
  );
}
