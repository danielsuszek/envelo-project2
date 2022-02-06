export const runCheckedScreen = () => {
  const screenWrapper0 = document.querySelector(".screenWrapper__screen-0").parentElement  
  const screenWrapper1 = document.querySelector(".screenWrapper__screen-1").parentElement  
  const screenWrapper2Modal = document.querySelector(".screenWrapper__screen-2-modal")
  const btnGoScreen0 = document.querySelector(".btn-goScreen0")
  const btnGoScreen1 = document.querySelector(".btn-goScreen1")
  const inputPhone = document.querySelector(".inputPhone")
  const inputCode = document.querySelector(".inputCode")
  
  
  btnGoScreen0.addEventListener('click', () => {
    screenWrapper2Modal.style.display = 'none'
    screenWrapper1.classList.add('hide')
    screenWrapper0.classList.remove('hide')
  })
  btnGoScreen1.addEventListener('click', () => {
    screenWrapper2Modal.style.display = 'none'
    inputPhone.value = ''
    inputCode.value = ''
    inputCode.disabled = true
  })
}