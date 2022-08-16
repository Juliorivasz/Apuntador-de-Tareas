// immediately invoked function expression (abreviacion IIFE)
// ( () => {})();
import { addtask } from "./components/addTask.js";
import { displayTasks } from "./components/displayTasks.js"

const btn = document.querySelector('[data-form-btn]');

btn.addEventListener('click', addtask); 

displayTasks();
// API DEL NAVEGADOR PARA CONFIGURAR FECHAS Y HORARIOS  
// const data = new Date();
// const dataOptions = {
//     day: 'numeric',
//     weekend: 'long',
//     year: 'numeric',
//     month: 'long'
    
// }

// const horarioOptions = {
//     hour12: false,
//     hour: 'numeric',
//     minute: '2-digit',
//     second: '2-digit',
//     timeZone: 'America/Mendoza'
// }

// data.toLocaleString('es-MX',{
//     ...dataOptions,
//     ...horarioOptions
// });

// const formataData = new Intl.DateTimeFormat('es-MX', {
//     ...dataOptions,
//     ...horarioOptions
// });

// const dateServer = formataData.format(data);