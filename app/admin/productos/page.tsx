"use client";

import { useEffect, useState } from "react";
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
        const producto = productos.find((producto) => producto.id === id);

        if (producto) {
            setIdEditar(producto.id);
            setNombre(producto.nombre);
            setDescripcion(producto.descripcion);
            setPrecio(producto.precio.toString());
        }
    }


  return (
    <main className="container py-5">
      <section className="py-4">
        <h2 className="mb-3">Administración de productos</h2>

        <p className="mb-4">
          Gestiona los productos de Sol de Alegría.
        </p>

        <div className="card p-4 shadow-sm mb-4">
          <h3 className="fs-5 mb-3">Agregar producto</h3>

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
              <input
                id="descripcion"
                type="text"
                className="form-control"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
              />
            </div>

            <div className="mb-3">
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

            <button type="submit" className="btn btn-warning">
                {idEditar !== null ? "Guardar cambios" : "Agregar producto"}
            </button>
          </form>
        </div>

        <div className="card p-4 shadow-sm">
          <h3 className="fs-5 mb-3">Lista de productos</h3>

          <div className="table-responsive">
            <table className="table table-striped">
              <thead>
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
                    <td>${producto.precio.toLocaleString("es-CL")}</td>
                    <td>
                        <button
                            type="button"
                            className="btn btn-warning btn-sm me-2"
                            onClick={() => editarProducto(producto.id)}
                        >
                            Editar
                        </button>

                        <button
                            type="button"
                            className="btn btn-danger btn-sm"
                            onClick={() => eliminarProducto(producto.id)}
                        >
                            Eliminar
                        </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}
