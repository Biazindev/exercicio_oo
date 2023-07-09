function Tv(marca) {
    this.marca = marca;
}

function Especificacoes(modelo, tamanho, tela) {
    this.modelo = modelo;
    this.tamanho = tamanho;
    this.tela = tela;
}

function Preco(a_vista, a_prazo) {
    this.A_vista = a_vista;
    this.A_prazo = a_prazo;
}


const tv1 = new Tv("Samsung");
const especificacoes1 = new Especificacoes("SmarTV", "72 polegadas", "FullHD");
const preco1 = new Preco("5.999,99", "7.999,99");
console.log(tv1);
console.log(especificacoes1);
console.log(preco1);
