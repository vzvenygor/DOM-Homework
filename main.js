// 1. створити список з допомогою роботи з домом, пронумерувати список та вивести всі його значення. 
// Населення відобразити в млн "40 млн". Київ та Україна підсвітити синьо-жовтим кольором.

let countryTitle = document.createElement('h2');
countryTitle.innerText = 'Перелік країн';
let content = document.getElementById('container');
content.appendChild(countryTitle);

let countryList = [

  {
    country: "Україна",
    capital:"Київ",
    count: 40000000
  },
  
  {
    country: "Грузія",
    capital:"Тбілісі",
    count: 10000000
  },
  
  {
    country: "Великобританія",
    capital:"Лондон",
    count: 100000000
  },
  
  {
    country: "США",
    capital:"Вашингтон",
    count: 300000000
  }
];

let ol = document.createElement("ol");
for (j = 0; j < countryList.length; j++) {
  let li = document.createElement("li");
  let countryName = document.createElement("p");
  let countryCapital = document.createElement("p");
  let populationCount = document.createElement("p");
  countryName.innerHTML = `${countryList[j].country}`;
  countryCapital.innerHTML = `${countryList[j].capital}`;
  populationCount.innerHTML = `${countryList[j].count / 1000000} млн.`;

  if (countryList[j].country === "Україна") {
    countryName.style.background = "blue";
  }
  if (countryList[j].capital === "Київ") {
    countryCapital.style.background = "yellow";
  }

  li.appendChild(countryName);
  li.appendChild(countryCapital);
  li.appendChild(populationCount);
  ol.appendChild(li);
}
content.appendChild(ol);


// 2. Створити список в якому можна буде довільно змінювати колір для айтемів (палітра мінімум з 5 кольорів).
let burn = document.createElement('h2');
burn.innerText = 'Спалити Москву?';
let justDoIt = document.getElementById('burn-mosсow');
justDoIt.appendChild(burn);
justDoIt.style.textAlign = 'center';

let img = document.createElement('img');
img.setAttribute('src', 'img/img.jpg');
img.style.cssText = 'width: 300px; opacity: 0.6';
let imgCont = document.createElement('div');
imgCont.style.cssText = 'width: 300px; margin: auto';
imgCont.appendChild(img);
justDoIt.appendChild(imgCont);

let buttons = document.createElement('ul');
let li = document.createElement('li');

let button1 = document.createElement('button');
button1.innerText = 'Запустити рокету!';
li.appendChild(button1);

let button2 = document.createElement('button');
button2.innerText = 'Пульнути танчиком!';
li.appendChild(button2);

let button3 = document.createElement('button');
button3.innerText = 'Шмальнути Джавеліном!';
li.appendChild(button3);

let button4 = document.createElement('button');
button4.innerText = 'Кинути коктейль Молотова!';
li.appendChild(button4);

let button5 = document.createElement('button');
button5.innerText = 'Лупанути міною!';
li.appendChild(button5);

buttons.appendChild(li);
justDoIt.appendChild(buttons);

li.style.cssText = 'list-style-type: none';
button1.style.cssText = 'padding: 10px; margin: 20px';
button2.style.cssText = 'padding: 10px; margin: 20px';
button3.style.cssText = 'padding: 10px; margin: 20px';
button4.style.cssText = 'padding: 10px; margin: 20px';
button5.style.cssText = 'padding: 10px; margin: 20px';

button1.onclick = () => {
  imgCont.style.backgroundColor = 'red';
};

button2.onclick = () => {
  imgCont.style.backgroundColor = 'orange';
};

button3.onclick = () => {
  imgCont.style.backgroundColor = 'purple';
};

button4.onclick = () => {
  imgCont.style.backgroundColor = 'violet';
};

button5.onclick = () => {
  imgCont.style.backgroundColor = 'yellow';
};
