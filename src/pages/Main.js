import AboutModal from './AboutPage';
import Navbar from './Navbar';
import {BrowserRouter as Router, Link} from 'react-router-dom';
export default function Main() {
    return <div className="wrapper">
            <div className="top-info">
                
                    <div className="top-left">
                        <div className="about-info"><span className="ah">A</span>
                    <span className="ah">b</span>
                    <span className="ah">o</span>
                    <span className="ah">u</span>
                    <span className="ah">t</span>
                    &nbsp;
                    <span className="ah">M</span>
                    <span className="ah">e</span>
                    </div>
                        
                        <div className="tl-btn">
                            <Link to="/about-page" style={{textDecoration:'none'}}>
                            <button className="view-about">open()</button>
                            </Link>
                        </div>
                    </div>
               
                
                
                    <div className='top-right'>
                    <div className="exp-info"><span className="eh">E</span>
                    <span className="eh">x</span>
                    <span className="eh">p</span>
                    <span className="eh">e</span>
                    <span className="eh">r</span>
                    <span className="eh">i</span>
                    <span className="eh">e</span>
                    <span className="eh">n</span>
                    <span className="eh">c</span>
                    <span className="eh">e</span></div>
                        
                        <div className="tr-btn">
                            <button className="view-exp">open()</button>
                        </div>
                    </div>
                
            </div>
            <div className="bottom-info">
                
                <div className='bottom-left'>
                    <div className="skills-info"><span className="skh">S</span>
                    <span className="skh">k</span>
                    <span className="skh">i</span>
                    <span className="skh">l</span>
                    <span className="skh">l</span>
                    <span className="skh">s</span>
                    </div>
                        
                        <div className="bl-btn">
                            <button className="view-skills">open()</button>
                        </div>
                    
                </div>
                
                
                    <div className="bottom-right">
                        <div className="resume-info"><span className="rh">R</span>
                    <span className="rh">e</span>
                    <span className="rh">s</span>
                    <span className="rh">u</span>
                    <span className="rh">m</span>
                    <span className="rh">e</span>
                    </div>
                        
                            <div className="br-btn">
                                <Link to="/resume" style={{textDecoration: "none"}}>
                                    <button className="view-resume" >open()</button>
                                </Link>
                                
                            
                            </div>
                    </div>
                
            </div>
        </div>
}