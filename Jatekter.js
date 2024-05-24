import Elem from "./Elem.js";

export default class JatekTer{
    #aktElem="X";
    #lista=[" "," "," "," "," "," "," "," "," "];
    constructor(){
        this.#megjelenit();

        $(window).on("lepes",(event)=>{
            console.log(event.detail);
            let id = event.detail
            this.#beallit(id);
        })
    }

    #beallit(id){
        this.#lista[id]=this.#aktElem;
        this.#aktElem ==="X"?this.#aktElem="O":this.#aktElem="X";
        this.#megjelenit()
    }

    #megjelenit(){
        this.#lista.forEach((element,index) => {
            new Elem(element,$(".jatekter"))
        });
    }
}