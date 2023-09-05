import vg from '../assets/2.webp'
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from 'react-icons/ai'

const Home = () => {
  return (
    <>
      <div className='home' id='home'>
        <main>
          <h1>Techo</h1>
          <p>Coding Solutions</p>
        </main>
      </div>
      <div className='home2'>
        <img src={vg} alt='Graphics' />
        <div>
          <p>
            We are your only solution to the tech problems you face everyday. We
            are the leading tech company whose aim is to increase the problem
            solving abaility in children
          </p>
        </div>
      </div>
      <div className='home3' id='about'>
        <div>
          <h1>Who we are </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quae,
            expedita harum iure dolorum voluptas facilis temporibus unde sunt,
            nisi totam incidunt labore aperiam voluptatem nam officia. Qui,
            exercitationem adipisci.
          </p>
        </div>
      </div>
      <div className='home4' id='brands'>
        <div>
          <h1>Brands</h1>

          <article>
            <div
              style={{
                animationDelay: '0.3s',
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div
              style={{
                animationDelay: '0.5s',
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazone</p>
            </div>
            <div
              style={{
                animationDelay: '0.7s',
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
            <div
              style={{
                animationDelay: '0.9s',
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  )
}

export { Home }
