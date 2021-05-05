const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const session = require('express-session');
const passport = require('passport')
const GitlabStrategy = require('passport-gitlab2').Strategy;
const request = require('request')

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

let accessTokenForAccessUser
passport.use(new GitlabStrategy({
        clientID: "6cf64f2a71b85cbc2b77122eaad79e9cffe4d5bf260216321531c7970ca92915",
        clientSecret: "180e33838a63d487d588325031badf234c284fb246fde8f98394121496ca52ba",
        callbackURL: "http://localhost:4000/auth/gitlab/callback",
    },
    function(accessToken, refreshToken, profile, cb) {
        // called on successful auth
        accessTokenForAccessUser = accessToken
        cb(null, profile, accessToken)
    }
));

app.get('/auth/gitlab',
    passport.authenticate('gitlab', {scope: ['api']}));

app.get('/auth/gitlab/callback',
    passport.authenticate('gitlab', { failureRedirect: '/login' }),
    function(req, res) {
        // Successful authentication, redirect home
        console.log("auth success")
        //console.log(req)
        res.redirect('http://localhost:3000')
    }
);

app.get('/', (req, res) => {
    res.send("hello server")
})

app.get('/getuser', (req, res) => {
    res.send(req.user)
})

app.listen(4000, () => {
    console.log("Server started")
})

const options = {
    url: 'https://gitlab.com/api/v4/projects?pagination=keyset&order_by=id&sort=asc&membership=true',
    headers: {
        'Authorization': 'Bearer bef08a68deb40fe230ef8f8420d5887617a154ff6a1dda0c7442745324645af2'
    }
};

const options2 = {
    url: 'https://gitlab.com/api/v4/projects/16592307/repository/branches',
    headers: {
        'Authorization': 'Bearer bef08a68deb40fe230ef8f8420d5887617a154ff6a1dda0c7442745324645af2'
    }
};

const options1 = {
    url: 'https://gitlab.com/api/v4/projects/16592307/repository/tree?recursive=true&per_page=100',
    headers: {
        'Authorization': 'Bearer bef08a68deb40fe230ef8f8420d5887617a154ff6a1dda0c7442745324645af2'
    }
};

app.get('/projects', (req, res) => {
    request.get(options, function (error, response, body) {
        console.log(response.statusCode)
        if (!error && response.statusCode == 200) {
            const info = JSON.parse(body)
            res.send(info)
        }
        else console.log(error);
    })
})

app.get('/files', (req, res) => {
    request.get(options1, function (error, response, body) {
        console.log(response.statusCode)
        if (!error && response.statusCode == 200) {
            const info = JSON.parse(body)
            res.send(info)
        }
        else console.log(error);
    })
})

app.get('/branch', (req, res) => {
    request.get(options2, function (error, response, body) {
        console.log(response.statusCode)
        if (!error && response.statusCode == 200) {
            const info = JSON.parse(body)
            res.send(info)
        }
        else console.log(error);
    })
})

app.get('/branch/:projectId', (req, res) => {
    const projectId = req.params.projectId

    request.get({
        url: `https://gitlab.com/api/v4/projects/${projectId}/repository/branches`,
        headers: {
            'Authorization': 'Bearer bef08a68deb40fe230ef8f8420d5887617a154ff6a1dda0c7442745324645af2'
        }
    },
        function (error, response, body) {
            console.log(response.statusCode)
            if (!error && response.statusCode == 200) {
                const info = JSON.parse(body)
                res.send(info)
            }
            else console.log(error);
    })
})

app.get('/files/:projectId/:branchName', (req, res) => {
    const projectId = req.params.projectId
    const branchName = req.params.branchName.replace('.', '/')
    console.log(projectId, branchName)

    request.get({
            url: `https://gitlab.com/api/v4/projects/${projectId}/repository/tree?recursive=true&per_page=100&ref=${branchName}`,
            headers: {
                'Authorization': 'Bearer bef08a68deb40fe230ef8f8420d5887617a154ff6a1dda0c7442745324645af2'
            }
        },
        function (error, response, body) {
            console.log(response.statusCode)
            if (!error && response.statusCode == 200) {
                const info = JSON.parse(body)
                res.send(info)
            }
            else console.log(error);
        })
})

app.get('/filecontent/:projectId/:branchId/:path', (req, res) => {
    //16592307 feature/create-contracts
    const projectId = req.params.projectId
    const branchName = req.params.branchName
    const filePath = req.params.path // . -> %2E    / -> $2F

    request.get({
            url: `https://gitlab.com/api/v4/projects/${projectId}/repository/files/${filePath}/raw?ref=${branchName}`,
            headers: {
                'Authorization': 'Bearer bef08a68deb40fe230ef8f8420d5887617a154ff6a1dda0c7442745324645af2'
            }
        },
        function (error, response, body) {
            console.log(response.statusCode)
            if (!error && response.statusCode == 200) {
                // const info = JSON.parse(body)
                res.send(body)
            }
            else console.log(error);
        })
})

//todo кидать набор файлов на сервер, заменить path
app.get('/filecreate/:projectId/:branchId/:path', (req, res) => {
    //16592307 feature/create-contracts
    const projectId = req.params.projectId
    const branchName = req.params.branchName
    const filePath = req.params.path // . -> %2E    / -> $2F

    request.post({ //todo сделать POST /projects/:id/repository/commits
            url: `https://gitlab.com/api/v4/projects/${projectId}/repository/files/${filePath}/raw?ref=${branchName}`,
            headers: {
                'Authorization': 'Bearer bef08a68deb40fe230ef8f8420d5887617a154ff6a1dda0c7442745324645af2'
            },
            data: {
                'branch': branchName,
                'author_name': authorName,
                'contetn': content,
                'commit_message': 'generate tests'
            }
        },
        function (error, response, body) {
            console.log(response.statusCode)
            if (!error && response.statusCode == 200) {
                const info = JSON.parse(body)
                res.send(info)
            }
            else console.log(error);
        })
})
//todo заменить токен доступа








