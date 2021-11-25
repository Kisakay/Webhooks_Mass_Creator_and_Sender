//CONST
const colors = require("colors")
const readline = require("readline")
const Discord= require("discord.js")
const client = new Discord.Client()
const fs = require("fs")
const terminalTitle = require('node-bash-title');
const configuration = require("./config.json")
console.log("   ___  _                     __  _      __    __   __             __     _____             __          ".red)
console.log("  / _ \\(_)__ _______  _______/ / | | /| / /__ / /  / /  ___  ___  / /__  / ___/______ ___ _/ /____  ____".red)
console.log(" / // / (_-</ __/ _ \\/ __/ _  /  | |/ |/ / -_) _ \\/ _ \\/ _ \\/ _ \\/  '_/ / /__/ __/ -_) _ `/ __/ _ \\/ __/".red)
console.log("/____/_/___/\\__/\\___/_/  \\_,_/   |__/|__/\\__/_.__/_//_/\\___/\\___/_/\\_\\  \\___/_/  \\__/\\_,_/\\__/\\___/_/ \n".red)
console.log("\nMade by Ezermoz#0001".yellow)
console.log('Notes: Make sure the Discord bot is on the server where you want to create the webhook.'.green)
console.log("")
terminalTitle('Discord Webhook Creator | Made by Ezermoz#0001');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  

  rl.question('Whats is the Discord Channels ID ? > '.blue, (discordChannelsID) => {
        rl.question('Whats is the Discord Webhook Name ? > '.blue, (discordWebhookName) => {
        rl.question('How many webhook do you want ? (max recommended is 10/guilds) > '.blue, (webhookCount) => {
            webhookGen = 0
            const channel = client.channels.cache.get(discordChannelsID)   
      for (let pas = 0; ps < webhookCount; ps++) {
            try {
                  function copieCode(length, letter) {
                        var multiplier = '';
                        if (letter.indexOf('0') > -1) multiplier += '0123456789';
                        if (letter.indexOf('A') > -1) multiplier += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
                        if (letter.indexOf('a') > -1) multiplier += 'abcdefghijklmnopqrstuvwxyz';
                        var results = '';
                        for (var i = length; i > 0; --i) 
                        {
                        results += multiplier[Math.floor(Math.random() * multiplier.length)];
                        }
                        return results;
                        }
                        username1 = copieCode(5,'0aA')+" | "+discordWebhookName
                  channel.createWebhook(username1, {
                        avatar: 'https://cdn.discordapp.com/attachments/https://media.istockphoto.com/photos/installation-with-white-cube-3d-render-picture-id1144256820?k=20&m=1144256820&s=170667a&w=0&h=IAvpc2WFsJpdrjXInOKx3zhfyTbJqYk0PsOQoeDX-Ls=/913440594406289478/e414b43b134bfdd54307bc41ff5f9bd5.jpg',
                  })
                        .then(webhook => { 
                              
                              webhookGen++
                              const saveWebhookToken = fs.createWriteStream('./webhook.txt', {
                                    flags: 'a'  
                                })
                                let content = `${webhook.url}`
                                      saveWebhookToken.write(content.toString()+'\r\n')
                                          console.log(`${webhookGen}/${webhookCount} | Succefully WebHook Created -> ${webhook.url}`.red)
                                          terminalTitle(`Discord Webhook Creator | Created: ${webhookGen}/${webhookCount} | Made by Ezermoz#0001`);
                                          
                        })
                        .catch(console.error);
            } catch (error) {
                  console.error('Error :/', error);
            }
          }
          
})
})
})
client.login(configuration.TOKEN)
