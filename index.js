
const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    prepareMessageFromContent, 
    relayWAMessage,
    GroupSettingChange
} = require('@adiwajshing/baileys')
const { color, bgcolor } = require('./lib/color')
const { help } = require('./src/help')
const imageToBase64 = require('image-to-base64')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { fetchJson } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const { getLevelingXp, getLevelingId, addLevelingXp, addLevelingLevel, addLevelingId, getLevelingLevel, getUserRank, addCooldown } = require('./lib/leveling.js')
const fs = require('fs')
const moment = require('moment-timezone')
const { exec } = require('child_process')

const kagApi = require('@kagchi/kag-api')
const fetch = require('node-fetch')
const ffmpeg = require('fluent-ffmpeg')
const { removeBackgroundFromImageFile } = require('remove.bg')
const lolis = require('lolis.life')
const axios = require('axios')
const loli = new lolis()
const { webp2gifFile } = require("./lib/functions.js")
const antifake = JSON.parse(fs.readFileSync('./new/antifake.json'))
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./src/nsfw.json'))
const antilink = JSON.parse(fs.readFileSync('./new/antilink.json'))
const samih = JSON.parse(fs.readFileSync('./new/simi.json'))
const ban = JSON.parse(fs.readFileSync('./datauser/banned.json'))
const imgbb = require('imgbb-uploader');
const _leveling = JSON.parse(fs.readFileSync('./new/leveling.json'))

const ownername = 'supra-ofc'
let thumbnail = fs.readFileSync('./image/odc.jpeg')

prefix = '#'
blocked = []
const vcard = 'BEGIN:VCARD\n'

+ 'VERSION:3.0\n'

+ 'FN: SUPRA \n' // Nama

+ 'ORG:SUPRA;\n' // Nama bot

+ 'TEL;type=CELL;type=VOICE;waid=559391919748:+55 93 9191-9748\n' // Nomor bot

+ 'END:VCARD' 

const  { ind } = require(`./help`)
lang = ind 

//times
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')

function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`
}

async function starts() {
	const supra = new WAConnection()
	supra.logger.level = 'warn'
	console.log(banner.string)
	supra.on('qr', () => {
		console.log(color('[','white'), color('!','red'), color(']','white'), color(' Digitalize o c??digo qr acima'))
	})

	fs.existsSync('./Suprazi.json') && supra.loadAuthInfo('./Suprazi.json')
	supra.on('connecting', () => {
		start('2', 'LHANNA CONNECTING...')
	})
	supra.on('open', () => {
		success('2', 'LHANNA CONECTADO')
	})
	await supra.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./Suprazi.json', JSON.stringify(supra.base64EncodedAuthInfo(), null, '\t'))

		
		        supra.on('group-participants-update', async (anu) => {
		        if(antifake.includes(anu.jid)) {
	const mdata = await supra.groupMetadata(anu.jid)
			if (anu.action == 'add'){
				num = anu.participants[0]
				if(!num.split('@')[0].startsWith(55)) {
				supra.sendMessage(mdata.id, 'Aqui n??o ?? permitido n??meros estrangeiros bye bye???? ??????', MessageType.text)							
				setTimeout(async function () {
							console.log(color('[','white'), color('!','red'), color(']','white'), color('BANINDO O N??MERO FAKE...','red'))
				supra.groupRemove(mdata.id, [num])
					}, )
				}
			}
		}		
		if (!welkom.includes(anu.jid)) return
      try {
           mem = anu.participants[0]
			const mdata = await supra.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
			fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '5593991919748-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${mdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;Denz;;;\nFN:Denz\nitem1.TEL;waid=5593991919748:5593991919748\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
		    num = anu.participants[0]
			try {
			ppimg = await supra.getProfilePicture(`${num.split('@')[0]}@c.us`)
			} catch {
			ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
			}
			let buff = await getBuffer(ppimg)
			masuk =`Hola @${num.split('@')[0]}\nBem-vindo ao gp ${mdata.subject}`
            supra.sendMessage(mdata.id, masuk, MessageType.text, { quoted: fkontakk, thumbnail: fs.readFileSync('./image/odc.jpeg'), contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: `Bem-vindo ao gp ${mdata.subject}`,body:"",mediaType:"2",thumbnail:buff,mediaUrl:`https://youtu.be/CKtHg1jBREY`}}})
			} else if (anu.action == 'remove') {
			fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '55939919748-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${mdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;Denz;;;\nFN:Denz\nitem1.TEL;waid=5593991919748:5593991919748\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
			num = anu.participants[0]
			try {
			ppimg = await supra.getProfilePicture(`${num.split('@')[0]}@c.us`)
			} catch {
			ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
			}
			let buff = await getBuffer(ppimg)
			keluar =`Adeus @${num.split('@')[0]}\nN??o volte mas.`
            supra.sendMessage(mdata.id, keluar, MessageType.text, { quoted: fkontakk, thumbnail: fs.readFileSync('./image/odc.jpeg'), contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: `De ${mdata.subject}`,body:"",mediaType:"2",thumbnail:buff,mediaUrl:`https://youtu.be/CKtHg1jBREY`}}})
			} else if (anu.action == 'promote') {
fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '5593991919748-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${mdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;Denz;;;\nFN:Denz\nitem1.TEL;waid=5593991919748:5593991919748\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
num = anu.participants[0]
teks = `*P R O M O T E - D E T E C T E D*\n Username: @${num.split('@')[0]}\n Time : ${moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')}\n Group: ${mdata.subject}`
supra.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [num]}, quoted: fkontakk})
console.log(color('|TRM|'), color(`Promote Member ${num.split('@')[0]} In ${mdata.subject}`,  'cyan'))
} 
else if (anu.action == 'demote') {
fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${mdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;Denz;;;\nFN:Denz\nitem1.TEL;waid=6285866295942:6285866295942\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
num = anu.participants[0]
teks = `*D E M O T E - D E T E C T E D*\n Username: @${num.split('@')[0]}\n Time : ${moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')}\n Group: ${mdata.subject}`
supra.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [num]}, quoted: fkontakk})
console.log(color('|TRM|'), color(`Demote Admin ${num.split('@')[0]} In ${mdata.subject}`,  'cyan'))
}
		    } catch (e) {
			console.log('Error : %s', color(e, 'red'))
		    }
	        })	       
	supra.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})
	supra.on("CB:Call", json => {
		let call;
		calling = JSON.parse(JSON.stringify(json))
		call = calling[1].from
		setTimeout(function(){
			supra.sendMessage(call, '[???] Sistema de auto block ativo\nmeu criador n??o gosta que me ligu??m\nse deseja ser desbloqueado converse com o supra!!\nhttps//wa.me/559391919748', MessageType.text)
			.then(() => supra.blockUser(call, "add"))
			}, 100);
		})
	
	 supra.on('CB:action,,battery', json => {
		global.batteryLevelStr = json[2][0][1].value
		global.batterylevel = parseInt(batteryLevelStr)
		baterai = batterylevel
		if (json[2][0][1].live == 'true') charging = true
		if (json[2][0][1].live == 'false') charging = false
	    })
		global.prefix
		global.batrei = global.batrei ? global.batrei : []
		supra.on('CB:action,,battery', json => {
		const batteryLevelStr = json[2][0][1].value
		const batterylevel = parseInt(batteryLevelStr)
		global.batrei.push(batterylevel)
	    }) 
	supra.on('chat-update', async (mek) => {
		try {
                        if (!mek.hasNewMessage) return
                        mek = JSON.parse(JSON.stringify(mek)).messages[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
						mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const insom = from.endsWith('@g.us')		
			const nameReq = insom ? mek.participant : mek.key.remoteJid
			pushname2 = supra.contacts[nameReq] != undefined ? supra.contacts[nameReq].vname || supra.contacts[nameReq].notify : undefined
			const apiKey = 'Your-Api-Key'
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
			
			
			mess = {
				wait: 'AGUARDE UM POUCO????',
				success: 'PRONTINHO??????',
				error: {
					stick: 'ERROR!!! TENTE MAS TARDE????',
					Iv: 'LINK INCORRETO! MANDA LINK V??LIDO POHA...'
				},
				only: {
					group: '??? ESSE COMADO S?? PODE SER USADO EM GRUPOS???',					
					ownerB: '??? COMANDO S?? PODE SER USADO PELO *SUPRA*',
					admin: '???ESSE COMANDO ?? APENAS PARA ADM DO GRUPO???',
					Badmin: 'PRECISO SER ADM PARA RESPONDER ESSE COMANDO'
				}
			}
			
				const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
					const buttonMessage = {
						contentText: text1,
						footerText: desc1,
						buttons: but,
						headerType: 1,
						};
						supra.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options);
					};
				const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
					them = gam1
					mediaxxaa = await supra.prepareMessage(id, them, MessageType.location, {thumbnail: them})
					locmhan = mediaxxaa.message["ephemeralMessage"] ? mediaxxaa.message.ephemeralMessage : mediaxxaa
					const buttonMessages = {
						locationMessage: locmhan.message.locationMessage,
						contentText: text1,
						footerText: desc1,
						buttons: but,
						headerType: 6
						}
						supra.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
						}
				const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
					them = vid1
					mediaxxaa = await supra.prepareMessage(id, them, MessageType.video)
					vimhan = mediaxxaa.message["ephemeralMessage"] ? mediaxxaa.message.ephemeralMessage : mediaxxaa
					const buttonMessages = {
						videoMessage: vimhan.message.videoMessage,
						contentText: text1,
						footerText: desc1,
						buttons: but,
						headerType: 5
						}
						supra.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
						}
				const sendButImage = async(id, text1, desc1, vid1, but = [], options = {}) => {
					them = vid1
					mediaxxaa = await supra.prepareMessage(id, them, MessageType.image, {thumbnail: Buffer.alloc(0)})
					imgmhan = mediaxxaa.message["ephemeralMessage"] ? mediaxxaa.message.ephemeralMessage : mediaxxaa
					const buttonMessages = {
						imageMessage: imgmhan.message.imageMessage,
						contentText: text1,
						footerText: desc1,
						buttons: but,
						headerType: 4
						}
					supra.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
				}
	            const nay1 = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": `Supra(Newton)`, 'jpegThumbnail': fs.readFileSync('image/odc.jpeg')} } }					
	const supra2 ={"key": {   "fromMe": false,"participant":"0@s.whatsapp.net",   "remoteJid": "556181496039-1625944593@g.us"  }, "message": {orderMessage: {itemCount: 999999,status: 200, thumbnail: fs.readFileSync('image/odc.jpeg'), surface: 200, message: `???NEWTON (SUPRA)?????????`, orderTitle: 'supra', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}	
	        const totalchat = await supra.chats.all()          
			const botNumber = supra.user.jid
			const ownerNumber = ["559391919748@s.whatsapp.net"] // COLOQUE SEU N??MERO AQUI SEM ESPA??OS
			const isGroup = from.endsWith('@g.us')
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const groupMetadata = isGroup ? await supra.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isBanned = ban.includes(sender)
			const isAntiLink = isGroup ? antilink.includes(from) : false	
			const isAntiFake = isGroup ? antifake.includes(from) : false 
			const isLevelingOn = isGroup ? _leveling.includes(from) : true
			const isOwner = ownerNumber.includes(sender)
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				supra.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				supra.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? supra.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : supra.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
					/******** PUXAR FOTO DO CAT??LOGO ***********/
			try {
		pporang = await supra.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
		      } catch {
		pporang = 'https://i.pinimg.com/736x/eb/99/ff/eb99ff0be150691f744183e690f848ce.jpg'
		      }
		const ofrply = await getBuffer(pporang)
		try {
		pporang2 = await supra.getProfilePicture(from)
		      } catch {
		pporang2 = 'https://i.pinimg.com/736x/eb/99/ff/eb99ff0be150691f744183e690f848ce.jpg'
		      }
		const ofrply2 = await getBuffer(pporang2)
		try {
		pporang3 = await supra.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
		      } catch {
		pporang3 = 'https://i.pinimg.com/736x/eb/99/ff/eb99ff0be150691f744183e690f848ce.jpg'
		      }
		const suprazs = await getBuffer(pporang3)
	/************************************************/
			        const fotothumb = {text: 'oi', sendEphemeral: true,"externalAdReply": {"title": `?????? N??O CLIQUE AQUI!!!???`,"body": "","previewType": "PHOTO","thumbnailUrl": "","thumbnail": suprazs, "sourceUrl": `oi https://api.whatsapp.com/send?phone=5593991919748&text=Salva a?? Supra`},mentionedJid:[sender]
        }
        //_PATENTE 
const nivelAtual = getLevelingLevel(sender)
var patt = 'Bronze I????'
if (nivelAtual === 1) {patt = 'Bronze  I????' } else if (nivelAtual === 2) {patt = 'Bronze II????'} else if (nivelAtual === 3) {patt = 'Bronze  III????'} else if (nivelAtual === 4) {patt = 'Bronze  IV????'} else if (nivelAtual === 5) {patt = 'Bronze  V????'} else if (nivelAtual === 6) {patt = 'Prata I????'} else if (nivelAtual === 7) {patt = 'Prata II????'} else if (nivelAtual === 8) {patt = 'Prata III????'} else if (nivelAtual === 9) {patt = 'Prata IV????'} else if (nivelAtual === 10) {patt = 'Prata V????'} else if (nivelAtual === 11) {patt = 'Ouro I????'} else if (nivelAtual === 12) {patt = 'Ouro II????'} else if (nivelAtual === 13) {patt = 'Ouro III????'} else if (nivelAtual === 14) {patt = 'Ouro IV????'} else if (nivelAtual === 15) {patt = 'Ouro V????'} else if (nivelAtual === 16) {patt = 'Campe??o I????'} else if (nivelAtual === 17) {patt = 'Campe??o II????'} else if (nivelAtual === 18) {patt = 'Campe??o III????'} else if (nivelAtual === 19) {patt = 'Campe??o IV????'} else if (nivelAtual === 20) {patt = 'Campe??o V????'} else if (nivelAtual === 21) {patt = 'Diamante I ????'} else if (nivelAtual === 22) {patt = 'Diamante II ????'} else if (nivelAtual === 23) {patt = 'Diamante III ????'} else if (nivelAtual === 24) {patt = 'Diamante IV ????'} else if (nivelAtual === 25) {patt = 'Diamante V ????'} else if (nivelAtual === 26) {patt = 'Mestre I ????'} else if (nivelAtual === 27) {patt = 'Mestre II ????'} else if (nivelAtual === 28) {patt = 'Mestre III ????'} else if (nivelAtual === 29) {patt = 'Mestre IV ????'} else if (nivelAtual === 30) {patt = 'Mestre V ????'} else if (nivelAtual === 31) {patt = 'M??tico I ????'} else if (nivelAtual === 32) {patt = 'M??tico II ????'} else if (nivelAtual === 33) {patt = 'M??tico III ????'} else if (nivelAtual === 34) {patt = 'M??tico IV ????'} else if (nivelAtual === 35) {patt = 'M??tico V ????'} else if (nivelAtual === 36) {patt = 'God I????'} else if (nivelAtual === 37) {patt = 'God II????'} else if (nivelAtual === 38) {patt = 'God III????'} else if (nivelAtual === 39) {patt = 'God IV????'} else if (nivelAtual === 40) {patt = 'God V????'} else if (nivelAtual > 41) {patt = '????Grande Mestre????'}
          
//_XP COM LEVELING ATIVO
if (isGroup && isLevelingOn) {
const currentLevel = getLevelingLevel(sender)
const checkId = getLevelingId(sender)
try {
if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
const amountXp = Math.floor(Math.random() * (20 - 30 + 45) + 15)
const requiredXp = 20 * Math.pow(currentLevel, 2) + 150 * currentLevel + 1000
const getLevel = getLevelingLevel(sender)
const namelv = checkId
addLevelingXp(sender, amountXp)
if (requiredXp <= getLevelingXp(sender)) {
addLevelingLevel(sender, 1)
const lvup = {
text:
`    ??????????????? LEVEL ???????????????

  ????????????????????????
  ?????? Nome: @${namelv.split('@')[0]}
  ????????????????????????
  ?????? XP: ${getLevelingXp(sender)}
  ????????????????????????
  ?????? Level: ${getLevel} -> ${getLevelingLevel(sender)}
  ????????????????????????
  ?????? Patente: ${patt}
  ????????????????????????
  
   ???????????????LEVEL ???????????????`,
contextInfo: {mentionedJid: [namelv]}}
supra.sendMessage(from, lvup, text, {quoted: mek})

}
} catch (err) {
console.error(err)
}
} 




			colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
		
	function addMetadata(packname, author) {	

				if (!packname) packname = 'WABot'; if (!author) author = 'Bot';	

				author = author.replace(/[^a-zA-Z0-9]/g, '');	

				let name = `${author}_${packname}`

				if (fs.existsSync(`./src/stickers/${name}.exif`)) return `./src/stickers/${name}.exif`

				const json = {	

					"sticker-pack-name": packname,

					"sticker-pack-publisher": author,

				}

				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	

				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	



				let len = JSON.stringify(json).length	

				let last	



				if (len > 256) {	

					len = len - 256	

					bytes.unshift(0x01)	

				} else {	

					bytes.unshift(0x00)	

				}	



				if (len < 16) {	

					last = len.toString(16)	

					last = "0" + len	

				} else {	

					last = len.toString(16)	

				}	



				const buf2 = Buffer.from(last, "hex")	

				const buf3 = Buffer.from(bytes)	

				const buf4 = Buffer.from(JSON.stringify(json))	



				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	



				fs.writeFile(`./src/stickers/${name}.exif`, buffer, (err) => {	

					return `./src/stickers/${name}.exif`	

				})	



			}

if (budy.includes(`alpin`)) {
                const alpin = fs.readFileSync('./alpinstiker/alpin');
                client.sendMessage(from, alpin, MessageType.sticker, {quoted: mek})
                  }

		if (budy.includes(`alpin`)) {
                const alpin = fs.readFileSync('./alpinstiker/Dappa');
                client.sendMessage(from, alpin, MessageType.sticker, {quoted: mek})
                  }



//--Member limit

		
		 supra.chatRead(from)
			switch(command) {
				case 'menu': //@SUPRA ???
            case 'help':  
               if (isBanned) return reply('Voc?? foi banido')
                runtime = process.uptime()
                teks = `${kyun(runtime)}`
                 
                const uLevel = getLevelingLevel(sender)
                const uXp = getLevelingXp(sender)
                const requirdXp = 20 * Math.pow(uLevel, 2) + 150 * uLevel + 1000
                var itsme = `$supra@s.whatsapp.net`
                var split = `zuras`
               wew = fs.readFileSync('image/odc.jpeg')
                    //var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
                //const uangkau = checkATMuser(sender)
                const bruhhhh = {
                    contextInfo: {
                        participant: itsme,
                        quotedMessage: {
                extendedTextMessage: {
                                text: split,
                            }
                        }
                    }
                }

                mansss = `??????????????? *LHANNA-BOT* ????????????
????????????????????????????????????????????????
??????????????? Vers??o: *1.0*
??????????????? Nome : *Lhanna-BOT*
??????????????? Conectado : *Baileys*
??????????????? Criador : *@SUPRA*
??????????????? Level: *${uLevel}*
??????????????? XP: *${uXp}/${requirdXp}*
??????????????? Patente: *${patt}* 
????????????????????????????????????????????????
???????????? *CMD INICIAL* ??????
?????????????????????????????????????????????
???????????? ${prefix}info
???????????? ${prefix}restapi
???????????? ${prefix}github
???????????? ${prefix}criador
???????????? ${prefix}owner
???????????? ${prefix}covidbr
???????????? ${prefix}ping
???????????? ${prefix}profile
???????????? ${prefix}wame
???????????? ${prefix}traduzir <texto>
???????????? ${prefix}stickera
???????????? ${prefix}simi <texto>
???????????? ${prefix}sticker <img/gf>
???????????? ${prefix}sticker1 <img>
???????????? ${prefix}semoji  <emoji>
???????????? ${prefix}attp <texto>
???????????? ${prefix}attp1 <texto>
???????????? ${prefix}attp2 <texto>
???????????? ${prefix}attp3 <texto>
???????????? ${prefix}stickerwa <nome>
???????????? ${prefix}tomp3 <marcar>
???????????? ${prefix}linkimg <img>
????????????????????????????????????????????????
???????????? *CMD GRUPOS* ??????
?????????????????????????????????????????????
???????????? ${prefix}welcome [1/0]
???????????? ${prefix}leveis [1/0]
???????????? ${prefix}level
???????????? ${prefix}infogp
???????????? ${prefix}online
???????????? ${prefix}delete <marcar>
???????????? ${prefix}fotogp <ft>
???????????? ${prefix}setname <nome>
???????????? ${prefix}abrirgp
???????????? ${prefix}fechargp
???????????? ${prefix}kick @
???????????? ${prefix}kick1 
???????????? ${prefix}add [nume]
???????????? ${prefix}listadmin
???????????? ${prefix}promover @
???????????? ${prefix}demitir @
???????????? ${prefix}antilink [1/0]
???????????? ${prefix}antifake [1/0]
???????????? ${prefix}simih [1/0]
????????????????????????????????????????????????
???????????? *CMD CONSULTA* ??????
????????????????????????????????????????????????
???????????? ${prefix}img <nome>
???????????? ${prefix}github <nome>
???????????? ${prefix}google <nome>
???????????? ${prefix}Igstalk <nome>
???????????? ${prefix}letra <nome>
???????????? ${prefix}gplaystore <no>
???????????? ${prefix}xvideos <txt>
???????????? ${prefix}idanime <nome>
???????????? ${prefix}wait <img>
???????????? ${prefix}ddd <ddd>
???????????? ${prefix}cep <cep>
????????????????????????????????????????????????
???????????? *IMG MARKER* ??????
?????????????????????????????????????????????
???????????? ${prefix}cinzav <img>
???????????? ${prefix}borrar <img>
???????????? ${prefix}police <img>
???????????? ${prefix}circulo <img>
???????????? ${prefix}camara <img>
???????????? ${prefix}viga <texto>
????????????????????????????????????????????????
???????????? *VID ALEAT??RIOS* ??????
????????????????????????????????????????????????
???????????? ${prefix}saycat
???????????? ${prefix}blackpinkv
???????????? ${prefix}porno
???????????? ${prefix}
????????????????????????????????????????????????
???????????? *CMD DIVERS??O* ??????
????????????????????????????????????????????????
???????????? ${prefix}casal 
???????????? ${prefix}plaquinha<nome>
???????????? ${prefix}cornot
???????????? ${prefix}soucorno?
???????????? ${prefix}conselho
???????????? ${prefix}dado
???????????? ${prefix}gados 
???????????? ${prefix}gay
???????????? ${prefix}shipp
????????????????????????????????????????????????
???????????? *CMD IMAGEM* ??????
?????????????????????????????????????????????
???????????? ${prefix}loli
???????????? ${prefix}meme
???????????? ${prefix}belle
???????????? ${prefix}hentai
???????????? ${prefix}wappanime
????????????????????????????????????????????????
???????????? *CMD DE BAIXAR* ???
?????????????????????????????????????????????
???????????? ${prefix}musica <nome>
???????????? ${prefix}musica1 <nome>
???????????? ${prefix}play <nome>
???????????? ${prefix}play1 <nome>
???????????? ${prefix}vid <nome>
???????????? ${prefix}vid1 <nome>
???????????? ${prefix}xvideosd <link>
????????????????????????????????????????????????
???????????? *GERADOR E DD* ??????
????????????????????????????????????????????????
???????????? ${prefix}dadosfake
???????????? ${prefix}pessoas
???????????? ${prefix}nickff
???????????? ${prefix}
????????????????????????????????????????????????
??????????????? *E DE VOZ* ?????????
?????????????????????????????????????????????
???????????? ${prefix}slow <audio>
???????????? ${prefix}esquilo <audio>
???????????? ${prefix}raposa <audio>
???????????? ${prefix}bass <audio>
???????????? ${prefix}audiomeme <nome>
???????????? ${prefix}tts <txt>
????????????????????????????????????????????????
???????????? *CMD CRIADOR* ??????
????????????????????????????????????????????????
???????????? ${prefix}ban @
???????????? ${prefix}unban @
???????????? ${prefix}block @
???????????? ${prefix}unblock @
???????????? ${prefix}bc <texto>
???????????? ${prefix}entrargp <link>
???????????? ${prefix}addsticker <mar>
????????????????????????????????????????????????`,
wew = fs.readFileSync('./image/odc.jpeg')
 supra.sendMessage(from, wew, image, { quoted: supra2, thumbnail: fs.readFileSync('./image/supraf.jpg'), caption: mansss })
  break
case 'menu2':
sendButLocation(from, lang.menu(prefix, salam, pushname2), '?? ' + ownername, thumbnail, [{buttonId: '.owner', buttonText: {displayText: 'Owner'}, type: 1},{buttonId: '.infobot', buttonText:{displayText: 'Infobot'}, type: 1}], {quoted: mek})
				break
			

       case 'debug':
			 resx = await supra.prepareMessageFromContent(from,{
"templateMessage": {
						"hydratedTemplate": {
							"hydratedContentText": `Hi`,
							"hydratedFooterText": `${prefix}`,
							"hydratedButtons": [
								{
									"quickReplyButton": {
										"displayText": "List Menu",
										"id": "60dd75b0081979507a679f99"
									},
									"index": 0
								},
								{
									"quickReplyButton": {
										"displayText": "Script",
										"id": "60dd75b0081979507a679f99"
									},
									"index": 1
								},
								{
									"quickReplyButton": {
										"displayText": "Instagram",
										"id": "60dd75b0081979507a679f99"
									},
									"index": 2
								}
							]
						}
					}
				}, {}) 
supra.relayWAMessage(resx)
break
			

			
			
case 'info': //@SUPRA ???
  uptime = process.uptime()
  let bateryy = global.batrei[global.batrei.length - 1]
   wew = fs.readFileSync(`./image/odc.jpeg`)
  teks = `??? *??? ???? ???? ???? ????  ???? ???? ???? ???? ???? ???*
??? *??? Nome* : Lhanna
??? *??? Vers??o* : 1.0
??? *??? Criador* : SUPRA
??? *??? Prefix* : ${prefix}
??? *??? Bateria* : ${bateryy}%
??? *??? Contatos bloqueados* : ${blocked.length}
??? *??? Total de chats* : ${totalchat.length}
??? *??? Online a* : ${kyun(uptime)}
??????????????????????????????????????????????????????`
 supra.sendMessage(from, wew, image, { quoted: nay1, caption: teks })
  break

case 'online': //@SUPRA ???
    let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
    let online = [...Object.keys(supra.chats.get(ido).presences), supra.user.jid]
    supra.sendMessage(from, 'Lista Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join`\n`, text, { quoted: mek,
    contextInfo: { mentionedJid: online }
    })
    break
    
     case 'dadu':	
  anu = await getBuffer(`https://supra-api.herokuapp.com/api/dadu?apikey=supraz`)
 supra.sendMessage(from, anu, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "???? Supra-key", 'jpegThumbnail': await getBuffer('https://i.pinimg.com/736x/6a/f4/43/6af4437506b69872c7ff6ec9b915dbe6.jpg')}}}})
 break
 
 case 'stickera':	
 reply(`AGUARDE UM POUCO????`)
  anu = await getBuffer(`https://supra-api.herokuapp.com/api/stickera?apikey=supraz`)
 supra.sendMessage(from, anu, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "???? Supra-key", 'jpegThumbnail': await getBuffer('https://i.pinimg.com/736x/6a/f4/43/6af4437506b69872c7ff6ec9b915dbe6.jpg')}}}})
 break
 
  case 'telgrastick':	
   las = body.slice(13) 
 reply(`AGUARDE UM POUCO????`)
  anu = await fetchJson(`https://api-alphabot.herokuapp.com/api/downloader/telegram_sticker?url=${las}&apikey=Alphabot`)
   sads = await getBuffer(anu.results[0].url)
 supra.sendMessage(from, sads, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "???? Supra-key", 'jpegThumbnail': await getBuffer('https://i.pinimg.com/736x/6a/f4/43/6af4437506b69872c7ff6ec9b915dbe6.jpg')}}}})
 break
 
 case 'audiomeme':
  las = body.slice(11)
  reply(`AGUARDE UM POUCO????`)
  sads = await getBuffer(`https://supra-api.herokuapp.com/api/audiomeme?quero=${las}&apikey=supraz`)
  supra.sendMessage(from, sads, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
  break
  
  case 'ip':
    textw = body.slice(4)
    reply(`AGUARDE UM POUCO????`)
   fref = await fetchJson(`https://supra-api.herokuapp.com/api/ip?quero=${textw}&apikey=supraz`)
   textt = `     ??? *INFORMA????ES DO IP* ???\n
??? Ip = ${fref.ip}
??? Pais = ${fref.pais}
??? Estado = ${fref.estado}
??? Cidade = ${fref.cidade}
??? Lat = ${fref.latitude}
??? Long = ${fref.longitude}
??? Isp = ${fref.isp}
??? As = ${fref.as}`
  supra.sendMessage(from, textt, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "???? Supra-key", 'jpegThumbnail': await getBuffer('https://i.pinimg.com/736x/6a/f4/43/6af4437506b69872c7ff6ec9b915dbe6.jpg')}}}})
 break
 
 case 'ddd':
    textw = body.slice(5)
    reply(`AGUARDE UM POUCO????`)
   fref = await fetchJson(`https://supra-api.herokuapp.com/api/ddd?quero=${textw}&apikey=supraz`)
   textt = `     ??? *INFORMA????ES DO DDD* ???\n
??? Estado = ${fref.estado}
??? Cidades = ${fref.cidades}
*By: Supra-api*`
  supra.sendMessage(from, textt, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "???? Supra-key", 'jpegThumbnail': await getBuffer('https://i.pinimg.com/736x/6a/f4/43/6af4437506b69872c7ff6ec9b915dbe6.jpg')}}}})
 break
 
  case 'cep':
    textw = body.slice(5)
    reply(`AGUARDE UM POUCO????`)
   fref = await fetchJson(`https://supra-api.herokuapp.com/api/cep1?quero=${textw}&apikey=supraz`)
   textt = `     ??? *INFORMA????ES DO CEP* ???\n
??? Cep = ${fref.cep}
??? Estado = ${fref.estado}
??? Cidade = ${fref.cidade}
??? Lugar = ${fref.lugar}
??? Rua = ${fref.rua}
*By: Supra-api*`
  supra.sendMessage(from, textt, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "???? Supra-key", 'jpegThumbnail': await getBuffer('https://i.pinimg.com/736x/6a/f4/43/6af4437506b69872c7ff6ec9b915dbe6.jpg')}}}})
 break
 
 
 
 case 'waifu2':
  reply(`AGUARDE UM POUCO????`)
   data = await fetchJson(`https://supra-api.herokuapp.com/api/waifu2?&apikey=supraz`)
   sads = await getBuffer(data.image)   
   shaa = `Waifu???`
  supra.sendMessage(from, sads, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "???? Supra-key", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": await getBuffer('https://i.pinimg.com/736x/6a/f4/43/6af4437506b69872c7ff6ec9b915dbe6.jpg')} } }, caption: shaa })
 break
 
  case 'romantic':
  sads = await getBuffer(`https://luganobr.vteximg.com.br/arquivos/ids/156458-800-800/coracao-de-chocolate-ao-leite-lugano-laminado-75-ambientada.jpg?v=637358652692600000`)
   fre = await fetchJson(`https://supra-api.herokuapp.com/api/romanticafrase?apikey=supraz`)
   shaa = `Frase Rom??ntica:\n ??????${fre.frase}??????`
  supra.sendMessage(from, sads, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "???? Supra-key", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": await getBuffer('https://i.pinimg.com/736x/6a/f4/43/6af4437506b69872c7ff6ec9b915dbe6.jpg')} } }, caption: shaa })
 break
 
 case 'delete':
  case 'del': //@SUPRA ???
if (!isGroup)return reply(mess.only.group)
if (!isGroupAdmins)return reply(mess.only.admin)
try {
supra.deleteMessage(from, {
  id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true
})
} catch {
  reply('S?? pode deletar mensagens minhas')
}
break

case 'block': //@SUPRA ???
supra.updatePresence(from, Presence.composing)
if (!isGroup) return reply(mess.only.group)
if (!isOwner) return reply(mess.only.ownerB)
supra.blockUser (`${body.slice(8)}@c.us`, "add")
supra.sendMessage(from, `Membro bloqueado n??o pode mas usar command do bot no pv`, text, {
quoted: mek
})
break

case 'unblock': //@SUPRA ???
if (!isGroup) return reply(mess.only.group)
if (!isOwner) return reply(mess.only.ownerB)
supra.blockUser (`${body.slice(9)}@c.us`, "remove")
supra.sendMessage(from, `supra desbloqueou membro`, text, {
quoted: mek
})
break
 
// /lib/json/dataGc.json
			  case 'welcome':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('RECURSO DE BEM VINDO EST??  ATIVO')
						welkom.push(from)
						fs.writeFileSync('./new/welkom.json', JSON.stringify(welkom))
						reply('Ativou com sucesso o recurso de boas-vindas neste grupo ??????')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./new/welkom.json', JSON.stringify(welkom))
						reply('Recurso de boas-vindas desativado')
					} else {
						reply('1 para ativar, 0 para desativar')
					}
                       break
                       
  	     case 'welcome1':
		if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
				 po = supra.prepareMessageFromContent(from, {
					"listMessage":{
                  "title": "*@SUPRA COMMANDS*",
                  "description": "Ativar|desativar",
                  "buttonText": "BOT??O",
                  "listType": "SINGLE_SELECT",
                  "sections": [
                     {
                        "rows": [
                           {
                              "title": "on",
                              buttonId: `#welcome 1`
                           },
						   {
                              "title": "off",
                              "rowId": `#welcome 0`
                           }
                        ]
                     }]}}, {}) 
            supra.relayWAMessage(po, {waitForAck: true})
	
        
       break
                       
  case 'linkimg':  //@SUPRA ???
 if (isBanned) return reply('Voc?? foi banido')
 var imgbb = require('imgbb-uploader')
 if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
    ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
    reply(mess.wait)
    owgi = await supra.downloadAndSaveMediaMessage(ger)
     anu = await imgbb("f22e1a6ac0de3121d9cba3cd55f2b724", owgi)
     teks = `${anu.display_url}`
reply(teks)
}
break	

 case 'antilink':
      if (!isGroup) return reply(mess.only.group)
	if (!isGroupAdmins) return reply(mess.only.admin)
	if (!isBotGroupAdmins) return reply(mess.only.Badmin)
	if (args.length < 1) return reply('digite 1 para ativar ')
	if (Number(args[0]) === 1) {
	if (isAntiLink) return reply('o anti-link est?? ativo')
	antilink.push(from)
	fs.writeFileSync('./new/antilink.json', JSON.stringify(antilink))
	reply('O recurso anti-link foi ativo no grupo ??????')
	} else if (Number(args[0]) === 0) {			
	antilink.splice(from, 1)
	fs.writeFileSync('./new/antilink.json', JSON.stringify(antilink))
	reply('O recurso anti-link desativado com sucesso neste grupo??????')
	} else {
		reply('1 para ativar, 0 para desativar ')
	}
	break                         
                       
    case 'antifake':
  try {
  if (!isGroup) return reply(mess.only.group)
  if (!isGroupAdmins) return reply(mess.only.admin)
  if (args.length < 1) return reply('Hmmmm')
  if (Number(args[0]) === 1) {
  if (isAntiFake) return reply('Ja esta ativo')
  antifake.push(from)
  fs.writeFileSync('./new/antifake.json', JSON.stringify(antifake))
  reply('Ativou com sucesso o recurso de antifake neste grupo??????')
  } else if (Number(args[0]) === 0) {
  antifake.splice(from, 1)
  fs.writeFileSync('./new/antifake.json', JSON.stringify(antifake))
	reply('Desativado com sucesso o recurso de antifake neste grupo??????')
  } else {
  reply('1 para ativar, 0 para desativar')
 }
 } catch {
 reply('Deu erro, tente novamente :/')
 }
  break
  
  case  'roubar':
case 'rename':
if (!isOwner) return  reply(mess.only.ownerB)
		    		if (!isQuotedSticker) return reply('Apenas figurinhas mano')
		            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				    media = await supra.downloadAndSaveMediaMessage(encmedia)
		            anu = args.join(' ').split('|')
		            satu = anu[0] !== '' ? anu[0] : `YT`
		            dua = typeof anu[1] !== 'undefined' ? anu[1] : `Kratos`
		            require('./lib/fetcher.js').createExif(satu, dua)
					require('./lib/fetcher.js').modStick(media, supra, nay1, from)
break
  case 'ban': //@SUPRA ???
if (!isGroup) return reply(mess.only.group)
if (!isOwner) return  reply(mess.only.ownerB)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
ban.push(`${mentioned}`)
fs.writeFileSync('./datauser/banned.json', JSON.stringify(ban))
susp = `????@${mentioned[0].split('@')[0]} supra baniu vc  nao pode mas usar comandos do bot????`
mentions(`${susp}`, mentioned, true)   
break
  
			
case 'report':
					const bug = body.slice(5)
					if (args.length > 300) return supra.sendMessage(from, 'm??ximo 300 letras', msgType.text, {quoted: mek})
					var nomor = mek.participant
					teks1 = `*[REPORT]*\nNumber : @${nomor.split("@s.whatsapp.net")[0]}\nMessage : ${bug}`
					var options = {
					text: teks1,
					contextInfo: {mentionedJid: [nomor]},
					}
					supra.sendMessage('559391919748@s.whatsapp.net', options, text, {quoted: mek})
					reply('Mensagem enviada ao criador do bot??????')
					break

case 'clearall':
if (!isOwner && !isPremium) return  reply(ptbr.ownerB())
anu = await supra.chats.all()
list_chat = await supra.chats.all()
for (let chat of list_chat) {
supra.modifyChat(chat.jid, "delete", {includeStarred: false})
}
reply("Chat limpo")
break
    
  case 'shipp':
if (!isGroup) return reply(mess.only.group)
if (args.length < 1) return reply(`Marca um casal de pombinhos`)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pro = '.\n'
for (let _ of mentioned) {
pro += `@${_.split('@')[0]}\n`
}
porc = `${Math.floor(Math.random() * 100)}`
yhb =  `@${mentioned[0].split('@')[0]} vc tem uma chance de ${porc}% de namorar com @${mentioned[1].split('@')[0]}????????????????????`,
mentions(`${yhb}`, mentioned, true, {quoted: mek})
break

case  'roubar':
case 'rename':
		    		if (!isQuotedSticker) return reply('Marque uma figurinha')
		            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				    media = await supra.downloadAndSaveMediaMessage(encmedia)
		            anu = args.join(' ').split('|')
		            satu = anu[0] !== '' ? anu[0] : `YT`
		            dua = typeof anu[1] !== 'undefined' ? anu[1] : `Kratos`
		            require('./lib/fetcher.js').createExif(satu, dua)
					require('./lib/fetcher.js').modStick(media, client, nay1, from)
break

case 'restapi':
fas =`
Site Rest api = https://supra-api.herokuapp.com
Sobre = https://supra-api.herokuapp.com/sobre`
reply(fas)
break	

case 'github':
fas =`
Meu perfil no github:
https://github.com/Supraofc`

reply(fas)
break	

case 'conselho': //@SUPRA ???
  try {
 anu = await fetchJson(`https://supra-api.herokuapp.com/api/conselho?apikey=supraz`)
     ppimg = await supra.getProfilePicture(`${sender.split('@')[0]}@c.us`)
     } catch {
     ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
     }
     its = await getBuffer (ppimg)
     randTeks = `Este ?? meu conselho:
${anu.frase}`
     supra.sendMessage(from, its, image, {quoted: mek, caption: randTeks})
     break

       /*    case 'togif':

                    if ((isMedia && !mek.message.videoMessage || isQuotedImage)) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(lol).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        filePath = await supra.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        file_name = getRandom('.gif')
                        ini_txt = args.join(" ").split("|")
                        request({
                            url: `http://api.lolhuman.xyz/api/convert/togif?apikey=b4012abd7e882a3e749c6004,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(filePath),
                            },
                            encoding: "binary"
                        }, function(error, response, body) {
                            fs.unlinkSync(filePath)
                            fs.writeFileSync(file_name, body, "binary")
                            ini_buff = fs.readFileSync(file_name)
                            supra.sendMessage(from, ini_buff, video, { quoted: mek, mimetype: Mimetype.gif, filename: file_name })
                            fs.unlinkSync(file_name)
                        })
                   
                    break
                    */
				case 'stiker':

				case 'sticker':

				  case 'si':

					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {

						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek

						const media = await supra.downloadAndSaveMediaMessage(encmedia)

						ran = getRandom('.webp')

						await ffmpeg(`./${media}`)

							.input(media)

							.on('start', function (cmd) {

								console.log(`Started : ${cmd}`)

							})

							.on('error', function (err) {

								console.log(`Error : ${err}`)

								fs.unlinkSync(media)

								reply(mess.error.stick)

							})

							.on('end', function () {

								console.log('Finish')

								exec(`webpmux -set exif ${addMetadata('newton', '@supra')} ${ran} -o ${ran}`, async (error) => {

									if (error) return reply(mess.error.stick)

									supra.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})

									fs.unlinkSync(media)	

									fs.unlinkSync(ran)	

								})

								/*supra.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})

								fs.unlinkSync(media)

								fs.unlinkSync(ran)*/

							})

							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])

							.toFormat('webp')

							.save(ran)

					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {

						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek

						const media = await supra.downloadAndSaveMediaMessage(encmedia)

						ran = getRandom('.webp')

						reply(mess.wait)

						await ffmpeg(`./${media}`)

							.inputFormat(media.split('.')[1])

							.on('start', function (cmd) {

								console.log(`Started : ${cmd}`)

							})

							.on('error', function (err) {

								console.log(`Error : ${err}`)

								fs.unlinkSync(media)

								tipe = media.endsWith('.mp4') ? 'video' : 'gif'

								reply(`??? N??O T?? FAZENDO PORRA ????`)

							})

							.on('end', function () {

								console.log('Finish')

								exec(`webpmux -set exif ${addMetadata('newton', '@supra')} ${ran} -o ${ran}`, async (error) => {

									if (error) return reply(mess.error.stick)

									supra.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})

									fs.unlinkSync(media)

									fs.unlinkSync(ran)

								})

								/*supra.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})

								fs.unlinkSync(media)

								fs.unlinkSync(ran)*/

							})

							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])

							.toFormat('webp')

							.save(ran)

					} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {

						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek

						const media = await supra.downloadAndSaveMediaMessage(encmedia)

						ranw = getRandom('.webp')

						ranp = getRandom('.png')

						reply(mess.wait)

						keyrmbg = 'Your-ApiKey'

						await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp}).then(res => {

							fs.unlinkSync(media)

							let buffer = Buffer.from(res.base64img, 'base64')

							fs.writeFileSync(ranp, buffer, (err) => {

								if (err) return reply('??? N??O T?? FAZENDO PORRA ????.')

							})

							exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {

								fs.unlinkSync(ranp)

								if (err) return reply(mess.error.stick)

								exec(`webpmux -set exif ${addMetadata('alpin', 'pinbot')} ${ranw} -o ${ranw}`, async (error) => {

									if (error) return reply(mess.error.stick)

									supra.sendMessage(from, fs.readFileSync(ranw), sticker, {quoted: mek})

									fs.unlinkSync(ranw)

								})

								//supra.sendMessage(from, fs.readFileSync(ranw), sticker, {quoted: mek})

							})

						})

					/*} else if ((isMedia || isQuotedImage) && colors.includes(args[0])) {

						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek

						const media = await supra.downloadAndSaveMediaMessage(encmedia)

						ran = getRandom('.webp')

						await ffmpeg(`./${media}`)

							.on('start', function (cmd) {

								console.log('Started :', cmd)

							})

							.on('error', function (err) {

								fs.unlinkSync(media)

								console.log('Error :', err)

							})

							.on('end', function () {

								console.log('Finish')

								fs.unlinkSync(media)

								supra.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})

								fs.unlinkSync(ran)

							})

							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=${args[0]}@0.0, split [a][b]; [a] palettegen=reserve_transparent=off; [b][p] paletteuse`])

							.toFormat('webp')

							.save(ran)*/

					} else {

						reply(`Envie fotos com legendas ${prefix}adesivo ou tag de imagem que foi enviado`)

					}

					break	
					
case 'fechargp': //@SUPRA ???
 supra.updatePresence(from, Presence.composing)
 if (!isGroup) return reply(mess.only.group)
 if (!isGroupAdmins) return reply(mess.only.admin)
 if (!isBotGroupAdmins) return reply(mess.only.Badmin)
 var nomor = mek.participant
 const close = { text: `Grupo fechado pelo administrador @${nomor.split("@s.whatsapp.net")[0]}\nagora *apenas administradores* podem enviar mensagens`,
contextInfo: {
 mentionedJid: [nomor]
}
  }
 supra.groupSettingChange (from, GroupSettingChange.messageSend, true);
 reply(close)
 break

case 'abrirgp':
case 'bukagc': //@SUPRA ???
 supra.updatePresence(from, Presence.composing)
 if (!isGroup) return reply(mess.only.group)
 if (!isGroupAdmins) return reply(mess.only.admin)
 if (!isBotGroupAdmins) return reply(mess.only.Badmin)
open = {
 text: `Grupo aberto pelo administrador @${sender.split("@")[0]}\nagora *todos os participantes* podem enviar mensagens`,
contextInfo: {
mentionedJid: [sender]
 }
}
supra.groupSettingChange (from, GroupSettingChange.messageSend, false)
supra.sendMessage(from, open, text, {  quoted: mek
})
break
																	
																		
case 'criador': //@SUPRA ???
buffer = await getBuffer(`https://lh3.googleusercontent.com/pw/ACtC-3fA0Q7qP2wXEkvLfh0D2eWqSiCD-RtR98mzLPbdXn7y1inVSE8HIcDFN0y4PqS3XT7CYF3LPjyaDHELAikGQd9Pg_z-5j5tl2PxrDdiNJxYzFiD_y1EBv5G6f9E1sETBNl2S9vRmJxnbrQaDkff3eH8=s480-no?authuser=0`)
shaa = `      ??? *_SUPRA LS STUDIOS_* ???

?????? *Nome:* NEWTON
?????? *Nick:* SUPRA
?????? *Numero:* ${prefix}owner
?????? *Insta:* @nilton_cant
?????? *Nome do bot:* Lhanna
?????? *Data de cria????o:* 28/05/21
?????????????????????????????????????????????????????????????????????
Espero que tenham gostado do meu bot.
Love vcs!!!??????`
 supra.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "???? *Status-SUPRA*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: shaa })
break

case 'casal':
    jds = []
   const dd = groupMembers
  const ll = groupMembers
   const gg = dd[Math.floor(Math.random() * dd.length)]
	const rr = ll[Math.floor(Math.random() * ll.length)]
	teks = `*Futuro casal do grupo:*\n@${gg.jid.split('@')[0]} ??????\n @${rr.jid.split('@')[0]} ?????? `	
      data = fs.readFileSync('./api/roman.js');
      jsonData = JSON.parse(data);
      randIndex = Math.floor(Math.random() * jsonData.length);
      randKey = jsonData[randIndex];
      buffer = await getBuffer(randKey.result)
      supra.sendMessage(from, buffer, video, {mimetype: 'video/mp4',quoted: mek, caption: teks})
      break

case 'gay':
   gays = body.slice(4)  
   ranran = `${Math.floor(Math.random() * 100)}`
   sufiz = await getBuffer(`https://cdn.pixabay.com/photo/2019/08/23/19/02/rainbow-flag-4426296_640.jpg`)
   cansi = `Veja os dados gay do: ${gays}\n\n${gays} voc?? ??  *${ranran}%* gay ??????????????`
   supra.sendMessage(from, sufiz, image, {quoted: mek, caption: cansi})
   break	
	
case 'plaquinha': //@SUPRA ???
if (isBanned) return reply('Voc?? foi banido')
  if (args.length < 1) return reply(mess.blank)
	teks = body.slice(10)
	if (teks.length > 10) return reply('O texto ?? longo, at?? 10 caracteres')
	reply('*Estou fazendo* ????')
	 buffer = await getBuffer(`https://restioas.sirv.com/Spins/artworks-000056121029-geglen-t500x500.jpg?text.0.text=${teks}&text.0.position.gravity=west&text.0.position.x=16%25&text.0.size=34&text.0.color=140f15&text.0.opacity=64&text.0.font.family=Yellowtai&text.0.font.weight=700&text.0.background.opacity=94&text.0.outline.color=0a0a0a&text.0.outline.opacity=42%22%20width=%22500%22%20height=%22500%22%20alt=`)
	 supra.sendMessage(from, buffer, image, {quoted: mek, caption: '*Se usou deve uma mamada no supra*'})
	 break
	 
	 case 'plaquinha2':
//PEDI O REGISTRO
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(12)
					if (teks.length > 25) return reply('O texto ?? longo, at?? 25 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ???*')
					buffer = await getBuffer(`https://ubbornag.sirv.com/Screenshot_20210513-151821.png?text.0.text=${teks}&text.0.position.x=-40%25&text.0.position.y=-65%25&text.0.size=30&text.0.color=000000&text.0.opacity=53&text.0.font.family=Shadows%20Into%20Light%20Two&text.0.outline.blur=15`)
					supra.sendMessage(from, buffer, image, {quoted: mek, caption: 'Ta na m??o ????'})
					break
	 
case 'cornot':
var chifre = ["Corno triste", "Corno cego", "Corno escravo", "Corno Conformado", "Corno acostumado", "Corno rei", "Deus dos cornos", "Corno de carteira", "Corno gado", "Corno e n??o sabe", "Corno iludido", "Corno avan??ado", "Corno iniciante"]
var gado = chifre[Math.floor(Math.random() * chifre.length)]
gadop = `${Math.floor(Math.random() * 100)}`
hisil = `Voc?? ??:\n\n${gado}`
reply(hisil)
break    

case 'soucorno?':
var corno = ["Segundo meus c??lculos....Vc ?? corno", "Rlx amigo(a) vc ainda nao ?? corno"]
var galha = corno[Math.floor(Math.random() * corno.length)]
fdp = `${Math.floor(Math.random() * 100)}`
hisil = `${galha}`
reply(hisil)
break    

  case 'porno': //@SUPRA ???
  if (!isGroupAdmins) return reply(mess.only.admin)
  data = fs.readFileSync('./api/xvideos.js');
  jsonData = JSON.parse(data);
  randIndex = Math.floor(Math.random() * jsonData.length);
  randKey = jsonData[randIndex];
  buffer = await getBuffer(randKey.result)
 supra.sendMessage(from, buffer, video, {mimetype: 'video/mp4',quoted: mek, caption: `A?? seu v??deo punheteiro`})
  break
  
  
 
 case 'blackpinkv':
   data = fs.readFileSync('./api/blackpink.js');
   jsonData = JSON.parse(data);
   randIndex = Math.floor(Math.random() * jsonData.length);
   randKey = jsonData[randIndex];
   buffer = await getBuffer(randKey.result)
   supra.sendMessage(from, buffer, video, {mimetype: 'video/mp4',quoted: mek, caption: `Amo blackpink??????`})
   break
   
   case 'simi': //@SUPRA ???
	  if (args.length < 1) return reply('Onde est?? o texto, Acha que sou vidente?????')
	  teks = body.slice(5)
      anu = await simih(teks) //fetchJson(`http://simsumi.herokuapp.com/api?text=${teks}`, {method: 'get'})
	  //if (anu.error) return reply('*Simi n??o sabe*')
      reply(anu)
	  break

 case 'simih': //@SUPRA ???
 if (!isGroup) return reply(mess.only.group)
 if (!isGroupAdmins) return reply(mess.only.admin)
 if (args.length < 1) return reply('Hmmmm')
 if ((args[0]) === 'on') {
 if (isSimi) return reply('O modo SIM est?? ativo')
 samih.push(from)
 fs.writeFileSync('./new/simi.json', JSON.stringify(samih))
  reply(`Modo simih ativo com sucesso no grupo *${groupMetadata.subject}*`)
 } else if ((args[0]) === 'off') {
 samih.splice(from, 1)
 fs.writeFileSync('./new/simi.json', JSON.stringify(samih))
 reply(`Adm desativou modo simih no grupo *${groupMetadata.subject}*`)
 } else {
 reply('On ativar, Off para desativar')
 }
 break
   
   case 'kick': //@SUPRA ???
 if (isBanned) return reply('Voc?? foi banido')
  if (!isGroup) return reply(mess.only.group)
  if (!isGroupAdmins) return reply(mess.only.admin)
  if (!isBotGroupAdmins) return reply(mess.only.Badmin)
  if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target')
  mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
  if (mentioned.length > 1) {
  teks = 'Pedidos recebidos, emitidos :\n'
  for (let _ of mentioned) {
  teks += `@${_.split('@')[0]}\n`
  }
  mentions(teks, mentioned, true)
  supra.groupRemove(from, mentioned)
  } else {
  mentions(`Pedidos recebidos, emitidos : @${mentioned[0].split('@')[0]}`, mentioned, true)
  supra.groupRemove(from, mentioned)
  }
  break
  
  case 'kk':
  case 'kick1': 
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (exe1.groupadmins> 1) {
var M_exe = []
for (let cut of exe1) {
M_exe.push(cut)
}
supra.groupRemove(from, M_exe)
} else {
supra.groupRemove(from, [exe1[0]])
}
} else {
exe1 = mek.message.extendedTextMessage.contextInfo.participant
supra.groupRemove(from, [exe1])
}
break


break

case 'add': //@SUPRA ???
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
 if (args.length < 1) return reply('Insira o n??mero alvo')
if (args[0].startsWith('08')) return reply('Use o c??digo do pa??s mas')
try {
num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
supra.groupAdd(from, [num])
} catch (e) {
console.log('Error :', e)
reply('Falha ao adicionar destino, talvez porque ?? privado')
}
break

  
  case 'gados':
		if (isBanned) return reply('Voc?? foi banido') 					
		jds = []
		const eee = groupMembers
		const ttll = groupMembers
		const fdss = groupMembers
		const neww = groupMembers					
		const akui = eee[Math.floor(Math.random() * eee.length)]
		const diao = ttll[Math.floor(Math.random() * ttll.length)]
		const noit = fdss[Math.floor(Math.random() * fdss.length)]
		const suprf = neww[Math.floor(Math.random() * neww.length)]
		teks = `*TOP 4 +GADOS DO GRUPO*\n\n??????????@${akui.jid.split('@')[0]}???\n??????????@${diao.jid.split('@')[0]}\n??????????@${noit.jid.split('@')[0]}???\n??????????@${suprf.jid.split('@')[0]}???\n\n*ESSES ACIMA S??O OS GADOS DO GRUPO*\n\n*Lhanna-BOT*`
		jds.push(akui.jid)
		jds.push(diao.jid)
		jds.push(noit.jid)
		jds.push(suprf.jid)
		mentions(teks, jds, true)
		break
                             
            
case 'bc': //@SUPRA ???
	if (!isOwner) return reply('Quem ?? Voc??, voc?? n??o ?? meu dono ?????')
	if (args.length < 1) return reply('.......')
	anu = await supra.chats.all()
	if (isMedia && !mek.message.videoMessage || isQuotedImage) {
	const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
	buff = await supra.downloadMediaMessage(encmedia)
	for (let _ of anu) {
	supra.sendMessage(_.jid, buff, image, {caption: `[ TRANSMI????O DE AVISO ]\n\n${body.slice(4)}`})
	}
	reply('Transmiss??o enviada com sucesso')
	} else {
	for (let _ of anu) {
	sendMess(_.jid, `[ TRANSMISS??O DE AVISO ]\n\n${body.slice(4)}`)
	}
	reply('Transmiss??o enviada com sucesso')
	}
	break
	
	case 'toimg':
 reply(mess.wait)
 imgmed = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
 medimg = await supra.downloadAndSaveMediaMessage(imgmed)
 ran = getRandom('.png')
 exec(`ffmpeg -i ${medimg} ${ran}`, (err) => {
 fs.unlinkSync(medimg)
 if (err) return reply('Gagal')
 buffer = fs.readFileSync(ran)
 supra.sendMessage(from, buffer, image, {quoted: mek, caption: 'Convertido em image'})
  fs.unlinkSync(ran)
 })
 break


case 'owner': //@SUPRA ???
reply('Esse ?? o numero do meu criador salva a?? meninas.')
supra.sendMessage(from, {

  displayname: "Jeff", vcard: vcard

}, MessageType.contact, {

  quoted: mek

})

break 

case 'figu':
				case 'fig':
				case 'f':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await supra.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.stick)
							})
							.on('end', function () {
								console.log('Finish')
								supra.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await supra.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(mess.wait)
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {							
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`??? Falhou, no momento da convers??o ${tipe} para o adesivo`)
							})
							.on('end', function () {
								console.log('Finish')
								supra.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await supra.downloadAndSaveMediaMessage(encmedia)
						ranw = getRandom('.webp')
						ranp = getRandom('.png')
						reply(mess.wait)
						keyrmbg = 'Your-ApiKey'
						await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg.result, size: 'auto', type: 'auto', ranp}).then(res => {
							fs.unlinkSync(media)
							let buffer = Buffer.from(res.base64img, 'base64')
							fs.writeFileSync(ranp, buffer, (err) => {
								if (err) return reply('Falha, ocorreu um erro, tente novamente mais tarde.')
							})
							exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
								fs.unlinkSync(ranp)
								if (err) return reply(mess.error.stick)
								supra.sendMessage(from, fs.readFileSync(ranw), sticker, {quoted: mek})
							})
						})
					/*} else if ((isMedia || isQuotedImage) && colors.includes(args[0])) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await supra.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.on('start', function (cmd) {
								console.log('Started :', cmd)
							})
							.on('error', function (err) {
								fs.unlinkSync(media)
								console.log('Error :', err)
							})
							.on('end', function () {
								console.log('Finish')
								fs.unlinkSync(media)
								supra.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=${args[0]}@0.0, split [a][b]; [a] palettegen=reserve_transparent=off; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)*/
					} else {
						reply(`Envie fotos com legendas *.f* ou marque uma imagem que j?? foi enviada`)
					}
					break
				
case 'st':
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await supra.downloadAndSaveMediaMessage(encmedia)                                     
rano = getRandom('.webp')
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
exec(`webpmux -set exif ${addMetadata('newton', '@supra')} ${rano} -o ${rano}`, async (error) => {
fs.unlinkSync(media)
reply(mess.wait())
})
})
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
fs.unlinkSync(media)
buffer1 = fs.readFileSync(rano)
supra.sendMessage(from, buffer1, sticker, {contextInfo :fotothumb, sendEphemeral: true})
fs.unlinkSync(rano)
})
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await supra.downloadAndSaveMediaMessage(encmedia)
rano = getRandom('.webp')
reply('Aguarde um pouco????')
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
exec(`webpmux -set exif ${addMetadata('newton', '@supra')} ${rano} -o ${rano}`, async (error) => {
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`Falha na convers??o de ${tipe} para sticker`)
})
})
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 200:200 ${rano}`, (err) => {
fs.unlinkSync(media)
buffer2 = fs.readFileSync(rano)
supra.sendMessage(from, buffer2, sticker, {contextInfo :fotothumb, sendEphemeral: true})
fs.unlinkSync(rano)
})
} else {
reply(`Voc?? precisa enviar ou marcar uma imagem ou v??deo com no m??ximo 10 segundos`)
}
break		
   case 'play2':
    reply(mess.wait)
   hay = body.slice(6) 
  anu = await fetchJson(`https://supraz.herokuapp.com/api/playaudio2?quero=${hay}&apikey=supraz`)
 buffer = await getBuffer(`https://supra-api.herokuapp.com/api/canvas/spotify?titulo=${anu.titulo}&text=LhannaBot&capa=${anu.imagem}&apikey=supraz`)  
 Iagu = await getBuffer(anu.baixar)
 fdsz = `*Dados obtidos com sucesso!!!*

??? *Autor* : ${anu.canal}
??? *Tamanho* : ${anu.tamanho}
??? *Visualiza????o* : ${anu.views}
??? *Likes* : ${anu.likes}
??? *Deslike* : ${anu.deslike}
??? *Postado* : ${anu.postado}

*_Lhanna est?? baixando_* ????????`
 supra.sendMessage(from, buffer, image, { quoted: supra2, thumbnail: fs.readFileSync('./image/supraf.jpg'), caption: fdsz })
supra.sendMessage(from, Iagu, audio, {mimetype: 'audio/mp4', ptt:true, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": `${anu.titulo}???`, 'jpegThumbnail': await getBuffer(anu.imagem)}}}})
   break			
					
  case 'play':   
   reply(mess.wait)
   hay = body.slice(5)
   anu = await fetchJson(`https://api.zeks.me/api/ytplaymp3?apikey=S38aL2CO2Ez4wZjJWxD2vaJKKrC&q=${hay}`)  
   buffer = await getBuffer(anu.result.thumbnail) 
   lagu = await getBuffer(anu.result.url_audio)
   supra.sendMessage(from, buffer, image, {quoted: mek, caption:'LHANNA EST?? BAIXANDO SUA M??SICA????????'})   
   supra.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', ptt:true, quoted: supra2})
   break
   case 'saycat': //@SUPRA ???
 anu = await fetchJson(`https://supra-api.herokuapp.com/api/saycat?apikey=supraz`)  
buffer = await getBuffer(anu.resultado)
supra.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "???? Supra-key", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": await getBuffer('https://i.pinimg.com/736x/6a/f4/43/6af4437506b69872c7ff6ec9b915dbe6.jpg')} } }, caption: 'Amo saycat??????' })
 break
   
   
				default:
				if (budy.includes("https://")){
		     if (!isGroup) return
		     if (!isAntiLink) return
		     if (isGroupAdmins) return reply(`*${pushname2}* vc ?? admin por isso n??o vou te banir`)
		    supra.updatePresence(from, Presence.composing)
		   var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		    setTimeout( () => {
	    	reply(`*???????????????????????????????????? ???????? ????????????????????*`)
	     	}, 100)
	     	reply(`*_??? link  detectado ???_*\n*${pushname2}* Vc ser?? banido do grupo *${groupMetadata.subject}*`)
		    setTimeout( () => {  
		    supra.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 10)
		      setTimeout( () => {
	          
	          }, 0)
		      }			
				if (budy.includes("canta")){
		           supra.updatePresence(from, Presence.composing)
		           const loli = fs.readFileSync('./audio/canta.mp3')
                   supra.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                   }
                     if (budy.includes("Canta")){
		           supra.updatePresence(from, Presence.composing)
		           const loli = fs.readFileSync('./audio/canta.mp3')
                   supra.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                   }
                              
                     if (budy.includes("Bot")){
		           supra.updatePresence(from, Presence.composing)
		           const loli = fs.readFileSync('./audio/oih.mp3')
                   supra.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                   }
                   if (budy.includes("yamete")){
		           supra.updatePresence(from, Presence.composing)
		           const loli = fs.readFileSync('./audio/yamete.mp3')
                   supra.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                   }
                     if (budy.includes("Yamete")){
		           supra.updatePresence(from, Presence.composing)
		           const loli = fs.readFileSync('./audio/yamete.mp3')
                   supra.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                   }
                   	if (budy.includes("????")){
			        supra.updatePresence(from, Presence.composing)
			        reply("Cringe usar emoji")
			        }			       			                         
                   	if (budy.includes("freefire")){
			       supra.updatePresence(from, Presence.composing)
			       reply("S?? corno que joga")
		           const d = fs.readFileSync('./sticker/corni.webp');
                   supra.sendMessage(from, d, sticker, {quoted: mek})
	                }
                   if (budy.includes("Lhanna")){
		           supra.updatePresence(from, Presence.composing)
		           var alzu = ["Oiee??????", "Me chamou???????", "Ol??", "Hii??????", "Oie vc j?? sabe que ?? corno?", "Ol?? amigo como vai.", "Nao quero conversar"]
                   var fie = alzu[Math.floor(Math.random() * alzu.length)]
                   cra = `${Math.floor(Math.random() * 100)}`
                   hisil = `${fie}`
                   reply(hisil)
                   }
                   if (budy.includes("lhanna")){
		           supra.updatePresence(from, Presence.composing)
		           var alzu = ["Oiee??????", "Me chamou???????", "Ol??", "Hii??????", "Oie vc j?? sabe que ?? corno?", "Ol?? amigo como vai.", "Nao quero conversar"]
                   var fie = alzu[Math.floor(Math.random() * alzu.length)]
                   cra = `${Math.floor(Math.random() * 100)}`
                   hisil = `${fie}`
                   reply(hisil)
                   }
                   if (budy.includes("filha")){		          
		          supra.updatePresence(from, Presence.composing)
			        reply("Vc ?? o supra?")
			       
			        }
                   if (budy.includes("Filha")){		          
		          supra.updatePresence(from, Presence.composing)
			        reply("Vc ?? o supra?")
			        }		
                   if (budy.includes("Osh")){  // respon tag ubah aja
                   const d = fs.readFileSync('./sticker/tenor.webp');
                   supra.sendMessage(from, d, sticker, {quoted: mek})
                   }
                  if (budy.includes("frio")){  // respon tag ubah aja
                   const d = fs.readFileSync('./sticker/frio.webp');
                   supra.sendMessage(from, d, sticker, {quoted: mek})
                   }
                   if (budy.includes("fria")){  // respon tag ubah aja
                   const d = fs.readFileSync('./sticker/frio.webp');
                   supra.sendMessage(from, d, sticker, {quoted: mek})
                   }
                  if (budy.includes("Fria")){  // respon tag ubah aja
                   const d = fs.readFileSync('./sticker/frio.webp');
                  supra.sendMessage(from, d, sticker, {quoted: mek})
                   }
                 if (budy.includes("Frio")){  // respon tag ubah aja
                 const d = fs.readFileSync('./sticker/frio.webp');
                 supra.sendMessage(from, d, sticker, {quoted: mek})
                 }
                 if (budy.includes("loli")){  // respon tag ubah aja
                 const d = fs.readFileSync('./sticker/loli.webp');
                 supra.sendMessage(from, d, sticker, {quoted: mek})
                 }
                 if (budy.includes("Loli")){  // respon tag ubah aja
                 const d = fs.readFileSync('./sticker/loli.webp');
                 supra.sendMessage(from, d, sticker, {quoted: mek})
                 }
                 if (budy.includes("feia")){  // respon tag ubah aja
                  const d = fs.readFileSync('./sticker/porno.webp');
                  supra.sendMessage(from, d, sticker, {quoted: mek})
                  }
   /* if (budy.includes("lhass")){ //@SUPRA ???
    supra.updatePresence(from, Presence.composing)
    const brinus = ["1","2","3","4"]
     kkk = brinus[Math.floor(Math.random() * brinus.length)]
     brle = fs.readFileSync('./audio/mcs'+kkk+'.mp3')
      supra.sendMessage(from, brle, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                   } */
                  if (budy.includes("chata")){  // respon tag ubah aja
                  const d = fs.readFileSync('./sticker/porno.webp');
                  supra.sendMessage(from, d, sticker, {quoted: mek})
                  }
                if (budy.includes("lhanna")){  // respon tag ubah aja
                 const d = fs.readFileSync('./strg/sticker/lhanna.webp');
                 supra.sendMessage(from, d, sticker, {quoted: mek})
                   }
                   if ((budy === `Quem e teu pai?`)){                     
                    console.log(color('[AUTO RESPONDER]', 'cyan'), color(`${budy}`, 'magenta'))       
                   reply("Meu pai ?? o supra")
                   }
                    if ((budy === `Te amo`)){                     
                    console.log(color('[AUTO RESPONDER]', 'cyan'), color(`${budy}`, 'magenta'))       
                   reply("Ta carente porra?")
                   }
                    if ((budy === `N??o`)){                     
                    console.log(color('[AUTO RESPONDER]', 'cyan'), color(`${budy}`, 'magenta'))       
                   reply("ta;-;")
                   }
                 if (budy.includes("Lhanna")){  // respon tag ubah aja
                 const d = fs.readFileSync('./strg/sticker/lhanna.webp');
                 supra.sendMessage(from, d, sticker, {quoted: mek})
                   }
					if (isGroup && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						console.log(muehe)
						reply(muehe)
					} else {
						return //console.log(color('[WARN]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
					}
                           }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
}
starts()
