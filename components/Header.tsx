import Link from "next/link";

export default function Header() {
  return (
    <>
      <header>
        <div>
          <h1>Sol de Alegría</h1>
          <p>Celebramos momentos que quedan para siempre</p>
        </div>
      </header>

      <nav>
        <Link href="/">Inicio</Link>
        <Link href="/productos">Productos</Link>
        <Link href="/nosotros">Nosotros</Link>
        <Link href="/blogs">Blog</Link>
        <Link href="/contacto">Contacto</Link>
        <Link href="/login">Iniciar sesión</Link>
        <Link href="/registro">Registrarse</Link>
        <Link href="/carrito">Carrito</Link>
      </nav>
    </>
  );
}
