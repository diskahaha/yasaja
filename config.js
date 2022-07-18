/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

//━━━━━━━━━━━━━━━[ BATAS ]━━━━━━━━━━━━━━━━━//
const fs = require('fs')
const chalk = require('chalk')

//━━━━━━━━━━━━━━━[ APIKEY TERPISAH ]━━━━━━━━━━━━━━━━━//
lolkey = 'Apikey1'
//━━━━━━━━━━━━━━━[ SETTINGS ]━━━━━━━━━━━━━━━━━//
global.owner = ['6281285578808','6281285578808','6281285578808','0','6281285578808']
global.premium = ['6281285578808']
global.packname = '𝕭𝖔𝖙
global.author = 'Andii ༢࿔ྀ'
global.sessionName = 'hisoka'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: 'Sukses Bwang :v．．．',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Orang Sabar Meqi Nya Lebar, Kata 𝕭𝖔𝖙 • Andii ༢࿔ྀ',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./media/kitzuna.jpg')
global.visoka = { url: 'https://telegra.ph/file/15209657f9d4f59c7ca1e.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
