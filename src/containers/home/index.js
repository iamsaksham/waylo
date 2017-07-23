import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import moment from 'moment'
import axios from 'axios'
import Menu from '../menu'
import TotalSavings from '../totalSavings'
import WeekSavings from '../weekSavings'
import BarChart from '../barChart'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      startDate: '17-07-2017',
      endDate: moment(),
      data: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.loadDataFromServer = this.loadDataFromServer.bind(this);
  }

  componentWillMount() {
    this.loadDataFromServer();
  }

  loadDataFromServer() {
    axios.get("http://localhost:3001/api/savings")
    .then(res => {
      let day = 0;
      let savingsData = [];
      while(day < 7) {
        savingsData.push({text: res.data[day].day, value: res.data[day].value})
        day++;
      }
      this.setState({ data: savingsData });
    })
  }

  handleChange(date) {
    this.setState({
      endDate: date
    });
  }

  render () {
    let finishDate = moment(new Date(this.state.endDate)).format("DD/MM/YYYY")
    let {data} = this.state;

    return (
      <div>
        <div style={{position: 'absolute', height: '100%', width: '3%'}}>
          <Menu />
        </div>
        <div style={{position: 'absolute', height: '100%', marginLeft: '5%'}}>
          <h3>Good Morning, Hotel</h3>
        </div>
        <div style={{position: 'absolute', marginLeft: '10%', marginTop: '8%'}}>
          <div style={{width: '50%', margin: '0 auto'}}>Savings from {this.state.startDate} to {finishDate}</div>
          <div style={{marginLeft: '70%', float: 'right'}}>
            <DatePicker
              dateFormat="DD/MM/YYYY"
              selected={this.state.endDate}
              onChange={this.handleChange}
            />
          </div>
          <div style={{marginLeft: '0%'}}>
            <TotalSavings startDate={this.state.startDate} finishDate={finishDate}/>
          </div>
          <div style={{marginLeft: '0%'}}>
            <WeekSavings data={data}/>
          </div>
          <div style={{marginLeft: '0%', marginTop: '-66%', float: 'right', width: '65%'}}>
            <BarChart data={data}/>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
