import NewsLatterBox from "./NewsLatterBox";
import Script from 'next/script'

const Contact = () => {
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="wow fadeInUp mb-12 rounded-md bg-primary/[3%] py-11 px-8 dark:bg-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Como poner a trabajar la AI de Bulbo para ti
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Agenda para palticar sobre como te ayudamos a cumplir con tus objetivos de acceso, sustentabilidad y costos de energia.
              </p>
              <form>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">

                  </div>

                  <div className="w-full px-4">
                    <div className="mb-8">
                      <iframe data-tally-src="https://tally.so/embed/mVPY2E?alignLeft=1&hideTitle=1&dynamicHeight=1"
                      loading="lazy" width="100%" height="300" title="Contacto">

                      </iframe>
                          <Script
                              id="tally-js"
                              src="https://tally.so/widgets/embed.js"
                              
                          />
                    </div>
                  </div>

                </div>
              </form>
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
           
          </div>
        </div>
        
      </div>
      
    </section>
    
  );
};

export default Contact;
