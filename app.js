const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');
const axios = require('axios');
const openai = require('openai');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const sequelize = new Sequelize('sqlite::memory:');

const Responses = sequelize.define('Responses', {
  age: {
    type: DataTypes.INTEGER
  },
  weight: {
    type: DataTypes.FLOAT
  },
  height: {
    type: DataTypes.FLOAT
  },
  goal: {
    type: DataTypes.STRING
  },
  commitment: {
    type: DataTypes.STRING
  },
  diet: {
    type: DataTypes.STRING
  }
});

openai.apiKey = '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';

app.get("/", (req, res) => {
  res.send("Welcome to the Fitness Pro App");
});

app.post("/questionare", async (req, res) => {
  const { age, weight, height, goal, commitment, diet } = req.body;
  try {
    const response = await Responses.create({ age, weight, height, goal, commitment, diet });
    res.redirect('/workouts');
  } catch (error) {
    console.error("Error adding response to the database:", error);
    res.status(500).send(error);
  }
});

app.get("/workouts", async (req, res) => {
  const latestResponse = await Responses.findOne({ order: [['id', 'DESC']] });
  const prompt = `Generate a workout for a person with age ${latestResponse.age}, weight ${latestResponse.weight}, height ${latestResponse.height}, goal ${latestResponse.goal}, diet ${latestResponse.diet}, and time commitment ${latestResponse.commitment}, sorted in a list format`;
  const openaiResponse = await openai.ChatCompletion.create({
    model: "gpt-3.5-turbo",
    messages: [
      { "role": "user", "content": prompt },
    ]
  });
  res.json({ workout: openaiResponse });
});

(async () => {
  try {
    await sequelize.sync();
    app.listen(3000, () => console.log('Server running on port 3000'));
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();
