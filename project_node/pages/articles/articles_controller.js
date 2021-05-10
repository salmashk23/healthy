var articlesDb =require("./articles_db.js")

module.exports.ArticlesPage = (req,res)=>{
      res.json(articlesDb.ArticlesPageJson())
    }
