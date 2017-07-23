import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class TotalSavings extends Component {

  getTotalAmount = () => {
    return '$54433'
  }

  getTotalPercent = () => {
    return '28%'
  }

  render() {
    let {startDate, finishDate} = this.props;

    return (
      <div style={{marginTop: '4%', backgroundColor: '#FFCB0C', width: '250px', height: '180px'}}>
        <div style={{width: '48%', margin: '0 auto', paddingTop: '12%', fontFamily: 'arial', fontSize: '20px'}}>Total Savings</div>
        <div style={{width: '70%', margin: '0 auto', paddingTop: '5%'}}>{startDate} to {finishDate}</div>
        <div style={{width: '75%', margin: '0 auto', paddingTop: '8%', fontSize: '30px'}}>
          {this.getTotalPercent()} | {this.getTotalAmount()}
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
)(TotalSavings)
