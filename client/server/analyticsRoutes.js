const express = require("express");

const router = express.Router();

const authMiddleware =
  require("../middleware/authMiddleware");

const {
  getDashboardMetrics,
  createAnalytics,
  getAnalyticsHistory
} = require(
  "../controllers/analyticsController"
);

/*
  Dashboard Metrics
*/
router.get(
  "/dashboard",
  authMiddleware,
  getDashboardMetrics
);

/*
  Create Analytics
*/
router.post(
  "/create",
  authMiddleware,
  createAnalytics
);

/*
  Analytics History
*/
router.get(
  "/history",
  authMiddleware,
  getAnalyticsHistory
);

module.exports = router;