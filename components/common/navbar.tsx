import React, { useState, useContext } from 'react';
import styles from '../../styles/common/navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { jwtContext } from '../../pages/_app';

const Navbar = () => {
    const [responsiveClass, setResponsive] = useState("inactive");
    const jwt = useContext(jwtContext);

    function toggleBurger() {
        // console.log("Burger clicked");
        if (responsiveClass === "inactive") {
            setResponsive('is-responsive');
        } else {
            setResponsive('inactive');
        }
    }

    function setResponsiveInactive(): void {
        setResponsive('inactive');
    }

    const logoSize = "50px";

    return (
        <nav className={`${styles.navbar} ${styles[responsiveClass]}`} id="navbar">
            <Link href="/" >
                <div className={`${styles["main-link"]} ${styles["link"]}`} onClick={setResponsiveInactive}>
                    <Image src="/static/img/logo-small.png" width={logoSize} height={logoSize} alt="Dulan Does Dishes Logo" />
                    <span>
                        Dulan Does Dishes
                    </span>
                </div>
            </Link>

            {jwt && jwt.jwt ?
                <Link href="/recipes/new">
                    <div className={styles["link"]} onClick={setResponsiveInactive}>
                        New
                    </div>
                </Link>
                :
                null
            }
            <Link href="/about" >
                <div className={styles["link"]} onClick={setResponsiveInactive}>
                    About
                </div>
            </Link>

            <Link href="/recipes">
                <div className={styles["link"]} onClick={setResponsiveInactive}>
                    Recipes
                </div>
            </Link>


            <a className={styles["link"]} target="_blank" rel="noopener noreferrer" href="https://vu-dylan.github.io/" onClick={setResponsiveInactive}>
                <span>
                    &quot;Cooking&apos;s like coding!&quot;
                </span>
            </a>
            <div className={`${styles.hamburger} ${styles[responsiveClass]}`} id="hamburger" onClick={() => toggleBurger()}>
                <span className={styles.line}></span>
                <span className={styles.line}></span>
                <span className={styles.line}></span>
            </div>
        </nav>
    )

}

export default Navbar;