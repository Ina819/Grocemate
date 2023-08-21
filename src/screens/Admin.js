import React from "react";
import styles from "./../styles/Admin.module.css";

function Admin() {
  return (
    <div className={styles.adminContainer}>
      <div className={styles.profileContainer}>left</div>
      <div className={styles.mainContainer}>
        <div className={styles.actionBarContainer}>
          <div>search</div>
          <div>add a post</div>
        </div>
        <div className={styles.productTable}>
          <div className={styles.table}>z</div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
