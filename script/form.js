const inputValue = document.querySelectorAll('.form-control')
const genderValue = document.getElementsByName('genderRadio')

function submitButton(){
    for (let i = 0; i < inputValue.length ; i++){
        console.log(inputValue[i].value)
    }
    for (let i = 0; i < genderValue.length ; i++){
        if(genderValue[i].checked){
            console.log(genderValue[i].value)
        }
    }
}

function clearButton(){
    for (let i = 0; i < inputValue.length ; i++){
        console.log(inputValue[i].value = "")
    }
}