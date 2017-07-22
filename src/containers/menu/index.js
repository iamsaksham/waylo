import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import Glyphicon from 'react-bootstrap/lib/Glyphicon'
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
        <div style={{paddingTop: '200px', marginLeft: '15%', color: 'white'}}>
          <Glyphicon glyph="stats" onClick={() => this.props.changePageToChart()}/>
        </div>
        <div style={{paddingTop: '20px', marginLeft: '15%', color: 'white'}}>
          <Glyphicon glyph="map-marker" onClick={() => this.props.changePageToMap()}/>
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
