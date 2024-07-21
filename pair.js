PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const express = require('express');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
    default: Marisel_King,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers
} = require("marisel-King");

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
        async function Marisel_King_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/'+id)
     try {
            let Pair_Code_By_Marisel_King = Marisel_King({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({level: "fatal"}).child({level: "fatal"}),
                browser: ["Chrome (Linux)", "", ""]
             });
             if(!Pair_Code_By_Marisel_King.authState.creds.registered) {
                await delay(1500);
                        num = num.replace(/[^0-9]/g,'');
                            const code = await Pair_Code_By_Marisel_King.requestPairingCode(num)
                 if(!res.headersSent){
                 await res.send({code});
                     }
                 }
            Pair_Code_By_Marisel_King.ev.on('creds.update', saveCreds)
            Pair_Code_By_Marisel_King.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
                await delay(5000);
                let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                await delay(800);
               let b64data = Buffer.from(data).toString('base64');
               let session = await Pair_Code_By_Marisel_King.sendMessage(Pair_Code_By_Marisel_King.user.id, { text: '' + b64data });

               let Marisel_King_TEXT = `
*𝗞𝗜𝗡𝗚 𝗠𝗔𝗥𝗜𝗦𝗘𝗟 𝗖𝗢𝗡𝗡𝗘𝗖𝗧𝗘𝗗*
*𝑴𝒂𝒓𝒊𝒔𝒆𝒍*
*𝑨𝒎𝒐𝒏𝒈 𝑻𝒉𝒆 𝑪𝒉𝒂𝒎𝒑𝒊𝒐𝒏 𝑩𝒐𝒕𝒔*
____________________________________
╔════◇
║『 𝗗𝗘𝗩𝗘𝗟𝗢𝗣𝗘𝗥』

║ ❒ *M𝒂𝒓𝒊𝒔𝒆𝒍*  : _254740007567_

╚════════════════════❒
╔═════◇
║ 『••• 𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢 •••』

║ ❒ *𝑮𝒊𝒕𝒉𝒖𝒃* : _https://github.com/betingrich_

║ 
╚════════════════════╝ 
 *𝑴𝒂𝒓𝒊𝒔𝒆𝒍*
___________________________________

𝑫𝒐𝒏𝒕 𝑭𝒐𝒓𝒈𝒆𝒕 𝒕𝒐☆ 𝑻𝒉𝒆 𝒓𝒆𝒑𝒐`
 await Pair_Code_By_Marisel_King.sendMessage(Pair_Code_By_Marisel_King.user.id,{text:Marisel_King_TEXT},{quoted:session})
 

        await delay(100);
        await Pair_Code_By_Marisel_King.ws.close();
        return await removeFile('./temp/'+id);
            } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    Marisel_King_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/'+id);
         if(!res.headersSent){
            await res.send({code:"Service Unavailable"});
         }
        }
    }
    return await Marisel_King_PAIR_CODE()
});
module.exports = router
