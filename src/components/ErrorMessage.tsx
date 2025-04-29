import { Link } from "react-router-dom";

const ErrorMessage = () => {
    return (
        <>
            <img className="decor bg1" src="./imgs/bg1.svg"></img>
            <img className="decor bg2" src="./imgs/bg2.svg"></img>
            <img className="decor bg3" src="./imgs/bg3.svg"></img>
            <img className="decor bg4" src="./imgs/bg5.svg"></img>
            <main className="error-container">
                <img className="error-logo" src='../imgs/logo.svg' alt="Логотип"/>
                <h1 className="error-header">404 Not Found</h1>
                <Link to='/auth'>К панели регистрации</Link>
            </main>
        </>
    );
}

export default ErrorMessage;