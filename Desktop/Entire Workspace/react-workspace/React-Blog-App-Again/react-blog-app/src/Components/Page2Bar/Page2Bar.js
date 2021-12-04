
import { NavLink } from 'react-router-dom'
import './Page2Bar.css'

const Page2Bar = ()=> {
    return (
        <>
            <div className='bar-2'>
                <div className='logo-div'>
                    <div className='sirenSign-Main'>
                        <div className='the-div'>The</div>
                        <div className='siren-div'>Siren</div>
                    </div>
                </div>   
                <NavLink to='/' style={{textDecoration:'none'}}>
                <div className='get-started-btn'>Get Started</div>
                </NavLink>
            </div> 
        </>
    )
}

export default Page2Bar