const Home = require('express').Router();
const { HomeController } = require('../controller/homeController');

Home.route('/home')
  .get(HomeController.get)
  .post(HomeController.post)
  .put(HomeController.update)
  .delete(HomeController.delete);

module.exports = Home;
