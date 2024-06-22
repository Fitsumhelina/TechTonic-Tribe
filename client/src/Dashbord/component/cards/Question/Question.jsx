import React, { useState } from 'react';
import styles from './Question.module.css';

const QuestionCard = ({ frontTitle, frontText, backText }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    const handleReturn = () => {
        setIsFlipped(false);
    };

    return (
        <div className={`${styles.questionContainer} ${isFlipped ? styles.flipped : ''}`}>
            <div className={styles.front}>
                <div className={styles.text}>
                    <h2 className={styles.title}>{frontTitle}</h2>
                    <p className={styles.subtitle}>{frontText}</p>
                </div>
                <button className={styles.flipButton} onClick={handleFlip}>
                    ANSWER
                </button>
            </div>
            <div className={styles.back}>
                <div className={styles.text}>
                    <p className={styles.subtitle}>{backText}</p>
                </div>
                <button className={styles.returnButton} onClick={handleReturn}>
                    QUESTION
                </button>
            </div>
        </div>
    );
}

export default QuestionCard;
