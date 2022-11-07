const fs = require('fs')

const start = () => {
  
  // write db object to db.json
  fs.writeFile('db.json', JSON.stringify(db), () => {
    console.log('Generate data successfully =))')
  })
}
start()
