console.log('🎄 Save Santa!');

let branch = 1; // Starting at the bottom of the tree
const totalBranches = 10;

function randomEvent() {
  const events = [
    { message: '🥴 Oh no! A banana peel. Go back 1 branch.', move: -1 },
    { message: '🕷️ Eek! A spider. You freeze for a moment.', move: 0 },
    { message: '🍀 Lucky! Nothing happens.', move: 0 },
    { message: '🚀 A boost! Climb up 2 branches.', move: 2 },
  ];
  return events[Math.floor(Math.random() * events.length)];
}

while (branch < totalBranches) {
  // Hmm, does this work correctly?
  console.log(`🌳 Climbing to branch ${branch}...`);

  const event = randomEvent();
  console.log(event.message);

  branch = +event.move; // Is this how we update branches?
  if (branch == 0) {
    // What happens if you fall?
    console.log('You fell! 🎅 Santa is starting to get cold....');
  }
}

if (branch >= totalBranches) {
  console.log('🎉 You saved Mr. Santa 🎅');
} else {
  console.log('Game over.');
}
