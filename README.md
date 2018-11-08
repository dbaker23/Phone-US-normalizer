This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Project Flow

The project gets put on screen through `index.js` projecting `App.js` to the virtual DOM. `App.js` has 1 child `button.js` which will return the submit or reset button. `App.js` decides if the number is correct, parses out the `-` symbols and white space if any and rejects if the number is greater than 10 numbers or contains letters. App then prepends a +1 and returns the normalized number.

## Why React?

Because react is responsive, open source, and is something I have a passion for using. It turns JS from another web language into an interactive language that can build HTML and CSS without changing files. React also scales extremely well when matched with redux. React also gives websites really fun interactions that give the illusion of page-switching while only reloading parts necessary.

## My solution

I wanted my solution to look like an actual application and not something just for a job application. I wanted to show that I can make responsive applications and integrate existing libraries.

## Assumptions

I assumed that the user wants the number clickable when shown back to them normalized. I assumed the users would expect a clear button. I assumed there should be either spaces or hyphens between the numbers with a warning if the user didn't follow protocol. I also assumed there wouldn't be extensions and that these are normal 10-digit numbers.

## Resources

For telephone normalization help: https://support.twilio.com/hc/en-us/articles/223183008-Formatting-International-Phone-Numbers

For regex: https://stackoverflow.com/questions/24859717/javascript-string-remove-white-spaces-and-hyphens