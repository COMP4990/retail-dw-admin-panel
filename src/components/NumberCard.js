import React from 'react'
import PropTypes from 'prop-types'
import { Card } from 'antd'
import CountUp from 'react-countup'
import iconMap from '../utils/iconMap'
import styles from './numberCard.less'


function NumberCard({ icon, color, title, value, isNumber, countUp }) {
    let content;
    if (isNumber) {
        content = <CountUp
                        start={0}
                        end={value}
                        duration={2.75}
                        useEasing
                        useGrouping
                        separator=","
                        {...(countUp || {})}
                    />
    } else {
        content = value;
    }
    return (
        <Card
        className={styles.numberCard}
        bordered={false}
        bodyStyle={{ padding: 10 }}
        style={{borderRadius: "15px", boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.6)"}}
        >
        <span className={styles.iconWarp} style={{ color }}>
            {iconMap[icon]}
        </span>
        <div className={styles.content}>
            <p className={styles.title}>{title || 'No Title'}</p>
            <p className={styles.number}>
                {content}
            </p>
        </div>
        </Card>
    )
}

NumberCard.propTypes = {
  icon: PropTypes.string,
  color: PropTypes.string,
  title: PropTypes.string,
  number: PropTypes.number,
  countUp: PropTypes.object,
}

export default NumberCard;