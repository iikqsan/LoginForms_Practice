function submitButton(){
    let usernameDOM = document.querySelector('input[name=username]')
    let passwordDOM = document.querySelector('input[name=password]')

    let firstNameDOM = document.querySelector('input[name=firstname]')
    let lastNameDOM = document.querySelector('input[name=lastname]')

    let genderDOM = document.querySelector('input[name=gender]:checked')

    let ageDOM = document.querySelector('input[name=age]')
    let addressDOM = document.querySelector('input[name=address]')
    let phoneNumberDOM = document.querySelector('input[name=phonenumber]')

    //สร้าง object รับค่าเพื่อไปแปลงเป็น JSON ส่งข้อมูลให้กับ Backend
    let userData = {
        username: usernameDOM.value,
        password: passwordDOM.value,
        firstname: firstNameDOM.value,
        lastName: lastNameDOM.value,
        gender: genderDOM.value,
        age: ageDOM.value,
        address: addressDOM.value,
        phonenumber: passwordDOM.value
    }

    console.log('submit', userData)
}

//ปุ่ม clear forms
let clearDOM = document.querySelectorAll('.form-control')
function clearButton(){
    for (let i = 0; i < clearDOM.length ; i++){
        console.log(clearDOM[i].value = "")
    }
}
