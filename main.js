const url = new URL('./style2.css', import.meta.url).href;

import './style.css';

document.querySelector('#app').innerHTML = `
  <link rel="stylesheet" href="${url}">
  <div id="one"></div>
  <div id="two"></div>
`;
