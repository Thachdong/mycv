const router = require("express").Router();
const cvControllers = require("../controllers/cv");

router.get("/", cvControllers.getCV);
router.post("/", cvControllers.addCV);
router.patch("/:cvId", cvControllers.updateCV);

module.exports = router;
