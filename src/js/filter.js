const searchformEl=document.querySelector('.search')

searchformEl.search.addEventListener("input",()=>{
    const searchvalue=searchformEl.search.value.toLowerCase();
    const cardsItem=document.querySelectorAll('.cards__item')
    const cardsTitle=document.querySelectorAll('.cards__title')
    cardsTitle.forEach((title,i) => {
        if (title.textContent.toLowerCase().includes(searchvalue)) {
            cardsItem[i].style.display='block'
        }else{
            cardsItem[i].style.display='none'
        }
    });
})

const searchSelect=document.querySelectorAll('.search__select-list li')
const searchSelectSpan=document.querySelectorAll('.search__select li')
import { createContries } from "./updateUI";
import request from "./request";
searchSelect.forEach((li)=>{
    li.addEventListener("click",()=>{
        searchSelectSpan.textContent=li.textContent
        let filterAPI


        if (li.textContent=='All') {
            filterAPI='https://restcountries.com/v3.1/all'
        }else{
            filterAPI=`https://restcountries.com/v3.1/region/${li.textContent}`
        }

        request(filterAPI).then((data)=>{
            createContries(data)
        }).catch((err)=>{
            alert(err.message)
        })
    });
})