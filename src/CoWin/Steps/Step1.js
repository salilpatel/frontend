import "./step.css";
import { useNavigate } from 'react-router-dom';
const Step1 = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/Signin")
    }

    return (
        <div className="outerBox" onClick={()=>handleClick()}>
            <div>Step 1</div>
            <div><img id="imge" alt="calender" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgaimDPJHca00rl__5LshBU6NtZIeuJ6bqZv2Q-XpCeksBytjbhEJoMQGlTUQQDCdTDCM&usqp=CAU"/></div>
            <div>Book an Appointment on Co-WIN or Walk into any Vaccination Center</div>
            <div>How to Book Your Appoinment on Co-WIN?</div>
        </div>
    );
}
 
export default Step1;