const formSteps = document.querySelectorAll(".formstep");

const prevButton = document.querySelector("#prev");
const nextBtn = document.querySelector("#siguiente");

const setProgress = (n) => {
    for (let i = 1; i <= n; i++) document.querySelector(`#pr-${i}`).style.backgroundColor = "#FFB931";
    for (let i = n + 1; i <= 6; i++) document.querySelector(`#pr-${i}`).style.backgroundColor = "grey";
}

function getTemp(name, ph, type) {
    return `
                      <label for="${name}">${ph}</label>
                       <input type="${type}" name="${name}" placeholder = "${ph}" id="${name}">
    
   `

}


const setStep = (n) => {
    if (n == 1) prevButton.style.display = "none";
    else prevButton.style.display = "inline";

    if (n == 6) nextBtn.style.display = "none";
    else nextBtn.style.display = "inline";

    [...formSteps].filter((f) => f.id != `form-${n}`).map(e => e.style.display = "none");
    document.querySelector(`#form-${n}`).style.display = "block";
}

const nextStep = () => {
    if (currStep < 6) {
        const regForm = document.forms.registrar;

        if (currStep == 1){
            if (! (regForm.name.value && regForm.surname.value && regForm.mail.value && regForm.password.value)){
                alert("Complete todos los campos de este paso, por favor.");
                return false;
            }

            if (! (regForm.password.value === regForm.confirmation.value)){
                alert("Las contraseñas no coinciden.");
                return false;
            }
        } else if (currStep == 2){
            if (! (regForm.birth.value && regForm.provincia.value != "placeholder" && regForm.localidad.value)){
                alert("Complete todos los campos de este paso, por favor.");
                return false;
            }
        } else if (currStep == 3){
            if (! (regForm.matematica.checked || regForm.deportes.checked ||regForm.politica.checked ||regForm.cocina.checked ||regForm.educacion.checked ||regForm.idiomas.checked)){
                alert("Seleccione al menos un interés.");
                return false;
            }
        } else if (currStep == 5){
            if (! (regForm.comida.value != "placeholder" && regForm.color.value && regForm.familia.value > 0)){
                alert("Complete todos los campos de este paso, por favor.");
                return false;
            }
        }

        if (currStep == 1) localStorage.setItem("name", regForm.name.value);
        
        currStep++;
        setStep(currStep);
        setProgress(currStep);

    }
}

const prevStep = () => {
    if (currStep > 1){
        currStep--;
        setStep(currStep);
        setProgress(currStep);
    }
}

let currStep = 1;

setStep(currStep);
setProgress(currStep);


document.addEventListener("keypress", (e) => {
    if (event.key === "Enter") {
        event.preventDefault();
        nextStep();
    }
})