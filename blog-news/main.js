// C�digo JavaScript aqu�


const mainNews = document.getElementById("noticias")

fetch("news.json")
    .then(response => response.json())
    .then(data =>{

        function cardsNews(card){
            const htmlCard = `
            <div class="news">
                <h1>Titulo:${card.titulo} <h1/>
                <h2>Fecha: ${card.fecha}</h2>
                <p>Descripcion: ${card.descripcion}</p>
                <p>Fuente: ${card.fuente}</p>
                
            </div>
        `;
        return htmlCard
        }


        data.forEach(card => {
            const newsCard = cardsNews(card)
            mainNews.innerHTML+= newsCard
            
        });

    })