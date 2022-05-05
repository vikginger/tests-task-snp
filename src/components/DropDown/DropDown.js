import React, { useState } from "react";

import arrow from '../../assets/downarrow.svg';
import styles from "./DropDown.module.scss";

const DropDown = () => {

    const options = ["Один из списка", "Несколько из списка", "Численный ответ"];

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const toggling = () => setIsOpen(!isOpen);

    const onOptionClicked = value => () => {
        setIsOpen(false);
        setSelectedOption(value);
        console.log(value);
    };

    return (
        <div className={styles.dropdownWrapper}>
            <h5>Выберите тип вопроса</h5>
            <div className={styles.dropdown}>
                <div 
                    className={styles.dropdownHeader} 
                    onClick={toggling}
                >
                    <div className={styles.dropdownSelected}> {selectedOption || "Один из списка"}</div>
                    <img className={styles.dropdownHeaderArrow} src={arrow} alt="arrow"/>
                </div>
                {isOpen && (
                    <div className={styles.dropdownOptions}>
                        <ul>
                            {options.map(option => (
                                <li 
                                    className={styles.dropdownOption}
                                    onClick={onOptionClicked(option)} 
                                    key={Math.random()
                                }>
                                    {option}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}

export default DropDown;
