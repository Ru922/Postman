const model = require('../models/user')


exports.getData = (req,res) => {

    model.find({},(err, docs) =>{
        res.send({
            docs
        })
    })  

}

exports.insertData = (req,res)=>{
    const data = req.body
    res.send({ data })
}