import topImage from "./../images/egis-logo.png";

const SignIn: React.FC = () => {
    return (
        <div className="wrapper">
            <div className="container main">
                <div className="row">
                    <div className="col-md-6 side-image">
                        <img src={ topImage } alt="Error loading" />
                    </div>
			    <div className="col-md-6 right">
                    <div className="input-box">
                        <header>Create account</header>
                        <div className="input-field">
                            <input type="text" className="input" required />
                            <label>Username</label>
                        </div>
                        <div className="input-field">
                            <input type="password" className="input" required />
                            <label>Password</label>
                        </div>
                        <div className="input-field">
                            <input type="submit" className="submit" value="Sign Up" />
                        </div>
                        <div className="signin">
                            <span>Already have an account? <a href="#">Log In here</a></span>
                        </div>

                    </div>
			    </div>
                </div>
            </div>
            
        </div>
    )
}

export default SignIn