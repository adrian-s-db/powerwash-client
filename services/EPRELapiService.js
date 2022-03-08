const BASE_URL = 'https://eprel.ec.europa.eu/api/products/washingmachines2019/';

export default async function getWashingMachineData(washingMachineCode) {
  const url = BASE_URL + washingMachineCode;
  const query = await fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  const json = await query.json();
  const { energyClass, modelIdentifier, ratedCapacity, supplierOrTrademark, waterCons, noiseClass, energyConsPerCycle } = json;
  const data = { energyClass, modelIdentifier, ratedCapacity, supplierOrTrademark, waterCons, noiseClass, energyConsPerCycle };
  return data;
}
