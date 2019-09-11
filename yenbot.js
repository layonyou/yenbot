const Discord = require("discord.js");
const client = new Discord.Client();

const CHANNELS = {"bot_development" : "621142918199246858"}

function channelCheck(channelID){
  if(channelID === CHANNELS.bot_development)
    return true;
  else
    return false;
}

function decision(maxOptions){
  if(typeof maxOptions != "number"){
    return "Error: Not a number! Can't decide :("
  } else {
  return Math.floor(Math.random() * maxOptions) + 1;
  }
}

client.on("ready", () => {
 console.log(`Logged in as ${client.user.tag}!`);
 });

client.on("message", msg => {
  if(channelCheck(msg.channel.id)){
    if (msg.content.startsWith("decide")){
      msg.reply(decision(parseInt(msg.content.split(" ")[1])));
    }
    if (msg.content === "ping") {
      msg.reply("pong");
    }
    else if(msg.content === "give"){
      msg.reply("chocolate");
    }
  }
});

client.login(JSON.parse("./config.json"));
