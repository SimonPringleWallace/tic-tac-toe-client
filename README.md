# How Did This Happen?
  Tic Tac Toe - Game of Your Childhood, Game of Your Life, is a single page
  application born out of an assignment for General Assembly's Web Development
  Immersive program. Utilzing a range highly accessible technologies, this Tic
  Tac Toe game provides smooth game play, API integration, and the occasional
  snarky message to keep things light while you're doing battle with your
  opponent.

  Integrating Tic Tac Toe with an API presents an abundance of logic challenges  that wouldn't necessarily exist in a game without an API connection. Due to
  this, development centered on AJAX and Javascript logic in the beginning
  stages with the focus on solving one specific problem at a time before
  linking the solutions together into a cohesive program. Effort was also made
  to refactor code throughout the process to maintatin an organized code base.
  This work continues.

  One of the greatest challenges in the early part of this process was
  managing the calls to the API and staying one move ahead of the API in order
  to be able to declare a game either over, or still in progress. The logic for this can be found in [`findWinner-if-else.js`](findWinner-if-else.js). Only once the game's logic was proven in the most primitive of UIs did the project move into the design
  phase, trading out console.logs for JQuery activated text through DOM
  manipulation and generic HTML buttons and inputs for Bootstrap Modals.

# Future Work
  Having created the basic structure of the game, there are still several
  deficiencies stylistically that need to be addressed, they are as follows:

  - The board itself needs to be raised slighly higher into the page.
    Currently, the board space and the div above it (#winbox) compete with the Modal buttons on the right of the screen, this could possibly be solved by wrapping the two sets of elements in divs and setting them to be inline elements. In either case, the space between the 'start' button and board itself should be smaller.

 - Moblie responsiveness. As it stands currently, the mobile experience is not
   ideal but is workable. Future iterations of this application should make
   allowances for users on different screen sizes to provide improved UX.

 - I had hoped to be able to include an option to enable tic-tac-trivia, in
   the form of divs that would float up from the bottom of the screen on each
   move. This feature will be added in the comming weeks.


# Wireframes and User Stories

 - [Wireframe for pre sign-in page](https://imgur.com/JObXRu4)
 - [Wireframe for post sign-in page](https://imgur.com/2E2xegT)

 - User Stories:
  - A user should be able to sign-up, sign-in with the user name and password
    they just  created, play my game and either win or lose.
  - As a power user - I want want to be able to keep track of how many games
    I've won, how many I've played and be able to play many games, seamlessly.




# Technologies Used

-Javascript
-AJAX
-JQuery
-Grunt
-Twitter Bootstrap
-Git and GitHub
-HTML
-CSS
