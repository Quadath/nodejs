let characters = [
    {name: 'Anton', hasRing: false},
    {name: 'Alex', hasRing: false},
]
//NEVER MODIFY OBJECT. RETURN NEW
// function stealRing(characters, owner) {
//     characters.map(c => {
//         if (c.name == owner) {
//             c.hasRing = true
//         } else {
//             c.hasRing = false
//         }
//     })
// }

function stealRing(characters, owner) {
    return characters.map(c => {
        if (c.name == owner) {
            c.hasRing = true
        } else {
            c.hasRing = false
        }
    })
}

module.exports = function log() {
    console.log('log');
}

// module.exports = { characters, stealRing }