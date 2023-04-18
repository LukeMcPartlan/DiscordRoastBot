//create a discord bot using openAI API that interacts on the Discord Server
require('dotenv').config();

//prep connection to discord API
const {Client,GatewayIntentBits} = require('discord.js');

//Picks short random roasts to bake in. This functionality was built to handle larger strings, with this short list of tiny strings it would function better to just add all of them to the prompt.
const roasts = new Array("Plays to much Runescape", "Got fired from google","is poly but gets no girls", "Plucks hairs from his face","is bad at gaming", "had to much money","is a narcisist","smells bad","has hair that is to long","his farts smell", "watched hentai in a public discord", "hair is unkept");
var randomIndex = Math.floor(Math.random() * roasts.length);
var randomString = roasts[randomIndex];
console.log(randomIndex);
console.log(randomString);

const client = new Client({ intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
]})

//e nconnection to OpenAI API
const { Configuration,OpenAIApi } = require('openai');
const configuration = new Configuration({
   organization: process.env.OPENAI_ORG,
    apiKey: process.env.OPENAI_KEY,
});
const openai = new OpenAIApi(configuration);

//check for when a message on discord is sent
client.on('messageCreate',async function(message){
    if (message.content.startsWith('/roast ')){ //check for the roast command
    try {
        if(message.author.id == client.user.id) return;
        console.log(message.content);
        randomIndex = Math.floor(Math.random() * roasts.length);
        randomString = roasts[randomIndex];
        console.log(randomIndex);
        console.log(randomString);
        const gptResponse = await openai.createCompletion({
            model: "text-davinci-003",
            prompt:  "ChatGPT is a Gamer who is playing a character named Roaster that likes gaming, especially overwatch and league, but dislikes Ryan and roasts him often. Chat GPT is responding once to the following message. Chat GPT is not supposed to use anyone elses usernames in its response, or respond from any perspectives besides Roaster. ChatGPT dose not write ChatGPT: or Roasters: or any other introduction at the start of its message. Roaster sometimes ends his sentances by relating them to Ryan. " + randomString + ` Roaster will respond to the message by relating it to this characteristic of ryan, formatted as a cruel and mean roast.\n\
            ${message.author.username}: ${message.content}\n\
            `,
            temperature: .8,
            max_tokens: 100,
            
        })
        message.reply( `${gptResponse.data.choices[0].text}` + "...")
    } catch(err){
        console.log(err)
    }
    }
})

client.login(process.env.DISCORD_TOKEN);
console.log("ChatGPT Bot is Online on Discord")


