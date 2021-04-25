const Discord = require('discord.js'); 
const semoizm = new Discord.Client();
const semoizm2 = require('ayarlar.json')


semoizm.on('message', message => { 
	
	function rasteleSembol(uzunluk, semboller) {

var maske = '';

if (semboller.indexOf('a') > -1) maske += 'abcdefghijklmnopqrstuvwxyz';

if (semboller.indexOf('A') > -1) maske += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

if (semboller.indexOf('0') > -1) maske += '0123456789';


var sonuc = '';

 

for (var i = uzunluk; i > 0; --i) 

{

sonuc += maske[Math.floor(Math.random() * maske.length)];

}

return sonuc;

}

function spamla(){
	message.channel.send("https:/"+"/discord.gift/" + rasteleSembol(16,'0aA'));
}

	if (message.channel.id = semoizm2.kanalid){
		if(message.content.startsWith("s!nitro ")){
		try{
		var veri = message.content.toString();
		var veriSn = veri.substring(10)
 		var saniye = parseInt(veriSn);
 		var saniye1 = saniye * 1000;
		if (saniye > 1){
		setInterval(spamla, saniye1);
		} 
		
		else{
			message.reply("s!nitro (saniye) şeklinde kullanınız!");
		}
		}
		catch(err){
			message.channel.send("Teknik bir hata oluştu!");
		}
		}
		}
 	


});
semoizm.login(semoizm2.token);
    
    
