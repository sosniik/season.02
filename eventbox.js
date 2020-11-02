const { strict } = require('assert');
const EventEmitter = require('events');
const fs = require('fs');

const myEmitter = new EventEmitter()
//-----------------------------------------------------------------------//
function empty () {
    myEmitter.on('sentence',() => { 
        console.log('ch0ooooooper!')
    })
   
myEmitter.emit('sentence')
}
//-----------------------------------------------------------------------//

function withArgs(names){

    
    myEmitter.on('newFellow',(names) => {
        console.log("Here come's a new pirate",names)
    });

    for(let i = 0; i < names.length; i++ ){
        myEmitter.emit('newFellow',names[i])
    }
    
}
//-----------------------------------------------------------------------//






module.exports = {
    empty,
    withArgs,
    
}
