export async function post(url = '', request = {}, token = '') {
  const response = await fetch(`https://test.africanvo.com/doc/api/v1/${url}`, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(request),
  })
    .then(async (res) => {
      /*Check if request forbidden due to expired token
        Then request a new token if it is
    q */
      if (res.status === 401) {
        const response = await get(`Auth/RenewToken/${token}`, '')
        if (response.successful) {
          localStorage.setItem('token', response.data.Token);
          localStorage.setItem('tokenExpiryDate', response.data.TokenExpiryDate);
          localStorage.setItem('user', JSON.stringify(response.data));
        }
        return await post(url, request, response.data.Token);
      }
      const responseObject = {
        successful: res.ok,
        data: await res.json(),
      };
      return responseObject;
    })
    // .then((data) => data)
    .catch((error) => {
      // return error;
      const responseObject = {
        successful: false,
        data: 'Unable to send request. Kindly your internet connection and try again',
      };
      return responseObject;
    });
  return response;
}

export async function postData(url = '', request = {}, token = '') {
  const response  = await fetch(`https://test.africanvo.com/doc/api/v1/${url}`, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${token}`,
    },
    body: request,
  })
    .then(async (res) => {
      if (res.status === 401) {
        const response = await get(`Auth/RenewToken/${token}`, '')
        if (response.successful) {
          localStorage.setItem('token', response.data.Token);
          localStorage.setItem('tokenExpiryDate', response.data.TokenExpiryDate);
          localStorage.setItem('user', JSON.stringify(response.data));
        }
        return await postData(url, request, response.data.Token);
      }
      const responseObject = {
        successful: res.ok,
        data: await res.json(),
      };
      return responseObject;
    })
    // .then((data) => data)
    .catch((error) => {
      // return error;
      const responseObject = {
        successful: false,
        data: 'Unable to send request. Kindly your internet connection and try again',
      };
      return responseObject;
    });
  return response;
}

export async function get(url = '', token = '') {
  const response  = await fetch(`https://test.africanvo.com/doc/api/v1/${url}`, {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then(async (res) => {
      if (res.status === 401) {
        const response = await get(`Auth/RenewToken/${token}`, '')
        if (response.successful) {
          localStorage.setItem('token', response.data.Token);
          localStorage.setItem('tokenExpiryDate', response.data.TokenExpiryDate);
          localStorage.setItem('user', JSON.stringify(response.data));
        }
        return await get(url, response.data.Token);
      }
      const responseObject = {
        successful: res.ok,
        data: await res.json(),
      };
      return responseObject;
    })
    // .then((data) => data)
    .catch((error) => {
      // return error;
      const responseObject = {
        successful: false,
        data: 'Unable to send request. Kindly your internet connection and try again',
      };
      return responseObject;
    });
  return response;
}
