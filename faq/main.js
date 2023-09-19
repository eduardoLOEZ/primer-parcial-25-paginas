// C�digo JavaScript aqu�


const faqContainer = document.getElementById("faq-container");

fetch("faq.json")
    .then(response => response.json())
    .then(data =>{


        data.forEach(item => {
            const question = document.createElement("h2")
            question.classList.add("question");
            question.textContent = item.question;


            const answer = document.createElement("p")
            answer.classList.add("answer")
            answer.textContent = item.answer

            
            const faqItem = document.createElement("div");
            faqItem.classList.add("faq-item");
            faqItem.appendChild(question);
            faqItem.appendChild(answer);


            faqContainer.appendChild(faqItem)

            
            
        });
        
    })

    .catch(error => {
        console.error("Error al cargar el archivo JSON:", error);
    });