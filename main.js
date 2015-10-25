// spawns
var updateSpawn = require('spawnUpdater');
for (var name in Game.spawns) {
    updateSpawn(Game.spawns[name]);
}

// creeps
var updateCreep = require('creepUpdater');
for (var name in Game.creeps) {
    updateCreep(Game.creeps[name]);
}