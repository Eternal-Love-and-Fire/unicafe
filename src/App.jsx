import { useState } from "react";
import { Button } from "./components";

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const all =  good + neutral + bad;
  const average = (good - bad) / all;
  const positive = (good / all) * 100;
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

      <div>
        <p>Statistics</p>
        <div>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>All: {all ? all : 0}</p>
          <p>Average: {average ? average : 0}</p>
          <p>Positive: {positive ? positive : 0}%</p>
        </div>
      </div>
    </div>
  );
};
