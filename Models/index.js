const{ Sequelize,DataTypes}=require('sequelize')

const sequalize= new Sequelize('goacar','root','',{
    host:'localhost',
    dialect:'mysql',
    logging:false,
    pool:{max:5,min:0,idle:10000}
})

sequalize.authenticate().then(()=>{
    console.log('connected')
}).catch(err=>{
    console.log("Error"+err)
})

const db={}
db.Sequelize=Sequelize
db.sequalize=sequalize

db.customer=require('./customer.model')(sequalize,DataTypes)
db.booking=require('./booking.model')(sequalize,DataTypes)
db.pickcustomer=require('./pickCustomer.model')(sequalize,DataTypes)
db.dropcustomer=require('./dropCustomer.model')(sequalize,DataTypes)



db.sequalize.sync({force:false}).then(()=>{
    console.log('yes re-sync')
})

module.exports=db