export default (sequelize, DataTypes) => {
  const viewer_ratings = sequelize.define(
    'viewer_ratings',
    {
      rating_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      rating_description: {
        type: DataTypes.STRING
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return viewer_ratings;
};