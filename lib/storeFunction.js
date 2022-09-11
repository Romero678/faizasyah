const fs = require('fs')



/**
 * Add Commands/Response message to database
 * @param {String} msg
 * @param {Sstring} response
 * @param {String} userId
 * @param {Object} data
 * @returns true
 */
const addCommandStore = (msg, response, userId, _data) => {
    const obj = {
        pesan: msg,
        balasan: response,
        creator: userId
    }
    _data.push(obj)
    fs.writeFileSync('./database/json/commandStore.json', JSON.stringify(_data))

    return true
}


/**
 * Delete commands from database
 * @param {String} command
 * @param {Object} _data
 * @param {Object} creator
 */
const deleteCommandStore = (command, _data, creator) => {
    Object.keys(_data).forEach((i) => {
        if (_data[i].creator === creator) {
        if (_data[i].pesan === command) {
            _data.splice(i, 1)
            fs.writeFileSync('./database/json/commandStore.json', JSON.stringify(_data))
        }}
    })
    return true
}

/**
 * Check command is available or not
 * @param {String} command
 * @param {Object} _data
 * @param {Object} creator
 * @returns {Boolean}
 */

const checkCommandStore = (commands, _data, creator) => {
    let status = false
    Object.keys(_data).forEach((i) => {
        if (_data[i].pesan === commands) {
            if (_data[i].creator === creator) {
            status = true
        }}
    })

    return status
}



module.exports = {
    addCommandStore,
    checkCommandStore,
    deleteCommandStore
}