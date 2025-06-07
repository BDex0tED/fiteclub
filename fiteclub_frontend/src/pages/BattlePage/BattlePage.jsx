import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from '../../components/Style.module.css';
import down from '../../assets/images/down.png';

const BattlePage = () => {
  const [duel, setDuel] = useState(null);
  const [message, setMessage] = useState("");

  const token = localStorage.getItem('access_token');

  const fetchDuel = async () => {
    try {
      const res = await axios.get(`http://localhost:8080/fite/duel`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setDuel(res.data);
    } catch (err) {
      setMessage("Error loading duel data");
    }
  };

  const vote = async (cardId) => {
    try {
      await axios.post(`http://localhost:8080/card/${cardId}/like`, null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      fetchDuel();
    } catch (err) {
      setMessage('Voting error: ' + (err.response?.status || err.message));
    }
  };

  useEffect(() => {
    fetchDuel();
  }, []);

  if (!token) {
    return (
        <div>
          <div className={styles.HeaderBack}>
            <Header />
          </div>
          <div className={styles.VerticalLine}></div>
          <div className={styles.gradientBack}>
            <div className={styles.center}>
              <h1>To participate in the battle, we ask you to log in to your account or create a new account.</h1>
              <div className={styles.space}></div>
              <img src={down} alt="" />
              <div className={styles.space}></div>
              <a href="/login"><button className={styles.btnStyle}>Log in</button></a>
            </div>
          </div>
          <div className={styles.VerticalLine}></div>
          <div className={styles.footerBack}>
            <Footer />
          </div>
        </div>
    );
  }

  if (!duel) {
    return null;
  }

  return (
      <div>
        <div className={styles.HeaderBack}>
          <Header />
        </div>
        <div className={styles.VerticalLine}></div>
        <div className={styles.gradientBack}>
          <h1 className={styles.center}>Battle of {duel.category}</h1>
          {/*<div className={styles.BigSpace}></div>*/}
          <div className={styles.dflexAround}>
            <div>
              <div className={styles.UserCard}>
                <p className={styles.category_p}>{duel.card1Category}</p>
                <p className={styles.inputStyle}><span>User:</span> {duel.card1Username}</p>
                <button className={styles.btnStylePassword} onClick={() => vote(duel.card1Id)}>Vote</button>
              </div>
            </div>
            <div>
              <div className={styles.UserCard}>
                <p className={styles.category_p}>{duel.card2Category}</p>
                <p className={styles.inputStyle}><span>User:</span> {duel.card2Username}</p>
                <button className={styles.btnStylePassword} onClick={() => vote(duel.card2Id)}>Vote</button>
              </div>
            </div>
          </div>
          <div className={styles.BigSpace}></div>
          {message && <div className={styles.error}>{message}</div>}
        </div>
        <div className={styles.VerticalLine}></div>
        <div className={styles.footerBack}>
          <Footer />
        </div>
      </div>
  );
};

export default BattlePage;
