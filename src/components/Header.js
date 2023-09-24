import { LOGO_URL } from "../utlis/contants";

const Header=()=>{
    return(
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src={LOGO_URL}/>
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Cart</li>
                    <li>Cart</li>
                    <li>Cart</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;