
import "./styles/footer.css";
const Footer = () => {
    const handleScroll = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;     
    }

    return (
        <div className="footer">
            <div className="topFooter">
                <div className="leftContainer">
                    <table>
                        <tr>
                            <th>VACCINATION SERVICES</th>
                            <th>PLATFORMS</th>
                            <th>RESOURCES</th>
                        </tr>
                        <tr>
                            <td>Register Members</td>
                            <td>Co-WIN International</td>
                            <td>How To Get Vaccinated</td>
                        </tr>
                        <tr>
                            <td>Search Vaccination Centers</td>
                            <td>Vaccinator</td>
                            <td>Dos and Don'ts</td>
                        </tr>
                        <tr>
                            <td>Book Vaccination Slots</td>
                            <td>Department Login</td>
                            <td>Overview</td>
                        </tr>
                        <tr>
                            <td>Manage Appointment</td>
                            <td>Verify Certificates</td>
                            <td>API Guidelines</td>
                        </tr>
                        <tr>
                            <td>Download Certificate</td>
                            <td>Vaccination Statistics</td>
                            <td>Open API's</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Grievance Guidelines</td>
                        </tr>
                    </table>
                </div>
                <div className="rightContainer">
                <div className="rightTop">
                    <table>
                        <tr>
                            <th>SUPPORT</th>
                            <th>CONTACT US</th>
                        </tr>
                        <tr>
                            <td>Frequently Asked Questions</td>
                            <td>Helpline: +91-11-12345678 (Toll Free - 1234 )</td>
                        </tr>
                        <tr>
                            <td>Certificate Corrections</td>
                            <td>Technical Helpline: 0120-1234567</td>
                        </tr>
                    </table>
                </div>
                <hr />
                <div className="rightBottom">
                    <table>
                        <tr>
                            <th>CHILD</th>
                            <th>MENTAL HEALTH</th>
                            <th>SENIOR CITIZENS</th>
                            <th>NCW</th>
                        </tr>
                        <tr>
                            <td>1234</td>
                            <td>0987654321</td>
                            <td>54321</td>
                            <td>1234567890</td>
                        </tr>
                    </table>
                </div>
                </div>   
            </div>
            <div className="bottomFooter">
                    <div>This is not @ real platform</div>
                    <div>
                        Terms of Servive | Privacy Policy  
                        <button className="backTotop" onClick={()=>handleScroll()}>^</button>
                    </div>
            </div>
        </div>
    );
}
 
export default Footer;