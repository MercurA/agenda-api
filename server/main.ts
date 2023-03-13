import DSource from './db/app-data-source'
import MainServer from './http'
require('dotenv').config();

DSource
.initialize()
.then(() => {
    console.log("Data Source has been initialized!")
})
.catch((err) => {
    console.error("Error during Data Source initialization:", err)
})

MainServer()