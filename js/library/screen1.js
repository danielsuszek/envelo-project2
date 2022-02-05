const errors = {
  phoneErr: {
    isError: false,
    message: 'Nr tel to 9 cyfr',
    validLength: 9
  },
  codeErr: {
    isError: false,
    message: 'Kod to 4 cyfry',
    validLength: 4
  }
}

const hasWhiteSpace = (s) => /\s/g.test(s);

export const runScreen2 = () => {
  const phone = document.querySelector('.inputPhone')
  
  phone.addEventListener('input', (e) => {   
    let val = e.target.value
    if (hasWhiteSpace(val)) {
      phone.value = val.replace(/\s/g, '') 
    } 
    let x = phone.value
    let isNumber = (!isNaN(x)) ? 'number' : 'not number'
    console.log('x', x, isNumber);
  })
  
}