// constantes
const config = require("./config.json")
const Discord = require("discord.js");
const client = new Discord.Client();
let prefix = config.prefix
// NE PAS LANCER ENCORE CAR JE NE L'AI MEME PAS TEST J'LAI FAIT A 4H PSQ J'MENNUYAIS JE N'AI PAS ENCORE FINI !!!
// la db 
const {Table, Database} = require("luma-db-v2")
const whitelist = new Table("wl")
const link = new Table("links")
const onoff = new Table("onoff")
const db = new Database({
    name: "dbname", 
    password: "dbpass", 
    tables: [whitelist, link, onoff] 
})
     // ------------ FIN CONFIG DB
// pub
// var pub = 'discord.gg/' || 'discordapp.com/invite/'||'https://'||'http://' || 'discord.com/invite/' // vous pouvez en ajouter plus si nécessaire.
client.on('message', (message) => {
  let command = message.content

  if(command === prefix + "addwl"){
   if(!args[0]){
   message.reply("oui oui d'accord, je dois WhiteList le vent, pourquoi pas")
   }
     if(message.author !== config.owner){
       message.reply("``Tu dois être Propriétaire du bot pour executer cette commande !``")
     }
     if(message.author === config.owner){
       whitelist.push('wl', args[0]).save()
       console.log(whitelist.get('wl'))
       message.reply("Le membre portant l'id" + "``" + args[0] + "``" + "a été ajouté dans la DB !")
     }
  }
  if(command === prefix + "addlink"){
    if(!args[0]){
      message.reply("Je ne peux pas AntiLink le vent !!")
    }
      if(message.author.id !== config.owner){
       message.reply("``Tu dois être Propriétaire du bot pour executer cette commande !``")
     }
  
  if(message.author.id === config.owner || whitelist.get('wl')){
       link.set('links', args[0]).save()
       console.log(link.get('links'))
       message.reply("Le Lien" + "``" + args[0] + "``" + "a été ajouté dans la DB et sera dorénavant pris en compte !")
     }
  }
   if(command === prefix + "rmwl"){
     if(!args[0]){
       message.reply("Je dois remove le vent ?")
     }
     let torf = whitelist.has(args[0])
     if(torf === true){
     whitelist.remove('wl', args[0]) 
     }
     if(torf === false){
        message.reply("Je ne trouve pas cette personne WL dans la db !")
     }
   }



if(message.content.includes(link.get('links')))
  if(link.get('links') === null){
    return;
  }
  if(message.author === config.owner || whitelist.get('list')){
    return;
  }else{
    message.delete()
    message.channel.send("Le Lien que tu as envoyé est interdit sur ce serveur !")
  }
    //message.delete()
    //  .then(message.channel.send("tu ne peux pas envoyer de lien ici !"))
  //}
if(command == prefix + "alllinks"){
 let alllinks = whitelist.all()
 if(alllinks === null){
 message.reply("Il n'y a pas de Liens enregistrés dans la DB !")
 }else{
 message.reply("```" + alllinks + "```")
}
}
});

   client.on('messageUpdate', (newMessage) => {
   if(newMessage.content === link.get('links')){
    message.delete().then(
      message.channel.send("Le Lien que tu as envoyé n'est pas autorisé sur ce serveur !")
    )
   }
     });

client.login(config.token);
