module.exports = {
    creep: {
        harvester:{
            maxNum:2,
            role:'harvester',
            body:[MOVE, CARRY, WORK]
        },
        builder:{
            maxNum:1,
            role:'builder',
            body:[MOVE, WORK, WORK, CARRY]
        },
        warrior:{
            maxNum:1,
            role:'warrior',
            body:[MOVE, MOVE, TOUGH, ATTACK]
        }
    },
}