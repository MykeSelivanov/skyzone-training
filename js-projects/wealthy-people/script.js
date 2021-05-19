const addUsrBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showMillionairesBtn = document.getElementById('show-millionaires');
const sortBtn = document.getElementById('sort');
const calculateWealthBtn = document.getElementById('calculate-wealth');
const personWealth = document.querySelector('main');

const users = [];

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

getRandomUser();

const addUser = (newUser) => {
    users.push(newUser);
    updateDOM();
}

const updateDOM = () => {
    const element = document.createElement('div');
    element.classList.add('person');
    const userName = document.createElement('h4');
    userName.textContent = `${users[0].name}`;
    const userMoney = document.createElement('h4');
    userMoney.textContent = `${users[0].money}`;
    element.append(userName);
    element.append(userMoney);
    personWealth.append(element);
}
