const checkbox = document.getElementById('checkbox')
const professional = document.getElementById('professional')
const master = document.getElementById('master')
const basic = document.getElementById('basic')

checkbox.addEventListener('click', () => {
  basic.textContent = basic.textContent === '$19.99' ? '$199.99' : '$19.99'
  professional.textContent = master.textContent =
    master.textContent === '$39.99' ? '$399.99' : '$39.99'
  professional.textContent === '$24.99 ' ? '$249.99' : '$24.99'
})
