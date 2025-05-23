import { IErrorPopupProps } from "../types/Types";

const ErrorPopup = ({ onClose }: IErrorPopupProps) => {
    
    return (
        <div className="util-popup-substrate">
            <div className="util-popup">
                <img
                    className="close"
                    src="/imgs/cross.svg"
                    onClick={onClose}
                ></img>
                <h1 className="util-message">Ошибка запроса. Попробуйте позже.</h1>
            </div>
        </div>
    );
};

export default ErrorPopup;
