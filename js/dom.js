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

console.log('создали маркированный список');

  newElem.classList.add('todo-items');

  console.log('добавили имя класса');
  let ArrayToDo = ['приготовить кофе', 'съесть салатик', 'поменять подгузник ребёнку', 'поехать на работу'];

  console.log('создали массив туду');

  let newArrayToDo = document.querySelector('todo-items');

  console.log('обратились к классу туду');
  newH4 = document.createElement('h4');
  newH4.textContent = 'Список дел:'
  newElem.appendChild(newH4);
  for (let i = 0; i < ArrayToDo.length; i++){
    newLi = document.createElement('li');
    console.log('создали новый элемент списка');
    newLi.textContent = ArrayToDo[i];
    console.log('присвоили ему соответствующий пункт из туду');
    newElem.appendChild(newLi);
    console.log('добавили элемент в список туду');
  }

  let bodyElement = document.querySelector('body');
  console.log('выбрали селектор боди');
  bodyElement.appendChild(newElem)
  console.log('добавили в конец боди маркированный список');
}

//Отлкладываем время для добавления списка
let timeOutAddUl = setTimeout(addUl, timeStart += 1000);

//Добавление класса селектед к ли при щелчке о нем и удаление его из любых других ли
document.addEventListener("click", select, true);


function select(event){
  let currLi = document.querySelectorAll('#essentials');
  console.log('Выбралось');
  if (event.target.tagName == "LI"){
    for (let i = 0; i < currLi.length; i++){
      if (currLi[i].classList.contains){
        
        currLi[i].classList.;
        alert("удалилось")
            }
      else alert("нет класс")
    }
  }
  }
