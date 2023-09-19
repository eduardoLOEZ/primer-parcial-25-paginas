const perfilesContainer = document.getElementById("container-profiles");

fetch("profiles.json") 
    .then(response => response.json())
    .then(data => {
        function createProfilesCards(perfil) {
            const perfilHTML = `
                <div class="perfil">
                    <img src="${perfil.imagen}" alt="${perfil.nombre}">
                    <h2>Nombre: ${perfil.nombre}</h2>
                    <p>Gustos: ${perfil.gustos.join(', ')}</p>
                    <p>Carrera: ${perfil.carrera}</p>
                    <p>Edad: ${perfil.edad} años</p>
                    <p>Nacionalidad: ${perfil.nacionalidad}</p>
                </div>
            `;
            return perfilHTML;
        }

        data.forEach(profile => {
            const profileHTML = createProfilesCards(profile);
            perfilesContainer.innerHTML += profileHTML;
        });
    })
    .catch(error => {
        console.error('Error al cargar los perfiles:', error);
    });
