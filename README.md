# JavaScript Capstone Project: Build a Shooter Game



This is Microverse's final project in Javascript's course.

In this project, I built a shooter game using JavaScript's framework [Phaser 3][phaser-url], a "fast, free and fun open-source framework for Canvas and WebGL powered browser games".


## Table of Contents

- [JavaScript Capstone Project: Build a Shooter Game](#javascript-capstone-project-build-a-shooter-game)
  - [Table of Contents](#table-of-contents)
  - [About](#about)
  - [The game](#the-game)
    - [How to play](#how-to-play)
    - [Design](#design)
      - [Player's ship](#players-ship)
      - [Enemies](#enemies)
      - [Scenes](#scenes)
  - [Technologies used](#technologies-used)
  - [Future work](#future-work)
    - [Technical](#technical)
  - [Contact](#contact)
  - [Acknowledgements](#acknowledgements)


## About

This project's objective was to build a shooter game similar to York Computer's [tutorial][sg-tutorial]. My game is inspired by this.

The assignment can be seen [here][assignment].

Link to a live version [here][live-version].

Repository: https://github.com/tzvaita/js-phaser-shooter-game


## The game

This is a one player game. The game starts with the player's battleship aligned in the middle of the screen. Enemy ships start to appear from the top of the screen. The player ship can be manouvered up, down, left and right. The ship also has shooting capabilities with the produces lasers destroying the enemy ships on contact. The best players accumulate the greatest scores which can be submitted to a leaderboard.

### How to play

The keyboard keys to play the game are A-Left, S-Down, D-Right, W-Up for movement and the space-key for shooting.

You can play the game online clicking [here][live-version] or locally following these steps:

* Click on the green button "Clone or Download"
* Click on Download ZIP
* Extract the game
* In your terminal, navigate to the game's folder
* Run 'node server.js'
* Open, in your browser, 'localhost:8080'

### Design

The game is on a canvas measuring 480 x 640 px. The background consists of two overlapping backgrounds which are constantly changing.

### Player's ship

For this version, the player only has one life so first contact with enemy lasers or ships and the game is over. Lives will be implemented as a game update.


### Enemies

There are three kinds of enemies. One of these fires lasers, the other one just glides through the screen in a straight line and the last one is a spinning sphere which when in near proximity of the player ship, changes course and starts to follow the player ship wherever it goes unless if it is destroyed.

#### Scenes

This game is composed of four scenes.

* Main Menu: 

![SC-MM][SC-MM]

* Game: 

![SC-Game][SC-Game]

* Game Over: 

![SC-GO][SC-GO]





The Leader Board will only show 20 names.

## Technologies used

* JavaScript
* A bit of HTML and CSS
* Phaser 3
* Webpack
* Eslint
* Babel
* Jest for the tests
* Github
* [Heroku](https://www.heroku.com/) for the deployment
* [Leaderboard API service][LB-API] for the leaderboard


## Future Work

* Player lives
* Stages

## Contact

👤 **Tennyson Zvaita**
- Github: [@tzvaita](https://github.com/tzvaita)
- Twitter: [@tennyzvaita](https://twitter.com/tennyzvaita)

## Acknowledgements

- [Microverse][mcvs]
- [OpenGameArt][ogaa]



<!-- Links -->
[assignment]: hhttps://www.notion.so/Shooter-game-old-version-5f30f19211c44343baf2b7d1e0034c26
[live-version]: https://starwars-spaceshooter.herokuapp.com/
[phaser-url]: https://phaser.io/
[sg-tutorial]: https://learn.yorkcs.com/category/tutorials/gamedev/phaser-3/build-a-space-shooter-with-phaser-3/
[LB-API]: https://www.notion.so/Leaderboard-API-service-24c0c3c116974ac49488d4eb0267ade3
[mcvs]: https://www.microverse.org/
[ogaa]: https://opengameart.org/

<!-- Images -->

[SC-MM]: ./src/assets/mainmenu.png

[SC-Game]: ./src/assets/gamemain.png

[SC-AB]: ./src/assets/gameover.png

[SC-GO]: ./src/assets/leaderboaerd.png
