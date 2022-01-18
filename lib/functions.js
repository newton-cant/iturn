const fetch = require('node-fetch')
const axios = require('axios')
const cfonts = require('cfonts')
const spin = require('spinnies')
const Crypto = require('crypto')
const fs = require('fs');
const cheerio = require('cheerio');
//const fetch = require('node-fetch')
const FormData = require('form-data')
const { default: Axios } = require('axios');
const { exec } = require('child_process');
const { spawn } = require('child_process')

const wait = async (media) => new Promise(async (resolve, reject) => {
    const attachmentData = `data:image/jpeg;base64,${media.toString('base64')}`
    const response = await fetch("https://trace.moe/api/search",{method: "POST",body: JSON.stringify({ image: attachmentData }),headers: { "Content-Type": "application/json" }});
    if (!response.ok) reject(`Gambar tidak ditemukan!`);
    const result = await response.json()
    try {
    	const { is_adult, title, title_chinese, title_romaji, title_english, episode, season, similarity, filename, at, tokenthumb, anilist_id } = result.docs[0]
    	let belief = () => similarity < 0.89 ? "Saya memiliki keyakinan rendah dalam hal ini : " : ""
    	let ecch = () => is_adult ? "Iya" : "Tidak"
    	resolve({video: await getBuffer(`https://media.trace.moe/video/${anilist_id}/${encodeURIComponent(filename)}?t=${at}&token=${tokenthumb}`), teks: `${belief()}
~> Ecchi : *${ecch()}*
~> Título Japonês : *${title}*
~> Título Ortográfico : *${title_romaji}*
~> Título inglês : *${title_english}*
~> Episódio : *${episode}*
~> Estação  : *${season}*`});
	} catch (e) {
		console.log(e)
		reject(`Eu não sei que anime é esse`)
	}
})

exports.simih = simih = async (text) => {
anu = await fetchJson(`https://lolizit-api.herokuapp.com/api/simsimi_br?msg=${text}&apikey=Tobi`)
return anu.resultado.resposta
}
function webp2gifFile(path) {
 return new Promise((resolve, reject) => {
const bodyForm = new FormData()
bodyForm.append('new-image-url', '')
bodyForm.append('new-image', fs.createReadStream(path))
Axios({
method: 'post',
url: 'https://s6.ezgif.com/webp-to-mp4',
data: bodyForm,
headers: {
'Content-Type': `multipart/form-data; boundary=${bodyForm._boundary}`
}
}).then(({ data }) => {
const bodyFormThen = new FormData()
const $ = cheerio.load(data)
const file = $('input[name="file"]').attr('value')
const token = $('input[name="token"]').attr('value')
const convert = $('input[name="file"]').attr('value')
const gotdata = {
file: file,
token: token,
convert: convert
}
bodyFormThen.append('file', gotdata.file)
bodyFormThen.append('token', gotdata.token)
bodyFormThen.append('convert', gotdata.convert)
Axios({
method: 'post',
url: 'https://ezgif.com/webp-to-mp4/' + gotdata.file,
data: bodyFormThen,
headers: {
'Content-Type': `multipart/form-data; boundary=${bodyFormThen._boundary}`
}
}).then(({ data }) => {
const $ = cheerio.load(data)
const result = 'https:' + $('div#output > p.outfile > video > source').attr('src')
resolve({
status: true,
message: "Created By MRHRTZ",
result: result
})
}).catch(reject)
}).catch(reject)
})
}

const h2k = (number) => {
    var SI_POSTFIXES = ["", " K", " M", " G", " T", " P", " E"]
    var tier = Math.log10(Math.abs(number)) / 3 | 0
    if(tier == 0) return number
    var postfix = SI_POSTFIXES[tier]
    var scale = Math.pow(10, tier * 3)
    var scaled = number / scale
    var formatted = scaled.toFixed(1) + ''
    if (/\.0$/.test(formatted))
      formatted = formatted.substr(0, formatted.length - 2)
    return formatted + postfix
}

const getBuffer = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (e) {
		console.log(`Error : ${e}`)
	}
}

const randomBytes = (length) => {
    return Crypto.randomBytes(length)
}

const generateMessageID = () => {
    return randomBytes(10).toString('hex').toUpperCase()
}

const getGroupAdmins = (participants) => {
	admins = []
	for (let i of participants) {
		i.isAdmin ? admins.push(i.jid) : ''
	}
	return admins
}

const getRandom = (ext) => {
	return `${Math.floor(Math.random() * 10000)}${ext}`
}

const spinner = { 
  "interval": 120,
  "frames": [
    "🕐",
    "🕑",
    "🕒",
    "🕓",
    "🕔",
    "🕕",
    "🕖",
    "🕗",
    "🕘",
    "🕙",
    "🕚",
    "🕛"
  ]}

let globalSpinner;


const getGlobalSpinner = (disableSpins = false) => {
  if(!globalSpinner) globalSpinner = new spin({ color: 'blue', succeedColor: 'green', spinner, disableSpins});
  return globalSpinner;
}

spins = getGlobalSpinner(false)

const start = (id, text) => {
	spins.add(id, {text: text})
	}
const info = (id, text) => {
	spins.update(id, {text: text})
}
const success = (id, text) => {
	spins.succeed(id, {text: text})

	}

const close = (id, text) => {
	spins.fail(id, {text: text})
}

const banner = cfonts.render(('LHANNA|BOT|SUPRA'), {
    font: 'block',
    color: 'red',
    align: 'center',
    gradient: ["red","yellow"],
    lineHeight: 3
  });


module.exports = { wait, simih, getBuffer, h2k, webp2gifFile, generateMessageID, getGroupAdmins, getRandom, start, info, success, banner, close }
