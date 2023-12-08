import React from 'react'

import PropTypes from 'prop-types'

import './visit-famu.css'

const VisitFAMU = (props) => {
  return (
    <div className={`visit-famu-container ${props.rootClassName} `}>
      <div className="visit-famu-hero">
        <div className="visit-famu-container01">
          <div className="visit-famu-container02">
            <h1 className="visit-famu-text">
              Visit Florida A&amp;M University. 
            </h1>
            <div className="visit-famu-container03">
              <div className="visit-famu-container04">
                <div className="visit-famu-container05">
                  <div className="visit-famu-container06">
                    <div className="visit-famu-container07">
                      <div className="visit-famu-container08">
                        <img
                          alt={props.imagealt}
                          src={props.imagesrc}
                          loading="eager"
                          className="visit-famu-image"
                        />
                        <div className="visit-famu-container09">
                          <div className="visit-famu-container10">
                            <div className="visit-famu-container11">
                              <div className="visit-famu-container12">
                                <div className="visit-famu-container13">
                                  <div className="visit-famu-container14">
                                    <div className="visit-famu-container15">
                                      <div className="visit-famu-container16">
                                        <span className="visit-famu-text1">
                                          {props.text}
                                        </span>
                                      </div>
                                      <a
                                        href="https://www.famu.edu/"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                        className="visit-famu-link button"
                                      >
                                        Learn More
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          alt="image"
          src="/Images/internal%20flame-1000w.jpg"
          className="visit-famu-internal-flame"
        />
      </div>
    </div>
  )
}

VisitFAMU.defaultProps = {
  imagealt: 'image',
  rootClassName: '',
  text: 'Want to learn more about Florida Agricultural & Mechanical Univerity and our Students? Visit FAMU.edu',
  imagesrc:
    'https://images.unsplash.com/photo-1519849968456-c4918b53e694?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxsaW5lc3xlbnwwfHx8fDE3MDE5ODEzNzJ8MA&ixlib=rb-4.0.3&q=80&h=600',
}

VisitFAMU.propTypes = {
  imagealt: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  imagesrc: PropTypes.string,
}

export default VisitFAMU
