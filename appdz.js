/* EXPRESS */
var express = require('express');
// note Javascript has soft types 
var app = express();
// executes express as a function


// getting HTML to render, using  JADE;
// reference: http://goo.gl/4iqGh5
// app.set('public', __dirname + '/public');
// app.engine('html', require('ejs').renderFile);

// session store - require 'connect-mongo'



var db = require('./database/db.js');
var connect = db.connect;
var User = db.User 

// use the following lines to deliver static pages
app.use(express.static(__dirname + '/public'));
app.use(express.compress());

app.use(express.urlencoded());
app.use(express.cookieParser());
app.use(express.session({secret: 'princeton'}));
// Express session code goes here

connect.on('error', console.error.bind(console, 'Failed to open connection:'));
connect.once('open', function callback() {

    // intuitively APP.GET allows users to pull information from your server
    // note, '/' is the home page
    // REQ and RES are objects created when user connects - REQUEST and RESPOND

    /// NEW FEATURE ///
    app.get('/signup', function(req, res){
        res.sendfile('./public/formDavid.html')
    });

    app.get('/login', function(req, res){
        res.sendfile('./public/loginform.html')
    });

    app.get('/', function(req, res){
        res.redirect('/signup');
    });


    // would need APP.POST -- then pull out the params from REQ object
    app.get('/dbtest', function(req, res){
        var newUser = new User({
            "username": "David",
            "password": "pass123"
        });
        // this creates a n
        newUser.save(function (e){
            if (e){
                console.error.bind(console, 'Failed to create user:')
            }
            else res.send("A new user has been created!");
        });
    });

    app.post('/signup', function(req, res){
        // var username = req.body.username;
        // var password = req.body.password;
        // console.log(username + " " + password);
        var newUser = new User({
            "username": String(req.body.username),
            "password": String(req.body.password),
            "firstname": String(req.body.firstname),
            "lastname": String(req.body.lastname)
        });

        // this creates a new user
        newUser.save(function (e){
            if (e){
                console.error.bind(console, 'Failed to create user:')
            }
            else res.send("A new user has been created!");
        });


        res.send('Thank you for signing up!')

    });

    app.post('/home', function(req, res){
        // CHECK CREDENTIALS HERE


        //renders the individual page
        User.findOne({'username': String(req.body.username)}, 'firstname lastname password', function(err, user){
            // console.log(err); THIS DOESN'T WORK
            if (!user) {res.send('Not in database...')}
            else {
                if(String(req.body.password) === user.password) {
                    console.log('%s %s is in the database', user.firstname, user.lastname)

                    //res.send('Hello, ' + String(user.firstname));
                    //res.send the new static webpage I'm designing.
                    res.sendfile('./public/mainpage.html');
                } 
                else {
                    res.send('Wrong password...')
                }               

                
            };
        });
        // var meme = User.findOne({'firstname': 'David'})
        // console.log(meme.select('username'));
        



    })

})




app.listen(8000);
// this instructs the script to sit at "localhost:8000"
