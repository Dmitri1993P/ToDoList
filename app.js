let input = document.querySelector("#input")
let ulList = document.querySelector("#list")
let button = document.querySelector("#button")
let header = document.querySelector("header");
let text = "&#x2705 ToDo App ;"
let index =8;

writeText();
showTasks();
input.onkeyup = () => {
    if(input.value.trim() == ""){
        button.disabled = true;
    }else if(input.value.trim() != ""){
        button.disabled = false;
        addToLocStor(event);
    }
};
button.addEventListener("click",function(){
    let getLocalStorage  = localStorage.getItem("New ToDo");// ключ от хранилища
    if (getLocalStorage ===null){
        listArr = [];
    }else{
        listArr = JSON.parse(getLocalStorage);
    }
    listArr.push(input.value);
    localStorage.setItem("New ToDo",JSON.stringify(listArr)) // into JSON
    showTasks();
    button.disabled = true; 
})




function addToLocStor(event){
    if(event.key == "Enter"){
        let getLocalStorage  = localStorage.getItem("New ToDo");// ключ от хранилища
        if (getLocalStorage ===null){
            listArr = [];
        }else{
            listArr = JSON.parse(getLocalStorage);
        }
        listArr.push(input.value);
        localStorage.setItem("New ToDo",JSON.stringify(listArr)) // into JSON
        button.disabled = true; 
        showTasks();
    }
}
function showTasks(){
    let getLocalStorage  = localStorage.getItem("New ToDo");// ключ от хранилища
    if (getLocalStorage ===null){
        listArr = [];
    }else{
        listArr = JSON.parse(getLocalStorage);
    }
    let newLi = "";
    if(listArr.length == 0){
        ulList.innerHTML ="";
    }
    listArr.forEach((element,index) => {
        newLi += `<li>${element}<span onclick="deleteTask(${index})"; >&#10006;</span></li>`
        ulList.innerHTML = newLi;
        input.value = "";
    });
}
function deleteTask(index){
    let getLocalStorage = localStorage.getItem("New ToDo");
    listArr = JSON.parse(getLocalStorage);
    listArr.splice(index,1);
    localStorage.setItem("New ToDo",JSON.stringify(listArr))
    showTasks();
}
function writeText(){

    
    let speed = 250;
    index ==8? speed = 1000 : speed=50;
    if(index==16){
        speed =99999999;
    }
	header.innerHTML = text.slice(0,index);
	index++;
	setTimeout(writeText, speed)
}
//input.addEventListener("keypress",function(event){
//    if(event.key == "Enter"){
//        let liElem = document.createElement("li");//Основной тег li
//        //liElem.innerHTML = this.value;
//        //ulList.appendChild(liElem);
//
//        let task =  document.createElement("span");//создание тега дочернего тега в li(задача)
//        task.classList.add("task")
//        task.innerHTML = this.value;
//        liElem.appendChild(task);
//
//        let removeButton = document.createElement("span");//создание тега дочернего тега в li(кнопка удалить)
//        removeButton.classList.add("removeButton")
//        removeButton.innerHTML = "Удалить"
//        removeButton.addEventListener("click",() =>{//Добавление функционала кнопочки удаления не удаление элемента списка
//            liElem.remove(removeButton)
//        })
//        liElem.appendChild(removeButton);
//
//        let completedButton = document.createElement("span");//создание тега дочернего тега в li(кнопка зачеркнуть нахуй)
//        completedButton.classList.add("completedButton")
//        completedButton.innerHTML = "Выполнено";
//        completedButton.addEventListener("click",() =>{// добавления функционала кнопки на зачеркивание
//            task.classList.toggle("done");
//        })
//        liElem.appendChild(completedButton);
//
//        ulList.appendChild(liElem);
//
//        input.value = "";
//    }
//})