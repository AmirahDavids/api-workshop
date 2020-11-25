const filter = document.querySelector(".filterList");
const selectBrand = document.querySelector(".brands");
const selectColor = document.querySelector(".colors");

const Btn = document.querySelector(".filterBtn");
const brandsTemplateText = document.querySelector(".brandsTemplate").innerHTML;
const brandsTemplate = Handlebars.compile(brandsTemplateText);

const colorsTemplateText = document.querySelector(".colorsTemplate").innerHTML;
const colorsTemplate = Handlebars.compile(colorsTemplateText);

const filterTemplateText = document.querySelector(".filterTemplate").innerHTML;
const filterTemplate = Handlebars.compile(filterTemplateText);



axios
    .get("http://api-tutor.herokuapp.com/v1/makes")
    .then(function (result) {
        selectBrand.innerHTML = brandsTemplate({
            brands: result.data
        })
    });
axios
    .get("http://api-tutor.herokuapp.com/v1/colors")
    .then(function (result) {
        selectColor.innerHTML = colorsTemplate({
            color: result.data
        })
    });


Btn.addEventListener("click", () => {
    const brandVal = selectBrand.value;
    const colorsVal = selectColor.value;
if(brandVal !=="" && colorsVal === ""){
    axios
        .get("http://api-tutor.herokuapp.com/v1/cars/make/" + brandVal)
        .then(function (result) {
            console.log(result.data)
            filter.innerHTML = filterTemplate({
                all: result.data
            })
        });
    
}else if(colorsVal !== "" && brandVal === ""){
    axios
    .get("http://api-tutor.herokuapp.com/v1/cars/color/" + colorsVal)
    .then(function (result) {
        console.log(result.data)
        filter.innerHTML = filterTemplate({
            all: result.data
        })
    });

} else {

    axios
    .get("http://api-tutor.herokuapp.com/v1/cars/make/"+ brandVal +"/color/"+ colorsVal)
    .then(function (result) {
        console.log(result.data)
        filter.innerHTML = filterTemplate({
            all: result.data
        })
    });
}




});