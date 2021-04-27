import './country.css'

function Country() {
    return (
        <div className="country-all">
            <div className="country1">
                <div className="Spain">
                    <h2>Spain</h2>
                    <img
                        src="http://media.foxbusiness.com/BrightCove/854081161001/202005/1335/854081161001_6153500821001_6153492188001-vs.jpg"
                        alt='Spain'/></div>
                <div className="France">
                    <h2>France</h2>
                    <img
                        src="https://www.cidrap.umn.edu/sites/default/files/public/styles/ss_media_popup/public/media/article/paris_skyline.jpg?itok=WK9zWCDV"
                        alt="France"/>
                </div>
                <div className="Greece">
                    <h2>Greece</h2>
                    <img
                        src="https://www.seatrade-maritime.com/sites/seatrade-maritime.com/files/styles/article_featured_retina/public/greece.jpg?itok=MOx4QDLN"
                        alt="Greece"/>
                </div>
                <br/></div>
            <div className="country2">
                <div className="Norway">
                    <h2>Norway</h2>
                    <img
                        src="https://specials-images.forbesimg.com/imageserve/5f4271b748c8d57f1cba52d9/960x0.jpg?fit=scale"
                        alt="Norway"/>
                </div>
                <div className="Egypt">
                    <h2>Egypt</h2>
                    <img src="https://q-xx.bstatic.com/xdata/images/hotel/840x460/279007538.jpg?k=b372154997bacb5b25b9609a8b6f1f883c2db007a908c2a10cd702bd928987bc&o="
                    alt ="Egypt"/>
                </div>
                <div className={"Italy"}>
                    <h2>Italy</h2>
                    <img src={"https://wantsee.world/wp-content/uploads/2018/10/Venice-Italy.-Travel.jpg"}
                    alt={"Italy"}/>
                </div>
            </div>
        </div>
    );
}

export default Country;