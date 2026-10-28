"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

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
      <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4">
        <div>
          <h1 className="fw-bold mb-2">
            Administración de pedidos
          </h1>
        </div>

        <Link href="/admin" className="btn btn-dark">
          Volver
        </Link>
      </div>

      <div className="row g-4 mb-4">
        <div className="col-12 col-md-6">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4">
              <h2 className="fs-6 text-secondary">
                Total de pedidos
              </h2>

              <p className="fs-2 fw-bold mb-0">
                {pedidos.length}
              </p>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4">
              <h2 className="fs-6 text-secondary">
                Pedidos pendientes
              </h2>

              <p className="fs-2 fw-bold mb-0">
                {pedidos.filter(
                  (pedido) =>
                    !pedido.estado || pedido.estado === "Pendiente"
                ).length}
              </p>
            </div>
          </div>
        </div>
      </div>

      {pedidos.length === 0 ? (
        <div className="card border-0 shadow-sm p-4 text-center">
          <p className="text-secondary mb-0">
            No hay pedidos registrados.
          </p>
        </div>
      ) : (
        <div className="row g-4">
          {pedidos.map((pedido, index) => (
            <div key={index} className="col-12">
              <div className="card border-0 shadow-sm">
                <div className="card-header bg-dark text-white p-3">
                  <h2 className="fs-5 mb-0">
                    Pedido #{index + 1}
                  </h2>
                </div>

                <div className="card-body p-4">
                  <div className="row g-4">
                    <div className="col-12 col-lg-6">
                      <h3 className="fs-5 fw-bold mb-3">
                        Datos del cliente
                      </h3>

                      <p>
                        <strong>Cliente:</strong> {pedido.nombre}
                      </p>

                      <p>
                        <strong>Correo:</strong> {pedido.correo}
                      </p>

                      <p>
                        <strong>Teléfono:</strong> {pedido.telefono}
                      </p>

                      <p>
                        <strong>Dirección:</strong> {pedido.direccion}
                      </p>

                      <p>
                        <strong>Fecha:</strong> {pedido.fecha}
                      </p>
                    </div>

                    <div className="col-12 col-lg-6">
                      <h3 className="fs-5 fw-bold mb-3">
                        Estado del pedido
                      </h3>

                      <div className="mb-4">
                        <label
                          htmlFor={`estado-${index}`}
                          className="form-label"
                        >
                          Seleccionar estado
                        </label>

                        <select
                          id={`estado-${index}`}
                          className="form-select"
                          value={pedido.estado || "Pendiente"}
                          onChange={(e) =>
                            cambiarEstado(index, e.target.value)
                          }
                        >
                          <option value="Pendiente">
                            Pendiente
                          </option>

                          <option value="En preparación">
                            En preparación
                          </option>

                          <option value="Entregado">
                            Entregado
                          </option>
                        </select>
                      </div>

                      <h3 className="fs-5 fw-bold mb-3">
                        Productos
                      </h3>

                      <div className="table-responsive">
                        <table className="table table-striped align-middle">
                          <thead className="table-dark">
                            <tr>
                              <th>Producto</th>
                              <th>Cantidad</th>
                              <th>Precio</th>
                            </tr>
                          </thead>

                          <tbody>
                            {pedido.productos.map((producto) => (
                              <tr key={producto.id}>
                                <td>{producto.nombre}</td>

                                <td>{producto.cantidad}</td>

                                <td>
                                  ${producto.precio.toLocaleString("es-CL")}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>

                      <p className="fs-5 fw-bold text-end mt-3 mb-0">
                        Total: $
                        {pedido.productos
                          .reduce(
                            (total, producto) =>
                              total +
                              producto.precio * producto.cantidad,
                            0
                          )
                          .toLocaleString("es-CL")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
