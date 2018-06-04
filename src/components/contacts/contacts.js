import React, { Component } from 'react';
import './contacts.css';

const gitLink = 'https://github.com/volynetsSerhii'
const facebookLink = 'https://www.facebook.com/serhii.volynets.14'
const linkedLink = 'https://www.linkedin.com/in/serhii-volynets-664207159/'
const skypeLink = 'skype:volynets.serhii?chat'
const phoneLink = 'callto://+380988004111'
const emailLink = 'mailto:volynets.serhii@gmail.com'

class Contats extends Component {

    render() {
        return (
            <div className = 'Body'>
                <p className="Body-title" >{'my con-tacts'.toUpperCase()}</p>
                <div className="Body-textBox" style = {{ maxHeight: window.innerHeight-97 }}>
                    <p className="Body-text" style = {{top: '-150px'}}>
                        Email: <a href={emailLink}>volynets.serhii@gmail.com</a><br/>
                    <br/>
                        Phone number: <a href={phoneLink}>+380988004111</a><br/>
                    <br/>
                        Skype: <a href={skypeLink}>volynets.serhii</a><br/>
                    <br/>
                        Git: <a href={gitLink}  target="_blank">volynetsSerhii</a><br/>
                    <br/>
                        Facebook: <a href={facebookLink}  target="_blank">Serhii Volynets</a><br/>
                    <br/>
                        LinkedIn: <a href={linkedLink}  target="_blank">Serhii Volynets</a><br/>
                    </p>
                </div>
            </div>
        )
    }
}

export default Contats;