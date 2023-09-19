// C�digo JavaScript aqu�

const cardsContainer = document.getElementById("container-cards")

fetch("https://api-marvel-v1.onrender.com/marvel/personajes")
    .then(response => response.json())
    .then(data =>{

        function cardsSuperHeros(card){
            const htmlCard = `
            <div class="perfil">
                <img src="${card.img}" alt="${card.name}">
                <h2>Nombre: ${card.name}</h2>
                <p>Skills: ${card.skills.join(', ')}</p>
                
            </div>
        `;
        return htmlCard
        }

        data.forEach(card => {
            const marvelcard = cardsSuperHeros(card)
            cardsContainer.innerHTML+= marvelcard
            
        });

    })