let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ •
│ •
╰────
`.aparar()) // Adicione você mesmo se quiser
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
