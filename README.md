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
    token: "insert bot token here"
}
```
Now you're ready to interact with the repo!

### Guidelines
Once cloned, create a branch, you can use terminal:
```
git checkout -b <branch_name>
```
Example:
```
git checkout -b reaction-testing
```
Now, make this branch remote for others to access:
```
git push -u origin <branch_name>
```
Now that you're set up, create Pull Requests to make changes to the main branch

### Cleanup
You can delete local branch using 
```
git branch -d <branch_name>
```
Now you can delete the remote branch:
```
git push origin --delete <branch_name>
```

### Credits
Creators: Sameer, Aarian, Dario, Oscar
Collaborators: Tejas, Shoaib

(Currently has 2 commands and leaves a message when someone joins or enters the server)

- Things left for V1: <br>
  Add reactions <br>
Add multiple messages to randomly select from when someone joins/leaves the server
