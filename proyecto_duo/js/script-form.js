const form = document.getElementById('contact-form')
const btnSubmit = document.getElementById('btn-submit')
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const emailRegexGeneric = /^[^@\s]+@[^@\s]+\.[^@\s]+/;

form.addEventListener('submit', (event) => {
    event.preventDefault()
    const formData = new FormData(form)
    const data = Object.fromEntries(formData.entries())
    const validForm = validateForm(data)
    if (!validForm) return
    if (!emailRegexGeneric.test(data.email)) {
        alert('Email invalido')
        return
    }
    alert('Formulario Enviado')
    form.reset()
})


const validateInput = (inputName, value) => {
    if(value.trim() === '') {
        return alert(`El campo ${inputName} no puede estar vacio`)
    }
    if(value.trim().length < 3 || value.trim().length > 50) {
        return alert(`El campo ${inputName} debe contener entre 3 y 50 caracteres`)
    }
    return true
}

const validateForm = (formData) => {
    return Object.keys(formData).every(prop => validateInput(prop, formData[prop]))
}