// Exibir os cards dos tutoriais
// let textoHTML = ''
// db_passo_inicial.tutoriais.forEach (elem => {
//   textoHTML += `<div>${elem.id} - <a href="passos.html?id_tut=${elem.id}">${elem.titulo}</a></div>`
// })
// document.body.innerHTML = textoHTML

//  Exibir os cards pegando o tutorial no parametro de query string e iterando no array de passos filtrado
// let params = new URLSearchParams (location.href.search);
// let id_tut = params.get("id_tut")
// let aPassos = db_passo_inicial.filter (elem => elem.tutorial == id_tut)
// let textoHTML = ''
// aPassos.forEach (elem => {
//   textoHTML += `<div><img src="${elem.imagem}">${elem.id} - ${elem.titulo}<br> ${elem.resp}</div>`
// })
// document.body.innerHTML = textoHTML

var db_passo_inicial = {
    "tutoriais": [
      {
        "id": 1,
        "imagem": "img/pexels-freestocksorg-34407%20(1).jpg",
        "titulo": "COMO SALVAR VÍDEOS NO YOUTUBE",
        "resp": "Clique aqui para ver o passo a passo detalhado desse tutorial!",
        "app": "Youtube"
      },
      {
        "id": 2,
        "imagem": "img/pexels-tobias-dziuba-927629.jpg",
        "titulo": "COMO EDITAR UMA POSTAGEM NO FACEBOOK",
        "resp": "Clique aqui para ver o passo a passo detalhado desse tutorial!",
        "app": "Facebook"
      },
      {
        "id": 3,
        "imagem": "img/pexels-photo-3032137.jpeg",
        "titulo": "COMO POR FILTRO NAS FOTOS DO INSTAGRAM",
        "resp": "Clique aqui para ver o passo a passo detalhado desse tutorial!",
        "app": "Instagram"
      },
      {
        "id": 4,
        "imagem": "img/pexels-photo-607812.webp",
        "titulo": "LOREM IPSUM DOLOR SIT AME",
        "resp": "Clique aqui para ver o passo a passo detalhado desse tutorial!",
        "app": "Lorem Ipsum"
      },
      {
        "id": 4,
        "imagem": "img/pexels-photo-1632215.webp",
        "titulo": "LOREM IPSUM DOLOR SIT AME",
        "resp": "Clique aqui para ver o passo a passo detalhado desse tutorial!",
        "app": "Lorem Ipsum"
      }
    ],
}

// Exibir os cards dos tutoriais
let textoHTML = ''
db_passo_inicial.tutoriais.forEach (elem => {
textoHTML += ` 
<div id="divPop" class="container">
<a href="WebnetoTutorialPage${elem.id}.html">   
    <div class="card mb-3"> 
      <div class="row g-0">
          <div class="col-md-3">
            <img src="${elem.imagem}" class="img-fluid rounded-start" alt="..." style="height: 100%; width=100%">
          </div>
          <div class="col-md-9">
            <div class="card-body" style="margin-top: 2%">
              <h5 class="card-title" style="color: #3B14A8; font-family: 'Open Sans'; font-weight: bold; text-transform: uppercase;">${elem.titulo}</h5>
              <p class="card-text" style="color: #3B14A8; font-family: 'Open Sans'">${elem.resp} </p>
              <p class="card-text" style="color: #3B14A8; font-family: 'Open Sans'"><small class="text-muted">${elem.app}</small></p>
            </div>
          </div>
      </div> 
  </div>
  </a>
</div>
`  
}) 

document.getElementById('divPop').innerHTML = textoHTML


//  Exibir os cards pegando o tutorial no parametro de query string e iterando no array de passos filtrado

//<a href="WebnetoTutorialPage.html?id_tut=${elem.id}">

// let params = new URLSearchParams (location.href.search);
// let id_tut = params.get("id_tut") // id_tut = elem.id (1, 2 ou 3)

//  let aPassos = db_passo_inicial.filter (elem => elem.tutorial == id_tut) // !!!!!!!!!!!

//  let cardHTML = ''
//  db_passo_inicial.passos.forEach (element => {
//     cardHTML += `
//      <div id="divPassos" class="container-fluid">
//        <div class="row justify-content-center">
//          <div class="card col-md-lg-4 justify-content-center" style="margin: 55px;">
//            <img src="${element.imagem}" class="img-responsive" width="280" height="auto" style="margin: 10px;">
//            <div class="card-body">
//              <h5 class="card-title" style="color: #3B14A8;">${element.titulo}</h5>
//              <p class="card-text" style="color: #3B14A8;">${element.resp}</p>
//            </div>
//          </div>
//        </div>
//      </div> `
//  })

//  document.getElementById('divPassos').innerHTML = cardHTML