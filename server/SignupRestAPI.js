// Set up
var express  = require('express');
var app      = express();
var mongoose = require('mongoose');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors');

var whitelist = ['https://stark-caverns-59860.herokuapp.com/','https://localhost:8080/']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Acesso proibido pelo CORS'))
    }
  }
}

var options = {
    //server: {socketOptions: {keepAlive: 1, connectTimeoutMS: 30000}},
    useMongoClient: true
};

var localPort = process.env.PORT || 8080;

// Configuration
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/hotels', options);

mongoose.connection.on("error", function(err) {
  console.log("Could not connect to MongoDb!");
});
 
app.use(bodyParser.urlencoded({ extended: false })); // Parses urlencoded bodies
app.use(bodyParser.json()); // Send JSON responses
app.use(logger('dev')); // Log requests to API using morgan
app.use(cors());

// Models
var Room = mongoose.model('Room', {
    nome_completo:  String,
    data_nasc:      String,
    rg_identidade:  String,
    cpf:	    String,
    sexo:	    String,
    email:	    String,
    cidade:	    String,
    cep:	    String,
    telefone:	    String,
    deficiencia:    String,
    cotista:        String  
});
 
/*
 * Generate some test data, if no records exist already
 * MAKE SURE TO REMOVE THIS IN PROD ENVIRONMENT
*/
 
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
 
//Room.remove({}, function(res){
//    console.log("removed records");
//});
 
Room.count({}, function(err, count){
    console.log("Rooms: " + count);
 
});
 
// Routes
 
app.post('/api/person', function(req, res) {
 
    Room.find({ cpf: req.body.cpf }, function(err, rooms){
        if(err){
            res.send(err);
        } else {
            res.json(rooms);
        }
    });   
});

app.post('/api/login', function(req, res, next) {
    
    /* check if email is defined first! */
    const email_info = req.body.email;
    const senha_info = req.body.senha;
    
    if (!email_info) {
	const error = new Error('Credencial incompleta...')
	error.httpStatusCode = 400
	return next(error)
    }
    
    Room.findOne({ email: email_info }, (err,user) => {
	   if (err) {
	       // handle error
	       console.log("Problema no servidor: tente de novo mais tarde...");
	       err.httpStatusCode = 500
	       return next(err)
	   }

	   if (user) {
	       // a user by this email exists...

	       if (senha_info == '123456') {
		   console.log("Acesso ok para:" + req.body.email);
		   res.status(200).json(user)

	       } else {
		   const error = new Error('Acesso negado!')
		   error.httpStatusCode = 401
		   return next(error)
	       }
	       
	   } else {
	       const error = new Error('Usuário inexistente!')
	       error.httpStatusCode = 404
	       return next(error)
	   }
    });
});


app.post('/api/rooms/insert', cors(), function(req, res, next) {
    
    /* check if CPF is defined first! */
    const cpf_info = req.body.cpf;
    
    if (!cpf_info) {
	const error = new Error('Faltando CPF no registro...')
	error.httpStatusCode = 400
	return next(error)
    }
    
    Room.findOne({ cpf: cpf_info }, (err,user) => {
	   if (err) {
	       // handle error
	       console.log("Problema no servidor: tente de novo mais tarde...");
	       err.httpStatusCode = 500
	       return next(err)
	   }

	   if (user) {
	       // a user by this CPF exists already...
	       console.log("CPF " + req.body.cpf + " existente...");
	       const error = new Error('CPF existente...')
	       error.httpStatusCode = 409
	       return next(error)
	       
	   } else {
	       // proceed with creating user...
	       console.log("Inserting: " + req.body.cpf );

	       var newPerson = new Room({
 		   nome_completo:  req.body.nome_completo,
		   data_nasc:      req.body.data_nasc,
		   rg_identidade:  req.body.rg_identidade, 
		   cpf:	           req.body.cpf,
		   sexo:	   req.body.sexo,	    
		   email:	   req.body.email,	    
		   cidade:	   req.body.cidade,	    
		   cep:	           req.body.cep,	    
		   telefone:	   req.body.telefone,	    
		   deficiencia:    req.body.deficiencia,    
		   cotista:        req.body.cotista         
	       });
	       
	       newPerson.save(function(err, doc){
		   if (err) {
		       console.log("Server Insert Error: " + err);
		       res.send(err);
		   }
		   
		   console.log("Created person: " + doc.cpf);
		   res.json(doc);
	       });
	   }
    });
});

app.put('/api/rooms/update', cors(corsOptions), function(req, res, next) {
    
    /* check if CPF is defined first! */
    const cpf_info = req.body.cpf;
    
    if (!cpf_info) {
	const error = new Error('Faltando CPF no registro...')
	error.httpStatusCode = 400
	return next(error)
    }

    var updatePerson = {
 	nome_completo:  req.body.nome_completo,
	data_nasc:      req.body.data_nasc,
	rg_identidade:  req.body.rg_identidade, 
	cpf:	        req.body.cpf,
	sexo:	        req.body.sexo,	    
	email:	        req.body.email,	    
	cidade:	        req.body.cidade,	    
	cep:	        req.body.cep,	    
	telefone:	req.body.telefone,	    
	deficiencia:    req.body.deficiencia,    
	cotista:        req.body.cotista         
    };

    var query = { cpf: cpf_info };
    var options = { new: true };
    
    Room.findOneAndUpdate(query, updatePerson, options,(err,user) => {
	   if (err) {
	       // handle error
	       console.log("Problema para atualizar no servidor");
	       console.log(err);

	       res.status(statusCode >= 100 && statusCode < 600 ? err.code : 500);
	       // err.httpStatusCode = 412
	       // return next(err)
	   }

	   if (user) {
	       // the user who goes by this CPF was updated... 
	       console.log("Registro com CPF " + req.body.cpf + " atualizado...");
	       res.json(user);
	   }
    });
});


app.use((err, req, res, next) => {
    // log the error...
    // console.log(err);
    res.sendStatus(err.httpStatusCode)
})

// listen
app.listen(localPort);
console.log("App listening on port " + localPort);
