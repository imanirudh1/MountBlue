module.exports = (sequelize, DataTypes) => {
  const Movies = sequelize.define('Movies', {
    Rank: {
      type: DataTypes.INTEGER,
    },
    Title: {
      type: DataTypes.STRING,
    },
    Description: {
      type: DataTypes.STRING(1234),
    },
    Runtime: {
      type: DataTypes.INTEGER,
    },
    Genre: {
      type: DataTypes.STRING,
    },
    Rating: {
      type: DataTypes.FLOAT,
    },
    Metascore: {
      type: DataTypes.STRING,
    },
    Votes: {
      type: DataTypes.INTEGER,
    },
    Gross_Earning_in_Mil: {
      type: DataTypes.STRING,
    },
    Director: {
      type: DataTypes.STRING,
    },
    Actor: {
      type: DataTypes.STRING,
    },
    Year: {
      type: DataTypes.INTEGER,
    },
  })
  return Movies
}
