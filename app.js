export function comments(postId) {
  console.log("Cargando comentarios del post:", postId);

  fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
    .then((response) => response.json())
    .then((comentarios) => {
      let muro = document.getElementById("comments" + postId);
      let texto = "";
      comentarios.forEach((comentario) => {
        texto += `
        <div class="card">
          <div class="card-header">${comentario.name}</div>
            <div class="card-body">
            <h5 class="card-title">${comentario.email}</h5>
            <p class="card-text">${comentario.body}</p>
        </div><br>
          `;
      });
      muro.innerHTML = texto;
    });
}


window.comments = comments;

const btnCargar = document.getElementById("btnCargar");
btnCargar.addEventListener("click", () => {
  btnCargar.classList.toggle("btn-success");
  btnCargar.classList.toggle("btn-secondary");

  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((usuarios) => {
      let opciones = document.getElementById("user");
      let texto = "";
      usuarios.forEach((usuario) => {
        texto += `<option value="${usuario.id}">${usuario.name}</option>`;
      });

      opciones.innerHTML = `<option value="0">Usuarios</option>` + texto;
    });
});

const selectPost = document.getElementById("user");
selectPost.addEventListener("change", () => {
  fetch(`https://jsonplaceholder.typicode.com/posts?userId=${selectPost.value}`)
    .then((response) => response.json())
    .then((publicaciones) => {
      let muro = document.getElementById("post");
      let texto = "";
      publicaciones.forEach((publicacion) => {
        texto += `
          <div class="card w-75 mb-3 ">
            <div class="card-body">
              <h5 class="card-title">${publicacion.title}</h5>
                <p class="card-text">${publicacion.body}</p>
                <button onClick="comments(${publicacion.id})" class="btn btn-primary">Comentarios</button>
                <div id="comments${publicacion.id}"></div>
            </div>
          </div>
          `;
      });
      muro.innerHTML = texto;
      document.getElementById("comments").innerHTML = "";
    });
});
