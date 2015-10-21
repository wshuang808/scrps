/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('harvester'); // -> 'a thing'
 */

 module.exports = function (creep)
 {
    var resources = creep.room.find(FIND_SOURCES);
    if (resources.length)
    {
        if (creep.carry.energy < creep.carryCapacity)
        {
            creep.moveTo(resources[0]);
            creep.harvest(resources[0]);
        }
        else
        {
            creep.moveTo(Game.spawns.Spawn1);
            creep.transferEnergy(Game.spawns.Spawn1);
        }
    }
 }