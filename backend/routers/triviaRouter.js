const router = require("express").Router();
const TriviaController = require("../controllers/triviaController");
const auth = require("../middleware/auth");


router.get("/get/:category", TriviaController.getTriviaQuestionByCategory);
router.get("/all", auth, TriviaController.getAllTriviaQuestions);
router.post("/create", auth, TriviaController.createNewTriviaQuestion);
router.post("/update", auth, TriviaController.updateTriviaQuestion);


module.exports = router;
