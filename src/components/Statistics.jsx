import { StatisticLine } from "./StatisticLine";

/* eslint-disable react/prop-types */
// fuck tables all my homies use divs
export const Statistics = ({ props }) => {
  return (
    <div>
      {props.statistics.grades.map((item) => {
        return (
          <StatisticLine name={item.name} value={item.value} key={item.name} />
        );
      })}

      {props.feedback ? (
        <>
          {props.statistics.calcResults.map((item) => {
            return (
              <StatisticLine
                name={item.name}
                value={item.value}
                key={item.name}
              />
            );
          })}
        </>
      ) : (
        <>No feedback given</>
      )}
    </div>
  );
};
