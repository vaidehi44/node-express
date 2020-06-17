const express = require('express');
const bodyParser = require('body-parser');
const promoRouter = express.Router();
promoRouter.use(bodyParser.json());

promoRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-type','text/plain');
    next();
})

.get((req,res,next) => {
    res.end('Will show the info of all the promotions.');
})

.post((req,res,next) => {
    res.end('Will add the promotion titled '+req.body.name+' with the details:'+req.body.description+'.')
})

.put((req,res,next) => {
    res.statusCode = 403;
    res.end('PUT method not supported on /promotions.')
})

.delete((req,res,next) => {
    res.end('Will delete all the promotion info.')
}); 


promoRouter.route('/:promoId')

.get((req,res,next) => {
    res.end('Will send the details regarding the promotion '+req.params.promoId+'.')
})

.post((req,res,next) => {
    res.statusCode = 403;
    res.end('POST method not supported on /promotions/'+req.params.promoId+'.')

})

.put((req,res,next)=> {
    res.end('Will update the promotion: '+req.body.name +' with the details:'+req.body.description +'.')
})

.delete((req,res,next) => {
    res.end('Deleting the promotion data of:'+req.params.promoId+'.')
});

module.exports = promoRouter;