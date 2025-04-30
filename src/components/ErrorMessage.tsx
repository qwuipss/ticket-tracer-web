import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const ErrorMessage = () => {
    const navigate = useNavigate();

    const { logout } = useAuth();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <>
            <img className="decor bg1" src="../imgs/bg1.svg"></img>
            <img className="decor bg2" src="../imgs/bg2.svg"></img>
            <img className="decor bg3" src="../imgs/bg3.svg"></img>
            <img className="decor bg4" src="../imgs/bg5.svg"></img>
            <main className="error-container">
                <img className="error-logo" src='../imgs/logo.svg' alt="Логотип"/>
                <h1 className="error-header">404 Not Found</h1>
                <Link to='/auth' onClick={handleLogout}>К панели регистрации</Link>
            </main>
        </>
    );
}

export default ErrorMessage;