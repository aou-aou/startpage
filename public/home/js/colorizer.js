
export default function colorizer(){
	fetch('http://localhost/color')
	.then(response => response.json())
	.then(colors => {

		console.log(colors)
		document.documentElement.style.setProperty('--background', colors.special.background);
  	document.documentElement.style.setProperty('--foreground', colors.special.foreground);
  	document.documentElement.style.setProperty('--color0', colors.colors.color0);
  	document.documentElement.style.setProperty('--color1', colors.colors.color1);
  	document.documentElement.style.setProperty('--color2', colors.colors.color6);
	})
	.catch(error => console.error('Erro ao carregar o arquivo JSON:', error));
}

