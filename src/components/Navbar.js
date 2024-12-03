import React from 'react';
import classes from './Navbar.module.css'
import logo from '../images/logo.png'
import { FaArrowDown, FaUser, FaUserPlus } from 'react-icons/fa6'
import { useTranslation } from 'react-i18next';
import { getLanguaguesDetail } from '../i18n';

export default function Navbar() {
    const { t, i18n } = useTranslation()
    const languageList = getLanguaguesDetail()
    const languageKeys = Object.keys(languageList)
    const languageCurrent = languageList[i18n.language]
    const handleChangeLanguage = () => {
        
    }
    return (
        <div className={classes.wrapper}>
            <img src={logo} alt='logo' />
            <div className={`${classes.buttonWrapper}`}>
                <div className={`${classes.loginButton} ${classes.headerButton}`}>
                    <FaUser />
                    <p>{t("login")}</p>
                </div>
                <div className={`${classes.registerButton} ${classes.headerButton}`}>
                    <FaUserPlus />
                    <p>{t("register")}</p>
                </div>
                <div className={`${classes.listLanguages}`}>
                    <div className={`${classes.currentLanguage}`}>
                        <img className={`${classes.languageItemFlag}`} src={languageCurrent.flag} alt='flag' />
                        <p>{languageCurrent.title}</p>
                        <FaArrowDown className={`${classes.currentLanguageIcon}`} />
                    </div>
                    <div className={`${classes.listLanguagesWrapper}`}>
                        {languageKeys.map(key => {
                            const languageDetail = languageList[key]
                            if (key === i18n.language) return ""
                            return (
                                <div>
                                    <div className={`${classes.languageItem}`}>
                                        <img className={`${classes.languageItemFlag}`} src={languageDetail.flag} alt='flag' />
                                        <p>{languageDetail.title}</p>
                                    </div>
                                    <div className={`${classes.languageItemLine}`}></div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}