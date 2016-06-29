import React, { Component } from 'react'
import DefaultLayout from './layout/layout'

import ContactForm from './components/ContactForm'
import ContactInfo from './components/ContactInfo'

export default class Index extends Component{
  render(){
    return(
      <DefaultLayout
        title={this.props.title}
        description={this.props.description}>
        
        <div id="landing-banner-2"></div>
        <div id="landing-banner-1"></div>

        <section className="dummy first">

         <span>... The OFFICIAL Website</span>

          <article className="container-fluid">

            <h2>Fa Shizzle</h2>
            <p>
              Donizzle funky fresh auctizzle maurizzle. Bow wow wow a elizzle
              da bomb gangsta pretium own yo'. Maecenas a sheezy. Daahng dawg
              fo shizzle lacizzle uhuh ... yih! maurizzle elementum bling bling.
              Nunc izzle rizzle sizzle ghetto boofron ultrices porta. Sure velizzle
              tortizzle, ultricies away, hendrerit boofron, fizzle i saw beyonces
              tizzles and my pizzle went crizzle, its fo rizzle. Etiam velizzle pizzle,
              aliquam rizzle, bow wow wow non, dictizzle , turpizzle. Fo shizzle my
              nizzle neque. Crizzle check it out. Things vitae erat stuff libero
              yippiyo the bizzle. Fusce ac augue eu nibh dizzle mattizzle.
              Phasellus bling bling i'm in the shizzle nizzle my shizz.
              Suspendisse lorem leo, sollicitudin sizzle, gangsta dope,
              commodo nizzle, bizzle. Donizzle bow wow wow porttitizzle gangsta.
              Hizzle feugiat, tellizzle a ornare tempor, the bizzle metus tincidunt
              ante, egizzle dapibus pede enizzle izzle check out this. Phasellizzle
              doggy boofron, i saw beyonces tizzles and my pizzle went crizzle id,
              yo pizzle, break yo neck, yall izzle, sapien. Ut you son of a bizzle
              magna vizzle ipsum. The bizzle check out this i saw beyonces tizzles
              and my pizzle went crizzle, tellivizzle vitae, vestibulum et, my shizz
              gangsta, velit. Maurizzle away gangsta. Sizzle funky fresh magna fo
              amet shit iaculizzle shiznit.
            </p>

            <h2>My Nizzle</h2>
            <p>
              Donizzle funky fresh auctizzle maurizzle. Bow wow wow a elizzle
              da bomb gangsta pretium own yo'. Maecenas a sheezy. Daahng dawg
              fo shizzle lacizzle uhuh ... yih! maurizzle elementum bling bling.
              Nunc izzle rizzle sizzle ghetto boofron ultrices porta. Sure velizzle
              tortizzle, ultricies away, hendrerit boofron, fizzle i saw beyonces
              tizzles and my pizzle went crizzle, its fo rizzle. Etiam velizzle pizzle,
              aliquam rizzle, bow wow wow non, dictizzle , turpizzle. Fo shizzle my
              nizzle neque. Crizzle check it out. Things vitae erat stuff libero
              yippiyo the bizzle. Fusce ac augue eu nibh dizzle mattizzle.
              Phasellus bling bling i'm in the shizzle nizzle my shizz.
              Suspendisse lorem leo, sollicitudin sizzle, gangsta dope,
              commodo nizzle, bizzle. Donizzle bow wow wow porttitizzle gangsta.
              Hizzle feugiat, tellizzle a ornare tempor, the bizzle metus tincidunt
              ante, egizzle dapibus pede enizzle izzle check out this. Phasellizzle
              doggy boofron, i saw beyonces tizzles and my pizzle went crizzle id,
              yo pizzle, break yo neck, yall izzle, sapien. Ut you son of a bizzle
              magna vizzle ipsum. The bizzle check out this i saw beyonces tizzles
              and my pizzle went crizzle, tellivizzle vitae, vestibulum et, my shizz
              gangsta, velit. Maurizzle away gangsta. Sizzle funky fresh magna fo
              amet shit iaculizzle shiznit.
            </p>

            <h2>Yo</h2>
            <p>
              Donizzle funky fresh auctizzle maurizzle. Bow wow wow a elizzle
              da bomb gangsta pretium own yo'. Maecenas a sheezy. Daahng dawg
              fo shizzle lacizzle uhuh ... yih! maurizzle elementum bling bling.
              Nunc izzle rizzle sizzle ghetto boofron ultrices porta. Sure velizzle
              tortizzle, ultricies away, hendrerit boofron, fizzle i saw beyonces
              tizzles and my pizzle went crizzle, its fo rizzle. Etiam velizzle pizzle,
              aliquam rizzle, bow wow wow non, dictizzle , turpizzle. Fo shizzle my
              nizzle neque. Crizzle check it out. Things vitae erat stuff libero
              yippiyo the bizzle. Fusce ac augue eu nibh dizzle mattizzle.
              Phasellus bling bling i'm in the shizzle nizzle my shizz.
              Suspendisse lorem leo, sollicitudin sizzle, gangsta dope,
              commodo nizzle, bizzle. Donizzle bow wow wow porttitizzle gangsta.
              Hizzle feugiat, tellizzle a ornare tempor, the bizzle metus tincidunt
              ante, egizzle dapibus pede enizzle izzle check out this. Phasellizzle
              doggy boofron, i saw beyonces tizzles and my pizzle went crizzle id,
              yo pizzle, break yo neck, yall izzle, sapien. Ut you son of a bizzle
              magna vizzle ipsum. The bizzle check out this i saw beyonces tizzles
              and my pizzle went crizzle, tellivizzle vitae, vestibulum et, my shizz
              gangsta, velit. Maurizzle away gangsta. Sizzle funky fresh magna fo
              amet shit iaculizzle shiznit.
            </p>
          </article>

        </section>

        <section className="dummy hiZ-index">

          <article id="contact-box" className="container-fluid">

            <h3>Word..</h3>


            <ContactInfo />
            <ContactForm />


          </article>

        </section>
        
        <script src="js/parallax.js"></script>
      </DefaultLayout>
    )
  }
}