//-----------------------------------------------------------------------//

const {empty} = require('./eventbox')

empty()

//-----------------------------------------------------------------------//

const {withArgs} = require('./eventbox')

const names = ["Luffy","Zoro","Usopp","Robin","Nami","Sanji","Ch0pper"]

withArgs(names)

//-----------------------------------------------------------------------//

const {duplicate} = require('./streambox')

const filename = "ios-Logo.png"

duplicate(filename)

//-----------------------------------------------------------------------//

const {transform} = require('./eventbox')

const file = "text.txt"

const re = /[a-z]/g

const fn = file.toUppercase()

transform(file,re,fn)

//-----------------------------------------------------------------------//