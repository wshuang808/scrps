/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('attack'); // -> 'a thing'
 */
 module.exports = function (creep)
 {
     var targets = creep.room.find(FIND_HOSTILE_CREEPS);
     if (targets.length)
     {
         creep.moveTo(targets[0]);
         creep.attack(targets[0]);
     }
 }