# yei-coding-challenge
Solution to the coding challenge for YEI.

## Solution
I'm not much of a Rails developer, so I opted to write a React application. Given the time constraint,
all it does query for the Rails issues (or at least the first 100) and allows for filtering by label. 

The only labels that can be filtered are the ones specified in the challenge. Label filtering is additive,
and by selecting more labels it will show you any issues that contain any of the selected labels.

Note that not every query to GitHub results in getting issues with any particular label, so if you select
a label and nothing shows up, it's probably because no issues with that label were returned.

## Running
### Dependencies
- Yarn
- Node

### Setup
1. Run `yarn install`
2. Run `yarn start` to run the development server.
3. Go to "localhost:3000" to see the application.

`yarn test` will run the test suite.