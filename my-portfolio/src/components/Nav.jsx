import { Link } from 'react-router-dom'


const Nav = () => {
    return (
        <div className='navBar'>
            <Link to="/" className='navLinks'>
                <h2>Home</h2>
            </Link>
            <Link to="/about" className='navLinks'>
                <h2>About Me</h2>
            </Link>
            <Link to="/projects" className='navLinks'>
                <h2>Projects</h2>
            </Link>
            <Link to="/Contact" className='navLinks'>
                <h2>Contact</h2>
            </Link>



        </div>

    )    
}
    
    export default Nav