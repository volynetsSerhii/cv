import React, { Component } from 'react';
import './resume.css';
import seotmLogo from '../../assets/SEOTM.png';
import flashLogo from '../../assets/FLASH.png';
import delphiLogo from '../../assets/DELPHI.png';
import msLogo from '../../assets/MS.png';
import reactLogo from '../../assets/REACT.png';
import reduxLogo from '../../assets/REDUX.png';
import firebaseLogo from '../../assets/FIREBASE.png';
import gitLogo from '../../assets/GIT.png';
import sqlLogo from '../../assets/SQL.png';
import universityLogo from '../../assets/ZHSTU.png';

const T_Expiriance = 'Expiriance'.toUpperCase()
const T_Skils = 'Skils'.toUpperCase()
const T_Education = 'Education'.toUpperCase()

class Resume extends Component {
    
    constructor(props) {
        super(props)
        this.state={
            tab: T_Expiriance
        }
    }

    expirianceData = [
        {
            caption: '2017 ~ now',
            logo: seotmLogo,
            header: 'Frontend mobile developer',
            body: 'SEOTM DIGITAL AGENCY, ZHYTOMIR',
            footer: 'Development of mobile applications using React-Native framework for customers from Turkey and Ukraine. I take part in two projects of the company.'+
                ' On backend company prefer to use yii2.'
        },
        {
            caption: '2013 ~ 2016',
            logo: delphiLogo,
            header: 'Delphi developer',
            body: 'FREELANCE, ZHYTOMIR',
            footer: 'Development of software for the POS system for the local network of retail stores (more than 80) of household chemicals - Chistyulya. '+
                'The software is written on Delphi and includes a frontend installed on cash points, a backend with workstations at the central office, '+
                'mobile application for organize wholesale sales and analytical add-on modules. The system works offline. '
        },
        {
            caption: '2012 ~ 2013',
            logo: flashLogo,
            header: 'Adobe Flash developer',
            body: 'FREELANCE, ZHYTOMIR',
            footer: 'Development of sites, banners on technology Adobe Flash. Writing animations in the programming language Action Script. Customers from freelance sites.'
        },
        {
            caption: '2008 ~ 2010',
            logo: msLogo,
            header: 'Microsoft Navision Developer',
            body: 'MS CELENIA, ZHYTOMIR',
            footer: 'Development of customizations for the popular CPM/ERP system from Microsoft company - Microsoft Dynemics. Work was also performed on the bug-fixing from '+
                'the support system and the transfer of custom functionality to new versions of the product. '
        },
    ]

    skilsData = [
        {
            caption: 'REACT',
            logo: reactLogo,
            header: 'ReactJS and React-native from Facebook',
            body: 'Build native mobile apps and web user interfaces'.toUpperCase(),
            footer: 'Using 3d party libraries: react-native-firebase, nativebase, i18n, react-navigation, react-native-router-flux, react-native-elements, react-native-vector-icons and other.'
        },
        {
            caption: 'REDUX',
            logo: reduxLogo,
            header: 'ReduxJS from Facebook',
            body: 'Predictable state container for apps'.toUpperCase(),
            footer: 'Using 3d party libraries: redux-thunk, redux-saga, redux-persist, reselect.'
        },
        {
            caption: 'FIREBASE',
            logo: firebaseLogo,
            header: 'Firebase mobile platform from Google',
            body: 'Helps quickly develop high-quality apps'.toUpperCase(),
            footer: 'Using Firebase products: cloud messaging, realtime database, cloud storage, cloud functions, authentication.'
        },
        {
            caption: 'GIT',
            logo: gitLogo,
            header: 'GIT version control system from Google',
            body: 'Handle projects with speed and efficiency.'.toUpperCase(),
            footer: 'Use for tracking changes in computer files and coordinating work on those files among multiple people.'
        },
        {
            caption: 'OTHER',
            logo: sqlLogo,
            header: 'Here you can seen list of other my skils',
            body: 'These skills were used by me during my professional activity'.toUpperCase(),
            footer: 'List of them: HTML, CSS, Embarcadero Delphi, Firebird, SQL, Adobe pakeg and other.'
        },
    ]

    educationData = [
        {
            caption: '2003 ~ 2008',
            logo: universityLogo,
            header: 'Zhytomyr State Technological University',
            body: 'Bachelor of Engineering (B.Eng.)'.toUpperCase(),
            footer: 'The Department of Computerized management and automation system.'
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
                    <p className="Body-itemTextFooter">
                        {el.footer}
                    </p>
                </div>
            </div>
        )
    }

    expiriance = this.getElementFromData(this.expirianceData)
    skils = this.getElementFromData(this.skilsData)
    education = this.getElementFromData(this.educationData)

    tabClick = (tab) => {
        this.setState({tab})
    }

    render() {
        let tabButtons = [T_Expiriance,T_Skils,T_Education]
        tabButtons = tabButtons.map ((e)=><p className = 'Body-titleResume' style = {(this.state.tab === e) ? {fontWeight:'bold', backgroundColor: '#ff6d00dd'} : null} onClick = {() => this.tabClick(e)} key = {e}>{e}</p>)
        let selectedTab = null
        switch (this.state.tab) {
          case T_Expiriance: { selectedTab = this.expiriance; break}
          case T_Skils: { selectedTab = this.skils; break}
          case T_Education: { selectedTab = this.education; break}
          default: { selectedTab = this.expiriance; break}
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

export default Resume;