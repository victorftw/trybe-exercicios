const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { Accept: 'application/json' },
  };

  return fetch(API_URL, myObject)
    .then((response) => response.json())
    .then((data) => data);
};

const append = async () => {
  const { joke } = await fetchJoke();
  const h2 = document.getElementById('jokeContainer');
  h2.innerHTML = joke;
};

window.onload = () => append();
