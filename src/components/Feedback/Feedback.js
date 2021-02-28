import React, { Component } from "react";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
import Statistics from "../Statistics/Statistics";
import Section from "../Section/Section";

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleKeys() {
    const keys = Object.keys(this.state);
    return keys;
  }

  handleIncrement = (value) => {
    const option = value.target.id;
    this.setState((prevState) => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback() {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  }

  countPositiveFeedbackPercentage() {
    const total = this.countTotalFeedback();
    const positive = this.state.good;
    const percentage = Math.round((positive / total) * 100);
    return percentage;
  }

  render() {
    return (
      <div>
        <Section title={"Please live feedback"}>
          <FeedbackOptions
            options={this.handleKeys()}
            onLeaveFeedback={this.handleIncrement}
          />
        </Section>
        <Section title={"Statistics"}>
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </div>
    );
  }
}

export default Feedback;
