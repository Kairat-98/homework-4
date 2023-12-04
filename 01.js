const getBtn = document.querySelector('.get-btn');
const cardElement = document.querySelector('.card');
const  cardsContainer = document.querySelector('.cards')


getBtn.addEventListener('click', () => {
    const request = new XMLHttpRequest();
    request.open('GET', 'data.json')
    request.setRequestHeader('Content-type', 'application/json')
    request.send()

    request.addEventListener('load', () => {
        const data = JSON.parse(request.response)
        // cardsContainer.innerHTML = '';

        data.forEach(person => {
            const cardElement = document.createElement('div');
            cardElement.classList.add('card');
            cardElement.innerHTML = `
                <div>Name: <span class="name">${person.name}</span></div>
                <div>Age: <span class="age">${person.age}</span></div>
            `;
            cardsContainer.appendChild(cardElement);
        });


    })
})

// part-2

const request = new XMLHttpRequest();
request.open('GET', 'data2.json');
request.setRequestHeader('Content-type', 'application/json');
request.send();

request.addEventListener('load', () => {
    if (request.status === 200) {
        const data = JSON.parse(request.responseText);
        console.log('Data from data.json:', data);
    } else {
        console.error('Error fetching data. Status:', request.status);
    }
});
