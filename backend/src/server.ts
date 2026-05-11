import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import brandRoutes from "./routes/brand.routes";
import carRoutes from "./routes/car.routes";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
  return res.json({
    status: "ok",
    message: "AutoVerse API is running",
  });
});

app.use("/brands", brandRoutes);
app.use("/cars", carRoutes);

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
