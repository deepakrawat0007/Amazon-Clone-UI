import StateDropdown from "../state"
import "./register.css"

const Registration = ()=>{
    return (
        <>
       
            <div className="imageCont utils"><img src="https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/amazon-512.png" alt="icon"/></div>
            <div className="form-container">
        <form>
            <p>Create Account</p>
            <label for="name">Your Name</label>
        <input id="name"/>
        <label for="number">Mobile Number</label>
        <input id="number"/>
        <label for="email">Email</label>
        <input id="email"/>
        <div className="adres">
        <label for="address">Address</label>
        <input id="address"/>
        
        <StateDropdown/>
        <label for="district">District</label>
        <input id="district"/>
        
        </div>
        <label for="password">Password</label>
        <input id="password"/>
        <p>By enrolling your mobile phone number, you consent to receive automated security notifications via text message from Amazon. Message and data rates may apply</p>
<button>Continue</button>
        </form>
 
        </div>
        
        </>
    )
}

export default Registration