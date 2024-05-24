import JatekTer from "./Jatekter";

export default class Elem{
    #ertek;
    #szuloElem;
    #divElem;
    #id;
    constructor(ertek, szuloElem){
        this.#ertek=ertek;
        this.#szuloElem=szuloElem;
        this.#megjelenit();
        this.#divElem=this.#szuloElem.children("div:last-child");
        this.#divElem.on("click", ()=>{
            console.log(this.#id);
            this.#trigger("lepes");
        })
    }

    #megjelenit(){
        let txt = `<div><p>${this.#ertek}</p></div>`;
        this.#szuloElem.append(txt);
    }
    #trigger(esemenynev){
        const e = new CustomEvent(esemenynev, {detail:this.#id})
        window.dispatchEvent(e);
    }
}