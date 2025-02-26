function Telefone(ddd, numero) {
  this.ddd = ddd;
  this.numero = numero;

  Object.defineProperty(this, "pegarDdd", {
    get: function () { return this.ddd; },
    set: function (novoDdd) { this.ddd = novoDdd; }
  });

  Object.defineProperty(this, "pegarNumero", {
    get: function () { return this.numero; },
    set: function (novoNumero) { this.numero = novoNumero; }
  });

  this.dddCaixaAlta = function () { return this.ddd.toUpperCase(); };
  this.dddCaixaBaixa = function () { return this.ddd.toLowerCase(); };
  this.numeroCaixaAlta = function () { return this.numero.toUpperCase(); };
  this.numeroCaixaBaixa = function () { return this.numero.toLowerCase(); };

  Object.defineProperty(this, "descricao", {
    get: function () {
      return `\nTelefone:\nDDD: ${this.ddd}\nNúmero: ${this.numero}\n`;
    }
  });
}


function Endereco(estado, cidade, rua, numero) {
  this.estado = estado;
  this.cidade = cidade;
  this.rua = rua;
  this.numero = numero;

  Object.defineProperty(this, "pegarEstado", {
    get: function () { return this.estado; },
    set: function (novoEstado) { this.estado = novoEstado; }
  });

  Object.defineProperty(this, "pegarCidade", {
    get: function () { return this.cidade; },
    set: function (novaCidade) { this.cidade = novaCidade; }
  });

  Object.defineProperty(this, "pegarRua", {
    get: function () { return this.rua; },
    set: function (novaRua) { this.rua = novaRua; }
  });

  Object.defineProperty(this, "pegarNumero", {
    get: function () { return this.numero; },
    set: function (novoNumero) { this.numero = novoNumero; }
  });

  this.estadoCaixaAlta = function () { return this.estado.toUpperCase(); };
  this.estadoCaixaBaixa = function () { return this.estado.toLowerCase(); };
  this.cidadeCaixaAlta = function () { return this.cidade.toUpperCase(); };
  this.cidadeCaixaBaixa = function () { return this.cidade.toLowerCase(); };
  this.ruaCaixaAlta = function () { return this.rua.toUpperCase(); };
  this.ruaCaixaBaixa = function () { return this.rua.toLowerCase(); };
  this.numeroCaixaAlta = function () { return this.numero.toUpperCase(); };
  this.numeroCaixaBaixa = function () { return this.numero.toLowerCase(); };

  Object.defineProperty(this, "descricao", {
    get: function () {
      return `\nEndereço:\nRua: ${this.rua}\nNúmero: ${this.numero}\nCidade: ${this.cidade}\nEstado: ${this.estado}\n`;
    }
  });
}


function Cliente(nome, telefone, email, endereco) {
  this.nome = nome;
  this.telefone = telefone;
  this.email = email;
  this.endereco = endereco;


  Object.defineProperty(this, "pegarNome", {
    get: function () { return this.nome; },
    set: function (novoNome) { this.nome = novoNome; }
  });

  Object.defineProperty(this, "pegarTelefone", {
    get: function () { return this.telefone; },
    set: function (novoTelefone) { this.telefone = novoTelefone; }
  });

  Object.defineProperty(this, "pegarEmail", {
    get: function () { return this.email; },
    set: function (novoEmail) { this.email = novoEmail; }
  });

  Object.defineProperty(this, "pegarEndereco", {
    get: function () { return this.endereco; },
    set: function (novoEndereco) { this.endereco = novoEndereco; }
  });

  this.nomeCaixaAlta = function () { return this.nome.toUpperCase(); };
  this.nomeCaixaBaixa = function () { return this.nome.toLowerCase(); };
  this.emailCaixaAlta = function () { return this.email.toUpperCase(); };
  this.emailCaixaBaixa = function () { return this.email.toLowerCase(); };

  Object.defineProperty(this, "descricao", {
    get: function () {
      return `---------------\nInformações do Cliente:\n${this.nome}\n---------------\n---------------${this.telefone.descricao}\n---------------${this.endereco.descricao}\n---------------`;
    }
  });
}


function ordenarClientesPorNome(arrayClientes) {
  return [...arrayClientes].sort((a, b) => a.nome.localeCompare(b.nome));
}

// testando saida 

let cliente1 = new Cliente('Ana Beatriz Silva', new Telefone('21', '888888888'), 'ana.b@app.com', new Endereco('RJ', 'Rio de Janeiro', 'Rua XV', '123'));
let cliente2 = new Cliente('João Pedro Almeida', new Telefone('31', '777777777'), 'joao.p@app.com', new Endereco('MG', 'Belo Horizonte', 'Av. Afonso Pena', '456'));
let cliente3 = new Cliente('Carlos Conrado Heinz', new Telefone('11', '999999999'), 'carlos.conrado@app.com', new Endereco('SP', 'São Paulo', 'Av. Paulista', '987'));

let listaClientes = [cliente1, cliente2, cliente3];
let listaOrdenada = ordenarClientesPorNome(listaClientes);

console.log("\n");
listaOrdenada.forEach(cliente => console.log(cliente.descricao));