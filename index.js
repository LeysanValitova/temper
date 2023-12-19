// Массив для названий городов
const cities = ['Москва', 'Казань', 'Сочи', 'Мекка'];

// Пустой массив для температуры воздуха
const temperature = [];

// Цикл который запрашивает температуру воздуха для каждого города и сохраняет введенное значение в массив с температурой
for (let i = 0; i < cities.length; i++) {
    const getTemperature = prompt(`Введите температуру в городе ${cities[i]}`);

    temperature.push(getTemperature);
};

// Создаю список для отображения информации о городах и их градусах на странице; добавляю на страницу созданные элементы
let list = document.createElement('UL');

for (let i = 0; i < cities.length; i++) {
    let item = document.createElement('LI');
    item.textContent = `Температура в городе ${cities[i]} составляет: ${temperature[i]} °C`;
    list.append(item);
}

document.body.append(list);


// нахожу максимальный/минимальный градус и добавляю на страницу

for(let i = 0; i > temperature.length; i++) {
    numbers[i] = Number(temperature[i]);
}

let maxTemp = 0;
let minTemp = 0;

for (let i = 0; i < temperature.length; i++) {

    if(temperature[i] > maxTemp) {
        maxTemp = temperature[i];
    }

    if( temperature[i] < minTemp) {
        minTemp =  temperature[i]
    }
}

const containerForMaxMinTemper = document.createElement('DIV');
document.body.append(containerForMaxMinTemper);


const MaxTemperature = document.createElement('DIV');
MaxTemperature.textContent =`Максимальная температура: ${maxTemp} °C`;
containerForMaxMinTemper.append(MaxTemperature);


const MinTemperature = document.createElement('DIV');
MinTemperature.textContent = `Минимальная температура: ${minTemp} °C`;
containerForMaxMinTemper.append(MinTemperature);