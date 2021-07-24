const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const blogroutes = require('./routes/blogroutes')


// creating app 

const app = express()


const dbURI = 'mongodb+srv://daya:12345@nodetuts.l9swn.mongodb.net/node-tuts?retryWrites=true&w=majority'
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
.then((result)=> app.listen(3000))
.catch((err)=> console.log(err));

// app.get('/add-blog', (req,res)=> { 
//     const blog = new Blog({
//         title : 'Daya 2', 
//         snippet : 'He is a bad boy', 
//         body : 'he is a good boy too'
//     })

//     blog.save()
//     .then((results)=> { 
//            res.send(results)
//     }). catch((err)=> { 
//         console.log(err)
//     })
// })

// app.get('/all-blogs', (req,res)=> { 
//     Blog.find()
//     .then((resul)=> { 
//         res.send(resul)
//     }).catch((err)=> { 
//         console.log(err)
//     })
// })

// app.get('/single-blog', (req,res)=> { 
//     Blog.find()
//     .then((resul)=> { 
//         res.send(resul)
//     }).catch((err)=> { 
//         console.log(err)
//     })
// })



 

app.set('view engine','ejs');
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({extended : true}));
app.use(morgan('dev'));

app.use((req,res,next)=> { 
    // console.log('new request made'); 
    // console.log('host is: ',req.hostname);
    // console.log('path is :',req.path);
    // console.log('Method is:',req.method);
    res.locals.path = req.path; 
    next();
})

app.get('/',(req,res)=> {
    // const blogs = [
    //     {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    //     {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    //     {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    //   ];
    //  res.render('index', {title: 'Home', blogs})
    res.redirect('/blogs')
})


app.get('/about',(req,res)=> {
    res.render('about',{title: 'About'})
})


app.use('/blogs',blogroutes)


app.use((req,res)=> { 
    res.status(404).render('404', {title: '404'})
})