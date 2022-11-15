import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false}

  btnClicked = () => {
    this.setState(prevState => {
      if (prevState.isSubscribed === false) {
        return {isSubscribed: true}
      }
      return {isSubscribed: false}
    })
  }

  renderSubbtn = () => {
    const {isSubscribed} = this.state
    if (isSubscribed === true) {
      return (
        <button className="button" onClick={this.btnClicked}>
          Subscribed
        </button>
      )
    }
    return (
      <button className="button" onClick={this.btnClicked}>
        Subscribe
      </button>
    )
  }

  render() {
    return (
      <div className="container">
        <h1 className="heading">Welcome!</h1>
        <p>Thank you! Happy Learning</p>
        {this.renderSubbtn()}
      </div>
    )
  }
}

export default Welcome
