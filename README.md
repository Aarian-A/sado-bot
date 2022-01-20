# sado-bot
Leaves a message whenever a member departs from the discord server

### Setup For Development
Donwload NodeJS (and npm) from Nodejs
```
https://nodejs.org/en/
```
Then clone the repository,
you can do so through the terminal (in the directory of your choice) by the command 
```
git clone https://github.com/Aarian-A/sado-bot
```
In the terminal of the cloned directory,
run the following commands to set package configs
```
npm init
```
Then, install discord node modules:
```
npm install discord.js
```
Now, create a "congfig.js" file and add the following:
```js
module.exports = {
    app: {
      px: "h ",
      token: "insert bot token here",
      status: { content: "h help", type: "LISTENING" }
    }
}
```
Now you're ready to interact with the repo!

### Guidelines
Branch main to test functionality and request pulls for implementation.
Create your own testing bot(s) on
```
https://discord.com/developers/applications
```
Use this bot's token in the config.js file to test your code

Creators: Sameer, Aarian, Dario, Oscar
Collaborators: Tejas, Shoaib