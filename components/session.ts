export type UsuarioSesion = {
  nombre: string;
  correo: string;
  rol?: "admin" | "usuario";
};

const eventoSesion = "sesion-actualizada";

export function suscribirseASesion(notificar: () => void) {
  window.addEventListener("storage", notificar);
  window.addEventListener(eventoSesion, notificar);

  return () => {
    window.removeEventListener("storage", notificar);
    window.removeEventListener(eventoSesion, notificar);
  };
}

export function obtenerSesionGuardada() {
  return localStorage.getItem("sesion");
}

export function obtenerSesionEnServidor() {
  return null;
}

export function guardarSesion(sesion: UsuarioSesion) {
  localStorage.setItem("sesion", JSON.stringify(sesion));
  window.dispatchEvent(new Event(eventoSesion));
}

export function cerrarSesionGuardada() {
  localStorage.removeItem("sesion");
  window.dispatchEvent(new Event(eventoSesion));
}
