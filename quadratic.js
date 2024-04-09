document.getElementById('solve').onclick = function () {
	const a = document.getElementById('a').value
	const b = document.getElementById('b').value
	const c = document.getElementById('c').value
	const d = Math.pow(b, 2) - 4 * a * c
	const e = 2 * a
	let quadraticformula1 = (-b + Math.sqrt(d)) / e

	let quadraticformula2 = (-b - Math.sqrt(d)) / e
	if (a == 0) {
		return (document.getElementById('ans').innerHTML = `0`)
	}
	
	return (document.getElementById(
		'ans'
	).innerHTML = `Answer : X = ${quadraticformula1} or ${quadraticformula2}`)
}
