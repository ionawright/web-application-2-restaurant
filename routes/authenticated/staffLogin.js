const express = require("express");
const router = express.Router();
// const controller = require(""");

router.get("/login", controller.login);

router.get("/add-dish", controller.add_dish);

router.get("/edit-dish", controller.edit_dish);

router.get("/update-menu", controller.update_menu);

router.get("/add-news", controller.add_news);

router.get("/edit-news", controller.edit_news);

router.use(controller.notFound);
router.use(controller.serverError);

module.exports = router;
