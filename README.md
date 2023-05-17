# Redux Road - Game
> An adventure game using Redux to implement reducers, state and actions.

## Table of Contents
* [General Info](#general-information)
* [Technologies Used](#technologies-used)
* [Screenshots](#screenshots)
* [Usage](#usage)
* [Acknowledgements](#acknowledgements)


## General Information
In this project I build an adventure game using reducers, state, and actions. 
### Rules
1. **Start** - The player begins on day 0 at kilometer 0 with 100 units of supplies.
2. **Gather** - A player may gather supplies, which takes them a day and doesn’t cover any distance.
3. **Travel** - A player may travel for any number of days, which costs 20 supplies for each day but adds 10 kilometers each day.
4. **Tipped Wagon** - If a player drives off-road or across deep rivers, the wagon may tip! You’ll need to spend some supplies and a day to fix it.


### Project's Tasks

- The **state** will represent, well, the state of the game. It contains:
    - the player’s inventory,
    - distance travelled, and
    - time on the road.
- Each event in the game is represented as an **action**. Players can:
    - gather supplies,
    - travel,
    - and, if they play risky, sometimes tip over the wagon carrying their supplies.

Tasks
- [x] define the starting point of our game, the initialWagonState.
- [x] define a reducer that will manage the state of the game, like any Redux reducer, with state and action. Add a switch statment for every states.

Play the game
- [x] Call the reducer with different states and action types:
  - 1 day - Travel
  - 2 day - Gather
  - 3 day - Tipped wagon
  - 4 day - Long Travel (3 days)
- [x] Print to the console

Extra Features
- [x] Currently, the player can continue traveling even if their supplies are negative! Fix this in the travel case. If there are not sufficient supplies to travel the given number of days, return the current state.
- [x] Add a cash property, beginning with 200 for the initial state
- [x] Add a 'sell' case: Players can give away 20 supplies to gain 5 cash
- [x] Add a 'buy'case: Players can gain 25 supplies at the cost of 15 cash
- [x] Add a 'theft' case: Outlaws steal half of the player’s cash

## Technologies Used
- Node.js - version 18
- JavaScript

## Screenshots
![anteprima-redux-road](https://github.com/SimonaPiz/Redux-Road-Game/assets/91121660/243f294c-379c-42e4-885b-3fed8a6bec9c)
<!-- If you have screenshots you'd like to share, include them here. -->

## Usage
Run with Node.js to see the example journey 

```
$ cd [repo-directory]
$ node redux-road.js
```

## Acknowledgements
This project comes from the [Codecademy's Front-End Engineer](https://join.codecademy.com/learn/paths/front-end-engineer-career-path-b/) course.
