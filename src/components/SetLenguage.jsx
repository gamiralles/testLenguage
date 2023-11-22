import React from "react";
import { useState, useEffect } from "react";
import logo from "/LogoTG.png";
import { Link } from "react-router-dom";
import { useTranslation, Trans } from 'react-i18next';

const SetLenguage = () => {
  const { t, i18n } = useTranslation();
  const lngs = {
    en: { nativeName: 'English' },
    es: { nativeName: 'Español' }
  };

  return (
    <div className="setLenguage d-flex flex-column justify-content-center">
      <img src={logo} className="img-fluid" alt="" />
      <div className="setButtons item-center">
        <Link to={"/inicio"}>
          <div>
            {Object.keys(lngs).map((lng) => (
              <button key={lng} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
                {lngs[lng].nativeName}
              </button>
            ))}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SetLenguage;
