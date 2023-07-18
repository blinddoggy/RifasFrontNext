import Image from "next/image";
import feature_1 from "/public/images/icon/feature/1.png";
import feature_2 from "/public/images/icon/feature/2.png";
import feature_3 from "/public/images/icon/feature/3.png";
import feature_4 from "/public/images/icon/feature/4.png";

const Features = () => {
  return (
    <section className="pt-120 pb-120">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 order-lg-1 order-2">
            <div className="row mb-none-30">
              <div className="col-lg-6 mb-30">
                <div className="row mb-none-30">
                  <div className="col-lg-12 col-md-6 mb-30">
                    <div className="feature-card hover--effect-1">
                      <div className="feature-card__icon">
                        <Image src={feature_1} alt="image" />
                      </div>
                      <div className="feature-card__content">
                        <h3 className="feature-title">Externalización</h3>
                        <p>
                        La selección del número ganador se externaliza , mientras que la tecnología blockchain garantiza el registro y trazabilidad de todas las transacciones
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-6 mb-30">
                    <div className="feature-card hover--effect-1">
                      <div className="feature-card__icon">
                        <Image src={feature_3} alt="image" />
                      </div>
                      <div className="feature-card__content">
                        <h3 className="feature-title">Blockchain</h3>
                        <p>
                        La plataforma opera en la red de Binance Smart Chain, lo que permite una interacción rápida y eficiente con contratos y transacciones, ofreciendo una experiencia fluida a los usuarios
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mb-30 mt-lg-5">
                <div className="row mb-none-30">
                  <div className="col-lg-12 col-md-6 mb-30">
                    <div className="feature-card hover--effect-1">
                      <div className="feature-card__icon">
                        <Image src={feature_2} alt="image" />
                      </div>
                      <div className="feature-card__content">
                        <h3 className="feature-title">Seguridad</h3>
                        <p>
                        Los dólares del premio están ligados al contrato inteligente, nadie tiene acceso a ellos. Únicamente se liberan al número NFT ganador, el cual es congruente con el resultado de la lotería
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-6 mb-30">
                    <div className="feature-card hover--effect-1">
                      <div className="feature-card__icon">
                        <Image src={feature_4} alt="image" />
                      </div>
                      <div className="feature-card__content">
                        <h3 className="feature-title">soporte</h3>
                        <p>
                        Brindamos soporte continuo las 24 horas del día para resolver cualquier consulta o inconveniente que los usuarios puedan tener

                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 order-lg-2 order-1 text-lg-start text-center">
            <div className="section-header">
              {/* <span className="section-sub-title">An Exhaustive list of</span> */}
              <h2 className="section-title">NUestras Fortalezas</h2>
              {/* <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                pretium, elit quis vehicula interdum, sem metus iaculis sapien,
                sed bibendum lectus augue eu metus.
              </p> */}
              {/* <a
                href="#0"
                className="d-flex align-items-center mt-3 justify-content-lg-start justify-content-center"
              >
                Show all features
                <i className="las la-angle-double-right text-danger"></i>
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
