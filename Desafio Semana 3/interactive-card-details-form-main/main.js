// Seus usuários devem ser capazes de:

// Preencha o formulário e veja a atualização dos dados do cartão em tempo real
// Receba mensagens de erro quando o formulário for enviado se:
// Qualquer campo de entrada está vazio
// O número do cartão, a data de validade ou os campos CVC estão no formato incorreto
// Visualize o layout ideal dependendo do tamanho da tela do dispositivo
// Veja os estados de focalização, ativo e foco para elementos interativos na página

// Comportamento esperado:

// - Atualize os detalhes no cartão à medida que o usuário preenche os campos

//Formulário

const cardName = document.getElementById('nome');
const cardNumber = document.getElementById('cardNumber');
const erroNumero = document.getElementById('erroNumero');
const expDate = document.getElementById('expDate');
const erroMes = document.getElementById('erroMes');
const MMYY = document.getElementById('MMYY');
const erroAno = document.getElementById('erroAno');
const cvc = document.getElementById('CVC');
const erroCVC = document.getElementById('erroCVC');

const cardNameAtualizado = document.getElementsByClassName('nome')[0];
const cardNumberAtualizado = document.getElementsByClassName('numeros')[0];
const expDateAtualizado = document.getElementsByClassName('validadeM')[0];
const MMYYAtualizado = document.getElementsByClassName('validadeA')[0];
const cvcAtualizado = document.getElementsByClassName('numerosTras')[0];

const formulario = document.getElementById('formulario')

const button = document.getElementById('botão');

const form = document.querySelector('#formulario');


function envioDados() { 

  const errors = document.querySelectorAll('.error-message');
  const hasErrors = Array.from(errors).some(error => error.textContent == 'Este campo é obrigatório' || error.textContent == 'Formato Inválido');


  if (hasErrors) {
    return alert('Preencha os campos corretamente');
  }

  console.log('Dados do formulário enviados com sucesso!');
  formulario.submit();
  return alert('Seus dados foram enviados com sucesso!');
};



button.addEventListener("click", () => {

  let isEmpty = false;

  for (let i = 0; i < form.elements.length; i++) {
    if (form.elements[i].value === '') {
      isEmpty = true;
      break;
    }
  }

  // exibe uma mensagem de erro se algum campo estiver vazio
  if (isEmpty) {
    alert('Por favor, preencha todos os campos!');
    console.log("dados")
    return;
  }   

  if (!envioDados()) {
    return;
  }

  formulario.reset();
  cardNameAtualizado.innerHTML = "Jane Appleseed";
  cardNumberAtualizado.innerHTML = "0000 0000 0000 0000";
  expDateAtualizado.innerHTML = "00/";
  MMYYAtualizado.innerHTML = "00";
  cvcAtualizado.innerHTML = "000";
});

function trasformarDate(data) {
  if (data.length === 1 && data >= '1' && data <= '9') {
    return `0${data}`;
  }

  return data;
}


// - Se não houver erros, exibe o estado concluído

function validarCampo(tag, tagErro, maxLength) {
  if (tag.value == "0") {
    tagErro.textContent = "Este campo é obrigatório"
  } else if (tag.value.length != maxLength) {
    tagErro.textContent = "Formato Inválido";
  } else {
    tagErro.textContent = "";
    return false;
  }

  return true;
}


cardName.addEventListener("input", () => {
  cardNameAtualizado.innerHTML = cardName.value;
});


cardNumber.addEventListener("input", () => {
  let numeroFormatado = cardNumber.value.replace(/\d{4}(?=.)/g, "$& ");

  if (validarCampo(cardNumber, erroNumero, 16)) {
    return;
  }  
  cardNumberAtualizado.innerHTML = numeroFormatado;
});


expDate.addEventListener("input", () => {
  if (validarCampo(expDate, erroCVC, 1)) {
    return;
  }
  expDate.value = trasformarDate(expDate.value);
  expDateAtualizado.innerHTML = expDate.value;
});


MMYY.addEventListener("input", () => {
  if (validarCampo(MMYY, erroCVC, 1)) {
    return;
  }
  MMYY.value = trasformarDate(MMYY.value)
  MMYYAtualizado.innerHTML = MMYY.value;
});


cvc.addEventListener("input", () => {
  if (validarCampo(cvc, erroCVC, 3)) {
    return;
  }
  cvcAtualizado.innerHTML = cvc.value;
});


// - Valide os campos do formulário quando o formulário for enviado

// - Redefina o formulário quando o usuário clicar em "Continuar" no estado concluído