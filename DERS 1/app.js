let cars = document.querySelector("input")

function setItem() {
    let a = localStorage.setItem("car",cars.value)

}
function getItem() {
    let b = localStorage.getItem("car", cars)
    console.log(b)
    // let ab = document.querySelector("h1")
    // let abc = 
}