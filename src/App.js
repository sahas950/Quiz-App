import React, { Component } from "react";
import "./assets/style.css";
import QuestionBox from "./components/QuestionBox";
import Result from "./components/Result";
// import StartQuiz from "./components/StartQuiz";
import quizService from "./quizService";

class App extends Component {
  state = {
    questionBank: [],
    score: 0,
    responses: 0,
    show: false,
  };

  handleCl() {
    this.setState({ show: true });
    this.setState({ responses:this.state.responses + 1 ,});
  }

  getQuestions = () => {
    quizService().then((question) => {
      this.setState({
        questionBank: question,
      });
    });
  };

  computeAnswer = (answer, correctAnswer) => {
    if (answer === correctAnswer) {
      this.setState({
        score: this.state.score + 1,
      });
    }
    this.setState({
      responses: this.state.responses < 5 ? this.state.responses + 1 : 5,
    });
  };

  playAgain = () => {
    this.getQuestions();
    this.setState({
      score: 0,
      responses: 0,
      show: false,
    });
  };
 
  

  componentDidMount() {
    this.getQuestions();
  }

  render() {
    const { show } = this.state;

    return (
      <>
          {this.state.questionBank.length > 0 &&
            this.state.responses <= 5 &&
            this.state.questionBank.map(
              ({ question, answers, correct, questionId }) => (
                <div className="container">
                  <QuestionBox
                  question={question}
                  answers={answers}
                  key={questionId}
                  selected={(answer) => this.computeAnswer(answer, correct)}
                  fc={false}
                />
                
                </div>
                
                
              )
            )
            
            }
            
          {
          this.state.responses === 5 ? (<center>
            <button className="playBtn1" onClick={() => this.handleCl()}>
              Show Result
            </button></center>) :null
          }
      { show && <Result score={this.state.score} playAgain={this.playAgain} />}
      </>
    );
  }
}

export default App;