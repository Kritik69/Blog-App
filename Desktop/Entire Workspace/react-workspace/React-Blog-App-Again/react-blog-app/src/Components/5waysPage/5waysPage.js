import './5waysPage.css'
import Dmitry from './dp.6a3f2e3a.png'
import ReactImg from './react-img.png'
import CodeImg from './codeimg.png'

const Page2Content = ()=> {
    return (
        <>
            <div className='page2-content-main'>
                <div className='page2-content'>
                    <h1 className='page2-heading'>5 ways to animate React App</h1>
                    <div className='profile-card'>
                        <div className='profile-img-div'>
                            <img className='profile-img' src={Dmitry} alt='' />
                        </div>
                        <div className='profile-content-div'>
                            <div className='profile-content'>
                                <p className='dmitry-name'>
                                    Dmitry Nozhenko
                                </p>
                                <p className='dmitry-date'>
                                    Jan 28, 2019 · 10 min read
                                </p>
                            </div>
                            <div className='social-media-div'>

                            </div>
                        </div>
                    </div>
                    <div className='react-img-div'>
                        <img className='react-img' src={ReactImg} alt='' />
                    </div>
                    <p className='text-Page-2'>
                        Animation in ReactJs app is a popular topic and there are many ways to create different types of animations.Many developers create animation exclusively using css and adding classes to HTML tags. This is a great way and you should use it. If you want to create complex animations you can pay attention to GreenSock. GreenSock is the most powerful animation platform. There are also a lot of libraries, components for creating animation in React.
                    </p>
                    <p className='text-Page-2'>Let’s talk about them
                    </p>
                    <div className='react-img-div-2'>
                        <img className='react-img-2' src={CodeImg} alt='' />
                    </div>
                    <div className='blocks'>
                        <div className='block'>React</div>
                        <div className='block'>Javascript</div>
                        <div className='block'>Animations</div>
                    </div>
                    <div className='profile-card'>
                        <div className='profile-img-div'>
                            <img className='profile-img' src={Dmitry} alt='' />
                        </div>
                        <div className='profile-content-div'>
                            <div className='profile-content'>
                                <p className='dmitry-name'>
                                    Dmitry Nozhenko
                                </p>
                                <p className='dmitry-date'>
                                    Jan 28, 2019 · 10 min read
                                </p>
                            </div>
                            <div className='social-media-div'>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page2Content;