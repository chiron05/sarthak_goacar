module.exports=(sequelize,DataTypes)=>{
    const Booking=sequelize.define("booking",{
        _id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
         vehicle_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        pickup_date:{
            type: DataTypes.DATE,
            allowNull: false,
        },
        pickup_time:{
            type: DataTypes.TIME,
            allowNull: false,
        },
        dropoff_date:{
            type: DataTypes.DATE,
            allowNull: false,
        },
        dropoff_time:{
            type: DataTypes.TIME,
            allowNull: false,
        },
        vehicle_type:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        pickup_location:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        dropoff_location:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        duration:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        bookingFlag:{
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
        
    });

    return Booking
}