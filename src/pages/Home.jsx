import React, { useState } from 'react'


export default function Home() {
  const [faqDropOne, setFaqDropOne] = useState(false)


  return (
    <>
      <section id="hero-section">
        <div className="container">
          <div className="col-top">
            <div className="col-top-hero-content">
              <h1>COLLECT & SELL SUPER <span>RARE NFTS</span></h1>
            </div>
            <div className="col-top-hero-img">
              <img src="src/assets/hero-image.png" alt="nft-hero-image" />
            </div>
          </div>
          <div className="col-bottom">
            <div className="col-bottom-content">
              <p>Produce an exclusive NFT collection of over 10,000 items by uploading the necessary layers, and prepare to market your collection for sales</p>

              <div className="btns">
                <button>Let's Start</button>
                <button>Join Discord</button>
              </div>
            </div>
            <div className="col-bottom-img">

            </div>
          </div>
        </div>
      </section>

      <section id='showcase'>
        <div className="container">
          <div className="showcase-contnt">
            <span>8226</span>
            <h4>TOTAL ITEM</h4>
          </div>
          <div className="showcase-contnt">
            <span>1400</span>
            <h4>TOTAL ITEM</h4>
          </div>
          <div className="showcase-contnt">
            <span>0.50</span>
            <h4>TOTAL ITEM</h4>
          </div>
          <div className="showcase-contnt">
            <span>20.1K</span>
            <h4>TOTAL ITEM</h4>
          </div>
        </div>
      </section>

      <section id='about-section'>
        <div className="container">
          <div className="about-image">

          </div>
          <div className="about-content">
            <span>ABOUT US</span>
            <h2>EXPLORE FURTHER,
              ACQUIRE, AND TRADE
              UNIQUE NFTS.</h2>
            <p>Produce an exclusive NFT collection of over 10,000 items by uploading the necessary layers, and prepare to market your collection for sales</p>
            <p>Produce an exclusive NFT collection of over 10,000 items by uploading the necessary layers, and prepare to market your collection for sales
              Produce an exclusive NFT collection of over 10,000 items by uploading the necessary layers, and prepare to market your collection for sales
            </p>
          </div>
        </div>
      </section>

      <section id="howto">
        <div className="container">
          <div className="howto-content">
            <h2>GAMING NFTS</h2>
            <p>Produce an exclusive NFT collection of over 10,000 items by uploading the necessary layers, and prepare to market your collection for sales</p>
          </div>
          <div className="howto-content">
            <h2>PLAY TO EARN</h2>
            <p>Produce an exclusive NFT collection of over 10,000 items by uploading the necessary layers, and prepare to market your collection for sales</p>
          </div>
          <div className="howto-content">
            <h2>METAVERSE READY</h2>
            <p>Produce an exclusive NFT collection of over 10,000 items by uploading the necessary layers, and prepare to market your collection for sales</p>
          </div>
        </div>
      </section>

      <section id='collection'>
        <div className="container">
          <div className="collection-top">
            <div className="left">
              <span>COLLECTION</span>
              <h2>BORED APES NFT COLLECTIBLES</h2>
            </div>
            <div className="right">
              <button>VIEW ON OPENSEA</button>
            </div>
          </div>

          <div className="collections-image-container">
            <div className="img-left">
              <img src="../assets/image1.png" alt="" />
            </div>
            <div className="right">
              <div className="imgOne">

              </div>
              <div className="imgTwo">

              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq">
        <div className="container">
          <div className="left">
            <span>QUESTIONS & ANSWERS</span>
            <h2>MOST ASKED QUESTIONS FROM USERS</h2>
            <p>Produce an exclusive NFT collection of over 10,000 items by uploading the necessary layers, and prepare to market your collection for sales</p>
          </div>
          <div className="right">
            <div className={faqDropOne ? "question" : "active-question"}>
              <div className="caption" onClick={() => setFaqDropOne(!faqDropOne)}>
                <span>WHAT IS NERKO’S NFT COLLECTION?</span>
                <div className="harm" onClick={() => setFaqDropOne(!faqDropOne)}>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className="answer">
                <p>Produce an exclusive NFT collection of over 10,000 items by uploading the necessary layers, and prepare to market your collection for sales</p>
              </div>
            </div>

            <div className="question">
              <div className="caption">
                <span>HOW SECURED IS THIS TOKEN</span>
                <div className="harm">
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className="answer">
                <p>Produce an exclusive NFT collection of over 10,000 items by uploading the necessary layers, and prepare to market your collection for sales</p>
              </div>
            </div>

            <div className="question">
              <div className="caption">
                <span>HOW DOES THE RAFFLE WORK?</span>
                <div className="harm">
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className="answer">
                <p>Produce an exclusive NFT collection of over 10,000 items by uploading the necessary layers, and prepare to market your collection for sales</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section id="team">
        <div className="container">
          <div className="team-top">
            <div className="left">
              <span>OUR TEAM</span>
              <h2>MEET OUR VOLUNTEERS</h2>
            </div>
            <div className="right">
              <button>MORE ABOUT TEAM</button>
            </div>
          </div>

          <div className="team-container">
            <div className="team"></div>
            <div className="team"></div>
            <div className="team"></div>
          </div>

          <div className="about-team">
            <div className="col">
              <div className="col-image">

              </div>
              <div className="col-content">
                <h2>THAT’S WHY WE ARE BETTER
                  THAN THE OTHERS</h2>

                <p>Produce an exclusive NFT collection of over 10,000 items by uploading the necessary layers, and prepare to market your collection for salesProduce an exclusive NFT collection of over 10,000 items by uploading the necessary layers, and prepare to market your collection for sales</p>

                <div className="about-content">
                  <div className="content">
                    <span>1.2B</span>
                    <p>Over Billion on Blockchain
                      asset to discover</p>
                  </div>
                  <div className="line"></div>
                  <div className="content">
                    <span>3.4B</span>
                    <p>Over Billion on Blockchain
                      asset to discover</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section id="blog">
        <div className="container">
          <div className="blog-top">
            <div className="left">
              <span>OUR BLOG</span>
              <h2>OUR RECENT POST</h2>
            </div>
            <div className="right">
              <button>VIEW ON OPENSEA</button>
            </div>
          </div>

          <div className="blog-content-container">
            <div className="blog-content">
              <div className="blog-image"></div>
              <div className="blog-title">NFT</div>
              <div className="blog-date">
                <span>JAN 1 2024</span>
                <span>8MINS</span>
                <span>4 COMMENTS</span>
              </div>
            </div>

            <div className="blog-content">
              <div className="blog-image"></div>
              <div className="blog-title">NFT</div>
              <div className="blog-date">
                <span>JAN 1 2024</span>
                <span>8MINS</span>
                <span>4 COMMENTS</span>
              </div>
            </div>

            <div className="blog-content">
              <div className="blog-image"></div>
              <div className="blog-title">NFT</div>
              <div className="blog-date">
                <span>JAN 1 2024</span>
                <span>8MINS</span>
                <span>4 COMMENTS</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
