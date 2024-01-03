import React from 'react'


export default function Home() {
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
    </>
  )
}
