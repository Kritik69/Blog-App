import Siren from '../sirenSign/sirenSign'
import Bar from '../bar/bar'
import BlogImages from '../blogImages/blogImages'
import TheLatest from '../theLatest/theLatest'
import LatestArticles from '../latestArticles/latestArticles'
import LatestStories from '../latestStories/latestStories'

const Home = ()=> {
    return (
        <>
            <Siren />
            <Bar />
            <BlogImages />
            <TheLatest />
            <LatestArticles />
            <LatestStories />
        </>
    )
}

export default Home