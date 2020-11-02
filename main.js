//-----------------------------------------------------------------------//

/*const {empty} = require('./eventbox')

empty()

//-----------------------------------------------------------------------//

const {withArgs} = require('./eventbox')

const names = ["Luffy","Zoro","Usopp","Robin","Nami","Sanji","Ch0pper"]

withArgs(names)

//-----------------------------------------------------------------------//

const {duplicate} = require('./streambox')

const filename = "ios-Logo.png"

duplicate(filename)*/

//-----------------------------------------------------------------------//

const {transform} = require('./streambox')

transform('text.txt', /[a-z]/g, (letter) => letter.toUpperCase(),)

//-----------------------------------------------------------------------//