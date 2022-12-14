/*const { 
	otakudesu,
	covid,
	ongoing,
	komiku,
	tebakgambar,
	surah,
	sholat,
	lirik,
	chara,
	wattpad,
	playstore,
	linkwa,
	pinterest,
	igdl,
	ighighlight,
	igstory,
	igstalk,
	twitter,
	fbdown,
	youtube,
	ttdownloader
} = require('./lib/function')

module.exports.otakudesu = otakudesu
module.exports.covid = covid
module.exports.ongoing = ongoing
module.exports.komiku = komiku
module.exports.tebakgambar = tebakgambar
module.exports.surah = surah
module.exports.sholat = sholat
module.exports.lirik = lirik
module.exports.chara = chara
module.exports.wattpad = wattpad
module.exports.playstore = playstore
module.exports.linkwa = linkwa
module.exports.pinterest = pinterest
module.exports.igdl = igdl
module.exports.ighighlight = ighighlight
module.exports.igstory = igstory
module.exports.igstalk = igstalk
module.exports.twitter = twitter
module.exports.fbdown = fbdown
module.exports.youtube = youtube
module.exports.ttdownloader = ttdownloader*/

const tiktok = require("./lib/tiktok");
const tiktok2 = require("./lib/tiktok2");
const tiktok3 = require("./lib/tiktok3");
const twitter = require("./lib/twitter")
const instagram = require("./lib/igdl");
const cuaca = require("./lib/cuaca")
const soundcloud = require("./lib/soundcloud")
const soundcloud2 = require("./lib/soundcloudsearch");
module.exports = {
	downloader: {
	  tiktok,
	  tiktok2,
	  tiktok3,
	  twitter,
	  instagram,
	  soundcloud
	},
	search: {
		cuaca,
		soundcloud: soundcloud2,
	}
}
