const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const http = require("http");

const { Server } = require("socket.io");

const connectDB = require("./config/db");

dotenv.config();

connectDB();

const app = express();

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*"
  }
});

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Fyronix AI Server Running"
  });
});

io.on("connection", (socket) => {
  console.log("Client Connected");

  setInterval(() => {
    socket.emit("analytics", {
      users: Math.floor(Math.random() * 10000),
      revenue: Math.floor(Math.random() * 500000),
      sales: Math.floor(Math.random() * 3000),
      visitors: Math.floor(Math.random() * 15000)
    });
  }, 5000);

  socket.on("disconnect", () => {
    console.log("Client Disconnected");
  });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server Running On Port ${PORT}`);
});

app.use(
  "/api/auth",
  require("./routes/authRoutes")
);
app.use(cors());

app.use(express.json());

app.use(
  "/api/auth",
  require("./routes/authRoutes")
);
app.use(
  "/api/analytics",
  require("./routes/analyticsRoutes")
);
app.use(
  "/api/auth",
  require("./routes/authRoutes")
);

app.use(
  "/api/analytics",
  require("./routes/analyticsRoutes")
);
io.on("connection", (socket) => {

  console.log("Client Connected");

  const analyticsInterval =
    setInterval(() => {

      socket.emit("analytics", {

        users:
          Math.floor(Math.random() * 10000),

        revenue:
          Math.floor(Math.random() * 500000),

        sales:
          Math.floor(Math.random() * 5000),

        visitors:
          Math.floor(Math.random() * 15000),

        conversionRate:
          (
            Math.random() * 10
          ).toFixed(2)

      });

    }, 5000);

  socket.on(
    "disconnect",
    () => {

      clearInterval(
        analyticsInterval
      );

      console.log(
        "Client Disconnected"
      );
    }
  );
});
app.use(
  "/api/admin",
  require("./routes/adminRoutes")
);
app.use(
  "/api/auth",
  require("./routes/authRoutes")
);

app.use(
  "/api/analytics",
  require("./routes/analyticsRoutes")
);

app.use(
  "/api/admin",
  require("./routes/adminRoutes")
);
app.use(
  "/api/ai",
  require("./routes/aiRoutes")
);
app.use(
  "/api/auth",
  require("./routes/authRoutes")
);

app.use(
  "/api/analytics",
  require("./routes/analyticsRoutes")
);

app.use(
  "/api/admin",
  require("./routes/adminRoutes")
);

app.use(
  "/api/ai",
  require("./routes/aiRoutes")
);
