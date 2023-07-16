const url = "db.json";
const url2 = 'https://jsonplaceholder.typicode.com/posts';

const getData = url => {
  return fetch(url)
    .then(response => response.json())
    .catch(error => console.log(error))
}

const sendData = (url, user) => {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: user
  }).then(response => response.json())
}

getData(url)
  .then(data => console.log(data));

getData(url)
  .then(data => sendData(url2, JSON.stringify(data)))
  .then(data => console.log(data))
