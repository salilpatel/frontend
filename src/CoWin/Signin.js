import StickyDiv from "./StickyDiv";
import SigninForm from "./SigninForm";
import "./styles/signin.css";
const Signin = () => {
    return (
        <>
            <StickyDiv />
            <div className="outerContainer">
            <div className="imgContainer">
                <img id="image" src="https://img.freepik.com/free-vector/family-grandparents-parents-kids-cartoons_18591-52186.jpg?w=826&t=st=1673602033~exp=1673602633~hmac=ebcdd05885152ccf4de1323bbed82633f4aefbbd98f4eb8f84e0a661e1662e55" alt="family3g"/>
            </div>
            <div className="formContainer">
                <SigninForm />
            </div>
            </div>
        </>
    );
}
 
export default Signin;