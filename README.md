Submit detailed answers to the following in this file via a pull request:


determine when the game is over, who is the winner, return past games and style.

- A wireframe of what your game project will look like.
- The data structure you plan to use.
     - Arrays and Objects
- How you will represent the game board in JS.
     - in JS the board will be represented by an array in the API as a user clicks on
       on one of the divs making up the board in the html, the array will be
       populated with either a 1(x) or a 0(o) in the appropriate index,
       corresponding to the square clicked. A seperate piece of JS will
       examine the response from the API and determine whether or not the Game
       has been won. If this is true, JS will end the game and declare a winner,
      If not, JS will delcare a tie after 9 moves or a win whenever the
      appropriate conditions are met.
- How you plan to approach this project.
     - step-by-step with a focus towards building the MVP before moving on to
        anything else.
        - What this means
          - Build the curl scripts
          - Focus on making the logic for the game work first
            -Within this, focus on adding clicks to an array, then building
            out the logic to make the game istelf work
          - Next, focus on the logic for user sign up and getting that to
          - function along with the basic TTT board itself,
          - link these two pieces up with the API
          - After this is achieved, move on to making things pretty and clever.
- 4-8 user stories for your game project.
- How you plan to keep your code modular.
   - refactor to keep the user experience and back end as seperate as possible,
- What creative spin will you add to your project?
   - TTT trivia that refreshes everytime a new move is played (if there's time)
      - For example:
           It has been said that Marie Antonette's famous qoute "let them eat cake"
           was mis-translated from "Qu'ils jouer de la brioche" or "let them
           play tic-tac-toe", "la brioche" being the French name for the game
           after the board's ressemblance to a sliced sheet cake.

- How will you use version control to backup / track your project?
   -Often. Additionally, taking advantage of branching to test out new features
   in a low-risk way and merging these features back into the master branch as
   they finish development
- What additional features will you build if you have extra time?
  - multiplayer, leader board of who had the most wins.
User Stories -
    As a user, I want to play tic-tac-toe, but also get a couple of laughs along
    the way. I should be able to sign-up, sign-in and, play my game and win or
    lose.
    As a developer - I want a modular code base where bugs will be easy to
    indentify and updates are easy to integrate
    As a power user -  I want want to be able to keep track of how many games
    I've won and be able to play many games, seamlessly.
