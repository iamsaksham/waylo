import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Button from 'react-bootstrap/lib/Button'

class Sidebar extends Component {

  render() {
    let avatarStyle = {
      float : "left",
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50%',
      width: '100px',
      height: '100px',
      borderRadius: "50%",
      marginTop: '6%',
      marginLeft: '2%'
    }

    return (
      <div style={{height: '100%', width: '100%', backgroundColor: 'white'}}>
        <div style={{height: '25%', width: '110%'}}>
          <img src="http://vignette2.wikia.nocookie.net/marvelmovies/images/8/87/AoU_Tony_Stark_portal.png/revision/latest?cb=20150427084736" alt="avatar" className="user-avatar" style={avatarStyle}></img>
          <div style={{ float : "left", marginTop: '10%', marginLeft: '10%'}}><h3>Tony Stark</h3></div>
        </div>
        <div style={{ float : "left", marginTop: '8%', width: '100%', marginLeft: '2%', wordSpacing: '40px'}}>
          <div style={{color: '#a9a9a9'}}>Gender - Male</div>
        </div>
        <div style={{ float : "left", marginTop: '8%', width: '100%', marginLeft: '2%', wordSpacing: '40px'}}>
          <div style={{color: '#a9a9a9'}}>Country - USA</div>
        </div>
        <div style={{ float : "left", marginTop: '8%', width: '100%', marginLeft: '2%', wordSpacing: '30px'}}>
          <div style={{color: '#a9a9a9'}}>Language - English</div>
        </div>
        <div style={{ float : "left", marginTop: '8%', width: '100%', marginLeft: '2%', wordSpacing: '1px'}}>
          <div style={{color: '#a9a9a9'}}>Timezone - Eastern Time Zone UTC ‐ 05:00</div>
        </div>
        <div style={{ float : "left", marginTop: '8%', width: '100%', marginLeft: '2%', wordSpacing: '1px'}}>
          <div style={{color: '#a9a9a9'}}>Last 3 searches - </div>
        </div>
        <Button style={{marginTop: '80%', width: '90%', backgroundColor: '#90EE90'}}>Send Offers</Button>
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
)(Sidebar)
