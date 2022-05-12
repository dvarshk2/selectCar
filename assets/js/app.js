let cl = console.log;

const selectCar = document.getElementById('changeCar');
cl(selectCar);
const allCars = Array.from(document.querySelectorAll('.all'));
cl(allCars);

const selectManufacturer = c => {
    let getClass = `.${c.target.value}`;
    cl(getClass);
    allCars.forEach( car => {
        car.classList.add('d-none');
    } )
    let selected = Array.from(document.querySelectorAll(getClass));
    cl(selected);
    selected.forEach( ele => {
        ele.classList.remove('d-none');
    })
}




selectCar.addEventListener('change', selectManufacturer)