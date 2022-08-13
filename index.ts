// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
let output = '';
let list = [
  'true',
  true,
  'false',
  false,
  'True',
  'False',
  'TRUE',
  'FALSE',
  'truess',
  'falsess',
  'testo',
  '',
  ' ',
  ' _',
  '[]',
  [],
  '{}',
  {},
  '??',
  '!!',
  'null',
  null,
  'undefined',
  undefined,
];

function parserboolean(ipt: string | boolean): boolean | undefined {
  if (['true', 'false'].includes(String(ipt).toLowerCase())) {
    return JSON.parse(String(ipt).toLowerCase());
  }
}
function loopi() {
  console.clear();
  for (let i = 0; i < list.length; i++) {
    var tag = document.createElement('h1');
    var text = document.createTextNode(
      `typeof(${typeof list[i]}) value(${list[i]})  ==> result(${parserboolean(
        list[i]
      )})`
    );
    console.log(`${list[i]} => ${parserboolean(list[i])}`);
    tag.appendChild(text);
    appDiv.appendChild(tag);
  }
}

loopi();
// output = parserboolean('False');

// appDiv.innerHTML = `<h1>${output}</h1>`;
