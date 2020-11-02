const stream = require('stream');
const fs = require('fs');

function duplicate (filename){

    const read = fs.createReadStream(filename)
    const write = fs.createWriteStream('copie.png')
 
      read.pipe(write)
      write.on('finish',()=>{
          console.log("File : ",filename,"is successufully dupplicated !")
      })

}

//-----------------------------------------------------------------------//

function transform(file, re, fn ){



    
}

module.exports = {duplicate }