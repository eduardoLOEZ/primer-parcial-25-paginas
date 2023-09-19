// C�digo JavaScript aqu�


const tablaEstudiantes = document.getElementById("tabla-estudiantes");
const tbody = tablaEstudiantes.querySelector("tbody");

fetch("students.json")
    .then(response => response.json())
    .then(data =>{


        data.forEach(estudiante => {
            const fila = document.createElement("tr");

            const idColumna = document.createElement("td");
            idColumna.textContent = estudiante.id;
            fila.appendChild(idColumna);


            const nombreColumna = document.createElement("td");
            nombreColumna.textContent = estudiante.nombre;
            fila.appendChild(nombreColumna);

            const edadColumna = document.createElement("td");
            edadColumna.textContent = estudiante.edad;
            fila.appendChild(edadColumna);

            const cursoColumna = document.createElement("td");
            cursoColumna.textContent = estudiante.curso;
            fila.appendChild(cursoColumna);

            const asistioColumna = document.createElement("td");

            //si es true, pintar SI si es false NO
            asistioColumna.textContent = estudiante.asistio ? "Sí" : "No";
            fila.appendChild(asistioColumna);

            tbody.appendChild(fila);

            
        });
    })