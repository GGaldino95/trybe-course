const getAllTalkers = require('./getAllTalkers');
const getTalkerById = require('./getTalkerById');
const postLogin = require('./postLogin');
const addNewTalker = require('./addNewTalker');
const editTalkerById = require('./editTalkerById');
const deleteTalkerById = require('./deleteTalkerById');
const queryTalkerByName = require('./queryTalkerByName');

module.exports = {
    getAllTalkers,
    getTalkerById,
    postLogin,
    addNewTalker,
    editTalkerById,
    deleteTalkerById,
    queryTalkerByName,
};
