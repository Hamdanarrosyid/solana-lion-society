import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import Head from 'next/head'

const timelineData = [
  '<p>Launch of our social platforms : official twitter, Discord for our community, whitelist , giveaway, and website  launch</p>',
  '<p>Public Mint on March 15, 2022.<br/>2,500 Lion’s released on solana</p>',
  '<p>Legendary Auction  on March 28, 2022.  with 9 legendary lions up for bid</p>',
  '<p>Apocalypse Lion Society will be announced as a Solana lion society new project</p>',
  '<p>solana lion 3D vx will be announced in the sandbox video game for the lion community gathering place.</p>',
  '<p></p>'
]

export default function Home() {
  return (
    <div>
      <Head>
        <title>Solana Lion Society</title>
      </Head>
      <main className='is-bg-primary'>

        {/* hero section */}
        <section id='home-section' className="is-flex is-align-items-center" style={{ height: '100vh' }}>
          <div className='container px-5'>
            <div className='columns'>

              <div className='hero-nft column is-6 '>

                <div className='is-hidden-desktop hero-nft-circle'>
                  <div className='nft-image-circle nft-image-circle-center'>
                    <Image src={'/images/LionBot.png'} width={165} height={165} />
                  </div>
                </div>

                <div className='hero-nft-circle is-hidden-mobile'>
                  <div className='nft-image-circle nft-image-circle-center'>
                    <Image src={'/images/LionBot.png'} width={165} height={165} />
                  </div>
                  <div className='nft-image-circle nft-image-circle-1'>
                    <Image src={'/images/AstroLion.png'} width={165} height={165} />
                  </div>
                  <div className='nft-image-circle nft-image-circle-2'>
                    <Image src={'/images/Logo.png'} width={165} height={165} />
                  </div>
                  <div className='nft-image-circle nft-image-circle-3'>
                    <Image src={'/images/Logo.png'} width={165} height={165} />
                  </div>
                  <div className='nft-image-circle nft-image-circle-4'>
                    <Image src={'/images/Logo.png'} width={165} height={165} />
                  </div>
                  <div className='nft-image-circle nft-image-circle-5'>
                    <Image src={'/images/Logo.png'} width={165} height={165} />
                  </div>
                  <div className='nft-image-circle nft-image-circle-6'>
                    <Image src={'/images/Logo.png'} width={165} height={165} />
                  </div>
                </div>
              </div>
              <div className='has-text-centered column is-6'>
                <div className='neon-border neon-border-desktop green-neon'>
                  <h1>
                    <span className='neon-text green-neon neon-text-title'>Solana Lion </span><br />
                    <span className='neon-text purple-neon neon-text-title'>Society</span>
                  </h1>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* about */}
        <section id='about-section' className='has-text-white v-gradient-style is-flex is-flex-direction-column is-align-items-center'>
          <hr />
          <div className='container has-text-centered my-150'>
            <h2 className='neon-text blue-neon px-5'>About Solana Lion Society</h2>
            <div className='columns my-100'>
              <div className='column is-6 is-flex is-flex-direction-column is-align-items-center mb-6'>
                <div className='nft-image nft-image-large shadow-blue-neon'>
                  <Image src='/images/Logo.png' width={380} height={380} alt='image-04' />
                </div>
              </div>
              <div className='column is-6'>
                <p className='is-size-4-desktop is-size-5-mobile has-text-centered-mobile has-text-left px-3' >
                  solana lion society is 2,500 people in the lion metaverse world. They live in a utopian cyberpunk civilization that set after 100 years after the nuclear apocalypse occurred. Slowly build a clean world and free from conflict and war,<br /><br />

                  there is also an edition of the apocalypse lion society which took place during a nuclear war when the world was almost destroyed and unfit for habitation. A dystopian world where problems are solved by violence and war. We are not sure how many survivor are left and when exactly this disaster occurred. But we will announce it as soon as we get all the data we are collecting.
                </p>
              </div>
            </div>
          </div>
          <hr />
        </section>

        {/* Our Roadmap */}
        <section id='roadmap-section' className='has-text-white is-flex is-justify-content-center'>
          <div className='container my-150'>
            <h2 className='has-text-centered'>
              <span className='neon-text green-neon px-5'>Our Roadmap</span>
            </h2>
            <div className='is-hidden-desktop my-100'>
              {
                timelineData.map((value, index) => (
                  <div key={index} className='columns is-gapless marginless px-5' style={{ overflowY: 'hidden', position: 'relative' }}>
                    <div className='column'>
                      <div className='timeline'>
                        {index == 0 ? <div className='circle-timeline-start'></div> : index + 1 == timelineData.length && <div className='circle-timeline-end'></div>}
                        {index + 1 !== timelineData.length && <div className='circle-timeline'></div>}
                      </div>
                    </div>
                    <div className='column'>
                      {
                        index + 1 == timelineData.length ? (
                          <div></div>
                        ) : (
                          <div className='p-5'>
                            <h3 className='is-uppercase is-size-4 has-text-weight-bold'>Phase <span className='green-phase'>.0{index + 1}</span></h3>
                          </div>
                        )
                      }
                    </div>
                    <div className='column'>
                      {
                        index + 1 == timelineData.length ? (
                          <div className='column is-5'></div>)
                          : (
                            <div className='timeline-box'>
                              <div className='is-size-5' dangerouslySetInnerHTML={{ __html: value }} />
                            </div>
                          )
                      }
                    </div>
                  </div>
                ))
              }
            </div>
            <div className='is-hidden-mobile my-100'>
              {
                timelineData.map((value, index) => (
                  <div key={index} className='columns is-gapless marginless'>
                    {
                      (index + 1) % 2 == 1 ? (
                        <div className='column is-5'>
                          <div className='timeline-box'>
                            <div className='is-size-4' dangerouslySetInnerHTML={{ __html: value }} />
                          </div>
                        </div>
                      ) : index + 1 == timelineData.length ? (
                        <div className='column is-5'></div>
                      ) : (
                        <div className='column is-5'>
                          <div className='is-flex is-align-items-end' style={{ height: '100%' }}>
                            <h3 className='has-text-right ml-auto is-size-2 is-uppercase has-text-weight-bold'>Phase <span className='green-phase'>.0{index + 1}</span></h3>
                          </div>
                        </div>
                      )
                    }
                    <div className='column is-2'>
                      <div className='timeline'>
                        {index == 0 ? <div className='circle-timeline-start'></div> : index + 1 == timelineData.length && <div className='circle-timeline-end'></div>}
                        {index + 1 !== timelineData.length && <div className='circle-timeline'></div>}
                      </div>
                    </div>
                    {
                      (index + 1) % 2 == 1 ? (
                        <div className='column is-5'>
                          <div className='is-flex is-align-items-end' style={{ height: '100%' }}>
                            <h3 className='has-text-left is-size-2 is-uppercase has-text-weight-bold'>Phase <span className='green-phase'>.0{index + 1}</span></h3>
                          </div>
                        </div>
                      ) : index + 1 == timelineData.length ? (
                        <div className='column is-5'>
                          <div className='timeline-box' style={{ background: 'none', boxShadow: 'none' }}>
                          </div>
                        </div>
                      ) : (
                        <div className='column is-5'>
                          <div className='timeline-box'>
                            <div className='is-size-4' dangerouslySetInnerHTML={{ __html: value }} />
                          </div>
                        </div>
                      )
                    }
                  </div>
                ))
              }
            </div>
          </div>
        </section>

        {/* Legendary Auction */}
        <section id='legendary-section' className='has-text-white v-gradient-style is-flex is-flex-direction-column is-align-items-center'>
          <hr />
          <div className='container has-text-centered my-150 px-5'>
            <h2>
              <span className='neon-text purple-neon'>Legendary Auction</span>
            </h2>
            <p className='is-size-4 is-size-5-mobile my-100'>Prepare yourself for  the 9 legendary lions. These 9 figures have important roles in the Lion society metaverse world. They are lions who keep the order of civilization in balance.  They are the brains behind the new world civilization that oversees the future direction of the world. make sure that the new world they build doesn't run into  wars and disasters like what happened before.</p>
            <div className='columns is-multiline is-gapless'>
              {
                ['', '', '', '', '', '', '', '', ''].map((_, index) => (
                  <div key={index} className='column is-4 is-flex is-justify-content-center' style={{ margin: '60px 0' }}>
                    <div className='nft-image shadow-purple-neon'>
                      <Image src='/images/BaseLegend.png' width='300' height='300' alt={`image-${6 + index}`} />
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
          <hr />
        </section>

        {/* Team */}
        <section id='team' className='has-text-white v-gradient-style --no-border'>
          <div className='container has-text-centered py-150'>
            <h2>
              <span className='neon-text orange-neon px-5'>Solana Lion Team</span>
            </h2>
            <div className='columns my-100'>
              <div className='column is-4 is-flex is-align-items-center is-flex-direction-column my-3'>
                <div className='nft-image shadow-orange-neon'>
                  <Image src='/images/Inu.png' width={300} height={300} />
                </div>
                <div className='py-4 is-size-3 is-size-4-mobile '>
                  <p>Inukodarlian</p>
                  <p>Community Manager</p>
                </div>
                <div className='is-flex is-justify-content-center is-size-2 is-size-3-mobile'>
                  <span className='icon mr-5'>
                    <FontAwesomeIcon icon={faTwitter} />
                  </span>
                  <span className='icon ml-5'>
                    <FontAwesomeIcon icon={faInstagram} />
                  </span>
                </div>
              </div>
              <div className='column is-4 is-flex is-align-items-center is-flex-direction-column my-3'>
                <div className='nft-image shadow-orange-neon'>
                  <Image src='/images/Logo.png' width={300} height={300} />
                </div>
                <div className='py-4 is-size-3 is-size-4-mobile'>
                  <p>Migdyawan</p>
                  <p>Artist</p>
                </div>
                <div className='is-flex is-justify-content-center is-size-2 is-size-3-mobile'>
                  <span className='icon mr-5'>
                    <FontAwesomeIcon icon={faTwitter} />
                  </span>
                  <span className='icon ml-5'>
                    <FontAwesomeIcon icon={faInstagram} />
                  </span>
                </div>
              </div>
              <div className='column is-4 is-flex is-align-items-center is-flex-direction-column my-3'>
                <div className='nft-image shadow-orange-neon'>
                  <Image src='/images/Hmdn.png' width={300} height={300} />
                </div>
                <div className='py-4 is-size-3 is-size-4-mobile'>
                  <p>Hmdn</p>
                  <p>Developer</p>
                </div>
                <div className='is-flex is-justify-content-center is-size-2 is-size-3-mobile'>
                  <span className='icon mr-5'>
                    <FontAwesomeIcon icon={faTwitter} />
                  </span>
                  <span className='icon ml-5'>
                    <FontAwesomeIcon icon={faInstagram} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className='footer has-text-white has-background-black'>
        <div className='container has-text-centered py-150'>
          <h2 className=''>
            <span className='neon-text red-neon px-5'>Join Our community</span>
          </h2>
          <p className='is-size-4 is-size-5-mobile my-100'>The goal of the community we build is to create a clean ecosystem for interaction and discussion among nft enthusiasts and developing the solana lion society as part of solana NFT ecosystem.</p>
          <div className='is-flex is-align-items-center is-justify-content-center'>
            <span className='icon'>
              <FontAwesomeIcon icon={faTwitter} />
            </span>
            <span className='icon'>
              <FontAwesomeIcon icon={faDiscord} />
            </span>
            <span className='icon'>
              <FontAwesomeIcon icon={faInstagram} />
            </span>
          </div>
        </div>
      </footer>
    </div>
  )
}
