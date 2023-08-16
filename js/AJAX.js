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
  



  // Seleccionar elementos del DOM

(() => {
    const d = document,
    $table = d.querySelector(".crud-table"),
    $form = d.querySelector(".crud-form"),
    $title = d.querySelector(".crud-title"),
    $template = d.getElementById("crud-template").content,
    $fragment = d.createDocumentFragment();

    // Función para realizar peticiones AJAX
    const ajax = (options) => {
    let { url, method, success, error, data } = options;
    const xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", e => {
    if (xhr.readyState !== 4) return;

    if (xhr.status >= 200 && xhr.status < 300) {
    let json = JSON.parse(xhr.responseText);
    success(json);
    } else {
    let message = xhr.statusText || "Ocurrió un error";
    error(`Error ${xhr.status}: ${message}`);
    }
    });

    xhr.open(method || "GET", url);
    xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
    xhr.send(JSON.stringify(data));
    }

    // Función para obtener y mostrar todos los datos
    const getAll = () => {
    ajax({
    url: "http://localhost:3000/santos",
    success: (res) => {
    console.log(res);

    res.forEach(el => {
    // Actualizar datos en la plantilla
    $template.querySelector(".name").textContent = el.nombre;
    $template.querySelector(".constellation").textContent = el.constelacion;
    $template.querySelector(".edit").dataset.id = el.id;
    $template.querySelector(".edit").dataset.name = el.nombre;
    $template.querySelector(".edit").dataset.constellation = el.constelacion;
    $template.querySelector(".delete").dataset.id = el.id;

    // Clonar la plantilla y agregarla al fragmento
    let $clone = d.importNode($template, true);
    $fragment.appendChild($clone);
    });

    // Agregar el fragmento a la tabla
    $table.querySelector("tbody").appendChild($fragment);
    },
    error: (err) => {
    console.log(err);
    // Mostrar error después de la tabla
    $table.insertAdjacentHTML("afterend", `<p><b>${err}</b></p>`);
    }
    })
    }

    // Cargar datos al cargar el DOM
    d.addEventListener("DOMContentLoaded", getAll);

    // Escuchar eventos de envío en el formulario
    d.addEventListener("submit", e => {
    if (e.target === $form) {
    e.preventDefault();

    if (!e.target.id.value) {
    // Crear un nuevo registro - POST
    ajax({
    url: "http://localhost:3000/santos",
    method: "POST",
    success: (res) => location.reload(),
    error: (err) => $form.insertAdjacentHTML("afterend", `<p><b>${err}</b></p>`),
    data: {
        nombre: e.target.nombre.value,
        constelacion: e.target.constelacion.value
    }
    });
    } else {
    // Actualizar un registro existente - PUT
    ajax({
    url: `http://localhost:3000/santos/${e.target.id.value}`,
    method: "PUT",
    success: (res) => location.reload(),
    error: (err) => $form.insertAdjacentHTML("afterend", `<p><b>${err}</b></p>`),
    data: {
        nombre: e.target.nombre.value,
        constelacion: e.target.constelacion.value
    }
    });
    }
    }
    });

    // Escuchar eventos de clic en la página
    d.addEventListener("click", e => {
    if (e.target.matches(".edit")) {
    // Llenar el formulario con los datos del elemento clicado
    $title.textContent = "Editar Santo";
    $form.nombre.value = e.target.dataset.name;
    $form.constelacion.value = e.target.dataset.constellation;
    $form.id.value = e.target.dataset.id;
    }

    if (e.target.matches(".delete")) {
    let isDelete = confirm(`¿Estás seguro de eliminar el id ${e.target.dataset.id}?`);

    if (isDelete) {
    // Eliminar un registro - DELETE
    ajax({
    url: `http://localhost:3000/santos/${e.target.dataset.id}`,
    method: "DELETE",
    success: (res) => location.reload(),
    error: (err) => alert(err)
    });
    }
    }
    });
})()

(() => {
    const d = document,
    $table = d.querySelector(".crud-table"),
    $form = d.querySelector(".crud-form"),
    $title = d.querySelector(".crud-title"),
    $template = d.getElementById("crud-template").content,
    $fragment = d.createDocumentFragment();

    const getAll = async () => {
        try {
            let res = await fetch("http://localhost:3000/santos")

            json = await res.json()

            if(!res.ok) throw {status: res.status, statusText: res.statusText}

        } catch (err) {
            let message = err.statusText || "Ocurrio un error"

            $table.insertAdjacentHTML("afterend", `<p><b>${err.status}: ${message}</b></p>`)

        }
    }

    d.addEventListener("DOMContentLoaded", getAll)

    d.addEventListener("submit", async e => {
        
    })

})()