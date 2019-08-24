const contenedor = document.querySelector('#postContenedor');
function addPost() {
  const inputtext = document.querySelector('#title').value || 'ejemplo';
  const areatext = document.querySelector('#text').value || 'ejemplo';
  const post = document.createElement('div');
  post.classList.add('post-contenedor');
  const header = document.createElement('div');
  header.classList.add('post-contenedor-header');
  header.innerText = inputtext;
  const body = document.createElement('div');
  body.classList.add('post-contenedor-body');
  body.innerText = areatext;
  post.appendChild(header);
  post.appendChild(body);
  contenedor.appendChild(post);
}
