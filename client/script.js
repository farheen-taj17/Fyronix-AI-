/* ==========================================
   FYRONIX AI - SCRIPT.JS
   ========================================== */

/* ===============================
   LOADER
================================ */

window.addEventListener("load", () => {
    setTimeout(() => {
        const loader = document.getElementById("loader");

        if (loader) {
            loader.style.opacity = "0";

            setTimeout(() => {
                loader.style.display = "none";
            }, 500);
        }
    }, 1200);
});

/* ===============================
   ELEMENTS
================================ */

const usersElement = document.getElementById("users");
const revenueElement = document.getElementById("revenue");
const salesElement = document.getElementById("sales");
const visitorsElement = document.getElementById("visitors");

const aiBtn = document.getElementById("aiBtn");
const aiResponse = document.getElementById("aiResponse");

const notificationList = document.getElementById("notificationList");
const activityTable = document.getElementById("activityTable");

const themeBtn = document.getElementById("themeBtn");

/* ===============================
   CHART.JS
================================ */

const chartCanvas = document.getElementById("revenueChart");

const revenueChart = new Chart(chartCanvas, {
    type: "line",

    data: {
        labels: [],

        datasets: [
            {
                label: "Revenue",

                data: [],

                borderColor: "#06b6d4",

                backgroundColor: "rgba(6,182,212,0.20)",

                borderWidth: 3,

                fill: true,

                tension: 0.4
            }
        ]
    },

    options: {
        responsive: true,

        maintainAspectRatio: false,

        plugins: {
            legend: {
                labels: {
                    color: "#ffffff"
                }
            }
        },

        scales: {
            x: {
                ticks: {
                    color: "#ffffff"
                }
            },

            y: {
                ticks: {
                    color: "#ffffff"
                }
            }
        }
    }
});

/* ===============================
   ANIMATED COUNTER
================================ */

function animateCounter(element, endValue) {

    let startValue = 0;

    const duration = 1000;

    const stepTime = Math.max(
        Math.floor(duration / endValue),
        10
    );

    const timer = setInterval(() => {

        startValue += Math.ceil(endValue / 50);

        if (startValue >= endValue) {

            startValue = endValue;

            clearInterval(timer);
        }

        element.textContent = startValue;

    }, stepTime);
}

/* ===============================
   GENERATE LIVE ANALYTICS
================================ */

function generateAnalytics() {

    const users = Math.floor(Math.random() * 10000) + 1000;

    const revenue = Math.floor(Math.random() * 500000) + 50000;

    const sales = Math.floor(Math.random() * 3000) + 200;

    const visitors = Math.floor(Math.random() * 15000) + 1000;

    animateCounter(usersElement, users);
    animateCounter(salesElement, sales);
    animateCounter(visitorsElement, visitors);

    revenueElement.textContent =
        "$" + revenue.toLocaleString();

    updateChart(revenue);

    addNotification(
        `Revenue updated to $${revenue.toLocaleString()}`
    );

    addActivity(
        "Analytics updated",
        "Success"
    );
}

/* ===============================
   UPDATE CHART
================================ */

function updateChart(revenue) {

    const currentTime =
        new Date().toLocaleTimeString();

    revenueChart.data.labels.push(currentTime);

    revenueChart.data.datasets[0].data.push(revenue);

    if (
        revenueChart.data.labels.length > 10
    ) {
        revenueChart.data.labels.shift();

        revenueChart.data.datasets[0].data.shift();
    }

    revenueChart.update();
}

/* ===============================
   NOTIFICATIONS
================================ */

function addNotification(message) {

    const li = document.createElement("li");

    li.textContent = message;

    notificationList.prepend(li);

    if (
        notificationList.children.length > 8
    ) {
        notificationList.removeChild(
            notificationList.lastElementChild
        );
    }
}

/* ===============================
   ACTIVITY TABLE
================================ */

function addActivity(activity, status) {

    const row =
        document.createElement("tr");

    const time =
        new Date().toLocaleTimeString();

    row.innerHTML = `
        <td>${time}</td>
        <td>${activity}</td>
        <td>${status}</td>
    `;

    activityTable.prepend(row);

    if (
        activityTable.children.length > 8
    ) {
        activityTable.removeChild(
            activityTable.lastElementChild
        );
    }
}

/* ===============================
   AI INSIGHTS
================================ */

const aiInsights = [

    "Revenue growth is trending upward. Consider increasing marketing investment.",

    "User engagement increased during the last update cycle.",

    "Sales conversion rate appears healthy and stable.",

    "Visitor growth indicates positive platform performance.",

    "AI predicts continued growth if current trends remain stable.",

    "Peak activity periods suggest opportunities for targeted promotions.",

    "Customer acquisition costs may be optimized for higher profitability.",

    "Dashboard metrics indicate strong operational performance."
];

aiBtn.addEventListener("click", () => {

    aiResponse.innerHTML =
        "<strong>Generating AI Insights...</strong>";

    setTimeout(() => {

        const randomInsight =
            aiInsights[
                Math.floor(
                    Math.random() *
                    aiInsights.length
                )
            ];

        aiResponse.innerHTML = `
            <strong>AI Analysis:</strong><br><br>
            ${randomInsight}
        `;

        addNotification(
            "AI generated new insights"
        );

        addActivity(
            "AI Insight Generated",
            "Completed"
        );

    }, 1500);
});

/* ===============================
   THEME SWITCHER
================================ */

let darkMode = true;

themeBtn.addEventListener("click", () => {

    if (darkMode) {

        document.documentElement.style.setProperty(
            "--bg-primary",
            "#f8fafc"
        );

        document.documentElement.style.setProperty(
            "--bg-secondary",
            "#ffffff"
        );

        document.documentElement.style.setProperty(
            "--text",
            "#111827"
        );

        document.documentElement.style.setProperty(
            "--text-secondary",
            "#374151"
        );

        themeBtn.innerHTML =
            '<i class="fa-solid fa-sun"></i>';

    } else {

        document.documentElement.style.setProperty(
            "--bg-primary",
            "#0f172a"
        );

        document.documentElement.style.setProperty(
            "--bg-secondary",
            "#111827"
        );

        document.documentElement.style.setProperty(
            "--text",
            "#ffffff"
        );

        document.documentElement.style.setProperty(
            "--text-secondary",
            "#cbd5e1"
        );

        themeBtn.innerHTML =
            '<i class="fa-solid fa-moon"></i>';
    }

    darkMode = !darkMode;
});

/* ===============================
   SEARCH BAR
================================ */

const searchBar =
    document.getElementById("searchBar");

searchBar.addEventListener("keyup", () => {

    const value =
        searchBar.value.toLowerCase();

    const menuItems =
        document.querySelectorAll(".menu li");

    menuItems.forEach(item => {

        const text =
            item.textContent.toLowerCase();

        if (
            text.includes(value)
        ) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
});

/* ===============================
   MENU ACTIVE STATE
================================ */

const menuItems =
    document.querySelectorAll(".menu li");

menuItems.forEach(item => {

    item.addEventListener("click", () => {

        menuItems.forEach(menu => {
            menu.classList.remove("active");
        });

        item.classList.add("active");
    });
});

/* ===============================
   AUTO REFRESH ANALYTICS
================================ */

generateAnalytics();

setInterval(() => {
    generateAnalytics();
}, 5000);

/* ===============================
   STARTUP MESSAGE
================================ */

setTimeout(() => {

    addNotification(
        "Fyronix AI Dashboard initialized successfully"
    );

    addActivity(
        "System Started",
        "Success"
    );

}, 1000);
async function loadAIInsights() {

  try {

    const token =
      localStorage.getItem(
        "token"
      );

    const response =
      await fetch(
        "http://localhost:5000/api/ai/insights",
        {
          headers: {
            Authorization:
              `Bearer ${token}`
          }
        }
      );

    const data =
      await response.json();

    aiResponse.innerHTML =
      data.insights
        .map(
          item =>
            `<p>• ${item}</p>`
        )
        .join("");

  } catch (error) {

    aiResponse.innerHTML =
      "Failed to load AI insights.";
  }
}

aiBtn.addEventListener(
  "click",
  loadAIInsights
);