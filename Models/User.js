const mongoose=require('mongoose')
const bcrypt=require('bcrypt');

const userScehema= new mongoose.Schema({
    token:{
        typr:String
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true,
        minLength:6
    },
    role:{
        type:String,
        required:true
    }
});

//fire a function after doc saved in db
userScehema.post('save',(doc,next)=>{
    console.log(`Document was created and saved ${doc}`);
    next()
})

//fire a function before doc saved in db
userScehema.pre('save',async function(next){
    const salt=await bcrypt.genSalt();
     this.password=await bcrypt.hash(this.password,salt)
    next();
})


//static method to login a user
userScehema.statics.login=async function(email,password){
    const user=await this.findOne({email});
    if(user){
       const auth=await bcrypt.compare(password,user.password);
       if(auth){
        return user
       } 
       throw Error('Incorect password')
    }
    throw Error('Incoorect Email')
}

const User=mongoose.model('user',userScehema);
module.exports=User