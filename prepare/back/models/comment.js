module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {
    charset: 'urf8mb4',
    collate: 'utf8mb4_general_ci'
  });
  Comment.associate = (db) => {};
  return Comment;
}