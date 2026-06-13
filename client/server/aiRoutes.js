const express =
  require("express");

const router =
  express.Router();

const authMiddleware =
  require(
    "../middleware/authMiddleware"
  );

const {
  getInsights
} = require(
  "../controllers/aiController"
);

router.get(
  "/insights",
  authMiddleware,
  getInsights
);

module.exports =
  router;