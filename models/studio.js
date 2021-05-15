export default (sequelize, DataTypes) => {
  const studio = sequelize.define(
    'studio',
    {
      studio_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      studio_name: {
        type: DataTypes.STRING
      },
      latitude: {
        type: DataTypes.FLOAT
      },
      longitude: {
        type: DataTypes.FLOAT
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return studio;
};