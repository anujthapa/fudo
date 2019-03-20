const express = require("express")
const PORT = process.env.PORT || 5000
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const passport = require("passport")
const users = require("./routes/api/users")
const profile = require("./routes/api/profile")
const post = require("./routes/api/post")

const app = express()

//body parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//DB config
const db = require("./config/keys").mongoURI

mongoose
  .connect(db)
  .then(() => console.log("database is connected"))
  .catch(err => console.log(err))

//Use route
app.use("/api/users", users)
app.use("/api/post", post)
app.use("/api/profile", profile)

app.listen(PORT, () => console.log(`server reunning on port ${PORT}`))
