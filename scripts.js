//div com id root
const app = document.getElementById('root')

//elemento imagem
const logo = document.createElement('img')

//definindo o atributo
logo.src = 'logo.png'

const container = document.createElement('div')
container.setAttribute('class', 'container')//definindo os atributos

//Anexando a imagem e o container na raiz do app
app.appendChild(logo)
app.appendChild(container)

/* é um objeto que fornece funcionalidade ao cliente para transferir dados entre um cliente e um servidor. */
 var request = new XMLHttpRequest()//
 
//abre um nova conexão usando get requisitando na url
 request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)
 

 request.onload = function () {
     //Começar acessando o json data aqui
    //variavel matriz que recebe todo o json como objetos javascript
     var data = JSON.parse(this.response)

    if(request.status >= 200 && request.status < 400){
        data.forEach(movie => {
        
        //cria uma div com uma classe div
        const card = document.createElement('div')
        card.setAttribute('class', 'card')    
        
        //cria um h1 com o texto contido do titulo do filme
        const h1 = document.createElement('h1')
        h1.textContent = movie.title
        
        //cria um p com o texto de descrição contido
        const p = document.createElement('p')
        movie.description = movie.description.substring(0,300)//limita a qtd de char em 300
        p.textContent = `${movie.description}...`
        
        //associa card a container como filha
        container.appendChild(card)

        card.appendChild(h1)
        card.appendChild(p)

        })
    }else{
        const errorMessage = document.createElement('marquee')
        errorMessage.textContent = `Gah, it's not working!`
        app.appendChild(errorMessage)
    }
  } 

  //Requisição de envio
    request.send() 




