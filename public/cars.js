const carsElem = document.querySelector(".cars");
const cars = document.querySelector(".carList");
const color = document.querySelector(".colorList");
const brands = document.querySelector(".brandList");



const carsTemplateText = document.querySelector(".carsTemplate").innerHTML;
const carsTemplate = Handlebars.compile(carsTemplateText)

const allTemplateText = document.querySelector(".allTemplate").innerHTML;
const allTemplate = Handlebars.compile(allTemplateText)





// get the data in the browser
axios
    .get("http://api-tutor.herokuapp.com/v1/makes")
    .then(function (result) {
        brands.innerHTML = carsTemplate({
            makes: result.data
        })
    })

axios
    .get("http://api-tutor.herokuapp.com/v1/colors")
    .then(function (result) {
        color.innerHTML = carsTemplate({
            colors: result.data
        })
    })
// all cars
axios
    .get("http://api-tutor.herokuapp.com/v1/cars")
    .then(function (result) {
        cars.innerHTML = allTemplate({
            all: result.data
        })
    })