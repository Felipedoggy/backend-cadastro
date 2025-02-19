import conectar from './conexao.js';
import Cliente from '../model/clientes.js';
export default class ClienteDB {
    constructor() {
        this.init();
    }
    async init() {
        try {
        const conexao = await conectar();
        const sql = "CREATE TABLE IF NOT EXISTS cliente (id INT AUTO_INCREMENT PRIMARY KEY, nome VARCHAR(50), email VARCHAR(50), telefone VARCHAR(15))";
        await conexao.execute(sql);
        } catch (error) {
            console.log("houve erro ao iniciar a tabela cliente" + error);
        }
    }
    async gravar(cliente) {
        if (cliente instanceof Cliente) {
            const conexao = await conectar();
            const sql = "INSERT INTO cliente (id, nome, email, telefone) VALUES (?, ?, ?, ?)";
            const parametros = [cliente.id, cliente.nome, cliente.email, cliente.telefone];
            await conexao.execute(sql, parametros);
            conexao.release();
        }
 
    }
    async alterar(cliente) {
        if (cliente instanceof Cliente) {
            const conexao = await conectar();
            const sql = "UPDATE cliente SET nome = ?, email = ?, telefone = ? WHERE id = ?";
            const parametros = [cliente.nome, cliente.email, cliente.telefone, cliente.id];
            await conexao.execute(sql, parametros);
            conexao.release();
        }


    }
    async excluir(cliente) {
        if (cliente instanceof Cliente) {
            const conexao = await conectar();
            const sql = "DELETE FROM cliente WHERE id = ?";
            const parametros = [cliente.id];
            await conexao.execute(sql, parametros);
            conexao.release();
        }
 

    }
    async consultar(cliente) {
        const conexao = await conectar();
        const sql = "SELECT * FROM cliente WHERE nome = ?";
        const parametros = [cliente.nome];
        const [registros, campos] = await conexao.execute(sql, parametros);
        conexao.release();
        let listaClientes = [];
        for (const registro of registros) {
            const cliente = new Cliente(registro.id, registro.nome, registro.email, registro.telefone);
            listaClientes.push(cliente);
        }
        return listaClientes;
    }
}