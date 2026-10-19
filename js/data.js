/**
 * data.js — Rutina de la semana (Gol en Contra, partido el sábado).
 *
 * Es el ÚNICO archivo que necesitás tocar para cambiar ejercicios,
 * series, repeticiones o textos.
 *
 *   categoria  — "pitch" (fuerza) | "clay" (campo / alta intensidad) | "rest" (descanso) | "gold" (partido)
 *   ejercicios — lista de { chip, texto }
 *   descanso   — (opcional) texto para días de descanso sin lista
 *   partido    — (opcional) texto para el día de partido
 *   nota       — (opcional) línea al pie de la tarjeta
 */

const ROUTINE = [
  {
    id: "lunes",
    nombre: "LUNES",
    titulo: "Fuerza de piernas",
    categoria: "pitch",
    ejercicios: [
      { chip: "10'", texto: "Entrada en calor-Movilidad" },
      { chip: "4×8–10", texto: "Sentadilla trasera. Barra de 12 kg + discos, bajando profundo con la espalda recta." },
      { chip: "3×10", texto: "Estocadas caminando (pasos por pierna). Barra de 8 kg en hombros o disco pesado al pecho." },
      { chip: "4×10", texto: "Peso muerto rumano. Barra de 12 kg + discos. Protege los isquios." },
      { chip: "4×15", texto: "Elevación de talones de pie, sosteniendo la barra." },
      { chip: "3×40\"", texto: "Plancha frontal con toque de hombros" },
      { chip: "3×20", texto: "Rotación rusa con disco de 5 kg" },
      { chip: "FIN", texto: "Elongar" }
    ],
    nota: "El trabajo pesado va lo más lejos posible del partido: hay tiempo de sobra para recuperar."
  },
  {
    id: "martes",
    nombre: "MARTES",
    titulo: "Fuerza de tren superior",
    categoria: "pitch",
    ejercicios: [
      { chip: "10'", texto: "Entrada en calor-Movilidad" },
      { chip: "4×8–12", texto: "Press de banca en el banco York. Barra de 12 kg + discos." },
      { chip: "4×10", texto: "Remo inclinado con barra de 8 o 12 kg" },
      { chip: "3×12", texto: "Vuelos laterales con mancuernas de 2 kg, movimiento estricto" },
      { chip: "3×fallo", texto: "Flexiones explosivas: despegá las manos del piso al subir" },
      { chip: "3×15", texto: "Elevación de piernas acostado en el banco, agarrado de los bordes" },
      { chip: "3×30\"", texto: "Plancha lateral (por lado)" },
      { chip: "FIN", texto: "Elongar" }
    ],
    nota: "Un tren superior fuerte te ayuda a cubrir la pelota y ganar en el cuerpo a cuerpo."
  },
  {
    id: "miercoles",
    nombre: "MIÉRCOLES",
    titulo: "Descanso activo · 10'",
    categoria: "rest",
    ejercicios: [
      { chip: "10×", texto: "Rotaciones de cadera: rodilla arriba y círculo hacia afuera, como saltando una valla (por lado)" },
      { chip: "10×", texto: "Zancada profunda con rotación: manos al piso y brazo al cielo (por lado)" },
      { chip: "10×", texto: "Balanceo de piernas agarrado a la pared: adelante-atrás y de lado a lado (por lado)" },
      { chip: "10×", texto: "Rotaciones de tobillo y rodilla, círculos suaves (por lado)" }
    ],
    nota: "Sin pesas ni correr. Solo movilidad para que el músculo se recupere más rápido."
  },
  {
    id: "jueves",
    nombre: "JUEVES",
    titulo: "Campo · Resistencia + pliometría",
    categoria: "clay",
    ejercicios: [
      { chip: "10'", texto: "Entrada en calor-Movilidad" },
      { chip: "BLOQUE 1", texto: "Resistencia y velocidad. Repetir 4 veces:" },
      { chip: "1×", texto: "Pique desde la línea de fondo hasta mitad de cancha y vuelta inmediata" },
      { chip: "1×", texto: "Pique continuo desde la línea de fondo hasta el final de la cancha y vuelta" },
      { chip: "1'30\"", texto: "Descanso exacto antes de repetir" },
      { chip: "BLOQUE 2", texto: "Pliometría unilateral" },
      { chip: "5×", texto: "Pasadas ida y vuelta hasta mitad de cancha con saltos a una pierna (tramos con derecha y con izquierda). Aterrizá con la rodilla semiflexionada y explotá hacia adelante." },
      { chip: "FIN", texto: "Elongar + huevos revueltos con queso y pan para recuperar" }
    ],
    nota: "A 48 h del partido: activa el sistema nervioso y las fibras rápidas, y te deja el viernes libre para recuperar."
  },
  {
    id: "viernes",
    nombre: "VIERNES",
    titulo: "Descanso pre-partido",
    categoria: "rest",
    descanso: "Día libre. Solo movilidad muy suave si te sentís duro.",
    nota: "Hidratate muy bien y asegurá buenas comidas: huevos revueltos con pan y queso para cargar energía."
  },
  {
    id: "sabado",
    nombre: "SÁBADO",
    titulo: "Día de partido",
    categoria: "gold",
    partido: "⚽ Gol en Contra",
    nota: "Llegás con potencia, el sistema nervioso activado y las piernas descansadas."
  },
  {
    id: "domingo",
    nombre: "DOMINGO",
    titulo: "Recuperación",
    categoria: "rest",
    descanso: "Descanso total."
  }
];
