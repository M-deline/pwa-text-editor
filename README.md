# J.A.T.E - Just Another Text Editor
## Click [here]( https://pwa-text-editorchal19-3e580cc54b44.herokuapp.com/) for the link to this website on Heroku
## Overview & Description 
- The purpose of this challenge was to learn about service workers and progressive web applications. In this challenge, I learned how to use service workers and how to write code so that the user is able to install it for later use.
- In this challenge there was provided code for the app, so I wrote the code for some of the `src-sw.js` file and the `webpack.config.js` file. I also had to edit the `server.js` file and the `package.json` file.
## Screenshots
- ![Screenshot of the installed app with edited text that reads 'this is the app installed!'](<./readme-images/Screenshot 2023-11-29 at 11.20.22 PM.png>)
- ![Screenshot of the installed app with default text](<./readme-images/Screenshot 2023-11-29 at 11.20.01 PM.png>)
- ![Screenshot of the app in the browser running with edited text that reads 'this is a text editor'](<./readme-images/Screenshot 2023-11-29 at 11.19.50 PM.png>)
## Challenges & Successes
- A challenge I encountered was editing the package.json. I kept receiving errors and it wasn't until I realized that heroku didn't accept the newest node so I had to specify the node version in the package.json which took me a while to figure out.
- Another challenge that took me a long time to realize was actually very simple. In my server file, I had 
`require('./routes/htmlRoutes')(app);`
but I was getting an error that I could not find the solution to anywhere. I fixed it by checking the Mini Project from Module 19 that we did in class and I realized that in that app's server file we had written 
`require('./routes/htmlRoutes.js')(app);`
and once I fixed that in this app's file, it worked as intended. 
- Another challenge I ran into was with heroku deployment. 
- This challenge was successful to me because I learned a lot about service workers.
- This app is able to be installed which is another success and the user is able to delete or edit the text if they want to.
## Technologies and Features
- Node.js
- Express.js
- Service Workers
- JavaScript 
- HTML
- CSS
- Webpack
## How to Use and Install
- Do a git clone of this repo and then open it in your desired code editor.
- Open the integrated terminal and run `npm install` to install all the dependencies.
- In the server file, open it in the integrated terminal and do the following commands
    + `npm run build`
    + `npm run start:dev`
- Open your browser and go to `localhost:3000` to see the application where you can write whatever you need to and you can install it as well to use in your free time or if you have no internet access.
## Credits
- University of BootCamp Instructor Da K. and TAs George and Kirtley
- Previous Modules from University of BootCamp (specifically Module 19 the mini project) 

