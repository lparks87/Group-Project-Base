export default (sequelize, DataTypes) => {
  const customer = sequelize.define(
    'customer',
    {
      customer_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      first_name: {
        type: DataTypes.STRING
      },
      last_name: {
        type: DataTypes.STRING
      },
      customer_address: {
        type: DataTypes.STRING
      },
      customer_city: {
        type: DataTypes.STRING
      },
      customer_state: {
        type: DataTypes.STRING
      },
      customer_zip: {
        type: DataTypes.STRING
      },
      customer_age: {
        type: DataTypes.INTEGER
      },
      customer_email: {
        type: DataTypes.STRING
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return customer;
};