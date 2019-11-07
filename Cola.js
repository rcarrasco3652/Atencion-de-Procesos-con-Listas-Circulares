import Proceso from "./Proceso.js";


export default class Cola{
    constructor(){
        this._primero = null;
        this._ultimo = null;
        this._cantProcesos = 0
        this._procesoAtendido = 0
        this._colaVacia = 0
    }

    iniciar(){
        
        let id = 1
        
        for(let i = 0;i<300;i++){
            if(this._primero == null){
                if(Math.floor(Math.random() * (100-1)+1) <= 39 ){
                    this._crearProceso(id);
                    id++;
                    this._cantProcesos++;
                } 
                var temporal = this._primero;
            }else{
                //Probabilidades de agregar un proceso
            if(Math.floor(Math.random() * (100-1)+1) <= 39 ){
                this._crearProceso(id);
                id++;
                this._cantProcesos++;
            } 
            
            
            if(temporal != null){
            //Eliminar proceso cuando sus ciclos lleguen a cero
                console.log('Entro')
                if(temporal.ciclos == 0){
                    
                    this._eliminarProceso(temporal);
                    this._cantProcesos--;
                    this._procesoAtendido++;
                    
                }
                temporal.ciclos--;
                temporal = temporal.siguiente;
            }else{
                //Contador de cola vacia
                this._colaVacia++;
            }
            

            }

            
            
            
            
            
            
        }
        console.log(this._primero);
        

        document.write(`Ciclos con cola vacia: ${this._colaVacia}
        Procesos atendidos: ${this._procesoAtendido}
        Cantidad de procesos pendientes: ${this._cantProcesos}`);
        
    }

    _crearProceso(id){
        let newProceso = new Proceso(Math.floor(Math.random()* (14-4)+4), id)

        if(this._primero == null){
            this._primero = newProceso;
            this._ultimo = newProceso;
            this._primero.siguiente = newProceso;
            this._ultimo.siguiente = newProceso;
        }else{
            newProceso.siguiente = this._primero;
            this._ultimo.siguiente = newProceso;
            this._ultimo = newProceso;

        }
    }
    _eliminarProceso(temporal){
        
        let anterior = this._buscarAnterior(temporal)
        if(temporal == this._primero && temporal == this._ultimo){
            this._primero = this._ultimo = null;
        }else if(temporal == this._primero){
            this._primero = temporal.siguiente;
            this._ultimo.siguiente = this._primero;
        }else if(temporal == this._ultimo){
            anterior.siguiente = this._primero;
            this._ultimo = anterior;
        }else{
            anterior.siguiente = temporal.siguiente;
        }
    }
    
    _buscarAnterior(temporal){
        let actual = this._primero;
        let termina = this._ultimo;

        if(actual == temporal){
            return termina;
        }else{
            while(actual.siguiente != temporal && termina != temporal){
                actual = actual.siguiente;
            }
        }

        return actual;
    }



}