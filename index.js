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
     message.channel.send("La Línea Roca está activa.");
   }

   if(message.content === "Línea H")
   message.channel.send("La Línea H Está funcionando con normalidad.");
   
   
   if(message.content === "Línea A")
   message.channel.send("La Línea A Está funcionando con normalidad.");

   if(message.content === "Línea B")
   message.channel.send("La Línea B Está funcionando con normalidad.");
   }
   
   if(message.content === "Línea C")
   message.channel.send("La Línea H Está funcionando con normalidad.");
   }
   
   if(message.content === "Línea D")
   message.channel.send("La Línea D Está funcionando con normalidad.");
   }
   
   if(message.content === "Línea E")
   message.channel.send("La Línea E Está funcionando con normalidad.");
   }

   


 });
 
 client.login("OTYxMDc2ODcyMzQ1NjkwMTcy.Ykzulg.YrCM3WqfKSbOCb9OlSMdQsYQ57g");
