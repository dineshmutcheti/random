// Write your code here
import {Component} from 'react'
import './index.css'
class RandomNumberGenerator extends Component {
  state = {randomNum: 0}

  generateRandomNum = () => {
    const {randomNum} = this.state
    const newRandomNumber = Math.ceil(Math.random() * 100)
    this.setState({randomNum: newRandomNumber})
  }

  render() {
    const {randomNum} = this.state
    return (
      <div className="bg-con">
        <div className="random-card">
          <h1>Random Number</h1>
          <p className = " para">Generate a random number in the range of 0 to 100</p>
          <button
            className="button"
            type="button"
            onClick={this.generateRandomNum}
          >
            Generate
          </button>
          <p className="num">{randomNum}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
