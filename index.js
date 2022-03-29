const carsElem = document.querySelector('.car-data');

axios.get("https://api-tutor.herokuapp.com/v1/cars").then(function(result){
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