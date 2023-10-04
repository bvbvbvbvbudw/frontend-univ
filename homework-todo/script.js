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
            element.addEventListener('click', function() {
                let el = element.parentNode;
                const text = el.innerText.split(' В процессі')[0];
                el.remove();
                const process = document.getElementById('process');
                const newTask = document.createElement("p");
                newTask.innerHTML = text + ' <span class="nextStepDone">Зроблено</span>';
                process.appendChild(newTask);
                DoneHandler();
            });
        });
    }

    function DoneHandler() {
        let nextStepDoneElements = document.querySelectorAll('.nextStepDone');
        nextStepDoneElements.forEach(function(element) {
            element.addEventListener('click', function() {
                let el = element.parentNode;
                const text = el.innerText.split(' Зроблено')[0];
                el.remove();
                const done = document.getElementById('done');
                const newTask = document.createElement("p");
                newTask.innerHTML = text + ' <span class="delete">Видалити</span>';
                done.appendChild(newTask);
                DeleteHandler();
            });
        });
    }

    function DeleteHandler() {
        let deleteElements = document.querySelectorAll('.delete');
        deleteElements.forEach(function(element) {
            element.addEventListener('click', function() {
                element.parentNode.remove();
            });
        });
    }
})
