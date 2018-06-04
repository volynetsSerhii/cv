import React, { Component } from 'react';
import './projects.css';
import kilikotLogo from '../../assets/KILIKOT.png'
import kilikotScreen from '../../assets/KILIKOT_SCREEN.png'
import coffeeLogo from '../../assets/COFFEE.png'
import coffeeScreen from '../../assets/COFFEE_SCREEN.png'
import chystiuliaLogo from '../../assets/CHYSTIULIA.png'

const T_ReactJS = 'ReactJS'.toUpperCase()
const T_Other = 'Other'.toUpperCase()

class Projects extends Component {
    
    constructor(props) {
        super(props)
        this.state={
            tab: T_ReactJS
        }
    }

    reactJSData = [
        {
            caption: 'Kilikot',
            logo: kilikotLogo,
            header: 'Kilikot crossplatform mobile app',
            body: 'React-Native / Redux / Firebase / Git'.toUpperCase(),
            footer: 'Kilikot is a centralized system of loyalty between travel agencies (and also by managers of travel agencies) for the timely submission '+
                'of information to the corresponding hotels participating in the club Kilikot.',
            screen: kilikotScreen
        },
        {
            caption: 'CoffePOS',
            logo: coffeeLogo,
            header: 'CoffePOS crossplatform mobile app',
            body: 'React-Native / Redux / Redux-Saga / Redux-Persist / Git'.toUpperCase(),
            footer: 'The CoffeePOS application is the sellers workplace. It helps entrepreneurs to keep inventory, plan purchases of goods and ingredients, '+
                'analyze sales, monitor employees, manage a network of outlets on their smartphone, tablet or PC in their personal account.',
            screen: coffeeScreen
        },
    ]

    otherData = [
        {
            caption: 'Chystiulia',
            logo: chystiuliaLogo,
            header: 'Chystiulia software',
            body: 'Embarcadero Delphi / Firebird / SQL / HTML / XML / CSS'.toUpperCase(),
            footer: 'This software for the POS system for the local network of retail stores (more than 80) of household chemicals - Chistyulya. '+
                'The software includes a frontend installed on cash points, a backend with workstations at the central office, '+
                'mobile application for organize wholesale sales and analytical add-on modules. The system works offline.'
        },
    ]

    getElementFromData = (data) => {
        return data.map((el)=><div className="Body-itemBox" key={el.caption}>
                <div className="Body-itemLeft">
                    <p className="Body-captionText">{el.caption}</p>
                    <img className = "Body-captionLogo" src={el.logo} alt={''}/>
                </div>
                <div className="Body-itemRight">
                    <p className="Body-itemTextHeader">
                        {el.header}
                    </p>
                    <p className="Body-itemTextBody">
                        {el.body}
                    </p>
                    <img className = "Body-screen" src={el.screen} alt={''}/>
                    <p className="Body-itemTextFooter">
                        {el.footer}
                    </p>
                </div>
            </div>
        )
    }

    reactJS = this.getElementFromData(this.reactJSData)
    other = this.getElementFromData(this.otherData)

    tabClick = (tab) => {
        this.setState({tab})
    }

    render() {
        let tabButtons = [T_ReactJS,T_Other]
        tabButtons = tabButtons.map ((e)=><p className = 'Body-titleResume' style = {(this.state.tab === e) ? {fontWeight:'bold', backgroundColor: '#ff6d00dd'} : null} onClick = {() => this.tabClick(e)} key = {e}>{e}</p>)
        let selectedTab = null
        switch (this.state.tab) {
          case T_ReactJS: { selectedTab = this.reactJS; break}
          case T_Other: { selectedTab = this.other; break}
          default: { selectedTab = this.reactJS; break}
        }
        return (
            <div className = 'Body'>
                <div className ="Body-titleBox">
                    {tabButtons}
                </div>
                <div className="Body-textBox" style = {{ maxHeight: window.innerHeight-97 }}>
                    <div className="Body-textBoxWrap">
                        {selectedTab}
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects;