const router = require('express').Router();
const { notes } = require('../db/db.json');
const createNewNote = require('../lib/notes.js');

router.get('/notes', (req, res) => {
    console.log(notes)
    res.json(notes);
});

router.post('/notes', (req, res) => {
console.log(notes)
    const newNote = createNewNote(req.body, notes);
    res.json(newNote)
});

module.exports = router;