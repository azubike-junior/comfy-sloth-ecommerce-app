import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/hero-bcg.jpeg'

const AboutPage = () => {
  return (
    <main>
    <PageHero title='about' />
     <Wrapper className="page section section-center">
        <img src={aboutImg} alt="about-imge" />
        <article>
          <div className="title">
            <h2>Our story</h2>
            <div className='underline'></div>
          </div>
          <p>
            Est duis elit sit aliqua proident Lorem labore aliqua excepteur mollit veniam velit. Sunt duis in aliquip duis velit aute ex voluptate. Incididunt irure id eiusmod ea occaecat officia. Nulla tempor reprehenderit voluptate exercitation dolor. Enim labore nulla do adipisicing anim irure tempor amet amet. Nostrud ullamco excepteur adipisicing ad est commodo minim aute ex culpa. Sunt exercitation consequat nulla minim est officia consequat anim excepteur anim proident amet eu officia.
          </p>
        </article>
      
      </Wrapper>
      </main>
  )
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
