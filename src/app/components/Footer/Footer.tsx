import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footerGlobal}>
        <div className={styles.contentContainer}>
            <img className={styles.footerLogo} src={"/img/global/header-logo-default.png"} alt="the13thgeek logo" />
            <p>Copyright© 2011 &mdash; {(new Date().getFullYear())}<br />
            <b>Aldreich Aguilar // @the13thgeek</b></p>
            <p><i>v{process.env.NEXT_PUBLIC_SITE_VERSION}</i></p>
        </div>
    </footer>
  )
}

export default Footer