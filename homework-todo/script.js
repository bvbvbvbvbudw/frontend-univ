document.addEventListener('DOMContentLoaded', function (){
    document.getElementById('createTaskHandler').addEventListener('submit', function (e){
        e.preventDefault()
        const text = document.getElementById('inputTask').value;
        const todo = document.getElementById('todo');

        const newTask = document.createElement('p');
        newTask.innerHTML = text + ' <span class="nextStepProcess">В процессі</span>';
        todo.appendChild(newTask);

        ProcessHandler();
    })
    function ProcessHandler() {
        let nextStepProcessElements = document.querySelectorAll('.nextStepProcess');
        nextStepProcessElements.forEach(function(element) {
            element.removeEventListener('click', processClick);
            element.addEventListener('click', processClick);
        });
    }
    function processClick() {
        let el = this.parentNode;
        const text = el.innerText.split(' В процессі')[0];
        el.remove();
        const process = document.getElementById('process');
        const newTask = document.createElement("p");
        newTask.innerHTML = text + ' <span class="nextStepDone">Зроблено</span>';
        process.appendChild(newTask);
        DoneHandler();
    }
    function DoneHandler() {
        let nextStepDoneElements = document.querySelectorAll('.nextStepDone');
        nextStepDoneElements.forEach(function(element) {
            element.removeEventListener('click', doneClick);
            element.addEventListener('click', doneClick);
        });
    }
    function doneClick() {
        let el = this.parentNode;
        const text = el.innerText.split(' Зроблено')[0];
        el.remove();
        const done = document.getElementById('done');
        const newTask = document.createElement("p");
        newTask.innerHTML = text + ' <span class="delete">Видалити</span>';
        done.appendChild(newTask);
        DeleteHandler();
    }
    function DeleteHandler() {
        let deleteElements = document.querySelectorAll('.delete');
        deleteElements.forEach(function(element) {
            element.removeEventListener('click', deleteClick);
            element.addEventListener('click', deleteClick);
        });
    }
    function deleteClick() {
        this.parentNode.remove();
    }
})















let todo = ['123','321','543']
let process = ['321', '123', '22']
let done = ['d']

function print() {
    const container = document.getElementById('dwadwa')
    todo.forEach(function(element){
        let tag = document.createElement('p')
        tag.addEventListener('click', updateHandler)
        tag.innerText = element;
        container.appendChild(tag)
    })
}
print()
function updateHandler(e){
    console.log(e)
}





















