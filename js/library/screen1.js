const errors = {
  phoneErr: {
    isError: false,
    message: 'Numer telefonu',
    errorMessage: 'Numer telefonu to 9 cyfr',
    validLength: 9,
  },
  codeErr: {
    isError: false,
    message: 'Kod odbioru',
    errorMessage: 'Kod to 4 cyfry',
    validLength: 4,
  }
}

// helpers
const hasWhiteSpace = (s) => /\s/g.test(s);

const displayMessages = (el, isError) => {
  let errName = el.htmlFor + 'Err'
  if (isError) {
    el.innerText = errors[errName].errorMessage
    el.classList.add('error')
  } else {
    el.innerText = errors[errName].message
    el.classList.remove('error')
  }
}

// component runScreen2
export const runScreen2 = (p) => {
  const phone = document.querySelector('.inputPhone')
  const code = document.querySelector('.inputCode')
  const phone__label = document.querySelector('.phone__label')
  const code__label = document.querySelector('.code__label')
  const get__button = document.querySelector('.screen-1__btn button')
  
  phone.addEventListener('click', (e) => {
    code.disabled = true
  })
  phone.addEventListener('input', (e) => {   
    const val = e.target.value

    // replace white spaces with empty string, in my solution white spaces are not allowed
    if (hasWhiteSpace(val)) {
      phone.value = val.replace(/\s/g, '') 
    } 

    // check if phone is number
    errors.phoneErr.isError = (!isNaN(phone.value)) ? false : true

    // display messages in phone__label element
    displayMessages(phone__label, errors.phoneErr.isError)

    // if nr is valid enable and focus on code input
    if (phone.value.toString().length === errors.phoneErr.validLength
        && !errors.phoneErr.isError
    ) 
    {
      code.disabled = false
      code.focus()
    }
  })
  
  code.addEventListener('input', (e) => {
    const val = e.target.value

    if (hasWhiteSpace(val)) {
      code.value = val.replace(/\s/g, '') 
    } 

    errors.codeErr.isError = 
    (!isNaN(code.value) 
      && code.value.toString().length <= errors.codeErr.validLength)
     ? false : true

    displayMessages(code__label, errors.codeErr.isError)

    if (code.value.toString().length === errors.codeErr.validLength
        && !errors.codeErr.isError
    ) 
    {
      get__button.disabled = false      
    } else {
      get__button.disabled = true
    }
  })
}