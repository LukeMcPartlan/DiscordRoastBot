# Discord Roast Bot
This was a bot I made to test the OpenAI API. It uses a node.js backend and Discord API calls to listen for a /roast message in discord, and then responds in discord with a response generated by OpenAIs GPT3 Api. This response is generated with two inputs, the /roast message content, and a custom prompt that is dirived from random things ryan has said in discord in the past. For privacy reasons, Ryans discord message history is not in this repository, and is replaced with a set of strings I custom wrote. In addition, some screenshots were taken before /roast was a command, and the bot would respond to all messages. 


![image](https://user-images.githubusercontent.com/35940692/232892010-fd9548f6-ffc2-4189-ac85-8f8357cb61df.png)

I used a combination of JavaScript, Discord API calls, and OpenAI API calls to CONSENUALLY collect all of my conversation history with my brother Ryan as a string, clean up that string by removing things like timestamps, then break it up into chunks of under 2000 characters. Whenever the RyanRoaster is called, it gives chatGPT a prompt involving one of these chunks and the message it is responding to, and attempts to create an original roast of Ryan using a combination of his message history and the phrase given. 

![image](https://user-images.githubusercontent.com/35940692/232892019-ae723fb9-a1a1-4d6e-8cea-ab1bf1c51bce.png)

Even when fed random letters, GPT3 has really clever things to say.

![image](https://user-images.githubusercontent.com/35940692/232892043-a088d3df-d9b4-4bf0-9c06-2b00b402f732.png)

![image](https://user-images.githubusercontent.com/35940692/232892075-b885915a-e319-4de0-b046-2eda4d2fc080.png)

The power of GPT3 is amazing, In real time it associates being better with winning, win-loss record formats, and then combines the fact that Ryan loses more then he wins, and turns that into a reference to the alleged size of his big toe to create an ultimate roast.

The backend for this project is handled by Node.js and Glitch.com.

Each example is more jaw dropping then the last, and my freind group was engaging with the roaster for hours!

Update: /roast command integrated to reduce spam. 

![image](https://user-images.githubusercontent.com/35940692/232894543-0fcd8fe5-a9ae-4e9a-a3d6-96da432330a1.png)
