import {Link, useMatch, useResolvedPath} from "react-router-dom"

export default function Navbar(){
    return <nav className="nav">
        <Link to="/" className="site-title">
            Site Name
        </Link>
        <ul>
            <CustomLink to="/about">About Me</CustomLink>
            <CustomLink to="/experience">Experience</CustomLink>
            <CustomLink to="/resume">Resume</CustomLink>
        </ul>
    </nav>
}

// to is where you are clicking to go, About, Experience...
// ...props is any classNames that may need to be passed for css
// children is the words displayed on the page, About Me, Experience, Home
function CustomLink({to, children, ...props}) {

    //These methods get the path of the page you are trying to access
    // then the use match checks to see if the url matched up and if it does
    // it sets isActive to true.
    // We have to use these variables since with routing the pages
    // do not refresh so the active class would not be set
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true}) //Want to make sure the entire path is mathching for linking pages

    // the li is checking to see if the url is matching to the page you are trying
    // to link. It then checks if is active is true and sets it to active if it
    // is and sets it as not active if not.
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}