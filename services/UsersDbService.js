export async function saveUser(userData) {
  try {
    const url = process.env.REACT_APP_BACKEND_SERVER_URL + '/user';
    const query = await fetch(url, {
     method: 'POST',
     headers: {
       Accept: 'application/json',
       'Content-Type': 'application/json',
     },
     body: JSON.stringify(userData),
    });
    const json = await query.json();
    return json;
  } catch (e) {
    console.error(e);
  }
}

//ONGOING
export async function getUserData(userId) {
  try {
    const url = process.env.REACT_APP_BACKEND_SERVER_URL + '/users/' + userId;
    const query = await fetch(url, {
     method: 'GET',
     headers: {
       Accept: 'application/json',
       'Content-Type': 'application/json',
     }
    });
    const json = await query.json();
    return json;
  } catch (e) {
    console.error(e);
  }
}