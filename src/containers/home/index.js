import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import moment from 'moment'
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from '../../modules/counter'
import Menu from '../menu'
import TotalSavings from '../totalSavings'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      startDate: '17-07-2017',
      endDate: moment()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      endDate: date
    });
  }

  render () {
    let finishDate = moment(new Date(this.state.endDate)).format("DD/MM/YYYY")

    return (
      <div>
        <div style={{position: 'absolute', height: '100%', width: '3%'}}>
          <Menu />
        </div>
        <div style={{position: 'absolute', height: '100%', marginLeft: '5%'}}>
          <h3>Good Morning, Hotel</h3>
        </div>
        <div style={{position: 'absolute', height: '100%', marginLeft: '10%', width: '100%', marginTop: '8%'}}>
          <div style={{width: '50%', margin: '0 auto'}}>Savings from {this.state.startDate} to {finishDate}</div>
          <div style={{marginLeft: '70%'}}>
            <DatePicker
              dateFormat="DD/MM/YYYY"
              selected={this.state.endDate}
              onChange={this.handleChange}
            />
          </div>
          <div style={{marginLeft: '0%'}}>
            <TotalSavings startDate={this.state.startDate} finishDate={finishDate}/>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  count: state.counter.count,
  isIncrementing: state.counter.isIncrementing,
  isDecrementing: state.counter.isDecrementing
})

const mapDispatchToProps = dispatch => bindActionCreators({
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
  changePage: () => push('/map')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
