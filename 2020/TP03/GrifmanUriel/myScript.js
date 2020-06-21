function validarCheckbox(){
    var checkBoxes = document.getElementsByClassName( 'CheckBox' );
    var isChecked = false;
    for (var i = 0; i < checkBoxes.length; i++) {
        if ( checkBoxes[i].checked ) {
            isChecked = true;
        };
    };
    if ( !isChecked ) {
        alert( 'Error, debes elegir por lo menos un Hobby' );
        event.preventDefault()
    }
}

function validarClaves(form){
    var password1 = form.psw.value;
    var password2 = form.psw2.value;
    if (password1 != password2){
        alert( 'Error, las contraseñas no son las mismas' );
        return false;
    }
}