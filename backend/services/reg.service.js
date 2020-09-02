const DbService = require("moleculer-db");
const SqlAdapter = require("moleculer-db-adapter-sequelize");
const Sequelize = require("sequelize");
const { v4: uuidv4 } = require("uuid");

module.exports = {
  name: "registration",
  mixins: [DbService],
  adapter: new SqlAdapter(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.PASS,
    {
      host: process.env.DB_HOST,
      dialect: process.env.DIALECT,
      password: "bloguserpaSS1998.",
    }
  ),
  model: {
    name: "User",
    define: {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      login: Sequelize.STRING,
      email: Sequelize.STRING,
      password: Sequelize.STRING,
      date: Sequelize.DATE(6),
    },
  },
  actions: {
    async createUser(ctx) {
      const { id, login, email, password, date } = ctx.params;
      const userExist = await this.adapter.count({
        search: "moonspwll",
        searchFields: "login",
      });

      if (!userExist) {
        try {
          const user = this.adapter.insert({
            id: uuidv4(),
            login: "moonspwll",
            email: "alexey.kow@gmail.com",
            password: "hello123",
            date: Date.now(),
          });
          return user;
        } catch (err) {
          console.log(err);
        }
      } else {
        return userExist;
      }
    },
  }
};
