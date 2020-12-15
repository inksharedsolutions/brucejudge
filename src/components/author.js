import React from 'react'
import {Link} from 'gatsby'
import AuthorImg from '../static/author/dummy-profile.jpg'
import AuthorLJA from '../static/author/main_author.jpg'

const LowerMain = ()=>{
    return(
        <>
            <section className="author-section">
                <div className="section-title">
                    The Authors
                </div>
                <div className="grid-two-columns" id="author-container">
                    <div className="wrapper-auth-content">
                        <div className="card card1">
                            <div className="auth-img-container">
                                <img src={AuthorLJA} alt="Lawrence J. Altman profile"/>
                            </div>
                            <div className="card-content">
                                <p className="author-content">
                                    Bruce Raymond Judge was born in Timaru, New Zealand on Good Friday April 3, 1942. He was brought up in Christchurch and graduated B Com from Canterbury University before pursuing a career in Insurance, Business and Finance.
                                    
                                    <Link to="/about-the-author"
                                    className="link-read">
                                        Read more
                                    </Link>
                                </p>
                                
                                <p className="margin-off auth-name">
                                    Bruce Judge
                                </p>

                                <span className="span-tagline italic-tag">
                                    Author & Writer
                                </span>

                            </div>
                        </div>
                    </div>
                </div>
          
            </section>
        </>
    )
}

export default LowerMain 
