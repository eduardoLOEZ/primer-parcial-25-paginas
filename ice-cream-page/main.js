// C�digo JavaScript aqu�


const mainNews = document.getElementById("container-icecream")

fetch("icecream.json")
    .then(response => response.json())
    .then(data =>{

        function cardsNews(card){
            const htmlCard = `
            <div class="icecream">
                <h1>Helado:${card.nombre} <h1/>
                <h2>Sabor: ${card.sabor}</h2>
                <p>Descripcion: ${card.descripcion}</p>
                <p>Precio: ${card.precio}</p>
                
            </div>
        `;
        return htmlCard
        }


        data.forEach(card => {
            const newsCard = cardsNews(card)
            mainNews.innerHTML+= newsCard
            
        });

    })