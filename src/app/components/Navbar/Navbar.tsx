'use client';
import React, { useState, useRef, useEffect } from 'react';
import styles from './Navbar.module.scss';
// import Image from 'next/image';
import Link from 'next/link';


const Navbar = () => {
  const menuRef = useRef();


  return (
    <nav className={styles.navGlobal}>
        <div className={styles.contentContainer}>
            <Link href='https://www.the13thgeek.com' target='_blank'>
              <img className={styles.headerLogo} src={"/img/global/header-logo-default.png"} alt="the13thgeek logo" />
                {/* <Image
                  src={"/img/global/header-logo-default.png"}
                  alt="the13thgeek logo"
                  sizes='100vw'
                  width={260}
                  height={100}
                  style={{
                    width: '100%',
                    height: 'auto'
                  }}
                /> */}

            </Link>
            <ul ref={menuRef} className={styles.navMenu}>
                <li className={styles.navMenuItem}>
                <Link className={styles.navMenuLink} href="/">Home</Link>
                </li>
                <li className={styles.navMenuItem}>
                  <Link className={styles.navMenuLink} href="/about">About</Link>
                </li>
                <li className={styles.navMenuItem}>
                  <Link className={styles.navMenuLink} href="/twitch">Twitch</Link>
                </li>
            </ul>
            <div className={styles.navConnect}>
              <Link href='#'>
                  Connect
              </Link>
            </div>
        </div>
    </nav>
  )
}

export default Navbar