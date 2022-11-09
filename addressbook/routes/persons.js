var express = require('express');
var router = express.Router();
var db = require('../database');

router.get("/all", function(request, response){
    db.Person.findAll()
        .then(persons => {
            response.status(200).send(JSON.stringify(persons));
        })
        .catch(error => {
            response.status(500).send(JSON.stringify(error));
        });
});

router.get("/:id", function(request, response){
    db.Person.findByPk(request.params.id)
        .then(person => {
            response.status(200).send(JSON.stringify(person));
        })
        .catch(error => {
            response.status(500).send(JSON.stringify(error));
        });
});

router.put("/", function(request, response){
    db.Person.create({
        firstName : request.body.firstName,
        lastName : request.body.lastName,
        id : request.body.id
    })
        .then(person => {
            response.status(200).send(JSON.stringify(person));
        })
        .catch(error => {
            response.status(500).send(JSON.stringify(error));
        });
});

module.exports = router;