//todo profile_settings.tsx

import React, { useState, useEffect } from "react";
import "./profile_settings.css";
import CoinSvg from "./coin.svg";
import AddSvg from "./add.svg";
import ReplaceSvg from "./Replace.svg";
import DeliteSvg from "./delite.svg";

function ProfileSettings() {
    const [isProfilePhoto, setProfilePhoto] = useState<string | null>("");
    const [isProfileLogin, setProfileLogin] = useState<string | null>("");
    const [isProfileMail, setProfileMail] = useState<string | null>("");
    const [isProfilePassword, setProfilePassword] = useState<string | null>("");

    // Получаем данные профиля из localStorage
    useEffect(() => {
        const profileData = JSON.parse(localStorage.getItem("currentUser")!);
        if (profileData) {
            setProfilePhoto(profileData.avatar);
            setProfileLogin(profileData.login);
            setProfileMail(profileData.mail);
            setProfilePassword(profileData.password);
        }
    }, []);

    // отображение суммы по 3
    const number = 12456;
    const formattedNumber = number.toLocaleString();

    return (
        <div className="profile-settings">
            <div className="profile-settings__foto-status">
                <div className="profile-settings__foto">
                    {isProfilePhoto ? (
                        <img src={isProfilePhoto} alt="Profile Foto" />
                    ) : (
                        <span>фото</span>
                    )}
                    <div className="profile-settings__foto_button">
                        <button>
                            <img src={AddSvg} alt="" />
                        </button>
                        <button>
                            <img src={ReplaceSvg} alt="" />
                        </button>
                        <button>
                            <img src={DeliteSvg} alt="" />
                        </button>
                    </div>
                </div>
                <div className="profile-settings__status">
                    <span></span>
                    <span></span>
                    <span></span>

                    <div className="profile-settings__check">
                        <img src={CoinSvg} alt="" />
                        <p>{formattedNumber}</p>
                    </div>
                </div>
            </div>

            <div className="profile-settings__login">
                <p>{isProfileLogin}</p>
                <button>изменить</button>
            </div>
            <div className="profile-settings__mail">
                <p>{isProfileMail}</p>
                <button>изменить</button>{" "}
            </div>
            <div className="profile-settings__password">
                <p>{isProfilePassword}</p>
                <button>изменить</button>
            </div>
        </div>
    );
}

export default ProfileSettings;
