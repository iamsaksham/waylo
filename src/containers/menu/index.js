import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import Button from 'react-bootstrap/lib/Button'
import { connect } from 'react-redux'
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from '../../modules/counter'

class Menu extends Component {

  render() {
    return (
      <div style={{height: '100%', width: '100%', backgroundColor: '#121f1f'}}>
        <div style={{paddingTop: '200px'}}>
          <Button style={{width: '100%', height: '20px'}} bsClass="glyphicon glyphicon-camera" onClick={() => this.props.changePageToChart()}></Button>
        </div>
        <div style={{paddingTop: '20px'}}>
          <Button style={{width: '100%', height: '20px'}} bsClass="glyphicon glyphicon-camera" onClick={() => this.props.changePageToMap()}></Button>
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
  changePageToChart: () => push('/'),
  changePageToMap: () => push('/map')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu)
