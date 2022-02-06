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
  if (isError) {
    el.innerText = errors.phoneErr.errorMessage
    el.classList.add('error')
  } else {
    el.innerText = errors.phoneErr.message
    el.classList.remove('error')
  }
}

export const runScreen2 = (p) => {
  const phone = document.querySelector('.inputPhone')
  const code = document.querySelector('.inputCode')
  const phone__label = document.querySelector('.phone__label')
  
  phone.addEventListener('click', (e) => {
    code.disabled = true
  })
  phone.addEventListener('input', (e) => {   
    let val = e.target.value

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
    console.log(code);
  })
}