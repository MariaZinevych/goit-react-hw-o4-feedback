import { Component } from 'react';
import { Statictics } from './Statistics/Statistics';
import { GlobalStyle } from 'Global.styled';
import { Feedbacks } from './FeedbackOption/FeedbackOptions ';
import { Section } from './Section/section';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleOnClick = type => {
    this.setState(prevState => ({ [type]: prevState[type] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const totalfeedbach = this.countTotalFeedback();
    return Math.round((good / totalfeedbach) * 100) || 0;
  };

  render() {
    const options = Object.keys(this.state);
    return (
      <>
        <Section title="Please leave a feedbeack">
          <Feedbacks options={options} onClick={this.handleOnClick} />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() !== 0 ? (
            <Statictics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              onTotal={this.countTotalFeedback}
              onGoodfeedback={this.countPositiveFeedbackPercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>

        <GlobalStyle />
      </>
    );
  }
}
