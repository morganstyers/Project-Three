const express = require('express');
const collectionRouter = express.Router();
const Collection = require('../model/Collection');

//CRUD

//read
collectionRouter.get('/', (req, res) => {
    Collection.find({}, (err, response) => {
        if (err)
            res.status(500).json({
                message: {
                    msgBody: "Unable to get Collections",
                    msgError: true
                }
            });
        else {
            res.status(200).json({ response });
        }

    });
});

//create
collectionRouter.post('/', (req, res) => {
    const Collection = new Collection(req.body);
    Collection.save((err, document) => {
        if (err)
            res.status(500).json({
                message: {
                    msgBody: "Unable to add Collection",
                    msgError: true
                }
            });
        else
            res.status(200).json({
                message: {
                    msgBody: "Successfully Added Collection",
                    msgError: false
                }
            });
    });
});

// delete
collectionRouter.delete('/:id', (req, res) => {
    Collection.findByIdAndDelete(req.params.id, err => {
        if (err)
            res.status(500).json({
                message: {
                    msgBody: "Unable to Delete Collection",
                    msgError: true
                }
            });
        else
            res.status(200).json({
                message: {
                    msgBody: "Successfully Deleted Collection",
                    msgError: false
                }
            });
    });
});

//update 
collectionRouter.put('/:id', (req, res) => {
    Collection.findOneAndUpdate({ _id: req.params.id }, req.body, { runValidators: true }, (err, response) => {
        if (err)
            res.status(500).json({
                message: {
                    msgBody: "Unable to Update Collection",
                    msgError: true
                }
            });
        else
            res.status(200).json({
                message: {
                    msgBody: "Successfully Updated Collection",
                    msgError: false
                }
            });
    });
});

module.exports = collectionRouter;