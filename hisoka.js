/** 
DELTA   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const ms = require('parse-ms')
const toMs = require('ms')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')
const {getDateId,clearAllUser, resetLevelingXp, userXp, userLeveling, getLevelingXp, getLevelingLevel, getLevelingId, addLevelingXp, addLevelingLevel, addUserId } = require('./lib/user');
const { gethitUser, checkHit, AddHit, isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require('./lib/user');
const { Nothing,Failed,Succes,addAutoClear,autoClearChat,checkAutoClear, checkDataName, createDataId, getDataId, addDataId, removeDataId, checkDataId, checkClaim, getClaim, expiredClaim, addUserClaim, getHit, cmdAdd, expiredCmd } = require('./lib/totalcmd');
const {weton,week,calender,dateIslamic} = require('./lib/functions')
const _sewa = require('./lib/sewa')
const { pinterest } = require('./lib/pinterest')
const { addPlayGame, getJawabanGame, isPlayGame, cekWaktuGame, getGamePosi } = require('./lib/game');
const hitnya = JSON.parse(fs.readFileSync('./database/hitToday.json'))
const dash = JSON.parse(fs.readFileSync('./database/dashboard.json'))
const spammer = []
const sewa = JSON.parse(fs.readFileSync('./database/sewa.json'))
const autosticker = JSON.parse(fs.readFileSync('./Database/autosticker.json'))
let _cmdUser = JSON.parse(fs.readFileSync('./database/commandUser.json'));
let listCmd = JSON.parse(fs.readFileSync('./database/listcmd.json'));
let _cmd = JSON.parse(fs.readFileSync('./database/command.json'));
lang = global.language 
let akinator = JSON.parse(fs.readFileSync('./database/akinator.json'));

// read database
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let vote = db.data.others.vote = []
const user = JSON.parse(fs.readFileSync('./database/user.json'))

//━━━━━━━━━━━━━━━[ DATABASE ]━━━━━━━━━━━━━━━━━//
let { TelegraPh } = require('./lib/uploader')
//━━━━━━━━━━━━━━━[ OTHER ]━━━━━━━━━━━━━━━━━//
const qtod = m.quoted? "true":"false"
const from = m.chat
const sender = m.sender
const reply = m.reply
var publik = true
//━━━━━━━━━━━━━━━[ WAKTU ]━━━━━━━━━━━━━━━━━//
const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')
//━━━━━━━━━━━━━━━[ FAKE ]━━━━━━━━━━━━━━━━━//
const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "6289523258649-1604595598@g.us"}, "message": {orderMessage: {itemCount: 2022,status: 200, thumbnail: fs.readFileSync('./media/kitzuna.jpg'), surface: 200, message: `XZYBOTZ WA MULTI DEVICE`, orderTitle: '', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true} 
const floc = {key : {participant : '0@s.whatsapp.net'},message: {locationMessage: {name: `I’m From Indonesia 🇮🇩`,jpegThumbnail: thumb}}}
//━━━━━━━━━━━━━━━[ MODULE EXSPORT ]━━━━━━━━━━━━━━━━━//

/console.log(owner)
const { type, now, fromMe } = m

const ads = (teks) => {
hisoka.sendMessage(from, { text : teks, contextInfo: {"externalAdReply": { title:`${ucapanWaktu} ${pushname}`,mediaType: 3,renderLargerThumbnail: false, showAdAttribution: true, body: "",thumbnail: fs.readFileSync('./Image/wpmobile.png'),sourceUrl: "https://nekopoi.care"}}})
}

const isImage = (type == 'imageMessage')
		const isVideo = (type == 'videoMessage')
		const isSticker = (type == 'stickerMessage')
		const isQuotedMsg = (type == 'extendedTextMessage')
		const isQuotedImage = isQuotedMsg ? content.includes('imageMessage') ? true : false : false
		const isQuotedAudio = isQuotedMsg ? content.includes('audioMessage') ? true : false : false
		const isQuotedDocument = isQuotedMsg ? content.includes('documentMessage') ? true : false : false
		const isQuotedVideo = isQuotedMsg ? content.includes('videoMessage') ? true : false : false
		const isQuotedSticker = isQuotedMsg ? content.includes('stickerMessage') ? true : false : false

//━━━━━━━━━━━━━━━[ MODULE EXSPORT ]━━━━━━━━━━━━━━━━━//

module.exports = hisoka = async (hisoka, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const forward = {forwardingScore: 10, isForwarded: true, sendEphemeral: true}
        let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
        		const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
        const timeWib = moment().tz('Asia/Jakarta').format('HH:mm:ss')
const timeWit= moment().tz('Asia/Makassar').format('HH:mm:ss')
const timeWita = moment().tz('Asia/Jayapura').format('HH:mm:ss')
        const args = body.trim().split(/ +/).slice(1)
        const isAutoSticker = m.isGroup ? autosticker.includes(from) : false
        const mentionByTag = type == "extendedTextMessage" && hisoka.message.extendedTextMessage.contextInfo != null ? hisoka.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
        const mentionByReply = type == "extendedTextMessage" && hisoka.message.extendedTextMessage.contextInfo != null ? hisoka.message.extendedTextMessage.contextInfo.participant || "" : ""
        const users = mentionByReply? mentionByReply : mentionByTag[0]
          const pushname = m.pushName || "No Name"
        const botNumber = await hisoka.decodeJid(hisoka.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const isSewa = _sewa.checkSewaGroup(from, sewa)
        const mime = (quoted.msg || quoted).mimetype || ''
        const isMedia = /image|video|sticker|audio/.test(mime)
        	const senderNumber = sender.split("@")[0] 
const isHit = checkHit(senderNumber, user)  

        // Group
const isGroup = from.endsWith('@g.us')
        const groupMetadata = m.isGroup ? await hisoka.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
	
//User 
const userLevel = getLevelingLevel(senderNumber, user)
const userExp = getLevelingXp(senderNumber, user)
const userId = getLevelingId(senderNumber, user)
const amountExp = Math.floor(Math.random() * 10) + 50
const requiredExp = 1000 * userLevel
const userPersen = userExp/requiredExp*100
const userVerified = getDateId(senderNumber, user) 
	try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
    
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: false,
            }

	    let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
		if (!('templateImage' in setting)) setting.templateImage = true
		if (!('templateVideo' in setting)) setting.templateVideo = false
		if (!('templateGif' in setting)) setting.templateGif = false
		if (!('templateMsg' in setting)) setting.templateMsg = false
		if (!('templateLocation' in setting)) setting.templateLocation = false
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: false,
		templateImage: true,
		templateVideo: false,
		templateGif: false,
		templateMsg: false,
		templateLocation: false,
	    }
	    
        } catch (err) {
            console.error(err)
        }
	    
        // Public & Self
        if (!hisoka.public) {
            if (!m.key.fromMe) return
        }
// Public & Self
if (!publik && !itsMe && !isOwner && !theOwner) return

        // Push Message To Console && Auto Read
        if (m.message) {
            hisoka.readMessages([m.key])
            console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }
	
	_sewa.expiredCheck(hisoka, sewa)

	//Total fitur by Official Dittaz
const totalFitur = () =>{
var mytext = fs.readFileSync("./hisoka.js").toString()
var numUpper = (mytext.match(/case/g) || []).length;
return numUpper
}

		function monospace(string) {
            return '```' + string + '```'
        }
        
        async function akiStart() {
		  var data = await fetchJson(`https://api.lolhuman.xyz/api/akinator/start?apikey=${lolkey}`)
		  return data
		}
		
		async function akiAnswer(server, frontaddr, session, signature, step, answer) {
	          var data = await fetchJson(`https://api.lolhuman.xyz/api/akinator/answer?apikey=${lolkey}&server=${server}&frontaddr=${frontaddr}&session=${session}&signature=${signature}&step=${step}&answer=${answer}`)
	          return data
	        }
		
		async function akiBack(server, frontaddr, session, signature, step, answer) {
		  var data = await fetchJson(`https://api.lolhuman.xyz/api/akinator/back?apikey=${lolkey}&server=${server}&frontaddr=${frontaddr}&session=${session}&signature=${signature}&step=${step}&answer=${answer}`)
		  return data
		}
		
		async function akiEnd(server, session, signature, step) {
		  var data = await fetchJson(`https://api.lolhuman.xyz/api/akinator/end?apikey=${lolkey}&server=${server}&session=${session}&signature=${signature}&step=${step}`)
		  return data
		}

	// reset limit every 12 hours
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Jakarta"
        })
        
        //Auto Hit 
if(isCmd){
AddHit(senderNumber, user)
cmdAdd("run", "1d", hitnya)
}
expiredCmd(hitnya, dash)
const thisHit = `${getHit("run", hitnya)}`

	// auto set bio
	if (db.data.settings[botNumber].autobio) {
	    let setting = global.db.data.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await hisoka.setStatus(`${hisoka.user.name} | Runtime : ${runtime(uptime)}`)
		setting.status = new Date() * 1
	    }
	}
	    
	    if (m.isGroup && isAutoSticker) {
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await hisoka.sendImageAsSticker(m.chat, media, ftroli, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await hisoka.sendVideoAsSticker(m.chat, media, ftroli, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
}
}

        async function getPosiCmdUser(sender, _db) {
         var posi = null
         Object.keys(_db).forEach((i) => {
          if (_db[i].jid === sender) {
             posi = i
          }
         })
          return posi
        }

	  // Anti Link
        if (db.data.chats[m.chat].antilink) {
        if (budy.match(`chat.whatsapp.com`)) {
        m.reply(`「 ANTI LINK 」\n\nKamu terdeteksi mengirim link group, maaf kamu akan di kick !`)
        if (!isBotAdmins) return m.reply(`Ehh bot gak admin T_T`)
        let gclink = (`https://chat.whatsapp.com/`+await hisoka.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return m.reply(`Ehh maaf gak jadi, karena kamu ngirim link group ini`)
        if (isAdmins) return m.reply(`Ehh maaf kamu admin`)
        if (isCreator) return m.reply(`Ehh maaf kamu owner bot ku`)
        hisoka.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }
        
        			    if (!m.isGroup && !m.key.fromMe &&  db.data.chats[m.chat].antiwame && !isGroupAdmins){
        if (budy.match(`wa.me`)) {
        hisoka.sendMessage(m.chat, {text: `*Antiwame Group Terdeteksi*\n\nKamu Akan Dikeluarkan Dari Group ${groupMetadata.subject}`}, {quoted:m})
	    hisoka.groupParticipantsUpdate(m.chat, [sender], 'remove')
		}
	    }

      // Mute Chat
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }
      // Pick Random
const pickRandom = (arr) => {
			return arr[Math.floor(Math.random() * arr.length)]
		}

        // Respon Cmd with media
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: hisoka.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, hisoka.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        hisoka.ev.emit('messages.upsert', msg)
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
            hisoka.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	    deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n*${deskripsi}*\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
                delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Tebak Tebakan' }, type: 1 }], `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
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
	    if (room.x !== room.o) await hisoka.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await hisoka.sendText(room.o, str, m, { mentions: parseMention(str) } )
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
	    hisoka.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    hisoka.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) hisoka.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    if (!roof.pilih2) hisoka.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) hisoka.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    hisoka.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
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
	    if (!roof.pilih2) hisoka.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih) hisoka.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
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
	    hisoka.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.data.users[jid]
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

        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            m.reply(`
Kamu berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
	    
        switch(command) {
case 'afk': {
let user = global.db.data.users[m.sender]
user.afkTime = + new Date
user.afkReason = text
m.reply(`${m.pushName} Telah Afk${text ? ': ' + text : ''}`)
}
break	
case 'ttc': case 'ttt': case 'tictactoe': {
let TicTacToe = require("./lib/tictactoe")
this.game = this.game ? this.game : {}
if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'Kamu masih didalam game'
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
if (room.x !== room.o) await hisoka.sendText(room.x, str, m, { mentions: parseMention(str) } )
await hisoka.sendText(room.o, str, m, { mentions: parseMention(str) } )
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
this.game = this.game ? this.game : {}
try {
if (this.game) {
delete this.game
hisoka.sendText(m.chat, `Berhasil delete session TicTacToe`, m)
} else if (!this.game) {
m.reply(`Session TicTacToe🎮 tidak ada`)
} else throw '?'
} catch (e) {
m.reply('rusak')
}
}
break
case 'suitpvp': case 'suit': {
this.suit = this.suit ? this.suit : {}
let poin = 10
let poin_lose = 10
let timeout = 60000
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Selesaikan suit mu yang sebelumnya`)
if (m.mentionedJid[0] === m.sender) return m.reply(`Tidak bisa bermain dengan diri sendiri !`)
if (!m.mentionedJid[0]) return m.reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
let id = 'suit_' + new Date() * 1
let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
this.suit[id] = {
chat: await hisoka.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
id: id,
p: m.sender,
p2: m.mentionedJid[0],
status: 'wait',
waktu: setTimeout(() => {
if (this.suit[id]) hisoka.sendText(m.chat, `_Waktu suit habis_`, m)
delete this.suit[id]
}, 60000), poin, poin_lose, timeout
}
}
break
case 'cowner': {
if (!isCreator) throw mess.owner
if (!args[0]) return m.reply(`Pilih add atau del`)
orgnye = m.mentionedJid[0] ? m.mentionedJid[0].split("@")[0] : m.quoted ? m.quoted.sender.split("@")[0] : args[1] ? args[1] : false
const isCwner = owner.includes(orgnye)
if (args[0] === "add") {
if (isCwner) return m.reply('User Sudah Menjadi Owner')
owner.push(orgnye)
m.reply(`Succes Add Owner`)
} else if (args[0] === "del") {
if (!isCwner) return m.reply('User Bukan Owner')
let delcwner = owner.indexOf(orgnye)
owner.splice(delcwner, 1)
m.reply(`Succes Delete Owner`)
} else {
m.reply("Error")
}
}
break
case 'getid':
if (!m.isGroup) return reply(mess.group)
m.reply (`${m.chat}`)
break
case 'sendsession':

if (!isCreator) return reply(mess.owner)

anuu = fs.readFileSync('./session.json')

hisoka.sendMessage(m.chat, {document: anuu, mimetype: 'application/octet-stream', fileName: `session.json`}, {quoted:ftrol})  

break
case 'chat': {
/*Pesan dari admin bot
Nomor : @${m.sender.split("@")[0]}*/
if (!isCreator) return m.reply(mess.owner)
if (!args.join(" ")) return m.reply(`Example :\n${prefix + command} 62813xxxx|Woi`)
const cpes = args.join(" ")
const nony = cpes.split("|")[0];
const pesny = cpes.split("|")[1];
lolh = `*| CHAT |*

Pesan : ${pesny}`
hisoka.sendMessage(nony + "@s.whatsapp.net", {text:lolh, mentions:[m.sender]}, {quoted:m})
}
await m.reply("Succes")
break
case 'yah': {
if (!isCreator) throw mess.owner
if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
if (args[0] === 'mute') {
hisoka.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'unmute') {
hisoka.chatModify({ mute: null }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'archive') {
hisoka.chatModify({  archive: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'unarchive') {
hisoka.chatModify({ archive: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'read') {
hisoka.chatModify({ markRead: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'unread') {
hisoka.chatModify({ markRead: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'delete') {
hisoka.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
  }
}
break
case 'family100': {
if ('family100'+m.chat in _family100) {
m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
throw false
}
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
let random = anu[Math.floor(Math.random() * anu.length)]
let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
_family100['family100'+m.chat] = {
id: 'family100'+m.chat,
pesan: await hisoka.sendText(m.chat, hasil, m),
...random,
terjawab: Array.from(random.jawaban, () => false),
hadiah: 6,
  }
}
break
case 'apakah':{
if (!m.isGroup) throw mess.group
if (args.length < 1) return m.reply(`Contoh : ${prefix}apakah aku jelek`)
query = args.join(" ")
naon = ['Iya','Tidak','Mungkin']
random = naon[Math.floor(Math.random() * (naon.length))]
tz = `Pertanyaan = ${command} ${query}
Jawaban = ${random}`
m.reply(tz)
}
break
case 'goblokcek': case 'jelekcek': case 'gaycek':
case 'lesbicek':case 'gantengcek': case 'cantikcek':case 'begocek': case 'suhucek':case 'pintercek':
case 'jagocek':case 'nolepcek':case 'babicek':case 'bebancek':case 'baikcek':
case 'jahatcek':case 'anjingcek':case 'haramcek':case 'pakboycek':
case 'pakgirlcek':case 'sangecek': case 'bapercek':case 'fakboycek':case 'alimcek':case 'suhucek':
case 'fakgirlcek':case 'kerencek':case 'wibucek':case 'pasarkascek':
if (args.length < 1) return m.reply(`Contoh : ${prefix + command} Barr`)
cantik = body.slice(1)
const eyy =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const yn = eyy[Math.floor(Math.random() * eyy.length)]
hisoka.sendMessage(m.chat, { text: `${yn}%` }, { quoted: ftroli })
break
case 'jadian': {
if (!m.isGroup) throw mess.group
let member = participants.map(u => u.id)
let orang = member[Math.floor(Math.random() * member.length)]
let jodoh = member[Math.floor(Math.random() * member.length)]
let jawab = `Ciee Yang Jadian💖 Jangan Lupa Pajak Jadiannya Yaa🐤

@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
let menst = [orang, jodoh]
let buttons = [
{ buttonId: 'jadian', buttonText: { displayText: 'Jodohku' }, type: 1 }
]
await hisoka.sendButtonText(m.chat, buttons, jawab, hisoka.user.name, m, {mentions: menst})
}
break
case 'bisakah':
if (!m.isGroup) throw mess.group
if (args.length < 1) return m.reply(`Contoh : ${prefix}bisakah aku terbang`)
query = args.join(" ")
naon = ['Iya','Tidak','Mungkin']
random = naon[Math.floor(Math.random() * (naon.length))]
tt = `Pertanyaan = ${command} ${query}
Jawaban : ${random}`
m.reply(tt)
break
case 'kapankah':
if (!m.isGroup) throw mess.group
if (args.length < 1) return m.reply(`Contoh : ${prefix}kapankah aku menikah`)
query = args.join(" ")
no = `${Math.floor(Math.random() * 100)}`
naon = ['Jam lagi','Hari lagi','Minggu lagi','Bulan lagi','Tahun lagi']
random = naon[Math.floor(Math.random() * (naon.length))]
kapan = `Pertanyaan = ${command} ${query}
Jawaban : ${no} ${random}`
m.reply(kapan)
break      	   
case 'rate':
if (!m.isGroup) throw mess.group
if (args.length < 1) return m.reply(`Contoh : ${prefix}rate aku ganteng`)
random = `${Math.floor(Math.random() * 100)}`
rating = `Persentase : ${random}%`
m.reply(rating)
break
case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
if (!m.quoted && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
ter = command[1].toLowerCase()
tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
m.reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
break
case 'tebak': {
if (!text) throw `Example : ${prefix + command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6.lontong`
if (args[0] === "lagu") {
if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
let result = anu[Math.floor(Math.random() * anu.length)]
let msg = await hisoka.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: ftroli })
hisoka.sendText(m.chat, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, hisoka.user.name, m)
delete tebaklagu[m.sender.split('@')[0]]
}
} else if (args[0] === 'gambar') {
if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
let result = anu[Math.floor(Math.random() * anu.length)]
hisoka.sendImage(m.chat, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, hisoka.user.name, m)
delete tebakgambar[m.sender.split('@')[0]]
}
break
} else if (args[0] === 'kata') {
if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
let result = anu[Math.floor(Math.random() * anu.length)]
hisoka.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, hisoka.user.name, m)
delete tebakkata[m.sender.split('@')[0]]
}
} else if (args[0] === 'kalimat') {
if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
let result = anu[Math.floor(Math.random() * anu.length)]
 hisoka.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, hisoka.user.name, m)
delete tebakkalimat[m.sender.split('@')[0]]
}
} else if (args[0] === 'lirik') {
if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
let result = anu[Math.floor(Math.random() * anu.length)]
hisoka.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, hisoka.user.name, m)
delete tebaklirik[m.sender.split('@')[0]]
}
} else if (args[0] === 'lontong') {
if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
let result = anu[Math.floor(Math.random() * anu.length)]
hisoka.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
})
await sleep(60000)
if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, hisoka.user.name, m)
delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
    }
  }
}
break
case 'lolkey':
       case 'cekapikey':
              if (!text) m.reply `Example : ${prefix + command} Textnya Mana Kak😡`
              anu = await fetchJson(`https://api.lolhuman.xyz/api/checkapikey?apikey=${text}`)
              teks = `*YOUR APIKEY*\n\n➸ Username= ${anu.result.username}\n➸ Request= ${anu.result.requests}\n➸ Today= ${anu.result.today}\n➸ Akun Type= ${anu.result.account_type}\n➸ Expired= ${anu.result.expired}\n➸ API = https://api.lolhuman.xyz`
              m.reply(teks)
              break
case 'jodohku': {
if (!m.isGroup) throw mess.group
let member = participants.map(u => u.id)
let me = m.sender
let jodoh = member[Math.floor(Math.random() * member.length)]
let jawab = `👫Jodoh mu adalah

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
let ments = [me, jodoh]
let buttons = [
{ buttonId: 'jodohku', buttonText: { displayText: 'Jodohku' }, type: 1 }
]
await hisoka.sendButtonText(m.chat, buttons, jawab, hisoka.user.name, ftroli, {mentions: ments})
}
break
case 'jadian': {
if (!m.isGroup) throw mess.group
let member = participants.map(u => u.id)
let orang = member[Math.floor(Math.random() * member.length)]
let jodoh = member[Math.floor(Math.random() * member.length)]
let jawab = `Ciee yang Jadian💖 Jangan lupa pajak jadiannya🐤

@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
let menst = [orang, jodoh]
let buttons = [
{ buttonId: 'jadian', buttonText: { displayText: 'Jodohku' }, type: 1 }
]
await hisoka.sendButtonText(m.chat, buttons, jawab, hisoka.user.name, m, {mentions: menst})
}
break
case 'react': {
if (!isCreator) throw mess.owner
reactionMessage = {
react: {
text: args[0],
key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
    }
  }
hisoka.sendMessage(m.chat, reactionMessage)
}
break  
case 'join': {
if (!isCreator) throw mess.owner
if (!text) throw 'Masukkan Link Group!'
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
m.reply(mess.wait)
let result = args[0].split('https://chat.whatsapp.com/')[1]
await hisoka.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'leave': {
if (!isCreator) throw mess.owner
await hisoka.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'setexif': {
if (!isCreator) throw mess.owner
if (!text) throw `Example : ${prefix + command} packname|author`
global.packname = text.split("|")[0]
global.author = text.split("|")[1]
m.reply(`Exif berhasil diubah menjadi\n\nあ Packname : ${global.packname}\nあ Author : ${global.author}`)
}
break
case 'kick': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await hisoka.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'add': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await hisoka.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'promote': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await hisoka.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'demote': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await hisoka.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'block': {
if (!isCreator) throw mess.owner
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await hisoka.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'unblock': {
if (!isCreator) throw mess.owner
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await hisoka.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'setname': case 'setsubject': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (!text) throw 'Text ?'
await hisoka.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
}
break
case 'setdesc': case 'setdesk': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (!text) throw 'Text ?'
await hisoka.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
}
break
case 'setppbot': {
if (!isCreator) throw mess.owner
if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
let media = await hisoka.downloadAndSaveMediaMessage(quoted)
await hisoka.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
m.reply(mess.success)
}
break
case 'setppbot': {
if (!quoted) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
var media = await hisoka.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
if (args[0] == `'panjang'`) {
var { img } = await generateProfilePicture(media)
await hisoka.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(media)
m.reply(`Sukses`)
} else {
var memeg = await hisoka.updateProfilePicture(botNumber, { url: media })
fs.unlinkSync(media)
m.reply(`Sukses`)
}
}
break
case 'setppgroup': case 'setppgrup': case 'setppgc': {
if (!m.isGroup) throw mess.group
if (!isAdmins) throw mess.admin
if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
let media = await hisoka.downloadAndSaveMediaMessage(quoted)
await hisoka.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
m.reply(mess.success)
}
break
case 'tagall': case 'tagall': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (!q) throw `Teks?`
let teks = `══✪〘 *👥 Tag All* 〙✪══\n\n${q ? q : ''}\n`
for (let mem of participants) {
teks += `➲ @${mem.id.split('@')[0]}\n`
}
hisoka.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: ftroli })
}
break
case 'h': case 'hidetag': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
hisoka.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: ftroli })
}
break
case 'style': case 'styletext': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
let { styletext } = require('./lib/scraper')
if (!text) throw 'Masukkan Query text!'
let anu = await styletext(text)
let teks = `Srtle Text From ${text}\n\n`
for (let i of anu) {
teks += `あ *${i.name}* : ${i.result}\n\n`
}
m.reply(teks)
}
break
case 'vote': {
if (!m.isGroup) throw mess.group
if (m.chat in vote) throw `_Masih ada vote di chat ini!_\n\n*${prefix}hapusvote* - untuk menghapus vote`
if (!text) throw `Masukkan Alasan Melakukan Vote, Example: *${prefix + command} Owner Ganteng*`
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
footer: hisoka.user.name,
buttons: buttonsVote,
headerType: 1
}
hisoka.sendMessage(m.chat, buttonMessageVote)
}
break
case 'upvote': {
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
isVote = vote[m.chat][1].concat(vote[m.chat][2])
wasVote = isVote.includes(m.sender)
if (wasVote) throw 'Kamu Sudah Vote'
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
footer: hisoka.user.name,
buttons: buttonsUpvote,
headerType: 1,
mentions: menvote
}
hisoka.sendMessage(m.chat, buttonMessageUpvote)
}
break
case 'devote': {
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
isVote = vote[m.chat][1].concat(vote[m.chat][2])
wasVote = isVote.includes(m.sender)
if (wasVote) throw 'Kamu Sudah Vote'
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
footer: hisoka.user.name,
buttons: buttonsDevote,
headerType: 1,
mentions: menvote
}
hisoka.sendMessage(m.chat, buttonMessageDevote)
}
break             
case 'cekvote':
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
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


©${hisoka.user.id}
`
hisoka.sendTextWithMentions(m.chat, teks_vote, m)
break
case 'deletevote': case'delvote': case 'hapusvote': {
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
delete vote[m.chat]
m.reply('Berhasil Menghapus Sesi Vote Di Grup Ini')
}

break
case 'group': case 'grup': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (args[0] === 'close'){
await hisoka.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`Sukses Menutup Group`)).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'open'){
await hisoka.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`Sukses Membuka Group`)).catch((err) => m.reply(jsonformat(err)))
} else {
let buttons = [
{ buttonId: 'group open', buttonText: { displayText: 'Open' }, type: 1 },
{ buttonId: 'group close', buttonText: { displayText: 'Close' }, type: 1 }
]
await hisoka.sendButtonText(m.chat, buttons, `Mode Group`, hisoka.user.name, ftroli)

  }
}
break
case 'grupinfo': case 'groupinfo':
try{
 var pic = await hisoka.getProfilePicture(m.chat)
  } catch {
 var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
  }
let ingfo = `*G R O U P  I N F O*\n\n*Name :* ${groupName}\n*ID Group :* ${m.chat}\n*Made :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss')}\n*Group Owner:* @${groupMetadata.owner.split('@')[0]}\n*Number Of Admins :* ${groupAdmins.length}\n*Number Of Participants :* ${participants.length}\n*Desc :* \n${groupMetadata.desc}`
ds = await getBuffer(pic)
hisoka.sendMessage(m.chat, { image: ds,caption: ingfo, mentions: [groupMetadata.owner] }, { quoted: ftroli})
break
case 'editinfo': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (args[0] === 'open'){
await hisoka.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`Sukses Membuka Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'close'){
await hisoka.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`Sukses Menutup Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
} else {
let buttons = [
{ buttonId: 'editinfo open', buttonText: { displayText: 'Open' }, type: 1 },
{ buttonId: 'editinfo close', buttonText: { displayText: 'Close' }, type: 1 }
]
await hisoka.sendButtonText(m.chat, buttons, `Mode Edit Info`, hisoka.user.name, m)

}
}
break
case 'autosticker':
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
					if (args[0] === '1') {
					if (isAutoSticker) return m.reply('Sudah Aktif Sebelumnya')
					autosticker.push(from)
					fs.writeFileSync('./Database/autosticker.json', JSON.stringify(autosticker))
m.reply(`Autosticker Berhasil Di Aktifkan !`)
					} else if (args[0] === '0') {
					autosticker.splice(from, 1)
						fs.writeFileSync('./Database/autosticker.json', JSON.stringify(autosticker))
m.reply(`Autosticker Berhasil Di Nonaktifkan !`)
					} else {
let buttons = [
{ buttonId: 'autosticker 1', buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: 'autosticker 0', buttonText: { displayText: 'Off' }, type: 1 }
]
await hisoka.sendButtonText(m.chat, buttons, `Mode Autosticker`, hisoka.user.name, ftroli)
}
					break
case 'antiwame':
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (args[0] === "on") {
if (global.db.data.chats[m.chat].antiwame) return m.reply('Sudah Aktif Sebelumnya')
global.db.data.chats[m.chat].antiwame = true
m.reply(`Antilink Berhasil Di Aktifkan !`)
} else if (args[0] === "off") {
if (!global.db.data.chats[m.chat].antiwame) return m.reply('Sudah Nonaktif Sebelumnya')
global.db.data.chats[m.chat].antiwame = false
m.reply(`Antilink Berhasil Di Nonaktifkan !`)
} else {
let buttons = [
{ buttonId: 'antiwame on', buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: 'antiwame off', buttonText: { displayText: 'Off' }, type: 1 }
]
await hisoka.sendButtonText(m.chat, buttons, `Mode Antilink`, hisoka.user.name, m)
}
break
	case 'revoke':
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
				await hisoka.groupRevokeInvite(from)
			    .then( res => {
				  m.reply(`Sukses menyetel tautan undangan grup ini`)
				}).catch(() => m.reply(mess.error.api))
				break
case 'antilink': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (args[0] === "on") {
if (db.data.chats[m.chat].antilink) return m.reply(`Sudah Aktif Sebelumnya`)
db.data.chats[m.chat].antilink = true
m.reply(`Antilink Aktif !`)
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].antilink) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
db.data.chats[m.chat].antilink = false
m.reply(`Antilink Tidak Aktif !`)
} else {
let buttons = [
{ buttonId: 'antilink on', buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: 'antilink off', buttonText: { displayText: 'Off' }, type: 1 }
]
await hisoka.sendButtonText(m.chat, buttons, `Mode Antilink`, hisoka.user.name, m)
  }
}
break
case 'mute': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (args[0] === "on") {
if (db.data.chats[m.chat].mute) return m.reply(`Sudah Aktif Sebelumnya`)
db.data.chats[m.chat].mute = true
m.reply(`${hisoka.user.name} telah di mute di group ini !`)
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].mute) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
db.data.chats[m.chat].mute = false
m.reply(`${hisoka.user.name} telah di unmute di group ini !`)
} else {
let buttons = [
{ buttonId: 'mute on', buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: 'mute off', buttonText: { displayText: 'Off' }, type: 1 }
]
await hisoka.sendButtonText(m.chat, buttons, `Mute Bot`, hisoka.user.name, m)
   }
}
break
case 'lirik':
if (args.length == 0) return m.reply(`Example: ${prefix + command} Melukis Senja`)
query = args.join(" ")
nanih = await fetchJson(`https://api.lolhuman.xyz/api/lirik?apikey=${lolkey}&query=${query}`)
m.reply(nanih.result)
break
case 'linkgroup': case 'linkgc': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
let response = await hisoka.groupInviteCode(m.chat)
hisoka.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break
case 'ephemeral': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (!text) throw 'Masukkan value enable/disable'
if (args[0] === 'enable') {
await hisoka.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'disable') {
await hisoka.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
  }
}
break
case 'delete': case 'del': {
if (!m.quoted) throw false
if (!isCreator) throw mess.owner
let { chat, fromMe, id, isBaileys } = m.quoted
if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
hisoka.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
}
break
case 'bcgc': case 'bcgroup': {
if (!isCreator) throw mess.owner
if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
let getGroups = await hisoka.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
for (let i of anu) {
await sleep(1500)
let btn = [{
urlButton: {
displayText: 'Source Code',
url: 'https://github.com/DikaArdnt/Hisoka-Morou'
}
}, {
callButton: {
 displayText: 'Number Phone Owner',
phoneNumber: '+62 882-9202-4190'
}
}, {
quickReplyButton: {
displayText: 'Status Bot',
id: 'ping'
}
}, {
quickReplyButton: {
displayText: 'Contact Owner',
id: 'owner'
}  
}, {
quickReplyButton: {
displayText: 'Script',
id: 'sc'
}
}]
let txt = `「 Broadcast Bot 」\n\n${text}`
hisoka.send5ButImg(i, txt, hisoka.user.name, global.thumb, btn)
}
m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
break
case 'bc': case 'broadcast': case 'bcall': {
if (!isCreator) throw mess.owner
if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
let anu = await store.chats.all().map(v => v.id)
m.reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
for (let yoi of anu) {
await sleep(1500)
let btn = [{
urlButton: {
displayText: 'Source Code',
 url: 'https://github.com/DikaArdnt/Hisoka-Morou'
}
}, {
callButton: {
displayText: 'Number Phone Owner',
phoneNumber: '+62 882-9202-4190'
}
}, {
quickReplyButton: {
displayText: 'Status Bot',
id: 'ping'
}
}, {
quickReplyButton: {
displayText: 'Contact Owner',
id: 'owner'
}  
}, {
quickReplyButton: {
displayText: 'Script',
 id: 'sc'
}
}]
let txt = `「 Broadcast Bot 」\n\n${text}`
hisoka.send5ButImg(yoi, txt, hisoka.user.name, global.thumb, btn)
}
m.reply('Sukses Broadcast')
}
break
case 'infochat': {
if (!m.quoted) m.reply('Reply Pesan')
let msg = await m.getQuotedObj()
if (!m.quoted.isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
let teks = ''
for (let i of msg.userReceipt) {
let read = i.readTimestamp
let unread = i.receiptTimestamp
let waktu = read ? read : unread
teks += `あ @${i.userJid.split('@')[0]}\n`
teks += ` ┗━あ *Waktu :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} あ *Status :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
}
hisoka.sendTextWithMentions(m.chat, teks, m)
}
break
case 'q': case 'quoted': {
if (!m.quoted) return m.reply('Reply Pesannya!!')
let wokwol = await hisoka.serializeM(await m.getQuotedObj())
if (!wokwol.quoted) return m.reply('Pesan Yang anda reply tidak mengandung reply')
await wokwol.quoted.copyNForward(m.chat, true)
}
break
case 'listpc': {
let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
for (let i of anu) {
let nama = store.messages[i].array[0].pushName
teks += `⬡ *Nama :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
}
hisoka.sendTextWithMentions(m.chat, teks, ftroli)
}
break
case 'listgc': {
let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
for (let i of anu) {
let metadata = await hisoka.groupMetadata(i)
teks += `⬡ *Nama :* ${metadata.subject}\n⬡ *Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Tidak diketahui'}\n⬡ *ID :* ${metadata.id}\n⬡ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
}
hisoka.sendTextWithMentions(m.chat, teks, ftroli)
}
break
case 'listonline': case 'liston': {
let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
let online = [...Object.keys(store.presences[id]), botNumber]
hisoka.sendText(m.chat, 'List Online:\n\n' + online.map(v => 'あ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
}
break
case 'request': {
if (!args.join(" ")) return m.reply(`Example : ${prefix + command} min tambahin fitur downloader`)
teks = `*| REQUEST FITUR |*`
teks1 = `\n\nNomor : @${m.sender.split("@")[0]}\nRequest : ${args.join(" ")}`
teks2 = `\n\nSucces send to owner`
for (let i of owner) {
hisoka.sendMessage(i + "@s.whatsapp.net", {text: teks + teks1, mentions:[m.sender]}, {quoted:m})
}
hisoka.sendMessage(m.chat, {text: teks + teks2 + teks1, mentions:[m.sender]}, {quoted:m})
}
break
case 'report': {
if (!args.join(" ")) return m.reply(`Example : \n- ${prefix + command} fitur ig error min\n- ${prefix + command} user ini nyepam min`)
teks = `*| REPORT FITUR |*`
teks1 = `\n\nNomor : @${m.sender.split("@")[0]}\nReport : ${args.join(" ")}`
teks2 = `\n\nSucces send to owner`
for (let i of owner) {
hisoka.sendMessage(i + "@s.whatsapp.net", {text: teks + teks1, mentions:[m.sender]}, {quoted:m})
}
hisoka.sendMessage(m.chat, {text: teks + teks2 + teks1, mentions:[m.sender]}, {quoted:m})
}
break
case 'wm': case 'take': case 'swm': case 'stickerwm': {
if (!args.join(" ")) return m.reply(`Example :\nswm Barr`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0];
const atnm = swn.split("|")[1];
if (m.quoted.isAnimated === true) {
hisoka.downloadAndSaveMediaMessage(quoted, "gifee")
hisoka.sendMessage(from, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await hisoka.sendImageAsSticker(m.chat, media, ftroli, { packname: pcknm, author: atnm })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.ftroli || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await hisoka.sendVideoAsSticker(m.chat, media, ftroli, { packname: pcknm, author: atnm })
await fs.unlinkSync(encmedia)
} else {
m.reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
}
}
break
case 'sticker': case 's': case 'stickergif': case 'sgif': {
if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
m.reply(mess.wait)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await hisoka.sendImageAsSticker(m.chat, media, ftroli, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await hisoka.sendVideoAsSticker(m.chat, media, ftroli, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
}
}
sourceUrl: "https://chat.whatsapp.com/D25FIGbxqzY3PFaS2ntupb"
break
case 'ebinary': {
if (!text) throw `Example : ${prefix + command} text`
let { eBinary } = require('./lib/binary')
let eb = await eBinary(text)
m.reply(eb)
}
break
case 'dbinary': {
if (!text) throw `Example : ${prefix + command} text`
let { dBinary } = require('./lib/binary')
let db = await dBinary(text)
m.reply(db)
}
break
case 'emojimix': {
let [emoji1, emoji2] = text.split`+`
if (!emoji1) throw `Example : ${prefix + command} 😅+🤔`
if (!emoji2) throw `Example : ${prefix + command} 😅+🤔`
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of anu.results) {
let encmedia = await hisoka.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
break
case 'emojimix2': {
if (!text) throw `Example : ${prefix + command} 😅`
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
for (let res of anu.results) {
let encmedia = await hisoka.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
break
case 'attp': case 'ttp': {
if (!text) throw `Example : ${prefix + command} text`
await hisoka.sendMedia(m.chat, `https://xteam.xyz/${command}?file&text=${text}`, 'hisoka', 'morou', m, {asSticker: true})
}
break
case 'ss':{
if(!q) return m.reply("Masukan Link")
if(!isUrl(args[0]) && !args[0].includes('www.')) return reply("Link error");
if (args.length < 1) return m.reply('Urlnya mana om')
let teks = q
let ana = await fetchJson(`https://shot.screenshotapi.net/screenshot?&url=${teks}`)
let buff = await getBuffer(ana.screenshot)
await hisoka.sendMessage(from, {caption : `Link: ${teks}`, image: buff}, {quoted: ftroli})
}
break
case 'smeme': case 'stickmeme': case 'stikmeme': case 'stickermeme': case 'stikermeme': {
let respond = `Kirim/reply image/sticker dengan caption ${prefix + command} text1|text2`
if (!/image/.test(mime)) throw respond
if (!text) throw respond
m.reply(mess.wait)
atas = text.split('|')[0] ? text.split('|')[0] : '-'
bawah = text.split('|')[1] ? text.split('|')[1] : '-'
let dwnld = await quoted.download()
let { floNime } = require('./lib/uploader')
let fatGans = await floNime(dwnld)
let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${fatGans.result.url}`
let FaTiH = await hisoka.sendImageAsSticker(m.chat, smeme, ftroli, { packname: global.packname, author: global.auhor })
await fs.unlinkSync(FaTiH)
}
break     
case 'toimage': case 'toimg': {
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `Balas sticker dengan caption *${prefix + command}*`
m.reply(mess.wait)
let media = await hisoka.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
hisoka.sendMessage(m.chat, { image: buffer }, { quoted: ftroli })
fs.unlinkSync(ran)
})
}
break
case 'tomp4': case 'tovideo': {
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
m.reply(mess.wait)
let { webp2mp4File } = require('./lib/uploader')
let media = await hisoka.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await hisoka.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: ftroli })
await fs.unlinkSync(media)
}
break
case 'toaud': case 'toaudio': {
if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
m.reply(mess.wait)
let media = await quoted.download()
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
hisoka.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
}
break
case 'tomp3': {
if (/document/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
m.reply(mess.wait)
let media = await quoted.download()
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
hisoka.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${hisoka.user.name}.mp3`}, { quoted : m })
}
break
case 'tovn': case 'toptt': {
if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
if (!quoted) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
m.reply(mess.wait)
let media = await quoted.download()
let { toPTT } = require('./lib/converter')
let audio = await toPTT(media, 'mp4')
hisoka.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
}
break
case 'togif': {
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
m.reply(mess.wait)
let { webp2mp4File } = require('./lib/uploader')
let media = await hisoka.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await hisoka.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: ftroli })
await fs.unlinkSync(media)
}
break
case 'tourl': {
m.reply(mess.wait)
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
let media = await hisoka.downloadAndSaveMediaMessage(quoted)
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
if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
let remobg = require('remove.bg')
let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
hmm = await './src/remobg-'+getRandom('')
localFile = await hisoka.downloadAndSaveMediaMessage(quoted, hmm)
outputFile = await './src/hremo-'+getRandom('.png')
m.reply(mess.wait)
remobg.removeBackgroundFromImageFile({
path: localFile,
apiKey: apinobg,
size: "regular",
type: "auto",
scale: "100%",
outputFile 
}).then(async result => {
hisoka.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
await fs.unlinkSync(localFile)
await fs.unlinkSync(outputFile)
})
}
break
case 'yts': case 'ytsearch': {
if (!text) throw `Example : ${prefix + command} story wa anime`
let yts = require("yt-search")
let search = await yts(text)
let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
let no = 1
for (let i of search.all) {
teks += `あ No : ${no++}\nあ Type : ${i.type}\nあ Video ID : ${i.videoId}\nあ Title : ${i.title}\nあ Views : ${i.views}\nあ Duration : ${i.timestamp}\nあ Upload At : ${i.ago}\nあ Author : ${i.author.name}\nあ Url : ${i.url}\n\n─────────────────\n\n`
}
hisoka.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: ftroli })
}
break
case 'google': {
m.reply(mess.wait)
if (!args[0]) return m.reply(`Example: ${prefix + command} <query>\nUses : ${prefix + command} apa arti cinta`)
let google = require('google-it')
google({'query': args.join(" ")}).then(res => {
let teks = `Google Search From : ${text}\n\n`
for (let g of res) {
teks += `*Title* : ${g.title}\n`
teks += `*Description* : ${g.snippet}\n`
teks += `*Link* : ${g.link}\n\n────────────────────────\n\n`
} 
m.reply(teks)
})
}
break
case 'gitclone':
try{
let regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
if (!q) return setReply( 'link githubnya mana? contoh: https://github.com/saipulanuar/v18 ')
if (!regex.test(q)) return setReply('link salah!')
let [, user, repos] = q.match(regex) || []
let repo = repos.replace(/.git$/, '')
let url = `https://api.github.com/repos/${user}/${repos}/zipball`
let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
// 'attachment; filename=ilmanhdyt/ShiraoriBOT-Mdv2.5.1-251-g836cccd.zip'
m.reply(`*Mohon tunggu, sedang mengirim repository..*`)
await hisoka.sendMedia (from, url, dev, {fileName: filename})
} catch (err){
m.reply(mess.error.link)
}
break  
case 'gimage': case 'gig': {
if (!args[0]) return m.reply("Mau cari gambar apa kak?")
let gis = require('g-i-s')
gis(args.join(" "), async (error, result) => {
n = result
images = n[Math.floor(Math.random() * n.length)].url
let buttons = [
{buttonId: `gimage ${args.join(" ")}`, buttonText: {displayText: 'Next Image'}, type: 1}
]
let buttonMessage = {
image: { url: images },
caption: `*| GOOGLE IMAGE |*

🤠 Query : ${text}
🔗 Media Url : ${images}`,
footer: "XZYBOTZ-MD",
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:`${ucapanWaktu} ${pushname}`,
mediaType: 1,
renderLargerThumbnail: true , 
showAdAttribution: true, 
jpegThumbnail: fs.readFileSync('./media/kitzuna.jpg'),
mediaUrl: "https://github.com/DikaArdnt/Hisoka-Morou", 
thumbnail: fs.readFileSync('./media/kitzuna.jpg'),
sourceUrl: "https://yandex.com/"
}}
}
hisoka.sendMessage(m.chat, buttonMessage, { quoted: ftroli })
})
}
break
case 'profile': {
const jidny = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.sender ? m.sender : false
const ddny = await store.chats.all().filter(v => v.id.includes(jidny)).map(v => v)
const isblocks = await hisoka.fetchBlocklist()
const isBlock = isblocks.includes(jidny)
texnr = `     「 Profile Inspector 」
▸ Number : ${jidny.split("@")[0]}
▸ Mention : @${jidny.split("@")[0]}
▸ Name : ${hisoka.getName(jidny)}
▸ Biography : ${jsonformat(await hisoka.fetchStatus(jidny).catch(() => {}))}
▸ Business : ${jsonformat(await hisoka.getBusinessProfile(jidny))}
▸ LastChat : ${ddny[0] ? moment(ddny[0].conversationTimestamp * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss") : "undefined"}
▸ Chat : ${ddny[0] ? ddny[0].unreadCount +" chat" : "0 chat"}
▸ Blockir : ${isBlock}
▸ Device : ${m.quoted ? zhisoka.getDevice(m.quoted.id) + " (+" + m.quoted.sender.split("@")[0] + ")": hisoka.getDevice(m.id) + " (+" + m.sender.split("@")[0] + ")"}`
try {
ppuser = await hisoka.profilePictureUrl(jidny, 'image')
} catch {
ppuser = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
hisoka.sendMessage(m.chat, {image:{url:ppuser},caption:texnr, mentions: await hisoka.parseMention(texnr)}, {quoted:m})
}
break
case 'welcome': {
if (!m.isGroup) return
await replyTemplate(`Welcome Kak\nJangan Lupa Baca Deskripsi\nPatuhi Rules Bot!!!`)
}
break
case 'sewa':
if (!m.key.fromMe && !isCreator) return m.reply(mess.owner)
if (!m.isGroup) return m.reply(mess.group)
if (!q) return m.reply(`Penggunaan :\n*${prefix}sewa* add/del waktu`)
if (args[0].toLowerCase() === 'add'){
_sewa.addSewaGroup(from, args[1], sewa)
m.reply(mess.success)
} else if (args[0].toLowerCase() === 'del'){
sewa.splice(_sewa.getSewaPosition(from, sewa), 1)
fs.writeFileSync('./database/sewa.json', JSON.stringify(sewa))
m.reply(mess.success)
} else {
m.reply(`Penggunaan :\n*${prefix}sewa* add/del waktu`)}
break
case 'listsewa':
if (!m.isGroup) return m.reply(mess.group)
let txtnyee = `List Sewa\nJumlah : ${sewa.length}\n\n`
for (let i of sewa){
let cekvippsewa = ms(i.expired - Date.now())
txtnyee += `*ID :* ${i.id} \n*Expire :* ${cekvippsewa.days} day(s) ${cekvippsewa.hours} hour(s) ${cekvippsewa.minutes} minute(s) ${cekvippsewa.seconds} second(s)\n\n`
}
m.reply(txtnyee)
break
case 'ceksewa': 
if (!m.isGroup) return m.reply(mess.group)
if (!isSewa) return m.reply(`Group Ini Tidak Terdaftar Dalam List Sewabot. Ketik ${prefix}sewabot Untuk Info Lebih Lanjut`)
let cekvipsewa = ms(_sewa.getSewaExpired(from, sewa) - Date.now())
let sewanya = `*「 SEWA EXPIRE 」*\n\n➸ *ID*: ${from}\n➸ *Expired :* ${cekvipsewa.days} day(s) ${cekvipsewa.hours} hour(s) ${cekvipsewa.minutes} minute(s) ${cekvipsewa.seconds} second(s)`
m.reply(sewanya)
break
case 'dashboard':
                            var posi = await getPosiCmdUser(sender, _cmdUser)
                            _cmdUser[posi].db.sort((a, b) => (a.count < b.count) ? 1 : -1)
                            _cmd.sort((a, b) => (a.count  < b.count) ? 1 : -1)
                            var posi = await getPosiCmdUser(sender, _cmdUser)
                            var jumlahCmd = _cmd.length
                            if (jumlahCmd > 10) jumlahCmd = 10
                            var jumlah = _cmdUser[posi].db.length
                            if (jumlah > 5) jumlah = 5
                            var totalUser = 0
                            for (let x of _cmdUser[posi].db) {
                              totalUser = totalUser + x.count
                            }
                            var total = 0
                            for (let o of _cmd) {
                              total = total + o.count
                            }
                            var teks = `*XZY BOTZ DASHBOARD*\n\n*HIT*\n• GLOBAL : ${total}\n• USER : ${totalUser}\n\n`
                            teks += `*Most Command Global*\n`
                            for (let u = 0; u < jumlahCmd; u ++) {
                              teks += `• ${_cmd[u].nama} : ${_cmd[u].count}\n`
                            }
                            teks += `\n*Most Command User*\n`
                            for (let i = 0; i < jumlah; i ++) {
                              teks += `• ${_cmdUser[posi].db[i].nama} : ${_cmdUser[posi].db[i].count}\n`
                            }
                            m.reply(teks)
                            break
case 'absen':
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
global.db.data.absen = global.db.data.absen || {} 
if (!(from in global.db.data.absen)) return hisoka.send1ButMes(m.chat, lang.noAbsen() , `© ${ownername}`, `absenstart`, lang.StartAbsen(), m)

let absen = global.db.data.absen[from][1] 
const wasVote = absen.includes(m.sender) 
if (wasVote)return reply(lang.DahAbsen())
absen.push(m.sender) 
let d = new Date 
let date = d.toLocaleDateString('id', { 
  day: 'numeric', 
  month: 'long', 
  year: 'numeric' 
}) 
let list = absen.map((v, i) => `• ${i + 1}. @${v.split`@`[0]}`).join('\n') 
let caption = `Tanggal: ${date}
${global.db.data.absen[from][2] ? global.db.data.absen[from][2] + '\n' : ''}
*--------「 LIST ABSEN 」--------*
${list}

Total: ${absen.length}
`.trim()
await hisoka.send2ButMes(m.chat, caption, `© ${ownername}`, `absen`, `Absen`, `cekabsen`, `Check Absen`, m, absen)

//hisoka.sendTextWithMentions(m.chat, caption, m)
break
case 'cekabsen':{
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
global.db.data.absen = global.db.data.absen || {}
if (!(from in global.db.data.absen))return hisoka.send1ButMes(m.chat, lang.noAbsen(), `© ${ownername}`, `absenstart`, lang.StartAbsen(), m)

let dd = new Date 
let datee = dd.toLocaleDateString('id', { 
  day: 'numeric', 
  month: 'long', 
  year: 'numeric' 
}) 
let absenn = global.db.data.absen[from][1] 
let listt = absenn.map((v, i) => `• ${i + 1}. @${v.split`@`[0]}`).join('\n') 
let captionn = `Tanggal: ${datee}
${global.db.data.absen[from][2] ? global.db.data.absen[from][2] + '\n' : ''}
*--------「 LIST ABSEN 」--------*
${listt}

Total: ${absenn.length}
`.trim()
hisoka.send2ButMes(m.chat, captionn, `© ${ownername}`, `absen`, `Absen`, `deleteabsen`, `Delete Absen`, m, absenn)

//hisoka.sendTextWithMentions(m.chat, captionn, m)
}
break

case 'delabsen': case 'deleteabsen':{
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
  global.db.data.absen = global.db.data.absen || {}
  if (!(from in global.db.data.absen))return hisoka.send1ButMes(m.chat, lang.noAbsen(), `© ${ownername}`, `absenstart`, lang.StartAbsen(), m)

  delete global.db.data.absen[from]
reply(lang.DelAbsen())
}
break
case 'absenstart': case 'mulaiabsen':{
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
global.db.data.absen = global.db.data.absen || {}
if (from in global.db.data.absen)return hisoka.send2ButMes(m.chat, lang.adaAbsen(), `© ${ownername}`, `cekabsen`, `Check Absen`, `deleteabsen`, `Delete Absen`, m)

global.db.data.absen[from] = [
  await hisoka.send1ButMes(m.chat, lang.SAbsen(), `© ${ownername}`, `absen`, `Absen`, m),

  [], q ? q : '']
  }
break
case 'ovo':{
if (isGroup) return m.reply('Fitur Ini Hanya Bisa Digunakan Di Private Chat!')
let noshp = text
if (isNaN(parseInt(noshp))) return m.reply(`${command} 6285850063401`)
const sections = [
    {
	title: `Convert Ovo`,
	rows: [
	    {title: "Rp20.000", rowId: `${prefix}cvspay ${noshp}|11`}
	]
    },
    {
	title: `Convert Ovo`,
	rows: [
	    {title: "Rp25.000", rowId: `${prefix}cvspay ${noshp}|12`}
	]
    },
    {
	title: `Convert Ovo`,
	rows: [
	    {title: "Rp30.000", rowId: `${prefix}cvspay ${noshp}|13`}
	]
    },
    {
	title: `Convert Ovo`,
	rows: [
	    {title: "Rp40.000", rowId: `${prefix}cvspay ${noshp}|14`}
	]
    },
    {
	title: `Convert Ovo`,
	rows: [
	    {title: "Rp50.000", rowId: `${prefix}cvspay ${noshp}|15`}
	]
    },
    {
	title: `Convert Ovo`,
	rows: [
	    {title: "Rp60.000", rowId: `${prefix}cvspay ${noshp}|16`}
	]
    },
    {
	title: `Convert Ovo`,
	rows: [
	    {title: "Rp70.000", rowId: `${prefix}cvspay ${noshp}|17`}
	]
    },
    {
	title: `Convert Ovo`,
	rows: [
	    {title: "Rp75.000", rowId: `${prefix}cvspay ${noshp}|18`}
	]
    },
    {
	title: `Convert Ovo`,
	rows: [
	    {title: "Rp90.000", rowId: `${prefix}cvspay ${noshp}|19`}
	]
    },
    {
	title: `Convert Ovo`,
	rows: [
	    {title: "Rp100.000", rowId: `${prefix}cvspay ${noshp}|20`}
	]
    },
    {
	title: `Convert Ovo`,
	rows: [
	    {title: "Rp125.000", rowId: `${prefix}cvspay ${noshp}|21`}
	]
    },
     {
	title: `Convert Ovo`,
	rows: [
	    {title: "Rp150.000", rowId: `${prefix}cvspay ${noshp}|22`}
	]
    },
    {
	title: `Convert Ovo`,
	rows: [
	    {title: "Rp200.000", rowId: `${prefix}cvspay ${noshp}|22`}
	]
    },
]
let isian = `    
Silahkan Pilih Nominal Saldo E-wallet Yang Akan Anda Convert Ke Ovo!.

Note: Pembayaran Disini Hanya Menggunakan Server, Owner Tidak Mendapatkan Hasil Apapun Disini Karena Diproses Langsung Dari Server!.

Jika Sudah Melakukan Pemilihan Nominal, Anda Akan Dikirimkan Qris Pembayaran Dan Anda Harus Membayar Melalu Aplikasi E-wallet Yang Mendukung Qris, Pastikan Nominal Yang Anda Krimkan Harus Sama Dengan Nominal Yang Diminta!.

Jika Anda Sudah Melakukan Pembayaran, Silahkan Tunggu 1-2 Menit Dan Melakukan Pengecekan Secara Berkala Pada Saldo Anda!.`
const listMessage = {
  text: isian,
  footer: "Powered By @BarrGans",
  title: "━━[ Nominal saldo Ovo ]━━",
  buttonText: "Klik Disini",
  sections
}
const tessgh = await hisoka.sendMessage(from, listMessage)
break
}
case 'play': case 'ytplay': {
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                let buttons = [
                    {buttonId: `ytmp3 ${anu.url}`, buttonText: {displayText: '♫ Audio'}, type: 1},
                    {buttonId: `ytmp4 ${anu.url}`, buttonText: {displayText: '► Video'}, type: 1}                
                ]
                let buttonMessage = {
                    image: { url: anu.thumbnail },
                    caption: `
あ Title : ${anu.title}
あ Ext : Search
あ Id : ${anu.videoId}
あ Duration : ${anu.timestamp}
あ Viewers : ${anu.views}
あ Upload At : ${anu.ago}
あ Author : ${anu.author.name}
あ Channel : ${anu.author.url}
あ Description : ${anu.description}
あ Url : ${anu.url}`,
footer: "XZYBOTZ-MD",
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:`${ucapanWaktu} ${pushname}`,
mediaType: 1,
renderLargerThumbnail: true , 
showAdAttribution: true, 
jpegThumbnail: fs.readFileSync('./media/kitzuna.jpg'),
mediaUrl: "https://github.com/DikaArdnt/Hisoka-Morou", 
thumbnail: fs.readFileSync('./media/kitzuna.jpg'),
sourceUrl: "https://yandex.com/"
}}
}
hisoka.sendMessage(m.chat, buttonMessage, { quoted: ftroli })
}
break
case 'ytmp3': case 'ytaudio': {
let { yta } = require('./lib/y2mate')
if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
let quality = args[1] ? args[1] : '128kbps'
let media = await yta(text, quality)
if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
hisoka.sendImage(m.chat, media.thumb, `あ Title : ${media.title}\nあ File Size : ${media.filesizeF}\nあ Url : ${isUrl(text)}\nあ Ext : MP3\nあ Resolusi : ${args[1] || '128kbps'}`, m)
hisoka.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: ftroli })
}
break
case 'ytmp4': case 'ytvideo': {
let { ytv } = require('./lib/y2mate')
if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
let quality = args[1] ? args[1] : '360p'
let media = await ytv(text, quality)
if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
hisoka.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `あ Title : ${media.title}\nあ File Size : ${media.filesizeF}\nあ Url : ${isUrl(text)}\nあ Ext : MP3\nあ Resolusi : ${args[1] || '360p'}` }, { quoted: ftroli })
}
break
case 'mediafire':{
oh = `Example : ${prefix + command} link`
if (!text) throw oh
kfeh = await fetchJson(`https://api.lolhuman.xyz/api/mediafire?apikey=${lolkey}&url=${text}`)
mnya = await getBuffer(kfeh.result.link)
hisoka.sendMessage(m.chat, {document: mnya, mimetype: 'application/zip', fileName: `${kfeh.result.filename}`}, {quoted:m}).catch ((err) => m.reply(oh))
}
break
case 'getname': {
if (qtod === "true") {
namenye = await hisoka.getName(m.quoted.sender)
m.reply(namenye)
} else if (qtod === "false") {
hisoka.sendMessage(from, {text:"Reply orangnya"}, {quoted:ftroli})
}
}
break
case 'getppgc':
if (!isGroup) return 
m.reply(mess.wait)
try {
var ppimg = await hisoka.profilePictureUrl(from, 'image')
} catch (err) {
console.log(err)
var ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
await hisoka.sendMessage(from, { image: { url: ppimg }}, { quoted: ftroli })
break 
case 'getpic': {
if (qtod === "true") {
try {
pporg = await hisoka.profilePictureUrl(m.quoted.sender, 'image')
} catch {
pporg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
hisoka.sendMessage(m.chat, { image : { url : pporg }, caption:`Done` }, { quoted : ftroli })
} else if (qtod === "false") {
try {
pporgs = await hisoka.profilePictureUrl(from, 'image')
} catch {
pporgs = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
hisoka.sendMessage(m.chat, { image : { url : pporgs }, caption:`Done` }, { quoted : ftroli })
}
}
break
case 'getmusic': {
let { yta } = require('./lib/y2mate')
if (!text) throw `Example : ${prefix + command} 1`
if (!m.quoted) return m.reply('Reply Pesan')
if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
let quality = args[1] ? args[1] : '128kbps'
let media = await yta(urls[text - 1], quality)
if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
hisoka.sendImage(m.chat, media.thumb, `あ Title : ${media.title}\nあ File Size : ${media.filesizeF}\nあ Url : ${urls[text - 1]}\nあ Ext : MP3\nあ Resolusi : ${args[1] || '128kbps'}`, m)
hisoka.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: ftroli })
}
break
            case 'getvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return m.reply('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
                let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(urls[text - 1], quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                hisoka.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `あ Title : ${media.title}\nあ File Size : ${media.filesizeF}\nあ Url : ${urls[text - 1]}\nあ Ext : MP3\nあ Resolusi : ${args[1] || '360p'}` }, { quoted: ftroli })
            }
            break
            case 'pinterest':
				m.reply(mess.wait)
			    var jumlah;
			    if (q.includes('--')) jumlah = q.split('--')[1]
			    pinterest(q.replace('--'+jumlah, '')).then(async(data) => {
				  if (q.includes('--')) {
					if (data.result.length < jumlah) {
					  jumlah = data.result.length
					  m.reply(`Hanya ditemukan ${data.result.length}, foto segera dikirim`)
					}
					for (let i = 0; i < jumlah; i++) {
					  hisoka.sendMessage(from, { image: { url: data.result[i] }})
					}
				  } else {
					var but = [{buttonId: `/pinterest ${q}`, buttonText: { displayText: 'Next Photo' }, type: 1 }]
					hisoka.sendMessage(from, { caption: `Hasil pencarian dari ${q}`, image: { url: pickRandom(data.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: ftroli })
				  }
				})
			    break
case 'coffe': case 'kopi': {
let buttons = [
{buttonId: `coffe`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://coffee.alexflipnote.dev/random' },
                    caption: `☕ Random Coffe`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: ftroli })
            }
            break
case 'translate':
if (args.length < 1) return m.reply(`Text Nya Mana Kak?\nContoh\n${prefix + command} Who am I`)
tes = await fetchJson(`https://megayaa.herokuapp.com/api/translate?to=id&kata=${q}`)
Infoo = tes.info
Detek = tes.translate
m.reply(`👷Translate : ${Detek}\n🔎Hasil : ${Infoo}`)
break
case 'wallpaperislami':{
let kcle = await fetchJson(`https://raw.githubusercontent.com/Aprilia3/RestApi/master/data/Islamic.json`)
let random = kcle[Math.floor(Math.random() * kcle.length)]
hisoka.sendMessage(m.chat, { image: { url: random }, caption: `Nih Kak` }, { quoted: ftroli })
}
break
case 'wallpaperinori':{
let kuxe = await fetchJson(`https://raw.githubusercontent.com/qisyana/senku/main/storages/inori-pic.json`)
let random = kuxe[Math.floor(Math.random() * kuxe.length)]
hisoka.sendMessage(m.chat, { image: { url: random }, caption: `Nih Kak` }, { quoted: ftroli })
}
break
case 'wallpapercyber':{
let xpwl = await fetchJson(`https://raw.githubusercontent.com/Aprilia3/RestApi/master/data/CyberSpace.json`)
let random = xpwl[Math.floor(Math.random() * xpwl.length)]
hisoka.sendMessage(m.chat, { image: { url: random }, caption: `Nih Kak` }, { quoted: ftroli })
}
break
            case 'wallpaper': {
                if (!text) throw 'Masukkan Query Title'
		let { wallpaper } = require('./lib/scraper')
                anu = await wallpaper(text)
                result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `wallpaper ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `あ Title : ${result.title}\nあ Category : ${result.type}\nあ Detail : ${result.source}\nあ Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: "XZYBOTZ-MD",
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:`${ucapanWaktu} ${pushname}`,
mediaType: 1,
renderLargerThumbnail: true , 
showAdAttribution: true, 
jpegThumbnail: fs.readFileSync('./media/kitzuna.jpg'),
mediaUrl: "https://github.com/DikaArdnt/Hisoka-Morou", 
thumbnail: fs.readFileSync('./media/kitzuna.jpg'),
sourceUrl: "https://yandex.com/"
}}
}
hisoka.sendMessage(m.chat, buttonMessage, { quoted: ftroli })
}
break
            case 'wikimedia': {
                if (!text) throw 'Masukkan Query Title'
		let { wikimedia } = require('./lib/scraper')
                anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `wikimedia ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: `あ Title : ${result.title}\nあ Source : ${result.source}\nあ Media Url : ${result.image}`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: ftroli })
            }
            break
            case 'quotesanime': case 'quoteanime': {
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
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: ftroli })
            }
            break
	        case 'motivasi': case 'dilanquote': case 'bucinquote': case 'katasenja': case 'puisi': {
                let anu = await fetchJson(api('zenz', '/api/'+command, {}, 'apikey'))
                let buttons = [
                    {buttonId: `motivasi`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: anu.result.message,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: ftroli })
            }
            break
	    case 'nomerhoki': case 'nomorhoki': {
                if (!Number(text)) throw `Example : ${prefix + command} 6288292024190`
                let anu = await primbon.nomer_hoki(Number(text))
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `あ *Nomor HP :* ${anu.message.nomer_hp}\nあ *Angka Shuzi :* ${anu.message.angka_shuzi}\nあ *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\nあ *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, m)
            }
            break
            case 'artimimpi': case 'tafsirmimpi': {
                if (!text) throw `Example : ${prefix + command} belanja`
                let anu = await primbon.tafsir_mimpi(text)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `あ *Mimpi :* ${anu.message.mimpi}\nあ *Arti :* ${anu.message.arti}\nあ *Solusi :* ${anu.message.solusi}`, m)
            }
            break
            case 'ramalanjodoh': case 'ramaljodoh': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `あ *Nama Anda :* ${anu.message.nama_anda.nama}\nあ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\nあ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\nあ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\nあ *Hasil :* ${anu.message.result}\nあ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalanjodohbali': case 'ramaljodohbali': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `あ *Nama Anda :* ${anu.message.nama_anda.nama}\nあ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\nあ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\nあ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\nあ *Hasil :* ${anu.message.result}\nあ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'suamiistri': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `あ *Nama Suami :* ${anu.message.suami.nama}\nあ *Lahir Suami :* ${anu.message.suami.tgl_lahir}\nあ *Nama Istri :* ${anu.message.istri.nama}\nあ *Lahir Istri :* ${anu.message.istri.tgl_lahir}\nあ *Hasil :* ${anu.message.result}\nあ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalancinta': case 'ramalcinta': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `あ *Nama Anda :* ${anu.message.nama_anda.nama}\nあ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\nあ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\nあ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\nあ *Sisi Positif :* ${anu.message.sisi_positif}\nあ *Sisi Negatif :* ${anu.message.sisi_negatif}\nあ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artinama': {
                if (!text) throw `Example : ${prefix + command} Dika Ardianta`
                let anu = await primbon.arti_nama(text)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `あ *Nama :* ${anu.message.nama}\nあ *Arti :* ${anu.message.arti}\nあ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'kecocokannama': case 'cocoknama': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `あ *Nama :* ${anu.message.nama}\nあ *Lahir :* ${anu.message.tgl_lahir}\nあ *Life Path :* ${anu.message.life_path}\nあ *Destiny :* ${anu.message.destiny}\nあ *Destiny Desire :* ${anu.message.destiny_desire}\nあ *Personality :* ${anu.message.personality}\nあ *Persentase :* ${anu.message.persentase_kecocokan}`, m)
            }
            break
            case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
                if (!text) throw `Example : ${prefix + command} Dika|Novia`
                let [nama1, nama2] = text.split`|`
                let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendImage(m.chat,  anu.message.gambar, `あ *Nama Anda :* ${anu.message.nama_anda}\nあ *Nama Pasangan :* ${anu.message.nama_pasangan}\nあ *Sisi Positif :* ${anu.message.sisi_positif}\nあ *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
            }
            break
            case 'jadianpernikahan': case 'jadiannikah': {
                if (!text) throw `Example : ${prefix + command} 6, 12, 2020`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `あ *Tanggal Pernikahan :* ${anu.message.tanggal}\nあ *karakteristik :* ${anu.message.karakteristik}`, m)
            }
            break
            case 'sifatusaha': {
                if (!ext)throw `Example : ${prefix+ command} 28, 12, 2021`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `あ *Lahir :* ${anu.message.hari_lahir}\nあ *Usaha :* ${anu.message.usaha}`, m)
            }
            break
            case 'rejeki': case 'rezeki': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `あ *Lahir :* ${anu.message.hari_lahir}\nあ *Rezeki :* ${anu.message.rejeki}\nあ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'pekerjaan': case 'kerja': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `あ *Lahir :* ${anu.message.hari_lahir}\nあ *Pekerjaan :* ${anu.message.pekerjaan}\nあ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalannasib': case 'ramalnasib': case 'nasib': {
                if (!text) throw `Example : 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.ramalan_nasib(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `あ *Analisa :* ${anu.message.analisa}\nあ *Angka Akar :* ${anu.message.angka_akar}\nあ *Sifat :* ${anu.message.sifat}\nあ *Elemen :* ${anu.message.elemen}\nあ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
            }
            break
            case 'potensipenyakit': case 'penyakit': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `あ *Analisa :* ${anu.message.analisa}\nあ *Sektor :* ${anu.message.sektor}\nあ *Elemen :* ${anu.message.elemen}\nあ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artitarot': case 'tarot': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendImage(m.chat, anu.message.image, `あ *Lahir :* ${anu.message.tgl_lahir}\nあ *Simbol Tarot :* ${anu.message.simbol_tarot}\nあ *Arti :* ${anu.message.arti}\nあ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'fengshui': {
                if (!text) throw `Example : ${prefix + command} Dika, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
                let [nama, gender, tahun] = text.split`,`
                let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `あ *Nama :* ${anu.message.nama}\nあ *Lahir :* ${anu.message.tahun_lahir}\nあ *Gender :* ${anu.message.jenis_kelamin}\nあ *Angka Kua :* ${anu.message.angka_kua}\nあ *Kelompok :* ${anu.message.kelompok}\nあ *Karakter :* ${anu.message.karakter}\nあ *Sektor Baik :* ${anu.message.sektor_baik}\nあ *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
            }
            break
            case 'haribaik': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.petung_hari_baik(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `あ *Lahir :* ${anu.message.tgl_lahir}\nあ *Kala Tinantang :* ${anu.message.kala_tinantang}\nあ *Info :* ${anu.message.info}\nあ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harisangar': case 'taliwangke': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `あ *Lahir :* ${anu.message.tgl_lahir}\nあ *Hasil :* ${anu.message.result}\nあ *Info :* ${anu.message.info}\nあ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harinaas': case 'harisial': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `あ *Hari Lahir :* ${anu.message.hari_lahir}\nあ *Tanggal Lahir :* ${anu.message.tgl_lahir}\nあ *Hari Naas :* ${anu.message.hari_naas}\nあ *Info :* ${anu.message.catatan}\nあ *Catatan :* ${anu.message.info}`, m)
            }
            break
            case 'nagahari': case 'harinaga': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `あ *Hari Lahir :* ${anu.message.hari_lahir}\nあ *Tanggal Lahir :* ${anu.message.tgl_lahir}\nあ *Arah Naga Hari :* ${anu.message.arah_naga_hari}\nあ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'arahrejeki': case 'arahrezeki': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `あ *Hari Lahir :* ${anu.message.hari_lahir}\nあ *tanggal Lahir :* ${anu.message.tgl_lahir}\nあ *Arah Rezeki :* ${anu.message.arah_rejeki}\nあ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'peruntungan': {
                if (!text) throw `Example : ${prefix + command} DIka, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
                let [nama, tgl, bln, thn, untuk] = text.split`,`
                let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `あ *Nama :* ${anu.message.nama}\nあ *Lahir :* ${anu.message.tgl_lahir}\nあ *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\nあ *Hasil :* ${anu.message.result}\nあ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'weton': case 'wetonjawa': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.weton_jawa(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `あ *Tanggal :* ${anu.message.tanggal}\nあ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\nあ *Watak Hari :* ${anu.message.watak_hari}\nあ *Naga Hari :* ${anu.message.naga_hari}\nあ *Jam Baik :* ${anu.message.jam_baik}\nあ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
            }
            break
            case 'sifat': case 'karakter': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `あ *Nama :* ${anu.message.nama}\nあ *Lahir :* ${anu.message.tgl_lahir}\nあ *Garis Hidup :* ${anu.message.garis_hidup}`, m)
            }
            break
            case 'keberuntungan': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `あ *Nama :* ${anu.message.nama}\nあ *Lahir :* ${anu.message.tgl_lahir}\nあ *Hasil :* ${anu.message.result}`, m)
            }
            break
            case 'memancing': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `あ *Tanggal :* ${anu.message.tgl_memancing}\nあ *Hasil :* ${anu.message.result}\nあ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'masasubur': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`
                let [tgl, bln, thn, siklus] = text.split`,`
                let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `あ *Hasil :* ${anu.message.result}\nあ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'zodiak': case 'zodiac': {
                if (!text) throw `Example : ${prefix+ command} 7 7 2005`
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
                if (date == 'Invalid Date') throw date
                let d = new Date()
                let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
                let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

                let zodiac = await getZodiac(birth[1], birth[2])
                
                let anu = await primbon.zodiak(zodiac)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `あ *Zodiak :* ${anu.message.zodiak}\nあ *Nomor :* ${anu.message.nomor_keberuntungan}\nあ *Aroma :* ${anu.message.aroma_keberuntungan}\nあ *Planet :* ${anu.message.planet_yang_mengitari}\nあ *Bunga :* ${anu.message.bunga_keberuntungan}\nあ *Warna :* ${anu.message.warna_keberuntungan}\nあ *Batu :* ${anu.message.batu_keberuntungan}\nあ *Elemen :* ${anu.message.elemen_keberuntungan}\nあ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\nあ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'shio': {
                if (!text) throw `Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`
                let anu = await primbon.shio(text)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `あ *Hasil :* ${anu.message}`, m)
            }
            break
	    case 'stalker': case 'stalk': {
		if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('Limit Harian Anda Telah Habis')
                if (!text) return m.reply(`Example : ${prefix +command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
                let [type, id, zone] = args
                if (type.toLowerCase() == 'ff') {
                    if (!id) throw `No Query id, Example ${prefix + command} ff 552992060`
                    let anu = await fetchJson(api('zenz', '/api/nickff', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'ml') {
                    if (!id) throw `No Query id, Example : ${prefix + command} ml 214885010 2253`
                    if (!zone) throw `No Query id, Example : ${prefix + command} ml 214885010 2253`
                    let anu = await fetchJson(api('zenz', '/api/nickml', { apikey: global.APIKeys[global.APIs['zenz']], query: id, query2: zone }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nZone : ${anu.result.zoneId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'aov') {
                    if (!id) throw `No Query id, Example ${prefix + command} aov 293306941441181`
                    let anu = await fetchJson(api('zenz', '/api/nickaov', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'cod') {
                    if (!id) throw `No Query id, Example ${prefix + command} cod 6290150021186841472`
                    let anu = await fetchJson(api('zenz', '/api/nickcod', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'pb') {
                    if (!id) throw `No Query id, Example ${prefix + command} pb riio46`
                    let anu = await fetchJson(api('zenz', '/api/nickpb', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'ig') {
                    if (!id) throw `No Query username, Example : ${prefix + command} ig cak_haho`
                    let { result: anu } = await fetchJson(api('zenz', '/api/stalker/ig', { username: id }, 'apikey'))
                    if (anu.status == false) return m.reply(anu.result.message)
                    hisoka.sendMedia(m.chat, anu.caption.profile_hd, '', `あ Full Name : ${anu.caption.full_name}\nあ User Name : ${anu.caption.user_name}\nあ ID ${anu.caption.user_id}\nあ Followers : ${anu.caption.followers}\nあ Following : ${anu.caption.following}\nあ Bussines : ${anu.caption.bussines}\nあ Profesional : ${anu.caption.profesional}\nあ Verified : ${anu.caption.verified}\nあ Private : ${anu.caption.private}\nあ Bio : ${anu.caption.biography}\nあ Bio Url : ${anu.caption.bio_url}`, m)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'npm') {
                    if (!id) throw `No Query username, Example : ${prefix + command} npm scrape-primbon`
                    let { result: anu } = await fetchJson(api('zenz', '/api/stalker/npm', { query: id }, 'apikey'))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`あ Name : ${anu.name}\nあ Version : ${Object.keys(anu.versions)}\nあ Created : ${tanggal(anu.time.created)}\nあ Modified : ${tanggal(anu.time.modified)}\nあ Maintainers :\n ${anu.maintainers.map(v => `- ${v.name} : ${v.email}`).join('\n')}\n\nあ Description : ${anu.description}\nあ Homepage : ${anu.homepage}\nあ Keywords : ${anu.keywords}\nあ Author : ${anu.author.name}\nあ License : ${anu.license}\nあ Readme : ${anu.readme}`)
		    db.data.users[m.sender].limit -= 1
                } else {
                    m.reply(`Example : ${prefix +command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
                }
            }
            break
	        case 'instagram': case 'ig': case 'igdl': {
                if (!text) throw 'No Query Url!'
                m.reply(mess.wait)
                if (/(?:\/p\/|\/reel\/|\/tv\/)([^\s&]+)/.test(isUrl(text)[0])) {
                    let anu = await fetchJson(api('zenz', '/downloader/instagram2', { url: isUrl(text)[0] }, 'apikey'))
                    for (let media of anu.data) hisoka.sendFileUrl(m.chat, media, `Download Url Instagram From ${isUrl(text)[0]}`, m)
                } else if (/\/stories\/([^\s&]+)/.test(isUrl(text)[0])) {
                    let anu = await fetchJson(api('zenz', '/downloader/instastory', { url: isUrl(text)[0] }, 'apikey'))
                    hisoka.sendFileUrl(m.chat, anu.media[0].url, `Download Url Instagram From ${isUrl(text)[0]}`, m)
                }
            }
            break
            case 'joox': case 'jooxdl': {
                if (!text) throw 'No Query Title'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/joox', { query: text }, 'apikey'))
                let msg = await hisoka.sendImage(m.chat, anu.result.img, `あ Title : ${anu.result.lagu}\nあ Album : ${anu.result.album}\nあ Singer : ${anu.result.penyanyi}\nあ Publish : ${anu.result.publish}\nあ Lirik :\n${anu.result.lirik.result}`, m)
                hisoka.sendMessage(m.chat, { audio: { url: anu.result.mp4aLink }, mimetype: 'audio/mpeg', fileName: anu.result.lagu+'.m4a' }, { quoted: ftroli })
            }
            break
            case 'soundcloud': case 'scdl': {
                if (!text) throw 'No Query Title'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/soundcloud', { url: isUrl(text)[0] }, 'apikey'))
                let msg = await hisoka.sendImage(m.chat, anu.result.thumb, `あ Title : ${anu.result.title}\nあ Url : ${isUrl(text)[0]}`)
                hisoka.sendMessage(m.chat, { audio: { url: anu.result.url }, mimetype: 'audio/mpeg', fileName: anu.result.title+'.m4a' }, { quoted: ftrolis })
            }
            break
	        case 'twitdl': case 'twitter': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twittermp3 ${text}`, buttonText: {displayText: '► Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.HD || anu.result.SD },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: ftroli })
            }
            break
            case 'twittermp3': case 'twitteraudio': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twitter ${text}`, buttonText: {displayText: '► Video'}, type: 1}
                ]
                let buttonMessage = {
		    image: { url: anu.result.thumb },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 4
                }
                let msg = await hisoka.sendMessage(m.chat, buttonMessage, { quoted: ftroli })
                hisoka.sendMessage(m.chat, { audio: { url: anu.result.audio } }, { quoted: ftroli })
            }
            break
	        case 'fbdl': case 'fb': case 'facebook': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/facebook', { url: text }, 'apikey'))
                hisoka.sendMessage(m.chat, { video: { url: anu.result.url }, caption: `あ Title : ${anu.result.title}`}, { quoted: ftroli })
            }
            break
	        case 'pindl': case 'pinterestdl': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/pinterestdl', { url: text }, 'apikey'))
                hisoka.sendMessage(m.chat, { video: { url: anu.result }, caption: `Download From ${text}` }, { quoted: ftroli })
            }
            break
            case 'umma': case 'ummadl': {
	        if (!text) throw `Example : ${prefix + command} https://umma.id/channel/video/post/gus-arafat-sumber-kecewa-84464612933698`
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
あ Title : ${anu.title}
あ Author : ${anu.author.name}
あ Like : ${anu.like}
あ Caption : ${anu.caption}
あ Url : ${anu.media[0]}
Untuk Download Media Silahkan Klik salah satu Button dibawah ini atau masukkan command ytmp3/ytmp4 dengan url diatas
`,
			footer: hisoka.user.name,
			buttons,
			headerType: 4
		    }
		    hisoka.sendMessage(m.chat, buttonMessage, { quoted: ftroli })
		} else if (anu.type == 'image') {
		    anu.media.map(async (url) => {
		        hisoka.sendMessage(m.chat, { image: { url }, caption: `あ Title : ${anu.title}\nあ Author : ${anu.author.name}\nあ Like : ${anu.like}\nあ Caption : ${anu.caption}` }, { quoted: ftroli })
		    })
		}
	    }
	    break
        case 'ringtone': {
		if (!text) throw `Example : ${prefix + command} black rover`
        let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		hisoka.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: ftroli })
	    }
	    break
		case 'iqra': {
		oh = `Example : ${prefix + command} 3\n\nIQRA Yang tersedia : 1,2,3,4,5,6`
		if (!text) throw oh
		yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
		hisoka.sendMessage(m.chat, {document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`}, {quoted:m}).catch ((err) => m.reply(oh))
		}
		break
		case 'juzamma': {
		if (args[0] === 'pdf') {
		m.reply(mess.wait)
		hisoka.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'}, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf'}, {quoted:m})
		} else if (args[0] === 'docx') {
		m.reply(mess.wait)
		hisoka.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'}, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx'}, {quoted:m})
		} else if (args[0] === 'pptx') {
		m.reply(mess.wait)
		hisoka.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'}, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx'}, {quoted:m})
		} else if (args[0] === 'xlsx') {
		m.reply(mess.wait)
		hisoka.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'}, mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileName: 'juz-amma-arab-latin-indonesia.xlsx'}, {quoted:m})
		} else {
		m.reply(`Mau format apa ? Example : ${prefix + command} pdf

Format yang tersedia : pdf, docx, pptx, xlsx`)
		}
		}
		break
		case 'hadits': case 'hadis': case 'hadist': {
		if (!args[0]) throw `Contoh:
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
tirmidzi
1 - 3891
ibnu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`
		if (!args[1]) throw `Hadis yang ke berapa?\n\ncontoh:\n${prefix + command} muslim 1`
		try {
		let res = await fetchJson(`https://fatiharridho.herokuapp.com/api/islamic/hadits?list=${args[0]}`)
		let { number, arab, id } = res.result.find(v => v.number == args[1])
		m.reply(`No. ${number}

${arab}

${id}`)
		} catch (e) {
		m.reply(`Hadis tidak ditemukan !`)
		}
		}
		break
		case 'alquran': {
		if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `*Arab* : ${res.result.data.text.arab}
*English* : ${res.result.data.translation.en}
*Indonesia* : ${res.result.data.translation.id}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		m.reply(txt)
		hisoka.sendMessage(m.chat, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg'}, { quoted : m })
		}
		break
		case 'tafsirsurah': {
		if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `「 *Tafsir Surah*  」

*Pendek* : ${res.result.data.tafsir.id.short}

*Panjang* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		m.reply(txt)
		}
		break
		   case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
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
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err)
                let buff = fs.readFileSync(ran)
                hisoka.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else m.reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
                } catch (e) {
                m.reply(e)
                }
                break
            case 'setcmd': {
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                if (!text) throw `Untuk Command Apa?`
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to change this sticker command'
                global.db.data.sticker[hash] = {
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
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) throw `Tidak ada hash`
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to delete this sticker command'              
                delete global.db.data.sticker[hash]
                m.reply(`Done!`)
            }
            break
            case 'listcmd': {
                let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                hisoka.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case 'lockcmd': {
                if (!isCreator) throw mess.owner
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.data.sticker)) throw 'Hash not found in database'
                global.db.data.sticker[hash].locked = !/^un/i.test(command)
                m.reply('Done!')
            }
            break
            case 'addmsg': {
                if (!m.quoted) throw 'Reply Message Yang Ingin Disave Di Database'
                if (!text) throw `Example : ${prefix + command} nama file`
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
                msgs[text.toLowerCase()] = quoted.fakeObj
m.reply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'
    
Akses dengan ${prefix}getmsg ${text}

Lihat list Pesan Dengan ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
                if (!text) throw `Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan`
                hisoka.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
case 'sticker': case 's': case 'stickergif': case 'sgif': {
if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
m.reply(mess.wait)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await hisoka.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await hisoka.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
}
}
break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
	        let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 LIST DATABASE 」\n\n'
		for (let i of seplit) {
		    teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        m.reply(teks)
	    }
	    break
            case 'delmsg': case 'deletemsg': {
	        let msgs = global.db.data.database
	        if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' tidak terdaftar didalam list pesan`)
		delete msgs[text.toLowerCase()]
		m.reply(`Berhasil menghapus '${text}' dari list pesan`)
            }
	    break
	    case 'anonymous': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
				this.anonymous = this.anonymous ? this.anonymous : {}
				let buttons = [
                    { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                ]
                hisoka.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await hisoka.getName(m.sender)} Welcome To Anonymous Chat\n\nKlik Button Dibawah Ini Untuk Mencari Partner\`\`\``, hisoka.user.name, m)
            }
			break
            case 'keluar': case 'leave': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner \`\`\``)
                    throw false
                }
                m.reply('Ok')
                let other = room.other(m.sender)
                if (other) await hisoka.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[room.id]
                if (command === 'leave') break
            }
            case 'mulai': case 'start': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `\`\`\`Kamu Masih Berada Di dalam Sesi Anonymous, Tekan Button Dibawah Ini Untuk Menghentikan Sesi Anonymous Anda\`\`\``, hisoka.user.name, m)
                    throw false
                }
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, hisoka.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await hisoka.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, hisoka.user.name, m)
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
                    await hisoka.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, hisoka.user.name, m)
                }
                break
            }
            case 'next': case 'lanjut': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner\`\`\``)
                    throw false
                }
                let other = romeo.other(m.sender)
                if (other) await hisoka.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[romeo.id]
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, hisoka.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await hisoka.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, hisoka.user.name, m)
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
                    await hisoka.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, hisoka.user.name, m)
                }
                break
            }
            case 'public': {
                if (!isCreator) throw mess.owner
                hisoka.public = true
publik = true
                m.reply('Sukse Change To Public Usage')
            }
            break
            case 'self': {
                if (!isCreator) throw mess.owner
                hisoka.public = false
publik = false
                m.reply('Sukses Change To Self Usage')
            }
            break
          case 'p':  case 'ping': case 'botstatus': case 'statusbot': {
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
                respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                m.reply(respon)
            }
            break
case 'spamsms':
if (!isCreator) throw mess.owner
toti = args[0]
anu = await fetchJson(`http://api.lolhuman.xyz/api/sms/spam1?apikey=${lolkey}&nomor=${toti}`)
					anu = await fetchJson(`http://api.lolhuman.xyz/api/sms/spam2?apikey=${lolkey}&nomor=${toti}`)
					anu = await fetchJson(`http://api.lolhuman.xyz/api/sms/spam3?apikey=${lolkey}&nomor=${toti}`)
					anu = await fetchJson(`http://api.lolhuman.xyz/api/sms/spam4?apikey=${lolkey}&nomor=${toti}`)
					anu = await fetchJson(`http://api.lolhuman.xyz/api/sms/spam5?apikey=${lolkey}&nomor=${toti}`)
					anu = await fetchJson(`http://api.lolhuman.xyz/api/sms/spam6?apikey=${lolkey}&nomor=${toti}`)
					m.reply(anu.result)
					break            
            case 'speedtest': {
            m.reply('Testing Speed...')
            let cp = require('child_process')
            let { promisify } = require('util')
            let exec = promisify(cp.exec).bind(cp)
          let o
          try {
          o = await exec('python speed.py')
          } catch (e) {
          o = e
         } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) m.reply(stdout)
        if (stderr.trim()) m.reply(stderr)
            }
            }
            break
            case 'owner': case 'creator': {
                hisoka.sendContact(m.chat, global.owner, ftroli)
            }
            break
case 'setreply':{
if (!isCreator) throw mess.owner
if ((args[0]) === 'web'|| (args[0]) === 'situs' ){
if(replyType === "web") return setReply("Udah aktif")
replyType = "web"
setReply(`Berhasil mengubah set reply ke ${q}`)
}  else if ((args[0]) === 'mess'){
if(replyType === "mess") return setReply("Udah aktif")
replyType = "mess"
setReply(`Berhasil mengubah set reply ke ${q}`)
} else if ((args[0]) === 'troli' ){
if(replyType === "troli") return setReply("Udah aktif")
replyType = "troli"
setReply(`Berhasil mengubah set reply ke ${q}`)
}  else if ((args[0]) === 'quoted' ){
if(replyType === 'quoted') return setReply("Udah aktif")
replyType = "quoted"
setReply(`Berhasil mengubah set reply ke ${q}`)
} else if (!q) {
hisoka.sendButMessage(from, `SETTING REPLY\n1. web\n2. troli\n3. mess\n4. vidio\n5. quoted\n`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}setreply web`, buttonText: {displayText: `ᴡᴇʙ`},type: 1},
{buttonId: `${prefix}setreply troli`, buttonText: {displayText: `ϙᴜᴏᴛᴇᴅ`},type: 1},
{buttonId: `${prefix}setreply mess`, buttonText: { displayText: `ᴍᴇss`},type: 1}]);
 } else {
 setReply("Set Reply Tidak Di Temukan")
}
}
break
case 'spotify':
                    if (args.length == 0) return m.reply(`Example: ${prefix + command} https://open.spotify.com/track/0ZEYRVISCaqz5yamWZWzaA`)
                    url = args[0]
                    let get_result = await fetchJson(`https://api.lolhuman.xyz/api/spotify?apikey=${lolkey}&url=${url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Artists : ${get_result.artists}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Popularity : ${get_result.popularity}\n`
                    ini_txt += `Preview : ${get_result.preview_url}\n`
let thumbnail = await getBuffer(get_result.thumbnail)
hisoka.sendMessage(m.chat, { image: thumbnail, caption: ini_txt }, { quoted: ftroli})
break
case 'jooxplay':
if (args.length == 0) return m.reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    ina = await fetchJson(`https://api.lolhuman.xyz/api/jooxplay?apikey=${lolkey}&query=${query}`)
                    ani = ina.result
                    ini_txt = `Title : ${ani.info.song}\n`
                    ini_txt += `Artists : ${ani.info.singer}\n`
                    ini_txt += `Duration : ${ani.info.duration}\n`
                    ini_txt += `Album : ${ani.info.album}\n`
                    ini_txt += `Uploaded : ${ani.info.date}\n`
                    ini_txt += `Lirik :\n ${ani.lirik}\n`
                    fol = await getBuffer(ani.image)
                    hisoka.sendMessage(m.chat, { image: fol, caption: ini_txt }, { quoted: ftroli})                  
                    get_audio = await getBuffer(ani.audio[0].link)
                    hisoka.sendMessage(m.chat, {audio: get_audio, mimetype: 'audio/mpeg', fileName: `${ani.title}.mp3`}, { quoted : m })
                    break
case 'zippysearch':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www51.zippyshare.com/v/5W0TOBz1/file.html`)
                    m.reply(mess.wait)
                    ini_url = args[0]
                    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/zippyshare?apikey=${lolkey}&url=${ini_url}`)
                    ini_url = ini_url.result
                    ini_txt = `File Name : ${ini_url.name_file}\n`
                    ini_txt += `Size : ${ini_url.size}\n`
                    ini_txt += `Date Upload : ${ini_url.date_upload}\n`
                    ini_txt += `Download Url : ${ini_url.download_url}`
                    break
case 'xnxxsearch':
                    if (args.length == 0) return m.reply(`Example: ${prefix + command} Japanese`)
                    query = args.join(" ")
                    csksyu = await fetchJson(`https://api.lolhuman.xyz/api/xnxxsearch?apikey=${lolkey}&query=${query}`)
                    csksyz = csksyu.result
                    ini_txt = ""
                    for (var x of csksyz) {
                        ini_txt = `Title : ${x.title}\n`
                        ini_txt += `Views : ${x.views}\n`
                        ini_txt += `Duration : ${x.duration}\n`
                        ini_txt += `Uploader : ${x.uploader}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n\n`
                    }
anu = `${ini_txt}───────────────\n\n┌ ◪ *DOWNLOAD*
└ ${prefix}xnxxvideo [link]`
hisoka.sendMessage(from, { text: anu }, { quoted: ftroli })
break
              case 'spotifysearch':
                    if (args.length == 0) return m.reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    atakt = await fetchJson(`https://api.lolhuman.xyz/api/spotifysearch?apikey=${lolkey}&query=${query}`)
                    haye = atakt.result
                    ini_txt = ""
                    for (var x of haye) {
                        ini_txt = `Title : ${x.title}\n`
                        ini_txt += `Artists : ${x.artists}\n`
                        ini_txt += `Duration : ${x.duration}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Preview : ${x.preview_url}\n`
                    }
                    m.reply(ini_txt)
                    break
case 'xnxxvideo':
if (args.length == 0) return m.reply(`Example: ${prefix + command} https://www.xnxx.com/video-uy5a73b/mom_is_horny_-_brooklyn`)
                    query = args.join(" ")
                    kohr = await fetchJson(`https://api.lolhuman.xyz/api/xnxx?apikey=${lolkey}&url=${query}`)
                    kohl = kohr.result
                    ini_txt = `Title : ${kohl.title}\n`
                    ini_txt += `Duration : ${kohl.duration}\n`
                    ini_txt += `View : ${kohl.view}\n`
                    ini_txt += `Rating : ${kohl.rating}\n`
                    ini_txt += `Like : ${kohl.like}\n`
                    ini_txt += `Dislike : ${kohl.dislike}\n`
                    ini_txt += `Comment : ${kohl.comment}\n`
                    ini_txt += `Tag : ${kohl.tag.join(", ")}\n`
                    ini_txt += `Description : ${kohl.description}\n`
                    ini_txt += "Link : \n"
                    ini_link = kohl.link
                    for (var x of ini_link) {
                        ini_txt += `${x.type} - ${x.link}\n\n`
                    }
                    fott = await getBuffer(kohl.thumbnail)
                    await hisoka.sendMessage(m.chat, { image: fott, caption: ini_txt }, { quoted: ftroli})                  
                    break
case 'tiktokstalk':{
if (args.length == 0) return m.reply(`Example: ${prefix + command} namatt`)
ttk = args.join(" ")
csksyb = await fetchJson(`http://api.lolhuman.xyz/api/stalktiktok/${ttk}?apikey=${lolkey}`)
csksyl = csksyb.result
txt = `Username : ${csksyl.username}\n`
txt += `Nickname : ${csksyl.nickname}\n`
txt += `Bio : ${csksyl.bio}\n`
txt += `Followers : ${csksyl.followers}\n`
txt += `Following : ${csksyl.followings}\n`
txt += `Likes : ${csksyl.likes}\n`
txt += `Vidio : ${csksyl.video}\n`
buffer = await getBuffer(csksyl.user_picture)
let message = await prepareWAMessageMedia({ image: buffer }, { upload: hisoka.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: txt,
hydratedFooterText: 'Created By Asura Botz',
hydratedButtons: [{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/6285850063401'
}
}]
}
}
}), { userJid: m.chat, quoted: ftroli })
hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'githubstalk':{
if (args.length == 0) return m.reply(`Example: ${prefix + command} namagh`)
ghk = args.join(" ")
csksdke = await fetchJson(`http://api.lolhuman.xyz/api/github/${ghk}?apikey=${lolkey}`)
csksdah = csksdke.result
txt = `Full : ${csksdah.name}\n`
txt += `Followers : ${csksdah.followers}\n`
txt += `Following : ${csksdah.following}\n`
txt += `Publick : ${csksdah.public_repos}\n`
txt += `Public Gits : ${csksdah.public_gists}\n`
txt += `User : ${csksdah.user}\n`
txt += `Compi : ${csksdah.company}\n`
txt += `Lokasi : ${csksdah.location}\n`
txt += `Email : ${csksdah.email}\n`
txt += `Bio : ${csksdah.bio}\n`
buffer = await getBuffer(csksdah.avatar)
let message = await prepareWAMessageMedia({ image: buffer }, { upload: hisoka.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: txt,
hydratedFooterText: 'Created By Asura Botz',
hydratedButtons: [{

urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/6287721317870'
}
}]
}
}
}), { userJid: m.chat, quoted: ftroli })
hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'igstalk':{
if (args.length == 0) return m.reply(`Example: ${prefix + command} namaig`)
igk = args.join(" ")
deshd = await fetchJson(`https://api.lolhuman.xyz/api/stalkig/${igk}?apikey=${lolkey}`)
deshxs = deshd.result
txt = `Link : https://www.instagram.com/${deshxs.username}\n`
txt += `Full : ${deshxs.fullname}\n`
txt += `Post : ${deshxs.posts}\n`
txt += `Followers : ${deshxs.followers}\n`
txt += `Following : ${deshxs.following}\n`
txt += `Bio : ${deshxs.bio}\n`
buffer = await getBuffer(deshxs.photo_profile)
let message = await prepareWAMessageMedia({ image: buffer }, { upload: hisoka.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: txt,
hydratedFooterText: 'Created By Asura Botz',
hydratedButtons: [{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/6285850063401'
}
}]
}
}
}), { userJid: m.chat, quoted: ftroli })
hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
//━━━━━━━━━━━━━━━[ DOWNLOADER ]━━━━━━━━━━━━━━━━━//
case 'tiktok': case 'tiktoknowm': {
m.reply(mess.wait)
let anu = await fetchJson(`https://api.lolhuman.xyz/api/tiktok?apikey=Apikey1&url=${text}`)
let buttons = [
{buttonId: `tiktokaudio ${q}`, buttonText: {displayText: 'Audio 🎶'}, type: 1}
]
let buttonMessage = {
video: { url: anu.result.link },
caption: mess.success,
footer: "XZYBOTZ-MD",
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:`${ucapanWaktu} ${pushname}`,
mediaType: 1,
renderLargerThumbnail: true , 
showAdAttribution: true, 
jpegThumbnail: fs.readFileSync('./media/kitzuna.jpg'),
mediaUrl: "https://github.com/DikaArdnt/Hisoka-Morou", 
thumbnail: fs.readFileSync('./media/kitzuna.jpg'),
sourceUrl: "https://yandex.com/"
}}
}
hisoka.sendMessage(m.chat, buttonMessage, { quoted: ftroli })
}
break
case 'tiktokwm': {
m.reply(mess.wait)
let anu = await fetchJson(`https://api-invibot.herokuapp.com/api/download/tiktok?url=${text}&apikey=APIKEY`)
let buttons = [
{buttonId: `${command}`, buttonText: {displayText: 'NEXT➡️'}, type: 1},
]
let buttonMessage = {
video: { url: anu.result.wm },
caption: mess.success,
footer: 'Press The Button Below',
buttons: buttons,
headerType: 5
}
hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'tiktokmp3': case 'tiktokaudio': {
if (!text) throw 'Masukkan Query Link!'
reply(mess.wait)
let anu = await fetchJson(`http://hadi-api.herokuapp.com/api/tiktok?url=${text}`)
let buttons = [
{buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '► No Watermark'}, type: 1}
]
let buttonMessage = {
text: `Download From ${text}`,
footer: 'Press The Button Below',
buttons: buttons,
headerType: 2
}
let msg = await hisoka.sendMessage(m.chat, buttonMessage, { quoted: ftroli })
hisoka.sendMessage(m.chat, { audio: { url: anu.result.audio_only.original }, mimetype: 'audio/mpeg'}, { quoted: ftroli })
}
break
//━━━━━━━━━━━━━━━[ SEARCH ANIME ]━━━━━━━━━━━━━━━━━//
case 'anibatch': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit           
m.reply(mess.wait)
let res = await fetchJson(`https://api.violetics.pw/api/anime/anibatch?apikey=beta&manga=${text}`)
let capt = `あ Anibatch Search From ${text}\n\n`
for (let i of res.result){
capt += `あ Title : ${i.title}\n`                              
capt += `あ Url : ${i.url}\n`           
capt += `あ Thumbnail : ${i.thumbnail}\n`           
capt += `あ Rate : ${i.rate}\n\n──────────────────────\n`
}
hisoka.sendImage(m.chat, res.result[0].thumbnail, capt, m)
}
break   
case 'anime-planet': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit                        
m.reply(mess.wait)
let res = await fetchJson(`https://api.violetics.pw/api/anime/anime-planet?apikey=beta&manga=${text}`)
let teks = `あ Anime Planet Search From ${text}\n\n`
for (let i of res.result) {
teks += `あ Title : ${i.title}\n`                              
teks += `あ Url : ${i.url}\n`           
teks += `あ Thumbnail : ${i.thumbnail}\n\n──────────────────────\n`
}
m.reply(teks)
}
break  
case 'anisearch': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit           
m.reply(mess.wait)
let res = await fetchJson(`https://api.violetics.pw/api/anime/anisearch?apikey=beta&manga=${text}`)
let capt = `あ AniSearch From ${text}\n\n`
for (let i of res.result){
capt += `あ Title : ${i.title}\n`                              
capt += `あ Url : ${i.url}\n`           
capt += `あ Thumbnail : ${i.thumbnail}\n`     
capt += `あ Genre : ${i.genres}\n\n──────────────────────\n`
}
hisoka.sendImage(m.chat, res.result[0].thumbnail, capt, m)
}
break   
case 'anoboy': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit           
m.reply(mess.wait)
let res = await fetchJson(`https://api.violetics.pw/api/anime/anoboy?apikey=beta&manga=${text}`)
let capt = `あ Anoboy Search From ${text}\n\n`
for (let i of res.result){
capt += `あ Title : ${i.title}\n`                              
capt += `あ Url : ${i.url}\n`           
capt += `あ Thumbnail : ${i.thumbnail}\n`           
capt += `あ Showup : ${i.showup}\n\n──────────────────────\n`
}
hisoka.sendImage(m.chat, res.result[0].thumbnail, capt, m)
}
break     
case 'gogoanime': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit           
m.reply(mess.wait)
let res = await fetchJson(`https://api.violetics.pw/api/anime/gogoanime?apikey=beta&manga=${text}`)
let capt = `あ Gogoanime Search From ${text}\n\n`
for (let i of res.result){
capt += `あ Title : ${i.name}\n`                              
capt += `あ Url : ${i.url}\n`           
capt += `あ Thumbnail : ${i.thumbnail}\n`           
capt += `あ Released : ${i.released}\n\n──────────────────────\n`
}
hisoka.sendImage(m.chat, res.result[0].thumbnail, capt, m)
}
break     
case 'jouganime': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit           
m.reply(mess.wait)
let res = await fetchJson(`https://api.violetics.pw/api/anime/jouganime?apikey=beta&manga=${text}`)
let capt = `あ Jouganime Search From ${text}\n\n`
for (let i of res.result){
capt += `あ Title : ${i.title}\n`                              
capt += `あ Url : ${i.url}\n`           
capt += `あ Thumbnail : ${i.thumbnail}\n`     
capt += `あ Type : ${i.type}\n`                 
capt += `あ Rate : ${i.rate}\n\n──────────────────────\n`
}
hisoka.sendImage(m.chat, res.result[0].thumbnail, capt, m)
}
break   
case 'kiryu': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit           
m.reply(mess.wait)
let res = await fetchJson(`https://api.violetics.pw/api/anime/kiryu?apikey=beta&manga=${text}`)
let capt = `あ Kiryu Search From ${text}\n\n`
for (let i of res.result){
capt += `あ Title : ${i.title}\n`                              
capt += `あ Url : ${i.url}\n`           
capt += `あ Thumbnail : ${i.thumbnail}\n`     
capt += `あ Chapter : ${i.chapter}\n`                 
capt += `あ Rate : ${i.rate}\n\n──────────────────────\n`
}
hisoka.sendImage(m.chat, res.result[0].thumbnail, capt, m)
}
break   
case 'kissmanga': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit                        
m.reply(mess.wait)
let res = await fetchJson(`https://api.violetics.pw/api/anime/kissmanga?apikey=beta&manga=${text}`)
let teks = `あ Kiss Manga Search From ${text}\n\n`
for (let i of res.result) {
teks += `あ Title : ${i.title}\n`                              
teks += `あ Url : ${i.url}\n\n──────────────────────\n`
}
m.reply(teks)
}
break    
case 'klikmanga': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit           
m.reply(mess.wait)
let res = await fetchJson(`https://api.violetics.pw/api/anime/klikmanga?apikey=beta&manga=${text}`)
let capt = `あ Klik Manga Search From ${text}\n\n`
for (let i of res.result){
capt += `あ Title : ${i.title}\n`                              
capt += `あ Url : ${i.url}\n`           
capt += `あ Thumbnail : ${i.thumbnail}\n`     
capt += `あ Author : ${i.author}\n`         
capt += `あ Genre : ${i.genres}\n`                 
capt += `あ Status : ${i.status}\n`      
capt += `あ Date : ${i.date}\n`                                      
capt += `あ Desc : ${i.description}\n\n──────────────────────\n`
}
hisoka.sendImage(m.chat, res.result[0].thumbnail, capt, m)
}
break   
case 'komiku': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit           
m.reply(mess.wait)
let res = await fetchJson(`https://api.violetics.pw/api/anime/komiku?apikey=beta&manga=${text}`)
let capt = `あ Komiku Search From ${text}\n\n`
for (let i of res.result){
capt += `あ Title : ${i.title}\n`                              
capt += `あ Url : ${i.url}\n`           
capt += `あ Thumbnail : ${i.thumbnail}\n`     
capt += `あ Chapter : ${i.chapter}\n`                                          
capt += `あ Desc : ${i.description}\n\n──────────────────────\n`
}
hisoka.sendImage(m.chat, res.result[0].thumbnail, capt, m)
}
break   
case 'mangadex': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit           
m.reply(mess.wait)
let res = await fetchJson(`https://api.violetics.pw/api/anime/mangadex?apikey=beta&manga=${text}`)
let capt = `あ Mangadex Search From ${text}\n\n`
for (let i of res.result){
capt += `あ Title : ${i.title}\n`                              
capt += `あ Url : ${i.url}\n`           
capt += `あ Thumbnail : ${i.thumbnail}\n`     
capt += `あ Rate : ${i.rate}\n`         
capt += `あ Followers : ${i.followers}\n`                 
capt += `あ Views : ${i.views}\n`                                
capt += `あ Desc : ${i.description}\n\n──────────────────────\n`
}
hisoka.sendImage(m.chat, res.result[0].thumbnail, capt, m)
}
break   
case 'manganato': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit           
m.reply(mess.wait)
let res = await fetchJson(`https://api.violetics.pw/api/anime/manganato?apikey=beta&manga=${text}`)
let capt = `あ Manganato Search From ${text}\n\n`
for (let i of res.result){
capt += `あ Title : ${i.title}\n`                              
capt += `あ Url : ${i.url}\n`           
capt += `あ Thumbnail : ${i.thumbnail}\n`     
capt += `あ Rate : ${i.rate}\n`         
capt += `あ Author : ${i.author}\n`                 
capt += `あ Update : ${i.updated}\n`                                
capt += `あ Views : ${i.views}\n\n──────────────────────\n`
}
hisoka.sendImage(m.chat, res.result[0].thumbnail, capt, m)
}
break   
case 'myanimelist': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit           
m.reply(mess.wait)
let res = await fetchJson(`https://api.violetics.pw/api/anime/myanimelist?apikey=beta&manga=${text}`)
let capt = `あ Myanimelist Search From ${text}\n\n`
for (let i of res.result){
capt += `あ Title : ${i.title}\n`                              
capt += `あ Url : ${i.url}\n`           
capt += `あ Thumbnail : ${i.thumbnail}\n`     
capt += `あ Rate : ${i.rate}\n`         
capt += `あ Chapter : ${i.chapter}\n`                              
capt += `あ Desc : ${i.description}\n\n──────────────────────\n`
}
hisoka.sendImage(m.chat, res.result[0].thumbnail, capt, m)
}
break   
case 'nekoanime': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit                        
m.reply(mess.wait)
let res = await fetchJson(`https://api.violetics.pw/api/anime/nekonime?apikey=beta&manga=${text}`)
let teks = `あ Nekoanime Search From ${text}\n\n`
for (let i of res.result) {
teks += `あ Title : ${i.title}\n`                              
teks += `あ Url : ${i.url}\n`           
teks += `あ Chapter : ${i.chapter}\n`           
teks += `あ Release : ${i.released}\n\n──────────────────────\n`
}
m.reply(teks)
}
break  
case 'namigami': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit                        
m.reply(mess.wait)
let res = await fetchJson(`https://api.violetics.pw/api/anime/nimegami?apikey=beta&manga=${text}`)
let teks = `あ Namigami Search From ${text}\n\n`
for (let i of res.result) {
teks += `あ Title : ${i.title}\n`                              
teks += `あ Url : ${i.url}\n`           
teks += `あ Status : ${i.status}\n`           
teks += `あ Rate : ${i.rate}\n`           
teks += `あ Category : ${i.category}\n\n──────────────────────\n`
}
m.reply(teks)
}
break  
case 'oploverz': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit           
m.reply(mess.wait)
let res = await fetchJson(`https://api.violetics.pw/api/anime/oploverz?apikey=beta&manga=${text}`)
let capt = `あ Oploverz Search From ${text}\n\n`
for (let i of res.result){
capt += `あ Title : ${i.title}\n`                              
capt += `あ Url : ${i.url}\n`           
capt += `あ Thumbnail : ${i.thumbnail}\n`     
capt += `あ Status : ${i.status}\n`                                
capt += `あ Type : ${i.type}\n\n──────────────────────\n`
}
hisoka.sendImage(m.chat, res.result[0].thumbnail, capt, m)
}
break   
case 'samehadaku': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit           
m.reply(mess.wait)
let res = await fetchJson(`https://api.violetics.pw/api/anime/samehadaku?apikey=beta&manga=${text}`)
let capt = `あ Samehadaku Search From ${text}\n\n`
for (let i of res.result){
capt += `あ Title : ${i.title}\n`                              
capt += `あ Url : ${i.url}\n`           
capt += `あ Thumbnail : ${i.thumbnail}\n`     
capt += `あ Rate : ${i.rate}\n`       
capt += `あ Type : ${i.type}\n`       
capt += `あ Status : ${i.status}\n`       
capt += `あ Views : ${i.views}\n`       
capt += `あ Genre : ${i.genres}\n`                                
capt += `あ Desc : ${i.description}\n\n──────────────────────\n`
}
hisoka.sendImage(m.chat, res.result[0].thumbnail, capt, m)
}
break   
//━━━━━━━━━━━━━━━[ BATAS ]━━━━━━━━━━━━━━━━━//
case 'otakudesu-ongoing': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit           
m.reply(mess.wait)
let res = await fetchJson(`https://leyscoders-api.herokuapp.com/api/otakudesu-ongoing?apikey=IkyOgiwara`)
let capt = `あ Otakudesu Ongoing\n\n`
for (let i of res.result){
capt += `あ Title : ${i.judul}\n`                              
capt += `あ Thumbnail : ${i.thumb}\n`           
capt += `あ Episode : ${i.eps}\n`     
capt += `あ Days : ${i.hri}\n`                                
capt += `あ Date : ${i.tgl}\n\n──────────────────────\n`
}
hisoka.sendImage(m.chat, res.result[0].thumb, capt, m)
}
break   
case 'jurnalotaku-popular': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit           
m.reply(mess.wait)
let res = await fetchJson(`https://leyscoders-api.herokuapp.com/api/jurnalotaku-popular?apikey=IkyOgiwara`)
let capt = `あ Jurnalotaku Popular Ongoing\n\n`
for (let i of res.result){
capt += `あ Title : ${i.judul}\n`                                
capt += `あ Url : ${i.url}\n`                                
capt += `あ Thumbnail : ${i.img}\n\n──────────────────────\n`
}
hisoka.sendImage(m.chat, res.result[0].img, capt, m)
}
break   
//━━━━━━━━━━━━━━━[ APK ]━━━━━━━━━━━━━━━━━//
case 'apkfap': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit           
m.reply(mess.wait)
let res = await fetchJson(`https://api.violetics.pw/api/apk/apkfap?apikey=beta&apps=${text}`)
let capt = `あ Apkfap Search From ${text}\n\n`
for (let i of res.result){
capt += `あ Title : ${i.title}\n`                              
capt += `あ Url : ${i.url}\n`           
capt += `あ Thumbnail : ${i.thumbnail}\n`                                   
capt += `あ Version : ${i.version}\n\n──────────────────────\n`
}
hisoka.sendImage(m.chat, res.result[0].thumbnail, capt, m)
}
break   
case 'apkgoogle': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit           
m.reply(mess.wait)
let res = await fetchJson(`https://api.violetics.pw/api/apk/apkgoogle?apikey=beta&apps=${text}`)
let capt = `あ Apkgoogle Search From ${text}\n\n`
for (let i of res.result){
capt += `あ Title : ${i.title}\n`                              
capt += `あ Url : ${i.url}\n`           
capt += `あ Thumbnail : ${i.thumbnail}\n`                                   
capt += `あ Type : ${i.type}\n\n──────────────────────\n`
}
hisoka.sendImage(m.chat, res.result[0].thumbnail, capt, m)
}
break   
case 'apkmody': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit                        
m.reply(mess.wait)
let res = await fetchJson(`https://api.violetics.pw/api/apk/apkmody?apikey=beta&apps=${text}`)
let teks = `あ Apkmody Search From ${text}\n\n`
for (let i of res.result) {
teks += `あ Title : ${i.title}\n`                              
teks += `あ Url : ${i.url}\n`           
teks += `あ Version : ${i.version}\n`           
teks += `あ Desc : ${i.description}\n\n──────────────────────\n`
}
m.reply(teks)
}
break  
case 'dlandroid': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit           
m.reply(mess.wait)
let res = await fetchJson(`https://api.violetics.pw/api/apk/dlandroid?apikey=beta&apps=${text}`)
let capt = `あ Dlandroid Search From ${text}\n\n`
for (let i of res.result){
capt += `あ Title : ${i.title}\n`                              
capt += `あ Url : ${i.url}\n`           
capt += `あ Thumbnail : ${i.thumbnail}\n` 
capt += `あ Desc : ${i.description}\n`                   
capt += `あ Tag : ${i.tag}\n`                                             
capt += `あ Date : ${i.date}\n\n──────────────────────\n`
}
hisoka.sendImage(m.chat, res.result[0].thumbnail, capt, m)
}
break   
case 'happymod': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit           
m.reply(mess.wait)
let res = await fetchJson(`https://api.violetics.pw/api/apk/happymod?apikey=beta&apps=${text}`)
let capt = `あ Happymod Search From ${text}\n\n`
for (let i of res.result){
capt += `あ Title : ${i.title}\n`                              
capt += `あ Url : ${i.url}\n`           
capt += `あ Thumbnail : ${i.thumbnail}\n`                                        
capt += `あ Rate : ${i.rate}\n\n──────────────────────\n`
}
hisoka.sendImage(m.chat, res.result[0].thumbnail, capt, m)
}
break   
case 'hostapk': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit           
m.reply(mess.wait)
let res = await fetchJson(`https://api.violetics.pw/api/apk/hostapk?apikey=beta&apps=${text}`)
let capt = `あ Hostapk Search From ${text}\n\n`
for (let i of res.result){
capt += `あ Title : ${i.title}\n`                              
capt += `あ Url : ${i.url}\n`           
capt += `あ Thumbnail : ${i.thumbnail}\n` 
capt += `あ Date : ${i.date}\n`                   
capt += `あ Author : ${i.author}\n`                                             
capt += `あ Desc : ${i.description}\n\n──────────────────────\n`
}
hisoka.sendImage(m.chat, res.result[0].thumbnail, capt, m)
}
break   
case 'idlemod': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit           
m.reply(mess.wait)
let res = await fetchJson(`https://api.violetics.pw/api/apk/idlemod?apikey=beta&apps=${text}`)
let capt = `あ Idlemod Search From ${text}\n\n`
for (let i of res.result){
capt += `あ Title : ${i.title}\n`                              
capt += `あ Develover : ${i.develover}\n`           
capt += `あ Url : ${i.url}\n` 
capt += `あ Thumbnail : ${i.thumbnail}\n`                   
capt += `あ Version : ${i.version}\n`                                             
capt += `あ Update : ${i.isUpdated}\n\n──────────────────────\n`
}
hisoka.sendImage(m.chat, res.result[0].thumbnail, capt, m)
}
break   
case 'luckymodapk': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit           
m.reply(mess.wait)
let res = await fetchJson(`https://api.violetics.pw/api/apk/luckymodapk?apikey=beta&apps=${text}`)
let capt = `あ Luckymodapk Search From ${text}\n\n`
for (let i of res.result){
capt += `あ Title : ${i.title}\n`                              
capt += `あ Url : ${i.url}\n` 
capt += `あ Thumbnail : ${i.thumbnail}\n`                   
capt += `あ Tags : ${i.tags}\n`                                             
capt += `あ Desc : ${i.description}\n\n──────────────────────\n`
}
hisoka.sendImage(m.chat, res.result[0].thumbnail, capt, m)
}
break   
case 'moddroid': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit           
m.reply(mess.wait)
let res = await fetchJson(`https://api.violetics.pw/api/apk/moddroid?apikey=beta&apps=${text}`)
let capt = `あ Moddroid Search From ${text}\n\n`
for (let i of res.result){
capt += `あ Title : ${i.title}\n`                              
capt += `あ Url : ${i.url}\n` 
capt += `あ Thumbnail : ${i.thumbnail}\n`                                                       
capt += `あ Desc : ${i.version}\n\n──────────────────────\n`
}
hisoka.sendImage(m.chat, res.result[0].thumbnail, capt, m)
}
break   
case 'revdl': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit                        
m.reply(mess.wait)
let res = await fetchJson(`https://api.violetics.pw/api/apk/revdl?apikey=beta&apps=${text}`)
let teks = `あ Revdl Search From ${text}\n\n`
for (let i of res.result) {
teks += `あ Title : ${i.title}\n`                                 
teks += `あ Url : ${i.url}\n\n──────────────────────\n`
}
m.reply(teks)
}
break  
case 'toraccino': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit           
m.reply(mess.wait)
let res = await fetchJson(`https://api.violetics.pw/api/apk/toraccino?apikey=beta&apps=${text}`)
let capt = `あ Toraccino Search From ${text}\n\n`
for (let i of res.result){
capt += `あ Title : ${i.title}\n`                              
capt += `あ Url : ${i.url}\n` 
capt += `あ Thumbnail : ${i.thumbnail}\n`
capt += `あ Author : ${i.author}\n` 
capt += `あ Tags : ${i.tags}\n` 
capt += `あ Date : ${i.date}\n`                                                        
capt += `あ Desc : ${i.description}\n\n──────────────────────\n`
}
hisoka.sendImage(m.chat, res.result[0].thumbnail, capt, m)
}
break   
case 'uapkpro': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit           
m.reply(mess.wait)
let res = await fetchJson(`https://api.violetics.pw/api/apk/uapkpro?apikey=beta&apps=${text}`)
let capt = `あ Uapkpro Search From ${text}\n\n`
for (let i of res.result){
capt += `あ Title : ${i.title}\n`                              
capt += `あ Url : ${i.url}\n` 
capt += `あ Thumbnail : ${i.thumbnail}\n`                                                       
capt += `あ Tags : ${i.tags}\n\n──────────────────────\n`
}
hisoka.sendImage(m.chat, res.result[0].thumbnail, capt, m)
}
break   
//━━━━━━━━━━━━━━━[ ASUPAN ]━━━━━━━━━━━━━━━━━//
case 'cecan': case 'chinese': case 'indonesia': case 'japan': case 'korea': case 'malaysia': case 'ptl': case 'thailand': case 'vietnam': {
m.reply(mess.wait)
let buttons = [
{buttonId: `${command}`, buttonText: {displayText: 'NEXT➡️'}, type: 1}
]
let buttonMessage = {
image: { url: `https://api.violetics.pw/api/asupan/${command}?apikey=beta` },
caption:mess.success,
footer: hisoka.user.name,
buttons: buttons,
headerType: 4
}
hisoka.sendMessage(m.chat, buttonMessage, { quoted: floc })
}
break
//━━━━━━━━━━━━━━━[ BATAS ]━━━━━━━━━━━━━━━━━//
case 'ryujin': case 'rose': case 'justina': case 'cogan': case 'cogan2': case 'jeni': case 'jiso': {
m.reply(mess.wait)
let anu = await getBuffer(`https://api-invibot.herokuapp.com/api/wallpaper/${command}?apikey=Invibot`)
hisoka.sendMessage(m.chat, { image: anu, caption: `Nih  Kak` }, { quoted: ftroli})
}
break
//━━━━━━━━━━━━━━━[ BATAS ]━━━━━━━━━━━━━━━━━//
case 'ghea': {
m.reply(mess.wait)
let anu = await fetchJson(`https://ziy.herokuapp.com/api/asupan/ghea?apikey=xZiyy`)
let buttons = [
{buttonId: `${command}`, buttonText: {displayText: 'NEXT➡️'}, type: 1},
]
let buttonMessage = {
video: { url: anu.result.url },
caption:mess.success,
footer: 'Press The Button Below',
buttons: buttons,
headerType: 5
}
hisoka.sendMessage(m.chat, buttonMessage, { quoted: ftroli })
}
break
case 'asupan':
m.reply(mess.wait)
let asupan = JSON.parse(fs.readFileSync('./scrape/asupan/asupan.json'))
let hasil = pickRandom(asupan)
hisoka.sendMessage(m.chat, {video: {url: hasil.url}}, {quoted: ftroli})
break
case 'bocil': {
m.reply(mess.wait)
let anu = await fetchJson(`https://ziy.herokuapp.com/api/asupan/bocil?apikey=xZiyy`)
let buttons = [
{buttonId: `${command}`, buttonText: {displayText: 'NEXT➡️'}, type: 1},
]
let buttonMessage = {
video: { url: anu.result.url },
caption:mess.success,
footer: 'Press The Button Below',
buttons: buttons,
headerType: 5
}
hisoka.sendMessage(m.chat, buttonMessage, { quoted: ftroli })
}
break
case 'ukty': {
m.reply(mess.wait)
let anu = await fetchJson(`https://ziy.herokuapp.com/api/asupan/ukty?apikey=xZiyy`)
let buttons = [
{buttonId: `${command}`, buttonText: {displayText: 'NEXT➡️'}, type: 1},
]
let buttonMessage = {
video: { url: anu.result.url },
caption:mess.success,
footer: 'Press The Button Below',
buttons: buttons,
headerType: 5
}
hisoka.sendMessage(m.chat, buttonMessage, { quoted: ftroli })
}
break
case 'rikagusriani': {
m.reply(mess.wait)
let anu = await fetchJson(`https://ziy.herokuapp.com/api/asupan/rikagusriani?apikey=xZiyy`)
let buttons = [
{buttonId: `${command}`, buttonText: {displayText: 'NEXT➡️'}, type: 1},
]
let buttonMessage = {
video: { url: anu.result.url },
caption:mess.success,
footer: 'Press The Button Below',
buttons: buttons,
headerType: 5
}
hisoka.sendMessage(m.chat, buttonMessage, { quoted: ftroli })
}
break
case 'asupan2k': {
m.reply(mess.wait)
let buttons = [
{buttonId: `${command}`, buttonText: {displayText: 'NEXT➡️'}, type: 1}
]
let buttonMessage = {
video: { url: 'https://ziy.herokuapp.com/api/asupan2k?apikey=xZiyy' },
caption: `Random ${command}`,
footer: hisoka.user.name,
buttons: buttons,
headerType: 4
  }
hisoka.sendMessage(m.chat, buttonMessage, { quoted: ftroli })
}
break
case 'bokep':{
m.reply(mess.wait)
dwhe = await getBuffer(`https://raku-web.herokuapp.com/api/bokep?apikey=RakuKeyTod`)
hisoka.sendMessage(m.chat, { video: dwhe, mimetype: 'video/mp4', fileName: `${command}.mp4`, caption: `Nih Bokep Nya` }, { quoted: ftroli })
}
break
case 'storyanime':{
m.reply(mess.wait)
hasiltod = await fetchJson(`https://api.lolhuman.xyz/api/storynime?apikey=${lolkey}`)
hisoka.sendMessage(m.chat, { video: { url: hasiltod.result }, mimetype: 'video/mp4', fileName: `storyanime.mp4`, caption: `Nih Story Animenya` }, { quoted: ftroli })
}
break
//━━━━━━━━━━━━━━━[ BATAS ]━━━━━━━━━━━━━━━━━//
case 'asupanloli': {
m.reply(mess.wait)
let buttons = [
{buttonId: `${command}`, buttonText: {displayText: 'NEXT➡️'}, type: 1}
]
let buttonMessage = {
video: { url: 'https://recoders-area.caliph.repl.co/api/lolivid' },
caption: `Random ${command}`,
footer: hisoka.user.name,
buttons: buttons,
headerType: 4
  }
hisoka.sendMessage(m.chat, buttonMessage, { quoted: ftroli })
}
break
//━━━━━━━━━━━━━━━[ RELIGION ]━━━━━━━━━━━━━━━━━//
case 'alkitab-search': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit                        
m.reply(mess.wait)
let res = await fetchJson(`https://api.violetics.pw/api/religion/alkitab-search?apikey=beta&text=${text}`)
let teks = `あ Alkitab Search From ${text} \n\n`
for (let i of res.result) {
teks += `あ Kitab : ${i.kitab}\n`       
teks += `あ Url : ${i.url}\n`                                 
teks += `あ Desc : ${i.description}\n\n──────────────────────\n`
}
m.reply(teks)
}
break  
case 'surahpendek': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit                        
m.reply(mess.wait)
let res = await fetchJson(`https://api.violetics.pw/api/religion/alquran?apikey=beta&surah=${text}`)
let teks = `あ Al Quran Search From ${text} \n\n`
for (let i of res.result) {
teks += `あ Kitab : ${i.urutan}\n`       
teks += `あ Ayat : ${i.ayat}\n`           
teks += `あ Latin : ${i.latin}\n`                                 
teks += `あ Arti : ${i.arti}\n\n──────────────────────\n`
}
m.reply(teks)
}
break  
case 'asmaulhusna': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit           
m.reply(mess.wait)
let res = await fetchJson(`https://api.violetics.pw/api/religion/asmaulhusna?apikey=beta`)
let capt = `あ Asmaul Husna\n\n`
for (let i of res.result){
capt += `あ Number: ${i.index}\n`           
capt += `あ Latin: ${i.latin}\n`      
capt += `あ Arab: ${i.arabic}\n`      
capt += `あ Indonesia: ${i.translation_id}\n`      
 capt += `あ English: ${i.translation_en}\n\n──────────────────────\n`
}
m.reply(capt)
}
break
case 'doaharian': 
m.reply(mess.wait)
var data = await fetchJson(`https://api.violetics.pw/api/religion/doa-harian?apikey=beta`)
var captnya = `Doa Harian\n
あName : ${data.result.surah}
あUrl : ${data.result.arab}
あRating : ${data.result.latin}`
m.reply(captnya)
break
//━━━━━━━━━━━━━━━[ BATAS ]━━━━━━━━━━━━━━━━━//
case 'kisahnabi': {
m.reply(mess.wait)
var data = await fetchJson(`https://leyscoders-api.herokuapp.com/api/nabi?q=${text}&apikey=IkyOgiwara`)
var captnya = `
あTitle : ${data.result.nabi}
あThumbnail : ${data.result.lahir}
あDesc : ${data.result.umur}
あStory : ${data.result.tempat}
あTitle : ${data.result.kisah}\n`
hisoka.sendMessage(m.chat, {caption: captnya, image: { url: data.result.image }}, {quoted: ftroli })
}
break
//━━━━━━━━━━━━━━━[ BATAS ]━━━━━━━━━━━━━━━━━//
case 'jadwalsholat':
if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)
axios
.get(`https://api.lolhuman.xyz/api/sholat/${text}?apikey=${lolkey}`)
.then(({ data }) => {
var text = `Wilayah : ${data.result.wilayah}\n`
text += `Tanggal : ${data.result.tanggal}\n`
text += `Sahur : ${data.result.sahur}\n`
text += `Imsak : ${data.result.imsak}\n`
text += `Subuh : ${data.result.subuh}\n`
text += `Terbit : ${data.result.terbit}\n`
text += `Dhuha : ${data.result.dhuha}\n`
text += `Dzuhur : ${data.result.dzuhur}\n`
text += `Ashar : ${data.result.ashar}\n`
text += `Maghrib : ${data.result.imsak}\n`
text += `Isya : ${data.result.isya}`
m.reply(text)
})
.catch(console.error)
break
//━━━━━━━━━━━━━━━[ BATAS ]━━━━━━━━━━━━━━━━━//
case 'iqra': {
oh = `Example : ${prefix + command} 3\n\nIQRA Yang tersedia : 1,2,3,4,5,6`
if (!text) throw oh
yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
hisoka.sendMessage(m.chat, {document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`}, {quoted:m}).catch ((err) => m.reply(oh))
}
break
case 'juzamma': {
if (args[0] === 'pdf') {
m.reply(mess.wait)
hisoka.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'}, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf'}, {quoted:m})
} else if (args[0] === 'docx') {
m.reply(mess.wait)
hisoka.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'}, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx'}, {quoted:m})
} else if (args[0] === 'pptx') {
m.reply(mess.wait)
hisoka.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'}, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx'}, {quoted:m})
} else if (args[0] === 'xlsx') {
m.reply(mess.wait)
hisoka.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'}, mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileName: 'juz-amma-arab-latin-indonesia.xlsx'}, {quoted:m})
} else {
m.reply(`Mau format apa ? Example : ${prefix + command} pdf

Format yang tersedia : pdf, docx, pptx, xlsx`)
}
}
break
case 'hadis': case 'hadist': {
if (!args[0]) throw `Contoh:
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
1 - 5362`
if (!args[1]) throw `Hadis yang ke berapa?\n\ncontoh:\n${prefix + command} muslim 1`
try {
let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
let { number, arab, id } = res.find(v => v.number == args[1])
m.reply(`No. ${number}

${arab}

${id}`)
} catch (e) {
m.reply(`Hadis tidak ditemukan !`)
}
}
break
case 'alquran': {
if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
let txt = `*Arab* : ${res.result.data.text.arab}
*English* : ${res.result.data.translation.en}
*Indonesia* : ${res.result.data.translation.id}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
m.reply(txt)
hisoka.sendMessage(m.chat, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg'}, { quoted : m })
}
break
case 'tafsirsurah': {
if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
let txt = `「 *Tafsir Surah*  」

*Pendek* : ${res.result.data.tafsir.id.short}

*Panjang* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
m.reply(txt)
}
break
//━━━━━━━━━━━━━━━[ SEARCH ]━━━━━━━━━━━━━━━━━//
case 'amino': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit           
m.reply(mess.wait)
let res = await fetchJson(`https://api.violetics.pw/api/search/amino?apikey=beta&query=${text}`)
let capt = `あ Amino Search From ${text}\n\n`
for (let i of res.result){
capt += `あ Title : ${i.name}\n`                              
capt += `あ Url : ${i.url}\n`           
capt += `あ Thumbnail : ${i.thumbnail}\n`       
capt += `あ Member : ${i.member}\n`              
capt += `あ Desc : ${i.description}\n\n──────────────────────\n`
}
hisoka.sendImage(m.chat, res.result[0].thumbnail, capt, m)
}
break     
case 'googleit': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit                        
m.reply(mess.wait)
let res = await fetchJson(`https://api.violetics.pw/api/search/googleit?apikey=beta&query=${text}`)
let teks = `あ Googleit Search From ${text}\n\n`
for (let i of res.result) {
teks += `あ Title : ${i.title}\n`    
teks += `あ Link : ${i.link}\n`                                 
teks += `あ Snippet : ${i.snippet}\n\n──────────────────────\n`
}
m.reply(teks)
}
break  
case 'group-whatsapp': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit                        
m.reply(mess.wait)
let res = await fetchJson(`https://api.violetics.pw/api/search/group-whatsapp?apikey=beta&query=${text}`)
let teks = `あ Group-Whatsapp Search From ${text}\n\n`
for (let i of res.result) {
teks += `あ Title : ${i.title}\n`                             
teks += `あ Url : ${i.url}\n\n──────────────────────\n`
}
m.reply(teks)
}
break  
case 'sfile-search': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit           
m.reply(mess.wait)
let res = await fetchJson(`https://api.violetics.pw/api/search/sfile-search?apikey=beta&query=${text}`)
let capt = `あ Sfile Search From ${text}\n\n`
for (let i of res.result){
capt += `あ Title : ${i.title}\n`                              
capt += `あ Url : ${i.link}\n` 
capt += `あ Thumbnail : ${i.thumb}\n`                           
capt += `あ Size : ${i.size}\n\n──────────────────────\n`
}
m.reply(capt)
}
break   
//━━━━━━━━━━━━━━━[ BATAS ]━━━━━━━━━━━━━━━━━//
case 'arti-kata': {
let anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/arti-kata?q=${text}&apikey=IkyOgiwara`)
let buttons = [
{buttonId: `${command}`, buttonText: {displayText: 'Next'}, type: 1}
]
let buttonMessage = {
text: anu.result,
footer: 'Press The Button Below',
buttons: buttons,
headerType: 2
}
hisoka.sendMessage(m.chat, buttonMessage, { quoted: ftroli })
}
break
case 'kata-bijak': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit           
m.reply(mess.wait)
let res = await fetchJson(`https://leyscoders-api.herokuapp.com/api/kata-bijak?q=${text}&apikey=IkyOgiwara`)
let capt = `あ Kata Bijak Search From ${text}\n\n`
for (let i of res.result){
capt += `あ Author : ${i.author}\n`                              
capt += `あ Kata Bijak : ${i.katabijak}\n` 
capt += `あ VoteCount : ${i.voteCount}\n\n──────────────────────\n`
}
m.reply(capt)
}
break   
case 'gsm-arena': {
m.reply(mess.wait)
var data = await fetchJson(`https://leyscoders-api.herokuapp.com/api/gsm-arena?q=${text}&apikey=IkyOgiwara`)
var captnya = `
あSpek : ${data.result.spek}
あDisplay Type : ${data.result.display_type}
あDisplay Size : ${data.result.display_size}
あDisplay Resolusi : ${data.result.display_resolusi}
あChipset : ${data.result.chipset}
あOs : ${data.result.os}
あCpu : ${data.result.cpu}
あInternal : ${data.result.internal}
あCamera : ${data.result.camera}
あBatterai : ${data.result.Batterai}\n`
hisoka.sendMessage(m.chat, {caption: captnya, image: { url: data.result.thumb }}, {quoted: ftroli })
}
break
case 'amazon-search': {
m.reply(mess.wait)
var data = await fetchJson(`https://leyscoders-api.herokuapp.com/api/amazon-search?q=${text}&apikey=IkyOgiwara`)
var captnya = `
あSpek : ${data.result.item}
あDisplay Type : ${data.result.review}
あDisplay Size : ${data.result.rating}
あDisplay Resolusi : ${data.result.price}
あChipset : ${data.result.score}
あOs : ${data.result.diskon}
あCpu : ${data.result.url}
あInternal : ${data.result.sponsor}
あCamera : ${data.result.best_seller}
あBatterai : ${data.result.amazon_prime}\n`
hisoka.sendMessage(m.chat, {caption: captnya, image: { url: data.result.thumb }}, {quoted: ftroli })
}
break
case 'thelazy': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit           
m.reply(mess.wait)
let res = await fetchJson(`https://leyscoders-api.herokuapp.com/api/thelazy?q=${text}&apikey=IkyOgiwara`)
let capt = `あ Thelazy Search From ${text}\n\n`
for (let i of res.result){
capt += `あ Title : ${i.title}\n`                              
capt += `あ Url : ${i.url}\n`           
capt += `あ Thumbnail : ${i.img}\n`   
capt += `あ Category : ${i.category}\n`           
capt += `あ Author : ${i.author}\n`               
capt += `あ Post Date : ${i.post_date}\n`              
capt += `あ Comments : ${i.comments}\n\n──────────────────────\n`
}
hisoka.sendImage(m.chat, res.result[0].img, capt, m)
}
break     
case 'rexdl-search': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit           
m.reply(mess.wait)
let res = await fetchJson(`https://leyscoders-api.herokuapp.com/api/rexdl-search?q=${text}&apikey=IkyOgiwara`)
let capt = `あ Rexdl Search From ${text}\n\n`
for (let i of res.result){
capt += `あ Title : ${i.title}\n`                              
capt += `あ Url : ${i.url}\n`           
capt += `あ Thumbnail : ${i.img}\n`       
capt += `あ Update : ${i.update_on}\n`              
capt += `あ Desc : ${i.desc}\n\n──────────────────────\n`
}
hisoka.sendImage(m.chat, res.result[0].img, capt, m)
}
break     
//━━━━━━━━━━━━━━━[ BATAS ]━━━━━━━━━━━━━━━━━//
case 'resepmakanan': {
if (!text) throw `Apa Yang Mau Dicari Kak\nExample: ${command} ayam goreng`
m.reply(mess.wait)
let anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/resepmakanan?query=${text}&apikey=FuckBitch`)
let buttons = [
{buttonId: `${command}`, buttonText: {displayText: '⬡ BACK'}, type: 1}
]
let buttonMessage = {
image: { url: anu.results.thumb },
caption: `
あ Title : ${anu.results.title}
あ Servings : ${anu.results.servings}
あ Duration : ${anu.results.times}
あ Dificulty : ${anu.results.dificulty}
あ Desc : ${anu.results.desc}`,
footer: hisoka.user.name,
buttons: buttons,
headerType: 4
}
hisoka.sendMessage(m.chat, buttonMessage, { quoted: ftroli })
}
break
//━━━━━━━━━━━━━━━[ MOVE AND STORY ]━━━━━━━━━━━━━━━━━//
case 'drakorongoing': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit           
m.reply(mess.wait)
let res = await fetchJson(`https://leyscoders-api.herokuapp.com/api/drakor-ongoing?apikey=IkyOgiwara`)
let capt = `あ Drakor On Going\n\n`
for (let i of res.result){
capt += `あ Title : ${i.title}\n`                              
capt += `あ Url : ${i.url}\n` 
capt += `あ Genre : ${i.genre}\n\n──────────────────────\n`
}
hisoka.sendImage(m.chat, res.result[0].img, capt, m)
}
break   
case 'jadwalbioskop': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit           
m.reply(mess.wait)
let res = await fetchJson(`https://leyscoders-api.herokuapp.com/api/jadwal-bioskop?apikey=IkyOgiwara`)
let capt = `あ Jadwalbioskop Search From ${text}\n\n`
for (let i of res.result){
capt += `あ Title : ${i.title}\n`                              
capt += `あ Url : ${i.url}\n` 
capt += `あ Thumbnail : ${i.img}\n\n──────────────────────\n`
}
hisoka.sendImage(m.chat, res.result[0].img, capt, m)
}
break   
case 'jadwalotakudesu': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit           
m.reply(mess.wait)
let res = await fetchJson(`https://leyscoders-api.herokuapp.com/api/jadwal-otakudesu?apikey=IkyOgiwara`)
let capt = `あ Jadwal Otakudesu Search From ${text}\n\n`
for (let i of res.animeList){
capt += `あ Day : ${res.day}\n`                     
capt += `あ Title : ${i.anime_name}\n`                              
capt += `あ Id : ${i.id}\n` 
capt += `あ Url : ${i.link}\n\n──────────────────────\n`
}
m.reply(capt)
}
break   
case 'cerpen': {
m.reply(mess.wait)
var data = await fetchJson(`https://leyscoders-api.herokuapp.com/api/cerpen?apikey=IkyOgiwara`)
var captnya = `
あTitle : ${data.result.title}
あPengarang : ${data.result.pengarang}
あKategori : ${data.result.kategori}
あStory : ${data.result.story}\n`
m.reply(captnya)
}
break
case 'cerita-horor': {
m.reply(mess.wait)
var data = await fetchJson(`https://leyscoders-api.herokuapp.com/api/cerita-horor?apikey=IkyOgiwara`)
var captnya = `
あTitle : ${data.result.title}
あPengarang : ${data.result.desc}
あStory : ${data.result.story}\n`
m.reply(captnya)
}
break
case 'ceritasex': {
m.reply(mess.wait)
var data = await fetchJson(`https://leyscoders-api.herokuapp.com/api/cersex?apikey=IkyOgiwara`)
var captnya = `Cerita Sex\n\n
あKisah : ${data.result}\n`
hisoka.sendMessage(m.chat, {caption: captnya, image: { url: data.gambar }}, {quoted: ftroli })
}
break
//━━━━━━━━━━━━━━━[ BATAS ]━━━━━━━━━━━━━━━━━//
case 'layarkaca': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit           
m.reply(mess.wait)
let res = await fetchJson(`https://api.violetics.pw/api/search/layarkaca?apikey=beta&query=${text}`)
let capt = `あ Layarkaca Search From ${text}\n\n`
for (let i of res.result){
capt += `あ Title : ${i.title}\n`                              
capt += `あ Url : ${i.url}\n` 
capt += `あ Thumbnail : ${i.thumbnail}\n`
capt += `あ Author : ${i.author}\n`                               
capt += `あ Stars : ${i.stars}\n\n──────────────────────\n`
}
hisoka.sendImage(m.chat, res.result[0].thumbnail, capt, m)
}
break   
//━━━━━━━━━━━━━━━[ EPHOTO ]━━━━━━━━━━━━━━━━━//
case '1917': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/ephoto360/1917?apikey=beta&text=${text}` }, caption: mess.success }, { quoted: ftroli})
}
break
case '3d-crack-text-effect-online': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/ephoto360/3d-crack-text-effect-online?apikey=beta&text=${text}` }, caption: mess.success }, { quoted: ftroli})
}
break
case '3d-underwater': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/ephoto360/3d-underwater?apikey=beta&text=${text}` }, caption: mess.success }, { quoted: ftroli})
}
break
case '3d-wood': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/ephoto360/3d-wood?apikey=beta&text=${text}` }, caption: mess.success }, { quoted: ftroli})
}
break
case '3d-wood2': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!args[0]) throw mess.textt
if (!args[1]) throw mess.textt2
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/ephoto360/3d-wood2?apikey=beta&text=${args[0]}&text2=${args[1]}` }, caption: mess.success }, { quoted: ftroli})
}
break
case '3damerican-flag': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/ephoto360/3damerican-flag?apikey=beta&text=${text}` }, caption: mess.success }, { quoted: ftroli})
}
break
case '3dgalaxy-metal': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!args[0]) throw mess.textt
if (!args[1]) throw mess.textt2
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/ephoto360/3dgalaxy-metal?apikey=beta&text=${args[0]}&text2=${args[1]}` }, caption: mess.success }, { quoted: ftroli})
}
break
case '3dglue-realistic': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/ephoto360/3dglue-realistic?apikey=beta&text=${text}` }, caption: mess.success }, { quoted: ftroli})
}
break   
case '3dgold': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!args[0]) throw mess.textt
if (!args[1]) throw mess.textt2
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/ephoto360/3dgold?apikey=beta&text=${args[0]}&text2=${args[1]}` }, caption: mess.success }, { quoted: ftroli})
}
break
case '3dgradient': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/ephoto360/3dgradient?apikey=beta&text=${text}` }, caption: mess.success }, { quoted: ftroli})
}
break   
case '3dgradient2': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/ephoto360/3dgradient2?apikey=beta&text=${text}` }, caption: mess.success }, { quoted: ftroli})
}
break   
case '3dmetal-effect': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/ephoto360/3dmetal-effect?apikey=beta&text=${text}` }, caption: mess.success }, { quoted: ftroli})
}
break   
case '3dmetal-text': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/ephoto360/3dmetal-text-?apikey=beta&text=${text}` }, caption: mess.success }, { quoted: ftroli})
}
break   
case '3dmulticolor-papercut': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/ephoto360/3dmulticolor-papercut?apikey=beta&text=${text}` }, caption: mess.success }, { quoted: ftroli})
}
break   
case '3dpig-gif': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/ephoto360/3dpig-gif?apikey=beta&text=${text}` }, caption: mess.success }, { quoted: ftroli})
}
break   
case '3drose-gold': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!args[0]) throw mess.textt
if (!args[1]) throw mess.textt2
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/ephoto360/3drose-gold?apikey=beta&text=${args[0]}&text2=${args[1]}` }, caption: mess.success }, { quoted: ftroli})
}
break
case '3druby-stone': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/ephoto360/3druby-stone?apikey=beta&text=${text}` }, caption: mess.success }, { quoted: ftroli})
}
break   
case '3dsand-engraved': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/ephoto360/3dsand-engraved?apikey=beta&text=${text}` }, caption: mess.success }, { quoted: ftroli})
}
break   
case '3dshiny-metallic': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/ephoto360/3dshiny-metallic?apikey=beta&text=${text}` }, caption: mess.success }, { quoted: ftroli})
}
break   
case '3dsilver': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!args[0]) throw mess.textt
if (!args[1]) throw mess.textt2
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/ephoto360/3dsilver?apikey=beta&text=${args[0]}&text2=${args[1]}` }, caption: mess.success }, { quoted: ftroli})
}
break
case '3dspace': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!args[0]) throw mess.textt
if (!args[1]) throw mess.textt2
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/ephoto360/3dspace?apikey=beta&text=${args[0]}&text2=${args[1]}` }, caption: mess.success }, { quoted: ftroli})
}
break
case '3dsparkle-christmas': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/ephoto360/3dsparkle-christmas?apikey=beta&text=${text}` }, caption: mess.success }, { quoted: ftroli})
}
break   
case '3dsub-zombie': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/ephoto360/3dsub-zombie?apikey=beta&text=${text}` }, caption: mess.success }, { quoted: ftroli})
}
break   
case '3dtext-effect': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/ephoto360/3dtext-effect?apikey=beta&text=${text}` }, caption: mess.success }, { quoted: ftroli})
}
break   
case '3dtext-effect2': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/ephoto360/3dtext-effect2?apikey=beta&text=${text}` }, caption: mess.success }, { quoted: ftroli})
}
break   
case '3dtext-effect3': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/ephoto360/3dtext-effect3?apikey=beta&text=${text}` }, caption: mess.success }, { quoted: ftroli})
}
break   
case '3dtext-pig': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/ephoto360/3dtext-pig?apikey=beta&text=${text}` }, caption: mess.success }, { quoted: ftroli})
}
break   
case '3dvalentine-cards': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/ephoto360/3dvalentine-cards?apikey=beta&text=${text}` }, caption: mess.success }, { quoted: ftroli})
}
break   
case '3dvintage-light-bulb': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!args[0]) throw mess.textt
if (!args[1]) throw mess.textt2
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/ephoto360/3dvintage-light-bulb?apikey=beta&text=${args[0]}&text2=${args[1]}` }, caption: mess.success }, { quoted: ftroli})
}
break
case '3dxmas-cards': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/ephoto360/3dxmas-cards?apikey=beta&text=${text}` }, caption: mess.success }, { quoted: ftroli})
}
break   
case '3dxmas-cards2': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/ephoto360/3dxmas-cards2?apikey=beta&text=${text}` }, caption: mess.success }, { quoted: ftroli})
}
break   
case '83day-card': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/ephoto360/83day-card?apikey=beta&text=${text}` }, caption: mess.success }, { quoted: ftroli})
}
break   
case '83day-card2': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/ephoto360/83day-card2?apikey=beta&text=${text}` }, caption: mess.success }, { quoted: ftroli})
}
break   
case '83day-card3': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/ephoto360/83day-card3?apikey=beta&text=${text}` }, caption: mess.success }, { quoted: ftroli})
}
break   
case '83day-card4': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/ephoto360/83day-card4?apikey=beta&text=${text}` }, caption: mess.success }, { quoted: ftroli})
}
break   
case 'advanced-glow': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/ephoto360/advanced-glow?apikey=beta&text=${text}` }, caption: mess.success }, { quoted: ftroli})
}
break   
case 'ahri-league-of-legends': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/ephoto360/ahri-league-of-legends?apikey=beta&text=${text}` }, caption: mess.success }, { quoted: ftroli})
}
break   
case 'alice-league-of-kings': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/ephoto360/alice-league-of-kings?apikey=beta&text=${text}` }, caption: mess.success }, { quoted: ftroli})
}
break   
case 'amily-arena-of-valor': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/ephoto360/amily-arena-of-valor?apikey=beta&text=${text}` }, caption: mess.success }, { quoted: ftroli})
}
break   
case 'angels-wings': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/ephoto360/angels-wings?apikey=beta&text=${text}` }, caption: mess.success }, { quoted: ftroli})
}
break   
case 'anonymous-neon': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/ephoto360/anonymous-neon?apikey=beta&text=${text}` }, caption: mess.success }, { quoted: ftroli})
}
break   
case 'art-shader': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/ephoto360/art-shader?apikey=beta&text=${text}` }, caption: mess.success }, { quoted: ftroli})
}
break   
case 'avengers': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!args[0]) throw mess.textt
if (!args[1]) throw mess.textt2
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/ephoto360/avengers?apikey=beta&text=${args[0]}&text2=${args[1]}` }, caption: mess.success }, { quoted: ftroli})
}
break
case 'azzenka-league-of-kings': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/ephoto360/azzenka-league-of-kings?apikey=beta&text=${text}` }, caption: mess.success }, { quoted: ftroli})
}
break   
case 'balloon-noel': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/ephoto360/balloon-noel?apikey=beta&text=${text}` }, caption: mess.success }, { quoted: ftroli})
}
break   
case 'balloon-text': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!args[0]) throw mess.textt
if (!args[1]) throw mess.textt2
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/ephoto360/balloon-text?apikey=beta&text=${args[0]}&text2=${args[1]}` }, caption: mess.success }, { quoted: ftroli})
}
break
case 'balloons-cards': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!args[0]) throw mess.textt
if (!args[1]) throw mess.textt2
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/ephoto360/balloons-cards?apikey=beta&text=${args[0]}&text2=${args[1]}` }, caption: mess.success }, { quoted: ftroli})
}
break
case 'balloons-love': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!args[0]) throw mess.textt
if (!args[1]) throw mess.textt2
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/ephoto360/balloons-love?apikey=beta&text=${args[0]}&text2=${args[1]}` }, caption: mess.success }, { quoted: ftroli})
}
break
case 'art-shader': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/ephoto360/bats-halloween?apikey=beta&text=${text}` }, caption: mess.success }, { quoted: ftroli})
}
break   
case 'bear': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!args[0]) throw mess.textt
if (!args[1]) throw mess.textt2
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/ephoto360/bear?apikey=beta&text=${args[0]}&text2=${args[1]}` }, caption: mess.success }, { quoted: ftroli})
}
break
case 'bear2': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/ephoto360/bear2?apikey=beta&text=${text}` }, caption: mess.success }, { quoted: ftroli})
}
break   
case 'bee': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/ephoto360/bee?apikey=beta&text=${text}` }, caption: mess.success }, { quoted: ftroli})
}
break   
case 'birthday-cake1': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/ephoto360/birthday-cake?apikey=beta&text=${text}` }, caption: mess.success }, { quoted: ftroli})
}
break   
case 'birthday-cake2': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/ephoto360/birthday-cake10?apikey=beta&text=${text}` }, caption: mess.success }, { quoted: ftroli})
}
break   
case 'birthday-cake3': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/ephoto360/birthday-cake2?apikey=beta&text=${text}` }, caption: mess.success }, { quoted: ftroli})
}
break   
case 'birthday-cake4': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/ephoto360/birthday-cake3?apikey=beta&text=${text}` }, caption: mess.success }, { quoted: m})
}
break   
case 'birthday-cake5': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/ephoto360/birthday-cake4?apikey=beta&text=${text}` }, caption: mess.success }, { quoted: m})
}
break   
case 'birthday-cake6': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/ephoto360/birthday-cake5?apikey=beta&text=${text}` }, caption: mess.success }, { quoted: ftroli})
}
break   
case 'birthday-cake7': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/ephoto360/birthday-cake6?apikey=beta&text=${text}` }, caption: mess.success }, { quoted: ftroli})
}
break   
case 'birthday-cake8': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/ephoto360/birthday-cake7?apikey=beta&text=${text}` }, caption: mess.success }, { quoted: ftroli})
}
break   
case 'birthday-cake9': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/ephoto360/birthday-cake8?apikey=beta&text=${text}` }, caption: mess.success }, { quoted: ftroli})
}
break   
case 'birthday-cake10': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/ephoto360/birthday-cake9?apikey=beta&text=${text}` }, caption: mess.success }, { quoted: ftroli})
}
break   
case 'birthday-cards': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/ephoto360/birthday-cards?apikey=beta&text=${text}` }, caption: mess.success }, { quoted: ftroli})
}
break   
case 'birthdayfoil-balloon': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/ephoto360/birthdayfoil-balloon?apikey=beta&text=${text}` }, caption: mess.success }, { quoted: ftroli})
}
break   
case 'blackpink': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/ephoto360/blackpink?apikey=beta&text=${text}` }, caption: mess.success }, { quoted: ftroli})
}
break   
case 'blackpink-neon': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/ephoto360/blackpink-neon?apikey=beta&text=${text}` }, caption: mess.success }, { quoted: ftroli})
}
break  
 case 'blackskin-snake': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/ephoto360/blackskin-snake?apikey=beta&text=${text}` }, caption: mess.success }, { quoted: ftroli})
}
break   
case 'blood-frosted': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/ephoto360/blood-frosted?apikey=beta&text=${text}` }, caption: mess.success }, { quoted: ftroli})
}
break   
case 'blood-steel': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/ephoto360/blood-steel?apikey=beta&text=${text}` }, caption: mess.success }, { quoted: ftroli})
}
break   
case 'blood-text': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/ephoto360/blood-text?apikey=beta&text=${text}` }, caption: mess.success }, { quoted: ftroli})
}
break   
case 'blood-text2': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/ephoto360/blood-text2?apikey=beta&text=${text}` }, caption: mess.success }, { quoted: ftroli})
}
break   
case 'blood-wall': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/ephoto360/blood-wall?apikey=beta&text=${text}` }, caption: mess.success }, { quoted: ftroli})
}
break   
case 'blue-effect': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/ephoto360/blue-effect?apikey=beta&text=${text}` }, caption: mess.success }, { quoted: ftroli})
}
break   
case 'blue-neon': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/ephoto360/blue-neon?apikey=beta&text=${text}` }, caption: mess.success }, { quoted: ftroli})
}
break   
case 'blueglass-effect': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!args[0]) throw mess.textt
if (!args[1]) throw mess.textt2
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/ephoto360/blueglass-effect?apikey=beta&text=${args[0]}&text2=${args[1]}` }, caption: mess.success }, { quoted: ftroli})
}
break
case 'bokeh-text': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/ephoto360/bokeh-text?apikey=beta&text=${text}` }, caption: mess.success }, { quoted: ftroli})
}
break   
case 'boom-comic': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/ephoto360/boom-comic?apikey=beta&text=${text}` }, caption: mess.success }, { quoted: ftroli})
}
break   
case 'broken-glass': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/ephoto360/broken-glass?apikey=beta&text=${text}` }, caption: mess.success }, { quoted: ftroli})
}
break   
case 'buffalo': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!args[0]) throw mess.textt
if (!args[1]) throw mess.textt2
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/ephoto360/buffalo?apikey=beta&text=${args[0]}&text2=${args[1]}` }, caption: mess.success }, { quoted: ftroli})
}
break
case 'bulb-effect': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/ephoto360/bulb-effect?apikey=beta&text=${text}` }, caption: mess.success }, { quoted: ftroli})
}
break   
case 'bull': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!args[0]) throw mess.textt
if (!args[1]) throw mess.textt2
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/ephoto360/bull?apikey=beta&text=${args[0]}&text2=${args[1]}` }, caption: mess.success }, { quoted: ftroli})
}
break
case 'cake-text': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/ephoto360/cake-text?apikey=beta&text=${text}` }, caption: mess.success }, { quoted: ftroli})
}
break   
case 'cake-text2': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/ephoto360/cake-text2?apikey=beta&text=${text}` }, caption: mess.success }, { quoted: ftroli})
}
break   
case 'cake-text3': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/ephoto360/cake-text3?apikey=beta&text=${text}` }, caption: mess.success }, { quoted: ftroli})
}
break   
case 'candy-text': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/ephoto360/candy-text?apikey=beta&text=${text}` }, caption: mess.success }, { quoted: ftroli})
}
break   
case 'captain-america': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!args[0]) throw mess.textt
if (!args[1]) throw mess.textt2
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/ephoto360/captain-america?apikey=beta&text=${args[0]}&text2=${args[1]}` }, caption: mess.success }, { quoted: m})
}
break
case 'card-christmas': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/ephoto360/card-christmas?apikey=beta&text=${text}` }, caption: mess.success }, { quoted: m})
}
break   
case 'card-christmas2': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/ephoto360/card-christmas2?apikey=beta&text=${text}` }, caption: mess.success }, { quoted: m})
}
break   
case 'cartoon-graffiti': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/ephoto360/cartoon-graffiti?apikey=beta&text=${text}` }, caption: mess.success }, { quoted: m})
}
break   
//━━━━━━━━━━━━━━━[ FOTO FUNIA ]━━━━━━━━━━━━━━━━━//
case 'airline': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/photofunia/airline?apikey=beta&name=${text}` }, caption: mess.success }, { quoted: ftroli})
}
break   
case 'arrow-signs': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!args[0]) throw mess.textt
if (!args[1]) throw mess.textt2
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/photofunia/arrow-signs?apikey=beta&text1=${args[0]}&text2=${args[1]}` }, caption: mess.success }, { quoted: ftroli})
}
break
case 'balloon': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/photofunia/balloon?apikey=beta&text=${text}` }, caption: mess.success }, { quoted: ftroli})
}
break   
case 'beach-sign': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/photofunia/beach-sign?apikey=beta&text=${text}` }, caption: mess.success }, { quoted: ftroli})
}
break   
case 'birthday-cake': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!args[0]) throw mess.textt
if (!args[1]) throw mess.textt2
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/photofunia/birthday-cake?apikey=beta&text1=${args[0]}&text2=${args[1]}` }, caption: mess.success }, { quoted: ftroli})
}
break
case 'beach-sign': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/photofunia/beach-sign?apikey=beta&text=${text}` }, caption: mess.success }, { quoted: ftroli})
}
break   
case 'blood_writing': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/photofunia/blood_writing?apikey=beta&text=${text}` }, caption: mess.success }, { quoted: ftroli})
}
break 
case 'books': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!args[0]) throw mess.textt
if (!args[1]) throw mess.textt2
if (!args[2]) throw mess.textt3
if (!args[3]) throw mess.textt4
if (!args[4]) throw mess.textt5
if (!args[5]) throw mess.textt6
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/photofunia/books?apikey=beta&text=${args[0]}&text2=${args[1]}&text3=${args[2]}&text4=${args[3]}&text5=${args[4]}&text6=${args[5]}` }, caption: mess.success }, { quoted: ftroli})
}
break  
case 'bracelet': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/photofunia/bracelet?apikey=beta&text=${text}` }, caption: mess.success }, { quoted: ftroli})
}
break   
case 'cemetery-gates': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/photofunia/cemetery-gates?apikey=beta&text=${text}` }, caption: mess.success }, { quoted: ftroli})
}
break   
case 'chalk_writing': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/photofunia/chalk_writing?apikey=beta&text=${text}` }, caption: mess.success }, { quoted: ftroli})
}
break 
case 'chalkboard': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!args[0]) throw mess.textt
if (!args[1]) throw mess.textt2
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/photofunia/chalkboard?apikey=beta&text=${args[0]}&text2=${args[1]}` }, caption: mess.success }, { quoted: ftroli})
}
break
case 'christmas-writing': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/photofunia/christmas-writing?apikey=beta&text=${text}` }, caption: mess.success }, { quoted: ftroli})
}
break   
case 'cinema-ticket': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!args[0]) throw mess.textt
if (!args[1]) throw mess.textt2
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/photofunia/cinema-ticket?apikey=beta&text1=${args[0]}&text2=${args[1]}` }, caption: mess.success }, { quoted: ftroli})
}
break
case 'cookies_writing': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/photofunia/cookies_writing?apikey=beta&text=${text}` }, caption: mess.success }, { quoted: ftroli})
}
break   
case 'cross_stitch_text': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!args[0]) throw mess.textt
if (!args[1]) throw mess.textt2
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/photofunia/cross_stitch_text?apikey=beta&text=${args[0]}&text2=${args[1]}` }, caption: mess.success }, { quoted: ftroli})
}
break
case 'denim-emdroidery': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/photofunia/denim-emdroidery?apikey=beta&text=${text}` }, caption: mess.success }, { quoted: ftroli})
}
break   
case 'einstein': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/photofunia/einstein?apikey=beta&text=${text}` }, caption: mess.success }, { quoted: ftroli})
}
break   
case 'foggy_window_writing': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/photofunia/foggy_window_writing?apikey=beta&text=${text}` }, caption: mess.success }, { quoted: ftroli})
}
break   
case 'fortune-cookie': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/photofunia/fortune-cookie?apikey=beta&text=${text}` }, caption: mess.success }, { quoted: ftroli})
}
break   
case 'frosty-window-writing': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/photofunia/frosty-window-writing?apikey=beta&text=${text}` }, caption: mess.success }, { quoted: m})
}
break   
case 'haunted-hotel': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/photofunia/haunted-hotel?apikey=beta&text=${text}` }, caption: mess.success }, { quoted: m})
}
break   
case 'heart_tattoo': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/photofunia/heart_tattoo?apikey=beta&text=${text}` }, caption: mess.success }, { quoted: m})
}
break   
case 'lifebuoy': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!args[0]) throw mess.textt
if (!args[1]) throw mess.textt2
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/photofunia/lifebuoy?apikey=beta&text1=${args[0]}&text2=${args[1]}` }, caption: mess.success }, { quoted: m})
}
break
case 'light-graffiti': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/photofunia/light-graffiti?apikey=beta&text=${text}` }, caption: mess.success }, { quoted: m})
}
break   
case 'lipstick-writing': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/photofunia/lipstick-writing?apikey=beta&text=${text}` }, caption: mess.success }, { quoted: m})
}
break   
case 'love-lock': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/photofunia/love-lock?apikey=beta&text=${text}` }, caption: mess.success }, { quoted: m})
}
break   
case 'movie_marquee': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!args[0]) throw mess.textt
if (!args[1]) throw mess.textt2
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/photofunia/movie_marquee?apikey=beta&text1=${args[0]}&text2=${args[1]}` }, caption: mess.success }, { quoted: m})
}
break
case 'neon': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!args[0]) throw mess.textt
if (!args[1]) throw mess.textt2
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/photofunia/neon?apikey=beta&text1=${args[0]}&text2=${args[1]}` }, caption: mess.success }, { quoted: m})
}
break
case 'neon-writing': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!args[0]) throw mess.textt
if (!args[1]) throw mess.textt2
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/photofunia/neon-writing?apikey=beta&text=${args[0]}&text2=${args[1]}` }, caption: mess.success }, { quoted: m})
}
break
case 'nightmare-writing': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/photofunia/nightmare-writing?apikey=beta&text=${text}` }, caption: mess.success }, { quoted: m})
}
break   
case 'noir': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/photofunia/noir?apikey=beta&text=${text}` }, caption: mess.success }, { quoted: m})
}
break   
case 'pendant': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/photofunia/pendant?apikey=beta&text=${text}` }, caption: mess.success }, { quoted: m})
}
break   
case 'plane-banner': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/photofunia/plane-banner?apikey=beta&text=${text}` }, caption: mess.success }, { quoted: m})
}
break   
case 'retro-wave': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!args[0]) throw mess.textt
if (!args[1]) throw mess.textt2
if (!args[2]) throw mess.textt3
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/photofunia/retro-wave?apikey=beta&text1=${args[0]}&text2=${args[1]}&text3=${args[2]}` }, caption: mess.success }, { quoted: m})
}
break
case 'sand_writing': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/photofunia/sand_writing?apikey=beta&text=${text}` }, caption: mess.success }, { quoted: m})
}
break   
case 'snow_writing': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!args[0]) throw mess.textt
if (!args[1]) throw mess.textt2
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/photofunia/snow_writing?apikey=beta&text1=${args[0]}&text2=${args[1]}` }, caption: mess.success }, { quoted: m})
}
break
case 'snow-sign': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/photofunia/snow-sign?apikey=beta&text=${text}` }, caption: mess.success }, { quoted: m})
}
break   
case 'soup_letters': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/photofunia/soup_letters?apikey=beta&text=${text}` }, caption: mess.success }, { quoted: m})
}
break   
case 'street-sign': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/photofunia/street-sign?apikey=beta&text=${text}` }, caption: mess.success }, { quoted: m})
}
break   
case 'surfing-board': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!args[0]) throw mess.textt
if (!args[1]) throw mess.textt2
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/photofunia/surfing-board?apikey=beta&text=${args[0]}&text2=${args[1]}` }, caption: mess.success }, { quoted: m})
}
break
case 'tree_carving': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!args[0]) throw mess.textt
if (!args[1]) throw mess.textt2
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/photofunia/tree_carving?apikey=beta&text=${args[0]}&text2=${args[1]}` }, caption: mess.success }, { quoted: m})
}
break
case 'typewriter': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/photofunia/typewriter?apikey=beta&text=${text}` }, caption: mess.success }, { quoted: m})
}
break   
case 'water-writing': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/photofunia/water-writing?apikey=beta&text=${text}` }, caption: mess.success }, { quoted: m})
}
break   
case 'watercolour-text': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!args[0]) throw mess.textt
if (!args[1]) throw mess.textt2
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/photofunia/watercolour-text?apikey=beta&text=${args[0]}&text2=${args[1]}` }, caption: mess.success }, { quoted: m})
}
break
case 'wooden_sign': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/photofunia/wooden_sign?apikey=beta&text=${text}` }, caption: mess.success }, { quoted: m})
}
break   
case 'yacht': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/photofunia/yacht?apikey=beta&text=${text}` }, caption: mess.success }, { quoted: m})
}
break   
//━━━━━━━━━━━━━━━[ MEDIA ]━━━━━━━━━━━━━━━━━//
case 'carbon': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/media/carbon?apikey=beta&code=${text}` }, caption: mess.success }, { quoted: m})
}
break 
case 'carbon2': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/media/carbon2?apikey=beta&code=${text}` }, caption: mess.success }, { quoted: m})
}
break   
case 'carbon3': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/media/carbon3?apikey=beta&code=${text}` }, caption: mess.success }, { quoted: m})
}
break 
case 'ssweb': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.violetics.pw/api/media/ssweb?apikey=beta&url=${text}` }, caption: mess.success }, { quoted: m})
}
break 
//━━━━━━━━━━━━━━━[ BATAS ]━━━━━━━━━━━━━━━━━//
case 'idulfitri': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/idulfitri?apikey=${lolkey}&text=${text}` }, caption: mess.success }, { quoted: m})
}
break
case 'ramadhan': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/ramadhan?apikey=${lolkey}&text=${text}` }, caption: mess.success }, { quoted: m})
}
break
case 'quotemaker': {
m.reply(mess.wait)
let buttons = [
{buttonId: `${command}`, buttonText: {displayText: '⬡ BACK'}, type: 1}
]
let buttonMessage = {
image: { url: `https://api.lolhuman.xyz/api/quotemaker?apikey=${lolkey}&text=${text}` },
caption:mess.success,
footer: hisoka.user.name,
buttons: buttons,
headerType: 4
}
hisoka.sendMessage(m.chat, buttonMessage, { quoted: floc })
}
break
case 'quotemaker2': {
m.reply(mess.wait)
let buttons = [
{buttonId: `${command}`, buttonText: {displayText: '⬡ BACK'}, type: 1}
]
let buttonMessage = {
image: { url: `https://api.lolhuman.xyz/api/quotemaker2?apikey=${lolkey}&text=${text}&author=${pushname}` },
caption:mess.success,
footer: hisoka.user.name,
buttons: buttons,
headerType: 4
}
hisoka.sendMessage(m.chat, buttonMessage, { quoted: floc })
}
break
case 'gsuggest': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!args[0]) throw mess.textt
if (!args[1]) throw mess.textt2
if (!args[2]) throw mess.textt3
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/gsuggest?apikey=${lolkey}&text1=${args[0]}&text2=${args[1]}&text3=${args[2]}` }, caption: mess.success }, { quoted: m})
}
break  
//━━━━━━━━━━━━━━━[ BATAS ]━━━━━━━━━━━━━━━━━//
case 'quotemaker3': {
m.reply(mess.wait)
let buttons = [
{buttonId: `${command}`, buttonText: {displayText: '⬡ BACK'}, type: 1}
]
let buttonMessage = {
image: { url: `https://leyscoders-api.herokuapp.com/api/quote-maker?text=${text}&apikey=IkyOgiwara` },
caption:mess.success,
footer: hisoka.user.name,
buttons: buttons,
headerType: 4
}
hisoka.sendMessage(m.chat, buttonMessage, { quoted: floc })
}
break
//━━━━━━━━━━━━━━━[ BATAS ]━━━━━━━━━━━━━━━━━//
case 'nuliskiri':{
if (args.length < 1) return m.reply(`Kirim perintah *${prefix}nuliskiri* teks`)
m.reply(mess.wait)
var tulisan = body.slice(11)
var splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
var fixHeight = splitText.split('\n').slice(0, 31).join('\n')
spawn('convert', ['./Atak/FOTO/BUKU/sebelumkiri.jpg','-font','./Atak/FONT/Indie-Flower.ttf','-size','960x1280','-pointsize','22','-interline-spacing','2','-annotate','+140+153',fixHeight,'./Atak/FOTO/BUKU/setelahkiri.jpg'])
.on('error', () => reply('error'))
.on('exit', () => {
hisoka.sendMessage(from, { image: fs.readFileSync('./Atak/FOTO/BUKU/setelahkiri.jpg')}, {quoted: ftroli, caption: `Jangan Malas Kak...`})
})
}
break
case 'nuliskanan':{
                if (args.length < 1) return m.reply(`Kirim perintah *${prefix}nuliskanan* teks`)
m.reply(mess.wait)
                var tulisan = body.slice(12)
                var splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
                var fixHeight = splitText.split('\n').slice(0, 31).join('\n')
                spawn('convert', ['./Atak/FOTO/BUKU/sebelumkanan.jpg','-font','./Atak/FONT/Indie-Flower.ttf','-size','960x1280','-pointsize','23','-interline-spacing','2','-annotate','+128+129',fixHeight,'./Atak/FOTO/BUKU/setelahkanan.jpg'])
                .on('error', () => reply('error'))
                .on('exit', () => {
                hisoka.sendMessage(from, { image: fs.readFileSync('./Atak/FOTO/BUKU/setelahkanan.jpg')}, {quoted: ftroli, caption: `Jangan Malas Kak...`})
                })
            }
                break
case 'foliokiri':{
                if (args.length < 1) return m.reply(`Kirim perintah *${prefix}foliokiri* teks`)
m.reply(mess.wait)
                var tulisan = body.slice(11)
                var splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
                var fixHeight = splitText.split('\n').slice(0, 38).join('\n')
                spawn('convert', ['./Atak/FOTO/FOLIO/sebelumkiri.jpg','-font','./Atak/FONT/Indie-Flower.ttf','-size','1720x1280','-pointsize','23','-interline-spacing','4','-annotate','+48+185',fixHeight,'./Atak/FOTO/FOLIO/setelahkiri.jpg'])
                .on('error', () => reply('error'))
                .on('exit', () => {
                hisoka.sendMessage(from, { image: fs.readFileSync('./Atak/FOTO/FOLIO/setelahkiri.jpg')}, {quoted: ftroli, caption: `Jangan Malas Kak...`})
                })
            }
                break
case 'foliokanan':{
                if (args.length < 1) return m.reply(`Kirim perintah *${prefix}foliokanan* teks`)
m.reply(mess.wait)
                var tulisan = body.slice(12)
                var splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
                var fixHeight = splitText.split('\n').slice(0, 38).join('\n')
                spawn('convert', ['./Atak/FOTO/FOLIO/sebelumkanan.jpg','-font','./Atak/FONT/Indie-Flower.ttf','-size','960x1280','-pointsize','23','-interline-spacing','3','-annotate','+89+190',fixHeight,'./Atak/FOTO/FOLIO/setelahkanan.jpg'])
                .on('error', () => m.reply(mess.error.api))
                .on('exit', () => {
                hisoka.sendMessage(from, { image: fs.readFileSync('./Atak/FOTO/FOLIO/setelahkanan.jpg')}, {quoted: m, caption: `Jangan Malas Kak...`})
                })
            }
                break
//━━━━━━━━━━━━━━━[ BATAS ]━━━━━━━━━━━━━━━━━//
case 'shorturl': {
let anu = await fetchJson(`https://hadi-api.herokuapp.com/api/shorturl?url=${text}`)
let buttons = [
{buttonId: `${command}`, buttonText: {displayText: '⬡ BACK'}, type: 1}
]
let buttonMessage = {
text: anu.result,
footer: 'Press The Button Below',
buttons: buttons,
headerType: 2
}
hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'cuttly': {
let anu = await fetchJson(`https://hadi-api.herokuapp.com/api/cuttly?url=${text}`)
let buttons = [
{buttonId: `${command}`, buttonText: {displayText: '⬡ BACK'}, type: 1}
]
let buttonMessage = {
text: anu.result,
footer: 'Press The Button Below',
buttons: buttons,
headerType: 2
}
hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'bitly': {
let anu = await fetchJson(`https://hadi-api.herokuapp.com/api/bitly?url=${text}`)
let buttons = [
{buttonId: `${command}`, buttonText: {displayText: '⬡ BACK'}, type: 1}
]
let buttonMessage = {
text: anu.result,
footer: 'Press The Button Below',
buttons: buttons,
headerType: 2
}
hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'tinyurl': {
let anu = await fetchJson(`https://hadi-api.herokuapp.com/api/tinyurl?url=${text}`)
let buttons = [
{buttonId: `${command}`, buttonText: {displayText: '⬡ BACK'}, type: 1}
]
let buttonMessage = {
text: anu.result,
footer: 'Press The Button Below',
buttons: buttons,
headerType: 2
}
hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
//━━━━━━━━━━━━━━━[ NEWS ]━━━━━━━━━━━━━━━━━//
case 'antara': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit           
m.reply(mess.wait)
let res = await fetchJson(`https://api.violetics.pw/api/news/antara?apikey=beta`)
let capt = `あ Antara Search From ${command}\n\n`
for (let i of res.result){
capt += `あ News : ${i.news}\n`                              
capt += `あ Url : ${i.url}\n` 
capt += `あ Thumbnail : ${i.thumbnail}\n`
capt += `あ Category : ${i.category}\n`                               
capt += `あ Date : ${i.date}\n\n──────────────────────\n`
}
hisoka.sendImage(m.chat, res.result[0].thumbnail, capt, m)
}
break   
case 'bbc': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit                        
m.reply(mess.wait)
let res = await fetchJson(`https://api.violetics.pw/api/news/bbc?apikey=beta`)
let teks = `あ Berita For ${command}\n\n`
for (let i of res.result) {
teks += `あ Title : ${i.news}\n`                              
teks += `あ Desc : ${i.description}\n`           
teks += `あ Date : ${i.date}\n`                       
teks += `あ Url : ${i.url}\n\n──────────────────────\n`
}
m.reply(teks)
}
break
case 'cnbc': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit           
m.reply(mess.wait)
let res = await fetchJson(`https://api.violetics.pw/api/news/cnbc?apikey=beta`)
let capt = `あ Berita For ${command}\n\n`
for (let i of res.result){
capt += `あ Title: ${i.news}\n`           
capt += `あ Tag: ${i.tags}\n`    
capt += `あ Date: ${i.date}\n`                         
capt += `あ Url: ${i.url}\n\n──────────────────────\n`
}
hisoka.sendImage(m.chat, res.result[0].thumbnail, capt, m)
}
break     
case 'cnn': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit                        
m.reply(mess.wait)
let res = await fetchJson(`https://api.violetics.pw/api/news/cnn?apikey=beta`)
let teks = `あ Berita For ${command}\n\n`
for (let i of res.result) {
teks += `あ Title : ${i.title}\n`                              
teks += `あ Url : ${i.url}\n`           
teks += `あ Date : ${i.date}\n`           
teks += `あ Tag : ${i.tags}\n`           
teks += `あ Desc : ${i.description}\n\n──────────────────────\n`
}
m.reply(teks)
}
break
case 'daily': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit           
m.reply(mess.wait)
let res = await fetchJson(`https://api.violetics.pw/api/news/daily?apikey=beta`)
let capt = `あ Daily Search From ${command}\n\n`
for (let i of res.result){
capt += `あ News : ${i.news}\n`                              
capt += `あ Url : ${i.url}\n` 
capt += `あ Thumbnail : ${i.thumbnail}\n\n──────────────────────\n`
}
hisoka.sendImage(m.chat, res.result[0].thumbnail, capt, m)
}
break   
case 'detik': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit           
m.reply(mess.wait)
let res = await fetchJson(`https://api.violetics.pw/api/news/detik?apikey=beta`)
let capt = `あ Detik Search From ${command}\n\n`
for (let i of res.result){
capt += `あ News : ${i.news}\n`                              
capt += `あ Url : ${i.url}\n` 
capt += `あ Thumbnail : ${i.thumbnail}\n` 
capt += `あ Date : ${i.date}\n\n──────────────────────\n`
}
hisoka.sendImage(m.chat, res.result[0].thumbnail, capt, m)
}
break   
case 'fajar': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit           
m.reply(mess.wait)
let res = await fetchJson(`https://api.violetics.pw/api/news/fajar?apikey=beta`)
let capt = `あ Fajar Search From ${command}\n\n`
for (let i of res.result){
capt += `あ News : ${i.news}\n`                              
capt += `あ Url : ${i.url}\n` 
capt += `あ Thumbnail : ${i.thumbnail}\n` 
capt += `あ Date : ${i.date}\n` 
capt += `あ Tags : ${i.tags}\n\n──────────────────────\n`
}
hisoka.sendImage(m.chat, res.result[0].thumbnail, capt, m)
}
break   
case 'idn': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit                        
m.reply(mess.wait)
let res = await fetchJson(`https://api.violetics.pw/api/news/idn?apikey=beta`)
let teks = `あ Berita For ${command}\n\n`
for (let i of res.result) {
teks += `あ Title : ${i.news}\n`                              
teks += `あ Url : ${i.url}\n`           
teks += `あ Tag : ${i.category}\n`                      
teks += `あ Desc : ${i.date}\n\n──────────────────────\n`
}
m.reply(teks)
}
break
case 'indozone': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit           
m.reply(mess.wait)
let res = await fetchJson(`https://api.violetics.pw/api/news/indozone?apikey=beta`)
let capt = `あ Indozone Search From ${command}\n\n`
for (let i of res.result){
capt += `あ News : ${i.news}\n`                              
capt += `あ Url : ${i.url}\n` 
capt += `あ Thumbnail : ${i.thumbnail}\n` 
capt += `あ Date : ${i.date}\n` 
capt += `あ Tags : ${i.tags}\n\n──────────────────────\n`
}
hisoka.sendImage(m.chat, res.result[0].thumbnail, capt, m)
}
break   
//━━━━━━━━━━━━━━━[ STALK ]━━━━━━━━━━━━━━━━━//
case 'github': {
if (!text) throw `Kirim perintah ${command} Text\nContoh : ${command} Violetics`
m.reply(mess.wait)
var data = await fetchJson(`https://api.violetics.pw/api/stalk/github?apikey=beta&username=${text}`)
var captnya = `Github Search From ${text}\n\n
あLogin : ${data.result.login}
あId : ${data.result.id}
あNode Id : ${data.result.node_id}
あAvatar : ${data.result.avatar_url}
あGravatar Id : ${data.result.gravatar_id}
あUrl : *${data.result.url}
あHtml : ${data.result.html_url}
あFollowers : ${data.result.followers_url}
あFollowing : ${data.result.following_url}
あGists : ${data.result.gists_url}
あStarred : ${data.result.starred_url}
あSubscriptions : ${data.result.subscriptions_url}
あOrganizations : ${data.result.organizations_url}
あRepos : ${data.result.repos_url}
あEvents : ${data.result.events_url}
あReceived Events : ${data.result.received_events_url}
あType : ${data.result.type}
あSite Admin : ${data.result.site_admin}
あName : ${data.result.name}
あCompany : ${data.result.company}
あBlog : ${data.result.blog}
あLocation : ${data.result.location}
あEmail : ${data.result.email}
あHireable : ${data.result.hireable}
あBio : ${data.result.bio}
あTwitter Username : ${data.result.twitter_username}
あPublic Repos : ${data.result.public_repos}
あPublic Gists : ${data.result.public_gists}
あCreated At : ${data.result.created_at}
あUpdated At : ${data.result.updated_at}\n`
m.reply(captnya)
}
break
//━━━━━━━━━━━━━━━[ OTHER ]━━━━━━━━━━━━━━━━━//
case 'wangy':
if (!q) return m.reply (`Contoh : .wangy Dani`)
anu = q.toUpperCase()
text = `${anu} ${anu} ${anu} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${anu} wangyy aku mau nyiumin aroma wangynya ${anu} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${anu} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${anu} AAAAA LUCCUUUUUUUUUUUUUUU............ ${anu} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${anu} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${anu} gw ... ${anu} di laptop ngeliatin gw, ${anu} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${anu} aku gak mau merelakan ${anu} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${anu} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
m.reply(text)
break
case 'wangy2':
if (!q) return m.reply (`Contoh : .wangy Dani`)
anu = q.toUpperCase()
wangy = `GW BENAR-BENAR PENGEN JILAT KAKI *${anu}*,GW PENGEN BANGET MENJILAT SETIAP BAGIAN KAKINYA SAMPAI AIR LIUR GW BERCUCURAN KAYAK AIR KERINGAT LALU NGENTOD DENGAN NYA SETIAP HARI SAMPAI TUBUH KITA MATI RASA, YA TUHAN GW INGIN MEMBUAT ANAK ANAK DENGAN *${anu}* SEBANYAK SATU TIM SEPAK BOLA DAN MEMBUAT SATU TIM SEPAK BOLA LAINYA UNTUK MELAWAN ANAK-ANAK TIM SEPAK BOLA PERTAMA GW  YANG GW BUAT SAMA *${anu}* GW PENGEN MASUK KE SETIAP LUBANG TUBUHNYA, MAU ITU LUBANG HIDUNG LUBANG MATA MAUPUN LUBANG BOOL, KEMUDIAN GW AKAN MANUSIA YANG TIDAK BISA HIDUP KALO GW GA ENTOD SETIAP HARI`
m.reply(wangy)
break
case 'nenen':
if (!q) return m.reply (`Contoh : .nenen Dani`)
anu = q.toUpperCase()
wangy = `NENEN NENEN KEPENGEN NENEN SAMA ${anu}. TETEK GEDE NAN KENCANG MILIK ${anu} MEMBUATKU KEPENGEN NENEN. DIBALUT PAKAIAN KETAT YANG ADUHAI CROOOOTOTOTOTOTOT ANJING SANGE GUA BANGSAT. ${anu}, PLIS DENGERIN BAIK BAIK. TOLONG BUKA BAJU SEBENTAR SAJA PLISSS TOLOOONG BANGET, BIARKAN MULUT KERINGKU BISA MENGECAP NENEN ${anu}. BIARKAN AKU MENGENYOT NENENMU ${anu}. AKU RELA NGASIH SESEMBAHAN APA AJA BERAPAPUN ITU DUIT YANG AKU BAKAR KHUSUS TERKHUSUS BUATMU. TAPI TOLOOOONG BANGET BUKA BAJUMU AKU MAU NENEN. NENEN NENEEEEN NENEN ${anu} WANGIIII`
m.reply(wangy)
break
case 'simp':
if (!q) return m.reply (`Contoh : .wangy Dani`)
anu = q.toUpperCase()
wangy = `Buruan, panggil gue SIMP, ato BAPERAN. ini MURNI PERASAAN GUE. Gue pengen genjot bareng ${anu}. Ini seriusan, suaranya yang imut, mukanya yang cantik, apalagi badannya yang aduhai ningkatin gairah gue buat genjot ${anu}. Setiap lapisan kulitnya pengen gue jilat. Saat gue mau crot, gue bakal moncrot sepenuh hati, bisa di perut, muka, badan, teteknya, sampai lubang burit pun bakal gue crot sampai puncak klimaks. Gue bakal meluk dia abis gue moncrot, lalu nanya gimana kabarnya, ngrasain enggas bareng saat telanjang. Dia bakal bilang kalau genjotan gue mantep dan nyatain perasaannya ke gue, bilang kalo dia cinta ama gue. Gue bakal bilang balik seberapa gue cinta ama dia, dan dia bakal kecup gue di pipi. Terus kita ganti pakaian dan ngabisin waktu nonton film, sambil pelukan ama makan hidangan favorit. Gue mau ${anu} jadi pacar, pasangan, istri, dan idup gue. Gue cinta dia dan ingin dia jadi bagian tubuh gue. Lo kira ini copypasta? Kagak cok. Gue ngetik tiap kata nyatain prasaan gue. Setiap kali elo nanya dia siapa, denger ini baik-baik : DIA ISTRI GUE. Gue sayang ${anu}, dan INI MURNI PIKIRAN DAN PERASAAN GUE.`
m.reply(wangy)
break
//━━━━━━━━━━━━━━━[ RANDOM IMAGE ]━━━━━━━━━━━━━━━━━//
case 'teknologi': case 'mountain': case 'cyberspace': case 'programming':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var data = await fetchJson(`https://yx-api.herokuapp.com/api/wallpaper/${command}`)
hisoka.sendMessage(m.chat, { caption: "🤗Done, Oke Desu~", image: { url: data.result }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: floc })
break
//━━━━━━━━━━━━━━━[ BATAS ]━━━━━━━━━━━━━━━━━//
case 'pentol': case 'kartun': case 'tatasurya': case 'doraemon': case 'gaming': case 'islami': case 'kpop': case 'anime': case 'wallhp': case 'aesthetic': {
m.reply(mess.wait)
let buttons = [
{buttonId: `${command}`, buttonText: {displayText: 'NEXT➡️'}, type: 1}
]
let buttonMessage = {
image: { url: `https://christian-id-api.herokuapp.com/api/wallpaper/${command}?apikey=IzumiBot` },
caption:mess.success,
footer: hisoka.user.name,
buttons: buttons,
headerType: 4
}
hisoka.sendMessage(m.chat, buttonMessage, { quoted: floc })
}
break
case 'wallpaperhacker': {
m.reply(mess.wait)
let buttons = [
{buttonId: `${command}`, buttonText: {displayText: 'NEXT➡️'}, type: 1}
]
let buttonMessage = {
image: { url: `https://christian-id-api.herokuapp.com/api/wallpaper/hekel?apikey=IzumiBot` },
caption:mess.success,
footer: hisoka.user.name,
buttons: buttons,
headerType: 4
}
hisoka.sendMessage(m.chat, buttonMessage, { quoted: floc })
}
break
case 'wallpaperpubg': {
m.reply(mess.wait)
let buttons = [
{buttonId: `${command}`, buttonText: {displayText: 'NEXT➡️'}, type: 1}
]
let buttonMessage = {
image: { url: `https://christian-id-api.herokuapp.com/api/wallpaper/pubg?apikey=IzumiBot` },
caption:mess.success,
footer: hisoka.user.name,
buttons: buttons,
headerType: 4
}
hisoka.sendMessage(m.chat, buttonMessage, { quoted: floc })
}
break
case 'cry':
case 'kill':
case 'hug':
case 'pat':
case 'lick':
case 'kiss':
case 'bite':
case 'yeet':
case 'bully':
case 'bonk':
case 'wink':
case 'poke':
case 'nom':
case 'slap':
case 'smile':
case 'wave':
case 'awoo':
case 'blush':
case 'smug':
case 'glomp':
case 'happy':
case 'dance':
case 'cringe':
case 'cuddle':
case 'highfive':
case 'handhold':
axios.get(`https://api.waifu.pics/sfw/${command}`)
.then(({data}) => {
hisoka.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
break
case 'namapeople':{
kohc = await fetchJson(`https://api.lolhuman.xyz/api/random/people?apikey=${lolkey}`)
kohx = kohc.result
ini_txt = `Nama : ${kohx.name.title} ${kohx.name.first} ${kohx.name.last}\n`
ini_txt += `Gender : ${kohx.gender}\n`
ini_txt += `Location Number : ${kohx.location.street.number}\n`
ini_txt += `Location Name : ${kohx.location.street.name}\n`
ini_txt += `Location City : ${kohx.location.city}\n`
ini_txt += `Location State : ${kohx.location.state}\n`
ini_txt += `Location Country : ${kohx.location.country}\n`
ini_txt += `Location PostCode : ${kohx.location.postcode}\n`
ini_txt += `Location Latitude : ${kohx.location.coordinates.latitude}\n`
ini_txt += `Location Longitude : ${kohx.location.coordinates.longitude}\n`
ini_txt += `Location Timeone : ${kohx.location.timezone.offset}\n`
ini_txt += `Deskripsi : ${kohx.location.timezone.description}\n`
let buttons = [
{buttonId: `${command}`, buttonText: {displayText: 'Next'}, type: 1}
]
let buttonMessage = {
text: ini_txt,
footerText: 'Pencet Button Untuk Next',
buttons: buttons,
headerType: 2
}
hisoka.sendMessage(m.chat, buttonMessage, { quoted: ftroli })
}
break
case 'dadu':
case 'patrick':
case 'amongus':
case 'gawrgura':
case 'anjing':
case 'bucinstick':
let buffer = await getBuffer(`https://api.lolhuman.xyz/api/sticker/${command}?apikey=${lolkey}`)
hisoka.sendMessage(m.chat, { sticker: buffer }, { quoted: ftroli })
break
case 'faktaunik': 
case 'katabijak': 
case 'pantun': 
case 'bucin': {
kohg = await fetchJson(`https://api.lolhuman.xyz/api/random/${command}?apikey=${lolkey}`)
let buttons = [
{buttonId: `${command}`, buttonText: {displayText: 'Next'}, type: 1}
]
let buttonMessage = {
text: kohg.result,
footerText: 'Pencet Button Untuk Next',
buttons: buttons,
headerType: 2
}
hisoka.sendMessage(m.chat, buttonMessage, { quoted: ftroli })
}
break
case 'quotes':{
var res = await Quotes()
teks = ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
teks += `\nAuthor: ${res.author}\n`
teks += `\nQuotes:\n`
teks += `${res.quotes}\n`
teks += ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
let buttons = [
{buttonId: `${command}`, buttonText: {displayText: 'Next'}, type: 1}
]
let buttonMessage = {
text: teks,
footerText: 'Pencet Button Untuk Next',
buttons: buttons,
headerType: 2
}
hisoka.sendMessage(m.chat, buttonMessage, { quoted: ftroli })
}
break
case 'randomnama':
anu = await fetchJson(`https://api.lolhuman.xyz/api/random/nama?apikey=${lolkey}`)
m.reply(anu.result)
break
//━━━━━━━━━━━━━━━[ BATAS ]━━━━━━━━━━━━━━━━━//
case 'mobil': case 'boneka-chucky': {
m.reply(mess.wait)
let buttons = [
{buttonId: `${command}`, buttonText: {displayText: 'NEXT➡️'}, type: 1}
]
let buttonMessage = {
image: { url: `https://api-invibot.herokuapp.com/api/wallpaper/${command}?apikey=APIKEY` },
caption:mess.success,
footer: hisoka.user.name,
buttons: buttons,
headerType: 4
}
hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'motor': {
m.reply(mess.wait)
let buttons = [
{buttonId: `${command}`, buttonText: {displayText: 'NEXT➡️'}, type: 1}
]
let buttonMessage = {
image: { url: `https://api-invibot.herokuapp.com/api/wallpaper/montor?apikey=APIKEY` },
caption:mess.success,
footer: hisoka.user.name,
buttons: buttons,
headerType: 4
}
hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
//━━━━━━━━━━━━━━━[ HEWAN MENU ]━━━━━━━━━━━━━━━━━//
case 'fox':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var data = await fetchJson(`https://some-random-api.ml/img/fox`)
hisoka.sendMessage(m.chat, { caption: "🤗Done, Oke Desu~", image: { url: data.link }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: m })
break
case 'dog':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var data = await fetchJson(`https://some-random-api.ml/img/dog`)
hisoka.sendMessage(m.chat, { caption: "🤗Done, Oke Desu~", image: { url: data.link }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: m })
break
case 'panda':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var data = await fetchJson(`https://some-random-api.ml/img/panda`)
hisoka.sendMessage(m.chat, { caption: "🤗Done, Oke Desu~", image: { url: data.link }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: m })
break
case 'panda2':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var data = await fetchJson(`https://some-random-api.ml/img/red_panda`)
hisoka.sendMessage(m.chat, { caption: "🤗Done, Oke Desu~", image: { url: data.link }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: m })
break
case 'bird':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var data = await fetchJson(`https://some-random-api.ml/img/bird`)
hisoka.sendMessage(m.chat, { caption: "🤗Done, Oke Desu~", image: { url: data.link }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: m })
break
case 'koala':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var data = await fetchJson(`https://some-random-api.ml/img/koala`)
hisoka.sendMessage(m.chat, { caption: "🤗Done, Oke Desu~", image: { url: data.link }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: m })
break
case 'whale':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var data = await fetchJson(`https://some-random-api.ml/img/Whale`)
hisoka.sendMessage(m.chat, { caption: "🤗Done, Oke Desu~", image: { url: data.link }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: m })
break
case 'raccon':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var data = await fetchJson(`https://some-random-api.ml/img/Raccoon`)
hisoka.sendMessage(m.chat, { caption: "🤗Done, Oke Desu~", image: { url: data.link }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: m })
break
case 'kanguru':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var data = await fetchJson(`https://some-random-api.ml/img/Kangaroo`)
hisoka.sendMessage(m.chat, { caption: "🤗Done, Oke Desu~", image: { url: data.link }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: m })
break
case 'cat':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var data = await fetchJson(`https://some-random-api.ml/img/cat`)
hisoka.sendMessage(m.chat, { caption: "🤗Done, Oke Desu~", image: { url: data.link }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: m })
break
case 'goose':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var data = await fetchJson(`https://nekos.life/api/v2/img/goose`)
hisoka.sendMessage(m.chat, { caption: "🤗Done, Oke Desu~", image: { url: data.url }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: m })
break
//━━━━━━━━━━━━━━━[ ANIME SFW ]━━━━━━━━━━━━━━━━━//
case 'husbu':
case 'milf':
case 'wallml':{
let buttons = [
{buttonId: `tiktokaudio ${q}`, buttonText: {displayText: 'Audio 🎶'}, type: 1}
]
let eek = await fetchJson(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)
let random = eek[Math.floor(Math.random() * eek.length)]
hisoka.sendMessage(m.chat, { image: { url: random }, caption: `Nih Kak` }, { quoted: ftroli })
}
break
case 'ppcp':
case 'ppcouple': {
let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
let random = anu[Math.floor(Math.random() * anu.length)]
hisoka.sendMessage(m.chat, { image: { url: random.male }, caption: `Foto Couple Male` }, { quoted: ftroli })
hisoka.sendMessage(m.chat, { image: { url: random.female }, caption: `Fofo Couple Female` }, { quoted: ftroli })
}
break
case 'waifu': {
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var data = await fetchJson(`https://api.waifu.pics/sfw/waifu`)
hisoka.sendMessage(m.chat, { caption: "🤗Done, Oke Desu~", image: { url: data.url }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: ftroli })
}
break
case 'neko': {
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var data = await fetchJson(`https://api.waifu.pics/sfw/neko`)
hisoka.sendMessage(m.chat, { caption: "🤗Done, Oke Desu~", image: { url: data.url }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: ftroli })
}
break
case 'shinobu': {
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var data = await fetchJson(`https://api.waifu.pics/sfw/shinobu`)
hisoka.sendMessage(m.chat, { caption: "🤗Done, Oke Desu~", image: { url: data.url }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: ftroli })
}
break
case 'megumin': {
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var data = await fetchJson(`https://api.waifu.pics/sfw/waifu`)
hisoka.sendMessage(m.chat, { caption: "🤗Done, Oke Desu~", image: { url: data.url }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: ftroli })
}
break
//━━━━━━━━━━━━━━━[ BATAS ]━━━━━━━━━━━━━━━━━//
case 'cosplay': {
m.reply(mess.wait)
let buttons = [
{buttonId: `${command}`, buttonText: {displayText: 'NEXT➡️'}, type: 1}
]
let buttonMessage = {
image: { url: `https://api-invibot.herokuapp.com/api/random/cosplay?apikey=APIKEY` },
caption:mess.success,
footer: hisoka.user.name,
buttons: buttons,
headerType: 4
}
hisoka.sendMessage(m.chat, buttonMessage, { quoted: floc })
}
break
case 'hentai': {
let cndn = await fetchJson(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/${command}.json`)
let random = cndn[Math.floor(Math.random() * cndn.length)]
hisoka.sendMessage(m.chat, { image: { url: random }, caption: `Nih Kak` }, { quoted: ftroli })
}
break
case 'loli': case 'kakasih': case 'shota': case 'yotsuba': case 'shinomiya': case 'yumeko': case 'tejina': case 'chiho': case 'boruto': case 'kaori': case 'mikasa': case 'akiyama': case 'gremoriy': case 'isuzu': case 'shina': case 'kagura': case 'shinka': case 'eba': case 'elaina': case 'yuri': case 'erza': case 'hinata': case 'minato': case 'naruto': case 'sagiri': case 'nezuko': case 'riza': case 'ana': case 'deidara': case 'yuki': case 'asuna': case 'ayazawa': case 'chitoge': case 'emilia': case 'hestai': case 'inori': case 'itachi': case 'madara': case 'sakura': case 'sasuke': case 'tsunade': case 'onepiece': case 'kaneki': case 'megumin': case 'toukachan': case 'akira': case 'itori': case 'kurumi': case 'miku': case 'pokemon': {
m.reply(mess.wait)
let buttons = [
{buttonId: `${command}`, buttonText: {displayText: 'NEXT➡️'}, type: 1}
]
let buttonMessage = {
image: { url: `https://christian-id-api.herokuapp.com/api/wallpaper/${command}?apikey=IzumiBot` },
caption:mess.success,
footer: hisoka.user.name,
buttons: buttons,
headerType: 4
}
hisoka.sendMessage(m.chat, buttonMessage, { quoted: ftroli })
}
break
//━━━━━━━━━━━━━━━[ ANIME NSFW ]━━━━━━━━━━━━━━━━━//
case 'nsfwloli': {
m.reply(mess.wait)
let buttons = [
{buttonId: `${command}`, buttonText: {displayText: 'NEXT➡️'}, type: 1}
]
let buttonMessage = {
image: { url: `https://api-invibot.herokuapp.com/api/wallpaper/${command}?apikey=APIKEY` },
caption:mess.success,
footer: hisoka.user.name,
buttons: buttons,
headerType: 4
}
hisoka.sendMessage(m.chat, buttonMessage, { quoted: ftroli })
}
break
case 'ahegao': case 'ass': case 'bdsm': case 'blowjob': case 'cuckold': case 'cum': case 'ero': case 'femdom': case 'foot': case 'gangbanh': case 'glasses': case 'jahy': case 'manga': case 'mstb': case 'neko': case 'orgy': case 'panties': case 'pussy': case 'neko2': case 'tentacles': case 'things': case 'yuri': case 'zettai': {
m.reply(mess.wait)
let buttons = [
{buttonId: `${command}`, buttonText: {displayText: 'NEXT➡️'}, type: 1}
]
let buttonMessage = {
image: { url: `https://api-invibot.herokuapp.com/api/nsfw/ahegao?apikey=APIKEY` },
caption:mess.success,
footer: hisoka.user.name,
buttons: buttons,
headerType: 4
}
hisoka.sendMessage(m.chat, buttonMessage, { quoted: ftroli })
}
break
//━━━━━━━━━━━━━━━[ INFORMASI ]━━━━━━━━━━━━━━━━━//
case 'cuaca': {
if (!text) throw `Kirim perintah ${command} Text\nContoh : ${command} Jakarta`
m.reply(mess.wait)
var data = await fetchJson(`https://leyscoders-api.herokuapp.com/api/cuaca?q=${text}&apikey=IkyOgiwara`)
var captnya = `Cuaca Search From ${text}\n\n
あDaerah : ${data.result.Daerah}
あLatitude : ${data.result.Latitude}
あLongitude : ${data.result.Longitude}
あTimeZone : ${data.result.TimeZone}
あTemprature : ${data.result.Temperature}
あTanggal : *${data.result.Tanggal}
あWaktu : ${data.result.Waktu}
あHari : *${data.result.Hari}
あCuaca : *${data.result.Cuaca}\n`
m.reply(captnya)
}
break
case 'infogempa': {
m.reply(mess.wait)
var data = await fetchJson(`https://leyscoders-api.herokuapp.com/api/infogempa?apikey=IkyOgiwara`)
var captnya = `Info Gempa\n\n
あWaktu : ${data.result.Waktu}
あLintang : ${data.result.Lintang}
あBujur : ${data.result.Bujur}
あMagnitido : ${data.result.Magnitudo}
あKedalaman : ${data.result.Kedalaman}
あWilayah : ${data.result.Wilayah}\n`
hisoka.sendMessage(m.chat, {caption: captnya, image: { url: data.result.Map }}, {quoted: ftroli })
}
break
case 'curahhujan': {
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var data = await fetchJson(`https://leyscoders-api.herokuapp.com/api/cuaca/hujan?apikey=IkyOgiwara`)
hisoka.sendMessage(m.chat, { caption: "🤗Done, Oke Desu~", image: { url: data.result }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: m })
}
break
case 'info-loker': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit           
m.reply(mess.wait)
let res = await fetchJson(`https://leyscoders-api.herokuapp.com/api/info-loker?apikey=IkyOgiwara`)
let capt = `あ Informasi Loker\n\n`
for (let i of res.result){
capt += `あ Title : ${i.title}\n`                              
capt += `あ Url : ${i.url}\n` 
capt += `あ Perusahaan : ${i.perusahaan}\n` 
capt += `あ Locate : ${i.locate}\n` 
capt += `あ Gaji : ${i.gaji}\n\n──────────────────────\n`
}
hisoka.sendImage(m.chat, res.result[0].img, capt, m)
}
break   
//━━━━━━━━━━━━━━━[ BATAS ]━━━━━━━━━━━━━━━━━//
case 'covidindo': {
m.reply(mess.wait)
var data = await fetchJson(`https://anabotofc.herokuapp.com/api/info/covidindo?apikey=AnaBot`)
var captnya = `
あUpdate : ${data.result.update}
あKasus : ${data.result.kasus}
あKematian: ${data.result.kematian}
あSembuh : ${data.result.sembuh}\n`
m.reply(captnya)
}
break
case 'covidworld': {
m.reply(mess.wait)
var data = await fetchJson(`https://anabotofc.herokuapp.com/api/info/covidworld?apikey=AnaBot`)
var captnya = `
あTotalCases : ${data.result.totalCases}
あRecovered : ${data.result.recovered}
あDeath: ${data.result.deaths}
あActiveCases : ${data.result.activeCases}
あClosedCases: ${data.result.closedCases}
あLastUpdate : ${data.result.lastUpdate}\n`
m.reply(captnya)
}
break
case 'infohoax': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit           
m.reply(mess.wait)
let res = await fetchJson(`https://anabotofc.herokuapp.com/api/info/hoax?apikey=AnaBot`)
let capt = `あ Informasi Hoax\n\n`
for (let i of res.result){
capt += `あ News : ${i.judul}\n`                              
capt += `あ Url : ${i.link}\n` 
capt += `あ Desc : ${i.desc}\n` 
capt += `あ Author : ${i.aut}\n` 
capt += `あ Thumbnail : ${i.thumb}\n\n──────────────────────\n`
}
hisoka.sendImage(m.chat, res.result[0].thumb, capt, m)
}
break   
//━━━━━━━━━━━━━━━[ BATAS ]━━━━━━━━━━━━━━━━━//
case 'faktaunik': {
let anu = await fetchJson(`https://api.violetics.pw/api/information/faktaunik?apikey=beta`)
let buttons = [
{buttonId: `${command}`, buttonText: {displayText: 'Next'}, type: 1}
]
let buttonMessage = {
text: anu.result,
footer: 'Press The Button Below',
buttons: buttons,
headerType: 2
}
hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'gempa-terbaru': {
m.reply(mess.wait)
var data = await fetchJson(`https://api.violetics.pw/api/information/gempa-terbaru?apikey=beta`)
var captnya = `
あTanggal : ${data.result.tanggal}
あJam : ${data.result.jam}
あDate Time : ${data.result.datetime}
あCoordinates : ${data.result.coordinates}
あLintang : ${data.result.lintang}
あBujur : ${data.result.bujur}
あMagnitude : ${data.result.magnitude}
あKedalaman : ${data.result.kedalaman}
あWilayah : ${data.result.wilayah}
あPotensi : ${data.result.potensi}
あDirasakan : ${data.result.dirasakan}
あShake Map : ${data.result.shakemap}\n`
hisoka.sendMessage(m.chat, {caption: captnya, image: { url: data.result.shakemap }}, {quoted: ftroli })
}
break
//━━━━━━━━━━━━━━━[ STICKER EFEK ]━━━━━━━━━━━━━━━━━//
case 'wasted': case 'joke': case 'hitler': case 'wanted': case 'greyscale': case 'trash': case 'cicle': case 'blur': case 'sepia': case 'invert': case 'affect': case 'picture': {
if (!/image/.test(mime)) return m.reply(`Kirim/Reply Foto`)
m.reply(mess.wait)
mee = await hisoka.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(mee)
meme = `https://leyscoders-api.herokuapp.com/api/img/${command}?url=${mem}&apikey=IkyOgiwara`
memek = await hisoka.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(memek)
}
break
//━━━━━━━━━━━━━━━[ SERTI MENU ]━━━━━━━━━━━━━━━━━//
case 'tololserti': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/toloserti?apikey=${lolkey}&name=${text}` }, caption: mess.success }, { quoted: m})
}
break
case 'fuckboy': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/fuckboy?apikey=${lolkey}&name=${text}` }, caption: mess.success }, { quoted: m})
}
break
case 'fuckgirl': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/fuckgirl?apikey=${lolkey}&name=${text}` }, caption: mess.success }, { quoted: m})
}
break
case 'bucinserti': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/bucinserti?apikey=${lolkey}&name=${text}` }, caption: mess.success }, { quoted: m})
}
break   
case 'pacarserti': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!args[0]) throw mess.textt
if (!args[1]) throw mess.textt2
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/pacarserti?apikey=${lolkey}&name1=${args[0]}&name2=${args[1]}` }, caption: mess.success }, { quoted: m})
}
break
case 'goodboy': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/goodboy?apikey=${lolkey}&name=${text}` }, caption: mess.success }, { quoted: m})
}
break   
case 'goodgirl': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/goodgirl?apikey=${lolkey}&name=${text}` }, caption: mess.success }, { quoted: m})
}
break   
case 'badboy': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/badboy?apikey=${lolkey}&name=${text}` }, caption: mess.success }, { quoted: m})
}
break   
case 'badgirl': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) throw mess.endLimit 
if (!text) throw mess.textt
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/badgirl?apikey=${lolkey}&name=${text}` }, caption: mess.success }, { quoted: m})
}
break   
//━━━━━━━━━━━━━━━[ SOUND ]━━━━━━━━━━━━━━━━━//
case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
ini_buffer = await getBuffer(`https://github.com/saipulanuar/Api-Github/raw/main/sound/${command}.mp3`)
await hisoka.sendMessage(m.chat, { audio: ini_buffer, ptt: true, mimetype: 'audio/mpeg' }, { quoted: ftroli })
break
case 'sound75':
hisoka.sendMessage(from, { audio: fs.readFileSync('Atak/sound75.mp3'), mimetype: 'audio/mp4', ptt: true}, { quoted: ftroli })
break
case 'sound76':
hisoka.sendMessage(from, { audio: fs.readFileSync('Atak/sound76.mp3'), mimetype: 'audio/mp4', ptt: true}, { quoted: ftroli })
break
case 'sound77':
hisoka.sendMessage(from, { audio: fs.readFileSync('Atak/sound77.mp3'), mimetype: 'audio/mp4', ptt: true}, { quoted: ftroli })
break
case 'sound78':
hisoka.sendMessage(from, { audio: fs.readFileSync('Atak/sound78.mp3'), mimetype: 'audio/mp4', ptt: true}, { quoted: ftroli })
break
case 'sound79':
hisoka.sendMessage(from, { audio: fs.readFileSync('Atak/sound79.mp3'), mimetype: 'audio/mp4', ptt: true}, { quoted: ftroli })
break
case 'sound80':
hisoka.sendMessage(from, { audio: fs.readFileSync('Atak/sound80.mp3'), mimetype: 'audio/mp4', ptt: true}, { quoted: ftroli })
break
case 'desah':
hisoka.sendMessage(from, { audio: fs.readFileSync('Atak/desah.mp3'), mimetype: 'audio/mp4', ptt: true}, { quoted: ftroli })
break
case 'runtime':{
await send5ButLoc(`${runtime(process.uptime())}`)
}
break
     // Menu Search
        case 'nickff':{
        const axios = require('axios')
if (!q) return m.reply(`Gunakan dengan cara ${command} *id*\n\n_Contoh_\n\n${command} 646675175`)
            axios.get(`https://api.lolhuman.xyz/api/freefire/${args[1]}?apikey=${lolkey}`)
            .then(({data}) => {
            let epep = `*🔎 CHECK NICK FREE FIRE 🔍*

ID : ${args[1]}
Nick : ${data.result}`
            m.reply(epep)
            
            })
            .catch((err) => {
                m.reply('Error')
            })
            break
            }
        case prefix+'nickml':{
        const axios = require('axios')
 var args1 = q.split("/")[0]
            var args2 = q.split("/")[1]                
            if (!q.includes("/")) return reply(`Gunakan dengan cara ${command} *id/server*\n\n_Contoh_\n\n${command} 617243212/8460`)
            axios.get(`https://api.lolhuman.xyz/api/mobilelegend/${args1}/${args2}?apikey=${lolkey}`)
            .then(({data}) => {
            let emel = `*🔎 CHECK NICK MOBILE LEGENDS 🔍*

ID : ${args[1]}
Nick : ${data.result}`
reply(emel)
            
            })
            .catch((err) => {
                reply('Error')
            })
            break
            }
        case prefix+'nickpubg':{
        const axios = require('axios')
            if (!q) return reply(`Gunakan dengan cara ${command} *id*\n\n_Contoh_\n\n${command} 5217933016`)
            axios.get(`https://api.lolhuman.xyz/api/pubg/${args[1]}?apikey=${lolkey}`)
            .then(({data}) => {
            let pubg = `*🔎 CHECK NICK PUBG 🔍*

ID : ${args[1]}
Nick : ${data.result}`
            reply(pubg)
            
            })
            .catch((err) => {
                reply('Error')
            })
            break
            }
        case prefix+'nickdomino':{
        const axios = require('axios')
               if (!q) return reply(`Gunakan dengan cara ${command} *id*\n\n_Contoh_\n\n${command} 291756557`)
            axios.get(`https://api.lolhuman.xyz/api/higghdomino/${args[1]}?apikey=${lolkey}`)
            .then(({data}) => {
            let domino = `*🔎 CHECK NICK HIGGS DOMINO 🔍*

ID : ${args[1]}
Nick : ${data.result}`
            m.reply(domino)
            limitAdd(sender, limit)
            })
            .catch((err) => {
                m.reply('Error')
            })
            break
            }
//━━━━━━━━━━━━━━━[ GROUPS MENU ]━━━━━━━━━━━━━━━━━//
case 'get':
if (!isCreator) throw mess.owner
if (!q) return reply("linknya?")
fetch(`${args[0]}`)
.then((res) => res.text())
.then((bu) => {
m.reply(bu)
})
break
case 'getcase':
if (!isCreator) throw mess.owner
if (args.length < 1) return m.reply ("*Mau nyari case apa kak*") 
const getCase = (cases) => {
return "case"+`'${cases}'`+fs.readFileSync("hisoka.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
}
m.reply (`${getCase(q)}`)
break
case 'setbiobot':
if (!isCreator) return m.reply(mess.owner)
if (!q) return m.reply('*Example* :\n#setbiobot text')
hisoka.setStatus(`${q}`)
m.reply(`*Sukses Ganti Bio Bot Menjadi:*\n${q}`)
break
case 'creategc':
if (!isCreator) return m.reply(mess.owner)
if (!q) return m.reply(`*Example* : #creategc namagroup`)
let cret = await hisoka.groupCreate(args.join(" "), [])
let response = await hisoka.groupInviteCode(cret.id)
teks = `┌──⭓ *Create Groups*
│
│⫹⫺Name : ${cret.subject}
│⫹⫺Owner : @${cret.owner.split("@")[0]}
│⫹⫺Time : ${moment(cret.creation * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")} WIB
│⫹⫺Link Groups: https://chat.whatsapp.com/${response}
│
└───────⭓
`
m.reply(teks)
break
case 'wame':
m.reply(`https://wa.me/${text}`)
break
case 'sc': case 'scrip': {
anu = `┌──⭓ *Info Scrip*
│
│ ⫹⫺ Library: Baileys-Md
│ ⫹⫺ Language : Javascript
│ ⫹⫺ Author: Dika Ardnt 
│ ⫹⫺ Scrip : https://github.com/DikaArdnt/Hisoka-Morou
│ ⫹⫺ Desc: Jangan DiBully Masih Pemula
│
└───────⭓`
let btn = [{
urlButton: {
displayText: 'Source Code',
url: 'https://github.com/DikaArdnt/Hisoka-Morou'
}
}, {
callButton: {
displayText: 'Number Phone Owner',
phoneNumber: '+62 882-9202-4190'
}
}, {
quickReplyButton: {
displayText: 'Status Bot',
id: 'ping'
}
}, {
quickReplyButton: {
displayText: 'Contact Owner',
id: 'owner'
}  
}, {
quickReplyButton: {
displayText: 'Script',
id: 'sc'
}
}]
let setbot = db.data.settings[botNumber]
if (setbot.templateImage) {
hisoka.send5ButImg(m.chat, anu, hisoka.user.name, global.thumb, btn, global.thumb)
} else if (setbot.templateGif) {
hisoka.send5ButGif(m.chat, anu, hisoka.user.name, global.visoka, btn, global.thumb)
} else if (setbot.templateVid) {
hisoka.send5ButVid(m.chat, anu, hisoka.user.name, global.visoka, btn, global.thumb)
} else if (setbot.templateMsg) {
hisoka.send5ButMsg(m.chat, anu, hisoka.user.name, btn)
} else if (setbot.templateLocation) {
hisoka.send5ButLoc(m.chat, anu, hisoka.user.name, global.thumb, btn)
}
}
break
//━━━━━━━━━━━━━━━[ SCRAPE ]━━━━━━━━━━━━━━━━━//
case 'setmenu': {
if (!isCreator) throw mess.owner
let setbot = db.data.settings[botNumber]
if (args[0] === 'templateImage'){
setbot.templateImage = true
setbot.templateVideo = false
setbot.templateGif = false
setbot.templateMsg = false
setbot.templateLocation = false
m.reply(mess.success)
} else if (args[0] === 'templateVideo'){
setbot.templateImage = false
setbot.templateVideo = true
setbot.templateGif = false
setbot.templateMsg = false
setbot.templateLocation = false
m.reply(mess.success)
} else if (args[0] === 'templateGif'){
setbot.templateImage = false
setbot.templateVideo = false
setbot.templateGif = true
setbot.templateMsg = false
setbot.templateLocation = false
m.reply(mess.success)
} else if (args[0] === 'templateMessage'){
setbot.templateImage = false
setbot.templateVideo = false
setbot.templateGif = false
setbot.templateMsg = true
setbot.templateLocation = false
m.reply(mess.success)
} else if (args[0] === 'templateLocation'){
setbot.templateImage = false
setbot.templateVideo = false
setbot.templateGif = false
setbot.templateMsg = false
setbot.templateLocation = true
m.reply(mess.success)
} else {
let sections = [
{
title: "CHANGE MENU BOT",
rows: [
{title: "Template Image", rowId: `setmenu templateImage`, description: `Change menu bot to Template Image`},
{title: "Template Video", rowId: `setmenu templateVideo`, description: `Change menu bot to Template Video`},
{title: "Template Gif", rowId: `setmenu templateGif`, description: `Change menu bot to Template Gif`},
{title: "Template Message", rowId: `setmenu templateMessage`, description: `Change menu bot to Template Message`},
{title: "Template Location", rowId: `setmenu templatelocation`, description: `Change menu bot to Template Location`}
]
},
]
hisoka.sendListMsg(m.chat, `Please select the menu you want to change!`, hisoka.user.name, `Hello Owner !`, `Click Here`, sections, m)
}
}
break
case 'm': case 'list': case 'menu': case 'help': case '?': {
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
anu = ` *${week}, ${calender}*
 ${dateIslamic}
 
 ➭ Nama : ${pushname}
 ➭ Status : ${isPremium ? '🎫 Premium':'Free'}
 ➭ Mode : ${publik ? "Public" : "Self"}
 ➭ TotalUser: ${Object.keys(global.db.data.users).length}
 ➭ Total Feature : ${totalFitur()}
 ➭ Running On : *RDP*
└───────⭓

*OWNER*
│あ < evaluate
│あ > evaluate
│あ $ exec
│あ => exec
│あ ${prefix}join
│あ ${prefix}spamsms
│あ ${prefix}self
│あ ${prefix}public
│あ ${prefix}del
│あ ${prefix}chat
│あ ${prefix}setppbot
│あ ${prefix}setppbot 'panjang' <reply foto>
│あ ${prefix}sewa <add 1d>
│あ ${prefix}sewa <del>
│あ ${prefix}listsewa
│あ ${prefix}ceksewa
│あ ${prefix}cowner <add>
│あ ${prefix}cowner <del>

 *ADMIN*
│あ ${prefix}linkgroup
│あ ${prefix}wame
│あ ${prefix}ephemeral
│あ ${prefix}setppgc
│あ ${prefix}setname
│あ ${prefix}setdesc
│あ ${prefix}group
│あ ${prefix}grupinfo
│あ ${prefix}editinfo
│あ ${prefix}add
│あ ${prefix}kick
│あ ${prefix}autosticker 1
│あ ${prefix}autosticker 0
│あ ${prefix}wame
│あ ${prefix}hidetag
│あ ${prefix}tagall
│あ ${prefix}antilink
│あ ${prefix}revoke
│あ ${prefix}mute
│あ ${prefix}promote
│あ ${prefix}demote

*Teks Pro Menu*
│あ ${prefix}magma
│あ ${prefix}hallowen-text
│あ ${prefix}neon-light
│あ ${prefix}broken-glass
│あ ${prefix}art-papper
│あ ${prefix}glossy
│あ ${prefix}water-color
│あ ${prefix}multi-color
│あ ${prefix}neon-devil
│あ ${prefix}sky-text
│あ ${prefix}luxury
│あ ${prefix}vintage
│あ ${prefix}writing

 *Downloader Menu*
│あ ${prefix}tiktok
│あ ${prefix}tiktokaudio
│あ ${prefix}ytmp3
│あ ${prefix}ytmp4
│あ ${prefix}igstalk
│あ ${prefix}xnxxsearch <query>
│あ ${prefix}xnxxvideo <link>
│あ ${prefix}spotify <link>
│あ ${prefix}spotifysearch <query>
│あ ${prefix}jooxplay <query>
│あ ${prefix}zippysearch <link>
│あ ${prefix}tiktokstalk
│あ ${prefix}githubstalk
│あ ${prefix}getmusic
│あ ${prefix}getvideo
│あ ${prefix}getname
│あ ${prefix}getppgc

*Search Menu*
│あ ${prefix}play
│あ ${prefix}yts
│あ ${prefix}lirik
│あ ${prefix}gimage
│あ ${prefix}pinterest
│あ ${prefix}wallpaper
│あ ${prefix}wikimedia
│あ ${prefix}ytsearch

*Cecan Menu*
│あ ${prefix}cecan
│あ ${prefix}chinese
│あ ${prefix}indonesia
│あ ${prefix}japan
│あ ${prefix}korea
│あ ${prefix}malaysia
│あ ${prefix}ptl
│あ ${prefix}thailand
│あ ${prefix}vietnam

*Video Menu*
│あ ${prefix}ghea
│あ ${prefix}ukty
│あ ${prefix}asupan
│あ ${prefix}rikagusriani
│あ ${prefix}bokep
│あ ${prefix}bocil

*Hewan Menu*
│あ ${prefix}fox
│あ ${prefix}dog
│あ ${prefix}panda
│あ ${prefix}panda2
│あ ${prefix}bird
│あ ${prefix}koala
│あ ${prefix}whale
│あ ${prefix}raccon
│あ ${prefix}cat
│あ ${prefix}kanguru
│あ ${prefix}goose

*Game Menu*
│あ ${prefix}goblokcek 
│あ ${prefix}jelekcek 
│あ ${prefix}gaycek
│あ ${prefix}lesbicek
│あ ${prefix}gantengcek 
│あ ${prefix}cantikcek
│あ ${prefix}begocek 
│あ ${prefix}suhucek
│あ ${prefix}pintercek
│あ ${prefix}jagocek
│あ ${prefix}nolepcek
│あ ${prefix}babicek
│あ ${prefix}bebancek
│あ ${prefix}baikcek
│あ ${prefix}jahatcek
│あ ${prefix}anjingcek
│あ ${prefix}haramcek
│あ ${prefix}pakboycek
│あ ${prefix}pakgirlcek
│あ ${prefix}sangecek 
│あ ${prefix}bapercek
│あ ${prefix}fakboycek
│あ ${prefix}alimcek
│あ ${prefix}suhucek
│あ ${prefix}fakgirlcek
│あ ${prefix}kerencek
│あ ${prefix}wibucek
│あ ${prefix}pasarkascek
│あ ${prefix}jadian
│あ ${prefix}apakah
│あ ${prefix}rate
│あ ${prefix}kapankah
│あ ${prefix}bisakah
│あ ${prefix}kuismath
│あ ${prefix}tebak lagu
│あ ${prefix}tebak gambar
│あ ${prefix}tebak kata
│あ ${prefix}tebak kalimat
│あ ${prefix}tebak lirik
│あ ${prefix}tebak lontong

*Random Image*
│あ ${prefix}aesthetic
│あ ${prefix}blackpink
│あ ${prefix}bonekachucky
│あ ${prefix}wallpaperhacker
│あ ${prefix}wallpaperpubg
│あ ${prefix}wallpaperislamic
│あ ${prefix}teknologi
│あ ${prefix}mountain
│あ ${prefix}cyberspace
│あ ${prefix}programming
│あ ${prefix}darkjoke
│あ ${prefix}meme
│あ ${prefix}doraemon
│あ ${prefix}pentol
│あ ${prefix}motor
│あ ${prefix}renungan
│あ ${prefix}pokemon
│あ ${prefix}tatasurya

*Text Pro Menu*
│あ ${prefix}3dchristmas
│あ ${prefix}3ddeepsea
│あ ${prefix}americanflag
│あ ${prefix}3dscifi
│あ ${prefix}3drainbow
│あ ${prefix}3dwaterpipe
│あ ${prefix}halloweenskeleton
│あ ${prefix}sketch
│あ ${prefix}bluecircuit
│あ ${prefix}space
│あ ${prefix}metallic
│あ ${prefix}fiction
│あ ${prefix}greenhorror
│あ ${prefix}transformer
│あ ${prefix}berry
│あ ${prefix}thunder
│あ ${prefix}magma
│あ ${prefix}3dcrackedstone
│あ ${prefix}3dneonlight
│あ ${prefix}impressiveglitch
│あ ${prefix}naturalleaves
│あ ${prefix}fireworksparkle
│あ ${prefix}matrix
│あ ${prefix}dropwater
│あ ${prefix}harrypotter
│あ ${prefix}foggywindow
│あ ${prefix}neondevils
│あ ${prefix}christmasholiday
│あ ${prefix}3dgradient
│あ ${prefix}blackpink
│あ ${prefix}gluetext

 *Ephoto Menu*
│あ ${prefix}1917
│あ ${prefix}3d-crack-text-effect-online
│あ ${prefix}3d-underwater
│あ ${prefix}3d-wood
│あ ${prefix}3d-wood2
│あ ${prefix}3damerican-flag
│あ ${prefix}3dgalaxy-metal
│あ ${prefix}3dglue-realistic
│あ ${prefix}3dgold
│あ ${prefix}3dgradient
│あ ${prefix}3dgradient2
│あ ${prefix}3dmetal-effect
│あ ${prefix}3dmetal-text
│あ ${prefix}3dmulticolor-papercut
│あ ${prefix}3dpig-gif
│あ ${prefix}3drose-gold
│あ ${prefix}3druby-stone
│あ ${prefix}3dsand-engraved
│あ ${prefix}3dshiny-metallic
│あ ${prefix}3dsilver
│あ ${prefix}3dspace
│あ ${prefix}3dsparkle-christmas
│あ ${prefix}3dsub-zombie
│あ ${prefix}3dtext-effect
│あ ${prefix}3dtext-effect2
│あ ${prefix}3dtext-effect3
│あ ${prefix}3dtext-pig
│あ ${prefix}3dvalentine-cards
│あ ${prefix}3dvintage-light-bulb
│あ ${prefix}3dxmas-cards
│あ ${prefix}3dxmas-cards2
│あ ${prefix}83day-card
│あ ${prefix}83day-card2
│あ ${prefix}83day-card3
│あ ${prefix}83day-card4
│あ ${prefix}advanced-glow
│あ ${prefix}ahri-league-of-legends
│あ ${prefix}alice-league-of-kings
│あ ${prefix}amily-arena-of-valor
│あ ${prefix}angels-wings
│あ ${prefix}anonymous-neon
│あ ${prefix}art-shader
│あ ${prefix}avengers
│あ ${prefix}azzenka-league-of-kings
│あ ${prefix}balloon-noel
│あ ${prefix}balloon-text
│あ ${prefix}balloons-cards
│あ ${prefix}balloons-love
│あ ${prefix}art-shader
│あ ${prefix}bear
│あ ${prefix}bear2
│あ ${prefix}bee
│あ ${prefix}birthday-cake1
│あ ${prefix}birthday-cake2
│あ ${prefix}birthday-cake3
│あ ${prefix}birthday-cake4
│あ ${prefix}birthday-cake5
│あ ${prefix}birthday-cake6
│あ ${prefix}birthday-cake7
│あ ${prefix}birthday-cake8
│あ ${prefix}birthday-cake9
│あ ${prefix}birthday-cake10
│あ ${prefix}birthday-cards
│あ ${prefix}birthdayfoil-balloon
│あ ${prefix}blackpink
│あ ${prefix}blackpink-neon
│あ ${prefix}blackskin-snake
│あ ${prefix}blood-steel
│あ ${prefix}blood-frosted
│あ ${prefix}blood-text
│あ ${prefix}blood-text2
│あ ${prefix}blood-wall
│あ ${prefix}blue-effect
│あ ${prefix}blue-neon
│あ ${prefix}blueglass-effect
│あ ${prefix}bokeh-text
│あ ${prefix}boom-comic
│あ ${prefix}broken-glass
│あ ${prefix}buffalo
│あ ${prefix}bulb-effect
│あ ${prefix}bull
│あ ${prefix}cake-text
│あ ${prefix}cake-text2
│あ ${prefix}cake-text3
│あ ${prefix}candy-text
│あ ${prefix}captain-america
│あ ${prefix}card-christmas
│あ ${prefix}card-christmas2
│あ ${prefix}cartoon-graffiti

 *Foto Funia Menu*
│あ ${prefix}airline
│あ ${prefix}arrow-signs
│あ ${prefix}balloon
│あ ${prefix}beach-sign
│あ ${prefix}birthday-cake
│あ ${prefix}beach-sign
│あ ${prefix}blood_writing
│あ ${prefix}books
│あ ${prefix}bracelet
│あ ${prefix}cemetery-gates
│あ ${prefix}chalkboard
│あ ${prefix}christmas-writing
│あ ${prefix}cinema-ticket
│あ ${prefix}cookies_writing
│あ ${prefix}cross_stitch_text
│あ ${prefix}denim-emdroidery
│あ ${prefix}einstein
│あ ${prefix}foggy_window_writing
│あ ${prefix}fortune-cookie
│あ ${prefix}frosty-window-writing
│あ ${prefix}haunted-hotel
│あ ${prefix}heart_tattoo
│あ ${prefix}lifebuoy
│あ ${prefix}light-graffiti
│あ ${prefix}lipstick-writing
│あ ${prefix}love-lock
│あ ${prefix}movie_marquee
│あ ${prefix}neon
│あ ${prefix}neon-writing
│あ ${prefix}nightmare-writing
│あ ${prefix}noir
│あ ${prefix}pendant
│あ ${prefix}plane-banner
│あ ${prefix}retro-wave
│あ ${prefix}sand_writing
│あ ${prefix}snow_writing
│あ ${prefix}snow-sign
│あ ${prefix}soup_letters
│あ ${prefix}street-sign
│あ ${prefix}surfing-board
│あ ${prefix}tree_carving
│あ ${prefix}typewriter
│あ ${prefix}water-writing
│あ ${prefix}watercolour-text
│あ ${prefix}wooden_sign
│あ ${prefix}yacht

 *Anime Menu*
│あ ${prefix}waifu
│あ ${prefix}neko
│あ ${prefix}shinobu
│あ ${prefix}megumin
│あ ${prefix}cosplay
│あ ${prefix}shota
│あ ${prefix}loli
│あ ${prefix}husbu
│あ ${prefix}ppcp
│あ ${prefix}wallml
│あ ${prefix}shinomiya
│あ ${prefix}yumeko
│あ ${prefix}tejina
│あ ${prefix}chiho
│あ ${prefix}baruto
│あ ${prefix}kaori
│あ ${prefix}shizuka
│あ ${prefix}kaga
│あ ${prefix}kotori
│あ ${prefix}mikasa
│あ ${prefix}akiyama
│あ ${prefix}gremory
│あ ${prefix}isuzu
│あ ${prefix}shina
│あ ${prefix}kagura
│あ ${prefix}shinka
│あ ${prefix}eba
│あ ${prefix}elaina
│あ ${prefix}yuri
│あ ${prefix}erza
│あ ${prefix}hinata
│あ ${prefix}minato
│あ ${prefix}naruto
│あ ${prefix}sagiri
│あ ${prefix}nezuko
│あ ${prefix}rize
│あ ${prefix}anna
│あ ${prefix}deidara
│あ ${prefix}yuki
│あ ${prefix}asuna
│あ ${prefix}ayuzawa
│あ ${prefix}chitoge
│あ ${prefix}emilia
│あ ${prefix}hestia
│あ ${prefix}inori
│あ ${prefix}itachi
│あ ${prefix}madara
│あ ${prefix}sakura
│あ ${prefix}sasuke
│あ ${prefix}akira
│あ ${prefix}itori
│あ ${prefix}kurumi
│あ ${prefix}miku

 *Nsfw Menu*
│あ ${prefix}nsfwloli
│あ ${prefix}ahegao
│あ ${prefix}ass
│あ ${prefix}bdsm
│あ ${prefix}blowjob
│あ ${prefix}cuckold
│あ ${prefix}cum
│あ ${prefix}ero
│あ ${prefix}femdom
│あ ${prefix}foot
│あ ${prefix}gangbanh
│あ ${prefix}glasses
│あ ${prefix}hentai
│あ ${prefix}jahy
│あ ${prefix}manga
│あ ${prefix}mstb
│あ ${prefix}neko
│あ ${prefix}neko2
│あ ${prefix}orgy
│あ ${prefix}panties
│あ ${prefix}pussy
│あ ${prefix}tentacles
│あ ${prefix}things
│あ ${prefix}yuri
│あ ${prefix}zettai

*Random Menu*
│あ ${prefix}namapeople
│あ ${prefix}faktaunik
│あ ${prefix}katabijak
│あ ${prefix}pantun
│あ ${prefix}bucin
│あ ${prefix}quotes
│あ ${prefix}randomnama
│あ ${prefix}cry
│あ ${prefix}kill
│あ ${prefix}hug
│あ ${prefix}pat
│あ ${prefix}lick
│あ ${prefix}kiss
│あ ${prefix}bite
│あ ${prefix}yeet
│あ ${prefix}bully
│あ ${prefix}bonk
│あ ${prefix}wink
│あ ${prefix}poke
│あ ${prefix}nom
│あ ${prefix}slap
│あ ${prefix}smile
│あ ${prefix}wave
│あ ${prefix}awoo
│あ ${prefix}blush
│あ ${prefix}smug
│あ ${prefix}glomp
│あ ${prefix}happy
│あ ${prefix}dance
│あ ${prefix}cringe
│あ ${prefix}cuddle
│あ ${prefix}highfive
│あ ${prefix}handhold
│あ ${prefix}dadu
│あ ${prefix}patrick
│あ ${prefix}amongus
│あ ${prefix}gawrgura
│あ ${prefix}anjing
│あ ${prefix}bucinstick

 *Sound Menu*
│あ ${prefix}desah
│あ  ${prefix}sound1
│あ ${prefix}sound2
│あ ${prefix}sound3
│あ ${prefix}sound4
│あ ${prefix}sound5
│あ ${prefix}sound6
│あ ${prefix}sound7
│あ ${prefix}sound8
│あ ${prefix}sound9
│あ ${prefix}sound10
│あ ${prefix}sound11
│あ ${prefix}sound12
│あ ${prefix}sound13
│あ ${prefix}sound14
│あ ${prefix}sound15
│あ ${prefix}sound16
│あ ${prefix}sound17
│あ ${prefix}sound18
│あ ${prefix}sound19
│あ ${prefix}sound20
│あ ${prefix}sound21
│あ ${prefix}sound22
│あ ${prefix}sound23
│あ ${prefix}sound24
│あ ${prefix}sound25
│あ ${prefix}sound26
│あ ${prefix}sound27
│あ ${prefix}sound28
│あ ${prefix}sound29
│あ ${prefix}sound30
│あ ${prefix}sound31
│あ ${prefix}sound32
│あ ${prefix}sound33
│あ ${prefix}sound34
│あ ${prefix}sound35
│あ ${prefix}sound36
│あ ${prefix}sound37
│あ ${prefix}sound38
│あ ${prefix}sound39
│あ ${prefix}sound40
│あ ${prefix}sound41
│あ ${prefix}sound42
│あ ${prefix}sound43
│あ ${prefix}sound44
│あ ${prefix}sound45
│あ ${prefix}sound46
│あ ${prefix}sound47
│あ ${prefix}sound48
│あ ${prefix}sound49
│あ ${prefix}sound50
│あ ${prefix}sound51
│あ ${prefix}sound52
│あ ${prefix}sound53
│あ ${prefix}sound54
│あ ${prefix}sound55
│あ ${prefix}sound56
│あ ${prefix}sound57
│あ ${prefix}sound58
│あ ${prefix}sound59
│あ ${prefix}sound60
│あ ${prefix}sound61
│あ ${prefix}sound62
│あ ${prefix}sound63
│あ ${prefix}sound64
│あ ${prefix}sound65
│あ ${prefix}sound66
│あ ${prefix}sound67
│あ ${prefix}sound68
│あ ${prefix}sound69
│あ ${prefix}sound70
│あ ${prefix}sound71
│あ ${prefix}sound72
│あ ${prefix}sound73
│あ ${prefix}sound74
│あ ${prefix}sound75
│あ ${prefix}sound76
│あ ${prefix}sound77
│あ ${prefix}sound78
│あ ${prefix}sound79
│あ ${prefix}sound80

*News Menu*
│あ ${prefix}antara
│あ ${prefix}bbc
│あ ${prefix}cnbc
│あ ${prefix}cnn
│あ ${prefix}daily
│あ ${prefix}detik
│あ ${prefix}fajar

*Media Menu*
│あ ${prefix}ssweb
│あ ${prefix}carbon
│あ ${prefix}carbon2
│あ ${prefix}carbon3
│あ ${prefix}nukiskiri
│あ ${prefix}nukiskanan
│あ ${prefix}foliokiri
│あ ${prefix}foliokanan
│あ ${prefix}gsuggest
│あ ${prefix}quotemaker
│あ ${prefix}quotemaker2
│あ ${prefix}quotemaker3

*Fun Menu*
│あ ${prefix}simih
│あ ${prefix}halah
│あ ${prefix}hilih
│あ ${prefix}huluh
│あ ${prefix}heleh
│あ ${prefix}holoh
│あ ${prefix}jadian
│あ ${prefix}jodohku
│あ ${prefix}delttt
│あ ${prefix}tictactoe
│あ ${prefix}family100
│あ ${prefix}tebak]
│あ ${prefix}math
│あ ${prefix}suitpvp

 *Convert Menu*
│あ ${prefix}attp
│あ ${prefix}ttp
│あ ${prefix}toimage
│あ ${prefix}removebg
│あ ${prefix}sticker
│あ ${prefix}emojimix
│あ ${prefix}emojimix2
│あ ${prefix}tovideo
│あ ${prefix}togif
│あ ${prefix}tourl
│あ ${prefix}tovn
│あ ${prefix}tomp3
│あ ${prefix}toaudio
│あ ${prefix}ebinary
│あ ${prefix}dbinary
│あ ${prefix}styletext
│あ ${prefix}smeme
│あ ${prefix}swm

*Other Menu*
│あ ${prefix}nenen
│あ ${prefix}simp
│あ ${prefix}simih
│あ ${prefix}bitly [url]
│あ ${prefix}cuttly [url]
│あ ${prefix}tinyurl [url]
│あ ${prefix}shorturl [url]
│あ ${prefix}translate

 *Main Menu*
│あ ${prefix}ping
│あ ${prefix}owner
│あ ${prefix}menu / ${prefix}help / ${prefix}?
│あ ${prefix}infochat
│あ ${prefix}quoted
│あ ${prefix}listpc
│あ ${prefix}listgc
│あ ${prefix}listonline
│あ ${prefix}speedtest

*Database Menu*
│あ ${prefix}setcmd
│あ ${prefix}listcmd
│あ ${prefix}delcmd
│あ ${prefix}lockcmd
│あ ${prefix}addmsg
│あ ${prefix}listmsg
│あ ${prefix}getmsg
│あ ${prefix}delmsg

 *Anonymous Menu*
│あ ${prefix}anonymous
│あ ${prefix}start
│あ ${prefix}next
│あ ${prefix}keluar

 *Islamic Menu*
│あ ${prefix}iqra
│あ ${prefix}hadist
│あ ${prefix}alquran
│あ ${prefix}juzamma
│あ ${prefix}kisahnabi
│あ ${prefix}doaharian
│あ ${prefix}tafsirsurah
│あ ${prefix}surahpendek
│あ ${prefix}asmaulhusna
│あ ${prefix}alkitab-search

 *Sticker Efek*
│あ ${prefix}wasted
│あ ${prefix}joke
│あ ${prefix}hitler
│あ ${prefix}wanted
│あ ${prefix}greyscale
│あ ${prefix}trash
│あ ${prefix}cicle
│あ ${prefix}blur
│あ ${prefix}sepia
│あ ${prefix}invert
│あ ${prefix}affect
│あ ${prefix}picture

 *Voice Changer*
│あ ${prefix}bass
│あ ${prefix}blown
│あ ${prefix}deep
│あ ${prefix}earrape
│あ ${prefix}fast
│あ ${prefix}fat
│あ ${prefix}nightcore
│あ ${prefix}reverse
│あ ${prefix}robot
│あ ${prefix}slow
│あ ${prefix}tupai
`
let btn = [{
quickReplyButton: {
displayText: 'Owner',
id: '#owner'
}
}, {
quickReplyButton: {
displayText: 'Speed',
id: '#ping'
}  
}]
let timb = 'https://wa.me/6285850063401'
let butts = [
{buttonId: '.owner', buttonText: {displayText: 'Owner'}, type: 1},
{buttonId: '.ping', buttonText: {displayText: 'Speed'}, type: 1}
]
let buttonMessage = {
document: { url: timb },
fileName: `${ucapanWaktu} ${pushname}`,
fileLength: 88789090999999999, //fake size by hyzer:v
pageCount: 999, // berapa halaman?
caption: anu,
footer: hisoka.user.name,
buttons: butts,
headerType: 4,
contextInfo:{externalAdReply:{
title:`${ucapanWaktu} ${pushname}`,
mediaType: 1,
renderLargerThumbnail: true , 
showAdAttribution: true, 
jpegThumbnail: fs.readFileSync('./media/kitzuna.jpg'),
mediaUrl: "https://github.com/DikaArdnt/Hisoka-Morou", 
thumbnail: fs.readFileSync('./media/kitzuna.jpg'),
sourceUrl: "https://yandex.com/"
}}
}
await hisoka.sendPresenceUpdate('composing', m.chat) // gw tambahin auto ketiknya :v, dibagian menu doang sih
let setbot = db.data.settings[botNumber]
if (setbot.templateImage) {
hisoka.send5ButImg(m.chat, anu, hisoka.user.name, global.thumb, btn, global.thumb)
} else if (setbot.templateGif) {
hisoka.send5ButGif(m.chat, anu, hisoka.user.name, global.visoka, btn, global.thumb)
} else if (setbot.templateVid) {
hisoka.send5ButVid(m.chat, anu, hisoka.user.name, global.visoka, btn, global.thumb)
} else if (setbot.templateMsg) {
hisoka.sendMessage(m.chat, buttonMessage, { quoted: ftroli })  
} else if (setbot.templateLocation) {
hisoka.send5ButLoc(m.chat, anu, hisoka.user.name, global.thumb, btn)
}
}
break
//━━━━━━━━━━━━━━━[ AKHIR DARI SEGALANYA ]━━━━━━━━━━━━━━━━━//
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply(mess.owner)
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
                    if (!isCreator) return m.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return m.reply(mess.owner)
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
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    hisoka.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
