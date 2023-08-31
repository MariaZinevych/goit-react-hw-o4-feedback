import { Statictics } from './Statistics/Statistics';
import { GlobalStyle } from 'Global.styled';
import { Feedbacks } from './FeedbackOption/FeedbackOptions ';
import { Section } from './Section/section';
import { Notification } from './Notification/Notification';
import { useState } from 'react';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleOnClick = state => {
    switch (state) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;

      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const totalfeedbach = countTotalFeedback();
    return Math.round((good / totalfeedbach) * 100) || 0;
  };

  const options = Object.keys({ good, neutral, bad });
  return (
    <>
      <Section title="Please leave a feedbeack">
        <Feedbacks options={options} onClick={handleOnClick} />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() !== 0 ? (
          <Statictics
            good={good}
            neutral={neutral}
            bad={bad}
            onTotal={countTotalFeedback}
            onGoodfeedback={countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>

      <GlobalStyle />
    </>
  );
};
