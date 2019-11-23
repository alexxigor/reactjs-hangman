var PROGRAMING_LANG = [
	"batatafrita",
	"batataassada",
	"batatarecheada",
	"batataconfit",
	"saladadebatata",
	"puredebatata"
];

function randomWord() {
	return PROGRAMING_LANG[Math.floor(Math.random() * PROGRAMING_LANG.length)];
}

export { randomWord };
