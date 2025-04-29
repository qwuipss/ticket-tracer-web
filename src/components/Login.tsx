import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';

const Login = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({
        email: '',
        password: ''
    });

    const validateForm = () => {
        let isValid = true;
        const newErrors = {
            email: '',
            password: ''
        };
    
        if (!formData.email) {
            newErrors.email = 'Поле обязательно для заполнения';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Неверный формат email';
            isValid = false;
        } else if (formData.email.length > 64) {
            newErrors.email = 'Слишком длинный адрес email';
            isValid = false;
        }
    
        if (!formData.password) {
            newErrors.password = 'Поле обязательно для заполнения';
            isValid = false;
        } else if (formData.password.length < 8) {
            newErrors.password = 'Пароль должен содержать не менее 8 символов';
            isValid = false;
        } else if (formData.password.length > 32) {
            newErrors.password = 'Пароль должен содержать не более 32 символов';
            isValid = false;
        }
    
        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (validateForm()) {
            console.log('Форма валидна, данные:', formData);
            navigate('/dashboard/board');
        }
    };
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        setErrors(prev => ({
            ...prev,
            [name]: ''
        }));
    };

    return (
        <>
            <img className="decor bg1" src="../imgs/bg1.svg"></img>
            <img className="decor bg2" src="../imgs/bg2.svg"></img>
            <img className="decor bg3" src="../imgs/bg3.svg"></img>
            <img className="decor bg4" src="../imgs/bg5.svg"></img>
            <main className="auth-page">
                <div className="auth-container">
                    <img className="auth-logo" src='../imgs/logo.svg' alt="Логотип"/>
                    <h1 className="auth-header">Вход</h1>
                    <form className="auth-form" onSubmit={handleSubmit} noValidate>
                        <div className="input-group">
                            <label htmlFor="email">Электронная почта</label>
                            <input 
                                className={`auth-input ${errors.email ? 'error' : ''}`}
                                id="email"
                                name="email"
                                placeholder="ivanivan@yandex.ru"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {errors.email && <div className="error-message">{errors.email}</div>}
                        </div>

                        <div className="input-group">
                            <label htmlFor="password">Пароль</label>
                            <input 
                                className={`auth-input ${errors.password ? 'error' : ''}`}
                                id="password"
                                name="password"
                                placeholder="Пароль"
                                type="password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                            {errors.password && <div className="error-message">{errors.password}</div>}
                        </div>

                        <button className="submit-button" type="submit">Войти</button>
                        <Link className="to-auth" to="/auth">Зарегистрироваться</Link>
                    </form>
                </div>
            </main>
        </>
    );
}
  
export default Login;
  