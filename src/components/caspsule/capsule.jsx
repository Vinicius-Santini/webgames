import React from "react";
import styles from "../../styles/capsule/capsule.module.sass"

const Capsule = ({data}) => {
    console.log(data);
    return (
        <>
            <span className={styles.capsule}>{data.name}</span>
        </>
    );
};

export default Capsule;