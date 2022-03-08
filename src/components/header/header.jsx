import React from "react";
import styles from '../../styles/header/header.module.sass'

const Header = () => {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.headerItems}>
                    <div>
                        <a href='/'>
                            webGames
                        </a>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;