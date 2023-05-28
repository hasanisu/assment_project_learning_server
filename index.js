const express = require('express')
const app = express();
const  cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/category.json');
const courses = require('./data/courses.json');

app.get('/', (req, res) => {
  res.send('Learnign Api Runnig')
})

app.get('/courses-catagories', (req, res) =>{
  res.send(categories)
});

app.get('/category/:id', (req, res)=>{
  const id = req.params.id;

  // if(id === '08'){
  //     res.send(news);
  // }
      const category_news = news.filter(n => n.category_id === id);
      res.send(category_news)
  
})

app.get('/courses', (req, res) =>{
  res.send(courses)
})

app.get('/news/:id',(req, res)=>{
  const id = req.params.id;
  const selectedNews = news.find(n => n._id === id);
  res.send(selectedNews)
})





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})