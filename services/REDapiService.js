const moment = require('moment');

const BASE_URL = 'https://apidatos.ree.es/es/datos/mercados/precios-mercados-tiempo-real?'

export async function getCurrentEnergyPrice () {
  const startDate = new moment(Date.now()).format('YYYY-MM-DDTHH:00');
  const endDate = new moment(Date.now()).format('YYYY-MM-DDTHH:59');
  const url = BASE_URL + `start_date=${startDate}&end_date=${endDate}&time_trunc=hour`;

  const query = await fetch(url, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Host': 'apidatos.ree.es'
    }
  });
  const json = await query.json();
  const price = json.included[0].attributes.values[0].value;
  return price;
};

export async function getMultidayHourlyEnergyPrices (){
  const yesterdayHourlyPrices = await _getHourlyEnergyPrices(-1);
  const todayHourlyPrices = await _getHourlyEnergyPrices(0);
  const fetchedHourlyData = [{day:'Yesterday', prices: yesterdayHourlyPrices}, {day: 'Today', prices: todayHourlyPrices}];
  if (_tomorroDataAvailable()) {
    const tomorrowHourlyPrices = await _getHourlyEnergyPrices(1);
    fetchedHourlyData.push({day: 'Tomorrow', prices: tomorrowHourlyPrices});
  }
  return fetchedHourlyData;
};

async function _getHourlyEnergyPrices (dayOffset) {
  const today = new Date();
  const date = today.setDate(today.getDate() + dayOffset)

  const startDate = new moment(date).format('YYYY-MM-DDT00:00');
  const endDate = new moment(date).format('YYYY-MM-DDT23:59');
  const url = BASE_URL + `start_date=${startDate}&end_date=${endDate}&time_trunc=hour`;
  const query = await fetch(url, {
     method: 'GET',
     headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json',
       'Host': 'apidatos.ree.es'
     }
   });
   const json = await query.json();
   const prices = json.included[0].attributes.values.map((ele) => ele.value);
   return prices;
};

function _tomorroDataAvailable () {
  const currentTime = moment(Date.now()).format('YYYY-MM-DDTHH:mm');
  const publicationTime = moment(Date.now()).format('YYYY-MM-DDT20:15');
  return currentTime > publicationTime;
}