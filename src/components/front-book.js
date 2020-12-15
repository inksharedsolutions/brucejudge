import React from 'react'
import FrontBook from '../static/book/book-min.png'
import { Link } from 'gatsby'

const MidBook = (props)=>{
    return(
        <>    
            <section className="upper-main">
                <div className="container-gt separator-line">

                    <div className="grid-two-columns" id="wrapper-two-books">

                        

                        <div className="content-wraps">

                            <span className="italic-tag">
                                Read, listen, and learn in various formats
                            </span>

                            <h1>
                                In Fellowship with <span>GOD</span>
                            </h1>
                            <span></span>
                            <p >
                            This book traces the spiritual experiences of Bruce’s business career that culminates in a call for all Christians, Muslims and Jews (and all others who seek truth and God in spirit) to reconcile. Jesus taught that the truth of God is simply too marvelous for human understanding so we must accept God in faith and in spirit. 
                            </p>

                            <Link to="/about-the-book" className="btn-read-more" >Read More</Link>
                        </div>

                        <div className="book-wraps" >
                            <img src={FrontBook} alt="book"/>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default MidBook