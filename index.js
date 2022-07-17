// constantes
const config = require("./config.json")
const Discord = require("discord.js");
const client = new Discord.Client();
let prefix = config.prefix
// NE PAS LANCER ENCORE CAR JE NE L'AI MEME PAS TEST J'LAI FAIT A 4H PSQ J'MENNUYAIS JE N'AI PAS ENCORE FINI !!!
// la db 
const {Table, Database} = require('luma-db-v2')
const whitelist = new Table("wl")
const link = new Table("links")
const onoff = new Table("onoff")
const myDb = new Database({
    name: "dbname", 
    password: "dbpass", 
    tables: [wl, links, onoff] 
})
     // ------------ FIN CONFIG DB
// pub
var pub = 'discord.gg/' || 'discordapp.com/invite/'||'https://'||'http://' || 'discord.com/invite/' // vous pouvez en ajouter plus si nécessaire.
client.on('message', (message) => {
  let command = message.content

  if(command === prefix + "addwl"){
     if(message.author !== config.owner){
       message.reply("``Tu dois être Propriétaire du bot pour executer cette commande !``")
     }
     if(message.author === config.owner){
       wl.push('list', args[0]).save()
       console.log(wl.get('list'))
       message.reply("Le membre portant l'id" + "``" + args[0] + "``" + "a été ajouté dans la DB !")
     }
  }
  if(command === prefix + "addlink"){
      if(message.author !== config.owner){
       message.reply("``Tu dois être Propriétaire du bot pour executer cette commande !``")
     }
  }
  if(message.author === config.owner){
       links.set('link', args[0]).save()
       console.log(links.get('link'))
       message.reply("Le Lien" + "``" + args[0] + "``" + "a été ajouté dans la DB et sera dorénavant pris en compte !")
     }
   if(command === prefix + "rmwl"){
     if(!args[0]){
       message.reply("Je dois remove le vent ?")
     }
     let torf = wl.has(args[0])
     if(torf === true){
     wl.remove('list', args[0]) //reverse of 'push'
     }
     if(torf === false{
        message.reply("Je ne trouve pas cette personne WL dans la db !")
   }
   }


if(message.content.includes(links.get('link')))
  if(links.get('link') === null){
    return;
  }
  if(message.author === config.owner || wl.get('list')){
    return;
  }else{
    message.delete()
    message.channel.send("Le Lien que tu as envoyé est interdit sur ce serveur !")
  }
    //message.delete()
    //  .then(message.channel.send("tu ne peux pas envoyer de lien ici !"))
  //}
if(command == prefix + "alllinks"){
 let alllinks = wl.all()
 if(alllinks === null){
 message.reply("Il n'y a pas de Liens enregistrés dans la DB !")
 }else{
 message.reply("```" + alllinks + "```")
}
}
});
client.login(config.token);
