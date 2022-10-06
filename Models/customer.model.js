module.exports=(sequelize,DataTypes)=>{
    const Customer=sequelize.define("customer",{
        _id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
        firstName:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        phoneNumber:{
            type: DataTypes.STRING,
            allowNull: false,
           validate: {
            notNull: { args: true, msg: "You must enter Phone Number" },
            isInt: { args: true, msg: "You must enter Phone Number" }
    },
    idProofURL:{
        type: DataTypes.STRING,
        allowNull: false
    }
        }
    });

    return Customer
}