










// let idSearch;

// let pesq_feita = sessionStorage.getItem('pesq_value');
// let queryFinal;

// let resultadoPesq = document.querySelector("h3");
// let resultadoPesqMostra = document.createElement("span");
// resultadoPesqMostra.setAttribute('class', 'mostra_pesq');
// resultadoPesqMostra.innerHTML = pesq_feita;
// resultadoPesq.appendChild(resultadoPesqMostra);

// idSearch = parseInt(pesq_feita);

// if(Number.isNaN(idSearch)) {
//     queryFinal = ` COLOCAR AQUI O LINK DA NOSSA DATABASE`;
    
// } else {
//     queryFinal = `COLOCAR AQUI O LINK DA DATABASE`;
// }    

// var xhr = new XMLHttpRequest();

// xhr.onload = mostraFilme;
// xhr.open('GET', queryFinal);    
// xhr.send();

// function mostraFilme() {

//     let divTela = document.querySelector("#moviesPesq");
//     let body = '<div class="card mb-3" style="margin:15px" >             <div class="row g-0">              <div class="col"><img src="..." class="img-fluid rounded-start" alt="...">      </div>             <div class="col-10" >                <div class="card-body" style="margin:20px;"> <h5 class="card-title" style="color: #3B14A8; font-family: 'Open Sans'; font-weight: bold; text-transform: uppercase;";">Card title</h5> '${tutorial.titulo}' <p class="card-text" style="color: #3B14A8; font-family: 'Open Sans'">'${tutorial.descricao}'</p><p class="card-text" style="color: #3B14A8; font-family: 'Open Sans'"><small class="text-muted">'${tutorial.data}'</small></p>   </div> </div>  </div> </div>';
//     let dados; 
    
//     if(Number.isNaN(idSearch)) {
//         dados = JSON.parse(this.responseText);
//     } else {
//         dados = JSON.parse(this.responseText);
//     }

//     localStorage.setItem('db_filmes', this.responseText);

//     for(i = 0; i < dados.results.length; i++) {
//         let filme = dados.results[i];
//         body = body + ` `
//     }