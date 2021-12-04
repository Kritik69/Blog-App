import './theLatest.css'
import cardImage from './the-latest-card-image.jpg'
import { NavLink } from 'react-router-dom';

function TheLatest() {
    return (
        <>
            <div className='theLatest-main'>
                <div className='heading-div'>The Latest</div>
                <hr className='red-hr' />
                <div className='parent-cards'>
                    <NavLink to='/Page2' style={{textDecoration:'none'}}>
                    <div className='card'>
                        <div className='img-div'>
                            <img className='card-img' src={cardImage} alt='' />
                        </div>
                        <div className='theLatest-content'>
                            <h3 className='grey-card-heading'>Test text</h3>
                            <p className='grey-card-text'>This is a statement i have to make it a little longer so consumes more space</p>
                            <p>Travel/<span className='grey-card-text'> August 21 2021</span></p>
                        </div>
                    </div>
                    </NavLink>
                    <NavLink to='/Page2' style={{textDecoration:'none'}}>
                    <div className='card'>
                        <div className='img-div'>
                            <img className='card-img' src={cardImage} alt='' />
                        </div>
                        <div className='theLatest-content'>
                            <h3 className='grey-card-heading'>Test text</h3>
                            <p className='grey-card-text'>This is a statement i have to make it a little longer so consumes more space</p>
                            <p>Travel/<span className='grey-card-text'> August 21 2021</span></p>
                        </div>
                    </div>
                    </NavLink>
                    <NavLink to='/Page2' style={{textDecoration:'none'}}>
                    <div className='card'>
                        <div className='img-div'>
                            <img className='card-img' src={cardImage} alt='' />
                        </div>
                        <div className='theLatest-content'>
                            <h3 className='grey-card-heading'>Test text</h3>
                            <p className='grey-card-text'>This is a statement i have to make it a little longer so consumes more space</p>
                            <p>Travel/<span className='grey-card-text'> August 21 2021</span></p>
                        </div>
                    </div>
                    </NavLink>
                </div>
            </div>
        </>
    )
}

export default TheLatest;