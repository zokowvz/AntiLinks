const Discord = require("discord.js");
const client = new Discord.Client();
var pub = 'discord.gg/' || 'discordapp.com/invite/'||'https://'||'http://' || 'discord.com/invite/' // vous pouvez en ajouter plus si nécessaire.
client.on('message', (message) => {
  if (message.content.includes(pub)) {
    message.delete()
      .then(message.channel.send("tu ne peux pas envoyer de lien ici !"))
  }
  if(message.content == "support") {
    message.channel.send("discord.gg/lightgen")
  }
});
client.login("token ici");
