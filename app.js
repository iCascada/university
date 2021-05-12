const express = require('express')
const routes = require('./Http/routes/routes')

const app = express()

require('dotenv').config()

const PORT    = process.env.PORT

app.use(routes)

const main = async () => {
    try{
        app.listen(PORT, () => console.info(`Server started at ${PORT}`) )
    }catch(e){
        console.error(e)
    }
}

/**
 * Initialization
 */

main()