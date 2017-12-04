exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('subclasses').del().then(function() {
    // Inserts seed entries
    return knex('subclasses').insert([
      {
        id: 1,
        name: 'Path of the Ancestral Guardian',
        levelAvailable: 3,
        description: 'Calls on the spirits of honored ancestors to protect others'
      }, {
        id: 2,
        name: 'Path of the Storm Herald',
        levelAvailable: 3,
        description: 'Filled with a rage that channels the primal magic of the storm'
      }, {
        id: 3,
        name: 'Path of the Zealot',
        levelAvailable: 3,
        description: 'Fueled by a religious zeal that visits destruction on foes'
      }, {
        id: 4,
        name: 'College of Glamour',
        levelAvailable: 3,
        description: 'Wields the beguiling, glorious magic of the Feywild'
      }, {
        id: 5,
        name: 'College of Swords',
        levelAvailable: 3,
        description: 'Entertains and slays with daring feats of weapon prowess'
      }, {
        id: 6,
        name: 'College of Whispers',
        levelAvailable: 3,
        description: 'Plants fear and doubt in the minds of others'
      }, {
        id: 7,
        name: 'Forge Domain',
        levelAvailable: 1,
        description: 'Clad in heavy armor, serves a god of the forge or creation'
      }, {
        id: 8,
        name: 'Grave Domain',
        levelAvailable: 1,
        description: 'Opposes the blight of undeath'
      }, {
        id: 9,
        name: 'Circle of Dreams',
        levelAvailable: 2,
        description: 'Mends wounds, guards the weary, and strides through dreams'
      }, {
        id: 10,
        name: 'Circle of the Shepherd',
        levelAvailable: 2,
        description: 'Summons natural spirits to bolster friends and harry foes'
      }, {
        id: 11,
        name: 'Arcane Archer',
        levelAvailable: 3,
        description: 'Imbues arrows with spectacular magical effects'
      }, {
        id: 12,
        name: 'Cavalier',
        levelAvailable: 3,
        description: 'Defends allies and knocks down enemies, often on horseback'
      }, {
        id: 13,
        name: 'Samurai',
        levelAvailable: 3,
        description: 'Combines resilience with courtly elegance and mighty strikes'
      }, {
        id: 14,
        name: 'Way of the Drunken Master',
        levelAvailable: 3,
        description: 'Confounds foes through a martial arts tradition inspired by the swaying of a drunkard'
      }, {
        id: 15,
        name: 'Way of the Kensei',
        levelAvailable: 3,
        description: 'Channels ki through a set of mastered weapons'
      }, {
        id: 16,
        name: 'Way of the Sun Soul',
        levelAvailable: 3,
        description: 'Transforms ki into bursts of fire and searing bolts'
      }, {
        id: 17,
        name: 'Oath of Conquest',
        levelAvailable: 3,
        description: 'Strikes terror in enemies and crushes the forces of chaos'
      }, {
        id: 18,
        name: 'Oath of Redemption',
        levelAvailable: 3,
        description: 'Offers redemption to the worthy and destruction to those who refuse mercy or righteousness'
      }, {
        id: 19,
        name: 'Gloom Stalker',
        levelAvailable: 3,
        description: 'Unafraid of the dark, relentlessly stalks and ambushes foes'
      }, {
        id: 20,
        name: 'Horizon Walker',
        levelAvailable: 3,
        description: 'Finds portals to other worlds and channels planar magic'
      }, {
        id: 21,
        name: 'Monster Slayer',
        levelAvailable: 3,
        description: 'Hunts down creatures of the night and wielders of grim magic'
      }, {
        id: 22,
        name: 'Inquisitive',
        levelAvailable: 3,
        description: 'Roots out secrets, akin to a masterful detective'
      }, {
        id: 23,
        name: 'Mastermind',
        levelAvailable: 3,
        description: 'A master tactician, manipulates others'
      }, {
        id: 24,
        name: 'Scout',
        levelAvailable: 3,
        description: 'Combines stealth with a knack for survival'
      }, {
        id: 25,
        name: 'Swashbuckler',
        levelAvailable: 3,
        description: 'Delivers deadly strikes with speed and panache'
      }, {
        id: 26,
        name: 'Divine Soul',
        levelAvailable: 1,
        description: 'Harnesses magic bestowed by a god or other divine source'
      }, {
        id: 27,
        name: 'Shadow Magic',
        levelAvailable: 1,
        description: 'Wields the grim magic of the Shadowfell'
      }, {
        id: 28,
        name: 'Storm Sorcery',
        levelAvailable: 1,
        description: 'Crackles with the power of the storm'
      }, {
        id: 29,
        name: 'The Celestial',
        levelAvailable: 1,
        description: 'Forges a pact with a being from celestial realms'
      }, {
        id: 30,
        name: 'The Hexblade',
        levelAvailable: 1,
        description: 'Serves a shadowy entity that bestows dread curses'
      }, {
        id: 31,
        name: 'War Magic',
        levelAvailable: 2,
        description: 'Mixes evocation and abjuration magic to dominate the battlefield'
      }
    ]);
  });
};
