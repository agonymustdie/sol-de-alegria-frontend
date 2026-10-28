"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { productos as productosIniciales } from "../../../data/productos";

export default function AdminProductosPage() {
  const [productos, setProductos] = useState(productosIniciales);
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const [idEditar, setIdEditar] = useState<number | null>(null);
  const [cargado, setCargado] = useState(false);

  useEffect(() => {
    const guardados = localStorage.getItem("productos");

    if (guardados !== null) {
      setProductos(JSON.parse(guardados));
    }

    setCargado(true);
  }, []);

  useEffect(() => {
    if (cargado) {
      localStorage.setItem("productos", JSON.stringify(productos));
    }
  }, [productos, cargado]);

  function agregarProducto(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!nombre.trim() || !descripcion.trim() || !precio) {
      alert("Debes completar todos los campos");
      return;
    }

    if (Number(precio) <= 0) {
      alert("El precio debe ser mayor que cero");
      return;
    }

    if (idEditar !== null) {
      const actualizados = productos.map((producto) => {
        if (producto.id === idEditar) {
          return {
            ...producto,
            nombre,
            descripcion,
            precio: Number(precio),
          };
        }

        return producto;
      });

      setProductos(actualizados);
      setIdEditar(null);
      alert("Producto actualizado correctamente");
    } else {
      const nuevoProducto = {
        id: Date.now(),
        nombre,
        descripcion,
        precio: Number(precio),
      };

      setProductos([...productos, nuevoProducto]);
      alert("Producto agregado correctamente");
    }

    setNombre("");
    setDescripcion("");
    setPrecio("");
  }

  function eliminarProducto(id: number) {
    const confirmar = window.confirm(
      "¿Estás seguro de que deseas eliminar este producto?"
    );

    if (confirmar) {
      const actualizados = productos.filter(
        (producto) => producto.id !== id
      );

      setProductos(actualizados);
      alert("Producto eliminado correctamente");
    }
  }

  function editarProducto(id: number) {
    const producto = productos.find(
      (producto) => producto.id === id
    );

    if (producto) {
      setIdEditar(producto.id);
      setNombre(producto.nombre);
      setDescripcion(producto.descripcion);
      setPrecio(producto.precio.toString());
    }
  }

  function cancelarEdicion() {
    setIdEditar(null);
    setNombre("");
    setDescripcion("");
    setPrecio("");
  }

  return (
    <main className="container py-5">
      <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4">
        <div>
          <h1 className="fw-bold mb-2">
            Administración de productos
          </h1>

          <p className="text-secondary mb-0">
            Gestiona los productos de Sol de Alegría.
          </p>
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
                Total de productos
              </h2>

              <p className="fs-2 fw-bold mb-0">
                {productos.length}
              </p>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4">
              <h2 className="fs-6 text-secondary">
                Estado del catálogo
              </h2>

              <span className="badge bg-success">
                {productos.length > 0 ? "Con productos" : "Sin productos"}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="row g-4">
        <div className="col-12 col-lg-4">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4">
              <h2 className="fs-5 fw-bold mb-4">
                {idEditar !== null
                  ? "Editar producto"
                  : "Agregar producto"}
              </h2>

              <form onSubmit={agregarProducto}>
                <div className="mb-3">
                  <label htmlFor="nombre" className="form-label">
                    Nombre
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
                  <label htmlFor="descripcion" className="form-label">
                    Descripción
                  </label>

                  <textarea
                    id="descripcion"
                    className="form-control"
                    rows={3}
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="precio" className="form-label">
                    Precio
                  </label>

                  <input
                    id="precio"
                    type="number"
                    min="1"
                    className="form-control"
                    value={precio}
                    onChange={(e) => setPrecio(e.target.value)}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-warning w-100"
                >
                  {idEditar !== null
                    ? "Guardar cambios"
                    : "Agregar producto"}
                </button>

                {idEditar !== null && (
                  <button
                    type="button"
                    className="btn btn-outline-secondary w-100 mt-2"
                    onClick={cancelarEdicion}
                  >
                    Cancelar edición
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-8">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4">
              <h2 className="fs-5 fw-bold mb-4">
                Lista de productos
              </h2>

              <div className="table-responsive">
                <table className="table table-striped table-hover align-middle">
                  <thead className="table-dark">
                    <tr>
                      <th>ID</th>
                      <th>Nombre</th>
                      <th>Precio</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>

                  <tbody>
                    {productos.map((producto) => (
                      <tr key={producto.id}>
                        <td>{producto.id}</td>

                        <td>{producto.nombre}</td>

                        <td>
                          ${producto.precio.toLocaleString("es-CL")}
                        </td>

                        <td>
                          <div className="d-flex flex-wrap gap-2">
                            <button
                              type="button"
                              className="btn btn-warning btn-sm"
                              onClick={() => editarProducto(producto.id)}
                            >
                              Editar
                            </button>

                            <button
                              type="button"
                              className="btn btn-outline-danger btn-sm"
                              onClick={() => eliminarProducto(producto.id)}
                            >
                              Eliminar
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {productos.length === 0 && (
                <div className="alert alert-info text-center mt-3">
                  No hay productos registrados.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
