
const { forwardTo } = require('prisma-binding');

const Query = {
  users: forwardTo('db'),
  serieses: forwardTo('db')
};

module.exports = Query;