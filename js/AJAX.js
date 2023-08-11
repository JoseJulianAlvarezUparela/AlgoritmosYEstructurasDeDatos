// // IIFE (Immediately Invoked Function Expression) que se ejecuta inmediatamente después de su definición
// (() => {
//     // Crear una instancia de XMLHttpRequest
//     const xhr = new XMLHttpRequest(),
//       // Obtener el elemento en el cual se mostrarán los resultados
//       $xhr = document.getElementById("xhr"),
//       // Crear un fragmento de documento para optimizar la manipulación del DOM
//       $fragment = document.createDocumentFragment();
  
//     // Agregar un event listener para el cambio de estado de la solicitud
//     xhr.addEventListener("readystatechange", (e) => {
//       // Comprobar si el estado de XMLHttpRequest no es 4 (completado)
//       if (xhr.readyState !== 4) return;
  
//       // Comprobar si la respuesta tiene un estado exitoso (códigos 2xx)
//       if (xhr.status >= 200 && xhr.status < 300) {
//         // Parsear la respuesta JSON recibida
//         let json = JSON.parse(xhr.responseText);
  
//         // Iterar sobre cada elemento en el JSON
//         json.forEach((el) => {
//           // Crear un elemento <li> y agregar contenido a partir del JSON
//           const $li = document.createElement("li");
//           $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
//           // Agregar el <li> al fragmento de documento
//           $fragment.appendChild($li);
//         });
  
//         // Agregar el fragmento de documento al elemento $xhr
//         $xhr.appendChild($fragment);
//       } else {
//         // Si la respuesta no es exitosa, mostrar un mensaje de error con el estado y el mensaje
//         let message = xhr.statusText || "Ocurrió un error";
//         $xhr.innerHTML = `Error ${xhr.status}: ${message}`;
//       }
//     });
  
//     // Configurar la solicitud GET para la URL del servicio (en este caso, JSONPlaceholder)
//     xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
  
//     // Enviar la solicitud
//     xhr.send();
//   })();
  

// (() => {
//     // Selecciona el elemento del DOM con el id "fetch" y crea un fragmento de documento.
//     const $fetch = document.getElementById("fetch"),
//       $fragment = document.createDocumentFragment();
  
//     // Realiza una solicitud fetch a la URL especificada.
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => (res.ok ? res.json() : Promise.reject(res)))  // Verifica si la respuesta es exitosa o rechaza la promesa.
//       .then((json) => {
//         // Itera a través de los datos JSON obtenidos.
//         json.forEach((el) => {
//           // Crea un elemento <li> y agrega contenido a partir de los datos.
//           const $li = document.createElement("li");
//           $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
//           // Agrega el elemento <li> al fragmento de documento.
//           $fragment.appendChild($li);
//         });
  
//         // Agrega los elementos <li> del fragmento al elemento con el id "fetch".
//         $fetch.appendChild($fragment);
//       })
//       .catch((err) => {
//         // Maneja los errores que puedan ocurrir durante la solicitud fetch.
//         let message = err.statusText || "Ocurrió un error";
//         // Muestra un mensaje de error en el elemento con el id "fetch".
//         $fetch.innerHTML = `Error ${err.status}: ${message}`;
//       })
//       .finally(() => {
//         // Esta parte se ejecutará independientemente del resultado de la Promesa fetch.
//         // Se podría usar para realizar acciones finales o limpieza.
//       });
//   })();
  




// (() => {
//     // Selecciona el elemento del DOM con el id "fetch-async" y crea un fragmento de documento.
//     const $fetchAsync = document.getElementById("fetch-async"),
//       $fragment = document.createDocumentFragment();
  
//     // Define una función asíncrona llamada getData para obtener y mostrar datos.
//     async function getData() {
//       try {
//         // Realiza una solicitud fetch para obtener datos de usuarios.
//         let res = await fetch("https://jsonplaceholder.typicode.com/users");
        
//         // Convierte la respuesta en formato JSON.
//         let json = await res.json();
  
//         // Verifica si la respuesta no es exitosa y lanza un error.
//         if (!res.ok) throw { status: res.status, statusText: res.statusText };
  
//         // Itera a través de los datos JSON obtenidos.
//         json.forEach((el) => {
//           const $li = document.createElement("li");
//           $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
//           $fragment.appendChild($li);
//         });
  
//         // Agrega los elementos <li> del fragmento al elemento con el id "fetch-async".
//         $fetchAsync.appendChild($fragment);
//       } catch (err) {
//         // Maneja los errores que puedan ocurrir durante la solicitud fetch o el procesamiento.
//         let message = err.statusText || "Ocurrió un error";
//         // Muestra un mensaje de error en el elemento con el id "fetch-async".
//         $fetchAsync.innerHTML = `Error ${err.status}: ${message}`;
//       } finally {
//         // Esta parte se ejecutará independientemente de si se produjo un error o no.
//         // Puede ser útil para realizar limpieza u otras tareas finales.
//       }
//     }
  
//     // Llama a la función para obtener y mostrar los datos.
//     getData();
//   })();
  

// (() => {
//     // Selecciona el elemento del DOM con el id "axios" y crea un fragmento de documento.
//     const $axios = document.getElementById("axios"),
//       $fragment = document.createDocumentFragment();
  
//     // Realiza una solicitud GET utilizando la librería Axios.
//     axios
//       .get("https://jsonplaceholder.typicode.com/users")
//       .then((res) => {
//         // Maneja la respuesta exitosa.
//         let json = res.data;
  
//         // Itera a través de los datos JSON obtenidos.
//         json.forEach((el) => {
//           const $li = document.createElement("li");
//           $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
//           $fragment.appendChild($li);
//         });
  
//         // Agrega los elementos <li> del fragmento al elemento con el id "axios".
//         $axios.appendChild($fragment);
//       })
//       .catch((err) => {
//         // Maneja los errores que puedan ocurrir durante la solicitud Axios.
//         let message = err.response.statusText || "Ocurrió un error";
//         // Muestra un mensaje de error en el elemento con el id "axios".
//         $axios.innerHTML = `Error ${err.response.status}: ${message}`;
//       })
//       .finally(() => {
//         // Esta parte se ejecutará independientemente del resultado de Axios.
//         // Puede ser útil para realizar acciones finales o limpieza.
//       });
//   })();
  


// (() => {
//     // Selecciona el elemento del DOM con el id "axios-async" y crea un fragmento de documento.
//     const $axiosAsync = document.getElementById("axios-async"),
//       $fragment = document.createDocumentFragment();
  
//     // Define una función asíncrona llamada getData para obtener y mostrar datos.
//     async function getData() {
//       try {
//         // Realiza una solicitud GET utilizando Axios y espera la respuesta.
//         let res = await axios.get("https://jsonplaceholder.typicode.com/users");
//         // Obtiene los datos de la respuesta utilizando res.data.
//         let json = await res.data;
  
//         // Itera a través de los datos JSON obtenidos.
//         json.forEach((el) => {
//           const $li = document.createElement("li");
//           $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
//           $fragment.appendChild($li);
//         });
  
//         // Agrega los elementos <li> del fragmento al elemento con el id "axios-async".
//         $axiosAsync.appendChild($fragment);
//       } catch (err) {
//         // Maneja los errores que puedan ocurrir durante la solicitud Axios.
//         let message = err.response.statusText || "Ocurrió un error";
//         // Muestra un mensaje de error en el elemento con el id "axios-async".
//         $axiosAsync.innerHTML = `Error ${err.response.status}: ${message}`;
//       } finally {
//         // Esta parte se ejecutará independientemente de si se produjo un error o no.
//         // Puede ser útil para realizar limpieza u otras tareas finales.
//       }
//     }
  
//     // Llama a la función para obtener y mostrar los datos.
//     getData();
//   })();
  






