import * as CUI from './m_cui/m_cui.js';

/**
 * Es una función manejador de eventos para el evento input en la página.
 * 
 * Se agrega un listener al documento que escucha cualquier evento de input.
*/
function eventoInput(){
    document.addEventListener("input", (e)=>{

        // Esto imprimirá en la consola todo el objeto de evento generado por el clic.
        // Es útil cuando quieres ver todos los detalles sobre el evento.
        // console.log(e);
        // Esto imprimirá en la consola el elemento específico que fue clickeado.
        // Es útil cuando quieres saber exactamente qué elemento fue el que desencadenó el evento.
        // console.log(e.target);
        // Esto imprimirá en la consola la sintaxis HTML del elemento que fue clickeado,
        // incluyendo todos sus elementos hijos. Es útil cuando quieres ver la estructura
        // HTML del elemento que desencadenó el evento.
        // console.log(e.target.outerHTML);

        if(e.target.matches("input[data-evento-cui]")){
            CUI.validacion(e);
        }
    });
}

eventoInput();