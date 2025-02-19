import ClienteDB from "./clienteDB.js";
export default class Cliente {
    #id
    #nome;
    #email;
    #telefone;

    constructor(id, nome, email, telefone) {
        this.#id = id;
        this.#nome = nome;
        this.#email = email;
        this.#telefone = telefone;
    }

    get id() {
        return this.#id;
    }

    get nome() {
        return this.#nome;
    }

    get email() {
        return this.#email;
    }

    get telefone() {
        return this.#telefone;
    }

    set id(id) {
        this.#id = id;
    }

    set nome(nome) {
        this.#nome = nome;
    }

    set email(email) {
        this.#email = email;
    }

    set telefone(telefone) {
        this.#telefone = telefone;
    }
    toJSON() {
        return {
            "id": this.#id,
            "nome": this.#nome,
            "email": this.#email,
            "telefone": this.#telefone
        }
    }

    async gravar() {
        const cliDB = new ClienteDB();
        cliDB.gravar(this);
    }

    async alterar() {
        const cliDB = new ClienteDB();
        cliDB.alterar(this);
    }

    async excluir() {
        const cliDB = new ClienteDB();
        cliDB.excluir(this);
    }

    async consultar() {
        const cliDB = new ClienteDB();
        return await cliDB.consultar(this);
    }

}