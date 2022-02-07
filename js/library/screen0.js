export const runScreen1 = () => {
  const screenWrapper0 = document.querySelector(".screenWrapper__screen-0").parentElement  
  const screenWrapper1 = document.querySelector(".screenWrapper__screen-1").parentElement  
  const btnGetParcel = document.querySelector(".btnGetParcel")
  const inputPhone = document.querySelector(".inputPhone")
  const inputCode = document.querySelector(".inputCode")

  
  btnGetParcel.addEventListener('click', () => {
    screenWrapper0.classList.add('hide')
    screenWrapper1.classList.remove('hide')
    inputPhone.value = ''
    inputCode.value = ''
    inputCode.disabled = true
  })
}