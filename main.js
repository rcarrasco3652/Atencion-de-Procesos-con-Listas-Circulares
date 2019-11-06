import Proceso from "./Proceso.js";
import Cola from "./Cola.js";


class Main{
    constructor(){
        document.getElementById('iniciar').addEventListener('click', () => {
            let newCola = new Cola();
            newCola.iniciar()
        });
    }
}

let m = new Main();