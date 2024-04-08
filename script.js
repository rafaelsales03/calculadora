const button = document.querySelector(".btn");
const p = document.querySelector("#resultado");

const buttom = (value) => {
  const numero = p.innerHTML;
  p.innerHTML = numero + value;
};

const clean = () => {
  p.innerHTML = "";
};

const back = () => {
  const resultado = p.innerHTML;
  p.innerHTML = resultado.substring(0, resultado.length - 1);
};

const calcular = () => {
  const resultado = p.innerHTML;

  if (resultado) {
    p.innerHTML = eval(resultado);
  }
};
