  import {Link} from 'react-router-dom';
export default function Main() {
    return <div className="wrapper">
            <div className="contain-main">
                <div className="mainCard">
                    <div className="card-info">
                        <span className="letter">A</span>
                        <span className="letter">b</span>
                        <span className="letter">o</span>
                        <span className="letter">u</span>
                        <span className="letter">t</span>
                        &nbsp;
                        <span className="letter">M</span>
                        <span className="letter">e</span>
                    </div>
                    
                    <div className="tl-btn">
                        <Link to="/about-page" style={{textDecoration:'none'}}>
                            <button className="view-card-btn">Open</button>
                        </Link>
                    </div>
                </div>
               
            <div className="mainCard">
                <div className="card-info">
                    <span className="letter">E</span>
                    <span className="letter">x</span>
                    <span className="letter">p</span>
                    <span className="letter">e</span>
                    <span className="letter">r</span>
                    <span className="letter">i</span>
                    <span className="letter">e</span>
                    <span className="letter">n</span>
                    <span className="letter">c</span>
                    <span className="letter">e</span>
                </div>
                    
                <div className="tr-btn">
                    <button className="view-card-btn">Open</button>
                </div>
            </div>

            <div className="mainCard">
                <div className="card-info">
                    <span className="letter">S</span>
                    <span className="letter">k</span>
                    <span className="letter">i</span>
                    <span className="letter">l</span>
                    <span className="letter">l</span>
                    <span className="letter">s</span>
                </div>
                
                <div className="bl-btn">
                    <button className="view-card-btn">Open</button>
                </div>
            </div>
            
            <div className="mainCard">
                <div className="card-info">
                    <span className="letter">R</span>
                    <span className="letter">e</span>
                    <span className="letter">s</span>
                    <span className="letter">u</span>
                    <span className="letter">m</span>
                    <span className="letter">e</span>
                </div>
                    
                <div className="br-btn">
                    <Link to="/resume" style={{textDecoration: "none"}}>
                        <button className="view-card-btn" >Open</button>
                    </Link>
                </div>
            </div>
        </div>
       </div>
}
