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
    });
   updateDOM();
}

// show only millionaires
const showMillionaires = () => {
    users = users.filter(user => user.money > 1000000);
    updateDOM();
}

// sort by richest
const sortByMoney = () => {
    users = users.sort((user1,user2) => user2.money - user1.money);
    updateDOM();
}

// calculate entire wealth
const calcEntireWealth = () => {
    const entireWealth = users.reduce((total, user) => {
        return total += user.money;
    }, 0);
    const element = document.createElement("div");
        element.classList.add("person");
        const wealthText = document.createElement("h4");
        wealthText.textContent = `Total Wealth:`;
        wealthText.style.fontWeight = 'normal';
        const wealthNum = document.createElement("h4");
        wealthNum.textContent = `${entireWealth}`;
        wealthNum.style.fontWeight = 'normal';
        element.append(wealthText);
        element.append(wealthNum);
        personWealth.appendChild(element);
}


addUsrBtn.addEventListener('click', getRandomUser);
doubleBtn.addEventListener('click', doubleMoney);
showMillionairesBtn.addEventListener('click', showMillionaires);
sortBtn.addEventListener('click', sortByMoney);
calculateWealthBtn.addEventListener('click',calcEntireWealth);
