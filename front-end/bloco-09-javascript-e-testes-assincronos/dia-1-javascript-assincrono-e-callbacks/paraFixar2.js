const userFullName = ({ firstName, lastName }) =>
  `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) =>
  `${firstName} is ${nationality}`;

const delay = (maxMilliseconds = 5000) =>
  Math.floor(Math.random() * maxMilliseconds);

const getUser = (callback) => {
  setTimeout(() => {
    const user = {
      firstName: 'Ivan',
      lastName: 'Ivanovich',
      nationality: 'Russian',
    };
    const msg = callback(user);
    console.log(msg);
  }, delay(2000));
};

getUser(userFullName);
getUser(userNationality);
