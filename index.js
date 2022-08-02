let burgerList = document.getElementById("burgerList");
let burgerMenu = document.getElementById("burgerMenu");
let burgerMenuBars = document.querySelectorAll(".bars");
let nameField = document.getElementById("nameField");
let emailField = document.getElementById("email");
let submitBtn = document.getElementById("submit");
let navContainer = document.getElementById("navContainer");
let heroSection = document.getElementById("heroSection");


let burgerMenuOpen = false;
burgerMenu.addEventListener("click", () => {
    if (burgerMenuOpen == false) {
        burgerList.classList.remove("translate-x-[-100%]");
        burgerMenuBars[1].style.display = "none";
        burgerMenuBars[0].style.transform = "rotate(45deg) translateY(1vh)";
        burgerMenuBars[2].style.transform = "rotate(-45deg) translateY(-1vh)";
    } else {
        burgerList.classList.add("translate-x-[-100%]");
        burgerMenuBars[1].style.display = "block";
        burgerMenuBars[0].style.transform = "none";
        burgerMenuBars[2].style.transform = "none";
    }
    burgerMenuOpen = !burgerMenuOpen;
})

window.addEventListener("scroll", () => {
    if (burgerMenuOpen==true && window.scrollY > 0) {
        console.log("open and scrolled");
        burgerList.classList.add("translate-x-[-100%]");
        burgerMenuBars[1].style.display = "block";
        burgerMenuBars[0].style.transform = "none";
        burgerMenuBars[2].style.transform = "none";
        burgerMenuOpen = !burgerMenuOpen;
    }
})
window.addEventListener("scroll",()=>{
    console.log(window.scrollY);
    if(window.scrollY!=0){
        navContainer.classList.add("bg-black");
    }else{
        navContainer.classList.remove("bg-black");
    }
})


document.getElementById("weatherContainer").addEventListener("click", () => {
    let place = prompt("Enter your city plaese").toLowerCase();
    var weather = async () => {
        var url = `https://api.openweathermap.org/data/2.5/weather?q=${place}&APPID=969c0be19fd6cc047db3e1a6be5086ff`;
        var res = await fetch(url);
        res = await res.json();
        var temp = Math.round(res.main.temp - 273.15);
        document.getElementById("weatherContainer").innerHTML = ` <span>${temp} &#176;C </span>
        <div>at ${place}</div>`
    }
    weather();
})

submitBtn.addEventListener("click", () => {
    alert(`Hi ${nameField.value}, please confirm your mail ${emailField.value} is correct.`);
})