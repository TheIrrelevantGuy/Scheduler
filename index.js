const Discord = require("discord.js");
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })
const config = require("./config.json");




//events
client.on("ready", () => {
  console.log(`${client.user.username} is up and running`); 
  client.user.setActivity(`fucking filip !`);

});

client.on("guildCreate", guild => {
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
});

client.on("guildDelete", guild => {
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
});


client.on("message", async message => {
  if(message.author.bot) return; 

  
  if(message.content.indexOf(config.prefix) !== 0) return;  
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  

//embeds


//funtions
function unix() {
  let x = Date.now();
  let e = 1000
  let timestamp = x / e;
  let y = 60;
  let z = timestamp + y;
  let n = z.toFixed()

  message.channel.send(`this msg will be updated in <t:${n}:F>`)
}

//commands

if(command === "time") {
  function penis() {
    let x = Date.now();
    let e = 100
     
      
    let timestamp = x / e;
    let y = 60;
    let z  = timestamp + y;
    let n = z.toFixed()
  message.channel.send(`this msg will be updated in <t:${n}:F>`)
  }

  
  setInterval(penis, 3.6e+6);

}

//<t:${n}:R>





if(command === "date") {
  message.channel.send(`${x}`)
}




//message.channel.send("") 
//message.author.send("")
//message.react("")





});

client.login(config.token);