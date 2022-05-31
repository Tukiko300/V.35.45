import fs from 'fs'
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
let text = `
*[❗𝐈𝐍𝐅𝐎❗] 𝙻𝙰𝚂 𝙵𝚄𝙽𝙲𝙸𝙾𝙽𝙴𝚂 𝙿𝙰𝚁𝙰 𝚂𝙴𝚁 𝙱𝙾𝚃 (#𝚜𝚎𝚛𝚋𝚘𝚝, #𝚓𝚊𝚍𝚒𝚋𝚘𝚝, #𝚋𝚘𝚝𝚜, #𝚐𝚎𝚝𝚌𝚘𝚍𝚎, #𝚜𝚞𝚋𝚋𝚘𝚝𝚜, #𝚜𝚎𝚛𝚜𝚞𝚋𝚋𝚘𝚝) 𝙽𝙾 𝙴𝚂𝚃𝙰𝙽 𝙰𝙲𝚃𝚄𝙰𝙻𝙼𝙴𝙽𝚃𝙴 𝙵𝚄𝙽𝙲𝙸𝙾𝙽𝙰𝙻𝙴𝚂 𝙿𝙰𝚁𝙰 𝙴𝚂𝚃𝙴 𝙱𝙾𝚃 (V.35.45)*

*—◉ 𝙿𝚄𝙴𝙳𝙴 𝙿𝚁𝙾𝙱𝙰𝚁 𝙸𝙽𝚂𝚃𝙰𝙻𝙰𝚁 𝙳𝙴𝚂𝙳𝙴 𝙲𝙴𝚁𝙾 𝙴𝙻 𝙱𝙾𝚃 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝙳𝙾 𝚄𝙽𝙾 𝙳𝙴 𝙻𝙾𝚂 𝚃𝚄𝚃𝙾𝚁𝙸𝙰𝙻𝙴𝚂 instalandolo en termux. Descarga termux en termux.com
`.trim()
 ESCRIBE LOS SIGUIENTES COMANDOS UNO POR UNO:
> cd
> termux-setup-storage
> apt update 
> pkg upgrade 
> pkg install git -y
> pkg install nodejs -y
> pkg install ffmpeg -y
> pkg install imagemagick -y
> pkg install yarn
> git clone https://github.com/Tukiko300/V.35.45
> cd V.35.45
> npm install
> yarn install 
> npm install
> npm update
> npm start
—◉ ✔️ ACTIVAR EN CASO DE DETENERSE ✔️
ESCRIBE LOS SIGUIENTES COMANDOS UNO POR UNO:
> cd 
> cd V.35.45
> npm start
—◉ 👽 OBTENER OTRO CODIGO QR 👽
ESCRIBE LOS SIGUIENTES COMANDOS UNO POR UNO:
> cd 
> cd V.35.45
> rm -rf session.data.json
> npm start
—◉ 📝 NOTAS 📝
- ES POSIBLE QUE EL BOT TENGA ALGUNAS FALLAS, SE IRAN SOLUCIONANDO CONFORME SE VAYAN DETECTANDO
- ES RECOMENDABLE LEER TODO EL MENU Y VER EL FUNCIONAMIENTO DE CADA UNO DE LOS COMANDOS
- REPORTA CUALQUIER FALLO CON EL COMANDO DE REPORTE 
- PARA PODER ESCANEAR EL CODIGO QR DEBES SER PARTICIPANTE DE LA VERSION MULTI-DEVICE (BETA) DE WHATSAPP
- NO MODIFIQUES NADA QUE NO SEPAS PARA QUE ES, PARA EVITAR PROBLEMAS O ERRORES
- SI VAS A EDITAR POR COMPLETO DEJA LOS CREDITOS DEL BOT 
- EL BOT ES COMPARTIBLE CON WHATSAPP NORMAL O BUSINESS
- ATENTO A LAS ACTUALIZACIONES QUE SE HAGAN EN ESTE REPOSITORIO
- EL ADD Y EL KICK PUEDEN OCASIONAR QUE EL NUMERO SE VAYA A SOPORTE 
- EL BOT FUNCIONA AUNQUE EL WHATSAPP NO TENGA CONEXION 
- SE RECOMIENDA REESCANEAR EL CODIGO QR CADA 2 DIAS, PARA EVITAR PROBLEMAS O ERRORES
V.35.45 __________ By Tsukiko300 
conn.reply(m.chat, text, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '𝙸𝙽𝙵𝙾𝚁𝙼𝙰𝙲𝙸𝙾𝙽 - 𝚂𝙴𝚁𝙱𝙾𝚃',
body: 'ʙʏ ᴛʜᴇ ᴍʏsᴛᴄ ﹣ ʙᴏᴛ',         
previewType: 0, thumbnail: fs.readFileSync("./Menu2.jpg"),
sourceUrl: `https://github.com/Tukiko300/V.35.45`}}})   
}
handler.command = /^(jadibot|serbot|bots|subbots|getcode)/i
export default handler
