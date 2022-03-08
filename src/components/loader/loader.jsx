import React from "react";
import styles from "../../styles/loader/loader.module.sass"

const Loader = () => {
    return(
    <>
        <div className={styles.ldsRing}><div></div><div></div><div></div><div></div></div>
    </>
    )
};

export default Loader;