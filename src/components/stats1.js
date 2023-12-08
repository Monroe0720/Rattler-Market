import React from 'react'

import PropTypes from 'prop-types'

import './stats1.css'

const Stats1 = (props) => {
  return (
    <div className="stats1-stats">
      <div className="stats1-container">
        <h1 className="stats1-text">{props.heading}</h1>
        <div className="stats1-stat">
          <span className="stats1-text1">{props.text2}</span>
        </div>
      </div>
      <div className="stats1-stat1">
        <h1 className="stats1-text2">{props.heading1}</h1>
        <span className="stats1-text3">{props.text}</span>
      </div>
      <div className="stats1-stat2">
        <h1 className="stats1-text4">
          <span>24/7</span>
        </h1>
        <span className="stats1-text6">{props.text1}</span>
      </div>
    </div>
  )
}

Stats1.defaultProps = {
  text2: 'Public HBCU',
  heading: '#1',
  heading1: '50+',
  text1: 'Services',
  text: 'Student Buisnesses',
}

Stats1.propTypes = {
  text2: PropTypes.string,
  heading: PropTypes.string,
  heading1: PropTypes.string,
  text1: PropTypes.string,
  text: PropTypes.string,
}

export default Stats1
