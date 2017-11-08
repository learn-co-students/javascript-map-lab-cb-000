const knownDecepticons = ['Megatron', 'Skywarp', 'Laserbeak', 'Barricade'];

const robots = [
  { name: 'Bumblebee', alliance: null },
  { name: 'Laserbeak', alliance: null },
  { name: 'Barricade', alliance: null },
  { name: 'Optimus Prime', alliance: null },
  { name: 'Skywarp', alliance: null },
  { name: 'Megatron', alliance: null },
  { name: 'Ironhide', alliance: null },
  { name: 'Ratchet', alliance: null }
];
//made a variable for the value of mapped 'robots' array
var sortedRobots = robots.map(function(robot) {
//running robot array to see if they match robot names with decepticon names..
  return Object.assign({}, robot, {
    name: robot.name,
    alliance: (knownDecepticons.includes(robot.name)) ? 'decepticon' : 'autobot'
//`Array.prototype.includes`, to check if an element exists in array
//its asking if theres any names in knownDecepticons array that match with robot array
  });
});

const zebraStripes = [
  { width: 9.12, color: null },
  { width: 5.71, color: null },
  { width: 6.01, color: null },
  { width: 1.54, color: null },
  { width: 8.34, color: null },
  { width: 7.77, color: null },
  { width: 0.59, color: null },
  { width: 7.31, color: null }
];

//making variable..
var coloredZebraStripes =
//mapping zebraStripes array
zebraStripes.map(function(zebraStripes, i){
//.map() takes more than one parameter^^
//returning original objects in zebraStripes array
  return Object.assign({}, zebraStripes, {
//if the stripes index is even, its black
//if stripe index is odd, its white
    color: (i % 2 === 0) ? 'black' : 'white'
  });
});
