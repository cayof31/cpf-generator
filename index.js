

//O começo
let totalDIG1 = 0;
let totalDIG2 = 0;
const button = document.querySelector(".btnCPF");
const input = document.querySelector("#qtd-cpf").value;
const divBD = document.querySelector('.divBD');
function gerCPF() {
    //gera um numero aleatório entre 0 e 999999999
  const preCPF = Math.floor(Math.random() * 999999999 + 1);
  //quebra o numero ex: 9,9,9...
  const validaARRAY = String(preCPF).padStart(9, "0").split("");
  //tranforma a array String em Integer
  const intARRAY = validaARRAY.map((item) => {
    return parseInt(item);
  });
  let a = 10;
    //Multiplica cada item do array por 10--(ex:[0]*10,[1]*9...)
  const digARRAY = intARRAY.map((item) => {
    let num = item * a;
    a--;
    totalDIG1 += num;
   
  });
  //define o primeiro digito de validação ( resto da divisão arredondada < 2 = 0 ) || (11 - (o resto da divisao arredondada))
  let restoDivisaoDGT1 = totalDIG1 % 11;
  if (restoDivisaoDGT1 < 2) {
    intARRAY[9] = 0;
  } else {
    intARRAY[9] = 11 - restoDivisaoDGT1;
  }

  let x = 11;
  const dig2ARRAY = intARRAY.map((item) => {
    let num = item * x;
    x--;
    totalDIG2 += num;
    return num;
  });

  let restoDivisaoDGT2 = totalDIG2 % 11;
  if (restoDivisaoDGT2 < 2) {
    intARRAY[10] = 0;
  } else {
    intARRAY[10] = 11 - restoDivisaoDGT2;
  }
  const elemento = document.createElement("p");

  elemento.textContent = intARRAY.join("").replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4"); 

  console.log(divBD);

  divBD.appendChild(elemento);
  const btn = document.createElement("button");
  divBD.appendChild(btn);
  btn.onclick = function() {
    elemento.parentNode.removeChild(elemento);
    btn.parentNode.removeChild(btn);
  };
}

button.onclick = function() {
  multiCPF(input);

   
};

function multiCPF(item) {
  let i = 0;
  while (i < item) {
    gerCPF();
    i++
  }
}

