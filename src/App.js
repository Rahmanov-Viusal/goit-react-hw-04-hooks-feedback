import React, { useState } from 'react';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import Section from './components/Section';
import Notification from './components/Notification';
import Container from './components/Container';

const types = {
  GOOD: 'good',
  NEUTRAL: 'neutral',
  BAD: 'bad',
};
const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = value => {
    switch (value) {
      case types.GOOD:
        setGood(prevState => prevState + 1);
        break;

      case types.NEUTRAL:
        setNeutral(prevState => prevState + 1);
        break;

      case types.BAD:
        setBad(prevState => prevState + 1);
        break;

      default:
        throw new Error();
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const positivePercentage = () => {
    return Math.floor((good / countTotalFeedback()) * 100);
  };

  const options = Object.values(types);

  return (
    <Container className="App">
      <Section title="please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title="statistics">
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </Container>
  );
};
export default App;
