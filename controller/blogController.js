const Blog = require('../models/blog'); 

const blog_index = (req,res)=> { 
    Blog.find().sort({ createdAt : -1 })
    . then((results)=> { 
        res.render('index', {title : 'All blogs', blogs : results})
    })
    .catch((err)=> { 
        console.log(err)
    })
}

const blog_create = (req,res)=> { 
    res.render('create', {title: 'Create'})
}

const blog_post = (req,res)=> { 
    const blog = new Blog(req.body);
     
    blog.save()
    .then((results)=> { 
        res.redirect('/blogs')
    })
    .catch((err) => { 
        console.log(err)
            })
}

const blog_get = (req, res)=> { 
    const id = req.params.id;
    Blog.findById(id)
    .then((result)=> { 
         res.render('details', {title : 'Blog details', blog : result })
    })
    .catch((err)=> {
        res.status(404).render('404', {title: 'Blog not found'})
    })
}

const blog_delete = (req,res)=> { 
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
    .then((result)=> { 
         res.json({ redirect : '/blogs'})
    })
    .catch((err)=> {
         console.log(err);
    })
}

module.exports= {blog_index,blog_create,blog_post,blog_get,blog_delete}