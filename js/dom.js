console.log("Javascript - лучший язык программирования!");
function load() {
  changeGray();
  changeOrange();

//Меняем приветствие 
function changeText() {
  let oldText = document.querySelector("#greeting");
  oldText.textContent = "Привет, Виталий Валентинович!";
}
changeText();

//Меняем цвет фона элементов списка
function changeColor() {
  let oldColor = document.querySelectorAll("#essentials");
  for (let i = 0; i < oldColor.length; i++ )
    oldColor[i].style.background = 'yellow';
}

changeColor();

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

addTeg();

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


addUl();

//Добавление класса селектед к ли при щелчке о нем и удаление его из любых других ли
let changeSelectd = document.querySelector("#essentials");
  changeSelectd.addEventListener("click", addSelected, false);
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

//Удаление серого дива
function changeGray() {
  let square = document.querySelector("#ghosting");
  square.addEventListener("mouseover",() =>{
    document.querySelector("body").removeChild(square);
  },false)
}

function changeOrange(){
  let resize = document.querySelector("#resize");
  resize.addEventListener("mouseover", () => { resize.style.width = "400px" }, false);
  resize.addEventListener("mouseout", () => { resize.style.width = "200px" }, false);
}

  let resetBtn = document.querySelector("#reset")
  resetBtn.addEventListener("click", btnChange, false);
  function btnChange() {
    let curSelect = document.querySelectorAll(".selected");
    curSelect.forEach(sel => sel.classList.remove('selected'))
    let changeImg = document.querySelector('#image');
    changeImg.setAttribute('src', 'images/panic.jpg');
  }
 
  window.addEventListener("keydown", pressKey, false);
  function pressKey(event) {
    if ((event.keyCode >= 48 && event.keyCode <= 57) || (event.keyCode >= 96 && event.keyCode <= 105))
      alert("Я НЕНАВИЖУ ЧИСЛААААА!")
    
  }
}

let timeOutLoad =setTimeout(load, 2000);