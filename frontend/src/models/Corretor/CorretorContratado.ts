import Corretor from "./Corretor";

export default class CorretorContratado extends Corretor{
    salario: number = 0;
    dataAdmissao: string = "";

    constructor() {
        super();
    }
}