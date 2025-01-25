const switchBtn = document.getElementById('switch-to-register');
const switchBtn2 = document.getElementById('switch-to-login');
const Wrapper = document.querySelector('.wrapper');

switchBtn.addEventListener('click', (e) => {
  e.preventDefault();
  Wrapper.classList.add("hidden")
});

switchBtn2.addEventListener('click', (e) => {
   e.preventDefault();
  Wrapper.classList.remove('hidden');
});
 
