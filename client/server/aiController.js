const Analytics =
  require("../models/Analytics");

/*
  Generate Dashboard Insights
*/
const getInsights =
  async (req, res) => {

    try {

      const latest =
        await Analytics
          .findOne()
          .sort({ createdAt: -1 });

      if (!latest) {

        return res.json({
          success: true,
          insights: [
            "No analytics data available."
          ]
        });
      }

      const insights = [];

      if (latest.revenue > 100000) {

        insights.push(
          "Revenue is performing strongly."
        );
      } else {

        insights.push(
          "Revenue growth opportunity detected."
        );
      }

      if (latest.visitors > 10000) {

        insights.push(
          "Website traffic is healthy."
        );
      }

      if (
        latest.conversionRate > 5
      ) {

        insights.push(
          "Conversion rate exceeds industry average."
        );
      } else {

        insights.push(
          "Improve conversion funnel."
        );
      }

      return res.json({
        success: true,
        insights
      });

    } catch (error) {

      return res.status(500).json({
        success: false,
        message: error.message
      });
    }
};

module.exports = {
  getInsights
};