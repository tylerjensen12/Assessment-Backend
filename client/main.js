const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const cubesContainer = document.querySelector('#cubes-container')

const baseURL = "http://localhost:4000/api"

const getCompliment = () => {
    axios.get(baseURL + "/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get(baseURL + "/fortune/")
    .then(res => {
        const data = res.data
        alert(data)
    })
}


const rubiksCallback = ({ data: rubiks }) => displayRubiks(rubiks)
const errCallback = err => console.log(err.response.data)

const getAllRubiks = () => axios.get(baseURL + "/rubiks").then(rubiksCallback).catch(errCallback)
const deleteRubiks = id => axios.delete(`${baseURL + "/rubiks"}/${id}`).then(rubiksCallback).catch(errCallback)
const updateRubiks = (id, type) => axios.put(`${baseURL + "/rubiks"}/${id}`, {type}).then(rubiksCallback).catch(errCallback)


function createRubiksCard(rubiks) {
    const rubiksCard = document.createElement('div')
    rubiksCard.classList.add('rubiks-card')

    rubiksCard.innerHTML = `<img alt='rubiks cover' src=${rubiks.imageURL} class="rubiks-cover"/>
    <p class="rubiks-title">${rubiks.title}</p>
    <div class="btns-container">
        <button onclick="updateRubiks(${rubiks.id}, 'minus')">-</button>
        <p class="rubiks-rating">${rubiks.rating} stars</p>
        <button onclick="updateRubiks(${rubiks.id}, 'plus')">+</button>
    </div>
    <button onclick="deleteRubiks(${rubiks.id})">delete</button>
    `
    cubesContainer.appendChild(rubiksCard)
}

function displayRubiks(arr) {
    cubesContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createRubiksCard(arr[i])
    }
}

getAllRubiks()

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)