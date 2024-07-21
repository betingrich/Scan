const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const QRCode = require('qrcode');
const express = require('express');
const path = require('path');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
	default: Marisel_King,
	useMultiFileAuthState,
	jidNormalizedUser,
	Browsers,
	delay,
	makeInMemoryStore,
} = require("marisel-king");

function removeFile(FilePath) {
	if (!fs.existsSync(FilePath)) return false;
	fs.rmSync(FilePath, {
		recursive: true,
		force: true
	})
};
const {
	readFile
} = require("node:fs/promises")
router.get('/', async (req, res) => {
	const id = makeid();
	async function Marisel_King_QR_CODE() {
		const {
			state,
			saveCreds
		} = await useMultiFileAuthState('./temp/' + id)
		try {
			let Qr_Code_By_Marisel_King = Marisel_King({
				auth: state,
				printQRInTerminal: false,
				logger: pino({
					level: "silent"
				}),
				browser: Browsers.macOS("Desktop"),
			});

			Qr_Code_By_Marisel_King.ev.on('creds.update', saveCreds)
			Qr_Code_By_Marisel_King.ev.on("connection.update", async (s) => {
				const {
					connection,
					lastDisconnect,
					qr
				} = s;
				if (qr) await res.end(await QRCode.toBuffer(qr));
				if (connection == "open") {
					await delay(5000);
					let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
					await delay(800);
				   let b64data = Buffer.from(data).toString('base64');
				   let session = await Qr_Code_By_Marisel_King.sendMessage(Qr_Code_By_Marisel_King.user.id, { text: '' + b64data });
	
				   let SIGMA_MD_TEXT = `
*𝗞𝗜𝗡𝗚 𝗠𝗔𝗥𝗜𝗦𝗘𝗟 𝗠𝗗 𝗖𝗢𝗡𝗡𝗘𝗖𝗧𝗘𝗗*
*𝑲𝒊𝒏𝒈 𝑴𝒂𝒓𝒊𝒔𝒆𝒍*
*𝑨𝒎𝒐𝒏𝒈 𝑻𝒉𝒆 𝑪𝒉𝒂𝒎𝒑𝒊𝒐𝒏 𝑩𝒐𝒕𝒔*
____________________________________
╔════◇
║『 𝗗𝗘𝗩𝗘𝗟𝗢𝗣𝗘𝗥』

║ ❒ *𝑴𝒂𝒓𝒊𝒔𝒆𝒍*  :254740007567

╚════════════════════❒
╔═════◇
║ 『••• 𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢 •••』

║ ❒ *𝑮𝒊𝒕𝒉𝒖𝒃* : https://github.com/betingrich

║ 
╚════════════════════╝ 
 *𝑲𝒊𝒏𝒈 𝑴𝒂𝒓𝒊𝒔𝒆𝒍*
___________________________________

𝓓𝓸𝓷𝓽 𝓯𝓸𝓻𝓰𝓮𝓽 𝓽𝓸 ☆𝓣𝓱𝓮 𝓡𝓮𝓹𝓸`
					
	 await Qr_Code_By_Marisel_King.sendMessage(Qr_Code_By_Marisel_King.user.id,{text:Marisel_King_TEXT},{quoted:session})



					await delay(100);
					await Qr_Code_By_Marisel_King.ws.close();
					return await removeFile("temp/" + id);
				} else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
					await delay(10000);
					SIGMA_MD_QR_CODE();
				}
			});
		} catch (err) {
			if (!res.headersSent) {
				await res.json({
					code: "Service Unavailable"
				});
			}
			console.log(err);
			await removeFile("temp/" + id);
		}
	}
	return await Marisel_King_Qr()
});
module.exports = router
