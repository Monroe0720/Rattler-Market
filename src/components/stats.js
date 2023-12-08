import React from 'react'

import PropTypes from 'prop-types'

import './stats.css'

const Stats = (props) => {
  return (
    <div className="stats-stats">
      <div className="stats-stat">
        <h1 className="stats-text">#1</h1>
        <span className="stats-text1">{props.text}</span>
      </div>
      <div className="stats-stat1">
        <h1 className="stats-text2">50+</h1>
        <span className="stats-text3">{props.text2}</span>
      </div>
      <div className="stats-stat2">
        <h1 className="stats-text4">
          <span>24/7</span>
        </h1>
        <span className="stats-text6">{props.text6}</span>
      </div>
    </div>
  )
}

Stats.defaultProps = {
  image_alt1: 'image',
  image_src1:
    'https://images.unsplash.com/photo-1514621166532-aa7eb1a3a2f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEyOHx8Z3JlZW58ZW58MHx8fHwxNzAyMDQ4MDk5fDA&ixlib=rb-4.0.3&q=80&w=200',
  text3: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
  text: 'Public HBCU',
  text4: '',
  text1: 'Student Businesses',
  text2: 'Student Buisnesses',
  image_alt: 'image',
  text7: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
  text5: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  text6: 'Services',
}

Stats.propTypes = {
  image_alt1: PropTypes.string,
  image_src1: PropTypes.string,
  text3: PropTypes.string,
  text: PropTypes.string,
  text4: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  image_alt: PropTypes.string,
  text7: PropTypes.string,
  text5: PropTypes.string,
  image_src: PropTypes.string,
  text6: PropTypes.string,
}

export default Stats
