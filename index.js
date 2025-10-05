// IMPORTS - Módulos necesarios para el proyecto


// axios: Cliente HTTP para realizar peticiones a APIs
import axios from 'axios';

// cowsay: Genera mensajes ASCII art con una vaca parlante (y otros animales)
import cowsay from "cowsay";

// gradient-string: Aplica gradientes de colores al texto
import gradient from "gradient-string";


// CONFIGURACIÓN DE DATOS


/**
 * Array de caras divertidas para los animales
 * e: eyes (ojos)
 * T: tongue (lengua)
 */
const funnyFaces = [
  { e: "^^", T: "U " },   // Cara feliz con ojos cerrados
  { e: "$", T: "U " },   // Cara con ojos de dinero
  { e: "@@", T: "U " },   // Cara sorprendida
  { e: "**", T: "U " },   // Cara estrellada/mareada
  { e: "OO", T: "U  " },  // Cara con ojos muy abiertos
  { e: ">.<", T: "U " }   // Cara haciendo esfuerzo/riendo
];

/**
 * Array de diferentes animales disponibles en cowsay
 * Cada uno tiene su propio ASCII art
 */
const animals = [
  'default',        // Vaca clásica
  'beavis.zen',     // Beavis meditando
  'cheese',         // Queso
  'daemon',         // Demonio BSD
  'dragon',         // Dragón
  'elephant',       // Elefante
  'ghostbusters',   // Logo de Cazafantasmas
  'koala',          // Koala
  'moose',          // Alce
  'skeleton',       // Esqueleto
  'stegosaurus',    // Estegosaurio
  'turkey',         // Pavo
  'turtle',         // Tortuga
  'tux',            // Pingüino Tux (mascota de Linux)
];

/**
 * Array de diferentes estilos de gradientes
 * Cada gradiente tiene un conjunto de colores predefinido
 */
const gradients = [
  gradient.pastel,      // Colores pastel suaves
  gradient.rainbow,     // Colores del arcoíris
  gradient.cristal,     // Colores cristalinos
  gradient.teen,        // Colores vibrantes juveniles
  gradient.mind,        // Colores psicodélicos
  gradient.morning,     // Colores del amanecer
  gradient.vice,        // Colores neón estilo Miami Vice
  gradient.passion,     // Colores cálidos apasionados
  gradient.fruit,       // Colores de frutas tropicales
  gradient.instagram,   // Gradiente estilo Instagram
  gradient.retro,       // Colores retro vintage
  gradient.summer,      // Colores veraniegos brillantes
  gradient.atlas,       // Colores tierra y cielo
  gradient.sunburst,    // Explosión de colores solares
];


// FUNCIONES PRINCIPALES


/**
 * Función asíncrona que obtiene un chiste desde la API
 */

async function getJoke() {
  try {
    // Realizamos petición GET a la API de chistes
    const response = await axios.get('https://icanhazdadjoke.com/', {
      // Especificamos que queremos la respuesta en formato JSON
      headers: { Accept: 'application/json' }
    });
    
    // Devolvemos el chiste de la respuesta
    return response.data.joke;
    
  } catch (error) {
    // Si hay error (sin conexión, API caída, etc.), devolvemos un chiste por defecto
    return "Why do programmers prefer dark mode? Because light attracts bugs! 🐛";
  }
}

/**
 * Función principal que coordina todo el proceso:
 * 1. Obtiene un chiste
 * 2. Selecciona una cara aleatoria
 * 3. Selecciona un animal aleatorio
 * 4. Selecciona gradientes aleatorios
 * 5. Genera el mensaje con cowsay
 * 6. Lo muestra en consola con colores
 */
async function cowsays() {
  // Esperamos a que se obtenga el chiste de la API
  const joke = await getJoke();
  
  // Seleccionamos una cara aleatoria del array
  // Math.random() genera número entre 0 y 1
  // Lo multiplicamos por la longitud del array y redondeamos hacia abajo
  const randomFace = funnyFaces[Math.floor(Math.random() * funnyFaces.length)];
  
  // Seleccionamos un animal aleatorio
  const randomAnimal = animals[Math.floor(Math.random() * animals.length)];
  
  // Seleccionamos un gradiente aleatorio para el título
  const randomGradient1 = gradients[Math.floor(Math.random() * gradients.length)];
  
  // Seleccionamos OTRO gradiente aleatorio para la vaca (puede ser el mismo o diferente)
  const randomGradient2 = gradients[Math.floor(Math.random() * gradients.length)];
  
  // Generamos el mensaje ASCII con cowsay
  // El spread operator (...) expande las propiedades de randomFace (e y T)
  const meme = cowsay.say({
    text: joke,      // El texto que dirá el animal
    f: randomAnimal, // El tipo de animal a mostrar
    ...randomFace    // Los ojos y lengua aleatorios
  });
  
  // Mostramos el título con el primer gradiente
  console.log(randomGradient1("Joke of the day!"));
  
  // Mostramos el ASCII art de la vaca con el segundo gradiente
  console.log(randomGradient2(meme));
}


// EJECUCIÓN DEL PROGRAMA


// Llamamos a la función principal para iniciar el programa
cowsays();