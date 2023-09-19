// C�digo JavaScript aqu�

const tableroHorario = document.getElementById("horario")

fetch("bus.json")
    .then(response => response.json())
    .then(data =>{

        data.forEach(bus => {
            const fila = tableroHorario.insertRow()
            const ruta = fila.insertCell(0);
            const salida = fila.insertCell(1);
            const llegada = fila.insertCell(2);
            const dias = fila.insertCell(3);
            const busImg = fila.insertCell(4)

            ruta.innerHTML = bus.ruta;
            salida.innerHTML = bus.salida;
            llegada.innerHTML = bus.llegada;
            dias.innerHTML = bus.dias;
            
            //CREAR LA IMAGEN 
            const imagenBus = document.createElement("img");
            imagenBus.src = bus.imagen;
            imagenBus.alt = "Imagen del autobús"; 
            busImg.appendChild(imagenBus); // Agregar la imagen a la columna de img

            
        });

        
    })

    .catch((error) => {
        console.error("Error al cargar los datos: ", error);
    });