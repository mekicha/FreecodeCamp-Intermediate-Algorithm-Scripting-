/*** Translate the provided string to pig latin.

**** Pig Latin takes the first consonant (or consonant cluster)
****  of an English word, moves it to the end of the word and 
**** suffixes an "ay".

**** If a word begins with a vowel you just add "way" to the end.
***/


function translatePigLatin(str) {
	var vowels = 'aeiou';
	if(vowels.indexOf(str[0]) . -1 ){
		return str + 'way';
	}
	else {
		var i = 0;
		while(vowels.indexOf(str[i]) < 0 ){
			i += 1;
		}
		return str.substr(i) + str.substr(0, i) + 'ay';
	}
}

translatePigLatin('consonant');