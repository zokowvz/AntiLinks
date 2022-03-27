const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("[+] connecté à ${client.user.username} ");
});

client.on("message", (message) => {
  if (message.content.includes("https://")) {
    console.log("deleted" + message.content + " from " + message.author)
    message.delete(1);
    message.channel.sendMessage("pas de lien ici, t sah la ?, " + message.author)
  }
  if (message.content.includes("http://")) {
    console.log("deleted " + message.content + " from " + message.author)
    message.delete(1);
    message.channel.sendMessage("pas de lien ici, t sah la ?, " + message.author)
  }
    if (message.content.includes("discord.gg/")) {
    console.log("deleted " + message.content + " from " + message.author)
    message.delete(1);
    message.channel.sendMessage("pas de lien ici, t sah la ?, " + message.author)
  }
  if (message.content.includes("discord.gg")) {
    console.log("deleted " + message.content + " from " + message.author)
    message.delete(1);
    message.channel.sendMessage("pas de lien ici, t sah la ?, " + message.author)
  }
  if (message.content.includes("www.")) {
    console.log("deleted " + message.content + " from " + message.author)
    message.delete(1);
    message.channel.sendMessage("pas de lien ici, t sah la ?, " + message.author)
  }
  if (message.content.includes("!help")) {
    console.log("commande help executée par " + message.author)
   message.channel.send("Panel d'help, fin y'a que l'antilink ^^")
  }
  if (message.content.startsWith("!invite")) {
    console.log("invite par " + message.author)
    message.channel.sendMessage("discord.gg/lightgen")
  }
  if (message.content.startsWith("!ping")) {
    console.log("ping par " + message.author)
    message.channel.sendMessage( client.ping + "ms.")
  }
});

client.on("guildCreate", guild => {
  console.log("j'viens de join un serv ptdr, " + guild.name)
});

client.login("mets ton token ici assisté");
