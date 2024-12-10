
const newAcntBtn =  document.querySelector('#newAcnt');
const formBx =  document.querySelector('.login-bx');
const haveAnAcnt =  document.querySelector('#signInBtn');
const formComp = document.querySelector('.login-reg-comp');
const closeForm = document.querySelector('.close-form-btn');
const loginBtn =  document.querySelector('#login_btn');

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

const faqBx =   document.querySelectorAll('.faq-bx');

for(let i = 0; i<= faqBx.length; i++){
    faqBx[i].addEventListener("click", () => {
        for(let j = 0;  j < faqBx.length; j++){
            faqBx[j].classList.remove('show')
        }
        faqBx[i].classList.add('show')
    })
}


