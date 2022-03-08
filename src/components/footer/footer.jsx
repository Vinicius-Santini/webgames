import React from "react";
import styles from '../../styles/footer/footer.module.sass'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase, faCode, faAddressCard } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faReact, faSass, faJsSquare, faHtml5 } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.footerContainer}>
                        <div className={styles.footerSections}>
                            <div className={styles.footerContent}>
                                <div className={styles.footerContentTitleSection}>
                                    <h2 className={styles.footerContentTitle}>API</h2>
                                </div>
                                <div className={styles.footerContentItem}>
                                    <FontAwesomeIcon className={styles.footerIcons} icon={faDatabase} />
                                    <div>RAWG Video Games Database API</div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.footerSections}>
                            <div className={styles.footerContent}>
                                <div className={styles.footerContentTitleSection}>
                                    <FontAwesomeIcon className={styles.footerIcons} icon={faCode} size="lg" />
                                    <h2 className={styles.footerContentTitle}>Vinícius Santini</h2>
                                </div>
                                <div className={styles.footerContentItem}>
                                    <FontAwesomeIcon className={styles.footerIcons} icon={faAddressCard} size="lg" />
                                    <div>About me</div>
                                </div>
                                <div className={styles.footerContentItem}>
                                    <FontAwesomeIcon className={styles.footerIcons} icon={faLinkedin} size="lg" />
                                    <div>LinkedIn</div>
                                </div>
                                <div className={styles.footerContentItem}>
                                    <FontAwesomeIcon className={styles.footerIcons} icon={faGithub} size="lg" />
                                    <div>Github</div>
                                </div>
                            </div> 
                        </div>
                        <div className={styles.footerSections}>
                            <div className={styles.footerContent}>
                                <div className={styles.footerContentTitleSection}>
                                    <h2 className={styles.footerContentTitle}>Created using</h2>
                                </div>
                                <div className={styles.footerContentItem}>
                                    <FontAwesomeIcon className={styles.footerIcons} icon={faReact} size="lg" />
                                    <div>ReactJs</div>
                                </div>
                                <div className={styles.footerContentItem}>
                                    <FontAwesomeIcon className={styles.footerIcons} icon={faJsSquare} size="lg"/>
                                    <div>JavaScript</div>
                                </div>
                                <div className={styles.footerContentItem}>
                                    <FontAwesomeIcon className={styles.footerIcons} icon={faSass} size="lg"/>
                                    <div>Sass</div>
                                </div>
                                <div className={styles.footerContentItem}>
                                    <FontAwesomeIcon className={styles.footerIcons} icon={faHtml5} size="lg"/>
                                    <div>Html5</div>
                                </div>
                            </div>
                        </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;