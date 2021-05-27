var articlesDb =require("./articles_db.js")

module.exports.ArticlesPage = async(req,res)=>{
      res.json(await articlesDb.ArticlesPageJson())
    }
