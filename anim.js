// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Cosas que amo de ti:", time: 25 },
  { text: "Verte sonreír", time: 30 },
  { text: "Cuando me hablas de tu carrera y cosas que sabes", time: 35 },
  { text: "Como me demuestras cariño siempre", time: 40 },
  { text: "Tu inteligencia", time: 45 },
  { text: "Tu simpatía", time: 50 },
  { text: "Tu entusiasmo", time: 55 },
  { text: "La felicidad con la que inicias cada día", time: 60 },
  { text: "Tus besos", time: 65 },
  { text: "Tus cachetes bonitos", time: 70 },
  { text: "Tus ojos, tus ojos son tan perfectos e iradian felicidad en todo momento", time: 75 },
  { text: "Tus labios", time: 80 },
  { text: "Tu pelo en cualquiera de sus presentaciones", time: 85 },
  { text: "Amo como te me arrunchas cuando es la hora de dormir ", time: 90 },
  { text: "O cuando solo quieres tomar una siesta", time: 95 },
  { text: "Amo lo empatica que eres y la sabiduría que tienes para tomar cada decisión", time: 100 },
  { text: "Amo lo valiente que eres y como lo demuestras cada día", time: 61.5 },
  { text: "Haciendole frente a cada pequeño bache en tu camino hacía el exito", time: 105 },
  { text: "Y nunca dejandote derrotar", time: 110 },
  { text: "Amo cada comida que me haces con amor", time: 115 },
  { text: "Amo como me regañas por siempre estar preocupada por mi bienestar", time: 120 },
  { text: "Amo como me haces sentir querido a tu lado", time: 125 },
  { text: "Amo tu sonrisa cuando te digo algo lindo o cuando te ries", time: 130 },
  { text: "Amo ver como babeas mi pecho cuando te quedas dormida en él", time: 135 },
  { text: "Amo lo especial que me haces sentir con todo tu amor", time: 140 },
  { text: "Amo tu perfecto cuerpo y tu grandiosa silueta", time: 145 },
  { text: "Amo tus nalgotas enormes y perfectas", time: 150 },
  { text: "Amo como me miras cuando te cuento algo por más minimo que sea", time: 155 },
  { text: "Amo que seas tan grandiosa, y eso hace que nunca me quede sin cosas para decir de ti que yo ame", time: 160 },
  { text: "Pero siempre voy a descubrir una nueva y es lo que me hace enamorarme cada día más de ti.", time: 165 },
  { text: "Te amo mucho, mi princesa hermosa <3.", time: 170 },
];


// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);