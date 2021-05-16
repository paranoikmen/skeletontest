const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const session = require('express-session');
const passport = require('passport')
const GitlabStrategy = require('passport-gitlab2').Strategy;
const request = require('request')
const parser = require('../generator/interface/TestGenerator')

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

passport.serializeUser((user, done) => {
    return done(null, user);
});

passport.deserializeUser((user, done) => {
    return done(null, user)
});

passport.use(new GitlabStrategy({
        clientID: `${process.env.GITLAB_CLIENT_ID}`,
        clientSecret: `${process.env.GITLAB_SECRET}`,
        callbackURL: "http://localhost:4000/auth/gitlab/callback",
    },
    function (accessToken, refreshToken, profile, cb) {
        // called on successful auth
        profile.accessToken = accessToken
        cb(null, profile)
    }
));

app.get('/auth/gitlab',
    passport.authenticate('gitlab', {scope: ['api']}));

app.get('/auth/gitlab/callback',
    passport.authenticate('gitlab', {failureRedirect: '/login'}),
    function (req, res) {
        // Successful authentication, redirect home
        console.log("auth success")
        res.redirect('http://localhost:3000/projects')
    }
);

app.get('/logout', (req, res) => {
    req.logout()
    res.send('logout success')
})

app.get('/', (req, res) => {
    res.send("hello server")
})

app.get('/getuser', (req, res) => {
    res.send(req.user)
})

app.listen(4000, () => {
    console.log("Server started")
})


app.get('/projects/:token', (req, res) => {
    request.get({
            url: 'https://gitlab.com/api/v4/projects?pagination=keyset&order_by=id&sort=asc&membership=true',
            headers: {
                'Authorization': `Bearer ${req.params.token}`
            }
        },
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
                const info = JSON.parse(body)
                res.send(info)
            } else console.log(error);
        })
})

app.get('/files/:token', (req, res) => {
    request.get({
            url: 'https://gitlab.com/api/v4/projects/16592307/repository/tree?recursive=true&per_page=100',
            headers: {
                'Authorization': `Bearer ${req.params.token}`
            }
        },
        function (error, response, body) {
            console.log(response.statusCode)
            if (!error && response.statusCode == 200) {
                const info = JSON.parse(body)
                res.send(info)
            } else console.log(error);
        })
})

app.get('/branch/:token', (req, res) => {
    request.get({
            url: 'https://gitlab.com/api/v4/projects/16592307/repository/branches',
            headers: {
                'Authorization': `Bearer ${req.params.token}`
            }
        },
        function (error, response, body) {
            console.log(response.statusCode)
            if (!error && response.statusCode == 200) {
                const info = JSON.parse(body)
                res.send(info)
            } else console.log(error);
        })
})

app.get('/branch/:projectId/:token', (req, res) => {
    const projectId = req.params.projectId;
    request.get({
            url: `https://gitlab.com/api/v4/projects/${projectId}/repository/branches`,
            headers: {
                'Authorization': `Bearer ${req.params.token}`
            }
        },
        function (error, response, body) {
            console.log(response.statusCode)
            if (!error && response.statusCode == 200) {
                const info = JSON.parse(body)
                res.send(info)
            } else console.log(error);
        })
})

app.get('/files/:projectId/:branchName/:token', (req, res) => {
    const projectId = req.params.projectId
    const branchName = req.params.branchName.replace('2%F', '/')

    request.get({
            url: `https://gitlab.com/api/v4/projects/${projectId}/repository/tree?recursive=true&per_page=100&ref=${branchName}`,
            headers: {
                'Authorization': `Bearer ${req.params.token}`
            }
        },
        function (error, response, body) {
            console.log(response.statusCode)
            if (!error && response.statusCode == 200) {
                const info = JSON.parse(body)
                res.send(info)
            } else console.log(error);
        })
})

app.get('/filecontent/:projectId/:branchId/:path/:token', (req, res) => {
    const projectId = req.params.projectId
    const branchName = req.params.branchName
    const filePath = req.params.path // . -> %2E    / -> $2F

    request.get({
            url: `https://gitlab.com/api/v4/projects/${projectId}/repository/files/${filePath}/raw?ref=${branchName}`,
            headers: {
                'Authorization': `Bearer ${req.params.token}`
            }
        },
        function (error, response, body) {
            console.log(response.statusCode)
            if (!error && response.statusCode == 200) {
                // const info = JSON.parse(body)
                res.send(body)
            } else console.log(error);
        })
})

app.post('/selectedFiles', async (req, res) => {
    const data = [...req.body] // на вход массив из blob файлов
    res.send(data)
})

//todo кидать набор файлов на сервер, заменить path
app.post('/filecreate/:projectId/:branchName/:token', (req, res) => {
    const data = [...req.body] // на вход массив из blob файлов
    const projectId = req.params.projectId
    const branchName = req.params.branchName

    let filePath
    let rawFile
    let skeletonTests
    const arrOfFileData = [{
        action: 'create',
        file_path: '/.gitlab-ci.yml',
        content:
            "image: maven:3.3.9-jdk-8\n" +
            "\n" +
            "build:\n" +
            "  script: \"mvn install -B\""
    }]

    for (let file of data) {
        if (file['path'].endsWith('.java') && !file['path'].includes('tests/')) {
            filePath = file['path'].replace('/', '%2F').replace('.', '%2E')
            request.get({
                    url: `https://gitlab.com/api/v4/projects/${projectId}/repository/files/${filePath}/raw?ref=${branchName}`,
                    headers: {
                        'Authorization': `Bearer ${req.params.token}`
                    }
                },
                function (error, response, body) {
                    if (!error && response.statusCode == 200) {
                        rawFile = body
                        skeletonTests = parser(rawFile)
                        arrOfFileData.push({
                                action: 'create',
                                file_path: `/tests/test${file['label']}`,
                                content: skeletonTests,
                        })
                        if(file === data[data.length-1]) {
                            request.post({
                                    url: `https://gitlab.com/api/v4/projects/${projectId}/repository/commits`,
                                    headers: {
                                        'Content-Type': 'application/json',
                                        'Authorization': `Bearer ${req.params.token}`
                                    },
                                    body: JSON.stringify({
                                        branch: branchName,
                                        commit_message: 'Generate tests',
                                        actions: arrOfFileData,
                                    }),
                                },
                                function (error, response, body) {
                                    if (!error && response.statusCode == 200) {
                                        const info = JSON.parse(body);
                                        res.send(info);
                                    } else console.log(error);
                                }
                            )
                        }
                    } else console.log(error);
                }
            )
        }
    }
})













