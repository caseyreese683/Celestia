
#### index.js

```javascript
#!/usr/bin/env node

const facts = [
  "The Andromeda Galaxy is on a collision course with the Milky Way.",
  "Neutron stars can spin up to 700 times per second.",
  "Saturn’s rings are made primarily of ice particles.",
  "The Hubble Space Telescope has captured thousands of stunning images of deep space."
];

function getRandomFact() {
  return facts[Math.floor(Math.random() * facts.length)];
}

console.log("Welcome to Celestia Celestial Facts!");
console.log("Here's a random celestial fact:");
console.log(getRandomFact());
