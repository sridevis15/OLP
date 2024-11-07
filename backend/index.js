const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const ConnectionOfDb = require("./config/connectionOfDb")
const path = require("path");

const app = express()
dotenv.config()

//////connection of DB/////////
ConnectionOfDb()

const PORT = process.env.PORT 


//////middleware/////////
app.use(express.json())
app.use(cors())


///ROUTES///
app.use('api/admin', require('./routers/adminRoutes'))
app.use('api/user', require('./routers/userRoutes'))

app.listen(PORT, () => console.log(`running on ${PORT}`))