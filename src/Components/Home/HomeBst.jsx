import React from 'react'
import './home.css'
import ios from '../../Images/ios.png'
import android from '../../Images/android.png'
import phone from '../../Images/phone.jpg'
import showapp from '../../Images/show.png'
import 'bootstrap/dist/css/bootstrap.min.css'



class Home extends React.Component{
    render(){
            return<>
            <h1>
                Aqui va el navbar
            </h1>




            <section class=" container-fluid hero1">
             <div className="row">
                 <h1 className="h1hero1">Estudiar nunca fue tan divertido</h1>
                 <h2 class="h2hero2">Preparate para tu examen de admisión a la universidad, con la mejor app, hecha por estudiantes que hicieron el mismo examen que tu, ¡totalmente gratis! </h2>
                 <div class="btnshero1">
                 <button type="button" className="btn-quiz btn btns ">Quiz</button>
                 <button type="button" className="btn btn-outline-primary btnvermas btns">Ver más</button>
          
                 </div>
       
             <div class="row-fluid">
                 <div className="col-2"></div>
                <div class="col-8 video">
                    <iframe width="100%" height="415" src="https://www.youtube.com/embed/qAXIgPgp8r8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                 <div className="col-2"></div>

            </div>
        
        </div>

        <p className="pabajovideo">+ de 500 preguntas de exmanes aplicados</p>

      </div>

    </section>





     {/*Aqui inicia contador de metricas */}

     <section className="container-fluid">
        <div className="row counterdiv">
         
            <div className="col-sm">
                <div  className="title is-3">
                    +200
                </div>
                <div className="txtcounter">
                Usuarios registrados
                </div>
            
            </div>
            <div className="col-sm">
            <div className="title is-3">
                    +1500
                </div>
                <div className="txtcounter">
                Personas usando la app ahora
                </div>


            </div>
            <div className="col-sm">
            <div  className="title is-3">
                    +200
                </div>
                <div className="txtcounter">
                    Preguntas examen
                </div>

            </div>
            
            
            

        </div>
        
    </section>



    {/*Aqui inicia Hero 2 */}
    <section className="container-fluid">
      <div class="row">
        <div class="col-md-6 colhero2">
          <h3 className="Quizate">
            #Quizate!

          </h3>
          <p className="parrafohero2">Una app creada por estudiantes  que tambien realizaron el mismo examen de ingreso, ponte en forma con nuestro banco de preguntas estudiando donde quieras... </p>
          <div className="btnhero2">
            
            <button type="button" className="btn-quiz btn btns btnhero2 ">Quiz</button>
              
               </div>
          


        </div>


        <div class="col-md-6 divimgphone">
        <img src={phone} class="imgphone" alt="icon"/>
          
        </div>
      
      </div>

    </section>


    
     {/*aqui inicia seccion Features */}


<section class="section feature" id="feature">
	<div class="container">
		<div class="row">
			<div class="col-12">
				<div class >
					<h2>App Features</h2>
					<p>Demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee idea of
						denouncing pleasure and praising</p>
				</div>
			</div>
		</div>
		<div class="row bg-elipse">
			<div class="col-lg-4 align-self-center text-center text-lg-right">
				{/* Feature Item*/}
				<div class="feature-item">
					 {/* Icon*/}
					<div class="icon">
						<i class="ti-brush-alt"></i>
					</div>
					{/* Content*/}
					<div class="content">
						<h5>Beautiful Interface Design</h5>
						<p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising</p>
					</div>
				</div>
				{/* Feature Item*/}
				<div class="feature-item">
					 {/* Icon*/}
					<div class="icon">
						<i class="ti-gift"></i>
					</div>
					{/* Content*/}
					<div class="content">
						<h5>Unlimited Features</h5>
						<p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising</p>
					</div>
				</div>
			</div>
			<div class="col-lg-4 text-center">
				{/* Feature Item*/}
				<div class="feature-item mb-0">
					 {/* Icon*/}
					<div class="icon">
						<i class="ti-comments"></i>
					</div>
					{/* Content*/}
					<div class="content">
						<h5>Full free chat</h5>
						<p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising</p>
					</div>
				</div>
				<div class="app-screen">
					<img  src={showapp} class="img-fluid"   alt="app-screen"/>
    
				</div>
                  {/* Feature Item*/}
				<div class="feature-item">
                       {/* Icon*/}
				
					<div class="icon">
						<i class="ti-support"></i>
					</div>
                       {/* Content*/}
				
					<div class="content">
						<h5>24/7 support by real people</h5>
						<p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising</p>
					</div>
				</div>
			</div>
			<div class="col-lg-4 text-center text-lg-left align-self-center">
			
                   {/* Feature Item*/}
				<div class="feature-item">
					 {/* Icon*/}
				
					<div class="icon">
						<i class="ti-image"></i>
					</div>
					  {/* Content*/}
					<div class="content">
						<h5>Retina ready greaphics</h5>
						<p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising</p>
					</div>
				</div>
				{/* Feature Item*/}
				<div class="feature-item">
				 {/* Icon*/}
					<div class="icon">
						<i class="ti-pie-chart"></i>
					</div>
					 {/* Content*/}
					<div class="content">
						<h5>IOS & android version </h5>
						<p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>







   











     {/*Aqui inicia Banner Apps mobile */}
     <section className="stn-download">
        <div className="container section has-text-centered">
            <div className="columns">
                <div class="column is-half is-offset-one-quarter">

                    <h1 classNAme="title is-2">Download Anywhere</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit..</p>

                        <a href="#" className="button button-store"> 
                            <img src={ios} alt="icon"/> Apple Store
                        </a>

                       

                    <a href="#" className="button button-store">
                        <img src={android} alt="icon"
                        /> Google play
                    </a>
                </div>
            </div>

        </div>
    </section>











            
           </>
    }

}

export default Home