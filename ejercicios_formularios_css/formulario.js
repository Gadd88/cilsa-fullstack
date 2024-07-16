const form = document.getElementById('form')
const btnSubmit = document.getElementById('btn-submit')
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const emailRegexGeneric = /^[^@\s]+@[^@\s]+\.[^@\s]+/;

form.addEventListener('submit', (event) => {
    event.preventDefault()
    const formData = new FormData(form)
    const data = Object.fromEntries(formData.entries())
    if (!emailRegexGeneric.test(data.email)) {
        alert('Email invalido')
        return
    }
    if(data.name === '' || data.lastName === '' || data.email === '' || data.birthDate === '' || data.country === '') {
        alert('Todos los campos son requeridos')
        return
    }
    alert('Formulario Enviado')
    form.reset()
})

const btnContrast = document.getElementById('btn-contrast')

btnContrast.addEventListener('click', () => {
    document.body.classList.toggle('contrast')
})