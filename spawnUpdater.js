var config = require('config')
module.exports = new function (spawn) {
    // spawn creeps if necessary
    if (!spawn.spawning) {
        // count number of creeps by role
        var counter = {}
        for (var name in Game.creeps) {
            var creep = Game.creeps.name;
            var role = creep.memory.role;
            counter.role = (counter.role || 0) + 1;
        }

        // spawn
        for (var creepConfig in config.creep) {
            var role = creepConfig.role;
            var maxNum = creepConfig.maxNum;
            var currentTotal = counter.role;
            if (currentTotal < maxNum) {
                var result = spawn.createCreep(
                    creepConfig.body,
                    role + (currentTotal + 1),
                    {role:role}
                )

                if (_.isString(result)) {
                    // spawn success
                    break;
                }
            }
        }
    }
}
