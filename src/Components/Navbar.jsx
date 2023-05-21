import style from "../Components/Navbar.module.css"
import { Link } from "react-router-dom"

function Navbar(){
    return (
        <>
        <div className={style.body}>
        <h1 className={style.logotitle}>G</h1>

        <Link to='/'>home</Link>
        <Link to='/about'>about</Link>
        <Link to='/blog'>blog</Link>
        <Link to='/contact'>Contact</Link>
        
        </div>

        </>
    )
}

export default Navbar