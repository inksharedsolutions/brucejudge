import React from "react"
import { Helmet } from "react-helmet"
import BookInfo from '../components/book-info/book-info'
import { DiscussionEmbed } from "disqus-react"
import Book1 from '../static/book/book-min.png'

import Layout from "../components/layout"
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'

const Book = (props) => {

  const slug = (props.location.href);

  const disqusConfig = {
      shortname: 'bruce-judge',
      config: { identifier: 12, slug }
  }

  return(
    <Layout>
      <Helmet title="About the Book | Bruce Judge"/>
      <Nav pathExt={props.path}/>
        <Banner 
            spanFirst={`About the`} 
            contextHeading={`Book`}/>
      <main className="wrapperMain">
          <div
              className="container"
              id="book-containers" >

              <BookInfo
                  data={{
                      title: `In Fellowship with GOD`,
                      spanFirst: `The Bruce Judge Story`,
                      imgSrc: Book1,
                      id: 'bullying',
                      content:
                          `
                              <p>
                              This book traces the spiritual experiences of Bruce’s business career that culminates in a call for all Christians, Muslims and Jews (and all others who seek truth and God in spirit) to reconcile. Jesus taught that the truth of God is simply too marvelous for human understanding so we must accept God in faith and in spirit. With that in mind it is a terrible conceit for any religious leaders to state that theirs is the only way to God. God will find a way to Him for all who lead a good life exhibiting the fruits of the spirit and search for Him in spirit.
                              </p>

                              <p>
                              The purpose of the book is a call to all God’s people of Islam to abandon all hatred, hostilities, greed and dissension as these do not come from a God whose nature is love, compassion and forgiveness. God wants to bring them peace and prosperity but that can only happen when all hatred and hostility is abandoned. If they do not heed this call from God then he will leave them to destroy themselves, which after all is what is happening now.
                              </p>

                              <p>
                              Fighting only breeds more fighting whereas love will conquer where guns will fail. This book is the spark to start the fire that God will cause to spread throughout the world.
                              </p>

                              <p>
                              Look at the current destruction and desolation in the Middle East. Millions of Muslims are refugees in alien lands.
                              </p>

                              <p>
                              This is what the prophet Zechariah described:
                              </p>

                              <p>
                              Zechariah 7: 8-14
                              </p>

                              <p>
                              “ And the word of the Lord came again to Zechariah: This is what the Lord Almighty says: ‘ Administer true justice; show mercy and compassion to one another. Do not oppress the widow or the fatherless, the alien or the poor. In your hearts do not think evil of each other.’
                              </p> 

                              <p>
                              But they refused to pay attention; stubbornly they turned their backs and stopped up their ears. They made their hearts as hard as flint and would not listen to the law or to the words that the Lord Almighty had sent by his Spirit through the earlier prophets. So the Lord Almighty was very angry.
                              </p>

                              <p>
                              When I called , they did not listen; so when they called, I would not listen, says the Lord Almighty. I scattered them with a whirlwind among all the nations, where they were strangers. The land was left so desolate behind them that no one could come or go. This is how they made the pleasant land desolate.”
                              </p>
                          `,

                      ebooks: {
                          stratton: 'https://www.stratton-press.com/books/in-fellowship-with-god-the-bruce-judge-story/',
                          barnes: 'https://www.barnesandnoble.com/w/in-fellowship-with-god-bruce-judge/1130037757?ean=9781643453064',
                          amazon: 'https://www.amazon.com/fellowship-God-Bruce-Judge-Story-ebook/dp/B07RPPP5PF/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=1548371051&sr=8-1',
                      },
                      paperback: {
                          amazon: 'https://www.amazon.com/Fellowship-God-Bruce-Judge-Story/dp/1643450816/ref=sr_1_1?ie=UTF8&qid=1548371051&sr=8-1&keywords=Bruce+Judge+stratton',
                          barnes: 'https://www.barnesandnoble.com/w/in-fellowship-with-god-bruce-judge/1130037757?ean=9781643450810',
                          booksamillion: 'https://www.booksamillion.com/p/fellowship-God/Bruce-Judge/9781643450810?id=8049069540563&_ga=2.57685226.1970318575.1608001064-2145380449.1604906972',
                      }
                  }}
              />

              <div className="commentSection" >
                  <div id="disqus_thread">
                      <DiscussionEmbed {...disqusConfig} />
                  </div>
              </div>
          </div>
      </main>
    </Layout>
  )
}

export default Book
