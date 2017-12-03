exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('classes').del().then(function() {
    // Inserts seed entries
    return knex('classes').insert([
      {
        id: 1,
        name: 'barbarian'
      }, {
        id: 2,
        name: 'bard'
      }, {
        id: 3,
        name: 'cleric'
      }, {
        id: 4,
        name: 'druid'
      }, {
        id: 5,
        name: 'fighter'
      }, {
        id: 6,
        name: 'monk'
      }, {
        id: 7,
        name: 'paladin'
      }, {
        id: 8,
        name: 'ranger'
      }, {
        id: 9,
        name: 'rogue'
      }, {
        id: 10,
        name: 'sorcerer'
      }, {
        id: 11,
        name: 'warlock'
      }, {
        id: 12,
        name: 'wizard'
      }
    ]);
  });
};
