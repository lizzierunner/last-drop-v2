const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

// In-memory store for demo
let miles = 0;
let factUnlocked = false;
let seasonProgress = 0;
let missionChoices = {};

app.post('/api/miles', (req, res) => {
  miles = req.body.miles;
  res.json({ success: true, miles });
});

app.post('/api/fact-unlocked', (req, res) => {
  factUnlocked = req.body.factUnlocked;
  res.json({ success: true, factUnlocked });
});

app.post('/api/season-progress', (req, res) => {
  seasonProgress = req.body.progress;
  res.json({ success: true, seasonProgress });
});

app.post('/api/mission-choice', (req, res) => {
  const { missionIdx, choice } = req.body;
  missionChoices[missionIdx] = choice;
  res.json({ success: true, missionChoices });
});

app.get('/api/state', (req, res) => {
  res.json({ miles, factUnlocked, seasonProgress, missionChoices });
});

app.listen(PORT, () => {
  console.log(`Last Drop backend running on http://localhost:${PORT}`);
});
