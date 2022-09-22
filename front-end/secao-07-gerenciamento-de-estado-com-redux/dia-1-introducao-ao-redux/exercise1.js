const INITIAL_STATE = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

const NEXT_COLOR = 'NEXT_COLOR';
const PREVIOUS_COLOR = 'PREVIOUS_COLOR';
const RANDOM_COLOR = 'RANDOM_COLOR';

function criarCor() {
  const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  let cor = '#';
  const aleatorio = () => Math.floor(Math.random() * oneChar.length);
  for (let i = 0; i < 6; i += 1) {
      cor += oneChar[aleatorio()];
  }
  return cor;
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NEXT_COLOR:
      return {...state, index: state.index < state.colors.length - 1  ? state.index + 1 : 0 }
    case PREVIOUS_COLOR:
      return {...state, index: state.index <= 0 ? state.colors.length - 1 : state.index - 1}
    case RANDOM_COLOR:
      return {colors: [...state.colors, criarCor()], index: state.colors.length}
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);

const nextColorBtn = document.getElementById('next');

nextColorBtn.addEventListener('click', () => store.dispatch({type: NEXT_COLOR}))

const previousColorBtn = document.getElementById('previous');

previousColorBtn.addEventListener('click', () => store.dispatch({type: PREVIOUS_COLOR}))

const randomColorBtn = document.getElementById('random-color');

randomColorBtn.addEventListener('click', () => store.dispatch({type: RANDOM_COLOR}))

store.subscribe(() => {
  const { colors, index } = store.getState();
  console.log(colors, index);
  const colorName = document.getElementById('value');
  const container = document.getElementById('container');
  colorName.innerText = colors[index];
  container.style.backgroundColor = colors[index];
})