"use client";

import { useEffect, useState } from "react";

type ProductoPedido = {
  id: number;
  nombre: string;
  precio: number;
  cantidad: number;
};

type Pedido = {
  nombre: string;
  correo: string;
  telefono: string;
  direccion: string;
  productos: ProductoPedido[];
  fecha: string;
  estado?: string;
};

export default function AdminPedidosPage() {
  const [pedidos, setPedidos] = useState<Pedido[]>([]);

  useEffect(() => {
    const guardados = localStorage.getItem("pedidos");

    if (guardados) {
      setPedidos(JSON.parse(guardados));
    }
  }, []);

  function cambiarEstado(index: number, nuevoEstado: string) {
    const actualizados = pedidos.map((pedido, i) => {
      if (i === index) {
        return {
          ...pedido,
          estado: nuevoEstado,
        };
      }

      return pedido;
    });

    setPedidos(actualizados);
    localStorage.setItem("pedidos", JSON.stringify(actualizados));
  }

  return (
    <main className="container py-5">
      <section className="py-4">
        <h2 className="mb-3">Administración de pedidos</h2>

        <p className="mb-4">
          Revisa los pedidos realizados en Sol de Alegría.
        </p>

        {pedidos.length === 0 ? (
          <p>No hay pedidos registrados.</p>
        ) : (
          pedidos.map((pedido, index) => (
            <div key={index} className="card p-4 shadow-sm mb-4">
              <h3 className="fs-5 mb-3">
                Pedido #{index + 1}
              </h3>

              <p><strong>Cliente:</strong> {pedido.nombre}</p>
              <p><strong>Correo:</strong> {pedido.correo}</p>
              <p><strong>Teléfono:</strong> {pedido.telefono}</p>
              <p><strong>Dirección:</strong> {pedido.direccion}</p>
              <p><strong>Fecha:</strong> {pedido.fecha}</p>

              <div className="mb-3">
                <label
                  htmlFor={`estado-${index}`}
                  className="form-label fw-bold"
                >
                  Estado del pedido:
                </label>

                <select
                  id={`estado-${index}`}
                  className="form-select"
                  value={pedido.estado || "Pendiente"}
                  onChange={(e) => cambiarEstado(index, e.target.value)}
                >
                  <option value="Pendiente">Pendiente</option>
                  <option value="En preparación">En preparación</option>
                  <option value="Entregado">Entregado</option>
                </select>
              </div>

              <h4 className="fs-6 mt-3">Productos:</h4>

              <ul>
                {pedido.productos.map((producto) => (
                  <li key={producto.id}>
                    {producto.nombre} - Cantidad: {producto.cantidad}
                    {" - "}
                    ${producto.precio.toLocaleString("es-CL")}
                  </li>
                ))}
              </ul>

              <h4 className="fs-5 mt-3">
                Total: $
                {pedido.productos
                  .reduce(
                    (total, producto) =>
                      total + producto.precio * producto.cantidad,
                    0
                  )
                  .toLocaleString("es-CL")}
              </h4>
            </div>
          ))
        )}
      </section>
    </main>
  );
}
