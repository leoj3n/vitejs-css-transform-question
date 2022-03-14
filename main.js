import './style.css';

// After build, background url in style2.css does not point to hashed asset.
const url = new URL('./style2.css', import.meta.url).href;

document.querySelector('#app').innerHTML = `
  <!-- Cat here for "npm run dev" and "npm run build && npm run preview" -->
  <div id="one"></div>

  <!-- Cat NOT here when "npm run build && npm run preview" -->
  <link rel="stylesheet" href="${url}">
  <div id="two"></div>
`;
