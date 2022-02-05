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

const hasWhiteSpace = (s) => /\s/g.test(s);

export const runScreen2 = (p) => {
  const phone = document.querySelector('.inputPhone')
  const code = document.querySelector('.inputCode')
  const phone__label = document.querySelector('.phone__label')
  
  phone.addEventListener('click', (e) => {
    code.disabled = true
  })
  phone.addEventListener('input', (e) => {   
    let val = e.target.value
    if (hasWhiteSpace(val)) {
      phone.value = val.replace(/\s/g, '') 
    } 
    // let x = phone.value
    // let isNumber = (!isNaN(phone.value)) ? false : true
    errors.phoneErr.isError = (!isNaN(phone.value)) ? false : true
    // let x = phone.value.toString().length
    // console.log(phone.value.toString().length);
    // console.log(p);
    // console.log(errors.phoneErr.isError);
    if (errors.phoneErr.isError) {
      phone__label.innerText = errors.phoneErr.errorMessage
      phone__label.classList.add('error')
    } else {
      phone__label.innerText = errors.phoneErr.message
      phone__label.classList.remove('error')
    }

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