// 1. Destructure animal sounds
const farmAnimals = 'cow horse sheep pig chicken';
const [moo, neigh, baa, oink, cluck] = farmAnimals.split(' ');

// 2. Destructure traditional animal names (skipping horse)
const [bessie, , dolly, babe, little] = farmAnimals.split(' ');

// 3. Destructure traditional animal colors (cow: blackAndWhite, sheep: black, pig: pink)
const [blackAndWhite, , black, pink, ] = farmAnimals.split(' ');

// 4. Destructure rainbow colors using full color names
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const [red, orange, yellow, green, blue, indigo, violet] = colors;

// 5. Destructure rainbow colors using initials (skip indigo)
const [r, o, y, g, b, , v] = colors;

// 6. Destructure Indigo using variable 'indg'
const [, , , , , indg, ] = colors;

// 7. Destructure muppet object
const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const { muppetName, color, song, job, partner } = muppet;

// 8. Destructure nestedMuppet object
const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  job: 'Host of The Muppet Show',
  partner: 'Miss Piggy'
};

const {
  album: {
    theMuppetMovie: { song2, song4 }
  },
  job: nestedJob,
  partner: nestedPartner
} = nestedMuppet;
