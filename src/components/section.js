import React from 'react'

import PropTypes from 'prop-types'

import './section.css'

const Section = (props) => {
  return (
    <section className="section-section">
      <h2 className="section-text">{props.heading}</h2>
      <div className="section-features">
        <header className="feature feature-active section-feature">
          <h3 className="section-text01">{props.heading1}</h3>
          <p className="section-text02">{props.text}</p>
        </header>
        <header className="feature section-feature1">
          <h3 className="section-text03">{props.heading2}</h3>
          <p className="section-text04">{props.text1}</p>
        </header>
        <header className="feature section-feature2">
          <h3 className="section-text05">{props.heading3}</h3>
          <p className="section-text06">{props.text2}</p>
        </header>
      </div>
      <div className="section-note">
        <div className="section-content">
          <main className="section-main">
            <h2 className="section-heading">{props.Heading}</h2>
            <p className="section-paragraph">
              <span>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae.
              </span>
              <br></br>
              <br></br>
              <span>
                Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
                illo inventore veritatis et quasi architecto beatae.
              </span>
              <br></br>
            </p>
          </main>
          <div className="section-explore-more">
            <p className="section-text12">{props.Text}</p>
          </div>
        </div>
        <div className="section-image">
          <img
            alt={props.image_alt}
            src={props.image_src}
            className="section-image1"
          />
        </div>
      </div>
    </section>
  )
}

Section.defaultProps = {
  Text: 'Explore more ->',
  heading: 'Network With Your FAMULY',
  image_alt: 'image',
  Heading: 'Accessing this Medicare benefit is easy',
  text2: 'Doloremque laudantium',
  image_src: '/SectionImages/group%201490-1200w.png',
  heading3: 'Mental Health',
  heading2: 'Chronic Care',
  text: 'Doloremque laudantium',
  heading1: 'Urgent Care',
  text1: 'Doloremque laudantium',
}

Section.propTypes = {
  Text: PropTypes.string,
  heading: PropTypes.string,
  image_alt: PropTypes.string,
  Heading: PropTypes.string,
  text2: PropTypes.string,
  image_src: PropTypes.string,
  heading3: PropTypes.string,
  heading2: PropTypes.string,
  text: PropTypes.string,
  heading1: PropTypes.string,
  text1: PropTypes.string,
}

export default Section
