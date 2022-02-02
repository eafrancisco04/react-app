import React from 'react';
import Portfolio from './Portfolio'

function Articles(props) {
    return(
      <section>
        <h2>Articles</h2>
        <p>If there were any writing or design samples, they would go on the section below.</p>
        
        <div class="portfolio">
            <Portfolio title="Playlist" descr="A simple audio player with Vanilla Javascript"></Portfolio>
            <Portfolio title="Github " descr="Lorem ipsum something"></Portfolio>
            <Portfolio title="Title3" descr="Lorem ipsum something"></Portfolio>  
        </div> 
      </section>
    )
  }

  export default Articles