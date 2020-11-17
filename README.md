![word guess banner logo](./assets/banner.png)

## About

Hangman without the hanging man  

Built using ReactJS (overkill, I know)

## Contributions

Feel free to contribute or share ideas via issues  
Maintained by [@j-m](https://github.com/j-m)  

## Getting Started

To get the project running locally, you'll need [Nodejs](https://nodejs.org/en/download/) and `npm` (which comes with Nodejs)
Then simply run `npm i` and `npm start` and you're off!

## Roadmap

- Random challenge  
- Daily Challenge  
- Leaderboards  
- Compete mode  

## Changelog

This project is following [Semantic Versioning](https://semver.org/)  

### 1.4.0 - Start Menu Info (November 16, 2020)

- Show seed button
- Project version
- GitHub link

### 1.3.0 - Continue Playing (November 16, 2020)

- Added continue playing button if game lost
- Added guess counter if playing in `overtime`
- Created Heroku deployment

### 1.2.0 - Large Seed Fix (November 16, 2020)

- Swapped to `bigint` to allow for arbitrarily long seeds (any words/sentences longer than 10 characters)
- Better lose animation

### 1.1.0 - Spaces Fix (November 15, 2020)

- Fixed seeds representing multi-word games
- Fixed lives
- Breaking change but only bumped minor because project was private

### 1.0.0 - Seeding (November 15, 2020)

- Added seed calculation
- Allow seed input in start menu
- Detect if input is a numeric (seed), alpha + space (sentence) , or alphanumeric (invalid)
- Lives separated into its own component

### 0.1.0 - Proof of Concept

- Added start menu
- Added Sentence components
- Added Alphabet components
- Added lives
- Added celebration/losing animations
- Added replay
