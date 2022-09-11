const fs = require('fs-extra')
const toMs = require('ms')
 
/**
 * Add sewa grup.
 * @param {String} groupId 
 * @param {String} teks 
 * @param {Object} _dir 
 */
const setwel = (groupId, teks, _dir) => {
    const obj = { id: groupId, teks: teks }
    _dir.push(obj)
    fs.writeFileSync('./database/kelompok/setwel.json', JSON.stringify(_dir))
}
 
/**
 * Get premium user position.
 * @param {String} groupId 
 * @param {Object} _dir 
 * @returns {Number}
 */
const getSetPosition = (groupId, _dir) => {
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
 const getSetQuery = (groupId, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === groupId) {
            position = i
        }
    })
    if (position !== null) {
        return _dir[position].teks
    }
}

/**
 * Check user is premium.
 * @param {String} userId 
 * @param {Object} _dir 
 * @returns {Boolean}
 */
const checkWelcome = (groupId, _dir) => {
    let status = false
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === groupId) {
            status = true
        }
    })
    return status
}
 
 
module.exports = {
    setwel,
    getSetPosition,
    checkWelcome,
    getSetQuery
}