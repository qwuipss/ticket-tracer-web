import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import { useAuth } from "../hooks/useAuth";

const Header = () => {
    const token = localStorage.getItem('token');
    const { logout } = useAuth();
    const navigate = useNavigate();

    const [loading, setIsLoading] = useState(false);

    const [requestError, setrequestError] = useState(false);

    const handleLogout = async () => {
        try {
            setIsLoading(true);
            const userData = await axios.post(
                '/api/accounts/logout',
                null,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    withCredentials: true,
                }
            );
            if (userData.status === 204) {
                logout();
                navigate("/auth");
            }
        } catch (error) {
            console.log(error)
            setrequestError(true);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <header className="header">
            <nav className="navbar">
                <div className="">
                    <ul className="nav-links">
                        <li key="projects">
                            <a href="#">
                                Проекты<img src="../imgs/arrow.svg"></img>
                            </a>
                        </li>
                        <li key="my-tasks">
                            <a href="#">
                                Мои задачи<img src="../imgs/arrow.svg"></img>
                            </a>
                        </li>
                        <li key="more">
                            <a href="#">
                                Ещё<img src="../imgs/arrow.svg"></img>
                            </a>
                        </li>
                        <li key="create">
                            <button className="create-btn">Создать</button>
                        </li>
                    </ul>
                </div>
                <div className="nav-side">
                    <input
                        className="search-bar"
                        type="text"
                        placeholder="Поиск"
                    ></input>
                    <div className="nav-buttons">
                        <img src="../imgs/help.svg"></img>
                        <img src="../imgs/settings.svg"></img>
                    </div>
                    <button className="profile-button" onClick={() => handleLogout()}>
                        <img
                            className="nav-photo"
                            src="../imgs/user.svg"
                            alt="User1"
                        ></img>
                    </button>
                        
                </div>
            </nav>
        </header>
    );
};

export default Header;
