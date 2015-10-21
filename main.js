var harvester = require('harvester');
var builder = require('builder');
var attacker = require('attacker');
for (var name in Game.creeps)
{
    var creep = Game.creeps[name];
    if (creep.memory.role == 'harvester')
    {
        harvester(creep);
    }
    else if (creep.memory.role == 'builder')
    {
        builder(creep);
    }
    else if (creep.memory.role == 'guard')
    {
        attacker(creep);
    }

}