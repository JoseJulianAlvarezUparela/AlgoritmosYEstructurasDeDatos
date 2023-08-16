(() => {
    let ImgContainer = document.getElementById("Img")
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/photos", true)
    xhr.responseType = 'json';

    xhr.onload = function (){
        if (xhr.status >= 200 && xhr.status < 300){
            let datosImagenes = xhr.response;

            let imagesHTML = "";

            for(let i = 0; i < 2; i++){
                let image = datosImagenes[i];
                imagesHTML += `
                <div>
                  <img src="${image.thumbnailUrl}" alt="${image.title}">
                  <p>ID: ${image.id}</p>
                  <p>Title: ${image.title}</p>
                </div>
              `;
            }

            ImgContainer.innerHTML = imagesHTML;

        } else {
            console.log("Error")
        }
    };

    xhr.onerror = function () {
        console.error("Hubo un error")
    }

    xhr.send()

})();


(() => {
    let postContainer = document.getElementById("Post")
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true)
    xhr.responseType = 'json';

    xhr.onload = function (){
        if(xhr.status >= 200 && xhr.status < 300){
            let datosPost = xhr.response;

            let PostHTML = "";

            for (let i = 0; i < 2; i++) {
                let post = datosPost[i];
                
                PostHTML += `
                
                <div>
                    <h2>${post.id}</h2>
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                </div>

                `;
            }

            postContainer.innerHTML = PostHTML;

        } else {
            console.log("Error")
        }


        };

        xhr.onerror = function () {
            console.error("Hubo un error");
        };

        xhr.send();

})();


(() => {
    let Comentarios = document.getElementById("comentario")
    const xhr = new XMLHttpRequest();
    xhr.open ("GET", "https://jsonplaceholder.typicode.com/comments")
    xhr.responseType = 'json';

    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300){
            let MisComentarios = xhr.response;


            let ComentariosHTML = "";

            for(let i = 0; i < 2; i++){
                let coment = MisComentarios[i];

                ComentariosHTML += `
                
                <div>
                    <h2>${coment.id}</h2>
                    <p><${coment.email}/p>
                    <p>${coment.name}</p>
                    <p>${coment.body}</p>
                </div>

                `
            }

            Comentarios.innerHTML = ComentariosHTML;

        } else {
            console.llog("Error")
        }
    };

    xhr.onerror = function () {
        console.error("Hubo un error")
    }

    xhr.send();

})();


// API fetch ASYNC AWAIT

(() => {
    const $fecthAsync = document.getElementById("FetchAsyncUsers"),
    $fragment = document.createDocumentFragment();

    async function getData() {
        try {
            let res = await fetch("https://jsonplaceholder.typicode.com/users")

            let json = await res.json();

            if(!res.ok) throw {status: res.status, statusText: res.statusText}

            json.slice(0, 5).forEach((el) => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} --- ${el.email} --- ${el.phone}`

                $fragment.appendChild($li)
            });

            $fecthAsync.appendChild($fragment)

        } catch (err) {
            let messaje = err.statusText || "Error"
            $fecthAsync.innerHTML = `Error ${err.status} - ${messaje}`
        }
    }

    getData();
})()


// API REST 
