const fs = require('fs');
const path = require('path');

function createNewNote(body, notes) {
    const newNote = body;
    
    notesArray.push(newNote);
    console.log(notesArray)
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notesArray }, null, 2)
    );

    return newNote;
}

module.exports = createNewNote;