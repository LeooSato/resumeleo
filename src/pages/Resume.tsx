import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/pages/resume.css";
import 'leaflet/dist/leaflet.css';
import opai from "../images/opai.png";
import {CSSProperties} from "react";
const myStyles: CSSProperties = {
  width:'60%',
} as React.CSSProperties
const myStyles7: CSSProperties = {
  width:'70%',
} as React.CSSProperties

const myStyles3: CSSProperties = {
  width:'30%',
} as React.CSSProperties

const myStyles4: CSSProperties = {
  width:'40%',
} as React.CSSProperties

const myStyles45: CSSProperties = {
  width:'45%',
} as React.CSSProperties

const myStyles15: CSSProperties = {
  width:'15%',
} as React.CSSProperties
function Resume(){
  return(
    <div id="page-map">
    <aside>
      <header>
        <h2>Leonardo Kenji Sato</h2>
        <p className="wellcome">Welcome to my Skills!!</p>
        <p>Technician in Web developing but this you already know.</p> 
        <p>I'm graduating in Bacharel in Sciences and Technology at UFABC at thirdy four-month.</p>
        <p>My english I'm pretty happy to say is an awesome level</p>
        <p>Some languages and 'frame-works' that I have some knowledge are</p>
  <div className="progress">
  <div className="progress-bar bg-dark" style={myStyles7}>HTML 70%</div></div>
  <br/>
  <div className="progress">
  <div className="progress-bar bg-dark" style={myStyles}>CSS 60%</div></div>
  <br/>
  <div className="progress">
  <div className="progress-bar bg-dark" style={myStyles}>MySql 60%</div></div>
  <br/>
  <div className="progress">
  <div className="progress-bar bg-dark" style={myStyles45}>Angular 45%</div></div>
  <br/>
  <div className="progress">
  <div className="progress-bar bg-dark" style={myStyles45}>Spring 45%</div></div>
  <br/>
  <div className="progress">
  <div className="progress-bar bg-dark" style={myStyles3}>PHP 30%</div></div>
  <br/>
  <div className="progress">
  <div className="progress-bar bg-dark" style={myStyles15}>Python 15%</div></div>

  <footer><table>
  <tr>
    <td> <a href="https://www.linkedin.com/in/leonardo-kenji-sato-0a495a1b7/">My LinkedIn</a>
        <Link to="/" className="enter-app"><a>About me</a></Link>
        <a href="https://github.com/LeooSato">GitHub</a> </td>
    
    <td><img src={opai} className="opai"></img></td>
  </tr>
 
</table>
      
      </footer>
      
        </header>
      
    </aside>

  </div>
  
  )
}


export default Resume;