# Async / Await

## Funciones `async`

```js
async function f() { ... }
```

- Indican que el objeto devuelto es una promesa.
- Si no usamos `new Promise(...)` explícitamente, el valor retornado se envuelve automáticamente en una promesa.
- Podemos especificar el retorno usando:
  - `Promise.resolve(...)`
  - `Promise.reject(...)`

## `await`

- Sólo se puede usar dentro de funciones `async`.
- Indica una espera: la ejecución se pausa hasta que la promesa se resuelva.
- Si no usáramos `await` y la promesa tardase un tiempo en resolverse, continuaríamos con la ejecución usando datos incorrectos (pues los datos correctos aún no se habrían obtenido).

## Manejo de errores

- Podemos devolver errores usando:
  - `Promise.reject(new Error(...))`, o
  - `throw new Error(...)`
- Capturamos errores con bloques `try...catch`:

```js
try {
  await llamada();
} catch (err) {
  // manejo del error
}
```

---

# Ejercicio

```js
class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}

async function loadJson(url) {
  let response = await fetch(url); 
  if (response.status == 200) {
    return response.json();
  } else {
    throw new HttpError(response);
  }
}

// Pide nombres hasta que GitHub devuelve un usuario válido
async function demoGithubUser() {
  let name = prompt("Ingrese un nombre:", "iliakan");
  let user = null;

  while (user == null) {
    try {
      user = await loadJson(`https://api.github.com/users/${name}`);
      alert(`Nombre completo: ${user.name}.`);
      return user;
    } catch (err) {
      if (err instanceof HttpError && err.response.status == 404) {
        alert("No existe tal usuario, por favor reingrese.");
        name = prompt("Ingrese un nombre:", "iliakan");
      } else {
        throw err;
      }
    }
  }
}
```

