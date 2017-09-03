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

/*
function map(collection, callback) {
  const result = [];

  for (let i = 0; i < collection.length; i++) {
    const element = collection[i];
    result.push(callback(element, i, collection));
  }

  return result;
}
*/
/*
const transformedAutobots = map(autobots, function (autobot) {
  return Object.assign({}, autobot, {
    strength: autobot.strength * 2,
    isTransformed: true,
  });
});
*/

//const transformedAutobotsWithMap = autobots.map(function (autobot) {
const sortedRobots = robots.map(function (robot) {
var is_decepticon;

    if (knownDecepticons.includes(robot.name)) {
      is_decepticon = 'decepticon';
    }
    else {
      is_decepticon = 'autobot';
    }
    return Object.assign({}, robot, {
      alliance: is_decepticon
  });
});

console.log(sortedRobots);

const coloredZebraStripes = zebraStripes.map( function(zebraStripe, index) {
  return Object.assign({}, zebraStripe, {
    color: (index%2 == 0) ? 'black' : 'white'
  });
});
