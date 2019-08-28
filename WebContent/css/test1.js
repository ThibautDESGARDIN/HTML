/**
 * 
 */

function majeur(age) {
	return age >= 18;
}
console.log("message :", majeur(19));

function condition(nb) {
	if (nb < 100) {
		return "trop petit"
	} else if (nb > 1000) {
		return "trop grand"
	}
	return "très bon choix"
}
console.log("par defaut condition est", condition(115))

// __________________________________________________________________________________________________________________________________

// 1_Réalisez une fonction toutEnMinuscules qui vaut vrai si et seulement si son
// paramètre, une chaîne de caractères,
// n'est composé que de lettres minuscules.
// Deux versions de cette fonction sont possibles en utilisant ou non une boucle
// "for".
// Codez les deux versions.

function toutEnMinuscules(text) {
	for (i = 0; i < text.length; i++) {
		if (text.charAt(i) != text.charAt(i).toLowerCase()) {
			return false;
		}

	}
	return true;
}

function toutEnMinuscules2(text) {
	var i = 0;
	while (i < text.length) {
		if (text.charAt(i) != text.charAt(i).toLowerCase()) {
			return false;
		}
		i++;
		return true;
	}
}

function toutEnMinuscules3(text) {
	text2 = text.toLowerCase();
	if (text != text2) {
		return false
	}
	return true
}

function firstMaj(text) {
	text = text.toLowerCase();
	var text2 = text.charAt(0).toUpperCase();
	console.log("apres Lowercase :", text);
	for (i = 1; i < text.length; i++) {
		text2 = text2 + text.charAt(i);
	}
	console.log("apres lowercase :", text2);
	return text2;
}

function formatElement(balise, text){
	text2="<"+balise+">"+text+"</"+balise+">";
	return text2
}


function foisCent(){
	var nb, nb2;
	do{"Donnez une valeur",nb=window.prompt()}
	while (nb*100!=nb*100);
	nb2=nb*100;
	console.log("La valeur",nb,"fois cent vaut",nb2)
	
}

function occurence(text, char){
	var j = 0;
	for (var i = 0; i < text.length; i++) {
		if (text.charAt(i)==char)
			j++;
	}
	return "le nombre d'apparition de", char,"dans la chaine est",j;
}

function alea(b){
	var x;
	x=parseInt(Math.random()*b)
	return x;
}

function tableau(a,b){
	var tab= new Array(a);
	for (i=0; i<a; i++){
		tab[i]=alea(b+1);
		}
	return tab;
}

function matrice(a,b,c){
	var tab= new Array(a);
	for (var i=0; i<tab.length; i++){
		tab[i]=new Array(b);
		for (var j=0; j<tab[i].length; j++){
			tab[i][j]=alea(c+1);
		}
	}
	return tab;
}

function matrice(a,b,c){
	tableau(a,c)
	for (var i=0; i<tab.length; i++){
		tab[i]=new Array(b);
		for (var j=0; j<tab[i].length; j++){
			tab[i][j]=alea(c+1);
		}
	}
	return tab;
}

function sommeElement(tab){
	var somme=0;
	for (i=0; i<tab.length; i++){
		somme=somme+parseInt(tab[i]);
	}
	return somme;
}

function sommeElementMat(tab){
	var somme=0;
	for (i=0; i<tab.length; i++){
		for (var j=0; j<tab[i].length; j++){
			somme=somme+parseInt(tab[i][j]);
		}
	}
	return somme;
}

function sommeDiagonale(tab){
	var somme=0;
	for (i=0; i<tab.length; i++){
		if(tab[i].length!=tab.length){
			return "la matrice n'est pas carrée"
		} else{
			somme=somme+tab[i][i]
		}
	}
}
