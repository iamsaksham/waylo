import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from '../../modules/counter'
import Menu from '../menu'
import Sidebar from '../sidebar'

class Map extends Component {
  componentDidMount() {
    // let latlng = new window.google.maps.LatLng(39.305, -76.617);
    // let map = new window.google.maps.Map(document.getElementById('gmap'), {
    //   center: latlng,
    //   zoom: 12
    // });
    let India = {lat: 20.5937, lng: 78.9629};
    new window.google.maps.Map(document.getElementById('gmap'), {
      zoom: 4,
      center: India
    });
  }
  render() {
    return (
      <div>
        <div style={{position: 'absolute', height: '100%', width: '3%'}}>
          <Menu />
        </div>
        <div id="gmap" style={{left: '3%', height:'825px', width: '70%', margin: 0, padding: 0}}></div>
        <div style={{position: 'absolute', height: '100%', left: '75%', top: '0px'}}>
          <Sidebar />
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
  changePage: () => push('/')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map)
