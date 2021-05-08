export default (sequelize, DataTypes) => {
  const rental_info = sequelize.define(
    'rental_info',
    {
      confirmation_num: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      purchase_type: {
        type: DataTypes.STRING
      },
      purchase_date: {
        type: DataTypes.DATE
      },
      invoice_id: {
        type: DataTypes.INTEGER,
        foreignKey: true
      },
      catalogue_id: {
        type: DataTypes.INTEGER,
        foreignKey: true
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return rental_info;
};