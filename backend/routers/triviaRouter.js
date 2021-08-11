const router = require("express").Router();
const TriviaController = require("../controllers/triviaController");
const auth = require("../middleware/auth");


router.get("/:category", TriviaController.getTriviaQuestionByCategory);
router.get("/all", auth, TriviaController.getAllTriviaQuestions);
router.post("/create", auth, TriviaController.createNewTriviaQuestion);


module.exports = router;
