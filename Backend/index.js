const dotEnv = require('dotenv')
const app = require('./src/app')

const PORT = 3000
dotEnv.config()

app.listen(PORT,() => {
    console.log(`Server is running on PORT ${PORT}`)
})