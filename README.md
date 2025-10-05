
![Ejemplo de salida del programa](https://res.cloudinary.com/dsy30p7gf/image/upload/v1759682005/dadjokes_vnj0sv.png)
---

## 📋 Descripción del Proyecto

Aplicación Node.js que obtiene chistes aleatorios desde una API pública y los muestra en la consola usando ASCII art con animales parlantes, expresiones faciales aleatorias y gradientes de colores dinámicos.

---

## 📦 Módulos Utilizados

### 1. axios (v1.x)
```javascript
import axios from 'axios';
```

**¿Qué es?**
Cliente HTTP basado en promesas para Node.js, el más popular del ecosistema para hacer peticiones a APIs.

**¿Por qué lo elegí?**
- API sencilla y potente
- Maneja automáticamente la conversión de JSON
- Incluye manejo de errores robusto

**¿Para qué sirve aquí?**
- Realizar peticiones GET a `https://icanhazdadjoke.com/`
- Obtener chistes aleatorios en formato JSON
- Manejar errores de conexión con un chiste por defecto

---

### 2. cowsay (v1.x)
```javascript
import cowsay from "cowsay";
```

**¿Qué es?**
Generador de ASCII art que crea diálogos con animales parlantes, basado en el clásico programa Unix.

**¿Por qué lo elegí?**
- Visualmente atractivo y divertido
- Altamente personalizable (caras, animales)
- Múltiples criaturas disponibles

**¿Para qué sirve aquí?**
- Crear el ASCII art del animal parlante
- Mostrar el chiste dentro de un bocadillo
- Alternar entre diferentes animales (vaca, dragón, elefante, koala, pingüino Tux, tortuga, etc.)
- Personalizar expresiones con ojos y lengua

**Ejemplo de uso:**
```javascript
cowsay.say({
  text: "¡Hola mundo!",
  f: "dragon",  // Animal
  e: "^^",      // Ojos
  T: "U "       // Lengua
});
```

---

### 3. gradient-string (v2.x)
```javascript
import gradient from "gradient-string";
```

**¿Qué es?**
Biblioteca que aplica gradientes de color multicolor al texto en la terminal.

**¿Por qué lo elegí?**
- Hace la salida visualmente espectacular
- Incluye múltiples gradientes predefinidos
- Añade variedad visual con selección aleatoria

**¿Para qué sirve aquí?**
- Aplicar gradientes de colores al título y ASCII art
- Generar salidas únicas con 14 estilos diferentes
- Hacer que cada ejecución sea visualmente distinta

**Ejemplo de uso:**
```javascript
console.log(gradient.rainbow('Texto con arcoíris'));
console.log(gradient.pastel('Texto con pastel'));
```

---

## 🔄 Flujo de Ejecución

1. **Importación**: Se cargan los módulos necesarios
2. **Configuración**: Arrays con caras, animales y gradientes
3. **Obtención del chiste**: Petición HTTP a la API
4. **Selección aleatoria**: Se eligen cara, animal y 2 gradientes
5. **Generación ASCII**: cowsay crea el arte con las opciones elegidas
6. **Visualización**: Se muestra en consola con colores
7. **Manejo de errores**: Chiste por defecto si la API falla

---

## 🎯 Características Principales

### Aleatoriedad
- **6 expresiones faciales**: ^^, $$, @@, **, OO, >.<
- **14 animales diferentes**: vaca, dragón, elefante, koala, pingüino Tux, tortuga, esqueleto, estegosaurio, alce, pavo, demonio BSD, queso, Beavis y Cazafantasmas
- **14 gradientes de color**: pastel, rainbow, cristal, teen, mind, morning, vice, passion, fruit, instagram, retro, summer, atlas, sunburst
- **Chistes infinitos**: Diferentes en cada ejecución

**¡Esto da 11,760 combinaciones posibles!** (6 caras × 14 animales × 14 gradientes)

### Robustez
- **Try-catch** para manejo de errores HTTP
- **Chiste fallback** si la API no responde
- **Async/await** para código limpio y legible

### Experiencia Visual
- **ASCII Art** dinámico con múltiples criaturas
- **Colores aleatorios** que cambian en cada ejecución
- **Doble gradiente** (uno para título, otro para el animal)

---

## 💻 Instalación y Ejecución

```bash
# Instalar dependencias
npm install axios cowsay gradient-string

# Ejecutar el programa
node index.js
```

---

## 📸 Secciones Clave del Código

### 1. Obtención de datos desde API
```javascript
async function getJoke() {
  try {
    const response = await axios.get('https://icanhazdadjoke.com/', {
      headers: { Accept: 'application/json' }
    });
    return response.data.joke;
  } catch (error) {
    return "Why do programmers prefer dark mode? Because light attracts bugs! 🐛";
  }
}
```
**Función asíncrona que obtiene el chiste o devuelve uno por defecto en caso de error.**

### 2. Selección aleatoria
```javascript
const randomFace = funnyFaces[Math.floor(Math.random() * funnyFaces.length)];
const randomAnimal = animals[Math.floor(Math.random() * animals.length)];
const randomGradient1 = gradients[Math.floor(Math.random() * gradients.length)];
const randomGradient2 = gradients[Math.floor(Math.random() * gradients.length)];
```
**Uso de `Math.random()` y `Math.floor()` para obtener índices aleatorios de los arrays.**

### 3. Generación y visualización
```javascript
const meme = cowsay.say({
  text: joke,
  f: randomAnimal,  // Especifica el animal
  ...randomFace     // Expande ojos y lengua
});

console.log(randomGradient1("Joke of the day!"));
console.log(randomGradient2(meme));
```
**El spread operator (...) expande las propiedades, y cada línea usa un gradiente diferente.**

---

## 🎨 Ejemplo de Salida
![Ejemplo de salida del programa](https://res.cloudinary.com/dsy30p7gf/image/upload/v1759681018/cowsays_na4rem.png)
---

## ✅ Conclusión

Este proyecto combina efectivamente:
- **APIs REST** para obtener datos externos dinámicos
- **Módulos NPM** para extender funcionalidad
- **Programación asíncrona** con manejo de errores
- **Aleatoriedad** para experiencias únicas en cada ejecución
- **Presentación visual atractiva** en terminal








