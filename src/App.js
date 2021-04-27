
import './App.css';
import Country from "./components/country";

function App() {
  return (
      <div>
   <Country description = {'Spain'}
            image={'http://media.foxbusiness.com/BrightCove/854081161001/202005/1335/854081161001_6153500821001_6153492188001-vs.jpg'}/>
   <Country description={'France'}
   image={"https://www.cidrap.umn.edu/sites/default/files/public/styles/ss_media_popup/public/media/article/paris_skyline.jpg?itok=WK9zWCDV"}/>
   <Country description={"Norway"}
   image={"https://specials-images.forbesimg.com/imageserve/5f4271b748c8d57f1cba52d9/960x0.jpg?fit=scale"}/>
   <Country description={"Greece"}
   image = {"https://www.seatrade-maritime.com/sites/seatrade-maritime.com/files/styles/article_featured_retina/public/greece.jpg?itok=MOx4QDLN"}/>
   <Country description={"Egypt"}
   image={"https://q-xx.bstatic.com/xdata/images/hotel/840x460/279007538.jpg?k=b372154997bacb5b25b9609a8b6f1f883c2db007a908c2a10cd702bd928987bc&o="}/>
   <Country description={"Italy"}
   image={"https://wantsee.world/wp-content/uploads/2018/10/Venice-Italy.-Travel.jpg"}/></div>
  );
}

export default App;
