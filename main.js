
const sb = document.querySelector('.second-bar'), 
mb = document.querySelector('.minute-bar'), 
hb = document.querySelector('.hour-bar'),
small = document.querySelector('.small'),
big = document.querySelector('.big');

/**
*Ces trois variables permettrons de concerver les valeurs d'heure, de minutes et de seconde à chaque instant t-1
*/
let lastMinute = 0,
lastHour = 0,
lastSecond = 0;

/**
* Cette fonction permet d'ajouter un nombre d'elements <span> enfants détérminé entré en paramètre à un element entré en parametre 
*/

function createCircle(parent, size) { 
	for (var i = 1; i <= size; i++) {
		parent.innerHTML += `<span style="--i:${i}"></span>`;
	}
	parent.setAttribute('style', `--child:${size}`);
}

createCircle(small, 60);
createCircle(big, 12);

/**
* Cette fonction permet de mettre à jour l'heure ou les minutes ou encore les secondes
*/
async function change(span, time, itemName) {
	let elem,
	item = time.toString(),
	lastValue;
	if (typeof(span) === 'string') {
		elem = document.querySelector(span);
	}else{
		elem = span;
	}
	if (itemName === 'hour') {
		lastValue = lastHour;
	}else if (itemName === 'minute') {
		lastValue = lastMinute;
	}else{
		lastValue = lastSecond;
	}
	const first_parent = elem.querySelector('.m-first'),
	last_parent = elem.querySelector('.m-last'),
	temps = time.toString();
	if (lastValue !== temps) {
		if (temps.length > 1) {
			if (lastValue.toString()[0]!==temps[0]) {
				first_parent.children[0].className = 'first out';
				first_parent.innerHTML += `<span class="first in">${temps[0]}</span>`;
				setTimeout(()=>{
					first_parent.children[0].remove();
				}, 100);
			}
			last_parent.children[0].className = 'last out';
			last_parent.innerHTML += `<span class="last in">${temps[1]}</span>`;
			setTimeout(()=>{
				last_parent.children[0].remove();
			}, 100);
		}else{
			if (5 === parseInt(first_parent.children[0].innerText)) {
				first_parent.children[0].className = 'first out';
				first_parent.innerHTML += `<span class="first in">${0}</span>`;
				setTimeout(()=>{
					first_parent.children[0].remove();
				}, 100);
				last_parent.children[0].className = 'last out';
				last_parent.innerHTML += `<span class="first in">${temps[0]}</span>`;
				setTimeout(()=>{
					last_parent.children[0].remove();
				}, 100);
			}else{
				last_parent.children[0].className = 'last out';
				last_parent.innerHTML += `<span class="first in">${temps}</span>`;
				setTimeout(()=>{
					last_parent.children[0].remove();
				}, 100);
			}
		}
		if (itemName === 'hour') {
			lastHour = item;
		}else if (itemName === 'minute') {
			lastMinute = item;
		}else if (itemName === 'second'){
			lastSecond = item;
		}
	}
}

/**
* Cette fonction permet d'inserer la date du jours sur le bord
*@param {HTMLElement} || {querySelector} query prend en compte un element qui contient des childs chacun avec une des classes suivante: "month-val", "day", "years"
*/
async function setMonDay(query) {
	const monthList = ["Jan", "Fev", "Mars", "Avr", "Mai", "Juin", "Juil", "Août", "Sept", "Oct", "Nov", "Dec"];
	let elem;
	if (typeof(query) === 'string') {
		elem = document.querySelector(query);
	}else{
		elem = query;
	}
	const month = elem.querySelector('.month-val'),
	day = elem.querySelector('.day'),
	years = elem.querySelector('.years'),
	laDate = new Date();

	month.innerText = monthList[laDate.getMonth()];
	day.innerText = laDate.getDate();
	years.innerText = laDate.getFullYear();
}

setInterval(()=>{
	// Cette pertie permet de mettre à jour la rotation des éguilles de manière adéquat
	// Elle met aussi à jour l'heure affichée en chiffre dans l'horloge
	const date = new Date(),
	step = 6,
	sr = step * date.getSeconds() - 2,
	mr = step * date.getMinutes() - 2 + (step/60 * date.getSeconds()),
	hr = step * 5 * date.getHours() - 2 + (step/60 * date.getMinutes());
	sb.style.transform = `rotate(${sr}deg)`;
	mb.style.transform = `rotate(${mr}deg)`;
	hb.style.transform = `rotate(${hr}deg)`;

	change('.hours', date.getHours(), 'hour');		// Met à jour l'heure en chiffre dans l'horloge
	change('.minutes', date.getMinutes(), 'minute');		// Met à jour les minutes en chiffre dans l'horloge
	change('.seconds', date.getSeconds(), 'second');		// Met à jour les secondes en chiffre dans l'horloge

	setMonDay('.month');
}, 1000);

setTimeout(()=>{
	mb.style.transition = `0s`;
	sb.style.transition = `0s`;
	hb.style.transition = `0s`;
}, 1300);