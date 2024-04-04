// alert('Hello from JS');

const elFirstName = document.querySelector('.first-name');
const elLastName = document.querySelector('.last-name');

const firstName = 'Filan';
const lastName = 'Fisteku';

elFirstName.innerHTML = `<strong>${firstName}</strong>`;
elLastName.textContent = lastName;
