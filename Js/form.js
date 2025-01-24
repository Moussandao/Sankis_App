const switchBtn = document.getElementById('switch-to-register');
const switchBtn2 = document.getElementById('switch-to-login');
const loginSection = document.querySelector('.login');
const registerSection = document.querySelector('.register');

switchBtn.addEventListener('click', () => {
  loginSection.classList.add('hide');
  registerSection.classList.remove('hide');
});

switchBtn2.addEventListener('click', () => {
  loginSection.classList.remove('hide');
  registerSection.classList.add('hide');
});

