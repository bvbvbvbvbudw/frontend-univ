const apiUrl = "https://russian-casualties.in.ua/api/v1/data/json/daily";
const elementDataMap = [
    { id: 'personnel', key: 'personnel' },
    { id: 'planes', key: 'aircraft' },
    { id: 'helicopters', key: 'helicopters' },
    { id: 'tanks', key: 'tanks' },
    { id: 'bbm', key: 'apv' },
    { id: 'artsystem', key: 'artillery' },
    { id: 'ppo', key: 'aaws' },
    { id: 'rszv', key: 'mlrs' },
    { id: 'ppm', key: 'vehicles' },
    { id: 'boats', key: 'boats' },
    { id: 'bpla', key: 'uav' }
];

document.addEventListener('DOMContentLoaded', outputInfo);

function outputInfo(){
    fetch(apiUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Помилка: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            const currentDate = new Date();
            const yesterday = new Date(currentDate);
            yesterday.setDate(currentDate.getDate() - 1);
            const yesterdayFormatted = yesterday.toISOString().slice(0, 10).replace(/-/g, ".");
            const specificDateData = data.data[yesterdayFormatted];

            if (specificDateData) {
                elementDataMap.forEach(({ id, key }) => {
                    const element = document.getElementById(id);
                    element.innerText = '+' + specificDateData[key];
                });
            } else {
                elementDataMap.forEach(({ id }) => {
                    const element = document.getElementById(id);
                    element.innerText = "Дані не знайдені для всіх";
                });
            }
        })
        .catch((error) => {
            console.error("Помилка:", error);
        });
}
