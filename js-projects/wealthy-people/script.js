const addUsrBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showMillionairesBtn = document.getElementById('show-millionaires');
const sortBtn = document.getElementById('sort');
const calculateWealthBtn = document.getElementById('calculate-wealth');
const personWealth = document.querySelector('main');

let users = [];

async function getRandomUser() {
    const result = await fetch("https://randomuser.me/api/");
    const data = await result.json();
    const user = data.results[0];
    const newUser = {
        name: `${user.name.first} ${user.name.last}`,
        money: Math.floor(Math.random() * 1000000),
    }
    addUser(newUser);
}

const addUser = (newUser) => {
    users.unshift(newUser);
    updateDOM();
}

const storeUser = () => {
    users.unshift()
}

function updateDOM(providedUsers = users) {
    personWealth.innerHTML = `<h2><strong>Person</strong> Wealth</h2>`;
    providedUsers.forEach((user) => {
        const element = document.createElement("div");
        element.classList.add("person");
        const userName = document.createElement("h5");
        userName.textContent = `${user.name}`;
        const userMoney = document.createElement("h5");
        userMoney.textContent = `${user.money}`;
        element.append(userName);
        element.append(userMoney);
        personWealth.appendChild(element);
    });
}

// double money
const doubleMoney = () => {
    users = users.map(user => {
        return {...user, money: user.money  * 2} // user.name, user.last, user.money: user.money * 2
    })
   updateDOM();
}

addUsrBtn.addEventListener('click', getRandomUser);
doubleBtn.addEventListener('click', doubleMoney);
