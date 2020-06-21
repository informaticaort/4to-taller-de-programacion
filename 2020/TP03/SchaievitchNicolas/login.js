const validateForm = () => {
    const formEl = document.forms.login;
    if (!formEl.mail.value || !formEl.password.value) {
        alert("Por favor, complete todos los campos.")
        return false;
    }
}