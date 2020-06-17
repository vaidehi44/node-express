const express = require('express');
const bodyParser = require('body-parser');
const leaderRouter = express.Router();
leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-type','text/plain');
    next();
})

.get((req,res,next) => {
    res.end('Will show a list of all the leaders.');
})

.post((req,res,next) => {
    res.end('Will add the name '+req.body.name+' with the details:'+req.body.description+'.')
})

.put((req,res,next) => {
    res.statusCode = 403;
    res.end("Will update the leaders' table.");
})

.delete((req,res,next) => {
    res.end("Will delete the leaders' table.")
}); 


leaderRouter.route('/:leaderId')

.get((req,res,next) => {
    res.end('Will show the details of '+req.params.leaderId+'.')
})

.post((req,res,next) => {
    res.statusCode = 403;
    res.end('POST method not supported on /leaders/'+req.params.leaderId+'.')

})

.put((req,res,next)=> {
    res.end('Will update the info of '+req.params.leaderId+'.');
})

.delete((req,res,next) => {
    res.end('Deleting the data of '+req.params.leaderId+'.')
});

module.exports = leaderRouter;