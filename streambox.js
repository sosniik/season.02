const stream = require('stream');
const fs = require('fs');
const { Transform } = require('stream')

function duplicate (filename){

    const read = fs.createReadStream(filename)
    const write = fs.createWriteStream('copie.png')
 
      read.pipe(write)
      write.on('finish',()=>{
          console.log("File : ",filename,"is successufully dupplicated !")
      })

}

//-----------------------------------------------------------------------//

function transform(file, re, fn, in_stdout = true){
    const transf = new Transform({
        transform(chunk, _, callback){
            this.push(chunk.toString().replace(re,fn))
            callback()
        }
    })


    const readStream = fs.createReadStream(file)
    readStream
        .pipe(transf)
        .pipe(process.stdout)
}




module.exports = {
    duplicate,
    transform,
 }