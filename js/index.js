
const navbar  =  document.querySelector('.navbar');
const menuBtn =  document.querySelector('.menu-bar-btn');
const closeNav =  document.querySelector('.close-nav-btn');
const headeroverlay =  document.querySelector('.nav-overlay');


menuBtn.addEventListener("click", () => {
    headeroverlay.classList.add('navactive');
    navbar.classList.add('navactive')
})

closeNav.addEventListener("click", () => {
    headeroverlay.classList.remove('navactive');
    navbar.classList.remove('navactive')
})

headeroverlay.addEventListener("click", (e) => {
    e.stopPropagation()
    headeroverlay.classList.remove('navactive');
    navbar.classList.remove('navactive');
})


// -------------------------------------------------------------
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

// ---------------------------

const dropDwnBtn  =  document.querySelectorAll('.custom-dropdown-Btn');
const tableBody =   document.querySelectorAll('.tableBody');

for(let i = 0;  i < dropDwnBtn.length ; i++){
    dropDwnBtn[i].addEventListener("click", () => {
        for(let j = 0; j < dropDwnBtn.length ; j++){
        dropDwnBtn[j].classList.remove('activedropdwn');

        }
        dropDwnBtn[i].classList.add('activedropdwn');

       const dataFilter =  dropDwnBtn[i].getAttribute('data-filter');

       for(let k = 0;  k < tableBody.length ; k++){
        if(tableBody[k].getAttribute('data-table') === dataFilter){
            tableBody[k].classList.remove('hide');
            tableBody[k].classList.add('showtablebody');

        }else{
            tableBody[k].classList.add('hide');
            tableBody[k].classList.remove('showtablebody');
        }
       }
       
        
    })
}
