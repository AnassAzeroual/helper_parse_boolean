// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
let output = '';
let list = [
  '',
  ' ',
  ' _',
  'true',
  'false',
  'True',
  'False',
  'TRUE',
  'FALSE',
  'trues',
  'falses',
  'testo',
  '[]',
  '{}',
  '??',
  '!!',
];

function parserboolean(ipt: string | boolean):boolean | undefined {
  if (['true', 'false'].includes(String(ipt).toLowerCase())) {
    return JSON.parse(String(ipt).toLowerCase());
  }
}
function loopi() {
  console.clear()
  for (let i = 0; i < list.length; i++) {
    console.log(`${list[i]} => ${typeof parserboolean(list[i])}`);
  }
}


loopi()
output = parserboolean('False');

appDiv.innerHTML = `<h1>${output}</h1>`;
