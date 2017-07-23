import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import BarChart from 'react-bar-chart'

// const data = [
//   {text: 'Monday', value: 500},
//   {text: 'Tuesday', value: 300},
//   {text: 'Wednesday', value: 300},
//   {text: 'Thursday', value: 300},
//   {text: 'Friday', value: 300},
//   {text: 'Saturday', value: 300},
//   {text: 'Sunday', value: 300}
// ];

const margin = {top: 60, right: 20, bottom: 30, left: 40};

class BarChartComponent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      width: 900
    };
  }

  render() {
    let {data} = this.props;
    return (
      <div style={{marginTop: '1%', backgroundColor: '#D8D8D8', width: '900px', height: '590px'}}>
        <BarChart
          ylabel='Quantity'
          width={this.state.width}
          height={550}
          margin={margin}
          data={data}
          // onBarClick={this.handleBarClick}
        />
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
)(BarChartComponent)
