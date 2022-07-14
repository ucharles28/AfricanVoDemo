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
      const responseObject = {
        successful: res.ok,
        data: await res.json(),
      };
      return responseObject;
    })
    .catch((error) => {
      const errorObject = {
        successful: false,
        data: error,
      };
      return errorObject
    });
  return response;
}

export async function postData(url = '', request = {}, token = '') {
  await fetch(`https://test.africanvo.com/doc/api/v1/${url}`, {
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
    const responseObject = {
      successful: res.ok,
      data: await res.json(),
    };
    return responseObject;
  })
  .catch((error) => {
    const errorObject = {
      successful: false,
      data: error,
    };
    return errorObject
  });
return response;
}

export async function get(url = '', token = '') {
  console.log(`${process.env.REACT_API_BASE_URL}${url}`)
  await fetch(`https://test.africanvo.com/doc/api/v1/${url}`, {
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
    const responseObject = {
      successful: res.ok,
      data: await res.json(),
    };
    return responseObject;
  })
  .catch((error) => {
    const errorObject = {
      successful: false,
      data: error,
    };
    return errorObject
  });
return response;
}
