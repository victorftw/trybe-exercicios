const btnEnviar = document.querySelector('#btn-enviar');
const inputNome = document.querySelector('#nome-completo');
const inputEmail = document.querySelector('#email');
const inputRequired = document.getElementById('direito-imagens');

btnEnviar.addEventListener('click', (event) => {
  event.preventDefault();

  if (
    inputNome.value.length < 10 ||
    inputNome.value.length > 50 ||
    inputEmail.value.length < 10 ||
    inputEmail.value.length > 50
  ) {
    alert('Dados Inválidos.');
  } else {
    alert(
      'Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.'
    );
  }
});

// function textInputValidation() {
//   const email = document.querySelector('#email').value.length;
//   const invalidEmail = email < 10 || email > 50;

//   const name = document.querySelector('#nome-completo').value.length;
//   const invalidName = name < 10 || name > 40;

//   if (invalidEmail || invalidName) {
//     return false;
//   } else {
//     return true;
//   }
// }

// function handleSubmit(event) {
//   event.preventDefault();
//   const validation = textInputValidation();
//   if (validation === false) {
//     alert('Dados inválidos');
//   } else {
//     alert(
//       'Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.'
//     );
//   }
// }

// btnEnviar.addEventListener('click', handleSubmit);
