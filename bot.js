const Discord = require("discord.js");
const TOKEN = "NDY2OTc0ODc2Njg3OTI1Mjc5.DjCeig.UkW2sBY80UvbOLib7_7gknn2RFk";

const prefix = "+"
var Client = new Discord.Client();

Client.on ("ready", function() {
    console.log("I am online and ready to use")
    Client.user.setGame("Developer with 𝓙𝓲𝓶𝓶𝔂𝓼");
});

Client.on("message", function(message) {
let args = message.content.split(' ').slice(1);

         
        if (message.content.startsWith(prefix + 'offline')) {
           message.channel.send("Time to sleep")
           }
        if (message.content.startsWith(prefix + 'avatar')) {
         const embed = new Discord.RichEmbed()
         .setImage(message.author.avatarURL)
         message.channel.send(embed);
  }
  if(message.content.startsWith(prefix + "ping")) {
            message.channel.send(new Date().getTime() - message.createdTimestamp + " ms");        
    }
    if (message.content.startsWith(prefix + 'kick')) {
    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        /**
         * Kick the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         */
        member.kick('Optional reason that will display in the audit logs').then(() => {
          // We let the message author know we were able to kick the person
          message.reply(`Successfully kicked ${user.tag}`);
        }).catch(err => {
          // An error happened
          // This is generally due to the bot not being able to kick the member,
          // either due to missing permissions or role hierarchy
          message.reply('I was unable to kick the member');
          // Log the error
          console.error(err);
        });
      } else {
        // The mentioned user isn't in this guild
        message.reply('That user isn\'t in this guild!');
      }
    // Otherwise, if no user was mentioned
    } else {
      message.reply('You didn\'t mention the user to kick!');
    }
  } 
  if (message.content.startsWith(prefix + 'ban')) {
    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        /**
         * Ban the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         * Read more about what ban options there are over at
         * https://discord.js.org/#/docs/main/master/class/GuildMember?scrollTo=ban
         */
        member.ban({
          reason: 'They were bad!',
        }).then(() => {
          // We let the message author know we were able to ban the person
          message.reply(`Successfully banned ${user.tag}`);
        }).catch(err => {
          // An error happened
          // This is generally due to the bot not being able to ban the member,
          // either due to missing permissions or role hierarchy
          message.reply('I was unable to ban the member');
          // Log the error
          console.error(err);
        });
      } else {
        // The mentioned user isn't in this guild
        message.reply('That user isn\'t in this guild!');
      }
    } else {
    // Otherwise, if no user was mentioned
      message.reply('You didn\'t mention the user to ban!');
    }
}

   if (message.content.startsWith(prefix + 'help')) {
   const chat = new Discord.RichEmbed()
    .setAuthor(`${message.author.username}`, message.author.avatarURL)
    .setTitle('Help Commands')
    .setColor(0xFF0000)
    .setTimestamp()
    .setFooter(message.author.username, message.author.avatarURL)
        .addField('Commands',
      `
      ${prefix}avatar
      ${prefix}ping
      ${prefix}ban
      ${prefix}kick
      ${prefix}invite
      `)
 
     //   .addField('',
      //``)

  message.channel.send(chat)
  }
  if (message.content.startsWith(prefix + 'invite')) {
           message.channel.send(`https://discordapp.com/oauth2/authorize?client_id=${Client.user.id}&scope=bot&permissions=2146958591`)
}

});


Client.login (TOKEN)
