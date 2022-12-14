const { default: Axios } = require('axios')
const cheerio = require('cheerio')
const fetch = require('node-fetch') 
const qs = require('querystring')


function facebook(url) {
     return new Promise((resolve, reject) => {
          Axios({
               method: 'POST',
               url: 'https://www.getfvid.com/downloader',
               headers: {
                    'content-type': 'application/x-www-form-urlencoded'
               },
               data: qs.stringify({ url: url })
          })
               .then(({ data }) => {
                    const $ = cheerio.load(data)
                    let result = []
                    $('div > p > a.btn-download').get().map(rest => {
                         result.push({ [$(rest).text()]: $(rest).attr('href') })
                    })
                    resolve(result)
               })
               .catch(e => {
                    reject({ status: false, message: e.message })
               })
     })
}

const fbDown = async (fbLink) => {
function post(url, formdata) {
    return fetch(url, {
        method: 'POST',
        headers: {
            accept: "*/*",
            'X-Requested-With': "XMLHttpRequest",
            'content-type': "application/x-www-form-urlencoded; charset=UTF-8"
        },
        body: new URLSearchParams(Object.entries(formdata))
    })
}

const res = await post('https://saveas.co/system/action.php', {
url: fbLink, 
token: ''
})
const mela = await res.json()
const hasil = []
let judul = mela.title
let source = mela.source
let thumb = mela.thumbnail
let link = mela.links[1].url
let size = mela.links[1].size
let quality = mela.links[1].quality
let type = mela.links[1].type
hasil.push({ judul, source, thumb, link, size, quality, type }) 
return hasil
}

module.exports = { facebook, fbDown }