const faqBx =   document.querySelectorAll('.faq-bx');

for(let i = 0; i<= faqBx.length; i++){
    faqBx[i].addEventListener("click", () => {
        for(let j = 0;  j < faqBx.length; j++){
            faqBx[j].classList.remove('show')
        }
        faqBx[i].classList.add('show')
    })
}