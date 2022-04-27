const express = require("express");
const router = express.Router();
// const controller = require(""");

router.get("/", controller.homepage);

router.get("/about-us", controller.about);

router.get("/menu/lunch", controller.lunch);

router.get("/menu/dinner", controller.dinner);

router.get("/news", controller.news);

router.get("/contact", controller.contact);

router.use(controller.notFound);
router.use(controller.serverError);

module.exports = router;
