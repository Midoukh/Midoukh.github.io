document.addEventListener('DOMContentLoaded', () => {
//grab
const nameFieald = document.querySelector('#name');
const yearOfBirthField = document.querySelector('#year-of-bearth');
const continueButton = document.querySelector('#continue');
const welecomPage = document.querySelector('.welecom');
const calcPage = document.querySelector('.calc-Age-page')
const container = document.querySelector('.container')
const user = document.querySelector('#user')
const fondOutBtn = document.querySelector('#find-out')
const yearCheckInput = document.querySelector("#year-check")
const result = document.querySelector('.result')
const switchSound = document.querySelector('audio');

calcPage.style.display = "none"
welecomPage.style.transform = "translateX(-25%)"

continueButton.addEventListener('click', () => {
    switchSound.play()
    if (nameFieald.value === ""){
        alert('Please Enter your name')
        // alert('Please only letter in the name field')
    }
    else if (!isNaN(nameFieald.value) && nameFieald.value !== ""){
        alert('Please only letter in the name field')
    }
    else if (isNaN(yearOfBirthField.value)){
        alert('Please only number in the year of birth field')
    }
    else if ((yearOfBirthField.value).toString().length >= 5){
        alert("don't surpass 4 characters")
    }
    else if (yearOfBirthField.value === ""){
        alert("Please Enter your Year of birth")
    }
    else{
        setInterval(switchPages, 600)
        user.textContent = nameFieald.value
        user.classList.add('user-color')
    }
    
})
fondOutBtn.addEventListener('click', () => {
    switchSound.play()
    //form validation
    if (yearCheckInput.value === ""){
        alert('please enter YEAR')
        return false;
    }
    else if ((yearCheckInput.value).toString().length !== 4){
        alert('Please Enter the Right YEAR')
        return false;
    }
    else if (isNaN(yearCheckInput.value)){
        alert('Please Enter the Right YEAR')
        return false;
    }
    else {
        calcAge(yearCheckInput.value)
    }
    emptyResult()
    
})


function switchPages(){
    welecomPage.style.display = "none"
    calcPage.style.display = "flex"
    calcPage.style.transform = "translateX(-25%)"
    calcPage.style.height = "100vh"

}

function calcAge(year){
    let age = year - yearOfBirthField.value;
  if (year < 2050){
    result.textContent = "In " + year + " you're " + age + " years old."
    yearCheckInput.value = ""
}
  if (year > 2050 && year <= 2075){
    result.textContent = "In " + year + " you're " + (age) + " years old.So Old"
    yearCheckInput.value = ""
}
  if (year > 2075 && (year - yearOfBirthField.value) > 80){
    result.textContent = "In " + year + " you're " + (age) + " years old.You're probably dead"
    yearCheckInput.value = ""
}
  if ((year - yearOfBirthField.value) < 0){
    result.textContent = "In " + year + " you're " + (age) + " years old.Wasn't born yet"
    yearCheckInput.value = ""
  }
//   else if (year > 2050){

//   }
}

function emptyResult(){
    if (result.textContent !== "" &&  yearCheckInput.value !== ""){
        result.textContent = "" ;
        calcAge(yearCheckInput.value)
    }
}


})