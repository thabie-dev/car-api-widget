const carsElem = document.querySelector('.cars');
const color = document.querySelector('.color')
const button = document.querySelector('.button')
const brand = document.querySelector('.brand')

button.addEventListener('click', function (){
    console.log('color')
    console.log(color.value)
    console.log(brand.value)
    const url= `https://api-tutor.herokuapp.com/v1/cars/make/${brand.value}/color/${color.value}`

    axios.get(url).then(function(result){
        console.log(result.data);
    
        result.data.forEach(car => {
            const tableElement = document.createElement('tr');
            
            tableElement.innerHTML = `<tr>
                <td>${car.model}</td>
                <td>${car.color}</td>
                <td>${car.make}</td>
            </tr>`
        carsElem.appendChild(tableElement);
    
        });
    })
    
});

// document.addEventListener('DOMContentLoaded',() => {

    // const selectcar = document.getElementById('cars');

    // fetch('https://github.com/avermeulen/api-tutor').then(res => {
        // return res.json();
    // }).then(data =>{
// 
    // })
    
// });