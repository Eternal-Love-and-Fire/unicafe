/* eslint-disable react/prop-types */
export const Statistics = ({props}) => {
  return (
    <div>
        <p>Statistics</p>
        <div>
          <p>Good: {props.good}</p>
          <p>Neutral: {props.neutral}</p>
          <p>Bad: {props.bad}</p>
          <p>All: {props.all ? props.all : 0}</p>
          <p>Average: {props.average ? props.average : 0}</p>
          <p>Positive: {props.positive ? props.positive : 0}%</p>
        </div>
      </div>
  )
}
