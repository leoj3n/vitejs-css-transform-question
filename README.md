# Vitejs CSS transform question

```html
<html lang="en">

<head>
	<meta charset="UTF-8">
	<link rel="icon" type="image/svg+xml" href="/assets/favicon.17e50649.svg">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Vite App</title>
	<script type="module" crossorigin="" src="/assets/index.9dbcbbb2.js"></script>
	<link rel="stylesheet" href="/assets/index.2e0f046f.css">
</head>

<body class="vsc-initialized">
	<div id="app">
		<!-- Cat here for "npm run dev" and "npm run build && npm run preview" -->
		<div id="one"></div>
		<!-- Cat NOT here when "npm run build && npm run preview" -->
		<link rel="stylesheet" href="https://node-kn5aaq--4173.local.webcontainer.io/assets/style2.1d59c5eb.css">
		<div id="two"></div>
	</div>
</body>

</html>
```

`/assets/index.2e0f046f.css`:

```css
#one{width:200px;height:200px;border:5px solid red;background:url(/assets/catcat.c8195ece.jpg) red;background-size:cover}
```

`https://node-kn5aaq--4173.local.webcontainer.io/assets/style2.1d59c5eb.css`:

```css
#two {
  width: 200px;
  height: 200px;
  border: 5px solid blue;
  background: url(./nested/catcat.jpg) blue;
  background-size: cover;
}
```

## Question

For `style2.css` included like this:

```js
const url = new URL('./style2.css', import.meta.url).href;

document.querySelector('#app').innerHTML = `
  <link rel="stylesheet" href="${url}">
`;
```

Is it expected that `style2.1d59c5eb.css` becomes a hashed file but contents are not transformed?

Note that for `style.css` included like that:

```js
import './style.css';
```

File contents are transformed (background url points to hashed jpg).
