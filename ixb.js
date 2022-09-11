
require('./config')
require('./index')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const FormData = require('form-data') 
const crypto = require('crypto')
const fetch = require('node-fetch')
const os = require('os')
const moment = require('moment-timezone')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const IXB_Api = require('./lib/ixb-api')
const translate =require('./lib/translate')
const brainly = require('brainly-scraper')
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI()
const ffmpeg = require('fluent-ffmpeg')
const ms = require('parse-ms')
const toMs = require('ms')
const request = require("request")
const Requests = require('node-fetch')
const cheerio = require('cheerio')
const { JSDOM } = require('jsdom')
const QrCodeGenerator = require('qrcode')
const { color, bgcolor } = require('./lib/color')
const { bahasa } = require('./lib/bahasa')
const imgbb = require('imgbb-uploader')
const { pindl } = require('./lib/pindl')
const { msgFilter } = require('./lib/msgFilter')
const { smsg, formatp, formatDate, getTime, isUrl, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')
const {getGroupAdmins} = require('./lib/functions')
const { islam, doaharian, ayatkursi, niatsholat, bacaansholat, asmaulhusna, tahlil } = require('./lib/islam.js')
const uang = JSON.parse(fs.readFileSync('./database/pengguna/uang.json'))
const _limit = JSON.parse(fs.readFileSync('./database/pengguna/limit.json'))
const ban = JSON.parse(fs.readFileSync('./database/pengguna/banned.json'))
const prem = JSON.parse(fs.readFileSync('./database/pengguna/premium.json'))
const simi = JSON.parse(fs.readFileSync('./database/json/simi.json'))
const updatefitur = JSON.parse(fs.readFileSync('./database/json/update.json'))
const antivirtex = JSON.parse(fs.readFileSync('./database/kelompok/antivirtex.json'))
const adm = JSON.parse(fs.readFileSync('./database/pengguna/admin.json'))
const bad = JSON.parse(fs.readFileSync('./database/kelompok/bad.json'))
const sewa = JSON.parse(fs.readFileSync('./lib/database/sewa.json'))
const _sewa = require('./lib/sewa')
const _premium = require('./lib/premium')
const _setWelcome = require('./lib/setwelcome')
const setwelc = JSON.parse(fs.readFileSync('./database/kelompok/setwel.json'))
const welkom = JSON.parse(fs.readFileSync('./database/bot/welkom.json'))
const mabsen = JSON.parse(fs.readFileSync('./database/kelompok/absen.json'))
const commandsDbStore = JSON.parse(fs.readFileSync('./database/json/commandStore.json'))
const databasePelanggan = JSON.parse(fs.readFileSync('./database/pengguna/pelanggan.json'))
// const { addCommandStore, checkCommandStore, deleteCommandStore } = require('./lib/storeFunction')
const {grupmenu, dsmenu, randommenu, funmenu, islammenu, convertmenu, anonymousmenu, othermenu, ownermenu, creatormenu} = require('./lib/help')

// apikey
const VthearApi = global.vhtear
const LolApi = global.lol
const ApiXcoders = global.apixcoders
const imgbbAPI = global.imgbbapi
const namabot = global.namabot
const ixbgroup = global.officialixb
const regane = global.listharga

// setting
let banChat = false
let onlygc = `Maaf, bot hanya bisa di akses didalam grup!. Jika ingin mengakses bot ini di private chat silahkan upgrade ke premium user dengan cara ketik: #daftarpremium` //`Sorry, this bot is no longer accessible, thanks for using this bot for some time.`

// read database
global.db = JSON.parse(fs.readFileSync('./src/database.json'))
if (global.db) global.db = {
    sticker: {},
    database: {},
    game: {},
    others: {},
    users: {},
    chats: {},
    settings: {},
    ...(global.db || {})
}
let tebaklagu = db.game.tebaklagu = []
let _family100 = db.game.family100 = []
let kuismath = db.game.math = []
let tebakgambar = db.game.tebakgambar = []
let tebakkata = db.game.tebakkata = []
let caklontong = db.game.lontong = []
let caklontong_desk = db.game.lontong_desk = []
let tebakkalimat = db.game.kalimat = []
let tebaklirik = db.game.lirik = []
let tebaktebakan = db.game.tebakan = []
let susunkata = db.game.susunkata = []
let vote = db.others.vote = []

module.exports = client = async (client, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const from = m.key.remoteJid
        const pushname = m.pushName || "No Name"
        const botNumber = await client.decodeJid(client.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isOwner = [botNumber, global.ixbjs, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime)
        const time = moment.tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')
        const jam = moment.tz('Asia/Jakarta').format('HH:mm:ss')
		const wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
		const wita = moment.tz('Asia/Makassar').format("HH:mm:ss")
        const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")
	
        // Group
        const groupMetadata = m.isGroup ? await client.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	// const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
        const isPremium = m.key.fromMe ? isOwner : _premium.checkPremiumUser(m.sender, prem)
        const isWelkom = m.isGroup ? welkom.includes(m.chat) : false
        const isAbsen = m.isGroup ? mabsen.includes(m.chat) : false
        const isStore = m.isGroup ? commandsDbStore.includes(m.chat) : false
        const isSimi = m.isGroup ? simi.includes(m.chat) : false
        const isAntiVirtex = m.isGroup ? antivirtex.includes(m.chat) : false
        client.sendPresenceUpdate('available', m.id)
        
	try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.users[m.sender]
            if (typeof user !== 'object') global.db.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
    
            let chats = global.db.chats[m.chat]
            if (typeof chats !== 'object') global.db.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
            } else global.db.chats[m.chat] = {
                mute: false,
                antilink: false,
            }
		
	    let setting = global.db.settings[botNumber]
            if (typeof setting !== 'object') global.db.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
	    } else global.db.settings[botNumber] = {
		status: 0,
		autobio: false,
	    }
	    
        } catch (err) {
            console.error(err)
        }
	    
        // Public & Self
            if (!isCreator && !m.key.fromMe && banChat === true) return

        // Push Message To Console && Auto Read
        if (m.message) {
            // client.sendReadReceipt(m.chat, m.sender, [m.key.id])
           // console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
           if (isCmd && !m.isGroup) {
			console.log(color('[ PRIVATE ]'), color(moment(m.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
        }
        if (isCmd && m.isGroup) {
			console.log(color('[ GROUP ]'), color(moment(m.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
        }
        }

        
        /********  MESS FUNCTION ********/
			mess = {
				wait: '_Please wait, data is being processed!_',
				success: 'Sukses...!',
				lock: `Maaf, fitur NSFW sedang kami nonaktifkan, kami akan kembali setelah Ramadhan. Terima kasih.`,
				limituserbot: `*「 LIMIT STATUS 」*

Hi kak ${pushname}
Your limit quota is up! 
The limit will be reset every day at 00:00 WIB.
Or please type: $ {prefix} buylimit to buy a limit.`,
				error: {
					stick: 'Gagal, terjadi kesalahan saat mengkonversi gambar ke sticker!',
					Iv: 'Maaf, link yang anda kirim tidak valid!',
                    bug: `An error occurred`
				},
			only: {
				group: 'Sorry, this command can only be used in the group!',
				banned: `Sorry, your number has been banned, can't use the bot!`,
				ownerG: 'Sorry, this command can only be used by the group owner!!',
				ownerB: 'translate id Sorry, this command can only be used by owner this bot! ',
				adminB: `Maaf, perintah ini hanya bisa digunakan oleh admin ${namabot}`,
				premium: `Sorry, this feature only applies to premium members!. Please update your membership status from free members to premium members by typing: ${prefix}daftarpremium`,
				userB: `*「 NOTICE BOT 」*

Hai kak ${pushname}
Kamu belum terdaftar di database Bot!
Silahkan daftar terlebih dahulu.

Cara daftar ketik: #daftar nama|umur
Contoh: #daftar dewi|18

Note: Harap daftar menggunakan data yang valid sesuai KTP Anda.`,
				admin: 'Sorry, this command can only be used by the group admin!',
				Badmin: 'Sorry, this command can only be used when the bot becomes an admin!'
				}
			}
			/***************** END MESS FUNCTION *****************/
        const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }
        const addATM = (sender) => {
        	const obj = {id: sender, uang : 0}
            uang.push(obj)
            fs.writeFileSync('./database/pengguna/uang.json', JSON.stringify(uang))
        }
        
        const addKoinUser = (sender, amount) => {
            let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang += amount
                fs.writeFileSync('./database/pengguna/uang.json', JSON.stringify(uang))
            }
        }

        const delKoinUser = (sender, amount) => {
            let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang -= amount
                fs.writeFileSync('./database/pengguna/uang.json', JSON.stringify(uang))
            }
        }
        
        const checkATMuser = (sender) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return uang[position].uang
            }
        }

     //function balance
     if (m.sender) {
        const checkATM = checkATMuser(m.sender)
        try {
            if (checkATM === undefined) addATM(m.sender)
            const uangsaku = Math.floor(Math.random() * 10) + 90
            addKoinUser(m.sender, uangsaku)
        } catch (err) {
            console.error(err)
        }
    }

    //Function Add Limit 
const limitAdd = (sender) => {
	if (isPremium) {return false;}
	if (isOwner) {return false;}
	let position = false
	Object.keys(_limit).forEach((i) => {
		if (_limit[i].id == sender) {
			position = i
		}
	})
	if (position !== false) {
		_limit[position].limit += 1
		fs.writeFileSync('./database/pengguna/limit.json', JSON.stringify(_limit))
	}
}

const limitAddGame = (sender) => {
	if (isPremium) {return false;}
	if (isOwner) {return false;}
	let position = false
    Object.keys(_limit).forEach((i) => {
	   if (_limit[i].id == sender) {
		   position = i
	   }
   })
   if (position !== false) {
	   _limit[position].limit += 2
	   fs.writeFileSync('./database/pengguna/limit.json', JSON.stringify(_limit))
   }
}

//funtion limited
const isLimit = (sender) =>{ 
    if (isPremium) {return false;}
    if (isOwner) {return false;}
      let position = false
      for (let i of _limit) {
      if (i.id === sender) {
          let limits = i.limit
      if (limits >= limitawal ) {
            position = true
            return true
      } else {
          _limit
          position = true
          return false
       }
     }
   }
   if (position === false) {
       const obj = { id: sender, limit: 0 }
        _limit.push(obj)
        fs.writeFileSync('./database/pengguna/limit.json',JSON.stringify(_limit))
   return false
}
}

const bayarLimit = (sender, amount) => {
    let position = false
    Object.keys(_limit).forEach((i) => {
        if (_limit[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        _limit[position].limit -= amount
        fs.writeFileSync('./database/pengguna/limit.json', JSON.stringify(_limit))
    }
}
    
 //function check limit
 const checkLimit = (sender) => {
    let found = false
          for (let lmt of _limit) {
              if (lmt.id === sender) {
                  let limitCounts = global.limitawal.free - lmt.limit
                  if (limitCounts <= 0) return client.sendMessage(m.chat, {text:`Limit anda sudah habis\n\nLimit akan direset setiap hari pukul 00:00 WIB\nAtau silahkan upgrade ke user premium untuk mendapatkan limit unlimited`},{ quoted: m})
                  client.sendMessage(m.chat, {text:`*「 FREE LIMIT 」*
 
◪ *USER FREE*
├─ *Nama :* ${pushname}
├─ *User :* Free
└─ *Limit :* 「 ${limitCounts} 」
Limit habis? ketik: ${prefix}buylimit
Harga per limit = 500
Pastikan sebelum membeli cek ATM kamu terlebih dahulu
Ketik: ${prefix}atmku`},{ quoted : m})
                  found = true
              }
          }
          if (found === false) {
              let obj = { id: sender, limit: 0 }
              _limit.push(obj)
              fs.writeFileSync('./database/pengguna/limit.json', JSON.stringify(_limit))
              client.sendMessage(m.chat, {text: `*「 FREE LIMIT 」*
 
◪ *USER FREE*
├─ *Nama :* ${pushname}
├─ *User :* Free
└─ *Limit :* 「 ${limitCounts} 」
Limit habis? ketik: ${prefix}buylimit
Harga per limit = 500
Pastikan sebelum membeli cek ATM kamu terlebih dahulu
Ketik: ${prefix}atmku`}, { quoted : m})
          }
      }
      
      // function get limit user
const getLimitUser = function(sender, _db){
    let position = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        return _db[position].limit
    }
}
const confirmATM = (sender, amount) => {
    let position = false
    Object.keys(uang).forEach((i) => {
        if (uang[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        uang[position].uang -= amount
        fs.writeFileSync('./database/pengguna/uang.json', JSON.stringify(uang))
    }
}
	// write database every 1 minute
	setInterval(() => {
            fs.writeFileSync('./src/database.json', JSON.stringify(global.db, null, 2))
        }, 60 * 1000)

	// reset limit every 24 hours
        let cron = require('node-cron')
        cron.schedule('0 0 * * *', () => {
            var objLimit = []
            fs.writeFileSync('./database/pengguna/limit.json', JSON.stringify(objLimit, null, '\t'))
            console.log('[INFO] Limit reseted!')
        }, {
            scheduled: true,
            timezone: "Asia/Jakarta"
        })
        
	// auto set bio
	if (db.settings[botNumber].autobio) {
	    let setting = global.db.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await client.setStatus(`${''} | Runtime : ${runtime(uptime)}`)
		setting.status = new Date() * 1
	    }
	}
	    
	  // Anti Link
        if (db.chats[m.chat].antilink) {
        if (budy.match(`chat.whatsapp.com`)) {
        m.reply(`「 ANTI LINK 」\n\nKamu terdeteksi mengirim link group, maaf kamu akan di kick !`)
        if (!isBotAdmins) return m.reply(`Ehh bot gak admin T_T`)
        let gclink = (`https://chat.whatsapp.com/`+await client.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return m.reply(`Ehh maaf gak jadi, karena kamu ngirim link group ini`)
        if (isAdmins) return m.reply(`Ehh maaf kamu admin`)
        if (isCreator) return m.reply(`Ehh maaf kamu owner bot ku`)
        client.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }
        
      // Mute Chat
      if (db.chats[m.chat].mute && !isAdmins && !isOwner && !m.key.fromMe && !isCreator) {
      return
      }

        // Respon Cmd with media
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.sticker)) {
        let hash = global.db.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: client.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, client.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        client.ev.emit('messages.upsert', msg)
        }
	    
	if (('family100'+m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            client.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                addKoinUser(m.sender, 1000)
                await client.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\nAtm +1000\n\nIngin bermain lagi? tekan button dibawah`, '', m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else {
m.reply('Jawaban Salah!\nAtm -10000')
            delKoinUser(m.sender, 10000)
}
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                addKoinUser(m.sender, 1000)
                await m.reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\nAtm +1000\n\nIngin bermain lagi? kirim ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else {
m.reply('Jawaban Salah!\nAtm -10000')
            delKoinUser(m.sender, 10000)
}
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                addKoinUser(m.sender, 1000)
                await client.sendButtonText(m.chat, [{ buttonId: 'tebakgambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\nAtm +1000\n\nIngin bermain lagi? tekan button dibawah`, '', m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else {
m.reply('Jawaban Salah!\nAtm -10000')
            delKoinUser(m.sender, 10000)
}
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                addKoinUser(m.sender, 1000)
                await client.sendButtonText(m.chat, [{ buttonId: 'tebakkata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\nAtm +1000\n\nIngin bermain lagi? tekan button dibawah`, '', m)
                delete tebakkata[m.sender.split('@')[0]]
            } else {
m.reply('Jawaban Salah!\nAtm -10000')
            delKoinUser(m.sender, 10000)
}
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	    deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                addKoinUser(m.sender, 1000)
                await client.sendButtonText(m.chat, [{ buttonId: 'tebaklontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\nAtm +1000\n*${deskripsi}*\n\nIngin bermain lagi? tekan button dibawah`, '', m)
                delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
    } else {
m.reply('Jawaban Salah!\nAtm -10000')
    delKoinUser(m.sender, 10000)
}
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                addKoinUser(m.sender, 1000)
                await client.sendButtonText(m.chat, [{ buttonId: 'tebakkalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\nAtm +1000\n\nIngin bermain lagi? tekan button dibawah`, '', m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else {
m.reply('Jawaban Salah!\nAtm -10000')
            delKoinUser(m.sender, 10000)
}
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                addKoinUser(m.sender, 1000)
                await client.sendButtonText(m.chat, [{ buttonId: 'tebaklirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\nAtm +1000\n\nIngin bermain lagi? tekan button dibawah`, '', m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else {
m.reply('Jawaban Salah!\nAtm -10000')
            delKoinUser(m.sender, 10000)
}
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                addKoinUser(m.sender, 1000)
                await client.sendButtonText(m.chat, [{ buttonId: 'tebaktebakan', buttonText: { displayText: 'Tebak Tebakan' }, type: 1 }], `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\nAtm +1000\n\nIngin bermain lagi? tekan button dibawah`, '', m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else {
m.reply('Jawaban Salah!\nAtm -10000')
            delKoinUser(m.sender, 10000)
}
        }
        
        if (susunkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = susunkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                addKoinUser(m.sender, 1000)
                await client.sendButtonText(m.chat, [{ buttonId: 'susunkata', buttonText: { displayText: 'Susun Kata' }, type: 1 }], `🎮 Susun Kata 🎮\n\nJawaban Benar 🎉\nAtm +1000\n\nIngin bermain lagi? tekan button dibawah`, '', m)
                delete susunkata[m.sender.split('@')[0]]
            } else {
                m.reply('Jawaban Salah!\nAtm -10000')
                            delKoinUser(m.sender, 10000)
                }
                        }

        //TicTacToe
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    // m.reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { // nek wayahku
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    m.reply({
	    '-3': 'Game telah berakhir',
	    '-2': 'Invalid',
	    '-1': 'Posisi Invalid',
	    0: 'Posisi Invalid',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await client.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await client.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

        //Suit PvP
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
	    client.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    client.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) client.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    if (!roof.pilih2) client.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) client.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    client.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /gunting/i
	    let b = /batu/i
	    let k = /kertas/i
	    let reg = /^(gunting|batu|kertas)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih2) client.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih) client.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    client.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            m.reply(`
Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.users[m.sender].afkTime > -1) {
            let user = global.db.users[m.sender]
            m.reply(`
Kamu berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
	    
        const sleep = async (ms) => {
return new Promise(resolve => setTimeout(resolve, ms));
}
             
function randomNomor(angka){
return Math.floor(Math.random() * angka) + 1
}
function monospace(string) {
return '' + string + ''
}        
function kyun(seconds){
function pad(s){
return (s < 10 ? '0' : '') + s;
}
var hours = Math.floor(seconds / (60*60));
var minutes = Math.floor(seconds % (60*60) / 60);
var seconds = Math.floor(seconds % 60);

return `${pad(hours)}H ${pad(minutes)}M ${pad(seconds)}S`
}

//function
const timestampo = speed();
const latensip = speed() - timestampo
const sisaLimit = `${getLimitUser(m.sender, _limit) - global.limitawal.free}`

//Function Jam & Tanggall
function tanggal(){
    myMonths = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
    myDays = ["Minggu","Senin","Selasa","Rabu","Kamis","Jum'at","Sabtu"];
    var tgl = new Date();
    var day = tgl.getDate()
    bulan = tgl.getMonth()
    var thisDay = tgl.getDay(),
    thisDay = myDays[thisDay];
    var yy = tgl.getYear()
    var year = (yy < 1000) ? yy + 1900 : yy;
    return `${thisDay}, ${day} - ${myMonths[bulan]} - ${year}`
}

function tanggalSewa(){
myMonths_ = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
myDays_ = ["Minggu","Senin","Selasa","Rabu","Kamis","Jum'at","Sabtu"];
var tgl_ = new Date();
var day_ = tgl_.getDate() + 2
bulan_ = tgl_.getMonth()
var thisDay_ = tgl_.getDay() + 2 
thisDay_ = myDays_[thisDay_]; + 2
var yy_ = tgl_.getYear()
var year_ = (yy_ < 1000) ? yy_ + 1900 : yy_;
return `${thisDay_}, ${day_} ${myMonths_[bulan_]} ${year_}`
}
/*
//Cek Umur
var nmr = sender
var obj = _registered.some((val) => {
return val.id === nmr
})
var cekage =_registered.some((val) => {
return val.id === nmr && val.age >= 18
})
//Function Cek Umur
function cekumur(obj){
if (obj === true){
    return false
} else {
    return client.sendMessage(from,`━━━━❰❉ NOTICE BOT !❉❱━━━━ 
Hi ${pushname}!     
Kamu belum cukup umur untuk mengakses fitur tersebut!

Kamu bisa meminta owner untuk mendaftarkan ulang dengan menunjukan KTP Anda.
Hubungi Owner: wa.me/${OwnerNumber}
━━━━❰❉${namabot}❉❱━━━━`,text, {quoted:mek})
}
}
*/

//Kalender Islam
let d__ = new Date(new Date + 3600000)
let locale__ = 'id'
let weton_ = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d__ / 84600000) % 5]
let week_ = d__.toLocaleDateString(locale__, { weekday: 'long' })
let date_ = d__.toLocaleDateString(locale__, {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale__ + '-TN-u-ca-islamic', {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
}).format(d__)

//Ucapan
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var ucapanWaktu = 'Good Night'
}
if(time2 < "21:00:00"){
var ucapanWaktu = 'Good Night'
}
if(time2 < "20:00:00"){
var ucapanWaktu = 'Good Evening'
}
if(time2 < "18:00:00"){
var ucapanWaktu = 'Good Evening'
}
if(time2 < "15:00:00"){
var ucapanWaktu = 'Good Afternoon'
}
if(time2 < "10:00:00"){
var ucapanWaktu = 'Good Morning'
}
if(time2 < "05:00:00"){
var ucapanWaktu = 'Good Night'
}
/**
                    * Check user is premium.
                    * @param {String} userId 
                    * @param {Object} _dir 
                    * @returns {Boolean}
                    */
 const checkDataStore = (userId, _dir) => {
    let status = false
    Object.keys(_dir).forEach((i) => {
    if (_dir[i].pesan === userId) {
    status = true
    }
    })
    return status
    }
    /**
// ====================================================================================================== //
    /**
    * Get store user position.
    * @param {String} userId 
    * @param {Object} _dir 
    * @returns {Number}
    */
    const getStorePosition = (userId, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
    if (_dir[i].pesan === userId) {
    position = i
    }
    })
    if (position !== null) {
    return position
    }
    }

if (commandsDbStore.includes(from)){
    const _dataStorenya_ = JSON.parse(fs.readFileSync(`./store/${from}.json`))
    for (var i = 0; i < _dataStorenya_.length ; i++) {
        if (budy.toLowerCase() === _dataStorenya_[i].pesan) {
            // m.reply(_dataStorenya_[i].balasan)
            if (_dataStorenya_[i].image) {
            client.sendMessage(m.chat, {image: {url: _dataStorenya_[i].image} , caption: _dataStorenya_[i].balasan}, {quoted:m})
            } else {
                m.reply(_dataStorenya_[i].balasan)
            }
        }
    }
}
const floc = {
    key : {participant : '0@s.whatsapp.net' },
    message: {liveLocationMessage: {caption: `${ucapanWaktu} ${pushname}`,jpegThumbnail: fs.readFileSync('./lib/ixb.jpeg')}}}
    // TEXT WITH THUMBNAIL
const ftex = {
    key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? 
         { remoteJid: "6289643739077-1613049930@g.us" } : {})  },
         message: { "extendedTextMessage": {"text": `${ucapanWaktu} ${pushname}`,"title": `${ucapanWaktu} ${pushname}`,'jpegThumbnail': fs.readFileSync('./lib/ixb.jpeg')}}  }
    /*
//Anti Spam 
if (isCmd && msgFilter.isFiltered(from) && !m.isGroup) {
	console.log(color('[SPAM]','red'), color(command,"aqua"), "from", color(pushname), (m.sender.split('@')[0]))
	return //reply('Sabar, Jangan spam!')
} 
if (isCmd && msgFilter.isFiltered(from) && m.isGroup) {
	console.log(color('[SPAM]','red'), color(command,"aqua"), "from", color(pushname), (m.sender.split('@')[0]), "in", color(groupName, "yellow"))
	return //reply('Sabar, Jangan spam!')
}
if (isCmd && !isOwner && !isAdmins) msgFilter.addFilter(from)*/


//Sewa Grup FUNCTION
const expireSewa = (_dir) => {
	setInterval(() => {
		let position = null
		Object.keys(_dir).forEach((i) => {
			if (Date.now() >= _dir[i].expired) {
				position = i
			}
		})
		if (position !== null) {
			console.log(color(`Sewa expired: ${_dir[position].id}`, "red"))
			var sewwa = `${_dir[position].id}`
			client.sendText(sewwa,`Maaf waktu sewa sudah habis. silakan hubungi owner jika ingin menyewa bot kembali !\nOwner: wa.me/${global.owner}`)
			sleep(8000)
			client.groupLeave(sewwa)
			client.sendText(`${global.owner}@s.whatsapp.net`, `*「 SEWA EXPIRED 」*\n\nID Group : ${sewwa}\nMasa sewa sudah habis`)
			_dir.splice(position, 1)
			fs.writeFileSync('./lib/database/sewa.json', JSON.stringify(_dir))
		}
	}, 1000)
}   
expireSewa(sewa)

//Premium Expired Function
const premiumExpiredFunction = (_dir) => {
	setInterval(() => {
	let position = null
	Object.keys(_dir).forEach((i) => {
	if (Date.now() >= _dir[i].expired) {
	position = i
	}
	})
	if (position !== null) {
	console.log(color(`Premium expired: ${_dir[position].id}`, "red"))
	client.sendText(`${global.owner}@s.whatsapp.net`, `*「 PREMIUM EXPIRED 」*\n\nMasa premium wa.me/${_dir[position].id.split("@")[0]} telah habis`)
	// client.sendText(`${_dir[position].id}`, `*「 ${namabot} NOTIFICATION 」*\n\nHai Kak ${_dir[position].id.split("@")[0]} !\nWaktu premium user kakak telah habis, terima kasih telah menjadi user premium ${namabot}\nHave a nice day kak!`)
	client.sendButtonText(`${_dir[position].id}`, [{ buttonId: 'daftarpremium', buttonText: { displayText: 'ᴅᴀꜰᴛᴀʀ ᴘʀᴇᴍɪᴜᴍ' }, type: 1 }], `*「 ${namabot} NOTIFICATION 」*\n\nHai Kak ${_dir[position].id.split("@")[0]} !\nWaktu premium user kakak telah habis, terima kasih telah menjadi user premium ${namabot}\nHave a nice day kak!`)
    // client.sendMessage(i, {text: `*「 ${namabot} NOTIFICATION 」*\n\nHai Kak ${_dir[position].id.split("@")[0]} !\nWaktu premium user kakak telah habis, terima kasih telah menjadi user premium ${namabot}\nHave a nice day kak!`})
    _dir.splice(position, 1)
	fs.writeFileSync('./database/pengguna/premium.json', JSON.stringify(_dir))
	}
}, 1000)
}
premiumExpiredFunction(prem)
//=====================================================================================================//
const sendStickerFromUrl = async(to, url) => {
    var names = Date.now() / 10000;
    var download = function (uri, filename, callback) {
        request.head(uri, function (err, res, body) {
            request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
        });
    };
    download(url, './stik' + names + '.png', async function () {
        console.log('selesai');
        let filess = './stik' + names + '.png'
        let asw = './stik' + names + '.webp'
        exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
            let media = fs.readFileSync(asw)
            client.sendMessage(m.chat, { sticker: media}, { quoted: m })
            fs.unlinkSync(filess)
            fs.unlinkSync(asw)
        });
    });
}

const sendPTT = async(to, audione) => {
    client.sendMessage(to, {audio: audione, mimetype: 'audio/mpeg', ptt:true}, {quoted:m})
}

const getMenfessPosition = (userId, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
    if (_dir[i].pesan === userId) {
    position = i
    }
    })
    if (position !== null) {
    return position
    }
    }

let onlyGrup = !m.isGroup
const tmenfess = JSON.parse(fs.readFileSync(`./src/menfess.json`))
const smenfess = JSON.parse(fs.readFileSync(`./src/smenfess.json`))
if (tmenfess.includes(m.sender)) {
    const nganu_menfess = JSON.parse(fs.readFileSync(`./temp/${smenfess}.json`))[0]
    console.log(nganu_menfess.target)
    m.reply('Pesan kamu berhasil terkirim')
    client.sendMessage(nganu_menfess.sender, {text: `Hi, kamu mendapat balasan menfess dari ${nganu_menfess.target}\nPesan: ${budy}`})
    tmenfess.splice(getMenfessPosition(m.sender, tmenfess), 1)
    fs.writeFileSync(`./src/menfess.json`, JSON.stringify(tmenfess))
    fs.unlinkSync(`./temp/${smenfess}.json`)
    smenfess.splice(getMenfessPosition(nganu_menfess.sender, smenfess), 1)
    fs.writeFileSync(`./src/smenfess.json`, JSON.stringify(smenfess))
}
switch(command) {
	    case 'afk': {
            if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                let user = global.db.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                m.reply(`${m.pushName} Telah Afk${text ? ': ' + text : ''}`)
            }
            break	
        case 'ttc': case 'ttt': case 'tictactoe': {
            if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return m.reply('Kamu masih didalam game')
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            m.reply('Partner ditemukan!')
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
            if (room.x !== room.o) await client.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await client.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            m.reply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
            case 'delttc': case 'delttt': {
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
            this.game = this.game ? this.game : {}
            try {
            if (this.game) {
            delete this.game
            client.sendText(m.chat, `Berhasil delete session TicTacToe`, m)
            } else if (!this.game) {
            m.reply(`Session TicTacToe🎮 tidak ada`)
            } else return m.reply('?')
            } catch (e) {
            m.reply('rusak')
            }
            }
            break
            case 'suitpvp': case 'suit': {
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Selesaikan suit mu yang sebelumnya`)
	    if (m.mentionedJid[0] === m.sender) return m.reply(`Tidak bisa bermain dengan diri sendiri !`)
            if (!m.mentionedJid[0]) return m.reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0])))  m.reply(`Orang yang kamu tantang sedang bermain suit bersama orang lain :(`)
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
            this.suit[id] = {
            chat: await client.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) client.sendText(m.chat, `_Waktu suit habis_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break

	//=== DATABASE SEWA ===//
    case 'addsewa':{
        if (!m.isGroup) return m.reply(mess.only.group)
        if (!isCreator) return m.reply(mess.only.ownerB)
        if (m.isGroup){
        const wakse = text
        _sewa.addSewa(from, wakse, sewa)
        swa = 'https://telegra.ph/file/b779061788fe0b981fb1c.jpg'
        // sewanjay = await getBuffer(swa)
        captsewa = `     *「 SEWA BOT 」*

EXPIRED :
${ms(toMs(wakse)).days} Hari, ${ms(toMs(wakse)).hours} Jam, ${ms(toMs(wakse)).minutes} Menit, ${ms(toMs(wakse)).seconds} detik

Ketik ${prefix}ceksewa		 
Untuk mengecek status sewa grup kamu!

BOT OTOMATIS OUT JIKA DURASI HABIS`
        // client.sendMessage(from, sewanjay, image, {quoted: mek, caption: captsewa})
       // sendMediaURL(from, swa, captsewa)
       m.reply(captsewa)
        } else {
        _sewa.addSewa(args[0], args[1], sewa)
        captsewa = `     *「 SEWA BOT 」*

EXPIRED :
${ms(toMs(args[1])).days} Hari, ${ms(toMs(args[1])).hours} Jam, ${ms(toMs(args[1])).minutes} Menit, ${ms(toMs(args[1])).seconds} detik

Ketik ${prefix}ceksewa		 
Untuk mengecek status sewa grup kamu!

BOT OTOMATIS OUT JIKA DURASI HABIS`
        m.reply(captsewa)
        }
    }
        break
    case 'ceksewa':{
       if (!m.isGroup) return m.reply(mess.only.group)
        const cekExp1 = ms(_sewa.getSewaExpired(from, sewa) - Date.now())
        swa = 'https://telegra.ph/file/b779061788fe0b981fb1c.jpg'
        //sewanjay = await getBuffer(swa)
        captsewa = `*「 SEWA EXPIRE 」*

*ID:* ${from}

*SEWA EXPIRED:*
${cekExp1.days}Hari, ${cekExp1.hours}Jam, ${cekExp1.minutes}Menit, ${cekExp1.seconds}Detik`
        // client.sendMessage(from, sewanjay, image, {quoted: mek, caption: captsewa})
       // client.sendMedia(m.chat, swa, '',captsewa )
       m.reply(captsewa)
    }
        break
case 'delsewa':{
        if (!isOwner) return m.reply(mess.only.ownerB)
        if (m.isGroup){
        sewa.splice(_sewa.getSewaPosition(from, sewa), 1)
        fs.writeFileSync('./lib/database/sewa.json', JSON.stringify(sewa))
        m.reply('Sukses menghapus sewa')
        } else {
        sewa.splice(_sewa.getSewaPosition(args[0], sewa), 1)
        fs.writeFileSync('./lib/database/sewa.json', JSON.stringify(sewa))
        m.reply('Sukses menghapus sewa')
        }
    }
        break
case 'sewalist': case 'listsewa':{
    if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
        let txtnyee = `*LIST SEWA GROUP ${namabot}*\nJumlah : ${sewa.length}\n\n`
        for (let i of sewa){
        let cekvipp = ms(i.expired - Date.now())
        txtnyee += `═════════════════\n*ID :* ${i.id} \n*Expire :* ${cekvipp.days}Hari, ${cekvipp.hours}Jam, ${cekvipp.minutes}Menit, ${cekvipp.seconds}Detik\n`
        }
        txtnyee += `═════════════════`
        m.reply(txtnyee)
    }
        break
        //=== END DATABASE SEWA ===//
//premium database
case 'premium':{
					//FIX BY IXB-TEAM
				    if (!m.key.fromMe && !isOwner) return m.reply(mess.only.ownerB)
					if (m.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return m.reply(`Tag user yang ingin dijadikan premium!\nContoh: ${prefix + command} @tag harinya`)
					mentioned = m.message.extendedTextMessage.contextInfo.mentionedJid
					addprem = `${mentioned[0].split('@')[0]}@s.whatsapp.net`
				    _premium.addPremiumUser(addprem, args[1], prem)
                    m.reply(`    ─── *「 PREMIUM 」* ───
──────────────────
+ *ID :* ${mentioned[0].split('@')[0]}@c.us
+ *Nama :* ${pushname}
+ *Expired :* ${ms(toMs(args[1])).days} Hari, ${ms(toMs(args[1])).hours} Jam, ${ms(toMs(args[1])).minutes} menit
──────────────────
║▌│█║▌│ █║▌│█│║▌║
║▌│█║▌│ █║▌│█│║▌║`) 
}
                    break
			case 'cekprem':case 'cekpremi':case 'premiumcheck':case 'cekpremium':{
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
				    if (!isPremium) return m.reply('Kamu bukan user Premium!')
					const cekExp = ms(_premium.getPremiumExpired(m.sender, prem) - Date.now())
					m.reply(`*「 PREMIUM USER 」*
➸ *ID :* ${m.sender.split('@')[0]}@c.us
➸ *Username :* ${pushname}
➸ *Expired :* ${cekExp.days} Hari, ${cekExp.hours} Jam, ${cekExp.minutes} Menit`)
            }
					break    
        case 'unpremium':case 'delprem':{
			if (!mek.key.fromMe && !isOwner) return m.reply(mess.only.ownerB)
			if (m.message.extendedTextMessage === undefined || m.message.extendedTextMessage === null) return m.reply(`Tag usernya gan!`)
			mentioned = m.message.extendedTextMessage.contextInfo.mentionedJid
			premidel = `${mentioned[0].split('@')[0]}@s.whatsapp.net`
			prem.splice(_premium.getPremiumPosition(premidel, prem), 1)
			fs.writeFileSync('./database/pengguna/premium.json', JSON.stringify(prem))
			m.reply(`*「 PREMIUM DELETE 」*\n*Name :* ${mentioned[0].split('@')[0]}@c.us\n*Expired :* NOW :v\n*Thank for order premium back soon for buying again:D*`)
        }
            break
        case 'premiumlist':case 'listpremium':{
				if (!m.key.fromMe && !isOwner) return m.reply(mess.only.ownerB)   
				txt = 'This is list of premium number :\n'
				let men = [];
				for (let i of prem){
				men.push(i.id)
				const checkExp = ms(i.expired - Date.now())
				txt += `═════════════════\n➸ *ID :* @${i.id.split("@")[0]}\n➸ *Expired*: ${checkExp.days}Hari, ${checkExp.hours}Jam, ${checkExp.minutes}Menit\n`
                }
                txt += `═════════════════\n`
                txt += `Total : ${prem.length}`
				client.sendTextWithMentions(m.chat, txt, m)
            }
				break
		case 'bcprem':case 'bcpremium':case 'bcuserprem':case 'bcuserpremium':{
				if (!mek.key.fromMe && !isOwner) return m.reply(mess.only.ownerB) 
				if (args.length < 1) return m.reply('Mau broadcast apaan lu ngab :v')
				nganuprem = `Hai kak, ${ucapanWaktu}\nTerima kasih telah menjadi user Premium ${namabot}\n\n${q}`
				for (let i of prem){
                    client.sendButtonText(i.id, [{ buttonId: 'cekpremium', buttonText: { displayText: 'CEK PREMIUM' }, type: 1 }], nganuprem)
                // client.sendMessage(i.id,{text: nganuprem})
                }
                    m.reply(`Success broadcast ke ${prem.length} user premium!`)
            }
				break  
            case 'addpelanggan':{
                    //FIX BY IXB-TEAM
                    if (!m.key.fromMe && !isOwner) return m.reply(mess.only.ownerB)
                    if (!text.includes('628')) return m.reply(`Awali dengan 62\ncontoh: ${prefix + command} ${global.owner}`)
                    databasePelanggan.push(`${text}@s.whatsapp.net`)
                    fs.writeFileSync('./database/pengguna/pelanggan.json', JSON.stringify(databasePelanggan))
                    client.sendTextWithMentions(m.chat, `Sukses add custommer @${text}`)
                }
                    break
                case 'listpelanggan':{
                        if (!m.key.fromMe && !isOwner) return m.reply(mess.only.ownerB)   
                        teks = 'This is list of custommer number :\n'
                        for (let benn of databasePelanggan) { teks += `~> @${benn.split('@')[0]}\n`}
                        teks += `Total : ${databasePelanggan.length}`
                        client.sendTextWithMentions(m.chat, teks, m)
                    }
                        break
                case 'bcpelanggan':{
                    if (!mek.key.fromMe && !isOwner) return m.reply(mess.only.ownerB) 
                    if (args.length < 1) return m.reply('Mau broadcast apaan lu ngab :v')
                    nganu_cust = `y`
                    for (let i of databasePelanggan){
                        // let btn = [
                        //     { urlButton: {displayText: 'ᴄʜᴇᴄᴋ ʜᴇʀᴇ', url: 'https://senjamu.com/wedding-invitation'}},
                        //     { urlButton: {displayText: 'ᴄᴏɴɴᴇᴄᴛ ᴡɪᴛʜ ᴍᴇ', url: 'https://instagram.com'}},
                        //     /*{ quickReplyButton: {displayText: 'SEWA',id: 'sewa'}}, 
                        //     { quickReplyButton: {displayText: 'OFFICIAL GROUP',id: 'ixbgroup'}  },
                        //     { quickReplyButton: {displayText: 'ALL MENU', id: 'allmenu'}}*/
                        //     ]
                        // client.send5But(i, nganu_cust, '', btn)
                        client.sendMessage(i, {text: nganu_cust})
                    }
                        m.reply(`Success broadcast to ${databasePelanggan.length} custommer!`)
                }
                break
            case 'setnamabot': case 'setnamebot': {
                    if (!m.key.fromMe && !isOwner) return m.reply(mess.only.ownerB)
                    if (!text) m.reply(`Example : ${prefix + command} ${namabot}`)
                    let name = await client.updateProfileName(text)
                    m.reply(`Successfully renamed bot to ${text}`)
                    }
                    break
            case 'setstatus': case 'setbiobot': case 'setbotbio': {
                    if (!m.key.fromMe && !isOwner) return m.reply(mess.only.ownerB)
                    if (!text)  m.reply(`Dewi`)
                    let name = await client.updateProfileStatus(text)
                    m.reply(`Successfully changed bot bio status to ${text}`)
                    }
                    break
            case 'ban':{
                    //FIX BY IXB-TEAM
                    if (!m.key.fromMe && !isOwner) return m.reply(mess.only.ownerB)
                    if (m.message.extendedTextMessage === undefined || m.message.extendedTextMessage === null) return m.reply('Tag user yang ingin di premiumkan !')
                    mentioned = m.message.extendedTextMessage.contextInfo.mentionedJid
                    ban.push(`${mentioned[0].split('@')[0]}@s.whatsapp.net`)
                    fs.writeFileSync('./database/pengguna/banned.json', JSON.stringify(ban))
                    client.sendTextWithMentions(m.chat, `Sukses ban @${mentioned[0].split('@')[0]}`)
                }
                    break
            case 'unban':{
                    if (!m.key.fromMe && !isOwner) return m.reply(mess.only.ownerB)
                    const hnow = `${args[0].replace('@','')}@s.whatsapp.net`
                    var art = ban
                    for( var dp = 0; dp < art.length; dp++){ 
                    if ( art[dp] === hnow) { 
                    art.splice(dp, 1); 
                    dp--; 
                    fs.writeFileSync('./database/pengguna/banned.json',JSON.stringify(art))
                    }
                    }
                    m.reply(`Nomor ${args[0].replace('@','')}@c.us telah di unban!`)
                }
                    break
            case 'banlist':case 'listbanned':{
                    // if (!m.key.fromMe && !isOwner) return m.reply(mess.only.ownerB)   
                    teks = 'This is list of banned number :\n'
                    for (let benn of ban) {
                    teks += `~> @${benn.split('@')[0]}\n`
                    }
                    teks += `Total : ${ban.length}`
                    client.sendTextWithMentions(m.chat, teks, m)
                }
                    break
//end database
        case 'sewa':case 'sewabot': {
					    if (isOwner) return m.reply(regane.replace(`│
├≽ *MORE INFO*
│ ⤷ wa.me/${global.owner}
╰─────────────`,'╰─────────────'))
            // m.reply(regane)
            m.reply(`Hi ${pushname}, Please click this link for full details 
╭─────────────
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
│ ⤷ wa.me/6287857597008
╰─────────────`)            }
            break
            case 'daftarpremium':{
                if (isOwner) return m.reply(regane.replace(`│
├≽ *MORE INFO*
│ ⤷ wa.me/${global.owner}
╰─────────────`,'╰─────────────'))
            m.reply(`Hi ${pushname}, Please click this link for full details  ╭─────────────
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
│ ⤷ wa.me/6287857597008
╰─────────────/upgrade-premium-user`)
            }
            break
            case 'chat': {
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                if (!isCreator) return m.reply(mess.only.ownerB)
                if (!q)  return m.reply('Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete')
                if (args[0] === 'mute') {
                    client.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    client.chatModify({ mute: null }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    client.chatModify({  archive: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    client.chatModify({ archive: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    client.chatModify({ markRead: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    client.chatModify({ markRead: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    client.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
	    case 'family100': {
            if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                if ('family100'+m.chat in _family100) {
                    m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
                    return false
                }
                let anu = JSON.parse(fs.readFileSync('./database/game/family100.json'))
                let random = anu[Math.floor(Math.random() * anu.length)]
                let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
                _family100['family100'+m.chat] = {
                    id: 'family100'+m.chat,
                    pesan: await client.sendText(m.chat, hasil, m),
                    ...random,
                    terjawab: Array.from(random.jawaban, () => false),
                    hadiah: 6,
                }
            }
            break
            case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
            if (!m.quoted && !text) return m.reply(`Kirim/reply text dengan caption ${prefix + command}`)
            ter = command[1].toLowerCase()
            tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
            m.reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
            break
            case 'tebaklagu': case 'tebak lagu': {
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) return m.reply("Masih Ada Sesi Yang Belum Diselesaikan!")
                    let anu = JSON.parse(fs.readFileSync('./database/game/tebaklagu.json'))
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let msg = await client.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
                    client.sendText(m.chat, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
                    tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    client.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, '', m)
                    delete tebaklagu[m.sender.split('@')[0]]
                    }
                }
                    break
                case 'tebakgambar': case 'tebak gambar':{
                    if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) return m.reply("Masih Ada Sesi Yang Belum Diselesaikan!")
                    let anu = JSON.parse(fs.readFileSync('./database/game/tebakgambar.json'))
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    client.sendImage(m.chat, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
                    tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    client.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, '', m)
                    delete tebakgambar[m.sender.split('@')[0]]
                    }
                }
                    break
                case 'tebakkata': case 'tebak kata': {
                    if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) return m.reply("Masih Ada Sesi Yang Belum Diselesaikan!")
                    let anu = JSON.parse(fs.readFileSync('./database/game/tebakkata.json'))
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    client.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    client.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, '', m)
                    delete tebakkata[m.sender.split('@')[0]]
                    }
                }
                break
                case 'tebakkalimat': case 'tebak kalimat': {
                    if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) return m.reply("Masih Ada Sesi Yang Belum Diselesaikan!")
                    let anu = JSON.parse(fs.readFileSync('./database/game/tebakkalimat.json'))
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    client.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    client.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, '', m)
                    delete tebakkalimat[m.sender.split('@')[0]]
                    }
                }
                break
                case 'tebaklirik': case 'tebak lirik':{
                    if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) return m.reply("Masih Ada Sesi Yang Belum Diselesaikan!")
                    let anu = JSON.parse(fs.readFileSync('./database/game/tebaklirik.json'))
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    client.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
                    tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    client.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, '', m)
                    delete tebaklirik[m.sender.split('@')[0]]
                    }
                }
                break
                case 'tebaklontong': case 'tebak lontong': case 'caklontong': {
                    if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) return m.reply("Masih Ada Sesi Yang Belum Diselesaikan!")
                    let anu = JSON.parse(fs.readFileSync('./database/game/tebaklontong.json'))
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    client.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
                    caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
		    caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
                    })
                    await sleep(60000)
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    client.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, '', m)
                    delete caklontong[m.sender.split('@')[0]]
		    delete caklontong_desk[m.sender.split('@')[0]]
                    }
                }
            break
            case 'susunkata': {
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                if (susunkata.hasOwnProperty(m.sender.split('@')[0])) return m.reply("Masih Ada Sesi Yang Belum Diselesaikan!")
                let anu = JSON.parse(fs.readFileSync('./database/game/susunkata.json'))
                let result = anu[Math.floor(Math.random() * anu.length)]
                client.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\nSoal : ${result.soal}\nTipe : ${result.tipe}\nWaktu : 60s`, m).then(() => {
                    susunkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                })
                await sleep(60000)
                if (susunkata.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    m.reply(`Waktu Habis\nJawaban : ${result.jawaban}`)
                    delete susunkata[m.sender.split('@')[0]]
                }
            }
            break
            case 'kuismath': case 'math': {
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) return m.reply("Masih Ada Sesi Yang Belum Diselesaikan!")
                let { genMath, modes } = require('./src/math')
                if (!text) return m.reply(`Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`)
                let result = await genMath(text.toLowerCase())
                client.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    m.reply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
            case 'santet':{
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
					if (!m.isGroup) return m.reply('Perintah ini hanya bisa di gunakan dalam group!')
					if (m.message.extendedTextMessage === undefined || m.message.extendedTextMessage === null) return m.reply(`Tag member yang mau disantet\n\nContoh : ${prefix}santet @tag | kalo berak kaga di siram`)
					mentioned = m.message.extendedTextMessage.contextInfo.mentionedJid
					if (args.length === 1) return m.reply(`Masukkan alasan kenapa menyantet dia!!\n\nContoh : ${prefix}santet @tag | kalo berak kaga di siram`)
				    try{
					santet = ['Muntah Paku','Meninggoy','Meninggal','Berak Paku','Muntah Rambut','Muntah Jembut','Ketempelan MONYET!!!','Ketempelan Tuyul','Berak di Celana Terus','Menjadi Gila','Menjadi Bodoh','Berak Beling','Berak Batu','Open BO terus','ngewe sama yg monyet seharian','dikejar orang gila','diewe om om','jadi burik','ga lulus sekolah / kuliah','dimarahin emak seharian','dimarahin doi setahun','di putusin doi']
					terima1 = santet[Math.floor(Math.random() * (santet.length))]
					ini_nama = args.join(" ").split("|")
					target = ini_nama[0].trim()
					alasan = ini_nama[1].trim()
					client.sendTextWithMentions(m.chat,`Santet terkirim ke @${mentioned[0].split('@')[0]}\n\nAlasan: ${alasan}\n\nJenis Santet Yang di Terima:\n*${terima1}*`, m)
			        } catch (e) {
			    	console.log(`Error :`, color(e,'red'))
					m.reply(`Format salah! Contoh: ${prefix + command} @tag | kalo pipis g disiram`)
					}
                    limitAdd(m.sender)
                }
					break
                case 'apakah':{
                    if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
					if (!m.isGroup) return m.reply(`GROUP ONLY`)
					const apakahh = ["Ya","Tidak","Ga tau","Mbuh su","Gatau mbuh mumet ngadepi pertanyaanmu","Takon yangmu ae kono lho su"]
					const kah = apakahh[Math.floor(Math.random() * apakahh.length)]
					m.reply('Pertanyaan : '+text+'\n\nJawaban : '+ kah)
                    limitAdd(m.sender)
                    }
                    break 
				case 'bagaimanakah':{
                    if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
					if (!m.isGroup) return m.reply(`GROUP ONLY`)
					const bagai =['Kita Kenal?','Nanya Terus deh','Tidak Tahu','Cari Aja Sendiri','Tanya aja sama rumput yang bergoyang','Bawel amat si','Kurang Tahu','Mana Saya Tahu, Saya kan ikan']
					const mana = bagai[Math.floor(Math.random() * bagai.length)]
					m.reply('Pertanyaan : '+text+'\n\nJawaban : '+mana)
                    limitAdd(m.sender)
                }
					break
                case 'panjangttd':{
                    if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
					if (!m.isGroup) return m.reply(`GROUP ONLY`)
					pnjngttd = text
					const pnjng =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const ttdny = pnjng[Math.floor(Math.random() * pnjng.length)]
					m.reply('Pertanyaan : panjang titid ' +text+'\n\nJawaban : '+ ttdny+'cm')
                    limitAdd(m.sender)
                    }
					break
				case 'rate':{
                    if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
					if (!m.isGroup) return m.reply(`GROUP ONLY`)
					ratee = ["100%","95%","90%","85%","80%","75%","70%","65%","60%","55%","50%","45%","40%","35%","30%","25%","20%","15%","10%","5%"]
					const te = ratee[Math.floor(Math.random() * ratee.length)]
					m.reply('Pertanyaan : '+command+'\n\nJawaban : '+ te+'')
                    limitAdd(m.sender)
                }
					break 
				case 'watak':{
                    if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
					if (!m.isGroup) return m.reply(`GROUP ONLY`)
					wa =["penyayang","pemurah","Pemarah","Pemaaf","Penurut","Sangean","Baik","baperan","Baik Hati","penyabar","Uwu","top deh, pokoknya","Suka Membantu"]
					const tak = wa[Math.floor(Math.random() * wa.length)]
					m.reply('Pertanyaan : '+command+'\n\nJawaban : '+ tak)
                    limitAdd(m.sender)
                }
					break 
				case 'hobby':case 'hobi':{
                    if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
					if (!m.isGroup) return m.reply(`GROUP ONLY`)
					hob =["Memasak","Membantu Atok","Open BO","Mabar","Nobar","Sosmed an","Membantu Orang lain","Nonton Anime","Nonton Drakor","Naik Motor","Nyanyi","Menari","Bertumbuk","Menggambar","Foto fotoan Ga jelas","Maen Game","Berbicara Sendiri"]
					const by = hob[Math.floor(Math.random() * hob.length)]
					m.reply('Pertanyaan : '+command+'\n\nJawaban : '+ by)
                    limitAdd(m.sender)
                }
					break 
				case 'bisakah':{
                    if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
					if (!m.isGroup) return m.reply(`GROUP ONLY`)
					const bisakahh = ["Bisa","Tidak Bisa","Ga tau"]
					const keh = bisakahh[Math.floor(Math.random() * bisakahh.length)]
					m.reply('Pertanyaan : '+command+'\n\nJawaban : '+ keh)
                    limitAdd(m.sender)
                }
					break 
				case 'kapankah':{
                    if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
					if (!m.isGroup) return m.reply(`GROUP ONLY`)
					const kapankahh = ["1 Minggu lagi","1 Bulan lagi","1 Tahun lagi","100 tahun lagi","gatau","2030","1 Jam lagi","1 Menit lagi"]
					const koh = kapankahh[Math.floor(Math.random() * kapankahh.length)]
					m.reply('Pertanyaan : '+command+'\n\nJawaban : '+ koh)
                    limitAdd(m.sender)
                }
					break 
            case 'ganteng': case 'sange': case 'cantik': case 'babi': case 'imut': case 'gemoy': case 'lucu': {
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
            if (!m.isGroup) return m.reply(mess.only.group)
            let member = participants.map(u => u.id)
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `Yang ter${command} disini adalah: @${jodoh.split('@')[0]}`
            /*let buttons = [
                        { buttonId: command, buttonText: { displayText: command }, type: 1 }
                    ]
                    await client.sendButtonText(m.chat, buttons, jawab, '', m, {mentions: [jodoh]})*/
                    client.sendTextWithMentions(m.chat, jawab, m)
                    limitAdd(m.sender)
            }
            break
            case 'jodohku': {
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
            if (!m.isGroup) return m.reply(mess.only.group)
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `👫Jodoh mu adalah

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: 'jodohku', buttonText: { displayText: 'Jodohku' }, type: 1 }
                    ]
                    // await client.sendButtonText(m.chat, buttons, jawab, '', m, {mentions: ments})
                    client.sendTextWithMentions(m.chat, jawab, m)
                    limitAdd(m.sender)
            }
            break
            case 'jadian': {
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
            if (!m.isGroup) return m.reply(mess.only.group)
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `Ciee yang Jadian💖 Jangan lupa pajak jadiannya🐤

@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let menst = [orang, jodoh]
            let buttons = [
                        { buttonId: 'jadian', buttonText: { displayText: 'Jadian' }, type: 1 }
                    ]
                    // await client.sendButtonText(m.chat, buttons, jawab, '', m, {mentions: menst})
                    client.sendTextWithMentions(m.chat, jawab, m)
                    limitAdd(m.sender)
            }
            break
    case 'truth':{
        if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
        const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Lebih milih pacar engas-an atau sholehah? jawab jujur gan!\nawokwokwowkwok','Kalau engas biasanya ngapain?','Pernah ngapain aja sama pacar?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
		const ttrth = trut[Math.floor(Math.random() * trut.length)]
		truteh = await getBuffer('https://telegra.ph/file/11b2894177a472a5a5950.jpg')//(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
		client.sendMessage(from, {image:truteh, caption: '*TRUTH*\n\n'+ ttrth}, {quoted: m })
        limitAdd(m.sender)
    }
		break
	case 'dare':{
        if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
		const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "🦄??" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
		const der = dare[Math.floor(Math.random() * dare.length)]
		tod = await getBuffer('https://telegra.ph/file/11b2894177a472a5a5950.jpg')//(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
		client.sendMessage(from, {image:tod, caption: '*DARE*\n\n'+ der}, {quoted: m })
        limitAdd(m.sender)
    }
		break
 case 'tinyurl':case 'shortlink':{
    if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
		if (args.length < 1) return m.reply('Urlnya mana gan?')
		m.reply(mess.wait)
		try {
			ini_link = text
			anu = await axios.get(`https://tinyurl.com/api-create.php?url=${ini_link}`)
			m.reply(`${anu.data}`)
			} catch (e) {
			emror = String(e)
			m.reply(`${e}`)
			}
            limitAdd(m.sender)
		}
		break
            case 'join': {
                if (!isCreator) return m.reply(regane) //m.reply(`Mau invite bot ini? ketik: ${prefix}sewa / ${prefix}freejoin`)
                if (!text) return m.reply('Masukkan Link Group!')
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return m.reply('Link Invalid!')
                // m.reply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await client.groupAcceptInvite(result).then((res) => m.reply('Sukses join')).catch((err) => m.reply('Full kak'))
            }
            break
            case 'freejoin': case 'freeinvite': case 'masuk': {
                if (!isOwner) return m.reply(`Fitur ini telah dinonaktifkan, silahkan ketik ${prefix}sewabot jika ingin memasukan bot ini di group Anda!`)
                /*if (ban.includes(m.sender)) return m.reply(mess.only.banned)
                if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                if (!text) return m.reply('Masukkan Link Group!')
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return m.reply('Link Invalid!')
                const freeinv = JSON.parse(fs.readFileSync(`./database/pengguna/invitebot.json`))
                if (freeinv.includes(m.sender)) return m.reply(`Anda sudah memakai kuota invite bot 1 nomor 1 group!\nJika tertarik ingin bot join lagi silahkan menyewa bot ini dengan cara ketik: ${prefix}sewabot`)
                freeinv.push(m.sender)
				fs.writeFileSync(`./database/pengguna/invitebot.json`, JSON.stringify(freeinv))
                m.reply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await client.groupAcceptInvite(result).then((res) => {
                wakse =  '12hours'
                console.log(res)
                _sewa.addSewa(res, wakse, sewa)
                captsewa = `Terima kasih telah invite ${namabot}\nBot otomatis out dalam ${ms(toMs(wakse)).days} Hari, ${ms(toMs(wakse)).hours} Jam, ${ms(toMs(wakse)).minutes} Menit, ${ms(toMs(wakse)).seconds} detik`
                sleep(2000)
                m.reply('Sukses join')
                m.reply(captsewa)
                client.sendMessage(res, { text : `Terima kasih telah invite ${namabot}, silahkan ketik ${prefix}menu untuk menampilkan menu bot ini!\nBot otomatis out dalam ${ms(toMs(wakse)).days} Hari, ${ms(toMs(wakse)).hours} Jam, ${ms(toMs(wakse)).minutes} Menit, ${ms(toMs(wakse)).seconds} detik`})
                })*/
            }
            break
            case 'leave': {
                if (!isCreator) return m.reply(mess.only.ownerB)
                m.reply('Oke boss')
                await client.groupLeave(m.chat)
            }
            break
            case 'addupdate': {
                if (!isCreator) return m.reply(mess.only.ownerB)
                if (!text) return m.reply(`Example : ${prefix + command} menu`)
                const apdate = (q, time) => {
                const objupdate = { id: q, time: time }
                updatefitur.push(objupdate)
                fs.writeFileSync('./database/json/update.json', JSON.stringify(updatefitur))
                }
                apdate(q, time)
                m.reply(`Success, new data: ${q}`)
            }
            break
            case 'changelog':{
                teks = `This is list of changelog ${namabot} :
                
`
            for (let i of updatefitur){
				teks += `═════════════════\n➸ *ID :* ${i.id}\n➸ *SINCE :* ${i.time}\n`
                }
                m.reply(teks)
            }
            break
            case 'listchangelog':{
                list = []
                for (let i of updatefitur){
                    list.push({title: i.id, rowId: i.id })
                }
                console.log(list)
                sections = [
                    {
                    title: `Silahkan pilih disini kak ${pushname}`,
                    rows: list
                    },
                ]
                
                const listMessage = {
                  text: `Hai kak ${pushname}, ${ucapanWaktu}\nSilahkan pilih disini kak`,
                  footer: namabot,
                  title: "",
                  buttonText: "CLICK HERE",
                  sections
                }
                
                client.sendMessage(m.chat, listMessage, { quoted: m })
            }
            break
            case 'setexif': {
               if (!isCreator) return m.reply(mess.only.ownerB)
               if (!text) return m.reply(`Example : ${prefix + command} packname|author`)
          global.packname = text.split("|")[0]
          global.author = text.split("|")[1]
          m.reply(`Exif berhasil diubah menjadi\n\nPackname : ${global.packname}\nAuthor : ${global.author}`)
            }
            break
	case 'kick': {
        if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
		if (!m.isGroup) return m.reply(mess.only.group)
        if (!isBotAdmins) return m.reply(mess.only.Badmin)
        if (!isAdmins && !isOwner && !m.key.fromMe) return m.reply(mess.only.admin)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		client.sendTextWithMentions(m.chat, `Perintah diterima, mengeluarkan @${users.split('@')[0]}`)
        await sleep(1000)
        await client.groupParticipantsUpdate(m.chat, [users], 'remove')
	}
	break
	case 'add': {
        if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
		if (!m.isGroup) return m.reply(mess.only.group)
                if (!isBotAdmins) return m.reply(mess.only.Badmin)
                if (!isAdmins && !isOwner && !m.key.fromMe) return m.reply(mess.only.admin)
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await client.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(`Sukses invite ${users.split('@')[0]}`)).catch((err) => m.reply('Kemungkinan di private'))
	}
	break
	case 'promote': {
        if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
		if (!m.isGroup) return m.reply(mess.only.group)
                if (!isBotAdmins) return m.reply(mess.only.Badmin)
                if (!isAdmins && !isOwner && !m.key.fromMe) return m.reply(mess.only.admin)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await client.groupParticipantsUpdate(m.chat, [users], 'promote')
        client.sendTextWithMentions(m.chat, `Perintah diterima, anda naik jadi admin @${users.split('@')[0]}`)
	}
	break
	case 'demote': {
        if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
		if (!m.isGroup) return m.reply(mess.only.group)
                if (!isBotAdmins) return m.reply(mess.only.Badmin)
                if (!isAdmins && !isOwner && !m.key.fromMe) return m.reply(mess.only.admin)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await client.groupParticipantsUpdate(m.chat, [users], 'demote')
        client.sendTextWithMentions(m.chat, `Perintah diterima, menurunkan @${users.split('@')[0]} menjadi member`)
	}
	break
        case 'block': {
		if (!isCreator) return m.reply(mess.only.ownerB)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await client.updateBlockStatus(users, 'block')
        client.sendTextWithMentions(m.chat, `Sukses block @${users.split('@')[0]}`)
	}
	break
        case 'unblock': {
		if (!isCreator) return m.reply(mess.only.ownerB)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await client.updateBlockStatus(users, 'unblock')
        client.sendTextWithMentions(m.chat, `Sukses unblock @${users.split('@')[0]}`)
	}
	break
	    case 'setname': case 'setsubject': {
            if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                if (!m.isGroup) return m.reply(mess.only.group)
                if (!isBotAdmins) return m.reply(mess.only.Badmin)
                if (!isAdmins && !isOwner && !m.key.fromMe) return m.reply(mess.only.admin)
                if (!text) return m.reply('Text ?')
                await client.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setdesc': case 'setdesk': {
            if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                if (!m.isGroup) return m.reply(mess.only.group)
                if (!isBotAdmins) return m.reply(mess.only.Badmin)
                if (!isAdmins && !isOwner && !m.key.fromMe) return m.reply(mess.only.admin)
                if (!text) return m.reply('Text ?')
                await client.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setppbot': {
                if (!isCreator) return m.reply(mess.only.ownerB)
                if (!quoted) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
                if (!/image/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
                if (/webp/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
                let media = await client.downloadAndSaveMediaMessage(quoted)
                await client.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
           case 'setppgroup': case 'setppgrup': case 'setppgc': {
            if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                if (!m.isGroup) return m.reply(mess.only.group)
                if (!isAdmins && !isOwner && !m.key.fromMe) return m.reply(mess.only.admin)
                if (!quoted) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
                if (!/image/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
                if (/webp/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
                let media = await client.downloadAndSaveMediaMessage(quoted)
                await client.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
            case 't': case 'tagall': {
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                if (!m.isGroup) return m.reply(mess.only.group)
                // if (!isBotAdmins) return m.reply(mess.only.Badmin)
                if (!isAdmins && !isOwner && !m.key.fromMe) return m.reply(mess.only.admin)
let teks = `══✪〘 *👥 Tag All* 〙✪══
 
Pesan : ${q ? q : ''}\n\n`
                for (let mem of participants) {
                teks += `» @${mem.id.split('@')[0]}\n`
                }
                client.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break
            case 'h': case 'hidetag': {
                    if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
            if (!m.isGroup) return m.reply(mess.only.group)
            // if (!isBotAdmins) return m.reply(mess.only.Badmin)
            if (!isAdmins && !isOwner && !m.key.fromMe) return m.reply(mess.only.admin)
            client.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)})
            }
            break
	    case 'style': case 'styletext': {
            if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
	        if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
		db.users[m.sender].limit -= 1 // -1 limit
		let { styletext } = require('./lib/scraper')
		if (!text) return m.reply('Masukkan Query text!')
                let anu = await styletext(text)
                let teks = `Srtle Text From ${text}\n\n`
                for (let i of anu) {
                    teks += `*${i.name}* : ${i.result}\n\n`
                }
                m.reply(teks)
                limitAdd(m.sender)
	    }
	    break
               case 'vote': {
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
            if (!m.isGroup) return m.reply(mess.only.group)
            if (m.chat in vote) return m.reply(`_Masih ada vote di chat ini!_\n\n*${prefix}hapusvote* - untuk menghapus vote`)
            if (!text) return m.reply(`Masukkan Alasan Melakukan Vote, Example: *${prefix + command} Owner Ganteng*`)
            m.reply(`Vote dimulai!\n\n*${prefix}upvote* - untuk ya\n*${prefix}devote* - untuk tidak\n*${prefix}cekvote* - untuk mengecek vote\n*${prefix}hapusvote* - untuk menghapus vote`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
│
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
let buttonsVote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
]

            let buttonMessageVote = {
                text: teks_vote,
                footer: '',
                buttons: buttonsVote,
                headerType: 1
            }
            client.sendMessage(m.chat, buttonMessageVote)
            limitAdd(m.sender)
	    }
            break
               case 'upvote': {
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
            if (!m.isGroup) return m.reply(mess.only.group)
            if (!(m.chat in vote)) return m.reply(`_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`)
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) return m.reply('Kamu Sudah Vote')
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
            let buttonsUpvote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageUpvote = {
                text: teks_vote,
                footer: '',
                buttons: buttonsUpvote,
                headerType: 1,
                mentions: menvote
             }
            client.sendMessage(m.chat, buttonMessageUpvote)
	    }
             break
                case 'devote': {
                    if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
            if (!m.isGroup) return m.reply(mess.only.group)
            if (!(m.chat in vote)) return m.reply(`_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`)
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) return m.reply('Kamu Sudah Vote')
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
            let buttonsDevote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageDevote = {
                text: teks_vote,
                footer: '',
                buttons: buttonsDevote,
                headerType: 1,
                mentions: menvote
            }
            client.sendMessage(m.chat, buttonMessageDevote)
	}
            break
                 
case 'cekvote':
    if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
if (!m.isGroup) return m.reply(mess.only.group)
if (!(m.chat in vote)) return m.reply(`_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`)
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote


©${client.user.id}
`
client.sendTextWithMentions(m.chat, teks_vote, m)
break
		case 'deletevote': case'delvote': case 'hapusvote': {
            if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
            if (!m.isGroup) return m.reply(mess.only.group)
            if (!(m.chat in vote)) return m.reply(`_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`)
            delete vote[m.chat]
            m.reply('Berhasil Menghapus Sesi Vote Di Grup Ini')
	    }
            break
               case 'group': case 'grup': case 'gc':{
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                if (!m.isGroup) return m.reply(mess.only.group)
                if (!isBotAdmins) return m.reply(mess.only.Badmin)
                if (!isAdmins && !isOwner && !m.key.fromMe) return m.reply(mess.only.admin)
                if (args[0] === 'close'){
                    await client.groupSettingUpdate(m.chat, 'announcement')//.then((res) => m.reply(`Sukses Menutup Group`)).catch((err) => m.reply(jsonformat(err)))
                    client.sendTextWithMentions(m.chat, `Group telah ditutup oleh admin @${m.sender.split('@')[0]}\nSekarang hanya admin yg dapat mengirimkan pesan`)
                } else if (args[0] === 'open'){
                    await client.groupSettingUpdate(m.chat, 'not_announcement')//.then((res) => m.reply(`Sukses Membuka Group`)).catch((err) => m.reply(jsonformat(err)))
                    client.sendTextWithMentions(m.chat, `Group telah dibuka oleh admin @${m.sender.split('@')[0]}\nSekarang semua member dapat mengirimkan pesan`)
                } else {
                let buttons = [
                        { buttonId: 'group open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'group close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await client.sendButtonText(m.chat, buttons, `Mode Group`, '', m)

             }
            }
            break
            case 'welcome':{
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                if (!m.isGroup) return m.reply(mess.only.group)
                if (!isBotAdmins) return m.reply(mess.only.Badmin)
                if (!isAdmins && !isOwner && !m.key.fromMe) return m.reply(mess.only.admin)
					const nganusetnyages = _setWelcome.checkWelcome(from ,setwelc)
                    if (nganusetnyages === true) return m.reply(`Set welcome digroup ini sudah ada. ketik: ${prefix}delsetwelcome untk hapus welcome`)
					if (args[0] === 'on') {
					if (isWelkom) return m.reply('Fitur welcome sudah aktif sebelumnya')
					welkom.push(from)
					fs.writeFileSync('./database/bot/welkom.json', JSON.stringify(welkom))
					m.reply('Sukses mengaktifkan fitur welcome di group ini')
					} else if (args[0] === 'off') {
					if (!isWelkom) return m.reply(`Fitur ${command} sudah nonaktif sebelumnya`)
					let offwelcome = welkom.indexOf(from)
		            welkom.splice(offwelcome, 1)
					fs.writeFileSync('./database/bot/welkom.json', JSON.stringify(welkom))
					m.reply('Sukses menonaktifkan fitur welcome di group ini')
                } else {
                    let buttons = [
                               { buttonId: `${prefix + command} on`, buttonText: { displayText: 'Welcome On' }, type: 1 },
                               { buttonId: `${prefix + command} off`, buttonText: { displayText: 'Welcome Off' }, type: 1 }
                           ]
                           await client.sendButtonText(m.chat, buttons, `Silahkan pilih salah satu button dibawah ini`, '', m)
       
                   }
                   }
					break	
                case 'setwelcome': {
                    if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                    if (!m.isGroup) return m.reply(mess.only.group)
                    if (!isBotAdmins) return m.reply(mess.only.Badmin)
                    if (!isAdmins && !isOwner && !m.key.fromMe) return m.reply(mess.only.admin)
					if (welkom.includes(from)) return m.reply(`Maaf kak, untuk ${prefix + command} hanya bisa diaktifkan jika command ${prefix}welcome group ini non aktif!\nUntuk menonaktifkan silahkan ketik ${prefix}welcome off`)
					const nganusetnya = _setWelcome.checkWelcome(from ,setwelc)
                    if (nganusetnya === true) return m.reply(`Maaf kak, custom welcome group ini sudah ada\nSilahkan hapus dulu dengan mengetik ${prefix}delsetwelcome`)
					if (args.length === 0) return m.reply(`Example: ${prefix + command} *WELCOME TO GROUP PT.PENCARI CINTA SEJATI*

Silahkan intro dulu
Nama:
Usia:
Gender:
Askot:
Semoga betah sayang:)`)
					_setWelcome.setwel(from, q, setwelc)
                    try {
                        ppgroup = await client.profilePictureUrl(from, 'image')
                    } catch {
                        ppgroup = 'https://telegra.ph/file/fb8f359dd61f8b271b8e2.jpg'
                    }
					client.sendMessage(from, { image: { url: ppgroup }, caption: `Sukses set welcome menjadi:\n\n${q}`})
                }
                    break
                case 'delsetwelcome':{
                    if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                    if (!m.isGroup) return m.reply(mess.only.group)
                    if (!isBotAdmins) return m.reply(mess.only.Badmin)
                    if (!isAdmins && !isOwner && !m.key.fromMe) return m.reply(mess.only.admin)
					const nganusetnya_ = _setWelcome.checkWelcome(from ,setwelc)
                    if (nganusetnya_ === false) return m.reply(`Maaf kak, group ini tidak ada custom welcome\nSilahkan ketik ${prefix}setwelcome untuk set welcome`)
					setwelc.splice(_setWelcome.getSetPosition(from, setwelc), 1)
					fs.writeFileSync('./database/kelompok/setwel.json', JSON.stringify(setwelc))
					m.reply('Sukses menghapus set welcome group ini!')
                }
					break	
            case 'mulaiabsen':{
                    if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
                    if (ban.includes(m.sender)) return m.reply(mess.only.banned)
                    if (isLimit(m.sender)) return m.reply(mess.limituserbot)
			    	if (!m.isGroup) return m.reply(mess.only.group)
                    if (!isAdmins && !isOwner && !m.key.fromMe) return m.reply(mess.only.admin)
					if (isAbsen) return m.reply('Absen sedang berjalan')
					mabsen.push(from)
					fs.writeFileSync('./database/kelompok/absen.json', JSON.stringify(mabsen))
					var objAbsen = []
			    	fs.writeFileSync(`./temp/${from}.json`, JSON.stringify(objAbsen, null, '\t'))
					// m.reply(`Sukses memulai absen di group ini\nKetik: ${prefix}absen untuk absen dan ${prefix}listabsen atau ${prefix}dellabsen untuk melihat atau menghapus daftar yang sudah absen.`)
                    let buttons = [{ buttonId: '.absen', buttonText: { displayText: 'Absen' }, type: 1 }]
                    await client.sendButtonText(m.chat, buttons, 'Sukses memulai absen di group ini', '', m)
                    }
					break
			case 'absen': {		
                    if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
                    if (ban.includes(m.sender)) return m.reply(mess.only.banned)
                    if (isLimit(m.sender)) return m.reply(mess.limituserbot)
					if (!m.isGroup) return m.reply(mess.only.group)
					if (!isAbsen) return m.reply(`Tidak ada absen berlangsung!\nKetik: ${prefix}mulaiabsen untuk memulai absen`)
					const absencok = JSON.parse(fs.readFileSync(`./temp/${from}.json`))
					const wesAbsen = absencok.includes(m.sender)
					if (wesAbsen) return m.reply('Kamu sudah absen!')  	
					absencok.push(m.sender)
					fs.writeFileSync(`./temp/${from}.json`, JSON.stringify(absencok))
                    // m.reply('Terima kasih sudah absen!')
                    teks = 'Terima kasih Anda telah absen.\nDaftar absen :\n'
			     	for (let absenb of absencok) {
			    	teks += `~> @${absenb.split('@')[0]}\n`
			      	}
                    let buttons = [{ buttonId: '.absen', buttonText: { displayText: 'Absen' }, type: 1 }]
                    await client.sendButtonText(m.chat, buttons, teks, '', m, {mentions: absencok})
                    }
			     	break	
			case 'listabsen':{
                    if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
                    if (ban.includes(m.sender)) return m.reply(mess.only.banned)
                    if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                    if (!m.isGroup) return m.reply(mess.only.group)
                    if (!isAdmins && !isOwner && !m.key.fromMe) return m.reply(mess.only.admin)
					if (!isAbsen) return m.reply('Tidak ada absen berlangsung!')
					const absencokk = JSON.parse(fs.readFileSync(`./temp/${from}.json`)) 
			    	teks = 'Daftar absen :\n'
			     	for (let absenb of absencokk) {
			    	teks += `~> @${absenb.split('@')[0]}\n`
			      	}
			    	teks += `Total : ${absencokk.length}`
			    	client.sendText(m.chat, teks, m, { mentions: absencokk })
                    }
                    break	
			case 'dellabsen': case'deleteabsen': case 'hapusabsen': {
                    if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
                    if (ban.includes(m.sender)) return m.reply(mess.only.banned)
                    if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                    if (!m.isGroup) return m.reply(mess.only.group)
                    if (!isAdmins && !isOwner && !m.key.fromMe) return m.reply(mess.only.admin)
					if (!isAbsen) return m.reply(`Tidak ada sesi absen di group ini\n${prefix}mulaiabsen untuk memulai absen`)
				    fs.unlinkSync(`./temp/${from}.json`)
					let offabsenGC = mabsen.indexOf(from)
		            mabsen.splice(offabsenGC, 1)
					fs.writeFileSync('./database/kelompok/absen.json', JSON.stringify(mabsen))
					m.reply('Sukses menghapus sesi absen')
                    }
					break
            case 'store on': case 'storeon':{
                    if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
                    if (ban.includes(m.sender)) return m.reply(mess.only.banned)
                    if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                    if (!m.isGroup) return m.reply(mess.only.group)
                    if (!isBotAdmins) return m.reply(mess.only.Badmin)
                    if (!isAdmins && !isOwner && !m.key.fromMe) return m.reply(mess.only.admin)
                    if (isStore) return m.reply('Fitur store sudah aktif di grup ini.\nSilahkan #addlist untuk add data store')
                    var objStore = []
			    	fs.writeFileSync(`./store/${from}.json`, JSON.stringify(objStore, null, '\t'))
                    commandsDbStore.push(from)
                    fs.writeFileSync('./database/json/commandStore.json', JSON.stringify(commandsDbStore))
                    m.reply(`Sukses, silahkan ketik #addlist untuk add data store grup ini!`)
                    }
                    break
                case 'addlist':case 'setlist':case 'addstore':{
                    if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
                    if (ban.includes(m.sender)) return m.reply(mess.only.banned)
                    if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                    if (!m.isGroup) return m.reply(mess.only.group)
                    if (!isBotAdmins) return m.reply(mess.only.Badmin)
                    if (!isAdmins && !isOwner && !m.key.fromMe) return m.reply(mess.only.admin)
                    if (!isStore) return m.reply('Fitur store belum aktif, silahkan ketik: #storeon untuk mengaktifkan fitur store di grup ini')
                    if (args.length < 1) return m.reply(`Penggunaan ${prefix + command} followers|hai kak, berikut list harga followers yang kami jual, more info hub admin grup ya kak`)
                    try{
                    let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                    let media = await client.downloadAndSaveMediaMessage(quoted)
                    if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    var _dataStore = JSON.parse(fs.readFileSync(`./store/${from}.json`))
					var ini_nama = args.join(" ").split("|")
				    var hai = ini_nama[0].trim()
				    var balasan = ini_nama[1].trim()
                    let obj = {pesan: hai, balasan: balasan, image: anu}
                    _dataStore.push(obj)
                    fs.writeFileSync(`./store/${from}.json`, JSON.stringify(_dataStore))
					m.reply(`Sukses menambahkan list ${hai}`)
                    fs.unlinkSync(media)
                    } else {
                    var _dataStore = JSON.parse(fs.readFileSync(`./store/${from}.json`))
					var ini_nama = args.join(" ").split("|")
				    var hai = ini_nama[0].trim()
				    var balasan = ini_nama[1].trim()
                    let obj = {pesan: hai, balasan: balasan}
                    _dataStore.push(obj)
                    fs.writeFileSync(`./store/${from}.json`, JSON.stringify(_dataStore))
					m.reply(`Sukses menambahkan list ${hai}`)
                    }
					} catch (e) {
                    console.log(e)
					m.reply(`Format salah!\nExample: ${prefix + command} followers|hai kak yyyyy\n\n*Note: aktifkan dulu storenya dengan mengetik: #stoeon*`)
					}
                    }
						break
            case 'updatelist':{
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
                if (ban.includes(m.sender)) return m.reply(mess.only.banned)
                if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                if (!m.isGroup) return m.reply(mess.only.group)
                if (!isAdmins && !isOwner && !m.key.fromMe) return m.reply(mess.only.admin)
                if (!isStore) return m.reply('Group ini tidak memiliki data store')
                if (args.length < 1) return m.reply(`Penggunaan ${prefix + command} baim|hafidah love`)
                const _dataStorenya2 = JSON.parse(fs.readFileSync(`./store/${from}.json`))
                var ini_nama = args.join(" ").split("|")
				    var hai = ini_nama[0].trim()
				    var balasan = ini_nama[1].trim()
                if (!checkDataStore(hai, _dataStorenya2)) return m.reply(`Ga ada di database`)
                _dataStorenya2.splice(getStorePosition(hai, _dataStorenya2), 1)
                fs.writeFileSync(`./store/${from}.json`, JSON.stringify(_dataStorenya2))
                let obj = {pesan: hai, balasan: balasan}
                _dataStorenya2.push(obj)
                fs.writeFileSync(`./store/${from}.json`, JSON.stringify(_dataStorenya2))
                m.reply(`sukses ganti jadi ${hai} dengan respon ${balasan}`)
            }
            break
			case 'dellist':{
                    if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
                    if (ban.includes(m.sender)) return m.reply(mess.only.banned)
                    if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                    if (!m.isGroup) return m.reply(mess.only.group)
                    if (!isAdmins && !isOwner && !m.key.fromMe) return m.reply(mess.only.admin)
                    if (!isStore) return m.reply('Group ini tidak memiliki data store')
					if (args.length < 1) return m.reply(`Penggunaan ${prefix + command} followers`)
                    const _dataStore2 = JSON.parse(fs.readFileSync(`./store/${from}.json`))
                    if (!checkDataStore(text, _dataStore2)) return m.reply(`Ga ada di database`)
                    _dataStore2.splice(getStorePosition(text, _dataStore2), 1)
			        fs.writeFileSync(`./store/${from}.json`, JSON.stringify(_dataStore2))
					m.reply(`Sukses menghapus list ${q}`)
                    }
					break
			case 'liststore':{
                    if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
                    if (ban.includes(m.sender)) return m.reply(mess.only.banned)
                    if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                    if (!m.isGroup) return m.reply(mess.only.group)
                    if (!isStore) return m.reply('Group ini tidak memiliki data store')
                    const _dataStore2_ = JSON.parse(fs.readFileSync(`./store/${from}.json`))
                    if (!_dataStore2_  === null) return m.reply('grup ini tidak memiliki list')
                          list = []
                    for (let i of _dataStore2_){
                    list.push({title: i.pesan, rowId: i.balasan })
                    }
                    console.log(list)
                    sections = [
                    {
                    title: `Silahkan pilih disini kak ${pushname}`,
                    rows: list
                    },
                    ]
                
                    const listMessage = {
                    text: `Hai kak ${pushname}, ${ucapanWaktu}\nSilahkan pilih disini kak`,
                    footer: namabot,
                    title: "",
                    buttonText: "CLICK HERE",
                    sections
                    }
                    client.sendMessage(m.chat, listMessage, { quoted: m })
                    }
			        break
            case 'tambah':{
                const Math_js = require('mathjs')
				mtk = `${args[0]}+${args[1]}`
				if (typeof Math_js.evaluate(mtk) !== "number") {
				m.reply(`salah! example ${prefix + command} 1 2`)
				} else {
				m.reply(`*「 MATH 」*\n\n*Kalkulator*\n${mtk} = ${Math_js.evaluate(mtk)}`)
				}
            }
            break
            case 'kurang':{
                const Math_js = require('mathjs')
				mtk = `${args[0]}-${args[1]}`
				if (typeof Math_js.evaluate(mtk) !== "number") {
				m.reply(`salah! example ${prefix + command} 1 2`)
				} else {
				m.reply(`*「 MATH 」*\n\n*Kalkulator*\n${mtk} = ${Math_js.evaluate(mtk)}`)
				}
            }
            break
            case 'kali':{
                const Math_js = require('mathjs')
				mtk = `${args[0]}*${args[1]}`
				if (typeof Math_js.evaluate(mtk) !== "number") {
				m.reply(`salah! example ${prefix + command} 1 2`)
				} else {
				m.reply(`*「 MATH 」*\n\n*Kalkulator*\n${mtk} = ${Math_js.evaluate(mtk)}`)
				}
            }
            break
            case 'bagi':{
                const Math_js = require('mathjs')
				mtk = `${args[0]}/${args[1]}`
				if (typeof Math_js.evaluate(mtk) !== "number") {
				m.reply(`salah! example ${prefix + command} 1 2`)
				} else {
				m.reply(`*「 MATH 」*\n\n*Kalkulator*\n${mtk} = ${Math_js.evaluate(mtk)}`)
				}
            }
            break
            case 'editinfo': {
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                if (!m.isGroup) return m.reply(mess.only.group)
                if (!isBotAdmins) return m.reply(mess.only.Badmin)
                if (!isAdmins && !isOwner && !m.key.fromMe) return m.reply(mess.only.admin)
             if (args[0] === 'open'){
                await client.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`Sukses Membuka Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
             } else if (args[0] === 'close'){
                await client.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`Sukses Menutup Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
             } else {
             let buttons = [
                        { buttonId: 'editinfo open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'editinfo close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await client.sendButtonText(m.chat, buttons, `Mode Edit Info`, '', m)
                    // m.reply(`Ketik: ${prefix + command} open \natau ${prefix + command} close`)

            }
            }
            break
            case 'simi': {
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                if (!m.isGroup) return m.reply(mess.only.group)
                if (!isBotAdmins) return m.reply(mess.only.Badmin)
                if (!isOwner && !m.key.fromMe) return m.reply(mess.only.admin)
                if (args[0] === "on") {
					if (isSimi) return m.reply('*Fitur simi sudah aktif sebelumnya*')
					simi.push(from)
					fs.writeFileSync('./database/json/simi.json', JSON.stringify(simi))
					m.reply('Sukses mengaktifkan fitur simi di group ini')
                } else if (args[0] === "off") {
                    if (!isSimi) return m.reply(`Fitur ${command} sudah nonaktif sebelumnya`)
					let offsimi = simi.indexOf(from)
		            simi.splice(offsimi, 1)
					fs.writeFileSync('./database/json/simi.json', JSON.stringify(simi))
					m.reply('Sukses menonaktifkan fitur simi di group ini')
					} else {
                        let buttons = [
                            { buttonId: 'simi on', buttonText: { displayText: 'On' }, type: 1 },
                            { buttonId: 'simi off', buttonText: { displayText: 'Off' }, type: 1 }
                        ]
                        await client.sendButtonText(m.chat, buttons, `Mode Simi`, '', m)
                        // m.reply(`Ketik: ${prefix + command} on \natau ${prefix + command} off`)
					}
                }
					break
                    case 'antivirtext': case 'antivirtek': case 'antivirtex': {
                        if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                        if (!m.isGroup) return m.reply(mess.only.group)
                        if (!isBotAdmins) return m.reply(mess.only.Badmin)
                        if (!isAdmins && !isOwner && !m.key.fromMe) return m.reply(mess.only.admin)
                        if (args[0] === "on") {
                            if (isAntiVirtex) return m.reply('*Fitur antivirtext sudah aktif sebelumnya*')
                            antivirtex.push(from)
                            fs.writeFileSync('./database/kelompok/antivirtex.json', JSON.stringify(antivirtex))
                            m.reply('Sukses mengaktifkan fitur antivirtext di group ini')
                        } else if (args[0] === "off") {
                            if (!isAntiVirtex) return m.reply(`Fitur ${command} sudah nonaktif sebelumnya`)
                            let offantivirtext = antivirtex.indexOf(from)
                            antivirtex.splice(offantivirtext, 1)
                            fs.writeFileSync('./database/kelompok/antivirtex.json', JSON.stringify(antivirtex))
                            m.reply('Sukses menonaktifkan fitur antivirtext di group ini')
                            } else {
                                let buttons = [
                                    { buttonId: 'antivirtext on', buttonText: { displayText: 'On' }, type: 1 },
                                    { buttonId: 'antivirtext off', buttonText: { displayText: 'Off' }, type: 1 }
                                ]
                                await client.sendButtonText(m.chat, buttons, `Mode Antivirtext`, '', m)
                                // m.reply(`Ketik: ${prefix + command} on \natau ${prefix + command} off`)
                            }
                        }
                            break
            case 'antilink': {
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                if (!m.isGroup) return m.reply(mess.only.group)
                if (!isBotAdmins) return m.reply(mess.only.Badmin)
                if (!isAdmins && !isOwner && !m.key.fromMe) return m.reply(mess.only.admin)
                if (args[0] === "on") {
                if (db.chats[m.chat].antilink) return m.reply(`Sudah Aktif Sebelumnya`)
                db.chats[m.chat].antilink = true
                m.reply(`Antilink Aktif !`)
                } else if (args[0] === "off") {
                if (!db.chats[m.chat].antilink) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
                db.chats[m.chat].antilink = false
                m.reply(`Antilink Tidak Aktif !`)
                } else {
                 let buttons = [
                        { buttonId: 'antilink on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'antilink off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await client.sendButtonText(m.chat, buttons, `Mode Antilink`, '', m)
                    // m.reply(`Ketik: ${prefix + command} on \natau ${prefix + command} off`)
                }
             }
             break
             case 'mute': {
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                if (!m.isGroup) return m.reply(mess.only.group)
                if (!isBotAdmins) return m.reply(mess.only.Badmin)
                if (!isAdmins && !isOwner && !m.key.fromMe) return m.reply(mess.only.admin)
                if (args[0] === "on") {
                if (db.chats[m.chat].mute) return m.reply(`Sudah Aktif Sebelumnya`)
                db.chats[m.chat].mute = true
                m.reply(`${''} telah di mute di group ini !`)
                } else if (args[0] === "off") {
                if (!db.chats[m.chat].mute) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
                db.chats[m.chat].mute = false
                m.reply(`${''} telah di unmute di group ini !`)
                } else {
                 let buttons = [
                        { buttonId: 'mute on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'mute off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await client.sendButtonText(m.chat, buttons, `Mute Bot`, '', m)
                    // m.reply(`Ketik: ${prefix + command} on \natau ${prefix + command} off`)
                }
             }
             break
            case 'linkgroup': case 'linkgrup': case 'link grup': case 'linkgc': case 'link': {
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                if (!m.isGroup) return m.reply(mess.only.group)
                if (!isBotAdmins) return m.reply(mess.only.Badmin)
                let response = await client.groupInviteCode(m.chat)
                client.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
            }
            break
            case 'resetlink':case 'resetlinkgroup':{
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                if (!m.isGroup) return m.reply(mess.only.group)
                if (!isBotAdmins) return m.reply(mess.only.Badmin)
                if (!isAdmins && !isOwner && !m.key.fromMe) return m.reply(mess.only.admin)
					// json = ['action', 'inviteReset', m.chat]
					// client.query({json, expect200: true})
                    client.groupRevokeInvite(m.chat)
					await sleep(2000)
					m.reply('Sukses mereset link group!')
            }
					break
            case 'ephemeral': {
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                if (!m.isGroup) return m.reply(mess.only.group)
                if (!isBotAdmins) return m.reply(mess.only.Badmin)
                if (!isAdmins && !isOwner && !m.key.fromMe) return m.reply(mess.only.admin)
                if (!text) return m.reply('Masukkan value enable/disable')
                if (args[0] === 'enable') {
                    await client.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'disable') {
                    await client.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
            case 'delete': case 'del': case 'd':{
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                if (!m.isGroup) return m.reply(mess.only.group)
                if (!isAdmins && !isOwner && !m.key.fromMe) return m.reply(mess.only.admin)
                if (!m.quoted) return false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) return m.reply('Pesan tersebut bukan dikirim oleh bot!')
                client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case 'get': case 'fetch':{
               //if (!isCreator) return m.reply(mess.only.ownerB)
                Requests(`${args[0]}`).then(res => res.text())  
				.then(bu =>{
				m.reply(bu)
			    })   
            }
            break
            case 'bcgc': case 'bcgroup': {
                if (!isCreator) return m.reply(mess.only.ownerB)
                if (!text) return m.reply(`Text mana?`)
                let getGroups = await client.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
                for (let i of anu) {
                    await sleep(1500)
                    let btn = [{
                                quickReplyButton: {
                                    displayText: 'SEWA',
                                    id: 'sewa'
                                }  
                            }]
                      let txt = `*◪ BROADCAST*\n\n${text}`
                      console.log(i)
                   //   client.sendButtonText(i, btn, txt)
                   client.sendButtonText(i, [{ buttonId: 'sewa', buttonText: { displayText: 'ꜱᴇᴡᴀ' }, type: 1 }], `*◪ BROADCAST*\n\n${text}`)
            // client.sendMessage(i, {text: txt})        
            }
                m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
            }
            break
            case 'bc': case 'broadcast': case 'bcall': {
                if (!isCreator) return m.reply(mess.only.ownerB)
                if (!text) return m.reply(`Text mana?`)
                let anu = await store.chats.all().map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
		for (let yoi of anu) {
		    await sleep(1500)
		    let btn = [{
                                quickReplyButton: {
                                    displayText: 'SEWA',
                                    id: 'sewa'
                                }  
                            }]
                      let txt = `*◪ BROADCAST*\n\n${text}`
                      console.log(yoi)
                   //   client.sendButtonText(i, btn, txt)
                   client.sendButtonText(yoi, [{ buttonId: 'sewa', buttonText: { displayText: 'ꜱᴇᴡᴀ' }, type: 1 }], `*◪ BROADCAST*\n\n${text}`)
                // client.sendMessage(i, {text: txt})
            }
		m.reply('Sukses Broadcast')
            }
            break
            case 'resetlimit':{
			    	if (!isOwner) return m.reply(mess.only.ownerB)
			    	var obj = []
			    	fs.writeFileSync('./database/pengguna/limit.json', JSON.stringify(obj, null, '\t'))
			    	m.reply(`Limit berhasil direset`)
                    }
			    	break
            case 'infochat': case 'sider':{
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                if (!m.isGroup) return m.reply(mess.only.group)
                if (!isAdmins && !isOwner && !m.key.fromMe) return m.reply(mess.only.admin)
                if (!m.quoted) m.reply('Reply Pesan')
                let msg = await m.getQuotedObj()
                if (!m.quoted.isBaileys) return m.reply('Pesan tersebut bukan dikirim oleh bot!')
                let teks = ''
                for (let i of msg.userReceipt) {
                    let read = i.readTimestamp
                    let unread = i.receiptTimestamp
                    let waktu = read ? read : unread
                    teks += `@${i.userJid.split('@')[0]}\n`
                    teks += ` ┗━*Waktu :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} *Status :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
                }
                client.sendTextWithMentions(m.chat, teks, m)
            }
            break
            case 'q': case 'quoted': {
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
        if (!m.isGroup) return m.reply(mess.only.group)
		if (!m.quoted) return m.reply('Reply Pesannya!!')
		let wokwol = await client.serializeM(await m.getQuotedObj())
		if (!wokwol.quoted) return m.reply('Pesan Yang anda reply tidak mengandung reply')
		await wokwol.quoted.copyNForward(m.chat, true)
        limitAdd(m.sender)
            }
	    break
        case 'stickerwa':case 'stikerwa':{
            if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                if (!isPremium) return m.reply(mess.only.premium)
                if (args.length == 0) return m.reply(`Example: ${prefix + command} Koceng Imot`)
                m.reply(mess.wait)
                query = args.join(" ")
                get_result = await fetchJson(`http://api.lolhuman.xyz/api/stickerwa?apikey=${LolApi}&query=${query}`)
                get_result = get_result.result[0].stickers
                for (var x of get_result) {
                    client.sendImageAsSticker(m.chat, x, m, { packname: global.packname, author: global.author })
                }
             }
                break
    case 'smoji':{
        if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
		if (args.length == 0) return m.reply(`Example: ${prefix + command} 😭`)
		m.reply(mess.wait)
		emojii = args[0]
		try {
		emojii = encodeURI(emojii[0])
		} catch {
		emojii = encodeURI(emojii)
		}
		ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/smoji/${emojii}?apikey=${LolApi}`)
		client.sendImageAsSticker(m.chat, ini_buffer, m, { packname: global.packname, author: global.author })
        limitAdd(m.sender)
    }
		break
	case 'estiker':
	case 'esticker':
	case 'emojistiker':
	case 'emojisticker':
        if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
		if (!isPremium) return m.reply(mess.only.premium)
		if (args.length == 0) return m.reply(`Example: ${prefix + command} 😭`)
		m.reply(mess.wait)
		qes = args.join(" ")
		emoji.get(`${qes}`).then(emoji => {
		teks = `${emoji.images[4].url}`
        sendStickerFromUrl(m.chat, teks)
		console.log(teks)
		})
		break
    case 'ttp':case 'ttp2':case 'ttp3':case 'ttp4':case 'ttp5':case 'ttp6':case 'attp':case 'attp2':{
        if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
        if (args.length == 0) return m.reply(`Example: ${prefix + command} IXB BOT`)
		m.reply(mess.wait)
        ini_txt = args.join(" ")
        await client.sendMessage(m.chat, { sticker: { url: `http://api.lolhuman.xyz/api/${command}?apikey=${LolApi}&text=${encodeURIComponent(ini_txt)}`} }, { quoted: floc })
        limitAdd(m.sender)
    }
        break
    case 'attp3':{
        if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
        if (args.length == 0) return m.reply(`Example: ${prefix + command} IXB BOT`)
		m.reply(mess.wait)
        ini_txt = args.join(" ")
        await client.sendMessage(m.chat, { sticker: { url: `https://api.xteam.xyz/attp?file&text=${encodeURIComponent(q)}`} }, { quoted: floc })
        limitAdd(m.sender)   
    }
        break
        case 'nulis':case 'tulis':{
            if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
			        if (args.length < 1) return m.reply('bot harus nulis apa kak??')
                    m.reply('Bot sedang menulis...')
					nulis = encodeURIComponent(q)
					res = await axios.get(`https://dt-04.herokuapp.com/nulis?text=${nulis}`)
					if (res.data.error) return m.reply(res.data.error)
					buff = Buffer.from(res.data.result.split(',')[1], 'base64')
                    client.sendMessage(m.chat, {image: buff, caption: `Nih pemalas`}, {quoted:m})
					limitAdd(m.sender) 
                    }
					break  
				case 'nulis2':{
					if (!isPremium) return m.reply(mess.only.premium)
                    if (args.length < 1) return m.reply('Textnya mana kak?')
					m.reply('Bot sedang menulis...')
                    buff = await getBuffer(`http://api.lolhuman.xyz/api/nulis?apikey=${LolApi}&text=${q}`, {method: 'get'})
                    client.sendMessage(m.chat, {image: buff, caption: `Nih pemalas`}, {quoted:m})
                    }
                    break 
    case 'telestiker':case 'telesticker':{
        if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
		if (!isPremium) return m.reply(mess.only.premium)
		if (args.length == 0) return m.reply(`Example: ${prefix + command} https://t.me/addstickers/LINE_Menhera_chan_ENG`)
		m.reply(mess.wait)
		try{
        var { Telesticker } = require('./lib/stikerDownloader')
		anu = await Telesticker(args[0])
        console.log(anu)
		for (let i = 0; i < anu.length; i++) {
            await client.sendMessage(m.chat, { sticker: { url: anu[i].url} }, { quoted: m })
		}
	    } catch (err) {
			console.log(color('[ERROR]', 'red'), err)
			m.reply(mess.error.bug)
		}
    }
		break
        case 'lirik':{
            if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
			    if (args.length == 0) return m.reply(`Example: ${prefix + command} Melukis Senja`)
				const { lirikLaguu } = require('./lib/lirik')
			    try{
                m.reply(mess.wait)
                teks = args.join(" ")
                lirikLaguu(teks).then((res) => {
                let lirik = `${res[0].result}`
                m.reply(lirik)
                limitAdd(m.sender)
                })
				} catch (e) {
				console.log(`Error :`, color(e,'red'))
				m.reply(mess.error.bug)
				}
            }
                break
                case 'jarak':{
                    if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
		       if (args.length == 0) return m.reply(`Example: ${prefix + command} jakarta - yogyakarta`)
               try{
			   pauls = args.join(" ")
			   kota1 = pauls.split("-")[0].trim()
			   kota2 = pauls.split("-")[1].trim()
			   anu = await fetchJson(`http://api.lolhuman.xyz/api/jaraktempuh?apikey=${LolApi}&kota1=${kota1}&kota2=${kota2}`)
			   ini_txt = `Informasi Jarak dari ${kota1} ke ${kota2} :\n\n`
			   ini_txt += `Asal : ${anu.result.from.name}\n`
			   ini_txt += `Garis Lintang : ${anu.result.from.latitude}\n`
			   ini_txt += `Garis Bujur : ${anu.result.from.longitude}\n\n`
			   ini_txt += `Tujuan : ${anu.result.to.name}\n`
			   ini_txt += `Garis Lintang : ${anu.result.to.latitude}\n`
			   ini_txt += `Garis Bujur : ${anu.result.to.longitude}\n\n`
			   ini_txt += `Jarak Tempuh : ${anu.result.jarak}\n`
			   ini_txt += `Kereta Api : ${anu.result.kereta_api}\n`
			   ini_txt += `Pesawat : ${anu.result.pesawat}\n`
			   ini_txt += `Mobil : ${anu.result.mobil}\n`
			   ini_txt += `Motor : ${anu.result.motor}\n`
			   ini_txt += `Jalan Kaki : ${anu.result.jalan_kaki}`
			   m.reply(ini_txt)
			   limitAdd(m.sender) 
               } catch {
                   m.reply('error, mungkin input yang anda masukan salah')
               }
        }
			   break  
			case 'cekapikey':case 'cekapi':{
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                if (!q) return m.reply(`Example: ${prefix + command} apikey\nNote: hanya bisa cek apikey dari website lolhuman.xyz`)
				api = args.join(" ")
				anu = await fetchJson(`http://api.lolhuman.xyz/api/checkapikey?apikey=${api}`)
				ini_txt = `Username : ${anu.result.username}\n`
				ini_txt += `Apikey : ${api}\n`
				ini_txt += `Request : ${anu.result.requests}\n`
				ini_txt += `Today : ${anu.result.today}\n`
				ini_txt += `Account Type : ${anu.result.account_type}\n`
				ini_txt += `Expired : ${anu.result.expired}`
				m.reply(ini_txt)
				client.sendMessage(`${global.owner}@s.whatsapp.net`, {text: ini_txt}, {quoted:m})
        }
				break
	case 'lirik2':{
        if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
				if (args.length == 0) return m.reply(`Example: ${prefix + command} Melukis Senja`)
				try{
                m.reply(mess.wait)
				query = args.join(" ")
				get_result = await fetchJson(`http://api.lolhuman.xyz/api/lirik?apikey=${LolApi}&query=${query}`)
				m.reply(get_result.result)
                limitAdd(m.sender)
				} catch (e) {
				console.log(`Error :`, color(e,'red'))
				m.reply(mess.error.bug)
				}
            }
				break
   case 'liriklagu':{
    if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
	            if (!isPremium) return m.reply(mess.only.premium)
			    if (args.length == 0) return m.reply(`Example: ${prefix + command} Melukis Senja`)
				try{
                m.reply(mess.wait)
			    query = args.join(" ")
			    get_result = await fetchJson(`https://api.vhtear.com/liriklagu?query=${query}&apikey=${VthearApi}`)
			    m.reply(get_result.result.result)
			    } catch (e) {
				console.log(`Error :`, color(e,'red'))
				m.reply(mess.error.bug)
				}
            }
			    break
		   case 'chord':{
            if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
			    if (args.length == 0) return m.reply(`Example: ${prefix + command} Melukis senja`)
				try{
                m.reply(mess.wait)
			    query =  args.join(" ")
			    anu = await fetchJson(`http://api.lolhuman.xyz/api/chord?apikey=${LolApi}&query=${query}`)
			    ini_txt = `*Title :* ${anu.result.title}\n`
			    ini_txt += `*Created :* ${anu.result.created}\n`
			    ini_txt += `*Modified Username :* ${anu.result.modified.username}\n`
			    ini_txt += `*Modified First Name :* ${anu.result.modified.first_name}\n`
			    ini_txt += `*Modified Last Name :* ${anu.result.modified.last_name}\n`
			    ini_txt += `*Chord :*\n${anu.result.chord}`
			    m.reply(ini_txt)
                limitAdd(m.sender)
			    } catch (e) {
				console.log(`Error :`, color(e,'red'))
				m.reply(mess.error.bug)
				}
            }
			    break
	case 'chordlagu':{
        if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
			if (!isPremium) return m.reply(mess.only.premium)
			   if (args.length == 0) return m.reply(`Example: ${prefix + command} Melukis senja`)
			   try{
               m.reply(mess.wait)
			   query = args.join(" ")
			   anu = await fetchJson(`https://api.vhtear.com/chordguitar?query=${query}&apikey=${VthearApi}`)
			   ini_txt = `*Title :* ${query}\n`
			   ini_txt += `*Chord :* \n${anu.result.result}`
			   m.reply(ini_txt)
			   } catch (e) {
				console.log(`Error :`, color(e,'red'))
				m.reply(mess.error.bug)
				}
            }
			   break
		case 'resep':{
            if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
            if (args.length === 0) return m.reply(`Example: ${prefix + command} gudeg jogja`)
            m.reply(mess.wait)
				  anu = await fetchJson(`https://api.vhtear.com/resepmasakan?query=${text}&apikey=${VthearApi}`)
				  masak = `*Title:* ${anu.result.title}\n*Desc:* ${anu.result.desc}\n*Bahan:* ${anu.result.bahan}\n*Cara:* ${anu.result.cara}`
                  client.sendMedia(m.chat, anu.result.image,'',masak,m)
                  limitAdd(m.sender)
            }
				  break 
        case 'cekresi':{
            if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
	    	if (args.length == 0) return m.reply(`Example: ${prefix + command} JNT|JP8234909181`)
			ini_nama_kurir = args.join("").split("|")
			cek_resi_kurir = ini_nama_kurir[0].trim()
			cek_no_resi = ini_nama_kurir[1].trim()
            try {
				m.reply(mess.wait)
                anu = await fetchJson(`https://api.lolhuman.xyz/api/resi/${cek_resi_kurir}/${cek_no_resi}?apikey=${LolApi}`)
				resi_undefined = anu.result
				if (resi_undefined == 'error') return m.reply('Resi tidak ditemukan!')
			    resinya = `*No Resi :* ${anu.result.no_resi}
*Status :* ${anu.result.status}
*Dari :* ${anu.result.from}
*Ke :* ${anu.result.to}
=================
*Nama Pengirim :* ${anu.result.pengirim.name}
*Alamat Pengirim :* ${anu.result.pengirim.address}
=================
*Nama Penerima :* ${anu.result.penerima.name}
*Alamat Penerima :* ${anu.result.penerima.address}
=================
*Posisi Terakhir :* ${anu.result.current_position}
=================
*History :*\n\n`
                for (let i = 0; i < anu.result.history.length; i++) {
                resinya += `*Time :* ${anu.result.history[i].time}
*Posisi :* ${anu.result.history[i].position}
*Desc :* ${anu.result.history[i].desc}
=================\n`
            }
                m.reply(resinya)
                limitAdd(m.sender)
            }   catch (err){
                console.log(err)
            }
            }
			break 
	case 'cekongkir':{
        if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
	    	if (args.length == 0) return m.reply(`Example: ${prefix + command} JNE|Yogyakarta|Bekasi`)
			ini_nama_kurir = args.join("").split("|")
			cek_kurir = ini_nama_kurir[0].trim()
			cek_asal = ini_nama_kurir[1].trim()
			cek_tujuan = ini_nama_kurir[2].trim()
			try {
				m.reply(mess.wait)
                anu = await fetchJson(`https://api.vhtear.com/cekongkir?kurir=${cek_kurir}&fromcity=${cek_asal}&tocity=${cek_tujuan}&apikey=${VthearApi}`)
                kurirnya = `*Title :* ${anu.result.title}
*Informasi :* ${anu.result.informasi}
=================\n`
                for (let i = 0; i < anu.result.data.length; i++) {
	            kurirnya += `*Layanan :* ${anu.result.data[i].layanan}
*Tarif :* ${anu.result.data[i].tarif}
*Etd :* ${anu.result.data[i].etd}
=================\n`
            }
			    m.reply(kurirnya)
                limitAdd(m.sender)
			}   catch (err){
                console.log(err)
            } 
        }
			break 
            case 'listpc': {
                if (!isOwner) return m.reply(mess.only.ownerB)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `❏ *Nama :* ${nama}\n❏ *User :* @${i.split('@')[0]}\n❏ *Chat :* https://wa.me/${i.split('@')[0]}\n──────────────────\n`
                 }
                 client.sendTextWithMentions(m.chat, teks, m)
             }
             break
                case 'listgc': case 'listgrup': case 'listgroup': {
                    if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
                 let teks2 = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
                 for (let i of anu) {
                     let metadata = await client.groupMetadata(i)
                     teks += `❏ *Nama :* ${metadata.subject}\n❏ *ID :* ${metadata.id}\n❏ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n❏ *Member :* ${metadata.participants.length}\n──────────────────\n`
                 }
                 for (let i of anu) {
                    let metadata = await client.groupMetadata(i)
                    teks2 += `❏ *Nama :* ${metadata.subject}\n❏ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n❏ *Member :* ${metadata.participants.length}\n──────────────────\n`
                }
                 if (isOwner) return m.reply(teks)
                 m.reply(teks2)
             }
             break
             case 'listonline': case 'liston': {
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                if (!m.isGroup) return m.reply(mess.only.group)
                if (!isAdmins && !isOwner && !m.key.fromMe) return m.reply(mess.only.admin)
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    client.sendText(m.chat, 'List Online:\n\n' + online.map(v => '@' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break
            case 'sticker': case 'stiker': case 's': case 'stickergif': case 'sgif': {
                // if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                try{
            if (!quoted) return m.reply(`Balas Video/Image Dengan Caption ${prefix + command}`)
                if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await client.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                limitAdd(m.sender)
                fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
                m.reply(mess.wait)
                let media = await quoted.download()
                let encmedia = await client.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                limitAdd(m.sender)
                fs.unlinkSync(encmedia)
            } else {
                m.reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
                }
            } catch {
                m.reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
            }
            }
            break
            case 'stickerwm': case 'stikerwm': case 'swm': case 'take': case 'takestik': case 'takestick': {
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                if (!isPremium) return m.reply(mess.only.premium)
                if (!quoted) return m.reply(`Balas Video/Image Dengan Caption ${prefix + command} Imam|Dewi`)
                m.reply(mess.wait)
                var ini_txt = args.join(" ").split("|")
                        if (/image/.test(mime)) {
                    let media = await quoted.download()
                    let encmedia = await client.sendImageAsSticker(m.chat, media, m, { packname: ini_txt[0], author: ini_txt[1] })
                    limitAdd(m.sender)
                    await fs.unlinkSync(encmedia)
                } else if (/video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
                    let media = await quoted.download()
                    let encmedia = await client.sendVideoAsSticker(m.chat, media, m, { packname: ini_txt[0], author: ini_txt[1] })
                    limitAdd(m.sender)
                    await fs.unlinkSync(encmedia)
                } else {
                    m.reply(`Kirim Gambar/Video Dengan Caption ${prefix + command} Imam|Dewi`)
                    }
                }
                break
            case 'smeme': case 'stickermem': case 'stikermeme': {
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                if (!isPremium) return m.reply(mess.only.premium)
                if (!/image/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption  ${prefix + command} dewi`)
                if (/webp/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command} dewi`)
                if (args.length === 0) return m.reply((`Kirim/Reply Image Dengan Caption ${prefix + command} dewi`))
                m.reply(mess.wait)
                try{
                    var { TelegraPh } = require('./lib/uploader')
                    let media = await client.downloadAndSaveMediaMessage(quoted)
                    let anu = await TelegraPh(media)
                    fs.unlinkSync(media)
                    ranp = getRandom('.png')
	            	ranw = getRandom('.webp')
                    nama14 =  '-' // q.split('|')[0] ? q.split('|')[0] : ''
                    nama24 = q // q.split('|')[1] ? q.split('|')[1] : ''
                    anu = await getBuffer(`https://api.memegen.link/images/custom/${nama14}/${nama24}.png?background=${anu}`)
                    fs.writeFileSync(ranp, anu, (err) => {
                        if (err) return m.reply('Gagal, Terjadi kesalahan, silahkan coba beberapa saat lagi.')
                    })
                    exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
                        fs.unlinkSync(ranp)
                        client.sendMessage(m.chat, { sticker: fs.readFileSync(ranw) }, { quoted: m })
                    fs.unlinkSync(ranw)
                    })
                } catch (e) {
                    console.log(e)
                    m.reply('error mas')
                }
            }
            break
            case 'stickerpatrick':case 'stikerpatrick': {
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
						if (!isPremium) return m.reply(mess.only.premium)
						anu = await getBuffer(`http://api.lolhuman.xyz/api/sticker/patrick?apikey=${LolApi}`)
						client.sendMessage(m.chat, { sticker: anu }, { quoted: m })
                        }
						break
				case 'stickeranjing':case 'stikeranjing':{
                    if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
						if (!isPremium) return m.reply(mess.only.premium)
						anu = await getBuffer(`http://api.lolhuman.xyz/api/sticker/anjing?apikey=${LolApi}`)
						client.sendMessage(m.chat, { sticker: anu }, { quoted: m })
                        }
						break
				case 'stickerbucin':case 'stikerbucin':{
                    if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
						if (!isPremium) return m.reply(mess.only.premium)
						anu = await getBuffer(`http://api.lolhuman.xyz/api/sticker/bucinstick?apikey=${LolApi}`)
						client.sendMessage(m.chat, { sticker: anu }, { quoted: m })
                        }
						break
				case 'gawrgura':{
                    if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
						if (!isPremium) return m.reply(mess.only.premium)
						anu = await getBuffer(`http://api.lolhuman.xyz/api/sticker/gawrgura?apikey=${LolApi}`)
						client.sendMessage(m.chat, { sticker: anu }, { quoted: m })
                        }
						break
            case 'ebinary': {
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
            if (!m.quoted.text && !text) return m.reply(`Kirim/reply text dengan caption ${prefix + command}`)
            let { eBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let eb = await eBinary(teks)
            m.reply(eb)
            limitAdd(m.sender)
        }
        break
            case 'dbinary': {
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
            if (!m.quoted.text && !text) return m.reply(`Kirim/reply text dengan caption ${prefix + command}`)
            let { dBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let db = await dBinary(teks)
            m.reply(db)
            limitAdd(m.sender)
        }
        break
            case 'emojimix': {
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
	        if (!text) return m.reply(`Example : ${prefix + command} 😅+🤔`)
		let [emoji1, emoji2] = text.split`+`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await client.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
            limitAdd(m.sender)
		}
	    }
	    break
            case 'toimage': case 'toimg': {
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                if (!quoted) return m.reply('Reply Image')
                if (!/webp/.test(mime)) return m.reply(`balas stiker dengan caption *${prefix + command}*`)
                m.reply(mess.wait)
                let media = await client.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) return m.reply(err)
                    let buffer = fs.readFileSync(ran)
                    client.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                    limitAdd(m.sender)
                })
            }
            break
	        case 'tomp4': case 'tovideo': {
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                if (!quoted) return m.reply('Reply Image')
                if (!/webp/.test(mime)) return m.reply(`balas stiker dengan caption *${prefix + command}*`)
                m.reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await client.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await client.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                fs.unlinkSync(media)
                limitAdd(m.sender)
            }
            break
            case 'toaud': case 'toaudio': {
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
            if (!/video/.test(mime) && !/audio/.test(mime)) return m.reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`)
            if (!quoted) return m.reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`)
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            client.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            limitAdd(m.sender)
            }
            break
            case 'tomp3': {
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
            if (/document/.test(mime)) return m.reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)
            if (!/video/.test(mime) && !/audio/.test(mime)) return m.reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)
            if (!quoted) return m.reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            client.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${namabot}.mp3`}, { quoted : m })
            limitAdd(m.sender)   
        }
            break
            case 'tovn': case 'toptt': {
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
            if (!/video/.test(mime) && !/audio/.test(mime)) return m.reply(`Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`)
            if (!quoted) return m.reply(`Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`)
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            client.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            limitAdd(m.sender)
            }
            break
            case 'togif': {
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                if (!quoted) return m.reply('Reply Image')
                if (!/webp/.test(mime)) return m.reply(`balas stiker dengan caption *${prefix + command}*`)
                m.reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await client.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await client.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
                limitAdd(m.sender)
            }
            break
	        case 'tourl': {
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                if (!isPremium) return m.reply(mess.only.premium)
                m.reply(mess.wait)
		let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await client.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    m.reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    m.reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
    case 'imagenobg': case 'removebg': case 'remove-bg': {
        if (!isPremium) return m.reply(mess.only.premium)
	    if (!quoted) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
	    if (!/image/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
	    if (/webp/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
        try{
	    // let remobg = require('remove.bg')
	    // let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    // let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    // hmm = await './src/remobg-'+getRandom('')
	    // localFile = await client.downloadAndSaveMediaMessage(quoted, hmm)
	    // outputFile = await './src/hremo-'+getRandom('.png')
	    // m.reply(mess.wait)
	    // remobg.removeBackgroundFromImageFile({
	    //   path: localFile,
	    //   apiKey: apinobg,
	    //   size: "regular",
	    //   type: "auto",
	    //   scale: "100%",
	    //   outputFile 
	    // }).then(async result => {
	    // client.sendMessage(m.chat, {image: fs.readFileSync(outputFile)}, { quoted : m })
	    // fs.unlinkSync(localFile)
	    // fs.unlinkSync(outputFile)
	    // })
        // } catch {
        // m.reply(mess.wait)
	    // anu = await imgbb(imgbbAPI, localFile)
        m.reply(mess.wait)
        var { TelegraPh } = require('./lib/uploader')
        let media = await client.downloadAndSaveMediaMessage(quoted)
        let anu = await TelegraPh(media)
		fs.unlinkSync(media)
        // ya = await fetchJson(`https://api.vhtear.com/removebgwithurl?link=${anu}&apikey=${VthearApi}`)
        // yaa = await getBuffer(ya.result.image)
        yaa = await getBuffer(`https://api.lolhuman.xyz/api/removebg?apikey=${LolApi}&img=${anu}`)
        client.sendMessage(m.chat, {image: yaa}, {quoted:m})
       // client.sendMedia(m.chat, `https://api.vhtear.com/removebgwithurl?link=${anu}&apikey=${VthearApi}`,'','',m)
    } catch {
            m.reply(mess.error.bug)
        }
	    }
	    break
        case 'hex': case 'enc': case 'enchtml':{
            if (args.length === 0) return m.reply(`Example: ${prefix + command} text html`)
            function make(e) {
                hexEncoded = "";
                for (var n = 0; n < e.length; n++)
                  hexEncoded += "%" + e.charCodeAt(n).toString(16);
                return hexEncoded;
              }
              anu = make(q)
               m.reply(`
              <noscript>Please Enable Javascript To View This Page</noscript>
              <script>
              // Encrypt HTML By https://ucapanforever.id
              document.write(unescape(${JSON.stringify(anu)}))
              </script>
              `.trim());
        }
        break
	    case 'yts': case 'ytsearch': {
            if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                if (!text) return m.reply(`Example : ${prefix + command} ndx-aka apa kabar mantan`)
                m.reply(mess.wait)
                try{
                let yts = require("yt-search")
                let search = await yts(text)
                // let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                // let no = 1
                // for (let i of search.all) {
                //     teks += `No : ${no++}\nType : ${i.type}\nVideo ID : ${i.videoId}\nTitle : ${i.title}\nViews : ${i.views}\nDuration : ${i.timestamp}\nUpload At : ${i.ago}\nAuthor : ${i.author.name}\nUrl : ${i.url}\n\n─────────────────\n\n`
                // }
                // client.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
                list = []
                for (let i of search.all){
                    list.push({title: i.title, description: `Video ID : ${i.videoId}\nTitle : ${i.title}\nViews : ${i.views}\nDuration : ${i.timestamp}\nUpload At : ${i.ago}\nUrl : ${i.url}`, rowId: `ytmp3 ${i.url}`})
                }
                console.log(list)
                sections = [
                    {
                    title: `Please select here ${pushname}`,
                    rows: list
                    },
                ]
                
                const listMessage = {
                  text: `*YouTube Search*\n\nHi kak ${pushname}, ${ucapanWaktu}`,
                  footer: '',
                  title: "",
                  buttonText: "CLICK HERE",
                  sections
                }
                
                client.sendMessage(m.chat, listMessage, { quoted: m })
                limitAdd(m.sender)
            } catch(e) {
            console.log(e)
            m.reply(`Hasil dari pencarian ${text} tidak ditemukan!`)
            }
            }
            break
            case 'meme':case 'memeindo':{
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                m.reply(mess.wait)
					if (command == 'meme') {
					client.sendMedia(m.chat,`https://api.lolhuman.xyz/api/random/meme?apikey=${LolApi}`,'','',m)
                    limitAdd(m.sender)
					} else {
					client.sendMedia(m.chat,`https://api.lolhuman.xyz/api/meme/memeindo?apikey=${LolApi}`,'','',m)
                    limitAdd(m.sender)
					}
                }
					break 
        case 'translate':case 'translete':case 'ts':{
            if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
			try{
			if (args.length > 1) {
			try{
			anu = await translate(`${body.slice(10+args[0].length+1)}`, args[0])
			m.reply(`${anu}`)
			} catch (err){
			m.reply(`${String(err)}\nExample: ${prefix + command} id love you`)
			}
			} else {
			tolang = args[0]
			entah = m.message.extendedTextMessage.contextInfo.quotedMessage.conversation
			translate(entah, tolang)
			.then((res) => { m.reply(`${res}`) })
			}
		    } catch (err) {
			m.reply(`${String(err)}\nExample: ${prefix + command} id love you`)
			} 
        }
			break
        case 'google': {
            if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                if (!text) return m.reply(`Example : ${prefix + command} Yogyakarta`)
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Google Search From : ${text}\n\n`
                for (let g of res) {
                teks += `*Title* : ${g.title}\n`
                teks += `*Description* : ${g.snippet}\n`
                teks += `*Link* : ${g.link}\n\n────────────────────────\n\n`
                } 
                m.reply(teks)
                limitAdd(m.sender)
                })
                }
                break
            case 'brainly': {
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                if (!text) return m.reply(`Example : ${prefix + command} apa itu tahu`)
                m.reply(mess.wait)
                brainly(`${q}`).then(res => {
					teks = '❉───────────❉\n'
					for (let Y of res.data) {
						teks += `*「 BRAINLY 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉───────────❉\n`
					}
					m.reply(teks)
                    limitAdd(m.sender)
                    }) 
            }
            break
            case 'wiki': case 'wikipedia': {
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                if (!text) return m.reply(`Example : ${prefix + command} apa itu tahu`)
                m.reply(mess.wait)
                const { wikiSearch } = require('./lib/wiki')
			    res = await wikiSearch(q).catch(e => {
			    return m.reply('[ ! ] Error Hasil Tidak Ditemukan') 
				}) 
				result = `*Judul :* ${res[0].judul}\n*Wiki :* ${res[0].wiki}`
				client.sendMedia(m.chat, res[0].thumb,'',result,m).catch(e => {
				m.reply(result)
                limitAdd(m.sender)
				})
            }
            break
            case 'kbbi':{
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                if (args.length == 0) return m.reply(`Example: ${prefix + command} kursi`)
                m.reply(mess.wait)
                get_result = await fetchJson(`http://api.lolhuman.xyz/api/kbbi?apikey=${LolApi}&query=${args.join(" ")}`)
                lila = get_result.result
                ini_txt = `*Kata :* ${lila[0].nama}\n`
                ini_txt += `*Kata Dasar :* ${lila[0].kata_dasar}\n`
                ini_txt += `*Pelafalan :* ${lila[0].pelafalan}\n`
                ini_txt += `*Bentuk Tidak Baku :* ${lila[0].bentuk_tidak_baku}\n\n`
                for (var x of lila) {
                    ini_txt += `*Kode :* ${x.makna[0].kelas[0].kode}\n`
                    ini_txt += `*Kelas :* ${x.makna[0].kelas[0].nama}\n`
                    ini_txt += `*Artinya :* ${x.makna[0].kelas[0].deskripsi}\n\n`
                    ini_txt += `*Makna Lain :* ${x.makna[0].submakna}\n`
                    ini_txt += `*Contoh Kalimat :* ${x.makna[0].contoh}\n`
                }
                m.reply(ini_txt)
                limitAdd(m.sender)
            }
                break 
                case 'atm': case 'atmku': case 'cekatm':{
                    const kantong = checkATMuser(m.sender)
				m.reply(`◪ *ATM*
├─ ❏ *Nama :* ${pushname}
├─ ❏ *Nomor :* ${m.sender.split("@")[0]}
└─ ❏ *Uang :* ${kantong}`)
       }
				break
                case 'tf':case 'transfer':{
                    if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                    if (!m.isGroup) return m.reply(mess.only.group)
				    if (!q.includes('|')) return m.reply(`Format salah! kirim ${prefix + command} @tag|jumalh`)
                	const tujuan = q.substring(0, q.indexOf('|') - 1)
                	const jumblah = q.substring(q.lastIndexOf('|') + 1)
                	if (isNaN(jumblah)) return m.reply('Jumlah harus berupa angka!!')
                	if (jumblah < 5000 ) return m.reply(`Minimal transfer 5000`)
                	if (checkATMuser(m.sender) < jumblah) return m.reply(`Uang mu tidak mencukupi untuk melakukan transfer`)
                	const tujuantf = `${tujuan.replace("@", '')}@s.whatsapp.net`
                	fee = 0.010 *  jumblah
                	hasiltf = jumblah - fee
                	addKoinUser(tujuantf, hasiltf)
                	confirmATM(m.sender, jumblah)
                	addKoinUser(`${global.owner}@s.whatsapp.net`, fee)
                    anu = `*「 SUKSES 」*\n\nPengiriman uang telah sukses\nDari : @${m.sender.split("@")[0]}\nKe : @${tujuan.replace('@','')}\nJumlah transfer : ${jumblah}\nPajak : ${fee}`
                	// m.reply()
                    client.sendTextWithMentions(m.chat, anu, m)
                    }
                    break
        case 'ceklimit':case 'limit':{
            if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
					if (isPremium) return m.reply(`*「 UNLIMITED LIMIT 」*
         
◪ *USER PREMIUM*
├─ *Nama :* ${pushname}
├─ *User :* PREMIUM
├─ *Tanggal :* ${moment().format('DD/MM/YY')}
├─ *Jam :* ${moment().format('HH:mm:ss')}
└─ *Limit :* 「 9999999 」`)
			    checkLimit(m.sender)
                    }
			    	break
            case 'buylimit':{
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
				if (args.length == 0) return m.reply(`Format salah! Kirim: ${prefix + command} jumlahnya\nContoh: ${prefix + command} 2`)
				payout = text
				const koinPerlimit = 500
				const total = koinPerlimit * payout
				if ( checkATMuser(m.sender) <= total) return m.reply(`Maaf uang kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
				if ( checkATMuser(m.sender) >= total ) {
				confirmATM(m.sender, total)
				bayarLimit(m.sender, payout)
				m.reply(`*「 PEMBAYARAN BERHASIL 」*\n\n*Pengirim :* Admin\n*Penerima :* ${pushname}\n*Nominal pembelian :* ${payout} \n*Harga limit :* ${koinPerlimit}/limit\n*Sisa uang mu :* ${checkATMuser(m.sender)}\n\nProses berhasil dengan kode pembayaran\n${createSerial(20)}`)
				} 
            }
				break
            case 'buyprem':{
                if (args.length < 1) return m.reply(`Example: ${prefix + command} 1`)
				const harga = 10000
                var haripremium = `${text}day` || '1day'
				if ( checkATMuser(m.sender) <= harga) return m.reply(`Maaf uang kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
				if ( checkATMuser(m.sender) >= harga ) {
				confirmATM(m.sender, harga)
                _premium.addPremiumUser(m.sender, haripremium, prem)
                    m.reply(`    ─── *「 PREMIUM 」* ───
──────────────────
+ *ID :* ${m.sender.split('@')[0]}@c.us
+ *Nama :* ${pushname}
+ *Expired :* ${ms(toMs(haripremium)).days} Hari, ${ms(toMs(haripremium)).hours} Jam, ${ms(toMs(haripremium)).minutes} menit
──────────────────
║▌│█║▌│ █║▌│█│║▌║
║▌│█║▌│ █║▌│█│║▌║`) 
                }
}
                    break
                case 'v':{
                    const v = require('./lib/gataudah.js')
                    m.reply(v.fakeVir())
                    m.reply(v.virtex())
                }
                break
                case 'gift': case 'giftlimit': {
                    if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
				        if (!m.key.fromMe && !isOwner) return m.reply(mess.only.ownerB)
                        if (!m.isGroup) return m.reply(mess.only.group)
			        	if (args.length == 0) return m.reply(`Format salah! Kirim: ${prefix + command} @tag jumlahnya\nContoh: ${prefix + command} @tag 2`)
						const nomerr = args[0].replace('@','')
                		const jmla = args[1]
                		if (jmla <= 1) return m.reply(`minimal gift limit adalah 1`)
                		if (isNaN(jmla)) return m.reply(`limit harus berupa angka`)
                		if (!nomerr) return m.reply(`maaf format salah\nmasukan parameter yang benar\ncontoh : ${prefix}giftlimit @6282189387018 20`)
                		const cysz = nomerr + '@s.whatsapp.net'
                		var found = false
                        Object.keys(_limit).forEach((i) => {
                        if(_limit[i].id === cysz){
                        found = i
                        }
                        })
                        if (found !== false) {
                        _limit[found].limit -= jmla
                        const updated = _limit[found]
                        const result = `*「 GIFT KUOTA LIMIT 」*
*• User :* ${updated.id.replace('@s.whatsapp.net','')}
*• Limit :* ${global.limitawal.free-updated.limit}
*• SN :* ${createSerial(20)} 
*• Waktu :* ${moment().format('DD/MM/YY HH:mm:ss')}`
                        console.log(_limit[found])
                        fs.writeFileSync('./database/pengguna/limit.json',JSON.stringify(_limit));
                        m.reply(result)
                        } else {
                        m.reply(`Maaf, nomor ${nomerr} tidak terdaftar di database!`)
                        }
                    }
               			break
        case 'gimage': {
            if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
        if (!text) return m.reply(`Example : ${prefix + command} Yogyakarta`)
        m.reply(mess.wait)
        let gis = require('g-i-s')
        gis(text, async (error, result) => {
        n = result
        images = n[Math.floor(Math.random() * n.length)].url
        let buttons = [
                    {buttonId: `gimage ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `*-------「 GIMAGE SEARCH 」-------*

*Query* : ${text}
*Media Url* : ${images}`,
                    footer: '',
                    buttons: buttons,
                    headerType: 4
                }
                client.sendMessage(m.chat, buttonMessage, { quoted: m })
                limitAdd(m.sender)
        })
        }
        break
	    case 'play': case 'ytplay': {
            if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                if (!text) return m.reply(`Example : ${prefix + command} ndx-aka apa kabar mantan`)
                m.reply(mess.wait)
                try{
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                let buttons = [
                    {buttonId: `ytmp3 ${anu.url}`, buttonText: {displayText: 'Audio'}, type: 1},
                    {buttonId: `ytmp4 ${anu.url}`, buttonText: {displayText: 'Video'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: anu.thumbnail },
                    caption: `Title : ${anu.title}
Ext : Search
ID : ${anu.videoId}
Duration : ${anu.timestamp}
Viewers : ${anu.views}
Upload At : ${anu.ago}
Author : ${anu.author.name}
Channel : ${anu.author.url}
Description : ${anu.description}
Url : ${anu.url}`,
                    footer: '',
                    buttons: buttons,
                    headerType: 4
                }
                anuy = `Title : ${anu.title}
Ext : Search
ID : ${anu.videoId}
Duration : ${anu.timestamp}
Viewers : ${anu.views}
Upload At : ${anu.ago}
Author : ${anu.author.name}
Channel : ${anu.author.url}
Description : ${anu.description}
Url : ${anu.url}`
                // client.sendMessage(m.chat, buttonMessage, { quoted: m })
                client.sendMessage(m.chat, {image: {url: anu.thumbnail}, caption: anuy}, {quoted:m})
                let { yta } = require('./lib/y2mate')
                let quality = '128kbps'
                let media = await yta(anu.url, quality)
                if (media.filesize >= 40000) return m.reply(`File Melebihi Batas (${media.filesizeF}), silahkan download sendiri melalui link berikut: ${media.dl_link}`)
                client.sendMessage(m.chat, { document: {url: media.dl_link}, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
                limitAdd(m.sender)
                } catch (err) {
                console.log(err)
                m.reply(`Hasil dari pencarian: ${text} tidak ditemukan!`)
            }
            }
            break
            case 'ytpremium': {
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
                if (ban.includes(m.sender)) return m.reply(mess.only.banned)
                if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                    if (!isPremium) return m.reply(mess.only.premium)
                    if (!text) return m.reply(`Example : ${prefix + command} ndx-aka apa kabar mantan`)
                    m.reply(mess.wait)
                    try{
                    let yts = require("yt-search")
                    let search = await yts(text)
                    let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                    anuy = `Title : ${anu.title}
Ext : Search
ID : ${anu.videoId}
Duration : ${anu.timestamp}
Viewers : ${anu.views}
Upload At : ${anu.ago}
Author : ${anu.author.name}
Channel : ${anu.author.url}
Description : ${anu.description}
Url : ${anu.url}`
                    // client.sendMessage(m.chat, buttonMessage, { quoted: m })
                    client.sendMessage(m.chat, {image: {url: anu.thumbnail}, caption: anuy}, {quoted:m})
                    let { yta } = require('./lib/y2mate')
                    let { ytv } = require('./lib/y2mate')
                    let quality = '128kbps'
                    let media = await yta(anu.url, quality)
                    client.sendMessage(m.chat, { document: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
                    let qualityy = '360p'
                    let mediaa = await ytv(anu.url, qualityy)
                    if (mediaa.filesize >= 100000) return m.reply(`File Melebihi Batas (${mediaa.filesizeF}), silahkan download sendiri melalui link berikut: ${mediaa.dl_link}`)
                    client.sendMessage(m.chat, { video: { url: mediaa.dl_link }, mimetype: 'video/mp4', fileName: `${mediaa.title}.mp4`}, { quoted: m })
                    } catch (err) {
                    console.log(err)
                    m.reply(`Hasil dari pencarian: ${text} tidak ditemukan!`)
                }
                }
                break
	    case 'ytmp3': case 'ytaudio': {
            if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                let { yta } = require('./lib/y2mate')
                if (!text) return m.reply(`Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`)
                m.reply(mess.wait)
                try{
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 40000) return m.reply(`File Melebihi Batas (${media.filesizeF}), silahkan download sendiri melalui link berikut: ${media.dl_link}`)
                client.sendImage(m.chat, media.thumb, `Title : ${media.title}\nFile Size : ${media.filesizeF}\nUrl : ${isUrl(text)}\nExt : MP3\nResolusi : ${args[1] || '128kbps'}`, m)
               await sleep(4000)
                // client.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
                m.reply('Please wait, sending audio...')
                client.sendMessage(m.chat, { document: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
                limitAdd(m.sender)
                } catch {
                    m.reply(mess.error.bug)
                }
            }
            break
            case 'ytmp4': case 'ytvideo': {
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                let { ytv } = require('./lib/y2mate')
                if (!text) return m.reply(`Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`)
                m.reply(mess.wait)
                try{
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(text, quality)
                if (media.filesize >= 40000) return m.reply(`File Melebihi Batas (${media.filesizeF}), silahkan download sendiri melalui link berikut: ${media.dl_link}`)
                client.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `Title : ${media.title}\nFile Size : ${media.filesizeF}\nUrl : ${isUrl(text)}\nExt : MP4\nResolusi : ${args[1] || '360p'}` }, { quoted: m })
                limitAdd(m.sender)
                } catch (err) {
                    console.log(err)
                    m.reply(mess.error.bug)
                }
            }
            break
            case 'ytmp3premium': case 'ytmp3premi': {
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                if (!isPremium) return m.reply(mess.only.premium)
                let { yta } = require('./lib/y2mate')
                if (!text) return m.reply(`Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`)
                m.reply(mess.wait)
                try{
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 100000) return m.reply(`File Melebihi Batas (${media.filesizeF}), silahkan download sendiri melalui link berikut: ${media.dl_link}`)
                client.sendImage(m.chat, media.thumb, `Title : ${media.title}\nFile Size : ${media.filesizeF}\nUrl : ${isUrl(text)}\nExt : MP3\nResolusi : ${args[1] || '128kbps'}`, m)
                // client.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
                m.reply('Please wait, sending audio...')
                client.sendMessage(m.chat, { document: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
                limitAdd(m.sender)
                } catch (err) {
                console.log(err)
                m.reply(mess.error.bug)
                }
            }
            break
            case 'ytmp4premium': case 'ytmp4premi': {
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                if (!isPremium) return m.reply(mess.only.premium)
                let { ytv } = require('./lib/y2mate')
                if (!text) return m.reply(`Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`)
                m.reply(mess.wait)
                try{
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(text, quality)
                if (media.filesize >= 100000) return m.reply(`File Melebihi Batas (${media.filesizeF}), silahkan download sendiri melalui link berikut: ${media.dl_link}`)
                client.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `Title : ${media.title}\nFile Size : ${media.filesizeF}\nUrl : ${isUrl(text)}\nExt : MP4\nResolusi : ${args[1] || '360p'}` }, { quoted: m })
                limitAdd(m.sender)
                } catch (err) {
                console.log(err)
                m.reply(mess.error.bug)
                }
            }
            break
            case 'ytshort': {
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                if (!isPremium) return m.reply(mess.only.premium)
                let { ytv } = require('./lib/y2mate')
                if (!text) return m.reply(`Example : ${prefix + command} https://youtube.com/shorts/lBQb1rvY9ao`)
                m.reply(mess.wait)
                try{
                let quality = args[1] ? args[1] : '360p'
                anu = args[0]
				linkytpremi = anu.replace('https://youtube.com/shorts/', 'https://youtube.com/watch?v=')
				linkytpremii = linkytpremi.replace('?feature=share', '')
                let media = await ytv(linkytpremii, quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                client.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `Title : ${media.title}\nFile Size : ${media.filesizeF}\nUrl : ${isUrl(text)}\nExt : MP3\nResolusi : ${args[1] || '360p'}` }, { quoted: m })
                } catch (err) {
                console.log(err)
                m.reply(mess.error.bug)
                }
            }
            break
	    case 'getmusic': {
            if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                let { yta } = require('./lib/y2mate')
                if (!text) return m.reply(`Example : ${prefix + command} 1`)
                if (!m.quoted) return m.reply('Reply Pesan')
                if (!m.quoted.isBaileys) return m.reply(`Hanya Bisa Membalas Pesan Dari Bot`)
                m.reply(mess.wait)
		let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) return m.reply(`Mungkin pesan yang anda reply tidak mengandung result ytsearch`)
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(urls[text - 1], quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                client.sendImage(m.chat, media.thumb, `Title : ${media.title}\nFile Size : ${media.filesizeF}\nUrl : ${urls[text - 1]}\nExt : MP3\nResolusi : ${args[1] || '128kbps'}`, m)
                client.sendMessage(m.chat, { document: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
                limitAdd(m.sender)
            }
            break
            case 'getvideo': {
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                let { ytv } = require('./lib/y2mate')
                if (!text) return m.reply(`Example : ${prefix + command} 1`)
                if (!m.quoted) return m.reply('Reply Pesan')
                if (!m.quoted.isBaileys) return m.reply(`Hanya Bisa Membalas Pesan Dari Bot`)
                m.reply(mess.wait)
                let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) return m.reply(`Mungkin pesan yang anda reply tidak mengandung result ytsearch`)
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(urls[text - 1], quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                client.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `Title : ${media.title}\nFile Size : ${media.filesizeF}\nUrl : ${urls[text - 1]}\nExt : MP3\nResolusi : ${args[1] || '360p'}` }, { quoted: m })
                limitAdd(m.sender)
            }
            break
            case 'pinterest': case 'pint':{
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                if (args.length === 0) return m.reply(`Example: ${prefix + command} Yogyakarta`)
                if (text.includes('pinterest.com')) return m.reply(`Sepertinya kamu ingin mengunduh video pinterest ya?\nGunakan perintah: *${prefix}pinterestdl link*`)
                if (text.includes('pin.it')) return m.reply(`Sepertinya kamu ingin mengunduh video pinterest ya?\nGunakan perintah: *${prefix}pinterestdl link*`)
                m.reply(mess.wait)
		        let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                client.sendMessage(m.chat, { image: { url: result }, caption: 'Media Url : '+result }, { quoted: m })
                limitAdd(m.sender)
            }
            break
            case 'waifu':case 'shota':case 'husbu':case 'neko':case 'loli':case 'sagiri':case 'kanna':case 'shinobu':case 'megumin':case 'wallnime':case 'bully':case 'cuddle':case 'cry':case 'kiss':case 'hug':case 'awoo':case 'lick':case 'pat':case 'smug':case 'bonk':case 'yeet':case 'blush':case 'smile':case 'wave':case 'highfive':case 'handhold':case 'nom':case 'bite':case 'glomp':case 'kill':case 'slap':case 'happy':case 'wink':case 'poke':case 'dance':case 'cringe':case 'blush': {
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                m.reply(`${mess.wait}, If it does not appear, it means error / try to open a desktop whatsapp on a laptop or computer.`)
                client.sendMedia(m.chat, `http://api.lolhuman.xyz/api/random/${command}?apikey=${LolApi}`,'','',m)
                limitAdd(m.sender)   
            }
            break
	    case 'couple': {
            if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                m.reply(mess.wait)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                client.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
                client.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
                limitAdd(m.sender)
            }
	    break
            case 'coffe': case 'kopi': {
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
            let buttons = [
                    {buttonId: `coffe`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://coffee.alexflipnote.dev/random' },
                    caption: `☕ Random Coffe`,
                    footer: '',
                    buttons: buttons,
                    headerType: 4
                }
                client.sendMessage(m.chat, buttonMessage, { quoted: m })
                limitAdd(m.sender)
            }
            break
            case 'wallpaper': {
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                if (!text) return m.reply('Masukkan Query Title')
		let { wallpaper } = require('./lib/scraper')
                anu = await wallpaper(text)
                result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `wallpaper ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `Title : ${result.title}\nCategory : ${result.type}\nDetail : ${result.source}\nMedia Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: '',
                    buttons: buttons,
                    headerType: 4
                }
                client.sendMessage(m.chat, buttonMessage, { quoted: m })
                limitAdd(m.sender)
            }
            break
            case 'wikimedia': {
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                if (!text) return m.reply('Masukkan Query Title')
		let { wikimedia } = require('./lib/scraper')
                anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `wikimedia ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: `Title : ${result.title}\nSource : ${result.source}\nMedia Url : ${result.image}`,
                    footer: '',
                    buttons: buttons,
                    headerType: 4
                }
                client.sendMessage(m.chat, buttonMessage, { quoted: m })
                limitAdd(m.sender)
            }
            break
            case 'quotesanime': case 'quoteanime': {
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
		let { quotesAnime } = require('./lib/scraper')
                let anu = await quotesAnime()
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `quotesanime`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                client.sendMessage(m.chat, buttonMessage, { quoted: m })
                limitAdd(m.sender)
            }
            break
	        case 'motivasi': {
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                const motiv =['Nilai sebuah tindakan terletak dalam usaha menyelesaikan sampai tuntas','Kebaikan adalah seorang yang matanya penuh perhatian, serta tangannya yang penuh manfaat','Hiduplah seperti kamu akan mati besok, dan berbahagialah seperti kamu akan hidup selamanya','Kita tidak usah saling menyalahkan, agar dimasa depan tak ada yang menuntut akan kesalahan','Ketika semua hal tidak sejalan dengan anda, ingatlah bahwa sebuah pesawat terbang melawan angin, bukan dengan mengikuti angin','Belajarlah menikmati apa yang kamu miliki, itu akan membuat hidupmu lebih bernilai','Selalu ada kegelapan yang tergelap sebelum terbitnya fajar','Sahabat itu seperti bintang, tak selalu Nampak tetapi selalu ada dihati','Sibuk bukanlah jaminan karir karena hasil jauh lebih didengar orang','semua kemajuan tidak akan ada tanpa kesalahan, kesalahan adalah bagian dari kemajuan selama diakui dan diperbaiki','Sukses meninggalkan jejak, gagal meninggalkan pelajaran, diam meninggalkan penyesalan','Keraguan bersahabat dekat dengan kegagalan','uang tidak merusak seseorang, keserakahan lah yang merusak manusia','Kepercayaan tidak bisa dibeli, tapi kepercayaan bisa dipelihara','Impian, target, kemauan dan tujuan semuanya sia-sia tanpa tindakan','usia bisa berbohong tapi kedewasaan tidak','Ada yang lebih berharga dari uang dan emas yaitu waktu','Tidak ada yang gagal mereka hanya berhenti terlalu cepat','Terasa sakit selalu hampir tidak ada rasanya setelah apa yang kita perjuangkan tercapai','Seseorang tidak bisa sukses seringkali karena kurangnya keberanian untuk mencobaterasa sakit selalu hampir tidak ada rasanya setelah apa yang kita perjuangkan tercapai','Bicaralah secukupnya, lakukanlah semampunya. Jangan melakukan sebaliknya','Ada saatnya penundaan memberikan keuntungan terutama saat terlalu emosi untuk mengambil keputusan','jangan takut karena masalah yang anda hadapi tidak lebih besar dari jalan keluarnya, Allah siapkan bagi andaAda saatnya penundaan memberikan keuntungan terutama saat terlalu emosi untuk mengambil keputusan','Kadang cara terbaik untuk Memanfaatkan peluang adalah dengan mengatakan tidak pada peluang baru dan fokus mengembangkan apa yang sudah ada di tanganjangan takut karena masalah yang anda hadapi tidak lebih besar dari jalan keluarnya, Allah siapkan bagi andaAda saatnya penundaan memberikan keuntungan terutama saat terlalu emosi untuk mengambil keputusan','atasan hanya memberikan tugas berat pada karyawan terbaik, Allah hanya memberikan ujian pada pada manusia terbaikKadang cara terbaik untuk Memanfaatkan peluang adalah dengan mengatakan tidak pada peluang baru dan fokus mengembangkan apa yang sudah ada di tanganjangan takut karena masalah yang anda hadapi tidak lebih besar dari jalan keluarnya, Allah siapkan bagi andaAda saatnya penundaan memberikan keuntungan terutama saat terlalu emosi untuk mengambil keputusan','berusaha dan gagal Ternyata jauh lebih melegakan daripada pasrah melihat ke kanan dengan tangan terlipat','lewat kesulitan lah manusia belajar, lewatnya kenyamanan lah manusia Terlena','Saat kita merasa hebat kita baru saja kehilangan separuh pangkat kita karena lengah untuk terus belajar','hidup seseorang telah ditebak, tapi Nasib orang malas mudah untuk ditebak','Orang pintar itu biasa orang hebat itu luar biasa tapi orang berani lah pemenangnyahidup seseorang telah ditebak, tapi Nasib orang malas mudah untuk ditebak','Orang hebat membicarakan ide, orang menengah membicarakan pengalaman, orang lemah membicarakan orang lainOrang pintar itu biasa orang hebat itu luar biasa tapi orang berani lah pemenangnyahidup seseorang telah ditebak, tapi Nasib orang malas mudah untuk ditebak','Anda tidak akan mengubah kehidupan sampai anda mengubah Apa yang anda lakukan setiap hari','bertahan saja tidak cukup anda perlu bereaksi terhadap tekanan dan merubah keadaan','masa depan kita tergantung pada apa yang kita lakukan pada saat ini. Maka jangan sia-siakan waktumu sekarang','Nilai manusia ditentukan bukan dari apa yang diperoleh melainkan apa yang telah diberikan','Malas adalah kemenangan saat ini dan kekalahan di masa nanti','sebuah masalah merupakan kesempatan bagi anda untuk mengeluarkan kemampuan terbaik anda','Kematian tidak dapat mengubur perbuatan baik seseorang','Asal percaya dengan sungguh-sungguh apapun keyakinan Anda dapat menjadi kenyataan','Jika ada hari buruk maka pasti akan hari ada hari baik tugas kita adalah terus bergerak majuAsal percaya dengan sungguh-sungguh apapun keyakinan Anda dapat menjadi kenyataan','Mengeluh adalah cara paling buruk dalam menyelesaikan masalah','Tetap Bertahan dan setia pada tujuan saat menghadapi Hambatan adalah kunci kesuksesan','Tidak perlu keahlian khusus untuk mencari musuh, tapi perlu kesetiaan untuk mempertahankan teman','Orang tua bukan hanya punya kekuatan untuk menatap juga untuk mengalah','Keuletan adalah tanda jadi kesuksesan','cepat atau lambat mereka yang menang adalah mereka yang berfikir dan yakin bahwa mereka bisa','Jaga terus Api Harapan Anda seperti menjaga hidup anda sendiri','Saat semua jalan tertutup. Buatlah jalan dan berserahlah kepada Allah','lari dari masalah bukanlah penyelesaian masalah, hadapi dan Belajarlah dari masalah itu','Rezeki itu ditangan Allah yang kita lakukan hanya berusaha semaksimal mungkin dan menyerahkan hasilnya kepada yang kuasa','Sukses dimulai dengan melakukan apa yang harus dilakukan','rasa syukur membuat kita tidak pernah merasa kekurangan','goal hanya sekedar goal kalau kita tidak mempunyai alasan yang kuat Mengapa kita harus mencapainya','Apapun yang terjadi Yakinlah bahwa Allah menginginkan kita akan jadi lebih baik karena Kejadian ini','orang yang paling Bahagia bukanlah orang yang punya hal-hal terbaik tapi orang yang bisa menjadikan hal-hal yang ia punya menjadi yang terbaikApapun yang terjadi Yakinlah bahwa Allah menginginkan kita akan jadi lebih baik karena Kejadian ini','Respon kita terhadap masalah menentukan kualitas berita fokus pada solusi','Semua yang terlalu sedikit dan terlalu banyak tidak akan membawa kebaikan','Tidak semua usaha kita dibayar oleh manusia, tapi Allah akan membayarnya kelak','Tidak ada harga untuk waktu, tetapi waktu sangat berharga','Sukses seringkali datang pada mereka yang berani bertindak dan jarang menghampiri pada mereka yang dikalahkan ketakutan','Katakan bisa pasti bisa dengan penuh keyakinan otak kita akan segera mencari solusi','Orang yang tidak belajar dari kegagalan adalah orang yang gagal sesungguhnya','Segala sesuatu masalah yang menimpa Anda tidak akan pernah melatih kekuatan anda untuk menyelesaikannya','Saat orang lain melakukan impianmu itu berarti mereka belum mampu melihat sejauh anda melihat','Allah tidak pernah terlambat ia akan menunjukkan kuasanya, pada detik terakhir sekalipun','Bukan banyaknya panah yang menentukan kemenangan tapi tajam panah dan tujuannya yang menentukan','Mengeluh itu sisi lain dari pemborosan, pemborosan waktu dan energy','Pikiran negatif sangat berkuasa bila diberi kesempatan, jadi jangan memberinya kesempatan','Cinta akan membuat kita menjadi orang terkaya di dunia, oleh karena itu mulailah mencintai','Cemas yang berlebihan tidak akan mengubah apapun kecuali merusak diri sendiri','Hidup ini sederhana terkadang pikiran manusia yang membuatnya rumit','Siapa yang bisa menerima kelemahannya sesungguhnya baru saja menambah satu kelebihan pada dirinya','Ada saatnya dimana kekalahan rasa manis yaitu Saat anda sudah melakukan yang terbaik','Menabung itu hanya untuk mempertahankan kekayaan, untuk meningkatkannya berinvestasilah','Jika selamanya anda bermain aman, selamanya juga Anda di tempat yang sama','Lari dari masalah akan membuat masalah menjadi lebih besar, menghadapinya akan membuat anda menjadi lebih besar','Yang menyedihkan bukanlah bidikan yang meleset tapi bidikan tanpa target','Hati yang sedang panas menumpulkan logika dinginkan terlebih dahulu sebelum mengambil keputusan','bila ingin hasil yang besar jangan kerjakan hal yang mudah saja','Jangan biarkan impianmu dijajah oleh pendapat orang lain','Mulailah dengan yang kecil, Kerjakanlah dengan cara yang besar adalah dengan cara yang benar','Pengaruh perkataan orang kepada anda 100% adalah atas izin anda sendiri','Bekerjalah dengan ikhlas karena bekerja tanpa paksaan akan memberi hasil maksimal','Suka belajar, suka jualan, hidup hemat, beli aset suka, sedekah adalah 5 resep Makmur','Lebih baik menjadi raja tikus daripada ekor naga','Kerja keras dan kerja cerdas dapat memastikan keberhasilan dan sedekah dapat memudahkannya','Sakit dalam perjuangan itu hanya berlangsung sementara, namun jika anda menyerah rasa sakit itu akan terasa selamanya','Kegagalan terbesar adalah ketika tidak berani mencoba','Langkah pertama yang diperlukan untuk mendapatkan hal yang anda inginkan adalah memutuskan apa yang anda inginkan','Jangan takut menghadapi masa depan, hadapi dan perjuangkanlah','Dahulukan Allah dalam setiap langkah hidupmu maka semuanya akan ditambahkan kepadamu','Kesulitan adalah hujan terbaik untuk menunjukkan kualitas diri yang sebenarnya','Kesalahan dan kegagalan adalah guru terbaik jika kita mau jujur mengakui dan belajar darinya','Diam belum tentu menyelesaikan masalah tapi setidaknya tidak membesarkan masalah','Pemenang sejati selalu memberikan 100% upayanya, bahkan ketika tidak seorang pun melihatnya','Memaafkan orang lain bagai Menyiram air Bara dendam di hati baik untuk kesehatan kita','Jenius adalah 1 inspirasi dan 99 keringat tidak ada yang dapat menggantikan kerja keras','Disiplin memang tidak mudah tapi tanpa kedisiplinan hidup anda akan jauh lebih sulit','Orang yang berhenti belajar akan menjadi pemilik masa lalu, orang yang terus belajar akan menjadi pemilik masa depan','Hujan tidak hanya datang sendirian Ia datang bersama kesejukan, hal buruk tidak datang sendirian ia datang bersama pembelajaran','Menang atau kalah lakukanlah dengan jujur','Lihatlah tantangan sebagai ujian dan lihatlah masalah Sebagai teguran','Lihat ke atas agar terinspirasi lihat ke bawah agar bersyukur','Untuk meraih apa yang benar-benar anda inginkan fokus saja tidak cukup. Anda harus memiliki rasa lapar untuk meraihnya','90% dari kegagalan berasal dari orang-orang yang memiliki kebiasaan membuat alasan-alasan','Allah tidak membenci orang malas, tapi Allah mengizinkan orang rajin mengambil rezeki orang malas','Keajaiban itu nyata bagi mereka yang yakin berserah diri dan bekerja keras','Orang optimis dapat melihat peluang dalam masalah, orang pesimis akan melihat masalah dalam peluangKeajaiban itu nyata bagi mereka yang yakin berserah diri dan bekerja keras','Kualitas pikiran anda menentukan kualitas kehidupan anda','Bersyukur adalah cara ampuh untuk meraih energi yang dahsyat, Sudahkah anda bersyukur hari ini','Jangan mengharapkan sesuatu yang luar biasa jika anda hanya mau melakukan hal yang biasa saja','Kebahagiaan dimulai dengan ketulusan','1000 perkataan dan pengetahuan tidak berarti tanpa adanya satu tindakan yang nyata','Tangkap peluang, kerjakan, selesaikan','Ketika situasi di sekolah Anda tidak menyenangkan. Di saat itulah sebenarnya karakter anda sedang dibentuk','Seorang pemberani bukan orang yang tidak mempunyai rasa takut. Tapi orang yang mampu berjalan diatas rasa takutnya','dalam takut yang tampak adalah hambatan, dalam yakin yang tampak adalah kesempatan','Tidak ada kata gagal yang ada hanya sukses atau perlu belajar lagi sampai berhasil','Menjadi tua itu pasti menjadi dewasa itu pilihan','Kehidupan yang besar dimulai dari mimpi yang besar','Tragedi dalam kehidupan ini bukanlah yang berakhir terlalu cepat, tetapi kita menunggu terlalu lama untuk memulainya','Takut akan kegagalan seharusnya tidak menjadi alasan untuk tidak mencoba sesuatu','Hari ini adalah hari pertama dalam hidup anda. Buatlah hari ini menjadi hari yang terbaik sepanjang hidup anda dan semoga hari esok matahari bersinar dengan terang','Saya berpikir bahwa ada suatu hal yang lebih penting daripada sekedar percaya, tindakan Dunia ini penuh dengan pemimpi ,tidaklah banyak orang yang berani maju ke depan dan Mulai mengambil langkah pasti untuk mewujudkan visi mereka','Anda tidak dapat mengubah masa lalu anda dan janganlah terlalu khawatir dengan hari esok .Hari ini adalah hari yang dapat mengubah masa depan Anda','Allah, aku tahu bahwa saat aku kehilangan sesuatu engkau sedang mempersiapkan hal yang lebih baik untukkuAnda tidak dapat mengubah masa lalu anda dan janganlah terlalu khawatir dengan hari esok .Hari ini adalah hari yang dapat mengubah masa depan Anda','Pergilah sejauh mungkin dan ketika anda tiba di sana anda akan melihat lebih jauh lagiAllah, aku tahu bahwa saat aku kehilangan sesuatu engkau sedang mempersiapkan hal yang lebih baik untukkuAnda tidak dapat mengubah masa lalu anda dan janganlah terlalu khawatir dengan hari esok .Hari ini adalah hari yang dapat mengubah masa depan Anda','Menangis dapat melepaskan tambahan hormon stress, itulah mengapa kita sehabis menangis merasa lebih baikPergilah sejauh mungkin dan ketika anda tiba di sana anda akan melihat lebih jauh lagiAllah, aku tahu bahwa saat aku kehilangan sesuatu engkau sedang mempersiapkan hal yang lebih baik untukkuAnda tidak dapat mengubah masa lalu anda dan janganlah terlalu khawatir dengan hari esok .Hari ini adalah hari yang dapat mengubah masa depan Anda','Ketika cinta itu dipertahankan kamu akan tau siapa yang lebih menghargai tentang sebuah hubungan','Dalam hidup ini banyak orang tahu apa yang harus dilakukan, tetapi hanya sedikit yang melakukan apa yang ia ketahui. Mengetahui tidaklah cukup, Anda harus mengambil tindakan','Berilah perhatian lebih ke orang yang kamu sayangi, itu yang mereka butuhkan','Satu ons tindakan sama berharganya dengan satu ton teori','Kita mungkin terpisah sejak lama ketika tak mampu belajar untuk lebih dewasa','Sayangilah dia walau tidak sesempurna seperti yang kau inginkan','Kecantikan akan mengundang perhatian sikap santun memikat Kalbu','Mengetahui tidaklah cukup kita harus melakukannya, keinginan tak cukup hanya dengan berangan kita harus melakukannya','Kesalahan adalah bukti bahwa kamu sedang mencoba','Betapapun jauhnya air mengalir ia takkan pernah lupa hulunya','Lebih baik sendiri daripada bersama dengan orang yang salahBetapapun jauhnya air mengalir ia takkan pernah lupa hulunya','Lakukan sesuatu hari ini yang akan membuat dirimu berterima kasih di hari-hari mendatang','Waktu yang memutuskan Dengan siapa kamu akan berjumpa','Hati yang memutuskan siapa yang kamu inginkan dalam hidup ini','Dengan sikap yang akan menentukan siapa yang akan bertahan dalam hidupmu','Menjadi dewasa dan bijak diawali dengan menjadi muda dan bodoh','Lakukanlah apa yang paling kamu takutkan dalam hidupmu','Bekerjalah seolah kamu tak butuh uang, Cintailah seolah Kamu takkan Tersakiti dan menarilah seakan tak ada yang melihatmu','Jika hari ini sudah sempurna maka Apalah arti hari esok','Bintang pun tak kan bersinar tanpa kegelapan','Suatu saat aku akan menjadi tempat yang akan selalu kau rindu','Guru terbaik kamu adalah kesalahan terakhir yang kamu lakukan','Diam adalah respon terbaik untuk orang bodoh','Jangan pernah membuat keputusan yang permanen untuk perasaan yang sementara','Jika Allah yang menjadi alasan anda untuk hidup maka takkan pernah ada alasan untuk menyerah','Kegagalan ada bukan untuk ditakuti tetapi untuk dipelajari','Anda saat ini adalah hasil dari pengalaman anda','Keberuntungan adalah saat kesempatan datang, anda telah matang dengan segala persiapan','Jangan Menunggu hari yang terbaik untuk melangkah karena setiap hari sangatlah berharga','Keputusan yang baik diperoleh dari pengalaman, dan pengalaman didapat dari keputusan yang buruk','Setiap waktu yang anda lewati dengan sia-sia hanya menjauhkan anda dan semakin jauh dari kata sukses','Realitas kehidupan Anda adalah deskripsi dari jiwa dan pikiran anda','Berani mengambil keputusan maka anda telah melangkah 10 kali lebih cepat untuk sukses','Allah masih mencintai anda jika masih banyak cobaan dan tantangan hidup yang datang menghampiri anda. Allah percaya bahwa anda mampu melaluinya, maka jagalah kepercayaan itu','Ketika orang mengatakan anda sudah berubah sebenarnya itu hanya karena anda berhenti melakukan apa yang mereka ingin anda lakukan','Jangan menukar apa yang sangat anda inginkan untuk apa yang Anda ingin untuk saat ini','Orang-orang yang mengikuti keramaian biasanya tersesat di dalamnya','Orang tua saya bekerja terlalu keras untuk saya bukan supaya saya tidak hanya menjadi orang biasa tetapi menjadi orang luar biasa','Anda menghalangi impian anda ketika anda mengizinkan ketakutan Anda tumbuh lebih besar dari keyakinan anda','Sang juara percaya kepada dirinya sendiri bahkan ketika orang lain tidak percaya','Hanya mereka yang berani mengambil resiko yang jauh pasti dapat menemukan Seberapa jauh seseorang dapat pergi','Tunjukkan teman Anda, saya akan menunjukkan masa depan Anda','Beberapa orang ingin sesuatu terjadi, beberapa orang berharap itu akan terjadi, yang lain mewujudkannya jadi kenyataan','Jika anda menghabiskan waktu untuk mencoba menjadi baik dalam segala hal, Anda tidak akan pernah menjadi hebat dalam apapun','Sebuah perjalanan ribuan mil dimulai dari langkah kecil','Apa yang akan Anda kerjakan, Ketika anda tahu anda tidak mungkin gagal','Ketika kita memiliki satu sama lain, kita Memiliki segalanya','Kebesaran sebenarnya dapat ditemukan dalam hal hal kecil yang terkadang kita lewatkan','Bekerja keraslah, Bermimpilah lebih besar dan jadilah yang terbaik','Apa yang kita pikirkan menentukan apa yang akan terjadi pada kita. Jadi jika kita ingin mengubah hidup kita, kita perlu sedikit mengubah pikiran kita.','Seseorang yang berani membuang satu jam waktunya tidak mengetahui nilai dari kehidupan.','Saya memiliki filosofi yang sederhana: isi apa yang kosong, kosongkan apa yang terlalu penuh.','Hidup adalah cermin dan akan merefleksikan kembali kepada para pemikir mengenai apa yang mereka pikirkan.','Anda di sini hanya untuk persinggahan yang singkat. Jangan terburu, jangan khawatir. Yakinlah bahwa Anda menghirup wangi bunga sepanjang perjalanan.Hidup adalah cermin dan akan merefleksikan kembali kepada para pemikir mengenai apa yang mereka pikirkan.','Hidup adalah serangkaian perubahan yang alami dan spontan. Jangan tolak mereka karena itu hanya membuat penyesalan dan duka. Biarkan realita menjadi realita. Biarkan sesuatu mengalir dengan alami ke manapun mereka suka.','Hidup yang baik adalah hidup yang diinspirasi oleh cinta dan dipandu oleh ilmu pengetahuan.','Kenyataannya, Anda tidak tahu apa yang akan terjadi besok. Hidup adalah pengendaraan yang gila dan tidak ada yang menjaminnya.','Hidup adalah mimpi bagi mereka yang bijaksana, permainan bagi mereka yang bodoh, komedi bagi mereka yang kaya, dan tragedi bagi mereka yang miskin','Hidup itu bukan soal menemukan diri Anda sendiri, hidup itu membuat diri Anda sendiri.','Hal yang paling penting adalah menikmati hidupmu, menjadi bahagia, apapun yang terjadi.','Hidup itu sederhana, kita yang membuatnya sulit.']
					const vasi = motiv[Math.floor(Math.random() * motiv.length)]
                    m.reply(vasi)
                    limitAdd(m.sender)
            }
            break
            case 'dilanquote': case 'quotedilan': case 'katadilan': {
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                const katadilan = JSON.parse(fs.readFileSync('./database/json/dilan.json'))
                hasil = katadilan[Math.floor(Math.random() * (katadilan.length))]
                m.reply(hasil)
                limitAdd(m.sender)
            }
            break
            case 'quoteskehidupan':
                // Case Case & Case
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
               const quotes =['Jangan pernah mengabaikan apapun yang terjadi, suatu saat akan sadar dan menyesal, ingat tuhan akan selalu memberikan penyesalan terakhir ...','Aku percaya, suatu hari nanti, aku akan memiliki semua hal yang telah aku doa kan selama ini.','Balas dendam yang paling terbaik adalah mengubah dirimu menjadi yang lebih baik lagi.','Hidupku jauh dari kata mewah, kalau kalian lihat aku selalu senang, itu karena aku tau cara menikmati hidup.','Persahabatan bukan tentang orang yang baik didepanmu, tetapi tentang orang yang tetap baik di belakangmu.','Tidak semua bisa dimiliki. Jaga yang sudah termiliki. Tidak semua bisa diterima. Pertahankan yang sudah ada.','Mereka pikir hidupku enak, padahal aku hanya berusaha untuk tidak mengeluh.','Ibu, sebajingan apapun anakmu ini, Hatiku selalu ingin bisa Membahagiakanmu.','Tidak semua hari berjalan dengan baik tapi ada hal baik di setiap harinya.','Pikiran negatif tidak akan pernah memberi kamu kehidupan yang positif','Mereka pikir hidupku enak, padahal aku hanya berusaha untuk tidak mengeluh.','Saya percaya bahwa satu-satunya keberanian yang dibutuhkan oleh seseorang adalah keberanian untuk mengikuti impian Anda sendiri.','Arti hidup adalah menemukan hadiahmu. Tujuan hidup adalah untuk memberikannya.','Ada kalanya kita dicari ketika diperlukan, Dan dilupakan setelah dapat apa yang dia inginkan.','Aku suka tidur, Bukan karena aku pemalas Hanya saja mimpiku lebih indah dari kenyataan.','Jika kamu terlahir bukan dari keluarga kaya, Maka pastikanlah keluarga kaya berasal dari mu.','Saat kamu memberi orang lain, sesungguhnya pemberian itu adalah untukmu. Dan saat kamu mendoakan orang lain, sesungguhnya doa itu juga untukmu. Maka sibuklah membahagiakan orang lain, agar kemudian dunia akan sibuk membahagiakanmu.','Pernah salah pilih, Pernah salah jalan, Karena ego, Karena ceroboh, Tapi kalau bukan karena salah, Kita tidak akan pernah belajar.','Teruntuk hatiku semoga kamu sabar dan tabah bukan untuk hari ini, tapi untuk setiap hari.','Apapun yang kamu alami hari ini tetaplah terlihat baik-baik saja, are you oke?','Wajar kulitku hitam, Tanganku kasar, Penampilanku dekil, KARENA KEGIATANKU KERJA BUKAN MEMINTA.','Sibuklah mencintai hidupmu sampai kamu tidak punya waktu untuk membenci, menyesal, ataupun merasa takut.','AKU BAHAGIA KARENA BERSYUKUR, BUKAN BERSYUKUR KARENA BAHAGIA.','Hanya karena kamu bisa melakukan apa saja, bukan berarti kamu mampu melakukan segalanya.','Kegagalan adalah kesempatan untuk memulai lagi dengan cara yang lebih cerdas.','Dulu waktu masih kecil tidak sabar pengen jadi dewasa, tapi ketika udah besar, aku baru sadar bahwa jaman kecil lah yang paling bahagia.','Saya adalah saya, Saya bukan dia ataupun mereka Jika ingin bersama saya, Terimalah apa adanya.','Online ku sangatlah santai ada yang chat ya syukur, tidak ada yang chat ya tidur.','Kamu tidak begitu dalam mengenaliku, jadi tolong berhentilah sok tau tentang hidup ku.','Saya terlahir dari keluarga sederhana jadi maaf kalau penampilan saya apa adanya.','Dirimu sebenarnya adalah apa yang kamu lakukan di saat tiada orang yang melihatmu.','Ada dua pilihan hidup di pagi hari. Kembali tidur untuk melanjutkan mimpi, atau bangun tidur untuk mewujudkan mimpi.','Orang yang dibelakangku membicarakan diriku, keadaanku, keburukanku, mungkin ia membahayakan dalam duniaku tapi yang jelas ia bermanfaat untuk akhiratku, maka biarlah ia meneruskannya. *#Jangan lupa tersenyum untuk setiap harinya*','Lupakanlah masalahmu sejenak, dan berbahagialah kamu.','Mencintai memang tentang penerimaan. Tapi bukan untuk dibodohi.','Hidup adalah keseimbangan antara menggenggam dan melepaskan.','Jalanan yang sulit seringkali membawamu ke tujuan yang paling indah.','Kita tidak gagal. Kita hanya telah belajar dari 1000 cara yang salah.','Kalau kamu menginginkan sesuatu yang belum pernah kamu miliki, kamu harus melakukan sesuatu yang belum pernah kamu lakukan.','Jangan berhenti sebelum kamu bangga dengan dirimu sendiri.','Siapapun yang kamu cari.. Percayalah, dia juga sedang mencarimu.','Bahagia itu tujuan, kecewa itu jalan. Seseorang tidak akan sampai ke tujuan, tanpa melewati sebuah jalan.','Teruslah update status, setidaknya orang lain tau bahwa kamu masih hidup.','Bukan aku yang hebat. Tapi doa orang tua ku.','Kalau kamu sering disakiti orang itu artinya kamu orang baik. Ingat, cuma pohon berbuah yang dilempari batu.','Dalam hidup ini, Sadar itu penting loh, Jangan sabar mulu, CAPEK!','Kamu mempunyai banyak pilihan hidup untuk itu, Pilihlah hanya yang bisa benar-benar menjadikanmu lebih baik.','Aku kuat karena aku pernah lemah. Aku berani karena aku pernah merasa takut. Aku bijak karena aku pernah melakukan kesalahan.','Bukan berdoa untuk meminta hidup yang lebih mudah, Tapi berdoalah untuk bisa menjadi manusia yang lebih tangguh dalam menjalani hidup.','Selalu ada kisah yang kamu tidak tau di balik setiap orang. Selalu ada alasan mengapa mereka menjadi seperti itu. Pikiran hal ini sebelum kamu mencoba menghakimi orang lain.','Orang lain hanya melihat hasil akhir tanpa pernah tau bagaimana lelahnya berproses.','Kebahagiaan bukan milik mereka yang memiliki segalanya, Tetapi untuk mereka yang bisa menghargai apa yang mereka miliki.','Aku hanya ingin diperlakukan spesial lagi.','Terkadang, Hal yang menahan mu untuk bergerak maju hanyalah Pikiranmu sendiri.','Dua hal Menggambarkan dirimu : Kesabaranmu saat tak punya apa-apa Dan Sikapmu saat memiliki segalanya.','Kita hanya bersama bukan bersatu.','Saat kamu benar Semua orang lupa Saat kamu salah Semua orang ingat','Uang memang bukan segalanya tapi Tanpa uang kehidupan ini akan susah','Bila kamu Yakin , Tak perlu ada kata Mungkin','Jadilah kuat untuk melepaskan, Dan sabar untuk apa yang layak kamu dapatkan.','Pembenci itu sangat pemilih, Mereka hanya membenci orang yang hidupnya lebih baik  daripada hidup mereka.','Pasangan adalah cerminan diri kita. Maka teruslah perbaiki diri menjadi lebih baik setiap harinya, Maka pasangan terbaikpun akan diberikan tuhan.','Persahabatan adalah berbagi suka duka dan menua bersama.','Tersenyumlah ketika melihat masa lalu yang kelam, Karena engkau telah berhasil melewatinya.','Ketika banyak permasalahan yang menghampiri dirimu janganlah meminta untuk lekas dihilangkan. Tapi mintalah agar kamu bisa kuat untuk menyelesaikan.','Kehidupanmu adalah buah dari tindakan yang kamu lakukan. Tidak ada yang bisa disalahkan selain dirimu.','Kehidupan bukanlah masalah yang harus diselesaikan namun kenyataan yang harus diambil pengalamannya.','Semoga di tahun baru, Buku baru, Penulisan yang baru dengan isi yang lebih menarik untuk diimbas kembali di penghujung cerita nanti.','Masa lalu memang menyimpan banyak kenangan, Namun itu bukan alasan untuk tidak terus melangkah ke depan.','Santailah, Nikmati saja hidup, Tersenyumlah lebih banyak, Tertawalah lebih banyak, Dan janganlah memikirkan banyak hal.','Setiap perbuatan yang membahagiakan sesama adalah suatu sikap yang mencerminkan pribadi yang mulia.','Jarang yang sadar kalau kegagalan juga merupakan kesempatan emas untuk menuju kesuksesan.','Lebih baik bekerja keras dalam kediamnya kesunyian, Biarkan nanti sukses mu yang berbicara.','Belajar dari kesalahan masa lalu merupakan salah satu langkah awal untuk maju.']
               const quo = quotes[Math.floor(Math.random() * quotes.length)]
               crot = await getBuffer(`https://i.ibb.co/Bj8tD93/IMG-20210126-WA0018.jpg`)
               client.sendMessage(from, crot, image, { quoted: mek, caption: '*Quotes Kehidupan*\n\n'+ quo })
               limitAdd(m.sender)
               break
   case 'quotesislami':
                // Case Case & Case
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
               const islami =['Hal yang paling manis adalah ketika seseorang menyebutkan nama kamu di tahajjud mereka.','Ya Allah panggillah diriku dan orang tuaku ke baitullah dalam keadaan sehat walafiat.','Ya Allah semoga seseorang yang engkau jodohkan denganku adalah seseorang yang saat ini sedang aku perjuangkan.','Allah tidak pernah tidur. Semua pasti akan di balas kelak. Orang-orang jahat yang sekarang bisa tertawa karena banyak uang, berkuasa, tapi besok-besok mereka semua di balas seadil-adilnya.','Jangan putus asa, Allah tidak akan mengecewakan hambanya yang ingin memperbaiki diri.','Percayalah orang yang menasehatimu untuk sholat adalah dia yang paling mencintaimu.','Bukannya Allah tidak tahu sedihmu, Tapi Allah tahu kalau kamu itu kuat.','Bacalah Al-Quran, Ia akan menenangkan hatimu meskipun engkau tidak memahami artinya.','Saat kita sakit hati sama omongan orang, saat itu juga sebenarnya Allah ngajarin kita buat jaga omongan kita ke orang lain. Sederhana bukan?','Di dunia ini orang paling baik pun bisa dicela, dan bahkan orang paling jahat sekalipun bisa di bela.','Al-Quran adalah teman yang tidak akan mengecewakan kamu di dunia dan akhirat.','Cara Allah menjawab doa hambanya : Iyaa.. aku beri untukmu sekarang. Tunggu, aku ingin melihat dulu perjuanganmu. Tidak, aku punya yang lebih baik untukmu.','Dan Allah tidak akan mengadzab mereka selama mereka mau Memohon ampun kepada-Nya. [Al-Anfaal, 8:33]','Kesabaran itu ada dua macam : Sabar atas sesuatu yang tidak kamu ingin. Sabar menahan diri dari sesuatu yang kamu ingini. -Ali bin Abi Thalib','Ambillah kebenaran, jika kamu telah mendengarnya. Karena sungguh di atas kebenaran ada cahaya. (HR. Abu Daud)','Sholatlah agar hatimu tenang, Istighfarlah agar kecewamu hilang, Berdoalah agar bahagiamu segera datang.','Surga itu mahal.. Akan tetapi orang miskin tetap mampu membelinya, Karena harganya bukan pada Harta melainkan Taqwa.','Ya Allah... Perbaikilah lisanku, Perbaikilah hatiku, Perbaikilah akhlakku, Perbaikilah hidupku, Aamiin..','Semoga hari ini Allah memudahkan setiap urusan kita, melapangkan hati kita serta meringankan langkah kita, dalam kebaikan kita Aamiin.','Peganglah aku, bacalah aku setiap hari, karena aku akan menjadi penerang didalam kuburmu nanti. #Al-Quran','Kematian..Kamu terlalu banyak bercanda. Hingga sampai kamu lupa, kematian mungkin tidak menunggumu selesai tertawa.','Jangan khawatirkan rizkimu, karena Allah telah menjaminnya untukmu, namun khawatirkanlah amalanmu, karena Allah tidak menjamin surga-Nya untukmu..','Wahai orang-orang yang beriman! Ingatlah kepada Allah, Dengan mengingat (nama-Nya) sebanyak-banyaknya dan bertasbihlah kepada-nya pada waktu pagi dan petang.','Aku sangat ingin menjadi pemburu surga. Namun aku lupa bahwa aku juga buronan neraka.','Karena aku percaya apapun yang menjadi milikku akan tetap menjadi milikku. Sejauh apapun dia (mencoba) pergi. Sejauh apapun usaha orang lain ingin merebutnya dariku. Aku hanya perlu percaya pada Allah bahwa yang menjadi milikku tidak akan pernah menjadi milik orang lain.','Andai hidayah itu seperti buah yang bisa kubeli, maka akan kubeli berkeranjang-keranjang untuk aku bagikan kepada orang-orang yang aku cintai.','Bila kamu tidak melihatku di syurga. Tolong tanya kepada Allah dimana aku, Tolonglah aku ketika itu..','Hanya Allah yang mengerti bagaimana sulitnya menahan sabar tanpa harus bercerita panjang lebar.','Letakkan hpmu lalu ambil air wudhu, shalatlah kamu, Allah menunggu curhatan darimu.','Maafin aku Ya Allah Gara gara aku mencintai dia tapi tidak pasti, sampai aku lupa mencintai mu juga.','Akan ada saatnya setelah salam dari sholatku, tanganmu yang pertama kali kusentuh.','Mungkin maksud Tuhan mempertemukan kamu dengannya adalah, sekedar mengingatkan bahwa tidak semua yang kamu inginkan bisa kamu dapatkan.','Percayalah Seorang wanita yang mencintai Allah. Allah akan berikan lelaki terbaik untuk menjaganya.','Berterimakasihlah kepada tuhan, Yang memberimu hidup dan kehidupan.','Mungkin kamu hanya harus sedikit peka untuk menyadari petunjuk dari Tuhan atas doa-doamu.']
               const isl = islami[Math.floor(Math.random() * islami.length)]
               islamya = await getBuffer(`https://i.ibb.co/dPnjvD3/IMG-20210127-WA0018.jpg`)
               client.sendMessage(from, islamya, image, { quoted: mek, caption: '*Quotes Islami*\n\n'+ isl })
               limitAdd(m.sender)
               break	
   case 'tafsirsurah':
    if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
               if (!args[0]) return m.reply(`Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`)
               if (!args[1]) return m.reply(`Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`)
               res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
               txt = `*「 Tafsir Surah 」*
           
*Pendek :* ${res.result.data.tafsir.id.short}
           
*Panjang :* ${res.result.data.tafsir.id.long}
           
( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
                   reply(txt)
                   limitAdd(m.sender)
                   break
   case 'quotesnasehat': case 'quotenasehat':{	
    if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)			
               const nasehat =['Jangan pernah mengabaikan apapun yang terjadi, suatu saat akan sadar dan menyesal, ingat tuhan akan selalu memberikan penyesalan terakhir ...','Ingat iya.. Perilaku mu bisa mengubah perasaan seseorang.','Setia itu bukan yang selalu ada, namun saat tak bersama dia tahu hatinya milik siapa.','Kamu perlu belajar satu hal : "Menghargai seriusnya seseorang."','Jangan cari yang sempurna, Sempurnakan saja yang ada.','Ketika seseorang menghina kamu, itu adalah sebuah pujian bahwa selama ini mereka menghabiskan banyak waktu untuk memikirkan kamu, bahkan ketika kamu tidak memikirkan mereka.','Yang terbaik tidak akan hilang. Jika dia hilang maka dia bukanlah yang terbaik.','Percayalah. Suatu hari nanti pasti akan ada seseorang yang bangga memilikimu.','Tidak ada karya yang pernah dibuat oleh seorang seniman yang malas.','Jika seseorang memberimu perhatian jangan pernah mengabaikannya karena suatu saat perhatian sekecil itu kamu rindukan saat kamu kesepian.','Bersyukurlah.. Untuk segala apapun yang engkau miliki saat ini, sebab nikmat itu akan bertambah ketika kamu dapat mensyukuri apa yang telah diberi saat ini. #Buat diri ini jangan banyak mengeluh yah.','Ada perbedaan antara menyerah dan tau kapan kamu merasa cukup dalam berusaha.','Jangan sampai kesenanganmu menyusahkan orang lain. Jangan pula kesusahanmu menyenangkan orang lain.','Semakin banyak kamu memberi, semakin banyak pula yang akan kembali padamu.','Jangan pernah bandingkan akhir kesuksesan orang lain dengan pertengahan prosesmu.','Lakukan apa yang kamu bisa, dengan apa kamu miliki, dimanapun kamu berada.','Hidup memang bukan balapan, tetapi kamu memang perlu untuk terus bergerak maju.','NIKMATI HIDUPMU, LUPAKAN UMURMU.','Sebaik-baiknya permintaan maaf adalah membaiknya tingkah laku.','Belajarlah memahami bahwa tidak semua keinginan bisa terpenuhi, barangkali itu adalah obat yang terbaik untuk mencegah kecewa dan sakit hati.','Kamu akan menemukan yang terbaik, ketika kamu sudah berhenti membanding-bandingkan.','Jangan menilai orang dari masa lalunya karena kita semua sudah tidak hidup disana. Semua orang bisa berubah, biarkan mereka membuktikannya.','Jika dia tidak merasakan kehadiranmu, buat dia merasakan kepergianmu.','Orang pintar mampu memecahkan masalah. Orang bijak mampu menghindarinya.','Bersikap tidak lagi peduli lebih baik dari pada balas dendam.','Tegas akan diri sendiri, buang pikiran negatif dan lakukan yang baik. Kegelisahan hanya milik mereka yang putus asa.','Jangan pikirkan kegagalan kemarin, hari ini sudah lain, sukses pasti diraih selama semangat masih menyengat.','Memaafkanmu bukan berarti memberimu kesempatan sekali lagi.','Berubah menjadi lebih baik adalah pilihan. Tapi, merasa paling baik adalah kesalahan.','Jangan pernah bandingkan dirimu dengan orang lain, tapi bandingkanlah dengan dirimu yang lalu, apakah hari ini sudah lebih baik?','Ketahuilah orang yang paling sering memberi nasihat kepadamu, itulah orang yang paling mencintai kamu.','Jangan pernah berhenti belajar, karena hidup tidak pernah berhenti mengajarkan.','Salah satu tanda dirimu tidak berakhlak adalah main HP ketika ada orang yang berbicara.','Raihlah kesuksesan yang tidak seseorangpun berfikir kamu bisa meraihnya. Buktikan pada mereka kalau kamu bisa!','Kesalahan adalah bukti nyata kalau kamu pernah mencoba. Jangan takut salah. Takutlah untuk melakukan kesalahan-kesalahan yang sama dua kalinya.','Cepat atau lambat bukan masalah. Selama kamu tetap bergerak maju, tidak ada akhirnya kamu akan tetap sampai tidak ada tujuan.','Jika kamu tidak bisa membahagiakan orang lain, Setidaknya janganlah kamu tambah dukanya.','Teruslah berusaha sampai temanmu berkata kepadamu "Sombong iya sekarang."','Ketika kamu melakukan sebuah kesalahan, Akuilah dan jangan ragu untuk meminta maaf. Tidak pernah ada satupun orang dalam sejarah yang mati tersedak karena menelan gengsinya sendiri.','Syukuri yang menyayangimu, Maafkan yang menyakitimu.','Tunjukkan keburukanmu, lalu lihat siapa yang bertahan.','Kamu boleh lelah, tetapi tidak boleh menyerah untuk selamanya.','Jangan pernah lupa bilang "Terima Kasih." Jangan pernah gengsi bilang "Maaf." Jangan pernah jadi terlalu sombong untuk bilang "Tolong."','Masa lalu tidak bisa berubah, diubah, dilupakan, ataupun di hapus. Masa lalu hanya bisa di terima','Kita ini.. sangat pintar menghakimi, Namun bodoh dalam memperbaiki diri.','Tidak peduli seberapa baiknya kamu, Kebaikan tidak akan berarti apa-apa jika kamu memberikan kepada orang yang salah.','Orang sabar selalu menang, Orang tamak selalu rugi, Orang marah selalu kalah, Orang baik selalu diuji.','Carilah tempat dimana kamu bisa dihargai, Bukan dibutuhkan. Karena banyak orang mencarimu hanya saat butuh saja, Hingga lupa bagaimana cara menghargaimu.','Melupakan orang yang melukaimu adalah hadiahmu untuk mereka. Memaafkan orang yang melukaimu adalah hadiahmu untuk dirimu sendiri.','Maafkan orang yang menyakitimu... Bukan karena mereka pantas di maafkan, Tapi karena kamu harus berbahagia.','Tetaplah kuat, Tetaplah positif, Buatlah mereka bertanya-tanya bagaimana kamu masih tetap bisa tersenyum.','Jangan meninggalkan yang pasti demi yang mungkin. Sebab semua kemungkinan, belum tentu menjadi kepastian.','Seseorang pernah berkata padaku, Merelakan bukan berarti menyerah, Tapi tidak bisa dipaksakan.','Ikuti alurnya, Nikmati prosesnya, Tuhan tau kapan kita harus bahagia.','Usia hanyalah angka, Hanya mereka yang terus berusaha yang berhasil.','Jangan pernah meremehkan siapapun! Karena sukses adalah balas dendam Terbaik.','Pria sejati.. Harus menyelesaikan apa yang sudah dimulai.','Jika kau ingin terbang, Kau harus melepaskan hal-hal yang membuatmu berat.','Siapapun yang meremehkan mu hari ini, Suatu saat harus kamu lewati.','Jangan Mencintai terlalu mudah, Jangan Percaya terlalu cepat, Jangan Berhenti terlalu dini, Jangan Berharap terlalu tinggi, Jangan Bicara terlalu banyak.','Jadilah orang baik tapi jangan biarkan orang lain mengambil keuntungan dari mu. Ketahuilah kapan kamu harus bilang tidak.','Sahabat sejati adalah mereka tau semua kelemahan mu, Tapi tidak menggunakan nya untuk menjatuhkan mu.','Ada tiga hal yang harus dimiliki dalam hidup yaitu : Perubahan, Pilihan dan Prinsip.','Orang bodoh mengira dirinya bijak. orang bijak tau dirinya bodoh.','Jatuh cintalah seperlunya.. Kemudian patah hatilah secukupnya. Karena semua ada porsinya, Karena semua ada masanya.','Kita tidak pernah tau jalan hidup seseorang.. Maka ada baiknya jika kita tidak menghakiminya atas keputusan dalam hidupnya.','Jangan pernah menyesal mengenal seseorang dalam hidupmu, Orang baik akan memberi mu Kebahagiaan, Orang jahat akan memberi mu Pengalaman, Bahkan seburuk-buruk manusia akan memberi mu Pelajaran.','Jangan menilai kedewasaan dari usia seseorang, Karena itu bukan jaminan.']
               const nsh = nasehat[Math.floor(Math.random() * nasehat.length)]
               client.sendMessage(from, {image: fs.readFileSync('./src/dbimage/nasehat.jpg'), caption: '*Quotes Nasehat*\n\n'+ nsh })
               limitAdd(m.sender)
   }
               break	
   case 'quotescinta': case 'quotecinta':{	
    if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
               const cinta =['Tidak ada obat untuk cinta kecuali untuk lebih mencintai','Cinta terdiri dari satu jiwa yang mendiami dua tubuh','Cinta tidak membuat dunia berputar. Cinta itulah yang membuat perjalanan itu berharga','Lebih baik mencintai dan kehilangan daripada tidak pernah mencintai sama sekali','Kita paling hidup saat kita sedang jatuh cinta','Cinta adalah guru yang lebih baik daripada kewajiban','Cinta tidak menemukan orang yang sempurna. Tapi, melihat orang yang tidak sempurna dengan cara yang sempurna','Cinta bukanlah sesuatu yang kamu temukan. Cinta adalah sesuatu yang menemukanmu','Cinta itu seperti angin. Kamu tidak dapat melihatnya, tetapi kamu dapat merasakannya']
               const cin = cinta[Math.floor(Math.random() * cinta.length)]
            //    cta = await getBuffer(`https://i.ibb.co/vL5x6F7/IMG-20210126-WA0018.jpg`)
               client.sendMessage(from, {image: fs.readFileSync('./src/dbimage/cinta.jpg'), caption: '*Quotes Cinta*\n\n'+ cin })
               limitAdd(m.sender)
   }
               break
   case 'quotesmotivasi': case 'quotemotivasi':{	
    if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)		
               const motiv =['Nilai sebuah tindakan terletak dalam usaha menyelesaikan sampai tuntas','Kebaikan adalah seorang yang matanya penuh perhatian, serta tangannya yang penuh manfaat','Hiduplah seperti kamu akan mati besok, dan berbahagialah seperti kamu akan hidup selamanya','Kita tidak usah saling menyalahkan, agar dimasa depan tak ada yang menuntut akan kesalahan','Ketika semua hal tidak sejalan dengan anda, ingatlah bahwa sebuah pesawat terbang melawan angin, bukan dengan mengikuti angin','Belajarlah menikmati apa yang kamu miliki, itu akan membuat hidupmu lebih bernilai','Selalu ada kegelapan yang tergelap sebelum terbitnya fajar','Sahabat itu seperti bintang, tak selalu Nampak tetapi selalu ada dihati','Sibuk bukanlah jaminan karir karena hasil jauh lebih didengar orang','semua kemajuan tidak akan ada tanpa kesalahan, kesalahan adalah bagian dari kemajuan selama diakui dan diperbaiki','Sukses meninggalkan jejak, gagal meninggalkan pelajaran, diam meninggalkan penyesalan','Keraguan bersahabat dekat dengan kegagalan','uang tidak merusak seseorang, keserakahan lah yang merusak manusia','Kepercayaan tidak bisa dibeli, tapi kepercayaan bisa dipelihara','Impian, target, kemauan dan tujuan semuanya sia-sia tanpa tindakan','usia bisa berbohong tapi kedewasaan tidak','Ada yang lebih berharga dari uang dan emas yaitu waktu','Tidak ada yang gagal mereka hanya berhenti terlalu cepat','Terasa sakit selalu hampir tidak ada rasanya setelah apa yang kita perjuangkan tercapai','Seseorang tidak bisa sukses seringkali karena kurangnya keberanian untuk mencobaterasa sakit selalu hampir tidak ada rasanya setelah apa yang kita perjuangkan tercapai','Bicaralah secukupnya, lakukanlah semampunya. Jangan melakukan sebaliknya','Ada saatnya penundaan memberikan keuntungan terutama saat terlalu emosi untuk mengambil keputusan','jangan takut karena masalah yang anda hadapi tidak lebih besar dari jalan keluarnya, Allah siapkan bagi andaAda saatnya penundaan memberikan keuntungan terutama saat terlalu emosi untuk mengambil keputusan','Kadang cara terbaik untuk Memanfaatkan peluang adalah dengan mengatakan tidak pada peluang baru dan fokus mengembangkan apa yang sudah ada di tanganjangan takut karena masalah yang anda hadapi tidak lebih besar dari jalan keluarnya, Allah siapkan bagi andaAda saatnya penundaan memberikan keuntungan terutama saat terlalu emosi untuk mengambil keputusan','atasan hanya memberikan tugas berat pada karyawan terbaik, Allah hanya memberikan ujian pada pada manusia terbaikKadang cara terbaik untuk Memanfaatkan peluang adalah dengan mengatakan tidak pada peluang baru dan fokus mengembangkan apa yang sudah ada di tanganjangan takut karena masalah yang anda hadapi tidak lebih besar dari jalan keluarnya, Allah siapkan bagi andaAda saatnya penundaan memberikan keuntungan terutama saat terlalu emosi untuk mengambil keputusan','berusaha dan gagal Ternyata jauh lebih melegakan daripada pasrah melihat ke kanan dengan tangan terlipat','lewat kesulitan lah manusia belajar, lewatnya kenyamanan lah manusia Terlena','Saat kita merasa hebat kita baru saja kehilangan separuh pangkat kita karena lengah untuk terus belajar','hidup seseorang telah ditebak, tapi Nasib orang malas mudah untuk ditebak','Orang pintar itu biasa orang hebat itu luar biasa tapi orang berani lah pemenangnyahidup seseorang telah ditebak, tapi Nasib orang malas mudah untuk ditebak','Orang hebat membicarakan ide, orang menengah membicarakan pengalaman, orang lemah membicarakan orang lainOrang pintar itu biasa orang hebat itu luar biasa tapi orang berani lah pemenangnyahidup seseorang telah ditebak, tapi Nasib orang malas mudah untuk ditebak','Anda tidak akan mengubah kehidupan sampai anda mengubah Apa yang anda lakukan setiap hari','bertahan saja tidak cukup anda perlu bereaksi terhadap tekanan dan merubah keadaan','masa depan kita tergantung pada apa yang kita lakukan pada saat ini. Maka jangan sia-siakan waktumu sekarang','Nilai manusia ditentukan bukan dari apa yang diperoleh melainkan apa yang telah diberikan','Malas adalah kemenangan saat ini dan kekalahan di masa nanti','sebuah masalah merupakan kesempatan bagi anda untuk mengeluarkan kemampuan terbaik anda','Kematian tidak dapat mengubur perbuatan baik seseorang','Asal percaya dengan sungguh-sungguh apapun keyakinan Anda dapat menjadi kenyataan','Jika ada hari buruk maka pasti akan hari ada hari baik tugas kita adalah terus bergerak majuAsal percaya dengan sungguh-sungguh apapun keyakinan Anda dapat menjadi kenyataan','Mengeluh adalah cara paling buruk dalam menyelesaikan masalah','Tetap Bertahan dan setia pada tujuan saat menghadapi Hambatan adalah kunci kesuksesan','Tidak perlu keahlian khusus untuk mencari musuh, tapi perlu kesetiaan untuk mempertahankan teman','Orang tua bukan hanya punya kekuatan untuk menatap juga untuk mengalah','Keuletan adalah tanda jadi kesuksesan','cepat atau lambat mereka yang menang adalah mereka yang berfikir dan yakin bahwa mereka bisa','Jaga terus Api Harapan Anda seperti menjaga hidup anda sendiri','Saat semua jalan tertutup. Buatlah jalan dan berserahlah kepada Allah','lari dari masalah bukanlah penyelesaian masalah, hadapi dan Belajarlah dari masalah itu','Rezeki itu ditangan Allah yang kita lakukan hanya berusaha semaksimal mungkin dan menyerahkan hasilnya kepada yang kuasa','Sukses dimulai dengan melakukan apa yang harus dilakukan','rasa syukur membuat kita tidak pernah merasa kekurangan','goal hanya sekedar goal kalau kita tidak mempunyai alasan yang kuat Mengapa kita harus mencapainya','Apapun yang terjadi Yakinlah bahwa Allah menginginkan kita akan jadi lebih baik karena Kejadian ini','orang yang paling Bahagia bukanlah orang yang punya hal-hal terbaik tapi orang yang bisa menjadikan hal-hal yang ia punya menjadi yang terbaikApapun yang terjadi Yakinlah bahwa Allah menginginkan kita akan jadi lebih baik karena Kejadian ini','Respon kita terhadap masalah menentukan kualitas berita fokus pada solusi','Semua yang terlalu sedikit dan terlalu banyak tidak akan membawa kebaikan','Tidak semua usaha kita dibayar oleh manusia, tapi Allah akan membayarnya kelak','Tidak ada harga untuk waktu, tetapi waktu sangat berharga','Sukses seringkali datang pada mereka yang berani bertindak dan jarang menghampiri pada mereka yang dikalahkan ketakutan','Katakan bisa pasti bisa dengan penuh keyakinan otak kita akan segera mencari solusi','Orang yang tidak belajar dari kegagalan adalah orang yang gagal sesungguhnya','Segala sesuatu masalah yang menimpa Anda tidak akan pernah melatih kekuatan anda untuk menyelesaikannya','Saat orang lain melakukan impianmu itu berarti mereka belum mampu melihat sejauh anda melihat','Allah tidak pernah terlambat ia akan menunjukkan kuasanya, pada detik terakhir sekalipun','Bukan banyaknya panah yang menentukan kemenangan tapi tajam panah dan tujuannya yang menentukan','Mengeluh itu sisi lain dari pemborosan, pemborosan waktu dan energy','Pikiran negatif sangat berkuasa bila diberi kesempatan, jadi jangan memberinya kesempatan','Cinta akan membuat kita menjadi orang terkaya di dunia, oleh karena itu mulailah mencintai','Cemas yang berlebihan tidak akan mengubah apapun kecuali merusak diri sendiri','Hidup ini sederhana terkadang pikiran manusia yang membuatnya rumit','Siapa yang bisa menerima kelemahannya sesungguhnya baru saja menambah satu kelebihan pada dirinya','Ada saatnya dimana kekalahan rasa manis yaitu Saat anda sudah melakukan yang terbaik','Menabung itu hanya untuk mempertahankan kekayaan, untuk meningkatkannya berinvestasilah','Jika selamanya anda bermain aman, selamanya juga Anda di tempat yang sama','Lari dari masalah akan membuat masalah menjadi lebih besar, menghadapinya akan membuat anda menjadi lebih besar','Yang menyedihkan bukanlah bidikan yang meleset tapi bidikan tanpa target','Hati yang sedang panas menumpulkan logika dinginkan terlebih dahulu sebelum mengambil keputusan','bila ingin hasil yang besar jangan kerjakan hal yang mudah saja','Jangan biarkan impianmu dijajah oleh pendapat orang lain','Mulailah dengan yang kecil, Kerjakanlah dengan cara yang besar adalah dengan cara yang benar','Pengaruh perkataan orang kepada anda 100% adalah atas izin anda sendiri','Bekerjalah dengan ikhlas karena bekerja tanpa paksaan akan memberi hasil maksimal','Suka belajar, suka jualan, hidup hemat, beli aset suka, sedekah adalah 5 resep Makmur','Lebih baik menjadi raja tikus daripada ekor naga','Kerja keras dan kerja cerdas dapat memastikan keberhasilan dan sedekah dapat memudahkannya','Sakit dalam perjuangan itu hanya berlangsung sementara, namun jika anda menyerah rasa sakit itu akan terasa selamanya','Kegagalan terbesar adalah ketika tidak berani mencoba','Langkah pertama yang diperlukan untuk mendapatkan hal yang anda inginkan adalah memutuskan apa yang anda inginkan','Jangan takut menghadapi masa depan, hadapi dan perjuangkanlah','Dahulukan Allah dalam setiap langkah hidupmu maka semuanya akan ditambahkan kepadamu','Kesulitan adalah hujan terbaik untuk menunjukkan kualitas diri yang sebenarnya','Kesalahan dan kegagalan adalah guru terbaik jika kita mau jujur mengakui dan belajar darinya','Diam belum tentu menyelesaikan masalah tapi setidaknya tidak membesarkan masalah','Pemenang sejati selalu memberikan 100% upayanya, bahkan ketika tidak seorang pun melihatnya','Memaafkan orang lain bagai Menyiram air Bara dendam di hati baik untuk kesehatan kita','Jenius adalah 1 inspirasi dan 99 keringat tidak ada yang dapat menggantikan kerja keras','Disiplin memang tidak mudah tapi tanpa kedisiplinan hidup anda akan jauh lebih sulit','Orang yang berhenti belajar akan menjadi pemilik masa lalu, orang yang terus belajar akan menjadi pemilik masa depan','Hujan tidak hanya datang sendirian Ia datang bersama kesejukan, hal buruk tidak datang sendirian ia datang bersama pembelajaran','Menang atau kalah lakukanlah dengan jujur','Lihatlah tantangan sebagai ujian dan lihatlah masalah Sebagai teguran','Lihat ke atas agar terinspirasi lihat ke bawah agar bersyukur','Untuk meraih apa yang benar-benar anda inginkan fokus saja tidak cukup. Anda harus memiliki rasa lapar untuk meraihnya','90% dari kegagalan berasal dari orang-orang yang memiliki kebiasaan membuat alasan-alasan','Allah tidak membenci orang malas, tapi Allah mengizinkan orang rajin mengambil rezeki orang malas','Keajaiban itu nyata bagi mereka yang yakin berserah diri dan bekerja keras','Orang optimis dapat melihat peluang dalam masalah, orang pesimis akan melihat masalah dalam peluangKeajaiban itu nyata bagi mereka yang yakin berserah diri dan bekerja keras','Kualitas pikiran anda menentukan kualitas kehidupan anda','Bersyukur adalah cara ampuh untuk meraih energi yang dahsyat, Sudahkah anda bersyukur hari ini','Jangan mengharapkan sesuatu yang luar biasa jika anda hanya mau melakukan hal yang biasa saja','Kebahagiaan dimulai dengan ketulusan','1000 perkataan dan pengetahuan tidak berarti tanpa adanya satu tindakan yang nyata','Tangkap peluang, kerjakan, selesaikan','Ketika situasi di sekolah Anda tidak menyenangkan. Di saat itulah sebenarnya karakter anda sedang dibentuk','Seorang pemberani bukan orang yang tidak mempunyai rasa takut. Tapi orang yang mampu berjalan diatas rasa takutnya','dalam takut yang tampak adalah hambatan, dalam yakin yang tampak adalah kesempatan','Tidak ada kata gagal yang ada hanya sukses atau perlu belajar lagi sampai berhasil','Menjadi tua itu pasti menjadi dewasa itu pilihan','Kehidupan yang besar dimulai dari mimpi yang besar','Tragedi dalam kehidupan ini bukanlah yang berakhir terlalu cepat, tetapi kita menunggu terlalu lama untuk memulainya','Takut akan kegagalan seharusnya tidak menjadi alasan untuk tidak mencoba sesuatu','Hari ini adalah hari pertama dalam hidup anda. Buatlah hari ini menjadi hari yang terbaik sepanjang hidup anda dan semoga hari esok matahari bersinar dengan terang','Saya berpikir bahwa ada suatu hal yang lebih penting daripada sekedar percaya, tindakan Dunia ini penuh dengan pemimpi ,tidaklah banyak orang yang berani maju ke depan dan Mulai mengambil langkah pasti untuk mewujudkan visi mereka','Anda tidak dapat mengubah masa lalu anda dan janganlah terlalu khawatir dengan hari esok .Hari ini adalah hari yang dapat mengubah masa depan Anda','Allah, aku tahu bahwa saat aku kehilangan sesuatu engkau sedang mempersiapkan hal yang lebih baik untukkuAnda tidak dapat mengubah masa lalu anda dan janganlah terlalu khawatir dengan hari esok .Hari ini adalah hari yang dapat mengubah masa depan Anda','Pergilah sejauh mungkin dan ketika anda tiba di sana anda akan melihat lebih jauh lagiAllah, aku tahu bahwa saat aku kehilangan sesuatu engkau sedang mempersiapkan hal yang lebih baik untukkuAnda tidak dapat mengubah masa lalu anda dan janganlah terlalu khawatir dengan hari esok .Hari ini adalah hari yang dapat mengubah masa depan Anda','Menangis dapat melepaskan tambahan hormon stress, itulah mengapa kita sehabis menangis merasa lebih baikPergilah sejauh mungkin dan ketika anda tiba di sana anda akan melihat lebih jauh lagiAllah, aku tahu bahwa saat aku kehilangan sesuatu engkau sedang mempersiapkan hal yang lebih baik untukkuAnda tidak dapat mengubah masa lalu anda dan janganlah terlalu khawatir dengan hari esok .Hari ini adalah hari yang dapat mengubah masa depan Anda','Ketika cinta itu dipertahankan kamu akan tau siapa yang lebih menghargai tentang sebuah hubungan','Dalam hidup ini banyak orang tahu apa yang harus dilakukan, tetapi hanya sedikit yang melakukan apa yang ia ketahui. Mengetahui tidaklah cukup, Anda harus mengambil tindakan','Berilah perhatian lebih ke orang yang kamu sayangi, itu yang mereka butuhkan','Satu ons tindakan sama berharganya dengan satu ton teori','Kita mungkin terpisah sejak lama ketika tak mampu belajar untuk lebih dewasa','Sayangilah dia walau tidak sesempurna seperti yang kau inginkan','Kecantikan akan mengundang perhatian sikap santun memikat Kalbu','Mengetahui tidaklah cukup kita harus melakukannya, keinginan tak cukup hanya dengan berangan kita harus melakukannya','Kesalahan adalah bukti bahwa kamu sedang mencoba','Betapapun jauhnya air mengalir ia takkan pernah lupa hulunya','Lebih baik sendiri daripada bersama dengan orang yang salahBetapapun jauhnya air mengalir ia takkan pernah lupa hulunya','Lakukan sesuatu hari ini yang akan membuat dirimu berterima kasih di hari-hari mendatang','Waktu yang memutuskan Dengan siapa kamu akan berjumpa','Hati yang memutuskan siapa yang kamu inginkan dalam hidup ini','Dengan sikap yang akan menentukan siapa yang akan bertahan dalam hidupmu','Menjadi dewasa dan bijak diawali dengan menjadi muda dan bodoh','Lakukanlah apa yang paling kamu takutkan dalam hidupmu','Bekerjalah seolah kamu tak butuh uang, Cintailah seolah Kamu takkan Tersakiti dan menarilah seakan tak ada yang melihatmu','Jika hari ini sudah sempurna maka Apalah arti hari esok','Bintang pun tak kan bersinar tanpa kegelapan','Suatu saat aku akan menjadi tempat yang akan selalu kau rindu','Guru terbaik kamu adalah kesalahan terakhir yang kamu lakukan','Diam adalah respon terbaik untuk orang bodoh','Jangan pernah membuat keputusan yang permanen untuk perasaan yang sementara','Jika Allah yang menjadi alasan anda untuk hidup maka takkan pernah ada alasan untuk menyerah','Kegagalan ada bukan untuk ditakuti tetapi untuk dipelajari','Anda saat ini adalah hasil dari pengalaman anda','Keberuntungan adalah saat kesempatan datang, anda telah matang dengan segala persiapan','Jangan Menunggu hari yang terbaik untuk melangkah karena setiap hari sangatlah berharga','Keputusan yang baik diperoleh dari pengalaman, dan pengalaman didapat dari keputusan yang buruk','Setiap waktu yang anda lewati dengan sia-sia hanya menjauhkan anda dan semakin jauh dari kata sukses','Realitas kehidupan Anda adalah deskripsi dari jiwa dan pikiran anda','Berani mengambil keputusan maka anda telah melangkah 10 kali lebih cepat untuk sukses','Allah masih mencintai anda jika masih banyak cobaan dan tantangan hidup yang datang menghampiri anda. Allah percaya bahwa anda mampu melaluinya, maka jagalah kepercayaan itu','Ketika orang mengatakan anda sudah berubah sebenarnya itu hanya karena anda berhenti melakukan apa yang mereka ingin anda lakukan','Jangan menukar apa yang sangat anda inginkan untuk apa yang Anda ingin untuk saat ini','Orang-orang yang mengikuti keramaian biasanya tersesat di dalamnya','Orang tua saya bekerja terlalu keras untuk saya bukan supaya saya tidak hanya menjadi orang biasa tetapi menjadi orang luar biasa','Anda menghalangi impian anda ketika anda mengizinkan ketakutan Anda tumbuh lebih besar dari keyakinan anda','Sang juara percaya kepada dirinya sendiri bahkan ketika orang lain tidak percaya','Hanya mereka yang berani mengambil resiko yang jauh pasti dapat menemukan Seberapa jauh seseorang dapat pergi','Tunjukkan teman Anda, saya akan menunjukkan masa depan Anda','Beberapa orang ingin sesuatu terjadi, beberapa orang berharap itu akan terjadi, yang lain mewujudkannya jadi kenyataan','Jika anda menghabiskan waktu untuk mencoba menjadi baik dalam segala hal, Anda tidak akan pernah menjadi hebat dalam apapun','Sebuah perjalanan ribuan mil dimulai dari langkah kecil','Apa yang akan Anda kerjakan, Ketika anda tahu anda tidak mungkin gagal','Ketika kita memiliki satu sama lain, kita Memiliki segalanya','Kebesaran sebenarnya dapat ditemukan dalam hal hal kecil yang terkadang kita lewatkan','Bekerja keraslah, Bermimpilah lebih besar dan jadilah yang terbaik','Apa yang kita pikirkan menentukan apa yang akan terjadi pada kita. Jadi jika kita ingin mengubah hidup kita, kita perlu sedikit mengubah pikiran kita.','Seseorang yang berani membuang satu jam waktunya tidak mengetahui nilai dari kehidupan.','Saya memiliki filosofi yang sederhana: isi apa yang kosong, kosongkan apa yang terlalu penuh.','Hidup adalah cermin dan akan merefleksikan kembali kepada para pemikir mengenai apa yang mereka pikirkan.','Anda di sini hanya untuk persinggahan yang singkat. Jangan terburu, jangan khawatir. Yakinlah bahwa Anda menghirup wangi bunga sepanjang perjalanan.Hidup adalah cermin dan akan merefleksikan kembali kepada para pemikir mengenai apa yang mereka pikirkan.','Hidup adalah serangkaian perubahan yang alami dan spontan. Jangan tolak mereka karena itu hanya membuat penyesalan dan duka. Biarkan realita menjadi realita. Biarkan sesuatu mengalir dengan alami ke manapun mereka suka.','Hidup yang baik adalah hidup yang diinspirasi oleh cinta dan dipandu oleh ilmu pengetahuan.','Kenyataannya, Anda tidak tahu apa yang akan terjadi besok. Hidup adalah pengendaraan yang gila dan tidak ada yang menjaminnya.','Hidup adalah mimpi bagi mereka yang bijaksana, permainan bagi mereka yang bodoh, komedi bagi mereka yang kaya, dan tragedi bagi mereka yang miskin','Hidup itu bukan soal menemukan diri Anda sendiri, hidup itu membuat diri Anda sendiri.','Hal yang paling penting adalah menikmati hidupmu, menjadi bahagia, apapun yang terjadi.','Hidup itu sederhana, kita yang membuatnya sulit.']
               const vasi = motiv[Math.floor(Math.random() * motiv.length)]
            //    vass = await getBuffer(`https://i.ibb.co/346nsHC/56806462-399407660892553-4745814299438481408-o.jpg`)
               client.sendMessage(from, {image: fs.readFileSync('./src/dbimage/motivasi.jpg'), caption: '*Quotes Motivasi*\n\n'+ vasi })
               limitAdd(m.sender)
   }
               break
            case 'bucinquote': case 'bucin': case 'gombal':{
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
                if (ban.includes(m.sender)) return m.reply(mess.only.banned)
                if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                bucin = [
  "Aku memilih untuk sendiri, bukan karena menunggu yang sempurna, tetapi butuh yang tak pernah menyerah.",
  "Seorang yang single diciptakan bersama pasangan yang belum ditemukannya.",
  "Jomblo. Mungkin itu cara Tuhan untuk mengatakan 'Istirahatlah dari cinta yang salah'.",
  "Jomblo adalah anak muda yang mendahulukan pengembangan pribadinya untuk cinta yang lebih berkelas nantinya.",
  "Aku bukan mencari seseorang yang sempurna, tapi aku mencari orang yang menjadi sempurna berkat kelebihanku.",
  "Pacar orang adalah jodoh kita yang tertunda.",
  "Jomblo pasti berlalu. Semua ada saatnya, saat semua kesendirian menjadi sebuah kebersamaan dengannya kekasih halal. Bersabarlah.",
  "Romeo rela mati untuk juliet, Jack mati karena menyelamatkan Rose. Intinya, kalau tetap mau hidup, jadilah single.",
  "Aku mencari orang bukan dari kelebihannya tapi aku mencari orang dari ketulusan hatinya.",
  "Jodoh bukan sendal jepit, yang kerap tertukar. Jadi teruslah berada dalam perjuangan yang semestinya.",
  "Kalau kamu jadi senar gitar, aku nggak mau jadi gitarisnya. Karena aku nggak mau mutusin kamu.",
  "Bila mencintaimu adalah ilusi, maka izinkan aku berimajinasi selamanya.",
  "Sayang... Tugas aku hanya mencintaimu, bukan melawan takdir.",
  "Saat aku sedang bersamamu rasanya 1 jam hanya 1 detik, tetapi jika aku jauh darimu rasanya 1 hari menjadi 1 tahun.",
  "Kolak pisang tahu sumedang, walau jarak membentang cintaku takkan pernah hilang.",
  "Aku ingin menjadi satu-satunya, bukan salah satunya.",
  "Aku tidak bisa berjanji untuk menjadi yang baik. Tapi aku berjanji akan selalu mendampingi kamu.",
  "Kalau aku jadi wakil rakyat aku pasti gagal, gimana mau mikirin rakyat kalau yang selalu ada dipikiran aku hanyalah dirimu.",
  "Lihat kebunku, penuh dengan bunga. Lihat matamu, hatiku berbunga-bunga.",
  "Berjanjilah untuk terus bersamaku sekarang, esok, dan selamanya.",
  "Rindu tidak hanya muncul karena jarak yang terpisah. Tapi juga karena keinginan yang tidak terwujud.",
  "Kamu tidak akan pernah jauh dariku, kemanapun aku pergi kamu selalu ada, karena kamu selalu di hatiku, yang jauh hanya raga kita bukan hati kita.",
  "Aku tahu dalam setiap tatapanku, kita terhalang oleh jarak dan waktu. Tapi aku yakin kalau nanti kita pasti bisa bersatu.",
  "Merindukanmu tanpa pernah bertemu sama halnya dengan menciptakan lagu yang tak pernah ternyayikan.",
  "Ada kalanya jarak selalu menjadi penghalang antara aku sama kamu, namun tetap saja di hatiku kita selalu dekat.",
  "Jika hati ini tak mampu membendung segala kerinduan, apa daya tak ada yang bisa aku lakukan selain mendoakanmu.",
  "Mungkin di saat ini aku hanya bisa menahan kerinduan ini. Sampai tiba saatnya nanti aku bisa bertemu dan melepaskan kerinduan ini bersamamu.",
  "Melalui rasa rindu yang bergejolak dalam hati, di situ terkadang aku sangat membutuhkan dekap peluk kasih sayangmu.",
  "Dalam dinginnya malam, tak kuingat lagi; Berapa sering aku memikirkanmu juga merindukanmu.",
  "Merindukanmu itu seperti hujan yang datang tiba-tiba dan bertahan lama. Dan bahkan setelah hujan reda, rinduku masih terasa.",
  "Sejak mengenalmu bawaannya aku pengen belajar terus, belajar menjadi yang terbaik buat kamu.",
  "Tahu gak perbedaan pensi sama wajah kamu? Kalau pensil tulisannya bisa dihapus, tapi kalau wajah kamu gak akan ada yang bisa hapus dari pikiran aku.",
  "Bukan Ujian Nasional besok yang harus aku khawatirkan, tapi ujian hidup yang aku lalui setelah kamu meninggalkanku.",
  "Satu hal kebahagiaan di sekolah yang terus membuatku semangat adalah bisa melihat senyumanmu setiap hari.",
  "Kamu tahu gak perbedaanya kalau ke sekolah sama ke rumah kamu? Kalo ke sekolah pasti yang di bawa itu buku dan pulpen, tapi kalo ke rumah kamu, aku cukup membawa hati dan cinta.",
  "Aku gak sedih kok kalo besok hari senin, aku sedihnya kalau gak ketemu kamu.",
  "Momen cintaku tegak lurus dengan momen cintamu. Menjadikan cinta kita sebagai titik ekuilibrium yang sempurna.",
  "Aku rela ikut lomba lari keliling dunia, asalkan engkai yang menjadi garis finishnya.",
  "PR-ku adalah merindukanmu. Lebih kuat dari Matematika, lebih luas dari Fisika, lebih kerasa dari Biologi.",
  "Cintaku kepadamu itu bagaikan metabolisme, yang gak akan berhenti sampai mati.",
  "Kalau jelangkungnya kaya kamu, dateng aku jemput, pulang aku anter deh.",
  "Makan apapun aku suka asal sama kamu, termasuk makan ati.",
  "Cinta itu kaya hukuman mati. Kalau nggak ditembak, ya digantung.",
  "Mencintaimu itu kayak narkoba: sekali coba jadi candu, gak dicoba bikin penasaran, ditinggalin bikin sakaw.",
  "Gue paling suka ngemil karena ngemil itu enak. Apalagi ngemilikin kamu sepenuhnya...",
  "Dunia ini cuma milik kita berdua. Yang lainnya cuma ngontrak.",
  "Bagi aku, semua hari itu adalah hari Selasa. Selasa di Surga bila dekat denganmu...",
  "Bagaimana kalau kita berdua jadi komplotan penjahat? Aku curi hatimu dan kamu curi hatiku.",
  "Kamu itu seperti kopi yang aku seruput pagi ini. Pahit, tapi bikin nagih.",
  "Aku sering cemburu sama lipstikmu. Dia bisa nyium kamu tiap hari, dari pagi sampai malam.",
  "Hanya mendengar namamu saja sudah bisa membuatku tersenyum seperti orang bodoh.",
  "Aku tau teman wanitamu bukan hanya satu, dan menyukaimu pun bukan hanya aku.",
  "Semenjak aku berhenti berharap pada dirimu, aku jadi tidak semangat dalam segala hal..",
  "Denganmu, jatuh cinta adalah patah hati paling sengaja.",
  "Sangat sulit merasakan kebahagiaan hidup tanpa kehadiran kamu disisiku.",
  "Melalui rasa rindu yang bergejolak dalam hati, di situ terkadang aku sangat membutuhkan dekap peluk kasih sayangmu.",
  "Sendainya kamu tahu, sampai saat ini aku masih mencintaimu.",
  "Terkadang aku iri sama layangan..talinya putus saja masih dikejar kejar dan gak rela direbut orang lain...",
  "Aku tidak tahu apa itu cinta, sampai akhirnya aku bertemu denganmu. Tapi, saat itu juga aku tahu rasanya patah hati.",
  "Mengejar itu capek, tapi lebih capek lagi menunggu\nMenunggu kamu menyadari keberadaanku...",
  "Jangan berhenti mencinta hanya karena pernah terluka. Karena tak ada pelangi tanpa hujan, tak ada cinta sejati tanpa tangisan.",
  "Aku punya sejuta alasan unutk melupakanmu, tapi tak ada yang bisa memaksaku untuk berhenti mencintaimu.",
  "Terkadang seseorang terasa sangat bodoh hanya untuk mencintai seseorang.",
  "Kamu adalah patah hati terbaik yang gak pernah aku sesali.",
  "Bukannya tak pantas ditunggu, hanya saja sering memberi harapan palsu.",
  "Sebagian diriku merasa sakit, Mengingat dirinya yang sangat dekat, tapi tak tersentuh.",
  "Hal yang terbaik dalam mencintai seseorang adalah dengan diam-diam mendo akannya.",
  "Kuharap aku bisa menghilangkan perasaan ini secepat aku kehilanganmu.",
  "Demi cinta kita menipu diri sendiri. Berusaha kuat nyatanya jatuh secara tak terhormat.",
  "Anggaplah aku rumahmu, jika kamu pergi kamu mengerti kemana arah pulang. Menetaplah bila kamu mau dan pergilah jika kamu bosan...",
  "Aku bingung, apakah aku harus kecewa atu tidak? Jika aku kecewa, emang siapa diriku baginya?\n\nKalau aku tidak kecewa, tapi aku menunggu ucapannya.",
  "Rinduku seperti ranting yang tetap berdiri.Meski tak satupun lagi dedaunan yang menemani, sampai akhirnya mengering, patah, dan mati.",
  "Kurasa kita sekarang hanya dua orang asing yang memiliki kenangan yang sama.",
  "Buatlah aku bisa membencimu walau hanya beberapa menit, agar tidak terlalu berat untuk melupakanmu.",
  "Aku mencintaimu dengan segenap hatiku, tapi kau malah membagi perasaanmu dengan orang lain.",
  "Mencintaimu mungkin menghancurkanku, tapi entah bagaimana meninggalkanmu tidak memperbaikiku.",
  "Kamu adalah yang utama dan pertama dalam hidupku. Tapi, aku adalah yang kedua bagimu.",
  "Jika kita hanya bisa dipertemukan dalam mimpi, aku ingin tidur selamanya.",
  "Melihatmu bahagia adalah kebahagiaanku, walaupun bahagiamu tanpa bersamaku.",
  "Aku terkadang iri dengan sebuah benda. Tidak memiliki rasa namun selalu dibutuhkan. Berbeda dengan aku yang memiliki rasa, namun ditinggalkan dan diabaikan...",
  "Bagaimana mungkin aku berpindah jika hanya padamu hatiku bersinggah?",
  "Kenangan tentangmu sudah seperti rumah bagiku. Sehingga setiap kali pikiranku melayang, pasti ujung-ujungnya akan selalu kembali kepadamu.",
  "Kenapa tisue bermanfaat? Karena cinta tak pernah kemarau. - Sujiwo Tejo",
  "Kalau mencintaimu adalah kesalahan, yasudah, biar aku salah terus saja.",
  "Sejak kenal kamu, aku jadi pengen belajar terus deh. Belajar jadi yang terbaik buat kamu.",
  "Ada yang bertingkah bodoh hanya untuk melihatmu tersenyum. Dan dia merasa bahagia akan hal itu.",
  "Aku bukan orang baik, tapi akan belajar jadi yang terbaik untuk kamu.",
  "Kita tidak mati, tapi lukanya yang membuat kita tidak bisa berjalan seperti dulu lagi.",
  "keberadaanmu bagaikan secangkir kopi yang aku butuhkan setiap pagi, yang dapat mendorongku untuk tetap bersemangat menjalani hari.",
  "Aku mau banget ngasih dunia ke kamu. Tapi karena itu nggak mungkin, maka aku akan kasih hal yang paling penting dalam hidupku, yaitu duniaku.",
  "Mending sing humoris tapi manis, ketimbang sok romantis tapi akhire tragis.",
  "Ben akhire ora kecewa, dewe kudu ngerti kapan waktune berharap lan kapan kudu mandeg.",
  "Aku ki wong Jowo seng ora ngerti artine 'I Love U'. Tapi aku ngertine mek 'Aku tresno awakmu'.",
  "Ora perlu ayu lan sugihmu, aku cukup mok setiani wes seneng ra karuan.",
  "Cintaku nang awakmu iku koyok kamera, fokus nang awakmu tok liyane mah ngeblur.",
  "Saben dino kegowo ngimpi tapi ora biso nduweni.",
  "Ora ketemu koe 30 dino rasane koyo sewulan.",
  "Aku tanpamu bagaikan sego kucing ilang karete. Ambyar.",
  "Pengenku, Aku iso muter wektu. Supoyo aku iso nemokne kowe lewih gasik. Ben Lewih dowo wektuku kanggo urip bareng sliramu.",
  "Aku ora pernah ngerti opo kui tresno, kajaba sak bare ketemu karo sliramu.",
  "Cinta aa ka neng moal leungit-leungit sanajan aa geus kawin deui.",
  "Kasabaran kaula aya batasna, tapi cinta kaula ka anjeun henteu aya se epna.",
  "Kanyaah akang moal luntur najan make Bayclean.",
  "Kenangan endah keur babarengan jeung anjeun ek tuluy diinget-inget nepi ka poho.",
  "Kuring moal bakal tiasa hirup sorangan, butuh bantosan jalmi sejen.",
  "Nyaahna aa ka neg teh jiga tukang bank keur nagih hutang (hayoh mumuntil).",
  "Kasabaran urang aya batasna, tapi cinta urang ka maneh moal aya beakna.",
  "Hayang rasana kuring ngarangkai kabeh kata cinta anu aya di dunya ieu, terus bade ku kuring kumpulkeun, supaya anjeun nyaho gede pisan rasa cinta kuring ka anjeun.",
  "Tenang wae neng, ari cinta Akang mah sapertos tembang krispatih; Tak lekang oleh waktu.",
  "Abdi sanes jalmi nu sampurna pikeun anjeun, sareng sanes oge nu paling alus kanggo anjeun. Tapi nu pasti, abdi jalmi hiji-hijina nu terus emut ka anjeun.",
  "Cukup jaringan aja yang hilang, kamu jangan.",
  "Sering sih dibikin makan ati. Tapi menyadari kamu masih di sini bikin bahagia lagi.",
  "Musuhku adalah mereka yang ingin memilikimu juga.",
  "Banyak yang selalu ada, tapi kalo cuma kamu yang aku mau, gimana?",
  "Jam tidurku hancur dirusak rindu.",
  "Cukup China aja yang jauh, cinta kita jangan.",
  "Yang penting itu kebahagiaan kamu, aku sih gak penting..",
  "Cuma satu keinginanku, dicintai olehmu..",
  "Aku tanpamu bagaikan ambulans tanpa wiuw wiuw wiuw.",
  "Cukup antartika aja yang jauh. Antarkita jangan."
]
                    hamdeh = bucin[Math.floor(bucin.length * Math.random())]
					m.reply(hamdeh)
                    limitAdd(m.sender)
            }
            break
            case 'cecan':{		
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)	
				    motive =["https://i.pinimg.com/originals/69/d7/b3/69d7b3d5a089e7cbee0250ea5da9b14b.jpg","https://i.pinimg.com/originals/78/fa/10/78fa10ab94c0dc9e19a18358a9752070.jpg","https://i.pinimg.com/originals/93/e0/a3/93e0a3816183696ff89b1ad7db2fd3c0.jpg","https://i.pinimg.com/originals/a6/34/cf/a634cfa655269069439e9476780b46fe.jpg","https://i.pinimg.com/originals/dc/f5/69/dcf569a7b08efcae64d0747b51d04a7d.jpg","https://i.pinimg.com/originals/4f/96/2b/4f962b89bd7ceb438b3e9ebbd075184c.jpg","https://i.pinimg.com/originals/c2/fb/e7/c2fbe7a6955a85c51b9ee8062a7b68d3.jpg","https://i.pinimg.com/originals/44/54/24/44542415cf206f2c041e3bbb52a69419.jpg","https://i.pinimg.com/originals/ae/3c/40/ae3c40e0a2f653811b5a67ccd6b9d8cc.jpg","https://i.pinimg.com/originals/bd/fa/33/bdfa3317d96e6cdafaf27e3b337d05b4.jpg","https://i.pinimg.com/originals/75/6a/f2/756af236ae909431567ed184c43aae6f.png","https://i.pinimg.com/originals/a5/95/d7/a595d7fe6b8dc00d1aaa7287f1dd304e.jpg","https://i.pinimg.com/originals/40/37/78/40377871ee06a4a434c39e90b1f647e1.jpg","https://i.pinimg.com/originals/45/73/ac/4573ac9484c480500872b7c91f758040.jpg","https://i.pinimg.com/originals/32/7d/0b/327d0be89cc60321128d0f0bdaadfc15.jpg","https://i.pinimg.com/originals/f4/a1/0f/f4a10ffd44aea604383be84a34f69f90.jpg","https://i.pinimg.com/originals/ec/7f/b5/ec7fb5506136f72876633aab957a755a.jpg","https://i.pinimg.com/originals/4c/e9/15/4ce915c8245586f541c4d0a8b71cc500.jpg","https://i.pinimg.com/originals/03/2a/14/032a145e96154753e33bdda30d9f41f1.jpg","https://i.pinimg.com/originals/f4/5b/07/f45b070de82acec89092eaea1b415029.jpg","https://i.pinimg.com/originals/a9/f2/da/a9f2da1277fb7bc801856c3b9c12d37d.jpg","https://i.pinimg.com/originals/af/ab/93/afab93ebbf109a601dcb77b5baa494b4.jpg","https://i.pinimg.com/originals/b9/38/df/b938dfba6c139ad45ce51203a43eac0d.jpg","https://i.pinimg.com/originals/af/10/0a/af100a49cb8f53f0dd5b48664ede9db8.jpg","https://i.pinimg.com/originals/99/18/6c/99186c2145e1223f885103f51817be78.jpg","https://i.pinimg.com/originals/3c/fd/c9/3cfdc9ba7cf79ed061808e162162f4da.jpg","https://i.pinimg.com/originals/31/95/64/319564a33b5ed46a52d30c18d2310f22.jpg","https://i.pinimg.com/originals/1c/2d/9f/1c2d9ffdd104200355bab43c9d3fad20.gif","https://i.pinimg.com/originals/4a/aa/12/4aaa12940f51fdfb1684964df3796c4c.jpg","https://i.pinimg.com/originals/37/90/bc/3790bc29be16d95174af4eff4ee3859f.jpg","https://i.pinimg.com/originals/4c/12/8f/4c128fda6e71a9f4c670a78a21d8c196.jpg","https://i.pinimg.com/originals/34/92/10/3492100b4a924458a2bf5340d68293c2.jpg","https://i.pinimg.com/originals/5a/dd/12/5add12091eafba364ec76c91d20e75ac.jpg","https://i.pinimg.com/originals/da/c3/59/dac359d1fc87193c2b9d85bb96fedcbc.jpg","https://i.pinimg.com/originals/2e/d6/a9/2ed6a9670d942220eab92b99bb0d1c09.jpg","https://i.pinimg.com/originals/f1/89/e3/f189e3d9b353f91b60060cc64e6706c9.jpg","https://i.pinimg.com/originals/8c/06/c2/8c06c22283cf98abdb8922e2f3aa0a6a.jpg","https://i.pinimg.com/originals/8b/6f/0b/8b6f0b1e213240eaad90894292a2d3c1.jpg","https://i.pinimg.com/originals/89/bf/b8/89bfb86392d39477adcd66444cf19845.jpg","https://i.pinimg.com/originals/35/e2/cc/35e2cc3c535d8f1cfeaf13cce69ac984.jpg","https://i.pinimg.com/originals/c0/01/a1/c001a16e2629872a3d7ea7fdbe5a4e98.jpg","https://i.pinimg.com/originals/b4/eb/48/b4eb486def2d413716c5fa033af9fb34.jpg","https://i.pinimg.com/originals/55/ee/7b/55ee7b5f4889cc34ec1a01d2e7875b53.jpg","https://i.pinimg.com/originals/0c/b3/0e/0cb30ea660aafbae32cc07433bf3eea2.jpg","https://i.pinimg.com/originals/1f/50/23/1f5023991f2a01cff748e84c4cf3612d.jpg","https://i.pinimg.com/originals/ab/53/07/ab5307df9234934f385eb6235aa6c2cd.jpg","https://i.pinimg.com/originals/e1/a1/7c/e1a17c5f359846741c687ef1fcadb316.jpg","https://i.pinimg.com/originals/16/1b/21/161b215ee2f8e0a040c91f18c054d705.jpg","https://i.pinimg.com/originals/da/07/1a/da071a5fafbc6487d38edd4e9f3401db.jpg","https://i.pinimg.com/originals/54/f4/26/54f42615f9ad45743e6fb08ed86623f0.jpg","https://c.top4top.io/p_1932es7nf0.jpg",
"https://d.top4top.io/p_19321v7sp0.jpg",
"https://e.top4top.io/p_1932b1d721.jpg",
"https://j.top4top.io/p_1932ss4ma0.jpg",
"https://k.top4top.io/p_1932wf8mx1.jpg",
"https://l.top4top.io/p_1932yo3as2.jpg",
"https://c.top4top.io/p_19320nyzy5.jpg",
"https://d.top4top.io/p_1932yge0p6.jpg",
"https://e.top4top.io/p_193248hgs7.jpg",
"https://d.top4top.io/p_1932uq8ua0.jpg",
"https://e.top4top.io/p_193267mkh1.jpg",
"https://f.top4top.io/p_19327ac9w2.jpg",
"https://g.top4top.io/p_193215eok3.jpg",
"https://g.top4top.io/p_1932wideu0.jpg",
"https://h.top4top.io/p_1932czeaz1.jpg",
"https://i.top4top.io/p_19329fof22.jpg",
"https://j.top4top.io/p_1932itqje3.jpg",
"https://k.top4top.io/p_1932tbjas4.jpg",
"https://l.top4top.io/p_1932x0vk45.jpg",
"https://a.top4top.io/p_1932ctpoa6.jpg",
"https://b.top4top.io/p_1932dn7wq7.jpg",
"https://c.top4top.io/p_19322m2be8.jpg",
"https://d.top4top.io/p_19321nqz29.jpg",
"https://e.top4top.io/p_1932qnfn50.jpg",
"https://f.top4top.io/p_1932cax5k1.jpg",
"https://g.top4top.io/p_1932utifn2.jpg",
"https://h.top4top.io/p_19325kxr13.jpg",
"https://i.top4top.io/p_1932lbn2o4.jpg",
"https://j.top4top.io/p_1932z4bap5.jpg",
"https://k.top4top.io/p_1932xun636.jpg",
"https://l.top4top.io/p_1932w991v7.jpg",
"https://a.top4top.io/p_1932vw65c8.jpg",
"https://l.top4top.io/p_1932fhgqn9.jpg",
"https://k.top4top.io/p_1932s4vpv8.jpg",
"https://j.top4top.io/p_1932yu8047.jpg",
"https://i.top4top.io/p_19328nqbx6.jpg",
"https://h.top4top.io/p_1932ky5ag5.jpg",
"https://g.top4top.io/p_1932qs18u4.jpg",
"https://f.top4top.io/p_1932k2sii3.jpg",
"https://e.top4top.io/p_1932k3e7x2.jpg",
"https://d.top4top.io/p_19328l2pm1.jpg",
"https://c.top4top.io/p_1932rdofk0.jpg",
"https://k.top4top.io/p_1932s21b60.jpg",
"https://l.top4top.io/p_1932qnkqx1.jpg",
"https://a.top4top.io/p_19324alu52.jpg",
"https://b.top4top.io/p_1932kpi033.jpg",
"https://c.top4top.io/p_1932wxegw4.jpg",
"https://d.top4top.io/p_1932gn52q5.jpg",
"https://f.top4top.io/p_1932h7q6u7.jpg",
"https://g.top4top.io/p_1932e7xop8.jpg",
"https://h.top4top.io/p_1932gc8ml9.jpg",
"https://b.top4top.io/p_19320lszj0.jpg",
"https://c.top4top.io/p_1932j0olo1.jpg",
"https://d.top4top.io/p_1932j9oql2.jpg",
"https://e.top4top.io/p_19323rhzg3.jpg",
"https://f.top4top.io/p_1932wcvue4.jpg",
"https://g.top4top.io/p_1932tjsny5.jpg",
"https://i.top4top.io/p_1932hcfxh6.jpg"]
				    vasih = motive[Math.floor(Math.random() * motive.length)]
				    vass = await getBuffer(vasih)
		            client.sendMessage(from, {image: vass, caption: `Nih cecannya ${pushname}`},{quoted:m})
				    limitAdd(m.sender)
        }
				   break
                   case 'coganasli':{
                    if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
				if (!isPremium) return m.reply(mess.only.premium)
				let coganasli = await IXB_Api.pinterest('artis korea ganteng')
				let coganasl = coganasli[Math.floor(Math.random() * coganasli.length)]
			    ini_buffer = await getBuffer(coganasl)
                client.sendMessage(from, {image: ini_buffer, caption: `Nih cecannya ${pushname}`},{quoted:m})
            }	
				break
		case 'cecanasli':{
            if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
				if (!isPremium) return m.reply(mess.only.premium)
				let cecanasli = await IXB_Api.pinterest('cewe jilbab')
	         	let cecanasl = cecanasli[Math.floor(Math.random() * cecanasli.length)]
	        	ini_buffer = await getBuffer(cecanasl)
				client.sendMessage(from, {image: ini_buffer, caption: `Nih cecannya ${pushname}`},{quoted:m})
            }
				break
        case 'qrcode':{
            if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
		if (!q) return m.reply(`Example: ${prefix + command} Yogyakarta`)
		m.reply(mess.wait)
		anu = await QrCodeGenerator.toDataURL(q, { scale: 8 })
		buffer = new Buffer.from(anu.replace('data:image/png;base64,', ''), 'base64')
		client.sendMessage(from, {image: buffer, caption: `Qr Code: ${q}`},{quoted:m})
                }
		break
        case 'qrreader':{
            if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
        if (!isPremium) return m.reply(mess.only.premium)
        if (!/image/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
	    if (/webp/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
		m.reply(mess.wait)
        var { TelegraPh } = require('./lib/uploader')
            let media = await client.downloadAndSaveMediaMessage(quoted)
            let anu = await TelegraPh(media)
			get_result = await fetchJson(`http://api.lolhuman.xyz/api/read-qr?apikey=${LolApi}&img=${anu}`)
			fs.unlinkSync(media)
			m.reply("Result: " + get_result.result)
    }
		break
            case 'puisi': {
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
            try{
            // client.sendMedia(m.chat,`https://api.vhtear.com/puisi_image&apikey=${VthearApi}`,'','',m)
            anu = await fetchJson(`https://api.lolhuman.xyz/api/random/puisi?apikey=${LolApi}`)
            m.reply(anu.result)
            limitAdd(m.sender)
            } catch {
                m.reply(mess.error.bug)
            }
            }
            break
            case 'triggered':{
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
            if (!isPremium) return m.reply(mess.only.premium)
                if (!/image/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
                if (/webp/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
                // hmm = await './src/remobg-'+getRandom('')
	            // localFile = await client.downloadAndSaveMediaMessage(quoted, hmm)
	            // anu = await imgbb(imgbbAPI, localFile)
                var { TelegraPh } = require('./lib/uploader')
                let media = await client.downloadAndSaveMediaMessage(quoted)
                let anu = await TelegraPh(media)
                fs.unlinkSync(media)
                m.reply(mess.wait)
                client.sendMedia(m.chat,`https://some-random-api.ml/canvas/triggered?avatar=${anu}`,'','',m)
                }
                break
            case '1977':case 'aden':case 'brannan':case 'brooklyn':case 'clarendon':case 'gingham':case 'hudson':case 'inkwell':case 'earlybird':case 'kelvin':case 'lark':case 'lofi':case 'maven':case 'mayfair':case 'moon':case 'nashville':case 'perpetua':case 'reyes':case 'rise':case 'slumber':case 'stinson':case 'toaster':case 'valencia':case 'walden':case 'willow':case 'xpro2':{
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                if (!isPremium) return m.reply(mess.only.premium)
                if (!/image/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
                if (/webp/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
                // hmm = await './src/remobg-'+getRandom('')
	            // localFile = await client.downloadAndSaveMediaMessage(quoted, hmm)
	            // anu = await imgbb(imgbbAPI, localFile)
                var { TelegraPh } = require('./lib/uploader')
                let media = await client.downloadAndSaveMediaMessage(quoted)
                let anu = await TelegraPh(media)
                fs.unlinkSync(media)
                m.reply(mess.wait)
                client.sendMedia(m.chat,`https://api.lolhuman.xyz/api/filter/${command}?apikey=${LolApi}&img=${anu}`,'','',m)
                }
                break
            case 'neon':case 'greenneon':case 'advanceglow':case 'futureneon':case 'sandwriting':case 'sandsummer':case 'sandengraved': case 'metaldark':case 'neonlight':case 'holographic':case 'text1917':case 'minion':case 'deluxesilver':case 'newyearcard':case 'bloodfrosted':case 'halloween':case 'jokerlogo': case 'fireworksparkle':case 'natureleaves':case 'bokeh':case 'toxic':case 'strawberry':case 'box3d':case 'roadwarning':case 'breakwall':case 'icecold':case 'luxury':case 'cloud':case 'summersand': case 'horrorblood':case 'thunder': {
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                if (!text) return m.reply(`Example : ${prefix + command} text`)
                m.reply(mess.wait)
                client.sendMedia(m.chat,`http://api.lolhuman.xyz/api/textprome/${command}?apikey=${LolApi}&text=${text}`,'','',m)
                limitAdd(m.sender)
            }
            break
	    // Photo Oxy //
        case 'shadow':case 'cup':case 'cup1':case 'romance':case 'smoke':case 'burnpaper':case 'lovemessage':case 'undergrass':case 'love':case 'coffe':case 'woodheart':case 'woodenboard':case 'summer3d':case 'wolfmetal':case 'nature3d':case 'underwater':case 'golderrose':case 'summernature':case 'letterleaves': case 'glowingneon':case 'fallleaves':case 'flamming':case 'harrypotter':case 'carvedwood': {
            if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
            if (!isPremium) return m.reply(mess.only.premium)
            if (!text) return m.reply(`Example : ${prefix + command} text`)
                m.reply(mess.wait)
               client.sendMedia(m.chat,`http://api.lolhuman.xyz/api/photooxy1/${command}?apikey=${LolApi}&text=${text}`,'','',m)
               limitAdd(m.sender)
            }
            break
           // Ephoto 360 //
           case 'wetglass': case 'multicolor3d':case 'watercolor':case 'luxurygold':case 'galaxywallpaper':case 'lighttext':case 'beautifulflower':case 'puppycute':case 'royaltext':case 'heartshaped':case 'birthdaycake':case 'galaxystyle':case 'hologram3d': case 'greenneon': case 'glossychrome': case 'greenbush': case 'metallogo': case 'noeltext': case 'glittergold':case 'textcake':case 'starsnight':case 'wooden3d':case 'textbyname':case 'writegalacy':case 'galaxybat':case 'snow3d':case 'birthdayday':case 'goldplaybutton':case 'silverplaybutton':case 'freefire': {
            if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
            if (!isPremium) return m.reply(mess.only.premium)    
            if (!text) return m.reply(`Example : ${prefix + command} text`)
                m.reply(mess.wait)
                client.sendMedia(m.chat,`http://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${LolApi}&text=${text}`,'','',m)
                limitAdd(m.sender)
            }
            break
	    case 'nomerhoki': case 'nomorhoki': {
            if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                if (!Number(text)) return m.reply(`Example : ${prefix + command} 6288292024190`)
                let anu = await primbon.nomer_hoki(Number(text))
                if (anu.status == false) return m.reply(anu.message)
                client.sendText(m.chat, `*Nomor HP :* ${anu.message.nomer_hp}\n*Angka Shuzi :* ${anu.message.angka_shuzi}\n*Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n*Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, m)
                limitAdd(m.sender)
            }
            break
            case 'artimimpi': case 'tafsirmimpi': {
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                if (!text) return m.reply(`Example : ${prefix + command} belanja`)
                let anu = await primbon.tafsir_mimpi(text)
                if (anu.status == false) return m.reply(anu.message)
                client.sendText(m.chat, `*Mimpi :* ${anu.message.mimpi}\n*Arti :* ${anu.message.arti}\n*Solusi :* ${anu.message.solusi}`, m)
                limitAdd(m.sender)
            }
            break
            case 'ramalanjodoh': case 'ramaljodoh': {
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                if (!text) return m.reply(`Example : ${prefix + command} imam, 20, 02, 2001, dewi, 22, 04, 2002`)
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                client.sendText(m.chat, `*Nama Anda :* ${anu.message.nama_anda.nama}\n*Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n*Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n*Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n*Hasil :* ${anu.message.result}\n*Catatan :* ${anu.message.catatan}`, m)
                limitAdd(m.sender)
            }
            break
            case 'ramalanjodohbali': case 'ramaljodohbali': {
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                if (!text) return m.reply(`Example : ${prefix + command} imam, 20, 02, 2001, dewi, 22, 04, 2002`)
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                client.sendText(m.chat, `*Nama Anda :* ${anu.message.nama_anda.nama}\n*Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n*Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n*Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n*Hasil :* ${anu.message.result}\n*Catatan :* ${anu.message.catatan}`, m)
                limitAdd(m.sender)
            }
            break
            case 'suamiistri': {
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                if (!text) return m.reply(`Example : ${prefix + command} imam, 20, 02, 2001, dewi, 22, 04, 2002`)
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                client.sendText(m.chat, `*Nama Suami :* ${anu.message.suami.nama}\n*Lahir Suami :* ${anu.message.suami.tgl_lahir}\n*Nama Istri :* ${anu.message.istri.nama}\n*Lahir Istri :* ${anu.message.istri.tgl_lahir}\n*Hasil :* ${anu.message.result}\n*Catatan :* ${anu.message.catatan}`, m)
                limitAdd(m.sender)
            }
            break
            case 'ramalancinta': case 'ramalcinta': {
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                if (!text) return m.reply(`Example : ${prefix + command} imam, 20, 02, 2001, dewi, 22, 04, 2002`)
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                client.sendText(m.chat, `*Nama Anda :* ${anu.message.nama_anda.nama}\n*Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n*Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n*Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n*Sisi Positif :* ${anu.message.sisi_positif}\n*Sisi Negatif :* ${anu.message.sisi_negatif}\n*Catatan :* ${anu.message.catatan}`, m)
                limitAdd(m.sender)
            }
            break
            case 'artinama': {
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                if (!text) return m.reply(`Example : ${prefix + command} dewi`)
                let anu = await primbon.arti_nama(text)
                if (anu.status == false) return m.reply(anu.message)
                client.sendText(m.chat, `*Nama :* ${anu.message.nama}\n*Arti :* ${anu.message.arti}\n*Catatan :* ${anu.message.catatan}`, m)
                limitAdd(m.sender)
            }
            break
            case 'kecocokannama': case 'cocoknama': {
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                if (!text) return m.reply(`Example : ${prefix + command} imam, 20, 02, 2001`)
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                client.sendText(m.chat, `*Nama :* ${anu.message.nama}\n*Lahir :* ${anu.message.tgl_lahir}\n*Life Path :* ${anu.message.life_path}\n*Destiny :* ${anu.message.destiny}\n*Destiny Desire :* ${anu.message.destiny_desire}\n*Personality :* ${anu.message.personality}\n*Persentase :* ${anu.message.persentase_kecocokan}`, m)
                limitAdd(m.sender)
            }
            break
            case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                if (!text) return m.reply(`Example : ${prefix + command} Imam|Dewi`)
                let [nama1, nama2] = text.split`|`
                let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
                if (anu.status == false) return m.reply(anu.message)
                client.sendImage(m.chat,  anu.message.gambar, `*Nama Anda :* ${anu.message.nama_anda}\n*Nama Pasangan :* ${anu.message.nama_pasangan}\n*Sisi Positif :* ${anu.message.sisi_positif}\n*Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
                limitAdd(m.sender)
            }
            break
            case 'jadianpernikahan': case 'jadiannikah': {
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                if (!text) return m.reply(`Example : ${prefix + command} 6, 12, 2020`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                client.sendText(m.chat, `*Tanggal Pernikahan :* ${anu.message.tanggal}\n*karakteristik :* ${anu.message.karakteristik}`, m)
                limitAdd(m.sender)
            }
            break
            case 'sifatusaha': {
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                if (!ext) return m.reply(`Example : ${prefix+ command} 28, 12, 2021`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                client.sendText(m.chat, `*Lahir :* ${anu.message.hari_lahir}\n*Usaha :* ${anu.message.usaha}`, m)
                limitAdd(m.sender)
            }
            break
            case 'rejeki': case 'rezeki': {
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                if (!text) return m.reply(`Example : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                client.sendText(m.chat, `*Lahir :* ${anu.message.hari_lahir}\n*Rezeki :* ${anu.message.rejeki}\n*Catatan :* ${anu.message.catatan}`, m)
                limitAdd(m.sender)
            }
            break
            case 'pekerjaan': case 'kerja': {
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                if (!text) return m.reply(`Example : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                client.sendText(m.chat, `*Lahir :* ${anu.message.hari_lahir}\n*Pekerjaan :* ${anu.message.pekerjaan}\n*Catatan :* ${anu.message.catatan}`, m)
                limitAdd(m.sender)
            }
            break
            case 'ramalannasib': case 'ramalnasib': case 'nasib': {
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                if (!text) return m.reply(`Example : 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.ramalan_nasib(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                client.sendText(m.chat, `*Analisa :* ${anu.message.analisa}\n*Angka Akar :* ${anu.message.angka_akar}\n*Sifat :* ${anu.message.sifat}\n*Elemen :* ${anu.message.elemen}\n*Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
                limitAdd(m.sender)
            }
            break
            case 'potensipenyakit': case 'penyakit': {
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                if (!text) return m.reply(`Example : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                client.sendText(m.chat, `*Analisa :* ${anu.message.analisa}\n*Sektor :* ${anu.message.sektor}\n*Elemen :* ${anu.message.elemen}\n*Catatan :* ${anu.message.catatan}`, m)
                limitAdd(m.sender)
            }
            break
            case 'artitarot': case 'tarot': {
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                if (!text) return m.reply(`Example : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                client.sendImage(m.chat, anu.message.image, `*Lahir :* ${anu.message.tgl_lahir}\n*Simbol Tarot :* ${anu.message.simbol_tarot}\n*Arti :* ${anu.message.arti}\n*Catatan :* ${anu.message.catatan}`, m)
                limitAdd(m.sender)
            }
            break
            case 'fengshui': {
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                if (!text) return m.reply(`Example : ${prefix + command} dewi, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`)
                let [nama, gender, tahun] = text.split`,`
                let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
                if (anu.status == false) return m.reply(anu.message)
                client.sendText(m.chat, `*Nama :* ${anu.message.nama}\n*Lahir :* ${anu.message.tahun_lahir}\n*Gender :* ${anu.message.jenis_kelamin}\n*Angka Kua :* ${anu.message.angka_kua}\n*Kelompok :* ${anu.message.kelompok}\n*Karakter :* ${anu.message.karakter}\n*Sektor Baik :* ${anu.message.sektor_baik}\n*Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
                limitAdd(m.sender)
            }
            break
            case 'haribaik': {
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                if (!text) return m.reply(`Example : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.petung_hari_baik(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                client.sendText(m.chat, `*Lahir :* ${anu.message.tgl_lahir}\n*Kala Tinantang :* ${anu.message.kala_tinantang}\n*Info :* ${anu.message.info}\n*Catatan :* ${anu.message.catatan}`, m)
                limitAdd(m.sender)
            }
            break
            case 'harisangar': case 'taliwangke': {
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                if (!text) return m.reply(`Example : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                client.sendText(m.chat, `*Lahir :* ${anu.message.tgl_lahir}\n*Hasil :* ${anu.message.result}\n*Info :* ${anu.message.info}\n*Catatan :* ${anu.message.catatan}`, m)
                limitAdd(m.sender)
            }
            break
            case 'harinaas': case 'harisial': {
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                if (!text) return m.reply(`Example : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                client.sendText(m.chat, `*Hari Lahir :* ${anu.message.hari_lahir}\n*Tanggal Lahir :* ${anu.message.tgl_lahir}\n*Hari Naas :* ${anu.message.hari_naas}\n*Info :* ${anu.message.catatan}\n*Catatan :* ${anu.message.info}`, m)
                limitAdd(m.sender)
            }
            break
            case 'nagahari': case 'harinaga': {
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                if (!text) return m.reply(`Example : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                client.sendText(m.chat, `*Hari Lahir :* ${anu.message.hari_lahir}\n*Tanggal Lahir :* ${anu.message.tgl_lahir}\n*Arah Naga Hari :* ${anu.message.arah_naga_hari}\n*Catatan :* ${anu.message.catatan}`, m)
                limitAdd(m.sender)
            }
            break
            case 'arahrejeki': case 'arahrezeki': {
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                if (!text) return m.reply(`Example : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                client.sendText(m.chat, `*Hari Lahir :* ${anu.message.hari_lahir}\n*tanggal Lahir :* ${anu.message.tgl_lahir}\n*Arah Rezeki :* ${anu.message.arah_rejeki}\n*Catatan :* ${anu.message.catatan}`, m)
                limitAdd(m.sender)
            }
            break
            case 'peruntungan': {
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                if (!text) return m.reply(`Example : ${prefix + command} imam, 20, 02, 2001, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`)
                let [nama, tgl, bln, thn, untuk] = text.split`,`
                let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
                if (anu.status == false) return m.reply(anu.message)
                client.sendText(m.chat, `*Nama :* ${anu.message.nama}\n*Lahir :* ${anu.message.tgl_lahir}\n*Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n*Hasil :* ${anu.message.result}\n*Catatan :* ${anu.message.catatan}`, m)
                limitAdd(m.sender)
            }
            break
            case 'weton': case 'wetonjawa': {
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                if (!text) return m.reply(`Example : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.weton_jawa(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                client.sendText(m.chat, `*Tanggal :* ${anu.message.tanggal}\n*Jumlah Neptu :* ${anu.message.jumlah_neptu}\n*Watak Hari :* ${anu.message.watak_hari}\n*Naga Hari :* ${anu.message.naga_hari}\n*Jam Baik :* ${anu.message.jam_baik}\n*Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
                limitAdd(m.sender)
            }
            break
            case 'sifat': case 'karakter': {
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                if (!text) return m.reply(`Example : ${prefix + command} imam, 20, 02, 2001`)
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                client.sendText(m.chat, `*Nama :* ${anu.message.nama}\n*Lahir :* ${anu.message.tgl_lahir}\n*Garis Hidup :* ${anu.message.garis_hidup}`, m)
                limitAdd(m.sender)
            }
            break
            case 'keberuntungan': {
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                if (!text) return m.reply(`Example : ${prefix + command} imam, 20, 02, 2001`)
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                client.sendText(m.chat, `*Nama :* ${anu.message.nama}\n*Lahir :* ${anu.message.tgl_lahir}\n*Hasil :* ${anu.message.result}`, m)
                limitAdd(m.sender)
            }
            break
            case 'memancing': {
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                if (!text) return m.reply(`Example : ${prefix + command} 12, 1, 2022`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                client.sendText(m.chat, `*Tanggal :* ${anu.message.tgl_memancing}\n*Hasil :* ${anu.message.result}\n*Catatan :* ${anu.message.catatan}`, m)
                limitAdd(m.sender)
            }
            break
            case 'masasubur': {
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                if (!text) return m.reply(`Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`)
                let [tgl, bln, thn, siklus] = text.split`,`
                let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
                if (anu.status == false) return m.reply(anu.message)
                client.sendText(m.chat, `*Hasil :* ${anu.message.result}\n*Catatan :* ${anu.message.catatan}`, m)
                limitAdd(m.sender)
            }
            break
            case 'zodiak': case 'zodiac': {
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                if (!text) return m.reply(`Example : ${prefix+ command} 7 7 2005`)
                let zodiak = [
                    ["capricorn", new Date(1970, 0, 1)],
                    ["aquarius", new Date(1970, 0, 20)],
                    ["pisces", new Date(1970, 1, 19)],
                    ["aries", new Date(1970, 2, 21)],
                    ["taurus", new Date(1970, 3, 21)],
                    ["gemini", new Date(1970, 4, 21)],
                    ["cancer", new Date(1970, 5, 22)],
                    ["leo", new Date(1970, 6, 23)],
                    ["virgo", new Date(1970, 7, 23)],
                    ["libra", new Date(1970, 8, 23)],
                    ["scorpio", new Date(1970, 9, 23)],
                    ["sagittarius", new Date(1970, 10, 22)],
                    ["capricorn", new Date(1970, 11, 22)]
                ].reverse()

                function getZodiac(month, day) {
                    let d = new Date(1970, month - 1, day)
                    return zodiak.find(([_,_d]) => d >= _d)[0]
                }
                let date = new Date(text)
                if (date == 'Invalid Date') return m.reply(date)
                let d = new Date()
                let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
                let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

                let zodiac = await getZodiac(birth[1], birth[2])
                
                let anu = await primbon.zodiak(zodiac)
                if (anu.status == false) return m.reply(anu.message)
                client.sendText(m.chat, `*Zodiak :* ${anu.message.zodiak}\n*Nomor :* ${anu.message.nomor_keberuntungan}\n*Aroma :* ${anu.message.aroma_keberuntungan}\n*Planet :* ${anu.message.planet_yang_mengitari}\n*Bunga :* ${anu.message.bunga_keberuntungan}\n*Warna :* ${anu.message.warna_keberuntungan}\n*Batu :* ${anu.message.batu_keberuntungan}\n*Elemen :* ${anu.message.elemen_keberuntungan}\n*Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n*Catatan :* ${anu.message.catatan}`, m)
                limitAdd(m.sender)
            }
            break
            case 'shio': {
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                if (!text) return m.reply(`Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`)
                let anu = await primbon.shio(text)
                if (anu.status == false) return m.reply(anu.message)
                client.sendText(m.chat, `*Hasil :* ${anu.message}`, m)
                limitAdd(m.sender)
            }
            break
        case 'igstalk': {
            if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
        if (args.length === 0) return m.reply(`Example: ${prefix + command} username`)
        try{
        username = text
        m.reply(`Searching data for instagram account: ${username}`)
        ini_result = await fetchJson(`https://api.lolhuman.xyz/api/stalkig/${username}?apikey=${LolApi}`)
        ini_result = ini_result.result
        // ini_buffer = await getBuffer(ini_result.picture)
        ini_txt = `*Username :* ${ini_result.username}\n`
        ini_txt += `*Full Name :* ${ini_result.fullname}\n`
        ini_txt += `*Post :* ${ini_result.posts}\n`
        ini_txt += `*Followers :* ${ini_result.followers}\n`
        ini_txt += `*Following :* ${ini_result.following}\n`
        ini_txt += `*Link :* https://instagram.com/${username.replace('@','')}\n`
        ini_txt += `*Bio :* ${ini_result.bio}`
               client.sendMedia(m.chat, ini_result.photo_profile, '', ini_txt,m)
               limitAdd(m.sender)
        } catch {
            m.reply(`Data for instagram account: ${username}\nNot Found! `)
        }
            }
            break
	    case 'igstalk2': {
            if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
        if (args.length === 0) return m.reply(`Example: ${prefix + command} username`)
        try{
        username = text
        m.reply(`Searching data for instagram account: ${username}`)
        ini_result = await fetchJson(`https://api.vhtear.com/igprofile?query=${username}&apikey=${VthearApi}`)
        ini_result = ini_result.result
        // ini_buffer = await getBuffer(ini_result.picture)
        ini_txt = `*Username :* ${ini_result.username}\n`
        ini_txt += `*Full Name :* ${ini_result.full_name}\n`
        ini_txt += `*Post :* ${ini_result.post_count}\n`
        ini_txt += `*Followers :* ${ini_result.follower}\n`
        ini_txt += `*Following :* ${ini_result.follow}\n`
        ini_txt += `*Private Account :* ${ini_result.is_private}\n`
        ini_txt += `*Link :* https://instagram.com/${username.replace('@','')}\n`
        ini_txt += `*Bio :* ${ini_result.biography}`
               client.sendMedia(m.chat, ini_result.picture, '', ini_txt,m)
               limitAdd(m.sender)
        } catch {
            m.reply(`Data for instagram account: ${username}\nNot Found! `)
        }
            }
            break
            case 'tiktokstalk': case 'ttstalk': {
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
                if (ban.includes(m.sender)) return m.reply(mess.only.banned)
                if (isLimit(m.sender)) return m.reply(mess.limituserbot)
            if (args.length === 0) return m.reply(`Example: ${prefix + command} username`)
            try{
            username = text
            m.reply(`Searching data for tiktok account: ${username}`)
            ini_result = await fetchJson(`https://api.lolhuman.xyz/api/stalktiktok/${username}?apikey=${LolApi}`)
            ini_result = ini_result.result
            // ini_buffer = await getBuffer(ini_result.picture)
            ini_txt = `*Username :* ${ini_result.username}\n`
            ini_txt += `*Full Name :* ${ini_result.nickname}\n`
            ini_txt += `*Post :* ${ini_result.video}\n`
            ini_txt += `*Like Count :* ${ini_result.likes}\n`
            ini_txt += `*Followers :* ${ini_result.followers}\n`
            ini_txt += `*Following :* ${ini_result.followings}\n`
            ini_txt += `*Link :* https://tiktok.com/@${username.replace('@','')}\n`
            ini_txt += `*Bio :* ${ini_result.bio}`
                   client.sendMedia(m.chat, ini_result.user_picture, '', ini_txt,m)
                   limitAdd(m.sender)
            } catch {
                m.reply(`Data for tiktok account: ${username}\nNot Found! `)
            }
                }
                break
            case 'tiktok': case 'tiktoknowm': case 'tt': {
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
                if (ban.includes(m.sender)) return m.reply(mess.only.banned)
                if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                if (args.length === 0) return m.reply(`Example: ${prefix + command} link`)
                if (!budy.includes('tiktok.com')) return m.reply(mess.error.Iv)
                m.reply(mess.wait)
                try{
                    anu = await IXB_Api.downloader.tiktok2(text)
                    console.log(anu)
                let buttons = [
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: 'Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.nowm },
                    caption: anu.video_title.replace('>',''),
                    footer: `Anda bisa mengubahnya menjadi audio dengan mengklik tombol dibawah`,
                    buttons: buttons,
                    headerType: 5
                }
                // client.sendMessage(m.chat, buttonMessage, { quoted: m })
                client.sendMessage(m.chat, {video: {url: anu.nowm}}, {quoted:m})
                limitAdd(m.sender)
                } catch (err) {
                console.log(err)
                return m.reply(mess.error.bug)
                }
                }
                break
	        case 'tiktokpremium': {
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
                if (ban.includes(m.sender)) return m.reply(mess.only.banned)
                if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                if (!isPremium) return m.reply(mess.only.premium)
                if (args.length === 0) return m.reply(`Example: ${prefix + command} link`)
                if (!budy.includes('tiktok.com')) return m.reply(mess.error.Iv)
                m.reply(mess.wait)
                try{
                    let anu = await IXB_Api.downloader.tiktok(text)
                    console.log(anu)
                    let buttons = [
                        {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: 'Audio'}, type: 1}
                    ]
                    let buttonMessage = {
                        video: { url: anu.nowm },
                        caption: 'Anda bisa mengubahnya menjadi audio dengan mengklik tombol dibawah',
                        footer: ``,
                        buttons: buttons,
                        headerType: 5
                    }
                    // client.sendMessage(m.chat, buttonMessage, { quoted: m })
                    client.sendMessage(m.chat, {video: {url: anu.nowm}}, {quoted:m})
                    limitAdd(m.sender)
                } catch (err) {
                console.log(err)
                return m.reply(mess.error.bug)
                }
            }
            break
            case 'tiktokwm': case 'tiktokwatermark': {
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
                if (ban.includes(m.sender)) return m.reply(mess.only.banned)
                if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                if (args.length === 0) return m.reply(`Example: ${prefix + command} link`)
                if (!budy.includes('tiktok.com')) return m.reply(mess.error.Iv)
                m.reply(mess.wait)
                let anu = await IXB_Api.downloader.tiktok(text)
                console.log(anu)
                let buttons = [
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: 'Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.wm },
                    caption: ``,
                    footer: 'Anda bisa mengubahnya menjadi audio dengan mengklik tombol dibawah',
                    buttons: buttons,
                    headerType: 5
                }
                // client.sendMessage(m.chat, buttonMessage, { quoted: m })
                client.sendMessage(m.chat, {video: {url: anu.watermark}}, {quoted:m})
                limitAdd(m.sender)
            }
            break
            case 'tiktokmp3': case 'tiktokaudio': {
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
                if (ban.includes(m.sender)) return m.reply(mess.only.banned)
                if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                // if (!budy.includes('tiktok.com')) return m.reply(mess.error.Iv)
                if (args.length === 0) return m.reply(`Example: ${prefix + command} link`)
                m.reply(mess.wait)
                try{
                // anu = await fetchJson(`http://api.lolhuman.xyz/api/tiktokmusic?apikey=${LolApi}&url=${args[0]}`)
                anu = await IXB_Api.downloader.tiktok(text)
                console.log(anu)
                client.sendMessage(m.chat, { document: { url: anu.audio }, mimetype: 'audio/mpeg', fileName: `${anu.author}_${jam}_By_${namabot}.mp3` }, { quoted: m })
                limitAdd(m.sender)
                } catch {
                    m.reply(mess.error.bug)
                }
            }
            break
            case 'cerpen':{
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/cerpen?apikey=${LolApi}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Creator : ${get_result.creator}\n`
                    ini_txt += `Story :\n${get_result.cerpen}`
                    m.reply(ini_txt)
					limitAdd(m.sender) 
            }
                    break
                case 'ceritahoror':	{
                    if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ceritahoror?apikey=${LolApi}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    ini_txt += `Story :\n${get_result.story}\n`
                    thumbnail = await getBuffer(get_result.thumbnail)
                    client.sendMessage(from, {image: thumbnail, caption: ini_txt}, {quoted:m})
					limitAdd(m.sender) 
                }
                    break
            case 'asupan': {
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                if (!isPremium) return m.reply(mess.only.premium)
                m.reply(mess.wait)
                try{
					data = fs.readFileSync('./ixbteam/asupan.js');
					asupan = JSON.parse(data);
					yaw = Math.floor(Math.random() * asupan.length);
					randKey = asupan[yaw]

                let buttons = [
                    {buttonId: `asupan`, buttonText: {displayText: 'NEXT'}, type: 1}

                ]
                let buttonMessage = {
                    video: { url: randKey.result },
                    caption: `Nih asupannya kak ${pushname}`,
                    footer: '',
                    buttons: buttons,
                    headerType: 5
                }
                client.sendMessage(m.chat, buttonMessage, { quoted: m })
            } catch {
                lahh = await fetchJson(`https://api.lolhuman.xyz/api/asupan?apikey=${LolApi}`)
                let buttons = [
                    {buttonId: `asupan`, buttonText: {displayText: 'NEXT'}, type: 1}

                ]
                let buttonMessage = {
                    video: { url: lahh.result },
                    caption: `Nih asupannya kak ${pushname}`,
                    footer: '',
                    buttons: buttons,
                    headerType: 5
                }
                client.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            }
            break
            /*case 'soundcloudsearch':{
                IXB_Api.search.soundcloud(text)
                .then(console.log)                
            }
            break
            case 'soundclouddl':{
                IXB_Api.downloader.soundcloud(text)
                .then(console.log);
            }
            break*/
	        case 'instagram': case 'ig': case 'igdl': /*{
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
                if (ban.includes(m.sender)) return m.reply(mess.only.banned)
                if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                if (args.length === 0) return m.reply(`Example: ${prefix + command} link`)
                if (!budy.includes('instagram.com')) return m.reply(mess.error.Iv)
                if (text.includes('stories')) return m.reply(`Sepertinya kamu ingin mengunduh dari link instagram story ya?\nGunakan perintah: *${prefix}igstory username*`)
                if (/(?:\/p\/|\/reel\/|\/tv\/)([^\s&]+)/.test(isUrl(text)[0])) {
                    m.reply(mess.wait)
                    IXB_Api.downloader.instagram.post(args[0])
                    .then(async(result) => {
                    ige = result.medias
                   console.log(result)
                  if (ige == null) m.reply(`An error occured`)
                  m.reply(`Data berhasil didapatkan!

Username: ${result.user.username}
Full Name: ${result.user.fullName}
Jumlah Media: ${ige.length}

Silahkan tunggu, media sedang dikirim.`)
                    for(let i of ige){
                            if (i.url.includes('.mp4')){
                                client.sendVideo(m.chat, i.url,'',m)
                            } else {
        client.sendMedia(m.chat, i.url, '', ``, m)
                            }
                        }
                })
            }
            limitAdd(m.sender)
                    }
                break*/
                case 'instagram2': case 'ig2': case 'igdl2': {
                    if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
                    if (ban.includes(m.sender)) return m.reply(mess.only.banned)
                    if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                    if (args.length === 0) return m.reply(`Example: ${prefix + command} link`)
                    if (!budy.includes('instagram.com')) return m.reply(mess.error.Iv)
                    if (text.includes('instagram.com/reel')) return m.reply(`Sepertinya kamu ingin download dari reels instagram ya? gunakan *${prefix}igreel* untuk mengunduh video dari instagram reel!`)
                    if (text.includes('stories')) return m.reply(`Sepertinya kakak ingin download dari link instagram story ya?\nGunakan perintah ${prefix}igstory username untuk mendownload dari ig story`)
                    if (/(?:\/p\/|\/reel\/|\/tv\/)([^\s&]+)/.test(isUrl(text)[0])) {
                    m.reply(mess.wait)
                    // anu = await fetchJson(`https://api.lolhuman.xyz/api/instagram?apikey=${LolApi}&url=${args[0]}`)
                    // ini_result = anu.result
                    anu = await fetchJson(`https://api-xcoders.xyz/api/download/ig?url=${text}&apikey=${ApiXcoders}`)
                    console.log(anu)
                    ige = anu.result.data
                    for (var x of ini_result) {
                        if (x.url.includes('.mp4')){
                            // client.sendVideo(m.chat, x,'',m)
                            client.sendMessage(m.chat, {video: {url: x.url}}, {quoted:m})
                        } else {
    // client.sendMedia(m.chat, x, '', ``, m)
    client.sendMessage(m.chat, {image: {url: x.url}}, {quoted:m})
                        }
                    }
                }
                limitAdd(m.sender)
                }
                break
            case 'instagramreel': case 'igreel': case 'igreels': {
                    if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
                    if (ban.includes(m.sender)) return m.reply(mess.only.banned)
                    if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                    if (!isPremium) return m.reply(mess.only.premium)
                    if (args.length === 0) return m.reply(`Example: ${prefix + command} link`)
                    if (!budy.includes('instagram.com')) return m.reply(mess.error.Iv)
                    if (text.includes('stories')) return m.reply(`Sepertinya kakak ingin download dari link instagram story ya?\nGunakan perintah ${prefix}igstory username untuk mendownload dari ig story`)
                    if (/(?:\/p\/|\/reel\/|\/tv\/)([^\s&]+)/.test(isUrl(text)[0])) {
                    m.reply(mess.wait)
                    // anu = await fetchJson(`https://api.lolhuman.xyz/api/instagram?apikey=${LolApi}&url=${args[0]}`)
                    // // anu = await IXB_Api.downloader.instagram.post(text)
                    // console.log(anu)
                    // ini_result = anu.result
                    try{
                    anu = await fetchJson(`https://api-xcoders.xyz/api/download/ig?url=${text}&apikey=${ApiXcoders}`)
                    console.log(anu)
                    ige = anu.result.data
                    client.sendMessage(m.chat, {video: {url: ige[0].url}}, {quoted:m})
                    } catch (err) {
                        anu = await fetchJson(`https://api.lolhuman.xyz/api/instagram?apikey=${LolApi}&url=${text}`)
                        client.sendMessage(m.chat, {video: {url: anu.result}}, {quoted:m})
                    }
                }
            }
                break
        case 'igstory': {
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
                if (ban.includes(m.sender)) return m.reply(mess.only.banned)
                if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                if (!isPremium) return m.reply(mess.only.premium)
                if (args.length === 0) return m.reply('Username?')
                m.reply(mess.wait)
                anu = await IXB_Api.downloader.instagram.story(args[0])
                ige = anu.medias
                console.log(anu)
                if (ige == null) m.reply(`An error occured`)
                for(let i of ige){
                    if (i.url.includes('.mp4')){
                        client.sendVideo(m.chat, i.url,'',m)
                    } else {
client.sendMedia(m.chat, i.url, '', ``, m)
                    }
                
        }
            }
                break
            case 'ighighlight': {
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
                if (ban.includes(m.sender)) return m.reply(mess.only.banned)
                if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                if (!isPremium) return m.reply(mess.only.premium)
                if (args.length === 0) return m.reply('Username?')
                m.reply(mess.wait)
                anu = await IXB_Api.downloader.instagram.story(args[0])
                ige = anu.medias
                console.log(anu)
                if (ige == null) m.reply(`An error occured`)
                for(let i of ige){
                    if (i.url.includes('.mp4')){
                        client.sendVideo(m.chat, i.url,'',m)
                    } else {
client.sendMedia(m.chat, i.url, '', ``, m)
                    }
                }
        }
                break
            case 'wa.me': case 'wame': case 'whatsappme':{
                m.reply(`wa.me/${m.sender.split('@')[0]}`)
                }
                break
            case 'cuaca':case 'infocuaca':{
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
                if (ban.includes(m.sender)) return m.reply(mess.only.banned)
                if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                if (args.length === 0) return m.reply(`Example: ${prefix + command} yogyakarta`)
                anu = await IXB_Api.search.cuaca.Cuaca(text)
                console.log(anu)
                get_result = anu.data
			    ini_txt = `Tempat : ${get_result.Nama}\n`
			    ini_txt += `Cuaca : ${get_result.Cuaca}\n`
			    ini_txt += `Angin : ${get_result.Angin}\n`
			    ini_txt += `Description : ${get_result.Keterangan}\n`
			    ini_txt += `Kelembapan : ${get_result.Kelembaban}\n`
			    ini_txt += `Suhu : ${get_result.Suhu}\n`
			    ini_txt += `Udara : ${get_result.Udara}\n`
			    client.sendMessage(m.chat, {location: { degreesLatitude: get_result.Latitude, degreesLongitude: get_result.Longitude }} ,{ quoted: m })
			    m.reply(ini_txt)
                limitAdd(m.sender)
            }
            break
            case 'gempa': case 'infogempa':{
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
                if (ban.includes(m.sender)) return m.reply(mess.only.banned)
                if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                get_result = await fetchJson(`http://api.lolhuman.xyz/api/infogempa?apikey=${LolApi}`)
                get_result = get_result.result
                ini_txt = `Lokasi : ${get_result.lokasi}\n`
                ini_txt += `Waktu : ${get_result.waktu}\n`
                ini_txt += `Potensi : ${get_result.potensi}\n`
                ini_txt += `Magnitude : ${get_result.magnitude}\n`
                ini_txt += `Kedalaman : ${get_result.kedalaman}\n`
                ini_txt += `Koordinat : ${get_result.koordinat}`
                client.sendMedia(m.chat, get_result.map, ini_txt,'',m)
                m.reply(ini_txt)
                limitAdd(m.sender)
            }
            break
            case 'joox': case 'jooxdl': {
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
                if (ban.includes(m.sender)) return m.reply(mess.only.banned)
                if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                if (args.length === 0) return m.reply(`Example: ${prefix + command} dewi`)
                m.reply(mess.wait)
                let anu = await fetchJson(`http://api.lolhuman.xyz/api/jooxplay?apikey=${LolApi}&query=${text}`)
                let msg = await client.sendImage(m.chat, anu.result.image, `Title : ${anu.result.info.song}\nAlbum : ${anu.result.info.album}\nSinger : ${anu.result.info.singer}\nPublish : ${anu.result.info.date}\nLirik :\n${anu.result.lirik}`, m)
                client.sendMessage(m.chat, { audio: { url: anu.result.audio[0].link }, mimetype: 'audio/mpeg', fileName: anu.result.info.song+'.m4a' }, { quoted: msg })
                limitAdd(m.sender)
            }
            break
	        case 'twtdl': case 'twitdl': case 'twitter': case 'twitterdl':{
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
                if (ban.includes(m.sender)) return m.reply(mess.only.banned)
                if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                if (!isPremium) return m.reply(mess.only.premium)
                if (args.length === 0) return m.reply(`Example: ${prefix + command} link`)
                m.reply(mess.wait)
                let anu = await IXB_Api.downloader.twitter.twitter(text)
                console.log(anu)
                let buttons = [
                    {buttonId: `twittermp3 ${text}`, buttonText: {displayText: 'Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.HD || anu.SD },
                    caption: util.format(anu.desc),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                client.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'twittermp3': case 'twitteraudio': {
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
                if (ban.includes(m.sender)) return m.reply(mess.only.banned)
                if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                if (args.length === 0) return m.reply(`Example: ${prefix + command} link`)
                m.reply(mess.wait)
                let anu = await IXB_Api.downloader.twitter.twitter(text)
                client.sendMessage(m.chat, { audio: { url: anu.audio } }, { quoted: m })
                limitAdd(m.sender)
            }
            break
            case 'fbdl': case 'fb': case 'facebook': {
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
                if (ban.includes(m.sender)) return m.reply(mess.only.banned)
                if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                if (args.length === 0) return m.reply(`Example: ${prefix + command} https://id-id.facebook.com/SamsungGulf/videos/video-bokeh/561108457758458/`)
                m.reply(mess.wait)
                try{
                anu = await fetchJson(`https://api.lolhuman.xyz/api/facebook?apikey=${LolApi}&url=${text}`)
                client.sendMessage(m.chat, {video: {url: anu.result}}, {quoted:m})
                limitAdd(m.sender)
                } catch (e) {
                    console.log(e)
                    m.reply(mess.error.bug)
                }
            }
            break
	        case 'fbdl2': case 'fb2': case 'facebook2': {
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
                if (ban.includes(m.sender)) return m.reply(mess.only.banned)
                if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                if (args.length === 0) return m.reply(`Example: ${prefix + command} https://id-id.facebook.com/SamsungGulf/videos/video-bokeh/561108457758458/`)
                m.reply(mess.wait)
                try{
                anu = await fetchJson(`https://api.vhtear.com/fbdl?link=${text}&apikey=${VthearApi}`)
                client.sendMessage(m.chat, {video: {url: anu.result.VideoUrl}}, {quoted:m})
                limitAdd(m.sender)
            } catch (e) {
                console.log(e)
                m.reply(mess.error.bug)
            }
            }
            break
	        case 'pindl': case 'pinterestdl': {
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
                if (ban.includes(m.sender)) return m.reply(mess.only.banned)
                if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                if (!isPremium) return m.reply(mess.only.premium)
                if (args.length === 0) return m.reply(`Example: ${prefix + command} https://pin.it/5Ac0eF1`)
                m.reply(mess.wait)
                anu = await pindl(text)
                client.sendVideo(m.chat, anu.result,'',m)
            }
            break
            case 'umma': case 'ummadl': {
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
                if (ban.includes(m.sender)) return m.reply(mess.only.banned)
                if (isLimit(m.sender)) return m.reply(mess.limituserbot)
	            if (!text) return m.reply(`Example : ${prefix + command} https://umma.id/channel/video/post/gus-arafat-sumber-kecewa-84464612933698`)
                let { umma } = require('./lib) scraper')
		        let anu = await umma(isUrl(text)[0])
		        if (anu.type == 'video') {
		        let buttons = [
                        {buttonId: `ytmp3 ${anu.media[0]} 128kbps`, buttonText: {displayText: '♫ Audio'}, type: 1},
                        {buttonId: `ytmp4 ${anu.media[0]} 360p`, buttonText: {displayText: '► Video'}, type: 1}
                    ]
		        let buttonMessage = {
		        image: { url: anu.author.profilePic },
			    caption: `
Title : ${anu.title}
Author : ${anu.author.name}
Like : ${anu.like}
Caption : ${anu.caption}
Url : ${anu.media[0]}
Untuk Download Media Silahkan Klik salah satu Button dibawah ini atau masukkan command ytmp3/ytmp4 dengan url diatas
`,
			footer: '',
			buttons,
			headerType: 4
		    }
		    client.sendMessage(m.chat, buttonMessage, { quoted: m })
		} else if (anu.type == 'image') {
		    anu.media.map(async (url) => {
		        client.sendMessage(m.chat, { image: { url }, caption: `Title : ${anu.title}\nAuthor : ${anu.author.name}\nLike : ${anu.like}\nCaption : ${anu.caption}` }, { quoted: m })
		    })
		}
        limitAdd(m.sender)
	    }
	    break
    case 'ringtone': {
        if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
        if (ban.includes(m.sender)) return m.reply(mess.only.banned)
         if (isLimit(m.sender)) return m.reply(mess.limituserbot)
		if (!text) return m.reply(`Example : ${prefix + command} black rover`)
        let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		client.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
        limitAdd(m.sender)
    }
	    break
        case 'bacaansholat':{
            if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
            m.reply(bacaansholat())
        }
        break
        case 'doaharian':{
            if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
            m.reply(doaharian())
        }
        break
        case 'ayatkursi':{
            if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
            m.reply(ayatkursi())
        }
        break
        case 'niatsholat':{
            if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
            m.reply(niatsholat())
        }
        break
        case 'tahlil':{
            if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
            m.reply(tahlil())
        }
        break
        case 'asmaulhusna':{
            if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
            m.reply(asmaulhusna())
        }
        break
        case 'jadwalsholat': {
            if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
        if (args.length == 0) return m.reply(`Example: ${prefix + command} Yogyakarta`)
        daerah = args.join(" ")
        get_result = await fetchJson(`http://api.lolhuman.xyz/api/sholat/${daerah}?apikey=${LolApi}`)
        get_result = get_result.result
         ini_txt = `Wilayah : ${get_result.wilayah}\n`
        ini_txt += `Tanggal : ${get_result.tanggal}\n`
        ini_txt += `Sahur : ${get_result.sahur}\n`
        ini_txt += `Imsak : ${get_result.imsak}\n`
        ini_txt += `Subuh : ${get_result.subuh}\n`
        ini_txt += `Terbit : ${get_result.terbit}\n`
        ini_txt += `Dhuha : ${get_result.dhuha}\n`
        ini_txt += `Dzuhur : ${get_result.dzuhur}\n`
        ini_txt += `Ashar : ${get_result.ashar}\n`
        ini_txt += `Maghrib : ${get_result.maghrib}\n`
        ini_txt += `Isya : ${get_result.isya}`
        m.reply(ini_txt)
        limitAdd(m.sender)
        } 
        break 
    case 'kisahnabi':{
        if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
        if (ban.includes(m.sender)) return m.reply(mess.only.banned)
        if (isLimit(m.sender)) return m.reply(mess.limituserbot)
		if (args.length == 0) return m.reply(`Example: ${prefix + command} Muhammad`)
        query = args.join(" ")
		get_result = await fetchJson(`http://api.lolhuman.xyz/api/kisahnabi/${query}?apikey=${LolApi}`)
		get_result = get_result.result
		ini_txt = `Name : ${get_result.name}\n`
		ini_txt += `Lahir : ${get_result.thn_kelahiran}\n`
		ini_txt += `Umur : ${get_result.age}\n`
		ini_txt += `Tempat : ${get_result.place}\n`
		ini_txt += `Story : \n${get_result.story}`
		m.reply(ini_txt)
        limitAdd(m.sender)
        }
	    break
	case 'iqra': {
        if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
        if (ban.includes(m.sender)) return m.reply(mess.only.banned)
        if (isLimit(m.sender)) return m.reply(mess.limituserbot)
		oh = `Example : ${prefix + command} 3\n\nIQRA Yang tersedia : 1,2,3,4,5,6`
		if (!text) return m.reply(oh)
		yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
		client.sendMessage(m.chat, {document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`}, {quoted:m}).catch ((err) => m.reply(oh))
		limitAdd(m.sender)
        }
		break
    case 'topdf':{
        if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
        if (ban.includes(m.sender)) return m.reply(mess.only.banned)
        if (isLimit(m.sender)) return m.reply(mess.limituserbot)
        if (!quoted) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
	    if (!/image/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
        let { TelegraPh } = require('./lib/uploader')
        let media = await client.downloadAndSaveMediaMessage(quoted)
        m.reply(mess.wait)
        let anu = await TelegraPh(media)
        fs.unlinkSync(media)
		yy = await getBuffer(`https://api.lolhuman.xyz/api/convert2pdf?apikey=${LolApi}&filename=${namabot}-${time}.png&file=${anu}`)
		client.sendMessage(m.chat, {document: yy, mimetype: 'application/pdf', fileName: `${namabot}-${time}`}, {quoted:m}).catch ((err) => m.reply(mess.error.bug))
		limitAdd(m.sender)
        }
        break
    case 'mediafire': case 'mediafiredl':{
            if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
            const { mediafireDl } = require('./lib/mediafire.js')
            if (!text) return m.reply(`Example: ${prefix + command} link`)
            m.reply(mess.wait)
            try{
            res = await mediafireDl(text)
				result = `*Data Berhasil Didapatkan!*

*Title :* ${res[0].nama}
*Size :* ${res[0].size}
*Link :* ${res[0].link}


_Silahkan tunggu file sedang dikirim mungkin butuh beberapa menit_`
			    m.reply(result)
                anu = await getBuffer(res[0].link)
		client.sendMessage(m.chat, {document: anu, mimetype: res[0].mime, fileName: res[0].nama}, {quoted:m}).catch ((err) => m.reply(oh))
            } catch (err) {
                console.log(err)
                m.reply(err)
            }
        }
        break
	case 'juzamma': {
        if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
        if (ban.includes(m.sender)) return m.reply(mess.only.banned)
        if (isLimit(m.sender)) return m.reply(mess.limituserbot)
		if (args[0] === 'pdf') {
		m.reply(mess.wait)
		client.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'}, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf'}, {quoted:m})
		} else if (args[0] === 'docx') {
		m.reply(mess.wait)
		client.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'}, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx'}, {quoted:m})
		} else if (args[0] === 'pptx') {
		m.reply(mess.wait)
		client.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'}, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx'}, {quoted:m})
		} else if (args[0] === 'xlsx') {
		m.reply(mess.wait)
		client.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'}, mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileName: 'juz-amma-arab-latin-indonesia.xlsx'}, {quoted:m})
		} else {
		m.reply(`Mau format apa ? Example : ${prefix + command} pdf

Format yang tersedia : pdf, docx, pptx, xlsx`)
		}
        limitAdd(m.sender)
		}
		break
	case 'hadis': case 'hadist': {
        if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
        if (ban.includes(m.sender)) return m.reply(mess.only.banned)
        if (isLimit(m.sender)) return m.reply(mess.limituserbot)
		if (!args[0]) return m.reply(`Contoh:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1

Pilihan tersedia:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibnu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`)
		if (!args[1]) return m.reply(`Hadis yang ke berapa?\n\ncontoh:\n${prefix + command} muslim 1`)
		try {
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
		let { number, arab, id } = res.find(v => v.number == args[1])
		m.reply(`No. ${number}

${arab}

${id}`)
limitAdd(m.sender)
		} catch (e) {
		m.reply(`Hadis tidak ditemukan !`)
		}
		}
		break
	case 'alquran': {
        if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
        if (ban.includes(m.sender)) return m.reply(mess.only.banned)
        if (isLimit(m.sender)) return m.reply(mess.limituserbot)
		if (!args[0]) return m.reply(`Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`)
		if (!args[1]) return m.reply(`Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`)
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `*Arab* : ${res.result.data.text.arab}
*English* : ${res.result.data.translation.en}
*Indonesia* : ${res.result.data.translation.id}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		m.reply(txt)
		client.sendMessage(m.chat, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg'}, { quoted : m })
		limitAdd(m.sender)
    }
		break
	case 'tafsirsurah': {
        if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
        if (ban.includes(m.sender)) return m.reply(mess.only.banned)
        if (isLimit(m.sender)) return m.reply(mess.limituserbot)
		if (!args[0]) return m.reply(`Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`)
		if (!args[1]) return m.reply(`Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`)
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `「 *Tafsir Surah*  」

*Pendek* : ${res.result.data.tafsir.id.short}

*Panjang* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		m.reply(txt)
        limitAdd(m.sender)
		}
		break
    case 'fuckboy':case 'fuckgirl':case 'bucinserti':case 'toloserti':case 'goodboy':case 'goodgirl':case 'badboy':case 'badgirl':{
            if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
            if (!isPremium) return m.reply(mess.only.premium)
		         		if (args.length == 0) return m.reply(`Example: ${prefix + command} Nabila`)
						m.reply(`tunggu yaahh ${pushname} kagak bakal lama. *Nggak kayak Nunggu si dia yang ngga pernah Datang Datang*`)
						query = args.join(" ")
						cap = `Ini kak ${pushname} \nUdah jadi pesanannya`
						client.sendMedia(m.chat,`http://api.lolhuman.xyz/api/${command}?apikey=${LolApi}&name=${query}`,'',cap, m)
        }
						break
			case 'pacarserti':{
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
                if (ban.includes(m.sender)) return m.reply(mess.only.banned)
                if (isLimit(m.sender)) return m.reply(mess.limituserbot)
				if (!isPremium) return m.reply(mess.only.premium)
				if (args.length == 0) return m.reply(`Example: ${prefix + command} Imam & Nabila`)
			    m.reply( `tunggu yaahh ${pushname} kagak bakal lama. *Nggak kayak Nunggu si dia yang ngga pernah Datang Datang*`)
				cap = `Ini kak ${pushname} \nUdah jadi pesanannya`
				let [nama11, nama22] = q.split`&`
				if (!nama11) return m.reply(`Nama anda tidak boleh kosong`)
				if (!nama22) return m.reply(`Nama pasangan anda tidak boleh kosong`)
				client.sendMedia(m.chat,`http://api.lolhuman.xyz/api/pacarserti?apikey=${LolApi}&name1=${nama11}&name2=${nama22}`,'',cap, m)
                }
                break
		   case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
            if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)    
           try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                m.reply(mess.wait)
                let media = await client.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err)
                let buff = fs.readFileSync(ran)
                client.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                limitAdd(m.sender)
                })
                } else m.reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
                } catch (e) {
                m.reply(e)
                }
                break
            case 'setcmd': {
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                if (!m.quoted) return m.reply('Reply Pesan!')
                if (!m.quoted.fileSha256) return m.reply('SHA256 Hash Missing')
                if (!text) return m.reply(`Untuk Command Apa?`)
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.sticker[hash] && global.db.sticker[hash].locked) return m.reply('You have no permission to change this sticker command')
                global.db.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                m.reply(`Done!`)
            }
            break
            case 'delcmd': {
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) return m.reply(`Tidak ada hash`)
                if (global.db.sticker[hash] && global.db.sticker[hash].locked) return m.reply('You have no permission to delete this sticker command')              
                delete global.db.sticker[hash]
                m.reply(`Done!`)
            }
            break
            case 'listcmd': {
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                client.sendText(m.chat, teks, m, { mentions: Object.values(global.db.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case 'lockcmd': {
                if (!isCreator) return m.reply(mess.only.ownerB)
                if (!m.quoted) return m.reply('Reply Pesan!')
                if (!m.quoted.fileSha256) return m.reply('SHA256 Hash Missing')
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.sticker)) return m.reply('Hash not found in database')
                global.db.sticker[hash].locked = !/^un/i.test(command)
                m.reply('Done!')
            }
            break
            case 'addmsg': {
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                if (!m.quoted) return m.reply('Reply Message Yang Ingin Disave Di Database')
                if (!text) return m.reply(`Example : ${prefix + command} nama file`)
                let msgs = global.db.database
                if (text.toLowerCase() in msgs) return m.reply(`'${text}' telah terdaftar di list pesan`)
                msgs[text.toLowerCase()] = quoted.fakeObj
m.reply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'
    
Akses dengan ${prefix}getmsg ${text}

Lihat list Pesan Dengan ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                if (!text) return m.reply(`Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`)
                let msgs = global.db.database
                if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' tidak terdaftar di list pesan`)
                client.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
	        let seplit = Object.entries(global.db.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 LIST DATABASE 」\n\n'
		for (let i of seplit) {
		    teks += `❏ *Name :* ${i.nama}\n❏ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        m.reply(teks)
	    }
	    break
            case 'delmsg': case 'deletemsg': {
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
	        let msgs = global.db.database
	        if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' tidak terdaftar didalam list pesan`)
		delete msgs[text.toLowerCase()]
		m.reply(`Berhasil menghapus '${text}' dari list pesan`)
            }
	    break
	    case 'anonymous': {
            if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
				this.anonymous = this.anonymous ? this.anonymous : {}
				let buttons = [
                    { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                ]
                client.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await client.getName(m.sender)} Welcome To Anonymous Chat\n\nKlik Button Dibawah Ini Untuk Mencari Partner\`\`\``, '', m)
            }
			break
            case 'keluar': case 'leave': {
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await client.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner \`\`\``)
                    throw false
                }
                m.reply('Ok')
                let other = room.other(m.sender)
                if (other) await client.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[room.id]
                if (command === 'leave') break
            }
            case 'mulai': case 'start': {
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await client.sendButtonText(m.chat, buttons, `\`\`\`Kamu Masih Berada Di dalam Sesi Anonymous, Tekan Button Dibawah Ini Untuk Menghentikan Sesi Anonymous Anda\`\`\``, '', m)
                    throw false
                }
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await client.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, '', m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await client.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, '', m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await client.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, '', m)
                }
                break
            }
            case 'next': case 'lanjut': {
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await client.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner\`\`\``)
                    throw false
                }
                let other = romeo.other(m.sender)
                if (other) await client.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[romeo.id]
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await client.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, '', m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await client.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, '', m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await client.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, '', m)
                }
                break
            }
            case 'public': case 'unbanchat': {
                if (!isCreator) return m.reply(mess.only.ownerB)
                // client.public = true
                banChat = false
                m.reply('Sukse Change To Public Usage')
            }
            break
            case 'self': case 'banchat':{
                if (!isCreator) return m.reply(mess.only.ownerB)
                // client.public = false
                banChat = true
                m.reply('Sukses Change To Self Usage')
            }
            break
            case 'harta': case 'tahta':{
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                if (args.length === 0) return m.reply(`Example: ${prefix + command} dewi`)
                client.sendMedia(m.chat, `https://api.lolhuman.xyz/api/hartatahta?apikey=${LolApi}&text=${text}`,'','',m)
                limitAdd(m.sender)
            }
            break
            case 'tahtapremium':{
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
				if (!isPremium) return m.reply(mess.only.premium)
				if (args.length == 0) return m.reply(`Example: ${prefix + command} Imam Dewi`)
				query = args.join("%0A")
                m.reply(mess.wait)
                ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/hartacustom?apikey=${LolApi}&text=${query}`)
                client.sendMessage(from, {image: ini_buffer},  {quoted: m})
             }
                break
            case 'snk':{
					m.reply(`*Syarat & Ketentuan ${namabot}*

1. Teks dan nama pengguna whatsapp anda kami simpan di dalam server selama bot aktif.
2. Kami tidak menyimpan gambar, video, file, audio, dan dokumen yang anda kirim.
3. Kami tidak pernah meminta anda untuk memberikan informasi pribadi.
4. Jika menemukan bug/error silahkan langsung lapor ke owner bot.
5. Cukup perintah 1x jika bot tidak merespon harap ulangi kembali, Jika di ulangi kembali tidak merespon, bot tidak aktif
6. Dilarang spam, Telpon, Video call, atau kami akan blokir anda.
7. Apapun yang anda perintah pada bot ini, dosa ditanggung sendiri !
8. Apapun yang anda perintah pada bot ini, *KAMI TIDAK BERTANGGUNG JAWAB!*

*Hal Yang Sering Ditanyakan / FAQ:*
Q: Kak prefix bot ini apa ya?
A: Bot ini menggunakan multi prefix

Q: Kak kok saya chat owner tidak dibalas?
A: Owner hanya akan membalas pertanyaan seputar bot dan kendala error, tidak untuk berkenalan ataupun mengemis script ini.

Q: Kak saya bisa beli script ini?
A: Bisa, anda tinggal chat owner bot

Q: Saya mau jadi owner bot apakah bisa?
A: Bisa, anda tinggal chat owner bot

Q: Kak saya mau joinin / invite botnya ke gc saya bisa kak?
A: Bisa, silahkan ketik #sewa kemudian klik checkout. atau silahkan hub owner bot ini dengan mengetik #owner

Q: Kak kok bot nya ga aktif? 
A: Kemungkinan kendala jaringan / sedang backup data / update

Q: Kak saya salah kick bot, apakah bisa diivite kembali?
A: Maaf, jika dikick tidak bisa ya. silahkan sewa ulang kembali sesuai harga yang tertera

Q: Kak kok botnya out dari gc saya?
A: Kemungkinan durasi sewa sudah habis

Q: Kak saya kok dibanned / blokir sama bot ya?
A: Kemungkinan kakak melakukan spam / flooding request terhadap bot

Q: Kak saya dibanned sama bot apakah bisa di unban kak?
A: Jika sudah diban mohon maaf, kami tidak dapat unbanned kakak dengan alasan apapun!

Q: Kak saya di blokir bot karena ga sengaja telfon bot, apakah bisa di buka kak?
A: Bisa, tapi lain kali mohon baca #snk bot terlebih dahulu ya:)

Q: Kak saya ganti nomor, apakah premium di nomor lama bisa dipindah?
A: Tidak bisa ya kak:)

Q: Kak semisal saya pindah gc botnya bisa dipindah kak?
A: Bisa, kirim aja linknya ke owner dan sertakan durasi sewa di gc sebelumnya dengan mengetik ${prefix}ceksewa ,note: jika tidak disertakan bukti maka tidak dapat dipindah ya kak:)

*Note:*
1. Owner dapat sewaktu2 merubah ketentuan pada bot ini
2. Dilarang keras spam, jika ketahuan. InsyaAllah akan di block :)

TERIMA KASIH !`)
        }
					break
            case 'tts':{
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
                if (ban.includes(m.sender)) return m.reply(mess.only.banned)
                if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                try{
                if (args.length < 1) return m.reply('Kode bahasanya mana kak?')
                gtts = require('./lib/gtts')(args[0])				   
                if (args.length < 2) return m.reply('Textnya mana kak?')
                dtt = body.slice(8)
                ranm = getRandom('.mp3')
                dtt.length > 600
                ? m.reply('Textnya kebanyakan kak')
                : gtts.save(ranm, dtt, function() {
                sendPTT(m.chat, fs.readFileSync(ranm))
                fs.unlinkSync(ranm)
                limitAdd(m.sender)
                })
                } catch (e) {
                console.log(`Error :`, color(e,'red'))
                m.reply(`Error! kode bahasa tidak terdaftar.\nKirim: ${prefix + command} kode text\nUntuk list bahasa kirim: ${prefix}listbahasa\nContoh: ${prefix + command} id hai`)
                }
                }
                break
            case 'xvideos':{
                        if (!isOwner && !isPremium) return m.reply(mess.only.premium)
					    if (args.length == 0) return m.reply(`Example: ${prefix + command} handjob`)
						m.reply('Sedang di proses... *Note: Dosa tanggung sendiri*')
					    try{
							anu = await fetchJson(`https://mnazria.herokuapp.com/api/porn?search=${encodeURIComponent(q)}`)
							mbuh = `*Hasil pencarian :* ${q}\n\n`
							for (let i = 0; i < anu.result.length; i++) {
								mbuh += `*Title :* ${anu.result[i].title}
*Actors :* ${anu.result[i].actors}
*Duration :* ${anu.result[i].duration}
*Url :* ${anu.result[i].url}
================\n`     }
                        m.reply(mbuh)
				        } catch (e) {
				        console.log(`Error :`, color(e,'red'))
				        m.reply(mess.error.bug)
			            }
                    }
					    break
					case 'xvideosdl':{
						if (!isOwner && !isPremium) return m.reply(mess.only.premium)
					    if (args.length == 0) return m.reply(`Example: ${prefix + command} https://www.xvideos.com/video105658/bathroom_handjob`)
					    m.reply('Sedang diproses... membutuhkan waktu 2-5 menit\n*Note : Dosa tanggung sendiri*')
						try{
						anu = await fetchJson(`https://mnazria.herokuapp.com/api/porndownloadxvideos?url=${args[0]}`)
						captXvideos = `*「 XVIDEOS DOWNLOADER 」*\n\n*Ext :* MP4\n*Link :* ${anu.mp4}\n*Silahkan download file media melalui link yang tersedia.*\n*Note : Dosa tanggung sendiri*`
                        xxvideo = await getBuffer(`https://telegra.ph/file/a4a83265f94b098fe3c24.jpg`)
						//reply(captXvideos)
						client.sendVideo(m.chat, anu.mp4,'',m)
						//client.sendMessage(from, xxvideo, image, {quoted:mek, caption:captXvideos})
				        } catch (e) {
				        console.log(`Error :`, color(e,'red'))
				        m.reply(mess.error.bug)
			            }
                    }
						break
                    case 'xnxxsearch':
                            if (!isOwner && !isPremium) return m.reply(mess.only.premium)
                            //if (!isPremium) return m.reply(mess.only.premium)
                            if (args.length == 0) return m.reply(`Example: ${prefix + command} jilbob`)
                            m.reply ('otw gan... *DOSA TANGGUNG SENDIRI*')
                            query = args.join(" ")
                            get_result = await fetchJson(`http://api.lolhuman.xyz/api/xnxxsearch?apikey=${LolApi}&query=${query}`)
                            get_result = get_result.result
                            ini_txt = ""
                            for (var x of get_result) {
                                ini_txt += `Title : ${x.title}\n`
                                ini_txt += `Views : ${x.views}\n`
                                ini_txt += `Duration : ${x.duration}\n`
                                ini_txt += `Uploader : ${x.uploader}\n`
                                ini_txt += `Link : ${x.link}\n`
                                ini_txt += `Thumbnail : ${x.thumbnail}\n\n`
                            }
                            m.reply(ini_txt)
                            break
                        case 'xnxxdl':
                                if (!isOwner && !isPremium) return m.reply(mess.only.premium)
                                //if (!isPremium) return m.reply(mess.only.premium)
                                if (args.length == 0) return m.reply(`Example: ${prefix + command} https://www.xnxx.com/video-uy5a73b/mom_is_horny_-_brooklyn`)
                                try{
                                anu = await fetchJson(`http://api.lolhuman.xyz/api/xnxx?apikey=${LolApi}&url=${args[0]}`)
                                yty = `*Title :* ${anu.result.title}\n*Duration :* ${anu.result.duration}\n*View :* ${anu.result.view}\n*Rating :* ${anu.result.rating}\n*VIDEO LAGI DI DOWNLOAD 1-5 MENIT*\n\nNOTE: DOSA TANGGUNG SENDIRI`
                                bufft = await getBuffer(anu.result.thumbnail)
                                m.reply(mess.wait)
                                client.sendMessage(from, { image: bufft, caption: yty}, {quoted: m})
                                client.sendVideo(m.chat, anu.result.link[1].link,'',m)
                                } catch (e) {
                                console.log(`Error :`, color(e,'red'))
                                m.reply(mess.error.bug)
                                }
                                break
                case'listbahasa':{
                    if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
                    if (ban.includes(m.sender)) return m.reply(mess.only.banned)
                    if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                    const { bahasa } = require('./lib/bahasa')
                    m.reply(bahasa())
                }
				    break
            case 'ping': case 'botstatus': case 'statusbot': case 'stats': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                anu = `◪ SERVER INFO
» SERVER : ${os.hostname()}
» PLATFORM : ${os.platform()}
» VERSION : ${os.version()}
» RAM : ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
» SPEED : ${os.cpus()[0].speed} MHz
» CPU : ${os.cpus().length}
» UPTIME : ${kyun(os.uptime())}
		
◪ PHONE INFO
» Merk HP : iPhone 12 Pro Max
» Versi OS : iOS 14.1

◪ DATABASE INFO
» Premium User : ${prem.length}
» Total Sewa : ${sewa.length}
» Banned User : ${ban.length}

Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}`

/*_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim() */
                m.reply(anu)
            }
            break
            case 'owner': case 'creator': {
                client.sendContact(m.chat, global.owner, m)
            }
            break
            case 'ixbgroup': case 'ixbgrup': case 'grupbot': case 'gcbot': {
                m.reply(`Halo ${pushname}, ${ixbgroup}`)
            }
            break
            case 'gcsetting': case 'gcset':{
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                if (!isAdmins && !isOwner && !m.key.fromMe) return m.reply(mess.only.admin)
            sections = [
    {
	title: `Please select here ${pushname}`,
	rows: [
        {title: "Group Open", rowId: ".grup open", description: ""},
        {title: "Group Close", rowId: ".grup close", description: ""},
        {title: "Welcome On", rowId: ".welcome on", description: ""},
        {title: "Welcome Off", rowId: ".welcome off", description: ""},
        {title: "Antilink On", rowId: ".antilink on", description: ""},
        {title: "Antilink Off", rowId: ".antilink Off", description: ""},
        {title: "Antivirtext On", rowId: ".antivirtext on", description: ""},
        {title: "Antivirtext Off", rowId: ".antivirtext Off", description: ""},
        {title: "Mute On", rowId: ".mute on", description: ""},
        {title: "Mute Off", rowId: ".mute off", description: ""},
        {title: "Edit Info", rowId: ".editinfo", description: ""},
        {title: "Mulai Absen", rowId: ".mulaiabsen", description: ""},
	]
    },
]

const listMessage = {
  text: `Hi ${pushname}, Please select the menu you need here`,
  footer: "",
  title: "",
  buttonText: "CLICK HERE",
  sections
}

client.sendMessage(m.chat, listMessage, { quoted: m })
            }
            break
        case 'menu': case 'help': {
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
                if (ban.includes(m.sender)) return m.reply(mess.only.banned)
                if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                var { key: id } = m.quoted ? m.quoted.fakeObj: m
                await client.relayMessage(m.chat, {
                reactionMessage: { key: id, 
                text: "💙", 
                senderTimestampMs: m.messageTimestamp }}, { 
                messageId: m.id });
				uptime = process.uptime()
                menu = `Hi ${pushname}, ${ucapanWaktu}

◪ User Information
» Name : ${pushname}
» Status : ${isCreator ? `Owner`: isPremium ? `User Premium`:`User Free`}
» Limit : ${isCreator ? `Unlimited`: isPremium ? `Unlimited`:`${sisaLimit.replace('-','')} / ${global.limitawal.free}`}

◪ System Information
» Type : Multi-Device
» OS Platform : ${os.platform()}
» Active : ${kyun(uptime)}
» Time : ${jam} WIB
» Date : ${week_} ${weton_}, ${date_}
» Islamic Date : ${dateIslamic}

◪ Note
» Use with wise!
» Don't call, spam, or we'll block you!
» This bot is currently under system development, please don't spam and if you find an error, report the owner of this bot immediately.
» And if you like this bot and want to help the owner of this bot in its development you can contribute to this project or you can also support it by donating. Thank you!`
// » This bot is no longer being updated, so if you report a bug we will not respond!`
let btn = [
    { index: 1, urlButton: {displayText: 'ᴄᴏɴɴᴇᴄᴛ ᴡɪᴛʜ ᴍᴇ', url: ''}},
    { index: 2, quickReplyButton: {displayText: 'ꜱᴇᴡᴀ',id: '.sewa'}}, 
    { index: 3, quickReplyButton: {displayText: 'ᴏꜰꜰɪᴄɪᴀʟ ɢʀᴏᴜᴘ',id: '.ixbgroup'}},
    { index: 4, quickReplyButton: {displayText: 'ʟɪꜱᴛ ᴍᴇɴᴜ', id: '.listmenu'}}
    ]
const templateMessage = {
    text: menu,
    footer: 'Powered by https://invitelia.id',
    templateButtons: btn
}
// client.sendMessage(m.chat, templateMessage, {quoted:m})
// client.send5But(m.chat, menu, '', btn, opt = { mentions:m.sender, quoted: m })
// client.send5ButImg(m.chat, menu, 'IXB-BOT', global.thumb, btn)
let buttons = [
    { buttonId: '.listmenu', buttonText: { displayText: 'List Menu' }, type: 1 },
    { buttonId: '.sewa', buttonText: { displayText: 'Sewa' }, type: 1 },
    { buttonId: '.ixbgroup', buttonText: { displayText: 'Official Group' }, type: 1 }
]
await client.sendButtonText(m.chat, buttons, menu, '', m)
            }
            break
        case 'listmenu':{
sections = [
    {
	title: `Please select here ${pushname}`,
	rows: [
        {title: "Sewa Bot", rowId: ".sewa", description: ""},
        {title: "All Menu", rowId: ".allmenu", description: ""},
	    {title: "Group Menu", rowId: ".gcmenu", description: ""},
        {title: "Group Setting", rowId: ".gcset", description: ""},
        {title: "Premium Menu", rowId: ".premiummenu", description: ""},
	    {title: "Download & Search Menu", rowId: ".dsmenu", description: ""},
        {title: "Random Menu", rowId: ".randommenu", description: ""},
        {title: "Fun Menu", rowId: ".funmenu", description: ""},
        {title: "Islam Menu", rowId: ".islammenu", description: ""},
        {title: "Converter Menu", rowId: ".convertmenu", description: ""},
        {title: "Anonymous Menu", rowId: ".anonmenu", description: ""},
        {title: "Creator Menu", rowId: ".creatormenu", description: ""},
        {title: "Other Menu", rowId: ".othermenu", description: ""},
        {title: "Official Group", rowId: ".ixbgroup", description: ""},
        {title: "Owner Menu", rowId: ".ownermenu", description: ""}
	]
    },
]

const listMessage = {
  text: `Hi ${pushname}, Please select the menu you need here`,
  footer: '',
  title: "",
  buttonText: "CLICK HERE",
  sections
}
client.sendMessage(m.chat, listMessage, { quoted: m})
            }
            break
            case 'premiummenu': {
                if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
                if (ban.includes(m.sender)) return m.reply(mess.only.banned)
                if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                premimenunye = `Hi ${pushname}, ${ucapanWaktu}

◪ User Information
» Name : ${pushname}
» Status : ${isCreator ? `Owner`: isPremium ? `User Premium`:`User Free`}
» Limit : ${isCreator ? `Unlimited`: isPremium ? `Unlimited`:`${sisaLimit.replace('-','')} / ${global.limitawal.free}`}
» Note : If you are a free user, You cannot access the features in this premium menu.

◪ Premium
» ${prefix}qrreader [foto]
» ${prefix}tourl [foto/video]
» ${prefix}removebg [foto]
» ${prefix}esticker [emoticon]
» ${prefix}smeme [foto]
» ${prefix}stickerwm [foto/video]
» ${prefix}takestick [reply sticker]
» ${prefix}triggered [tag foto]
» ${prefix}asupan
» ${prefix}nulis2 [text]
» ${prefix}stickerpatrick
» ${prefix}stickeranjing
» ${prefix}stickerbucin
» ${prefix}gawrgura
» ${prefix}coganasli
» ${prefix}cecanasli
» ${prefix}tahtapremium [text]

◪ Downloader
» ${prefix}ytpremium [query]
» ${prefix}ytmp3premium [url]
» ${prefix}ytmp4premium [url]
» ${prefix}chordlagu [query]
» ${prefix}liriklagu [query]
» ${prefix}stickerwa [query]
» ${prefix}telesticker [url]
» ${prefix}tiktokpremium [url]
» ${prefix}igreels [url]
» ${prefix}igstory [username]
» ${prefix}ighighlight [username]
» ${prefix}twitter [url type video]
» ${prefix}ytshort [url]
» ${prefix}pinterestdl [url]
» ${prefix}xnxxsearch [query]
» ${prefix}xnxxdl [url]
» ${prefix}xvideos [query]
» ${prefix}xvideosdl [url]

◪ Photo Oxy
» ${prefix}shadow [text]
» ${prefix}cup [text]
» ${prefix}cup1 [text]
» ${prefix}romance [text]
» ${prefix}smoke [text]
» ${prefix}burnpaper [text]
» ${prefix}lovemessage [text]
» ${prefix}undergrass [text]
» ${prefix}love [text]
» ${prefix}woodheart [text]
» ${prefix}woodenboard [text]
» ${prefix}summer3d [text]
» ${prefix}wolfmetal [text]
» ${prefix}nature3d [text]
» ${prefix}underwater [text]
» ${prefix}golderrose [text]
» ${prefix}summernature [text]
» ${prefix}letterleaves [text]
» ${prefix}glowingneon [text]
» ${prefix}fallleaves [text]
» ${prefix}flamming [text]
» ${prefix}harrypotter [text]
» ${prefix}carvedwood [text]

◪ Ephoto
» ${prefix}wetglass [text]
» ${prefix}multicolor3d [text]
» ${prefix}watercolor [text]
» ${prefix}luxurygold [text]
» ${prefix}galaxywallpaper [text]
» ${prefix}lighttext [text]
» ${prefix}beautifulflower [text]
» ${prefix}puppycute [text]
» ${prefix}royaltext [text]
» ${prefix}heartshaped [text]
» ${prefix}birthdaycake [text]
» ${prefix}galaxystyle [text]
» ${prefix}hologram3d [text]
» ${prefix}greenneon [text]
» ${prefix}glossychrome [text]
» ${prefix}greenbush [text]
» ${prefix}metallogo [text]
» ${prefix}noeltext [text]
» ${prefix}glittergold [text]
» ${prefix}textcake [text]
» ${prefix}starsnight [text]
» ${prefix}wooden3d [text]
» ${prefix}textbyname [text]
» ${prefix}writegalacy [text]
» ${prefix}galaxybat [text]
» ${prefix}snow3d [text]
» ${prefix}birthdayday [text]
» ${prefix}goldplaybutton [text]
» ${prefix}silverplaybutton [text]
» ${prefix}freefire [text]

◪ Premium Photo Filter
» ${prefix}1977  [tag foto]
» ${prefix}aden  [tag foto]
» ${prefix}brooklyn  [tag foto]
» ${prefix}clarendon  [tag foto]
» ${prefix}gingham  [tag foto]
» ${prefix}hudson  [tag foto]
» ${prefix}inkwell  [tag foto]
» ${prefix}earlybird  [tag foto]
» ${prefix}kelvin  [tag foto]
» ${prefix}lark  [tag foto]
» ${prefix}lofi  [tag foto]
» ${prefix}maven  [tag foto]
» ${prefix}mayfair  [tag foto]
» ${prefix}moon  [tag foto]
» ${prefix}nashville  [tag foto]
» ${prefix}perpetua  [tag foto]
» ${prefix}reyes  [tag foto]
» ${prefix}rise  [tag foto]
» ${prefix}slumber  [tag foto]
» ${prefix}stinson  [tag foto]
» ${prefix}toaster  [tag foto]
» ${prefix}valencia  [tag foto]
» ${prefix}walden  [tag foto]
» ${prefix}willow  [tag foto]
» ${prefix}xpro2  [tag foto]

◪ Premium Sertifikat
» ${prefix}fuckboy  [text]
» ${prefix}fuckgirl  [text]
» ${prefix}bucinserti  [text]
» ${prefix}toloserti  [text]
» ${prefix}goodboy  [text]
» ${prefix}goodgirl  [text]
» ${prefix}badboy  [text]
» ${prefix}badgirl  [text]
» ${prefix}pacarserti  [text & text]

◪ DJ Khusus Premium
 Tanpa [ ${prefix} ]
» jujur
» goyang
» menimisu
» aduh
» ampun
» anjay
» dingin
» foya
» gatalsa
» iri
» mantap
» masih
» rindu
» semua
» setiap
» tapi
» cinta
» whitecoffe
» darkside
» gemes
» playdate
» tonight
» goyangdumang
» jadikanakuyangkedua`

            // m.reply(premimenunye)
            client.sendButtonText(m.chat, [{ buttonId: 'sewa', buttonText: { displayText: 'ᴅᴀꜰᴛᴀʀ ᴘʀᴇᴍɪᴜᴍ' }, type: 1 }], premimenunye,'If you are interested in premium membership, please type #daftarpremium to enjoy all features.',m)
            }
            break
        case 'donate': case 'donasi': {
              m.reply(`*DONATE*

Pulsa: 085600068859 (Indosat)
Untuk donasi melalui e-wallet / bank: ( Dana / Ovo / Shopee-pay / BNI ), silahkan chat owner wa.me/${global.owner}
Berapapun donasi dari kalian sangat berarti bagi kami. kami ucapkan terima kasih untuk kalian yang sudah berkenan donasi, semoga kebaikan kalian menjadi pahala untuk kalian. Thank You!`)
            }
            break
        case 'bot': case 'hai': case 'hi': case 'halo': case 'kak': case 'kk':{
            // if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (!m.isGroup && !isPremium) return
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                let buttons = [{ buttonId: '.menu', buttonText: { displayText: 'ᴍᴇɴᴜ' }, type: 1 }]
            await client.sendButtonText(m.chat, buttons, `Hi kak ${pushname}, ada yang bisa kami bantu?`, '', floc)
            // m.reply(`Hi kak ${pushname}, ada yang bisa kami bantu?`)
            }
            break
        case 'allmenu':{
            if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                anu = `Hi ${pushname}, ${ucapanWaktu}

◪ User Information
» Name : ${pushname}
» Status : ${isCreator ? `Owner`: isPremium ? `User Premium`:`User Free`}
» Limit : ${isCreator ? `Unlimited`: isPremium ? `Unlimited`:`${sisaLimit.replace('-','')} / ${global.limitawal.free}`}

${grupmenu(prefix)}

${dsmenu(prefix)}

${randommenu(prefix)}

${funmenu(prefix)}

${islammenu(prefix)}

${convertmenu(prefix)}

${anonymousmenu(prefix)}

${creatormenu(prefix)}

${othermenu(prefix)}`
let buttons = [
    { buttonId: '.menu', buttonText: { displayText: 'ʙᴀᴄᴋ ᴛᴏ ᴍᴇɴᴜ' }, type: 1 },
    { buttonId: '.ixbgroup', buttonText: { displayText: 'ᴏꜰꜰɪᴄɪᴀʟ ɢʀᴏᴜᴘ' }, type: 1 }
]
await client.sendButtonText(m.chat, buttons, anu, '', m)
            // m.reply(anu)
            }
            break
        case 'groupmenu': case 'grupmenu': case 'gcmenu':{
            if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                m.reply(`Hi ${pushname}, ${ucapanWaktu}

◪ User Information
» Name : ${pushname}
» Status : ${isCreator ? `Owner`: isPremium ? `User Premium`:`User Free`}
» Limit : ${isCreator ? `Unlimited`: isPremium ? `Unlimited`:`${sisaLimit.replace('-','')} / ${global.limitawal.free}`}

${grupmenu(prefix)}`)
            }
            break
        case 'dsmenu':{
            if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                m.reply(`Hi ${pushname}, ${ucapanWaktu}

◪ User Information
» Name : ${pushname}
» Status : ${isCreator ? `Owner`: isPremium ? `User Premium`:`User Free`}
» Limit : ${isCreator ? `Unlimited`: isPremium ? `Unlimited`:`${sisaLimit.replace('-','')} / ${global.limitawal.free}`}

${dsmenu(prefix)}`)
            }
            break
        case 'randommenu':{
            if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                m.reply(`Hi ${pushname}, ${ucapanWaktu}

◪ User Information
» Name : ${pushname}
» Status : ${isCreator ? `Owner`: isPremium ? `User Premium`:`User Free`}
» Limit : ${isCreator ? `Unlimited`: isPremium ? `Unlimited`:`${sisaLimit.replace('-','')} / ${global.limitawal.free}`}

${randommenu(prefix)}`)
            }
            break
        case 'funmenu':{
            if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                m.reply(`Hi ${pushname}, ${ucapanWaktu}

◪ User Information
» Name : ${pushname}
» Status : ${isCreator ? `Owner`: isPremium ? `User Premium`:`User Free`}
» Limit : ${isCreator ? `Unlimited`: isPremium ? `Unlimited`:`${sisaLimit.replace('-','')} / ${global.limitawal.free}`}

${funmenu(prefix)}`)
            }
            break
        case 'islammenu':{
            if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                 m.reply(`Hi ${pushname}, ${ucapanWaktu}

◪ User Information
» Name : ${pushname}
» Status : ${isCreator ? `Owner`: isPremium ? `User Premium`:`User Free`}
» Limit : ${isCreator ? `Unlimited`: isPremium ? `Unlimited`:`${sisaLimit.replace('-','')} / ${global.limitawal.free}`}

${islammenu(prefix)}`)
            }
            break
        case 'convertmenu':{
            if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
            m.reply(`Hi ${pushname}, ${ucapanWaktu}

◪ User Information
» Name : ${pushname}
» Status : ${isCreator ? `Owner`: isPremium ? `User Premium`:`User Free`}
» Limit : ${isCreator ? `Unlimited`: isPremium ? `Unlimited`:`${sisaLimit.replace('-','')} / ${global.limitawal.free}`}

${convertmenu(prefix)}`)
            }
            break
        case 'anonmenu': case 'anonymousmenu':{
            if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
            m.reply(`Hi ${pushname}, ${ucapanWaktu}

◪ User Information
» Name : ${pushname}
» Status : ${isCreator ? `Owner`: isPremium ? `User Premium`:`User Free`}
» Limit : ${isCreator ? `Unlimited`: isPremium ? `Unlimited`:`${sisaLimit.replace('-','')} / ${global.limitawal.free}`}

${anonymousmenu(prefix)}`)
            }
            break
        case 'othermenu':{
            if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                m.reply(`Hi ${pushname}, ${ucapanWaktu}

◪ User Information
» Name : ${pushname}
» Status : ${isCreator ? `Owner`: isPremium ? `User Premium`:`User Free`}
» Limit : ${isCreator ? `Unlimited`: isPremium ? `Unlimited`:`${sisaLimit.replace('-','')} / ${global.limitawal.free}`}

${othermenu(prefix)}`)
            }
            break
        case 'ownermenu':{
            if (!isOwner) return m.reply(mess.only.ownerB)
                m.reply(`Hi ${pushname}, ${ucapanWaktu}

◪ User Information
» Name : ${pushname}
» Status : ${isCreator ? `Owner`: isPremium ? `User Premium`:`User Free`}
» Limit : ${isCreator ? `Unlimited`: isPremium ? `Unlimited`:`${sisaLimit.replace('-','')} / ${global.limitawal.free}`}

${ownermenu(prefix)}`)
            }
            break
        case 'creatormenu':{
            if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (ban.includes(m.sender)) return m.reply(mess.only.banned)
            if (isLimit(m.sender)) return m.reply(mess.limituserbot)
                m.reply(`Hi ${pushname}, ${ucapanWaktu}

◪ User Information
» Name : ${pushname}
» Status : ${isCreator ? `Owner`: isPremium ? `User Premium`:`User Free`}
» Limit : ${isCreator ? `Unlimited`: isPremium ? `Unlimited`:`${sisaLimit.replace('-','')} / ${global.limitawal.free}`}

${creatormenu(prefix)}`)
            }
            break
            case 'menfess':{
                if (m.isGroup) return m.reply('Hanya bisa di private chat')
                if (smenfess.includes(m.sender)) return m.reply('kamu masih berada di sesi menfess. mohon menunggu jawaban dari menfess sebelumnya sebelum melkukan memfess kembali.')
                if (args.length < 1) return m.reply(`Penggunaan ${prefix + command} 62xxx|someone|aku sayang kamu`)
                var menFesss = []
                fs.writeFileSync(`./temp/${m.sender}.json`, JSON.stringify(menFesss, null, '\t'))
                const menfess = JSON.parse(fs.readFileSync(`./temp/${m.sender}.json`))
                var ini_nama = args.join(" ").split("|")
				var hai = ini_nama[0].trim()
				var someone = ini_nama[1].trim()
                var kata = ini_nama[2].trim()
                let obj = {sender: m.sender, target: hai, someone: someone, kata: kata}
                menfess.push(obj)
                fs.writeFileSync(`./temp/${m.sender}.json`, JSON.stringify(menfess))
                client.sendMessage(hai.replace(/[^0-9]/g, '')+'@s.whatsapp.net', {text: `Hai, kamu mendapatkan menfess dari ${someone}.\n\n*${kata}*\n\nReply chat ini jika kamu ingin membalas menfess dari ${someone}`})
                m.reply(`Suksess kirim menfess ke ${hai}`)
                tmenfess.push( hai.replace(/[^0-9]/g, '')+'@s.whatsapp.net')
                fs.writeFileSync(`./src/menfess.json`, JSON.stringify(tmenfess))
                smenfess.push(m.sender)
                fs.writeFileSync(`./src/smenfess.json`, JSON.stringify(smenfess))
            }
                break
        case 'cinta':{
            if (!isPremium) return // m.reply('*DJ KHUSUS PREMIUM*')
            anu = fs.readFileSync('./audio/cinta100%.mp3')
            sendPTT(m.chat, anu)
        }
        break
        case 'darkside':{
            if (!isPremium) return // m.reply('*DJ KHUSUS PREMIUM*')
            anu = fs.readFileSync('./audio/darkside.mp3')
            sendPTT(m.chat, anu)
        }
        break
        case 'gemes':{
            if (!isPremium) return // m.reply('*DJ KHUSUS PREMIUM*')
            anu = fs.readFileSync('./audio/gemes.mp3')
            sendPTT(m.chat, anu)
        }
        break
        case 'goyangdumang':{
            if (!isPremium) return // m.reply('*DJ KHUSUS PREMIUM*')
            anu = fs.readFileSync('./audio/goyangdumang.mp3')
            sendPTT(m.chat, anu)
        }
        break
        case 'jadi':case'jadikan':{
            if (!isPremium) return // m.reply('*DJ KHUSUS PREMIUM*')
            anu = fs.readFileSync('./audio/jadikanakuyangkedua.mp3')
            sendPTT(m.chat, anu)
        }
        break
        case 'masih':{
            if (!isPremium) return // m.reply('*DJ KHUSUS PREMIUM*')
            anu = fs.readFileSync('./audio/masihmencintainya.mp3')
            sendPTT(m.chat, anu)
        }
        break
        case 'playdate':case 'mulai':case 'yok':{
            if (!isPremium) return // m.reply('*DJ KHUSUS PREMIUM*')
            anu = fs.readFileSync('./audio/playdate.mp3')
            sendPTT(m.chat, anu)
        }
        break
        case 'tonight':case 'malam':{
            if (!isPremium) return // m.reply('*DJ KHUSUS PREMIUM*')
            anu = fs.readFileSync('./audio/tonight.mp3')
            sendPTT(m.chat, anu)
        }
        break
        case 'aduh':{
            if (!isPremium) return // m.reply('*DJ KHUSUS PREMIUM*')
            anu = fs.readFileSync('./audio/aduh.mp3')
            sendPTT(m.chat, anu)
        }
        break
        case 'whitecoffe':{
            if (!isPremium) return // m.reply('*DJ KHUSUS PREMIUM*')
            anu = fs.readFileSync('./audio/whitecoffe.mp3')
            sendPTT(m.chat, anu)
        }
        break
        case 'tapi':{
            if (!isPremium) return // m.reply('*DJ KHUSUS PREMIUM*')
            anu = fs.readFileSync('./audio/tapi.mp3')
            sendPTT(m.chat, anu)
        }
        break
        case 'setiap':{
            if (!isPremium) return // m.reply('*DJ KHUSUS PREMIUM*')
            anu = fs.readFileSync('./audio/setiap.mp3')
            sendPTT(m.chat, anu)
        }
        break
        case 'semua':{
            if (!isPremium) return // m.reply('*DJ KHUSUS PREMIUM*')
            anu = fs.readFileSync('./audio/semua.mp3')
            sendPTT(m.chat, anu)
        }
        break
        case 'rindu':{
            if (!isPremium) return // m.reply('*DJ KHUSUS PREMIUM*')
            anu = fs.readFileSync('./audio/rindu.mp3')
            sendPTT(m.chat, anu)
        }
        break
        case 'iri':{
            if (!isPremium) return // m.reply('*DJ KHUSUS PREMIUM*')
            anu = fs.readFileSync('./audio/iri.mp3')
            sendPTT(m.chat, anu)
        }
        break
        case 'mantap':case 'jos':{
            if (!isPremium) return // m.reply('*DJ KHUSUS PREMIUM*')
            anu = fs.readFileSync('./audio/mantap.mp3')
            sendPTT(m.chat, anu)
        }
        break
        case 'ampun':{
            if (!isPremium) return // m.reply('*DJ KHUSUS PREMIUM*')
            anu = fs.readFileSync('./audio/ampun.mp3')
            sendPTT(m.chat, anu)
        }
        break
        case 'anjay':{
            if (!isPremium) return // m.reply('*DJ KHUSUS PREMIUM*')
            anu = fs.readFileSync('./audio/anjay.mp3')
            sendPTT(m.chat, anu)
        }
        break
        case 'dingin':{
            if (!isPremium) return // m.reply('*DJ KHUSUS PREMIUM*')
            anu = fs.readFileSync('./audio/dingin.mp3')
            sendPTT(m.chat, anu)
        }
        break
        case 'foya':{
            if (!isPremium) return // m.reply('*DJ KHUSUS PREMIUM*')
            anu = fs.readFileSync('./audio/foya.mp3')
            sendPTT(m.chat, anu)
        }
        break
       case 'hdomino':{
anu = await fetchJson(`https://api.lolhuman.xyz/api/higghdomino/${text}?apikey=${LolApi}`)
m.reply(util.format(anu.result))
}
break
break
case 'codm':{
anu = await fetchJson(`https://api.lolhuman.xyz/api/codm/${text}?apikey=${LolApi}`)
m.reply(util.format(anu.result))
}
break
 case 'cekml':{
anu = await fetchJson(`https://api.lolhuman.xyz/api/mobilelegend/${text}?apikey=${LolApi}`)
m.reply(util.format(anu.result))
}
break
case 'cekff':{
anu = await fetchJson(`https://api.lolhuman.xyz/api/freefire/${text}?apikey=${LolApi}`)
m.reply(util.format(anu.result))
}
break
case 'menimisu':{
            if (!isPremium) return // m.reply('*DJ KHUSUS PREMIUM*')
            anu = fs.readFileSync('./audio/menimisu.mp3')
            sendPTT(m.chat, anu)
        }
        break
        case 'goyang':{
            if (!isPremium) return // m.reply('*DJ KHUSUS PREMIUM*')
            anu = fs.readFileSync('./audio/goyang.mp3')
            sendPTT(m.chat, anu)
        }
        break
        case 'jujur':{
            if (!isPremium) return // m.reply('*DJ KHUSUS PREMIUM*')
            anu = fs.readFileSync('./audio/jujur.mp3')
            sendPTT(m.chat, anu)
        }
        break
        case 'gatalsa':{
            if (!isPremium) return // m.reply('*DJ KHUSUS PREMIUM*')
            anu = fs.readFileSync('./audio/gatalsa.mp3')
            sendPTT(m.chat, anu)
        }
        break 
        case 'assalamualaikum': case "assalamu'alaikum":{
            m.reply('Waalaikumsalam kak')
        }
        break
        case 'mksh': case 'maksih': case 'maksh': case 'makasih': case 'makasi': case 'terima kasih':case 'terimakasih':{
            m.reply('Sama-sama kak')
        }
        break
        case 'sayang': case 'sayng': case 'syng': case 'ayang': case 'beb': case 'bby':{
            anu = ['Apa sayangku?','Utututu tayang-tayang🥺','Sini peyuk:(','Apa bawelku?','Iya ayang','Ayang sini kerumah, sepi loh🥺','Nak itu ayangggg🥺']
            hadeh =  anu[Math.floor(Math.random() * anu.length)]
            m.reply(hadeh)
        }
        break
case 'p':{
            let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
            entah = m.message.extendedTextMessage.contextInfo.quotedMessage.conversation
            client.sendTextWithMentions(m.chat,`「 *TRANSAKSI PENDING* 」
            
*📅 Tanggal :* ${date_}
*⌚ Jam :* ${jam}
*⏳ Status :* Pending
*Catatan :* 
${entah ? entah : ''}

Pesanan @${users.split('@')[0]} sedang di proses!`)
        }
        break
        case 'done':{
            let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
            client.sendTextWithMentions(m.chat,`「 *TRANSAKSI BERHASIL* 」

*📅 Tanggal :* ${date_}
*⌚ Jam :* ${jam}
*⏳Status :* BERHASIL

Terima kasih atas pesanan anda. semoga anda puas dengan pelayanan kami. Sehat selalu kak @${users.split('@')[0]}`)
        }
        break
                
default:
            // tiktok
            if (budy.includes('tiktok.com')) {
                // if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
                if (!isOwner && !isPremium) return m.reply(`Sorry, automatic downloads only apply to premium members!. Please update your membership status from free members to premium members to enjoy these features.`)
                m.reply(mess.wait)
                try{
                    let anu = await IXB_Api.downloader.tiktok(budy)
                    console.log(anu)
                    let buttons = [
                        {buttonId: `tiktokmp3 ${budy}`, buttonText: {displayText: 'Audio'}, type: 1}
                    ]
                    let buttonMessage = {
                        video: { url: anu.nowm },
                        caption: 'Anda bisa mengubahnya menjadi audio dengan mengklik tombol dibawah',
                        footer: ``,
                        buttons: buttons,
                        headerType: 5
                    }
                    if (isOwner) return client.sendMessage(m.chat, { document: { url: anu.nowm }, mimetype: 'mp4/mpeg', fileName: `${anu.author.replace('@','')}_${createSerial(10)}.mp4` }, { quoted: m })
                    // client.sendMessage(m.chat, buttonMessage, { quoted: m })
                    client.sendMessage(m.chat, {video: {url: anu.nowm}}, {quoted:m})
                    limitAdd(m.sender)
                } catch (err) {
                console.log(err)
                return m.reply(mess.error.bug)
                }
                }
                
            //twitter
            if (budy.includes('twitter.com')) {
                // if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
                if (!isOwner && !isPremium) return m.reply(`Sorry, automatic downloads only apply to premium members!. Please update your membership status from free members to premium members to enjoy these features.`)
                m.reply(mess.wait)
                try{
                let anu = await IXB_Api.downloader.twitter.twitter(budy)
                console.log(anu)
                    // client.sendVideo(m.chat, anu.HD || anu.SD, anu.desc ,m)
                    client.sendMessage(m.chat, {video: {url: anu.HD || anu.SD}}, {quoted:m})
                } catch (e) {
                    console.log(e)
                    m.reply(mess.error.bug)
                }
                }

            //instagram
            if (budy.includes('instagram.com/p/')) {
                // if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
                if (!isOwner && !isPremium) return m.reply(`Sorry, automatic downloads only apply to premium members!. Please update your membership status from free members to premium members to enjoy these features.`)
                m.reply(mess.wait)
                try{
                if (budy.includes('stories')) return m.reply(`Sepertinya kakak ingin download dari link instagram story ya?\nGunakan perintah ${prefix}igstory username\nUntuk mengunduh media dari ig story`)
                if (/(?:\/p\/|\/reel\/|\/tv\/)([^\s&]+)/.test(isUrl(budy))) {
                /*    IXB_Api.downloader.instagram.post(budy).then(async(result) => {
                    ige = result.medias
                   console.log(result)
                  if (ige == null) m.reply(`An error occured`)
                  m.reply(`Data berhasil didapatkan!

Username: ${result.user.username}
Full Name: ${result.user.fullName}
Jumlah Media: ${ige.length}

Silahkan tunggu, media sedang dikirim.`)
                    for(let i of ige){
                            if (i.url.includes('.mp4')){
                                client.sendVideo(m.chat, i.url,'',m)
                            } else {
        client.sendMedia(m.chat, i.url, '', ``, m)
                            }
                        }
                }) */
                anu = await fetchJson(`https://api.lolhuman.xyz/api/instagram2?apikey=${LolApi}&url=${budy}`)
				ini_result = anu.result
                /*m.reply(`Data berhasil didapatkan!

Username: ${ini_result.account.username}
Full Name: ${ini_result.account.full_name}
Jumlah Media: ${ini_result.media.length}
Caption: ${ini_result.caption}

Silahkan tunggu, media sedang dikirim.`)*/
			    for (var x of ini_result.media) {
                    if (x.includes('.mp4')){
                        // client.sendVideo(m.chat, x,'',m)
                        client.sendMessage(m.chat, {video: {url: x}}, {quoted:m})
                    } else {
// client.sendMedia(m.chat, x, '', ``, m)
client.sendMessage(m.chat, {image: {url: x}}, {quoted:m})
                    }
                }
            }
            limitAdd(m.sender)
        } catch (e) {
            console.log(e)
            m.reply(mess.error.bug)
        }
        }

         //instagram
         if (budy.includes('instagram.com/reel/')) {
            // if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
            if (!isOwner && !isPremium) return m.reply(`Sorry, automatic downloads only apply to premium members!. Please update your membership status from free members to premium members to enjoy these features.`)
            m.reply(mess.wait)
            try{
            if (budy.includes('stories')) return m.reply(`Sepertinya kakak ingin download dari link instagram story ya?\nGunakan perintah ${prefix}igstory username\nUntuk mengunduh media dari ig story`)
            if (/(?:\/p\/|\/reel\/|\/tv\/)([^\s&]+)/.test(isUrl(budy))) {
            /*    IXB_Api.downloader.instagram.post(budy).then(async(result) => {
                ige = result.medias
               console.log(result)
              if (ige == null) m.reply(`An error occured`)
              m.reply(`Data berhasil didapatkan!

Username: ${result.user.username}
Full Name: ${result.user.fullName}
Jumlah Media: ${ige.length}

Silahkan tunggu, media sedang dikirim.`)
                for(let i of ige){
                        if (i.url.includes('.mp4')){
                            client.sendVideo(m.chat, i.url,'',m)
                        } else {
    client.sendMedia(m.chat, i.url, '', ``, m)
                        }
                    }
            })*/
            anu = await fetchJson(`https://api.lolhuman.xyz/api/instagram2?apikey=${LolApi}&url=${budy}`)
                /*m.reply(`Data berhasil didapatkan!

Username: ${ini_result.account.username}
Full Name: ${ini_result.account.full_name}
Jumlah Media: ${ini_result.media.length}
Caption: ${ini_result.caption}

Silahkan tunggu, media sedang dikirim.`)*/
client.sendMessage(m.chat, {video: {url: anu.result.video_url}}, {quoted:m})
        }
        limitAdd(m.sender)
    } catch (e) {
        console.log(e)
        m.reply(mess.error.bug)
    }
    }

     //instagram
     if (budy.includes('instagram.com/tv/')) {
        // if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
        if (!isOwner && !isPremium) return m.reply(`Sorry, automatic downloads only apply to premium members!. Please update your membership status from free members to premium members to enjoy these features.`)
        m.reply(mess.wait)
        try{
        if (budy.includes('stories')) return m.reply(`Sepertinya kakak ingin download dari link instagram story ya?\nGunakan perintah ${prefix}igstory username\nUntuk mengunduh media dari ig story`)
        if (/(?:\/p\/|\/reel\/|\/tv\/)([^\s&]+)/.test(isUrl(budy))) {
        /*    IXB_Api.downloader.instagram.post(budy).then(async(result) => {
            ige = result.medias
           console.log(result)
          if (ige == null) m.reply(`An error occured`)
          m.reply(`Data berhasil didapatkan!

Username: ${result.user.username}
Full Name: ${result.user.fullName}
Jumlah Media: ${ige.length}

Silahkan tunggu, media sedang dikirim.`)
            for(let i of ige){
                    if (i.url.includes('.mp4')){
                        client.sendVideo(m.chat, i.url,'',m)
                    } else {
client.sendMedia(m.chat, i.url, '', ``, m)
                    }
                }
        })*/
        anu = await fetchJson(`https://api.lolhuman.xyz/api/instagram2?apikey=${LolApi}&url=${budy}`)
				ini_result = anu.result
                /*m.reply(`Data berhasil didapatkan!

Username: ${ini_result.account.username}
Full Name: ${ini_result.account.full_name}
Jumlah Media: ${ini_result.media.length}
Caption: ${ini_result.caption}

Silahkan tunggu, media sedang dikirim.`)*/
			    for (var x of ini_result.media) {
                    if (x.includes('.mp4')){
                        // client.sendVideo(m.chat, x,'',m)
                        client.sendMessage(m.chat, {video: {url: x}}, {quoted:m})
                    } else {
// client.sendMedia(m.chat, x, '', ``, m)
client.sendMessage(m.chat, {image: {url: x}}, {quoted:m})
                    }
                }
    }
    limitAdd(m.sender)
} catch (e) {
    console.log(e)
    m.reply(mess.error.bug)
}
}
               //facebook
                if (budy.includes('facebook.com')) {
                // if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
                if (!isOwner && !isPremium) return m.reply(`Sorry, automatic downloads only apply to premium members!. Please update your membership status from free members to premium members to enjoy these features.`)
                m.reply(mess.wait)
                try{
                anu = await fetchJson(`https://api.lolhuman.xyz/api/facebook?apikey=${LolApi}&url=${text}`)
                client.sendMessage(m.chat, {video: {url: anu.result}}, {quoted:m})
                } catch {
                m.reply(mess.error.bug)
                }
            }
             //facebook
             if (budy.includes('fb.watch')) {
                // if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
                if (!isOwner && !isPremium) return m.reply(`Sorry, automatic downloads only apply to premium members!. Please update your membership status from free members to premium members to enjoy these features.`)
                m.reply(mess.wait)
                try{
                anu = await fetchJson(`https://api.lolhuman.xyz/api/facebook?apikey=${LolApi}&url=${text}`)
                client.sendMessage(m.chat, {video: {url: anu.result}}, {quoted:m})
                } catch {
                m.reply(mess.error.bug)
                }
            }
             //pinterest
             if (budy.includes('pin.it')) {
                // if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
                if (!isOwner && !isPremium) return m.reply(`Sorry, automatic downloads only apply to premium members!. Please update your membership status from free members to premium members to enjoy these features.`)
                m.reply(mess.wait)
                try{
                anu = await pindl(text)
                client.sendMessage(m.chat, {video: {url: anu.result}}, {quoted:m})
                } catch {
                m.reply(mess.error.bug)
                }
            }
            //youtube
            if (budy.includes('youtu.be')) {
                // if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
                if (!isOwner && !isPremium) return m.reply(`Sorry, automatic downloads only apply to premium members!. Please update your membership status from free members to premium members to enjoy these features.`)
                m.reply(mess.wait)
                let { yta } = require('./lib/y2mate')
                try{
                let quality = '128kbps'
                let media = await yta(budy, quality)
                client.sendMessage(m.chat, { document: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
                } catch {
                    m.reply(mess.error.bug)
                }
            }
            if (budy.includes('youtube.com')) {
                // if (!isPremium && !isOwner && onlyGrup ) return m.reply(onlygc)
                if (!isOwner && !isPremium) return m.reply(`Sorry, automatic downloads only apply to premium members!. Please update your membership status from free members to premium members to enjoy these features.`)
                m.reply(mess.wait)
                let { yta } = require('./lib/y2mate')
                try{
                let quality = '128kbps'
                let media = await yta(budy, quality)
                client.sendMessage(m.chat, { document: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
                } catch {
                    m.reply(mess.error.bug)
                }
            }

                if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply(mess.only.ownerB)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply(mess.only.ownerB)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return m.reply(mess.only.ownerB)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
		// ANTIVIRTEX BY IXB TEAM
		    if (budy.length > 3500) {
                if (!m.isGroup) return
                if (!isAntiVirtex) return
                if (isOwner) return
                if (isAdmins) return m.reply('karena kamu adalah admin group, bot tidak akan kick kamu')
                const { penangkalvirtext } = require('./lib/penangkalvirtext.js')
                var kic = `${m.sender.split("@")[0]}@s.whatsapp.net`
                m.reply(`Virtext Terdeteksi maaf ${pushname} anda akan di kick dari group`)
                setTimeout( () => {
                client.groupParticipantsUpdate(m.chat, [kic], 'remove')
                client.groupSettingUpdate(m.chat, 'announcement')
                client.sendMessage(m.chat,{text: penangkalvirtext()})
                client.sendMessage(m.chat,{text: penangkalvirtext()})
                client.sendMessage(m.chat,{text:'Virtext terdeteksi, mohon kepada seluruh member untuk clear all chat.'})
                client.updateBlockStatus(kic, "block")
                }, 2000)
                }
        //SIMI
            if (m.isGroup && isSimi && budy != undefined) {
                if (m.key.fromMe) { return false }
                if (/video/.test(mime) && /audio/.test(mime) && /image/.test(mime) && /webp/.test(mime)) {return false}
                // anu = await fetchJson(`https://api.lolhuman.xyz/api/simi?apikey=${LolApi}&text=${encodeURIComponent(budy)}`)
                anu = await fetchJson(`https://caliph.my.id/api/simi.php?text=${encodeURIComponent(budy)}`)
                if (anu.result === 'error') return
                m.reply(anu.result.replace('Aku tidak mengerti apa yang kamu katakan.Tolong ajari aku.', 'Maaf sayang, aku ga ngerti:('))
                
            }

		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.database
		    if (!(budy.toLowerCase() in msgs)) return
		    client.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        
    } catch (err) {
        console.log(err)
        // m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
