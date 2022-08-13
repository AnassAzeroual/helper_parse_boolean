// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
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

/* -------------------------------------------------------------------------- */
/*                              The Main Function                             */
/* -------------------------------------------------------------------------- */
function parserboolean(ipt: string | boolean): boolean | undefined {
  if (['true', 'false'].includes(String(ipt).toLowerCase())) {
    return JSON.parse(String(ipt).toLowerCase());
  }
}

/* -------------------------------------------------------------------------- */
/*                   Just helper iterate through list array                   */
/* -------------------------------------------------------------------------- */
function loopy() {
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
loopy();
