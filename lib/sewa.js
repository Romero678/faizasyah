const fs = require('fs-extra')
const toMs = require('ms')
 
/**
 * Add sewa grup.
 * @param {String} groupId 
 * @param {String} expired 
 * @param {Object} _dir 
 */
const addSewa = (groupId, expired, _dir) => {
    const obj = { id: groupId, expired: Date.now() + toMs(expired) }
    _dir.push(obj)
    fs.writeFileSync('./lib/database/sewa.json', JSON.stringify(_dir))
}
 
/**
 * Get premium user position.
 * @param {String} groupId 
 * @param {Object} _dir 
 * @returns {Number}
 */
const getSewaPosition = (groupId, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === groupId) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}
 
/**
 * Get premium user expire.
 * @param {String} groupId 
 * @param {Object} _dir 
 * @returns {Number}
 */
const getSewaExpired = (groupId, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === groupId) {
            position = i
        }
    })
    if (position !== null) {
        return _dir[position].expired
    }
}
 
/**
 * Check user is premium.
 * @param {String} userId 
 * @param {Object} _dir 
 * @returns {Boolean}
 */
const checkSewa = (groupId, _dir) => {
    let status = false
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === groupId) {
            status = true
        }
    })
    return status
}
 
/**
 * Get all premium user ID.
 * @param {Object} _dir 
 * @returns {String[]}
 */
const getAllSewa = (_dir) => {
    const array = []
    Object.keys(_dir).forEach((i) => {
        array.push(_dir[i].id)
    })
    return array
}
 
module.exports = {
    addSewa,
    getSewaExpired,
    getSewaPosition,
    checkSewa,
    getAllSewa
}