import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import { useAuth } from "../hooks/useAuth";
import { BASE_URL } from "../types/Types";
import ErrorPopup from "./ErrorPopup";
import LoadingPopup from "./LoadingPopup";

const Header = () => {
    const userDataString = localStorage.getItem('user');

    if (!userDataString) {
        throw new Error('Данные пользователя не найдены.');
    }

    const userData = JSON.parse(userDataString) as {
        email: string;
        name: string;
        surname: string;
        id: string;
    };

    const { logout } = useAuth();
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);

    const [isRequestError, setRequestError] = useState(false);

    const [isLogoutMenuOpen, setLogoutMenuOpen] = useState(false);

    const [isProjectsMenuOpen, setProjectsMenuOpen] = useState(false);

    const handleCloseUtilModal = () => {
        setRequestError(false);
    };

    const handleLogout = async () => {
        try {
            setIsLoading(true);
            const userData = await axios.post(
                `${BASE_URL}/accounts/logout`,
                null,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    withCredentials: true,
                }
            );
            if (userData.status === 204) {
                setIsLoading(false);
                logout();
                navigate("/auth");
            }
        } catch {
            setIsLoading(false);
            setRequestError(true);
        }
    };

    return (
        <header className="header">
            <nav className="navbar">
                <div className="">
                    <ul className="nav-links">
                        <li 
                            key="projects" 
                            onClick={() => {
                                if (isProjectsMenuOpen) { 
                                    setProjectsMenuOpen(false);
                                } else {
                                    setProjectsMenuOpen(true);
                                }
                            }}>
                            <p>
                                Проекты<img src="../imgs/arrow.svg"></img>
                            </p>
                            {isProjectsMenuOpen && 
                                <div className="project-logout-menu">
                                    <NavLink 
                                        key="to-project-list"
                                        className="to-project-list"
                                        to="project-list">
                                        Список проектов
                                    </NavLink>
                                    <NavLink 
                                        key="to-project-create"
                                        className="to-project-create"
                                        to="project-create">
                                        Создать проект
                                    </NavLink>
                                </div>
                            }
                        </li>
                        <li key="my-tasks">
                            <p>
                                Мои задачи<img src="../imgs/arrow.svg"></img>
                            </p>
                        </li>
                        <li key="more">
                            <p>
                                Ещё<img src="../imgs/arrow.svg"></img>
                            </p>
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
                    <div className="logout-menu">
                        <button 
                            className="profile-button" 
                            onClick={() => {
                                if (isLogoutMenuOpen) { 
                                    setLogoutMenuOpen(false);
                                } else {
                                    setLogoutMenuOpen(true);
                                }
                            }}>
                            <img
                                className="nav-photo"
                                src={`${import.meta.env.BASE_URL}imgs/user.svg`}
                                alt="User1"
                            ></img>
                        </button>
                        {isLogoutMenuOpen && 
                            <div className="dropdown-logout-menu">
                                <p className="user-name">{userData.name}</p>
                                <p 
                                    className="exit-button"
                                    onClick={() => handleLogout()}>
                                    Выход
                                </p>
                            </div>
                        }
                    </div>
                </div>
            </nav>

            {isRequestError && (
                <ErrorPopup 
                    onClose={handleCloseUtilModal}
                />
            )}

            {isLoading && (
                <LoadingPopup />
            )}
        </header>
    );
};

export default Header;
