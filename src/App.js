import React, { Component } from 'react';
import logo from './assets/logo.png';
import './App.css';

import WhyAmIHere from './components/whyAmIHere/whyAmIHere'
import Resume from './components/resume/resume'
import Projects from './components/projects/projects'
import Contacts from './components/contacts/contacts'

const M_WhyAmIHere = 'Why am I here?'
const M_Resume = 'Resume'
const M_Projects = 'Projects'
const M_Contacts = 'Contacts'

const BG_WXGA = require('./assets/BG_WXGA_1366_768.jpg')
const BG_FHD = require('./assets/BG_FHD_1920_1080.jpg')
const BG_QHD = require('./assets/BG_QHD_2560_1440.jpg')
const BG_UHD = require('./assets/BG_UHD_3840_2160.jpg')

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      sceen: M_WhyAmIHere,
      bgImage: BG_FHD
    }
  }

  componentDidMount(){
    this._windowResize()
    window.addEventListener('resize', this._windowResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._windowResize)
  }

  _windowResize = () => {
    if (window.screen.width <= 1366 ) { 
      this.setState({bgImage: BG_WXGA})
    } else if (window.screen.width <= 1920 ) {  
      this.setState({bgImage: BG_FHD})
    } else if (window.screen.width <= 2560 ) {  
      this.setState({bgImage: BG_QHD})
    } else { this.setState({bgImage: BG_UHD})}
  }

  menuItemClick = (sceen) => {
    this.setState({sceen})
  }

  render() {
    let buttons = [M_WhyAmIHere,M_Resume,M_Projects,M_Contacts]
    buttons = buttons.map ((e)=><button className = 'menuItem' style = {(this.state.sceen === e) ? {fontWeight:'bold'} : null} onClick = {() => this.menuItemClick(e)} key = {e}>{e}</button>)
    let selectedSceen = null
    switch (this.state.sceen) {
      case M_WhyAmIHere: { selectedSceen = <WhyAmIHere/>; break}
      case M_Resume: { selectedSceen = <Resume/>; break}
      case M_Projects: { selectedSceen = <Projects/>; break}
      case M_Contacts: { selectedSceen = <Contacts/>; break}
      default: { selectedSceen = <WhyAmIHere/>; break}
    }
    return (
      <div className="App" style = {{ height: window.innerHeight, backgroundImage: `url(${this.state.bgImage})`}}>
        <div className="HeaderBG">
        </div>       
        <div className="Container">
          <div className="Header">
            <img src={logo} className="App-logo" alt="logo" />
            <div className = 'menu'>
              {buttons}
            </div>
          </div>
          {selectedSceen}
        </div>
      </div>
    );
  }
}

export default App;
