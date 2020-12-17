import React from 'react';
import { Helmet } from 'react-helmet';

import Layout from '../components/layout';
import Nav from '../components/nav';
import Banner from '../components/non-front-banner';

import AuthorImg from '../static/author/dummy-profile.jpg';
import AuthorLJA from '../static/author/main_author.jpg';

const Author = (props) => (
	<Layout>
		<Helmet title="Author | Bruce Judge" />
		<Nav pathExt={props.path} />
		<Banner spanFirst={`About the`} contextHeading={`Author`} />
		<div className="container">
			<section className="body-author-contents columns">
				{/* <div className="heading-quote column">
              <div className="author-image-container">
                  <img src={AuthorImg} alt="author-profile"/>
              </div>

              <div className="heading-quote">
                  <h4>
                    asdfsadfsdf
                  </h4>
                  <span className="ata-span-fx">
                  </span>
              </div>

          </div> */}

				<article className="article-section column" id="author">
					<div className="author-image-container">
						<img src={AuthorLJA} alt="Lawrence J. Altman profile" />
					</div>
					<p>
						Bruce Raymond Judge was born in Timaru, New Zealand on Good Friday April 3, 1942.
					</p>
					<p>
					He was brought up in Christchurch and graduated B Com from Canterbury University before pursuing a career in Insurance, Business and Finance. He was an executive Director of  many New Zealand listed companies including Brierley Investments Ltd before moving to Brisbane, Australia where he was the founding Executive Chairman of Ariadne Australia Ltd.  Bruce was awarded Australian Business magazine Businessman of the year in 1986 following Ariadne's successful takeover and reconstruction of Repco Ltd.
					</p>

					<p>
						<span className="author-name">
							<span className="author-span-ft">Author | Writer </span>
							<span className="ata-name">Bruce Judge</span>
						</span>
					</p>
				</article>
			</section>
		</div>
	</Layout>
);

export default Author;
