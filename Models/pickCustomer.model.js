module.exports=(sequelize,DataTypes)=>{
    const PickCustomer=sequelize.define("pickcustomer",{
        _id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
          bookingId:{
            type: DataTypes.INTEGER,
            allowNull: false,
          },
         vehicle_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        driver:{
            type: DataTypes.STRING,
            allowNull: false
        },
        contact_num:{
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
             notNull: { args: true, msg: "You must enter Phone Number" },
             isInt: { args: true, msg: "You must enter Phone Number" }
            }
        },
        vehicle_condition:{
            type: DataTypes.STRING,
            allowNull: false
        },
        video:{
            type: DataTypes.STRING,
        }
        // TODO:- Fuel is pending
        
    });

    return PickCustomer
}