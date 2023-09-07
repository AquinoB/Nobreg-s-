let prevScrollPos = window.scrollY;
const header = document.querySelector("header");

window.onscroll = () => {
  const currentScrollPos = window.scrollY;

  if (prevScrollPos > currentScrollPos) {
    header.classList.remove("hidden");
  } else {
    header.classList.add("hidden");
  }

  if (prevScrollPos > 600) {
    header.classList.add("no-transparency");
  } else {
    header.classList.remove("no-transparency");
  }

  prevScrollPos = currentScrollPos;
};

const produtoSchema = {
  id: 'int',
  tipo: 'P2, P13, P20, P45, P90',
  quantidade: 'number',
  placaDoMotorista: 'string',
  qtdLevando: 'number',
  qtdChegando: 'number'
}



