const modeBtn=document.querySelector('.header__dark-mode')
const body = document.querySelector('body')
const modeFromlocal=localStorage.getItem('mode')?localStorage.getItem('mode'):null

if (modeFromlocal) {
    body.classList.add('dark-mode')
}
modeBtn.addEventListener('click',()=>{
    body.classList.toggle('dark-mode')
    modeFromlocal?localStorage.setItem('mode',''):localStorage.setItem('mode','dark')
})