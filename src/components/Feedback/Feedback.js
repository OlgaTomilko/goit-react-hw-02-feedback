// import React, { Component } from "react";
import React, { useState } from "react";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
import Statistics from "../Statistics/Statistics";
import Section from "../Section/Section";

const Feedback = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleKeys = () => {
    const keys = Object.keys(feedback);
    return keys;
  };

  const handleIncrement = (event) => {
    const option = event.target.id;
    setFeedback((prevState) => ({
      ...prevState,
      [option]: prevState[option] + 1,
    }));
  };

  const countTotalFeedback = () => {
    const total = feedback.good + feedback.neutral + feedback.bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    const positive = feedback.good;
    const percentage = Math.round((positive / total) * 100);
    return percentage;
  };

  return (
    <div>
      <Section title={"Please live feedback"}>
        <FeedbackOptions
          options={handleKeys()}
          onLeaveFeedback={handleIncrement}
        />
      </Section>
      <Section title={"Statistics"}>
        <Statistics
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </div>
  );
};

// class Feedback extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleKeys() {
//     const keys = Object.keys(this.state);
//     return keys;
//   }

//   handleIncrement = (event) => {
//     const option = event.target.id;
//     this.setState((prevState) => ({
//       [option]: prevState[option] + 1,
//     }));
//   };

//   countTotalFeedback() {
//     const total = this.state.good + this.state.neutral + this.state.bad;
//     return total;
//   }

//   countPositiveFeedbackPercentage() {
//     const total = this.countTotalFeedback();
//     const positive = this.state.good;
//     const percentage = Math.round((positive / total) * 100);
//     return percentage;
//   }

//   render() {
//     return (
//       <div>
//         <Section title={"Please live feedback"}>
//           <FeedbackOptions
//             options={this.handleKeys()}
//             onLeaveFeedback={this.handleIncrement}
//           />
//         </Section>
//         <Section title={"Statistics"}>
//           <Statistics
//             good={this.state.good}
//             neutral={this.state.neutral}
//             bad={this.state.bad}
//             total={this.countTotalFeedback()}
//             positivePercentage={this.countPositiveFeedbackPercentage()}
//           />
//         </Section>
//       </div>
//     );
//   }
// }

export default Feedback;
