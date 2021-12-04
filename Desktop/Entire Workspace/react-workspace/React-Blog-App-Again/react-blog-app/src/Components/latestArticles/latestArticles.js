import './latestArticles.css'
import ArticleImage from './the-latest-card-image.jpg'

const LatestArticles = ()=> {
    return (
        <>
            <div className='article-heading-div'>Latest Articles</div>
            <hr className='red-hr' />
            <div className='article-main'>
                <div className='article-parent-card'>
                    <div className='article-card'>
                        <div className='article-card-img-div'>
                            <img src={ArticleImage} alt='' className='article-card-img' />
                        </div>
                        <div className='content'>
                            <h4 className='article-card-heading'>Catch waves with an adventure guide</h4>
                            <p className='article-card-text'>
                            Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces
                            </p>
                            <p>Travel/<span className='grey-card-text'> August 21 2021</span></p>
                        </div>
                    </div>
                    <hr />
                    <div className='article-card'>
                        <div className='article-card-img-div'>
                            <img src={ArticleImage} alt='' className='article-card-img' />
                        </div>
                        <div className='content'>
                            <h4 className='article-card-heading'>Catch waves with an adventure guide</h4>
                            <p className='article-card-text'>
                            Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces
                            </p>
                            <p>Travel/<span className='grey-card-text'> August 21 2021</span></p>
                        </div>
                    </div>
                    <hr />
                    <div className='article-card'>
                        <div className='article-card-img-div'>
                            <img src={ArticleImage} alt='' className='article-card-img' />
                        </div>
                        <div className='content'>
                            <h4 className='article-card-heading'>Catch waves with an adventure guide</h4>
                            <p className='article-card-text'>
                            Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces
                            </p>
                            <p>Travel/<span className='grey-card-text'> August 21 2021</span></p>
                        </div>
                    </div>
                    <hr />
                    <div className='article-card'>
                        <div className='article-card-img-div'>
                            <img src={ArticleImage} alt='' className='article-card-img' />
                        </div>
                        <div className='content'>
                            <h4 className='article-card-heading'>Catch waves with an adventure guide</h4>
                            <p className='article-card-text'>
                            Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces
                            </p>
                            <p>Travel/<span className='grey-card-text'> August 21 2021</span></p>
                        </div>
                    </div>
                    <hr />
                    <div className='big-img-div-article'>
                        <img src={ArticleImage} alt='' className='big-img-article'/>
                    </div>
                </div>
                <div className='top-post-main'>
                    <div className='advertisement'>Advertisement</div>
                    <div className='article-heading-div'>Top Post</div>
                    <hr className='red-hr' />
                    <div className='top-post-img-div'>
                        <img src={ArticleImage} alt='' className='article-card-img' />
                    </div>
                    <h4 className='article-card-heading'>Catch waves with an adventure guide</h4>
                    <p>Travel/<span className='grey-card-text'> August 21 2021</span></p>
                    <hr />
                    <div className='top-post-card'>
                        <div className='top-post-img-div-card'>
                            <img src={ArticleImage} alt='' className='top-post-img' />
                        </div>
                        <div className='top-post-content'>
                            <h4 className='article-card-heading'>Catch waves with an adventure guide</h4>
                            <p>Travel/<span className='grey-card-text'> August 21 2021</span></p>
                        </div>
                    </div>
                    <hr />
                    <div className='top-post-card'>
                        <div className='top-post-img-div-card'>
                            <img src={ArticleImage} alt='' className='top-post-img' />
                        </div>
                        <div className='top-post-content'>
                            <h4 className='article-card-heading'>Catch waves with an adventure guide</h4>
                            <p>Travel/<span className='grey-card-text'> August 21 2021</span></p>
                        </div>
                    </div>
                    <hr />
                    <div className='top-post-card'>
                        <div className='top-post-img-div-card'>
                            <img src={ArticleImage} alt='' className='top-post-img' />
                        </div>
                        <div className='top-post-content'>
                            <h4 className='article-card-heading'>Catch waves with an adventure guide</h4>
                            <p>Travel/<span className='grey-card-text'> August 21 2021</span></p>
                        </div>
                    </div>
                    <hr />
                </div>
            </div>
        </>
    )
}

export default LatestArticles;