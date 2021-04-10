const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const session = require('express-session');
const passport = require('passport')
const GitlabStrategy = require('passport-gitlab2').Strategy;

dotenv.config();

const app = express();

mongoose.connect(`${process.env.START_MONGODB}${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}${process.env.END_MONGODB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
     console.log("Connect to mongoose")
})

//middleware
app.use(express.json());
app.use(cors({origin: "http://localhost:3000", credentials: true}))
app.use(
    session({
        secret: "secretcode",
        resave: true,
        saveUninitialized: true,
    })
);
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user,done) => {
    return done(null, user)
});

passport.deserializeUser((user, done) => {
    return done(null, user)
});

passport.use(new GitlabStrategy({
        clientID: "6cf64f2a71b85cbc2b77122eaad79e9cffe4d5bf260216321531c7970ca92915",
        clientSecret: "180e33838a63d487d588325031badf234c284fb246fde8f98394121496ca52ba",
        callbackURL: "http://localhost:4000/auth/gitlab/callback",
    },
    function(accessToken, refreshToken, profile, cb) {
    // called on successful auth
        console.log("auth success")
        console.log(profile);
        console.log(accessToken)
        console.log(refreshToken)
        cb(null, profile);
        console.log(profile)
    }
));

app.get('/auth/gitlab',
    passport.authenticate('gitlab', { scope: ['profile']},
    function (req, res) {
        console.log(req)
        console.log(res)
    }));

app.get('/auth/gitlab/callback',
    passport.authenticate('gitlab', { failureRedirect: '/login' },
    function(req, res) {
        // Successful authentication, redirect home
        console.log(req)
        console.log("kek")
        console.log(res)
    }
));

app.get('/api/v4/projects', (req, res) => {
    res.send("")
})

app.get('/', (req, res) => {
    res.send("hello server")
    console.log(req)
    console.log(res)
})

app.get('/getuser', (req, res) => {
    res.send("user page")
})

app.listen(4000, () => {
    console.log("Server started")
})






