(() => {
    let ImgContainer = document.getElementById("Img")
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/photos", true)
    xhr.responseType = 'json';

    xhr.onload = function (){
        if (xhr.status >= 200 && xhr.status < 300){
            let datosImagenes = xhr.response;

            let imagesHTML = "";

            for(let i = 0; i < 5; i++){
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

            for (let i = 0; i < 5; i++) {
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


