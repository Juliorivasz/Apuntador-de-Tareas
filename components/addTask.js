import { orderDates, uniqueDate } from "../services/date.js";
import checkComplete from "./checkComplete.js";
import deleteIcon from "./deleteIcon.js";
import { displayTasks } from "./displayTasks.js";

export const addtask = (evento) => {
    evento.preventDefault();
    const list = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form-input]');
    const calendar = document.querySelector('[data-form-date]');

    const date = calendar.value;
    const value = input.value;
    const dateFormat = moment(date).format('DD/MM/YYYY');
    
    if(value === '' || date === ''){
        return;
    }

    input.value = '';
    calendar.value = '';

    const complete = false;

    const taskObj = {
        value,
        dateFormat,
        complete,
        id: uuid.v4()
    }

    list.innerHTML = '';
    // hace que se guarde solo mientras no se cierre la sesion
    // sessionStorage.setItem('tasks', JSON.stringify(taskObj));
    // json.stringify convierte un obj en string
    // json.parse convierte un string en obj

    const tasklist = JSON.parse(localStorage.getItem('tasks')) || [];
    tasklist.push(taskObj);
    localStorage.setItem('tasks', JSON.stringify(tasklist));
    displayTasks();
}

export const createTask = ({value,dateFormat, complete, id}) => {
// preventDefault evita que se actualize la pagina despues de una accion
    const task = document.createElement('li');
          task.classList.add('card');

    const check = checkComplete(id);

    if(complete){
        check.classList.toggle('fas');
        check.classList.toggle('completeIcon');
        check.classList.toggle('far');
    }

    const taskContent = document.createElement('div');
          

    const tittle = document.createElement('span');
          tittle.classList.add('task');
          tittle.innerText = value;
          taskContent.appendChild(check);
          taskContent.appendChild(tittle);

    const dateElement = document.createElement('span');
        //   dateElement.innerHTML = dateFormat;
          task.appendChild(taskContent);
          task.appendChild(dateElement);
          task.appendChild(deleteIcon(id));
          return task;
};