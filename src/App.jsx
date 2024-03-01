import { useState } from "react"
import { Button } from "./components"

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  return (
    <div>
        <p>Give Feedback</p>
        <div>
            <Button onClick={() => setGood(good + 1)} name="good"/>
            <Button onClick={() => setNeutral(neutral + 1)} name="neutral"/>
            <Button onClick={() => setBad(bad + 1)} name="bad"/>
        </div>
        <div>
          <p>{good}</p>
          <p>{neutral}</p>
          <p>{bad}</p>
        </div>
    </div>
  )
}
