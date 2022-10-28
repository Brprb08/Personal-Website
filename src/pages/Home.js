import Navbar from "./Navbar"
import {BrowserRouter as Router, Link} from 'react-router-dom';

export default function Home() {
    return <div className="default-container">
        <div className="my-name">
            <h1 className="center-text">
                <div className="name">
                    <div className="spread">
                    <span className="sh">B</span>
                    <span className="sh">r</span>
                    <span className="sh">e</span>
                    <span className="sh">n</span>
                    <span className="sh">d</span>
                    <span className="sh">a</span>
                    <span className="sh">n</span>
                    </div>
                    
                    <div>
                    <span className="sh">P</span>
                    <span className="sh">e</span>
                    <span className="sh">l</span>
                    <span className="sh">t</span>
                    <span className="sh">o</span>
                    </div>
                    </div>
                    <Link to="/main" className="link-enter">
                <button className="enter-btn">Enter Page
                </button></Link>
            </h1>
        </div>
    </div>
    
}