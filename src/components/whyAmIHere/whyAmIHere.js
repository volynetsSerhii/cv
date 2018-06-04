import React, { Component } from 'react';
import './whyAmIHere.css';

class WhyAmIHere extends Component {

    render() {
        return (
            <div className = 'Body'>
                <p className="Body-title" >{'Why are you here?'.toUpperCase()}</p>
                <div className="Body-textBox" style = {{ maxHeight: window.innerHeight-97 }}>
                    <p className="Body-text" style = {{top: '-150px'}}>
                    Perhaps you are looking for a talented hard-working professional in a frontend JS developing.<br/>
                    <br/>
                    Let me introduce myself.<br/>
                    <br/>
                    My name is Volynets Serhii and I develop web sites and mobile applications on modern frameworks such as
                    React JS and React-Native.<br/>
                    <br/>
                    Why ReactJS?<br/>
                    <br/>
                    ReactJS is an open source JavaScript library designed by Facebook for creating rich and engaging web 
                    apps fast and efficiently with minimal coding. The core objective of ReactJS is providing the best possible 
                    rendering performance. Its strength comes from the focus on individual components. Instead of working on the 
                    entire web app, ReactJS allows a developer to break down the complex UI into simpler components.<br/>
                    <br/>
                    Why ReactJS is great for businesses?<br/>
                    <br/>
                    To hit the anticipated enterprise’s targets from your business apps, it is important to ensure they are 
                    crafted professionally and in line with the best practices. You should consider working with a ReactJS 
                    developer that has ample experience in the same tech application for many years. You could also hire a 
                    ReactJS developer to help you understand the technology and how to lever the business for a competitive 
                    advantage. A ReactJS developer will help you to craft achievable goals and demonstrate how the business 
                    can use the technology to accelerate growth, raising conversions, cutting on costs, and raising 
                    conversion rates.<br/>
                    <br/>
                    Conclusion<br/>
                    <br/>
                    I can be a part of you team or help you build your simple startup.<br/>
                    Nice to meet you. Have a nice day.<br/>
                    <br/>
                    Best regards, Serhii.
                    </p>
                </div>
            </div>
        )
    }
}

export default WhyAmIHere;