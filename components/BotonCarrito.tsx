"use client";

type BotonCarritoProps = {
  id: number;
  nombre: string;
  precio: number;
};

type ProductoCarrito = {
  id: number;
  nombre: string;
  precio: number;
  cantidad: number;
};

export default function BotonCarrito({
  id,
  nombre,
  precio,
}: BotonCarritoProps) {
  function agregarAlCarrito() {
    const guardados = localStorage.getItem("carrito");

    const carrito: ProductoCarrito[] = guardados
      ? JSON.parse(guardados)
      : [];

    const existente = carrito.find((producto) => producto.id === id);

    if (existente) {
      existente.cantidad += 1;
    } else {
      carrito.push({
        id,
        nombre,
        precio,
        cantidad: 1,
      });
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));

    alert("Producto agregado al carrito");
  }

  return (
    <button
      type="button"
      className="btn btn-warning"
      onClick={agregarAlCarrito}
    >
      Agregar al carrito
    </button>
  );
}
