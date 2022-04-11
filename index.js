const Discord = require("discord.js");
const client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES
    ]
});

client.on("ready", () => {
    console.log("BOT ACTIVADO!");
 });
 
 client.on("message", (message) => {
   if(message.content.startsWith("Línea Roca")) {
     message.channel.send("La Línea Roca está activa, pero tiene un mantenimiento programado con duración de.. 2-3 días.");
   }

   if(message.content === "Línea H")
   message.channel.send("La Línea H Está funcionando con normalidad.");

   


 });
 
 client.login("OTYxMDc2ODcyMzQ1NjkwMTcy.Ykzulg.YrCM3WqfKSbOCb9OlSMdQsYQ57g");
