import React from 'react'
import './home.css'


class Home extends React.Component{
    render(){
            return<>
            <h1>
                Aqui va el navbar
            </h1>




            <section class="hero1">
             <div className="column ">
                 <h1 className="h1hero1">Estudiar nunca fue tan divertido</h1>
                 <h2 class="h2hero2">Preparate para tu examen de admisión, con la mejor app, hecha por estudiantes que hicieron el mismo examen que tu </h2>
                 <div class="btnshero1">
                 <button style="margin: .5em;" class="button is-link">Link</button>
                  <button style="margin: .5em;" class="button is-black">Black</button>
          
                 </div>
       
             <div class="columns">
                <div class="column video">
                    <iframe width="100%" height="415" src="https://www.youtube.com/embed/qAXIgPgp8r8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            </div>
         
          
       

        </div>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
       

      

       <!-- <img src="img_chania.jpg" alt="Flowers in Chania">--> 
        
      </div>

    </section>





            
            </>
    }

}

export default Home