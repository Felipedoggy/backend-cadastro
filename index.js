import Cliente from './model/clientes.js';

var cliente = new Cliente("1", "Fulano", "m8h3i@example.com", "9999-9999");

cliente.gravar().then(() => {
    console.log("Gravado com sucesso");
}).catch((error) => {
    console.log("Erro ao gravar: " + error);
}); 