
const bcrypt = require('bcrypt');
const password = bcrypt.hashSync('pickleJuice1', 10);

console.log(password);