const redColor = document.querySelector('.color-param .color-item.red'),
cielBlueColor = document.querySelector('.color-param .color-item.ciel-blue'),
orangeColor = document.querySelector('.color-param .color-item.orange'),
blueColor = document.querySelector('.color-param .color-item.blue'),
greenColor = document.querySelector('.color-param .color-item.green'),
yellowColor = document.querySelector('.color-param .color-item.yellow'),
whiteColor = document.querySelector('.color-param .color-item.white'),
chooseColor = document.querySelector('.color-param .color-item.choose'),
// greenColor = document.querySelector('.color-item.green'),
lRoot = document.querySelector('.lroot');

chooseColor.oninput = ()=>{
	lRoot.innerHTML = `:root{--secondBarBlue: ${chooseColor.value}}`;
}
redColor.onclick = ()=>{
	lRoot.innerHTML = `:root{--secondBarBlue: red}`;
};
cielBlueColor.onclick = ()=>{
	lRoot.innerHTML = `:root{--secondBarBlue: #0bb58d}`;
}
orangeColor.onclick = ()=>{
	lRoot.innerHTML = `:root{--secondBarBlue: orange}`;
}
yellowColor.onclick = ()=>{
	lRoot.innerHTML = `:root{--secondBarBlue: yellow}`;
}
greenColor.onclick = ()=>{
	lRoot.innerHTML = `:root{--secondBarBlue: green}`;
}
blueColor.onclick = ()=>{
	lRoot.innerHTML = `:root{--secondBarBlue: blue}`;
}
whiteColor.onclick = ()=>{
	lRoot.innerHTML = `:root{--secondBarBlue: white}`;
}

