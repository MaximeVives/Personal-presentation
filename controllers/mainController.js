// Load modules
const siteModel = require('../models/siteModel');
// const sqlite3 = require('sqlite3').verbose();


async function index(req, res) {
    // get all projects from the database

    siteModel.getProjects((queryResult) => {
        res.render('index', {
            projects: queryResult
        });
    });
}

async function insert(req, res) {
    res.render('newProject');
}

async function createProject(req, res) {
    // create a new project in the database
    console.log(req.body);
    siteModel.createProject(req.body, (queryResult) => {
        res.redirect('/');
    });
}



module.exports = {
    index,
    insert,
    createProject
}