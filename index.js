const carsElem = document.querySelector('.carsElem');
const color = document.querySelector('.color')
const button = document.querySelector('.button')
const brand = document.querySelector('.brand')
const make = document.querySelector('.make')




button.addEventListener('click', function () {
    console.log('color')
    console.log("color", color.value)
    console.log(brand.value)
    if (color.value != "" && brand.value != "") {
        const url = `https://api-tutor.herokuapp.com/v1/cars/make/${brand.value}/color/${color.value}`


        axios.get(url).then(function (result) {
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

    }

    else if (color.value == "" && brand.value != "") {
        const url = `https://api-tutor.herokuapp.com/v1/cars/make/${brand.value}`
        axios.get(url).then(function (result) {
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


    }

    else if (color.value != "" && brand.value == "") {
        const url = `https://api-tutor.herokuapp.com/v1/cars/color/${color.value}`
        axios.get(url).then(function (result) {
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


    }
    else {
        const url = `https://api-tutor.herokuapp.com/v1/cars/`
        axios.get(url).then(function (result) {
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

    }
})