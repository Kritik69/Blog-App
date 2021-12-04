import './bar.css'
import { NavLink } from 'react-router-dom';

const Bar = ()=> {
    return(
        <>
            <div className='bar-main'>
                <NavLink to='/' style={{textDecoration:'none'}}><div className='home'>Home</div></NavLink >
                <NavLink to='/bollywood' style={{textDecoration:'none'}}><div className='bollywood'>Bollywood</div></NavLink>
                <NavLink to='/hollywood' style={{textDecoration:'none'}}><div className='hollywood'>Hollywood</div></NavLink>
                <NavLink to='/technology' style={{textDecoration:'none'}}><div className='technology'>Technology</div></NavLink>
                <NavLink to='/fitness' style={{textDecoration:'none'}}><div className='fitness'>Fitness</div></NavLink>
                <NavLink to='/food' style={{textDecoration:'none'}}><div className='food'>Food</div></NavLink>
            </div>
            <hr className='hr' />
        </>
    )
}

export default Bar;