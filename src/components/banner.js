import React from 'react'

import PropTypes from 'prop-types'

import './banner.css'

const Banner = (props) => {
  return (
    <div className="banner-banner">
      <h1 className="banner-text">
        Recycle the Black Dollar in Support of Black Businesses.
      </h1>
      <div className="banner-container"></div>
      <button className="banner-button button">{props.button}</button>
      <h1 className="banner-text1">{props.heading1}</h1>
      <span className="banner-text2">
        <span>
          The &apos;Rattler Market&apos; mission is to assist students with
          advertising, and marketing student-owned businesses.
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <br></br>
        <span>
          The Market is here to establish a network of Florida A&amp;M
          University businesses. Find a Rattler to network with through our
          Services Page.
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <br></br>
        <span>
          To learn additional information about our sole purpose visit out About
          Page.
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
      </span>
    </div>
  )
}

Banner.defaultProps = {
  button: 'About Rattler Market',
  heading1: 'Network with a Rattler.',
  text: "The 'Rattler Market' mission is to assist students with advertising, and marketing student-owned businesses. The Market is here to establish a network of Florida A&M University businesses. Find a Rattler to Connect with. To learn additional information about our sole purpose visit out About Page. ",
  heading: 'Recycle the Black Dollar in Support of Black Businesses.',
  text1:
    'Want to learn more about Florida Agricultural & Mechanical Univerity and our Students? Visit FAMU.edu',
}

Banner.propTypes = {
  button: PropTypes.string,
  heading1: PropTypes.string,
  text: PropTypes.string,
  heading: PropTypes.string,
  text1: PropTypes.string,
}

export default Banner
