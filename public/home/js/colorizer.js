
export default function colorizer(){
	fetch('http://localhost/color')
	.then(response => response.json())
	.then(colors => {
		console.log(colors)

		document.documentElement.style.setProperty('--background', colors.colors.color0);
  	document.documentElement.style.setProperty('--foreground', colors.special.foreground);
  	document.documentElement.style.setProperty('--color1', colors.colors.color10);
  	document.documentElement.style.setProperty('--color0', colors.colors.color12);
  	document.documentElement.style.setProperty('--color2', colors.colors.color14);
	})
	.catch( (error ) => {
		document.documentElement.style.setProperty('--background', '#000')
  	document.documentElement.style.setProperty('--foreground', '#fefe')
  	document.documentElement.style.setProperty('--color1', '#005c99')
  	document.documentElement.style.setProperty('--color0', '#ccf5ff')
  	document.documentElement.style.setProperty('--color2', '#fff')
	})
}
