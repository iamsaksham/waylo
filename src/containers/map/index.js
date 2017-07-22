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
        <div id="gmap" style={{height:'825px', margin: 0, padding: 0}}></div>
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
