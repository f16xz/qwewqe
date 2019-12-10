const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("650381791424937986")
setInterval(function() {
channel.send(`hi iam name is anas and thankyou forliteng me beby byrhi iam name is anas and thankyou forliteng me beby byr hi iam name is anas and thankyou forliteng me beby byr hi iam name is anas and thankyou forliteng me beby byr hi iam name is anas and thankyou forliteng me beby byr hi iam name is anas and thankyou forliteng me beby byr`);
}, 30)
})

client.login(process.env.BOT_TOKEN);