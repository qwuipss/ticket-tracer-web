import { IErrorPopupProps } from "../types/Types";

const ErrorPopup = ({ onClose }: IErrorPopupProps) => {
    
    return (
        <div>
            <div className="util-popup-substrate"></div>
            <div className="util-popup">
                <h1 className="util-message">Ошибка запроса<br></br> Попробуйте позже</h1>
                <img
                    className="close"
                    src="./imgs/cross.svg"
                    onClick={onClose}
                ></img>
            </div>
        </div>
    );
};

export default ErrorPopup;
