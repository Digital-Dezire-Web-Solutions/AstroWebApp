
const newAcntBtn =  document.querySelector('#newAcnt');
const formBx =  document.querySelector('.login-bx');
const haveAnAcnt =  document.querySelector('#signInBtn');
const formComp = document.querySelector('.login-reg-comp');
const closeForm = document.querySelector('.close-form-btn');
const loginBtn =  document.querySelector('#login_btn');
const loginBtn2 =  document.querySelector('#login_btn2');

newAcntBtn.addEventListener("click", () => {
    formBx.classList.add('registeractive');
})


haveAnAcnt.addEventListener("click", () => {
    formBx.classList.remove('registeractive');
    formBx.scrollTop = 0
})

formBx.addEventListener("click", (e) => {
    e.stopPropagation();
})

formComp.addEventListener("click", () => {
    formComp.classList.remove('formactive');
})

closeForm.addEventListener("click", () => {
    formComp.classList.remove('formactive');
})

loginBtn.addEventListener("click", () => {
    formComp.classList.add('formactive')
})
loginBtn2.addEventListener("click", () => {
    formComp.classList.add('formactive')
})



