import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class WeekSavings extends Component {

  getDailySavings = () => {
    let {startDate, finishDate} = this.props;
    let day = 1,
        savings = [];
    while(day <= 7) {
      savings.push(<div key={day} style={{width: '58%', margin: '0 auto', paddingTop: '5%'}}>{startDate} to {finishDate}</div>)
      day++;
    }
    return savings
  }

  render() {

    return (
      <div style={{marginTop: '1%', backgroundColor: '#FF7772', width: '300px', height: '355px'}}>
        <div style={{width: '48%', margin: '0 auto', paddingTop: '8%', fontFamily: 'arial', fontSize: '20px'}}>Weeks Savings</div>
        {this.getDailySavings()}
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
)(WeekSavings)
