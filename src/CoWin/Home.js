import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";
import Step3 from "./Steps/Step3";
import StickyDiv from "./StickyDiv";
import "./styles/home.css"
const Home = () => {
    return ( 
    <div>
        <StickyDiv />
        <p>Get Vaccinated in 3 Easy Steps</p>
   
        <div className="stepContainer">
            <Step1 />
            <Step2 />
            <Step3 />
        </div>
    
    </div>
    );
}
 
export default Home;





