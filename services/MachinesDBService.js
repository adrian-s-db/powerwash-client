export default async function saveWashingMachineData(machineData) {
  try {
    const url = process.env.REACT_APP_BACKEND_SERVER_URL + '/machines';
    const query = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(machineData)
    });
    const json = await query.json();
    return json;
  } catch (e) {
    console.error(e)
  }
}