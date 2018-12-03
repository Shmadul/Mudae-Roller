const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", message => {
const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

//Help Menu
if(message.content === "bot.help"){
   message.channel.send("bot(.)pull - Single Roll");
   message.channel.send("bot(.)roll - Roll 10x");
};

//Rolls 1x
if(message.content === "bot.pull"){
   message.channel.send("$w");
};

//Rolls 10x
if(message.content === "bot.roll"){
   message.channel.send("$w");
sleep(2000).then(() => {
   message.channel.send("$w");
   sleep(2000).then(() => {
   message.channel.send("$w")
   sleep(2000).then(() => {
   message.channel.send("$w");
   sleep(2000).then(() => {
   message.channel.send("$w");
   sleep(2000).then(() => {
   message.channel.send("$w");
   sleep(2000).then(() => {
   message.channel.send("$w");
   sleep(2000).then(() => {
   message.channel.send("$w");
   sleep(2000).then(() => {
   message.channel.send("$w");
   sleep(2000).then(() => {
   message.channel.send("$w");
})})})})})})});})})
};
});


//Insert Discord User Token
client.login('');
