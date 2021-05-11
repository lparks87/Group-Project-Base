export default (sequelize, DataTypes) => {
  const invoices = sequelize.define(
    'invoices',
    {
      invoice_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      credit_total: {
        type: DataTypes.DECIMAL
      },
      invoice_date: {
        type: DataTypes.DATE
      },
      invoice_total: {
        type: DataTypes.FLOAT
      },
      customer_id: {
        type: DataTypes.INTEGER,
        foreignKey: true
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return invoices;
};