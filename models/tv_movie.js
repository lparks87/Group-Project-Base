export default (sequelize, DataTypes) => {
  const tv_movie = sequelize.define(
    'tv_movie',
    {
      catalogue_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      title: {
        type: DataTypes.STRING
      },
      pricing: {
        type: DataTypes.DECIMAL
      },
      year: {
        type: DataTypes.INTEGER
      },
      duration: {
        type: DataTypes.INTEGER
      },
      episodes: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      seasons: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      studio_id: {
        type: DataTypes.INTEGER,
        foreignKey: true
      },
      rating_id: {
        type: DataTypes.INTEGER,
        foreignKey: true
      },
      genre_id: {
        type: DataTypes.INTEGER,
        foreignKey: true
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return tv_movie;
};
