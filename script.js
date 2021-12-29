// CONTANTES USADAS
const BASE_URL ='https://api.themoviedb.org/3';

const API_KEY = 'api_key=abaab1b48ad079b914b5b0d705d55654&language=pt-BR';

const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' +API_KEY;

const  IMG_URL = 'https://image.tmdb.org/t/p/w500/';

const searchURL = BASE_URL + '/search/movie?' + API_KEY;

const main = document.getElementById('main');

const search = document.getElementById('search');

const form = document.getElementById('form');

getFilmes(API_URL);


// FUNÇÕES USADA PARA TRAZER OS FILMES 

function getFilmes(url){

    fetch(url).then(r => r.json()).then(data =>{
      
        mostrarFilmes(data.results);        
    })    
}


//FUNÇÃO PARA MOSTRAR OS FILMES 

function mostrarFilmes(data){

    main.innerHTML = '';

    data.forEach(filme => {
        const {title, poster_path, vote_average, overview} = filme;
        const filmeEl = document.createElement('div');
        filmeEl.classList.add('filme');
        filmeEl.innerHTML = `

        <img src="${IMG_URL+poster_path}" alt="Logo do filme ${title}"> 
        <div class="info">
            <h2>${title}</h2>
            <span class="info-nota">${vote_average}</span>
        </div>

        <div class="descricao">
            <h3>Descrição</h3>
              ${overview}
        </div>

        `
        main.appendChild(filmeEl);        
    });
}

// BUSCA DE FILMES

form.addEventListener('submit',(e) =>{
    e.preventDefault();

    const searchTerm = search.value;

    if(searchTerm){
        getFilmes(searchURL+'&query='+searchTerm)
    }
})



