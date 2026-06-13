const Analytics =
  require("../models/Analytics");

/*
  Dashboard Metrics
*/
const getDashboardMetrics =
  async (req, res) => {

    try {

      const latest =
        await Analytics
          .findOne()
          .sort({ createdAt: -1 });

      if (!latest) {

        return res.json({
          success: true,
          data: {
            revenue: 0,
            users: 0,
            sales: 0,
            visitors: 0,
            conversionRate: 0
          }
        });
      }

      res.json({
        success: true,
        data: latest
      });

    } catch (error) {

      res.status(500).json({
        success: false,
        message: error.message
      });
    }
};

/*
  Create Analytics Record
*/
const createAnalytics =
  async (req, res) => {

    try {

      const analytics =
        await Analytics.create(req.body);

      res.status(201).json({
        success: true,
        analytics
      });

    } catch (error) {

      res.status(500).json({
        success: false,
        message: error.message
      });
    }
};

/*
  Get History
*/
const getAnalyticsHistory =
  async (req, res) => {

    try {

      const history =
        await Analytics.find()
          .sort({ createdAt: -1 });

      res.json({
        success: true,
        count: history.length,
        data: history
      });

    } catch (error) {

      res.status(500).json({
        success: false,
        message: error.message
      });
    }
};

module.exports = {
  getDashboardMetrics,
  createAnalytics,
  getAnalyticsHistory
};