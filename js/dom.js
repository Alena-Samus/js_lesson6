console.log("Javascript - лучший язык программирования!");

let timeStart = 1500;
//Меняем приветствие 
function changeText() {
  let oldText = document.querySelector("#greeting");
  oldText.textContent = "Привет, Виталий Валентинович!";
}
//Отлкладываем время для изменения текста
let timeOutText = setTimeout(changeText, timeStart);

//Меняем цвет фона элементов списка
function changeColor() {
  let oldColor = document.querySelectorAll("#essentials");
  for (let i = 0; i < oldColor.length; i++ )
    oldColor[i].style.background = 'yellow';
}

//Отлкладываем время для изменения цвета фона
let timeOutColor = setTimeout(changeColor, timeStart+=1000);

//Cоздаем тег изображения и вкладываем его в div с идентификатором #greeting
function addTeg() {
  let abz = document.createElement("br");
  let newTeg = document.createElement("img");
  newTeg.src = "http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif";
  let a = document.querySelector("#greeting");
  if (a){
    a.appendChild(abz);
    a.appendChild(newTeg);
  } 
}

//Отлкладываем время для добавления тега
let timeOutTeg = setTimeout(addTeg, timeStart += 1000);

function addUl(){
  let newElem = document.createElement('ul');
  newElem.classList.add('todo-items');
  let ArrayToDo = ['приготовить кофе', 'съесть салатик', 'поменять подгузник ребёнку', 'поехать на работу'];
  let newArrayToDo = document.querySelector('todo-items');
  newH4 = document.createElement('h4');
  newH4.textContent = 'Список дел:'
  newElem.appendChild(newH4);
  for (let i = 0; i < ArrayToDo.length; i++){
    newLi = document.createElement('li');
    newLi.textContent = ArrayToDo[i];
    newElem.appendChild(newLi);
  }
  let bodyElement = document.querySelector('body');
  console.log('выбрали селектор боди');
  bodyElement.appendChild(newElem)
  }

//Отлкладываем время для добавления списка
let timeOutAddUl = setTimeout(addUl, timeStart += 1000);

//Добавление класса селектед к ли при щелчке о нем и удаление его из любых других ли
let changeSelectd = document.querySelector("#essentials");
document.addEventListener("click", addSelected, false);
function addSelected(event) {
  let currentLi = event.target.parentNode.childNodes;
  currentLi.forEach(currentLi => {
    if (currentLi.nodeName === 'LI') {
      currentLi.classList.remove('selected')
    }
  });
  event.target.classList.add('selected');

  //Изменяем изображение, чтобы оно было последним выбранным продуктом питания
  let ind = event.target.id;
  
  let picture = ['images/milk.jpg', 'images/honey.jpg', 'images/water.jpg', 'images/wine.jpg', 'images/beer.jpg']

  let changeImg = document.querySelector('#image');
  changeImg.setAttribute('src', picture[ind]);
}

function changeSquare() {
  let square = document.querySelector("#ghosting");
  alert('!!!')
  square.style.background = 'red';
}

changeSquare();
  