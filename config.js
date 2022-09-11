const fs = require('fs')
const chalk = require('chalk')

// Other
global.owner = ['6287857597008']
global.premium = ['6287857597008']
global.namabot = `Faiza-BOT`
global.imgbbapi = ``
global.lol = `Faizasyah`
global.vhtear = ``
global.apixcoders = `bmKpGwKA84`
global.officialixb = `https://chat.whatsapp.com/JdoEWGNGeB889PU9zyaFyx`
global.packname = 'Faizasyah'
global.author = 'Bot'
global.listharga = `╭─────────────
│ *「 PRICE LIST 」*
│
├≽ *PREMIUM*
│ ⤷ Unlimited limit
│ ⤷ Access all features
│ ⤷ Price : 10k / month
│
├≽ *SEWA*
│ ⤷ Only 1 group
│ ⤷ Free premium
│ ⤷ Guaranteed
│ ⤷ Unlimited limit
│ ⤷ Price : 15K / month
│
├≽ *PAYMENT*
│ ⤷ QRIS
│ ⤷ Dana
│ ⤷ Ovo
│ ⤷ Shopee-Pay
│ ⤷ Alfamart
│ ⤷ Indomart
│ ⤷ Pulsa Indosat +5k
│
├≽ *MORE INFO*
│ ⤷ wa.me/${global.owner}
╰─────────────`
global.prefa = ['!','.']
global.limitawal = {
    premium: "Infinity",
    free: 100
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
