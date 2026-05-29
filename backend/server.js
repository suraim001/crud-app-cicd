const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get('/api/health', (req, res) => {
    res.json({ status: "healthy", message: "Backend API is running flawlessly" });
});

app.listen(PORT, () => {
    console.log(`Backend server initiated on port ${PORT}`);
});