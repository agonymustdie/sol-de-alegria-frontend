import Link from "next/link";
import { notFound } from "next/navigation";

const articulos = [
  {
    id: "1",
    titulo: "5 ideas para un cumpleaños infantil",
    contenido: [
      "Organizar un cumpleaños infantil puede ser una experiencia muy entretenida.",
      "Una buena idea es comenzar escogiendo una temática que sea del gusto del niño o niña. Esto permitirá definir posteriormente la decoración, los colores y diferentes actividades.",
      "También es importante considerar la cantidad de invitados y preparar actividades adecuadas para las edades de los niños.",
      "Finalmente, una buena planificación permitirá disfrutar mucho más de la celebración junto a familiares y amigos.",
    ],
  },
  {
    id: "2",
    titulo: "¿Cómo elegir una temática?",
    contenido: [
      "Elegir una temática puede ser una de las partes más entretenidas al organizar una celebración infantil.",
      "Una buena opción es considerar los gustos e intereses del niño o niña, como sus personajes, colores o actividades favoritas.",
      "Una vez elegida la temática, podemos utilizarla para definir la decoración, los juegos y los detalles de la celebración.",
      "Lo importante es escoger una temática que permita disfrutar de un momento especial junto a familiares y amigos.",
    ],
  },
];

export function generateStaticParams() {
  return articulos.map((articulo) => ({
    id: articulo.id,
  }));
}

export default async function BlogDetallePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const articulo = articulos.find(
    (articulo) => articulo.id === id
  );

  if (!articulo) {
    notFound();
  }

  return (
    <main className="container py-5">
      <nav aria-label="breadcrumb" className="mb-4">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href="/" className="text-decoration-none">
              Inicio
            </Link>
          </li>

          <li className="breadcrumb-item">
            <Link href="/blogs" className="text-decoration-none">
              Blog
            </Link>
          </li>

          <li className="breadcrumb-item active">
            Artículo
          </li>
        </ol>
      </nav>

      <article className="card border-0 shadow-sm overflow-hidden">
        <div className="bg-warning text-center p-4 p-md-5">
          <h1 className="fw-bold mb-0">
            {articulo.titulo}
          </h1>
        </div>

        <div className="card-body p-4 p-md-5">
          {articulo.contenido.map((parrafo, index) => (
            <p
              key={index}
              className="mb-4"
              style={{ lineHeight: "1.8" }}
            >
              {parrafo}
            </p>
          ))}

          <hr className="my-4" />

          <Link href="/blogs" className="btn btn-warning">
            Volver al blog
          </Link>
        </div>
      </article>
    </main>
  );
}
