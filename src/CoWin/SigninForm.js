import "./styles/signinForm.css"
const SigninForm = () => {
    return (
        <>
        <h2>Register for Vaccination</h2>
        <form>
            <div>
            <label for="name">Name</label>
            <input type="text" id="name" placeholder="Enter your name" required />
            </div>
            
            <div>
            <label for="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" />
            </div>
            
            <div>
            <label for="mob">Contact number</label>
            <input type="number" id="mob" placeholder="Enter your contact number" required />
            </div>
            
            <div>
            <label for="date">Appoinment Date</label>
            <input type="date" id="date" required />
            </div>
            
            <div>
            <label for="time">Appoinment Time</label>
            <select id="time" required>
                    <option></option>
                    <option>09:00 am to 10:30 am</option>
                    <option>10:30 am to 12:00 pm</option>
                    <option>12:00 pm to 01:30 pm</option>
                    <option>03:00 pm to 04:30 pm</option>
                    <option>04:30 pm to 06:00 pm</option>
            </select>
            </div>
            
            <div>
            <label for="gender">Gender : </label>
                <input type="radio" id="gender" required />Male
                <input type="radio" id="gender" />Female
                <input type="radio" id="gender" />Other
            </div>
            
            <div>
            <label for="country">Country</label>
            <select id="country" required>
                        <option></option>
                        <option>India</option>
                        <option>USA</option>
                        <option>UK</option>
                        <option>Japan</option>
                        <option>Russia</option>
                        <option>Bhutan</option>
                    </select>
            </div>
            
            <div>
            <label for="address">Address</label>
            <textarea id="address" placeholder="Enter your address" required></textarea>
            </div>
             
            <button id="btn">Add Appoinment</button>   
        </form>
        </>
    );
}
 
export default SigninForm;