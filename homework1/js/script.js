const apiUrl = "https://russian-casualties.in.ua/api/v1/data/json/daily";

document.addEventListener('DOMContentLoaded', outputInfo)

function outputInfo(){
    const pers = document.getElementById('personnel')
    const planes = document.getElementById('planes')
    const helicopters = document.getElementById('helicopters')
    const tanks = document.getElementById('tanks')
    const bbm = document.getElementById('bbm')
    const artsystem = document.getElementById('artsystem')
    const ppo = document.getElementById('ppo')
    const rszv = document.getElementById('rszv')
    const ppm = document.getElementById('ppm')
    const boats = document.getElementById('boats')
    const bpla = document.getElementById('bpla')

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
        pers.innerText = '+' + specificDateData.personnel;
        planes.innerText = '+' + specificDateData.aircraft
        helicopters.innerText = '+' + specificDateData.helicopters
        tanks.innerText = '+' + specificDateData.tanks
        bbm.innerText = '+' + specificDateData.apv
        artsystem.innerText = '+' + specificDateData.artillery
        ppo.innerText = '+' + specificDateData.aaws
        rszv.innerText = '+' + specificDateData.mlrs
        ppm.innerText = '+' + specificDateData.vehicles
        boats.innerText = '+' + specificDateData.boats
        bpla.innerText = '+' + specificDateData.uav

      } else {
        pers.innerText = "Дані не знайдені для всіх";
      }
    })
    .catch((error) => {
      console.error("Помилка:", error);
    });
}
