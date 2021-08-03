import Corretor from "./Corretor";

export default class CorretorComissionado extends Corretor {
    percentualComissao: number = 0.01;

    constructor() { 
        super();
    }
}