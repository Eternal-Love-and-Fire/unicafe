import { useState } from "react";
import { Button, Statistics } from "./components";

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const all = good + neutral + bad;
  const average = (good - bad) / all;
  const positive = (good / all) * 100;

  const stats = {
    feedback: all,
    statistics: {
      grades: [
        {
          name: "Good",
          value: good,
        },
        {
          name: "Neutral",
          value: neutral,
        },
        {
          name: "Bad",
          value: bad,
        },
      ],
      calcResults: [
        {
          name: "All",
          value: all,
        },
        {
          name: "Average",
          value: average,
        },
        {
          name: "Positive",
          value: positive,
        },
      ],
    },
  };

  return (
    <div>
      <div>
        <p>Give Feedback</p>
        <div>
          <Button onClick={() => setGood(good + 1)} name="good" />
          <Button onClick={() => setNeutral(neutral + 1)} name="neutral" />
          <Button onClick={() => setBad(bad + 1)} name="bad" />
        </div>
      </div>
      <Statistics props={stats} />
    </div>
  );
};
