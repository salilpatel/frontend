import { useState } from "react";
import "./styles/StickyDiv.css";
const StickyDiv = () => {
    const [isVisible, setIsVisible] = useState(false);
    return (
        <div className="container">
        <div className="stickyDiv" onClick={()=>setIsVisible(!isVisible)}>Support for COVID-19</div>
        <div className="dropDmenu" style={{visibility: isVisible ? 'visible' : 'hidden'}}>
            <p>
            Health Ministry
            <br />
            +91-11-123456 or 1342
            </p>
            <hr />
            <p>
            Child
            <br />
            1442
            </p>
            <hr />
            <p>
            Mental Health
            <br />
            0985674328
            </p>
            <hr />
            <p>
            Senior Citizens
            <br />
            16321
            </p>
            <hr />
            <p>
            NCW
            <br />
            07975683284
            </p>
        </div>
        </div>
    );
}
 
export default StickyDiv;