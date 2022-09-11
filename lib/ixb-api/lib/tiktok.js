const axios = require("axios");
const cheerio = require("cheerio");

const clean = (data) => {
	let regex = /(<([^>]+)>)/gi;
	data = data.replace(/(<br?\s?\/>)/gi, " \n");
	return data.replace(regex, "");
  };
  
  module.exports = async function (query) {
	let response = await axios("https://lovetik.com/api/ajax/search", {
	  method: "POST",
	  data: new URLSearchParams(Object.entries({ query })),
	});
  
	result = {};
  
	result.creator = "IXB";
	result.title = clean(response.data.desc);
	result.author = clean(response.data.author);
	result.nowm = response.data.links[0].a || "".replace("https", "http")
	result.watermark = response.data.links[1].a || "".replace("https", "http")
	result.audio = response.data.links[2].a || "".replace("https", "http")
	result.thumbnail = response.data.cover;
	return result;
  }.bind();