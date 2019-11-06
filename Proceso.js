export default class Proceso{
    constructor(ciclos,id){
        this._ciclos = ciclos;
        this._id = id;
        this._siguiente = null;
    }
    get siguiente(){
        return this._siguiente;
    }
    get ciclos(){
        return this._ciclos;
    }
    set ciclos(newCiclos){
        this._ciclos = newCiclos;
    }
    get id(){
        return this._id;
    }


    set siguiente(newSiguiente){
        this._siguiente = newSiguiente;
    }
}