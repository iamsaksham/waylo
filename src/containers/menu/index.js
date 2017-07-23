import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Glyphicon from 'react-bootstrap/lib/Glyphicon'

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
})

const mapDispatchToProps = dispatch => bindActionCreators({
  changePageToChart: () => push('/'),
  changePageToMap: () => push('/map')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu)
