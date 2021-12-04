import Big from './Images/big-image.jpg'
import Sml from './Images/sml-image.jpg'
import '../blogImages/blogImages.css'

const BlogImages = ()=> {
    return (
        <>
        <div className='Main-blg'>
            <div className='big-img-div'>
                <img className='big-img' src={Big} alt=''/>
            </div>
            <div className='sml-img-div'>
                <img className='sml-img' src={Sml} alt=''/>
                <img className='sml-img' src={Sml} alt=''/>
            </div>
        </div>
        </>
    )
}

export default BlogImages;