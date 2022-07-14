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
    // .then((data) => data)
    .catch((error) => {
      console.log(`Error ${error}`);
      return error;
    });
  return response;
}

export async function postData(url = '', request = {}, token = '') {
  console.log(`https://test.africanvo.com/doc/api/v1/${url}`);
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
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => {
      console.error('Error:', error);
    });
}

export async function get(url = '', token = '') {
  await fetch(`${process.env.REACT_API_BASE_URL}${url}`, {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => {
      console.error('Error:', error);
    });
}
