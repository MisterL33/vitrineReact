import React, { Component } from 'react';
import logoNautix from '../images/vague-02.png';
import logoTaupe from '../images/logo.png';
import pointeur from '../images/doigt.png';
import laurent from '../images/laurent.jpg';
import Modal from 'react-modal';
import taupePresentation from '../images/taupedefensevitrine.png'

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };
  Modal.setAppElement('#root')  

class Home extends Component {

    state = {
        email: '',
        message: '',
        modalIsOpen: false,
    }


    openModal = () => {
        this.setState({modalIsOpen: true});
      }
    
      afterOpenModal = () => {
        // references are now sync'd and can be accessed.
        //this.subtitle.style.color = '#f00';
      }
    
      closeModal = () => {
        this.setState({modalIsOpen: false});
      }
    

    componentDidMount() {
        this.callBackendAPI()
            .then(res => console.log('api ok'))
            .catch(err => console.log(err));
    }

    callBackendAPI = async () => {
        const response = await fetch('http://localhost:5000/express_backend');
        const body = await response.json();

        if (response.status !== 200) {
            throw Error(body.message)
        }
        return body;
    };

    handleSendMail = async () => {
        const mail = { mail: { "address": this.state.email, "message": this.state.message } }
        const res = await fetch('http://localhost:5000/send', {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(mail)
        }).then((res) => res.json() // Transformation de la Promise en objet json
            .then((data) => {
                console.log(data)
            })
        )
    }


    handleChangeMail = (e) => {
        this.setState({ email: e.target.value })
    }

    handleChangeMessage = (e) => {
        this.setState({ message: e.target.value })
    }

    render() {
        return (
            <>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Presentation taupedefense"
        >
        <div style={{height:"100%", textAlign:"center"}}>
        <img src={taupePresentation} height="90%" width="100%" alt="taupe presentation" />
        <button style={{height:"10%"}} onClick={this.closeModal}>Fermer</button>
        </div>
        </Modal>
                <section id="two" className="wrapper style1 special">
                    <div className="inner">
                        <div className="flex flex-4">
                            <div className="box person">
                                <div className="image round">
                                    <img alt='profilePic' src={laurent} height={160} />
                                </div>
                                <h3>Julienne Laurent</h3>
                                <p>Développeur Web FullStack</p>
                            </div>
                            <div className="box detail">
                                <h3>Bonjour !</h3>
                                <p>Je me présente, Julienne Laurent, développeur web actuellement en master 2 et en alternance chez <a target="__blank" className="blankLink" href="https://www.europeansourcing.com/">EuropeanSourcing</a></p>
                                <p>Ce portfolio recense mes réalisations ainsi que mon parcours, je suis en ce moment à la recherche de <b>nouveaux clients pour débuter mon activité en auto-entrepreneur </b>, n'hesitez pas à me contacter pour tous projet web ou mobile, je ferai en sorte de vous répondre au plus vite avec directement un devis si vous le souhaitez.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="one" className="wrapper">
                    <header>
                        <h2>Mon parcours</h2>
                    </header>
                    <div className="inner">
                        <div className="flex flex-4">
                            <article>
                                <header>
                                    <h3>BTS SIO</h3>
                                </header>
                                <p>Brevet de technicien supérieur où j'ai à débuté la programmation et surtout l'art de fournir des services informatiques adaptés aux organisations</p>
                                <footer>
                                    <a target="_blank" rel="noopener noreferrer" href="http://www.onisep.fr/Ressources/Univers-Formation/Formations/Post-bac/BTS-Services-informatiques-aux-organisations-option-B-solutions-logicielles-et-applications-metiers" className="button special">En savoir plus</a>
                                </footer>
                            </article>
                            <article>
                                <header>
                                    <h3>Ingésup - Bachelor 3</h3>
                                </header>
                                <p>Je suis admis à l'école d'ingenieur Ingésup, j'y vois une opportunité de me spécialisé en développement et d'accumuler de l'expérience professionnel.
                                    <br /> <br />Je fais d'ailleurs un stage de 6 mois chez Happy Capital en tant que développeur FullStack Symfony 2.8</p>
                                <footer>
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.ingesup.com/formation/bachelor-en-informatique/" className="button special">En savoir plus</a>
                                </footer>
                            </article>
                            <article>
                                <header>
                                    <h3>Ingésup - Master 1</h3>
                                </header>
                                <p>Je choisi en master 1 de me spécialiser en développement web, j'apprends donc les dernières technlogies utilisés dans le domaine (react/angular) et les bonnes pratiques tout en étant en stage alterné chez Lovelydays pendant 6 mois sur du symfony3</p>
                                <footer>
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.ingesup.com/formation/bachelor-en-informatique/" className="button special">En savoir plus</a>
                                </footer>
                            </article>
                            <article>
                                <header>
                                    <h3>Ingésup - Master 2</h3>
                                </header>
                                <p>Actuellement en master 2, j'ai atteint un niveau me permettant de faire de la gestion de projet et je cherche donc actuellement à débuter en tant qu'auto-entrepreneur</p>
                                <footer>
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.ingesup.com/formation/bachelor-en-informatique/" className="button special">En savoir plus</a>
                                </footer>
                            </article>
                        </div>
                    </div>
                </section>

                <section id="three" className="wrapper special">
                    <div className="inner">
                        <header className="align-center">
                            <h2>Mes réalisations</h2>
                        </header>
                        <div className="flex flex-2">
                            <article>
                                <div>
                                    <img src={logoNautix} height={80} width={60} alt="Nautix" />
                                </div>
                                <header>
                                    <h3>Nautix : Trouvez des spots de ride</h3>
                                </header>
                                <p>Nautix est une application mobile actuellement en ligne sur le playstore, avec celle-ci, on peut voir les spots de kitesurf/windsurf de la région selon leur fréquentation : chacun peut dire sur quel spot il va le jour même ou les jours d'après, ce qui donne une idée de la fréquentation des spots avant d'y aller, et donc de ne pas faire de voyage dans le vide.</p>
                                <footer>
                                    <img alt='pointeur' className="pointeur" src={pointeur} height={50} />
                                    <a target="__blank" href="https://play.google.com/store/apps/details?id=com.nautix&hl=fr" className="button special">En savoir plus</a>
                                </footer>
                            </article>
                            <article>
                                <div>
                                    <img alt='taupe' src={logoTaupe} height={80} width={60} />
                                </div>
                                <header>
                                    <h3>TaupeDefense</h3>
                                </header>
                                <p>TaupeDefense est un projet scolaire créer lors de l'année de M2, c'est un petit jeu de tape-taupe en ligne avec plusieurs participants possible, le challenge pour ce projet était que l'on avais que 10 jours de cours pour le mener à bien. </p>
                                <footer>
                                    <img alt='pointeur' className="pointeur" src={pointeur} height={50} />
                                    <a onClick={this.openModal} className="button special">En savoir plus</a>
                                </footer>
                            </article>
                        </div>
                    </div>
                </section>

                <section id="contactForm" className="wrapper">
                    <div className="inner contact">
                        <div class="background">
                            <div class="container">
                                <div class="screen">
                                    <div class="screen-header">
                                        <div class="screen-header-left">
                                            <div class="screen-header-button close"></div>
                                            <div class="screen-header-button maximize"></div>
                                            <div class="screen-header-button minimize"></div>
                                        </div>
                                        <div class="screen-header-right">
                                            <div class="screen-header-ellipsis"></div>
                                            <div class="screen-header-ellipsis"></div>
                                            <div class="screen-header-ellipsis"></div>
                                        </div>
                                    </div>
                                    <div class="screen-body">
                                        <div class="screen-body-item left">
                                            <div class="app-title">
                                                <span>Me contacter</span>
                                            </div>
                                        </div>
                                        <div class="screen-body-item">
                                            <div class="app-form">

                                                <div class="app-form-group">
                                                    <input onChange={(event) => this.handleChangeMail(event)} value={this.state.email} class="app-form-control" placeholder="EMAIL" />
                                                </div>

                                                <div class="app-form-group message">
                                                    <textarea onChange={(event) => this.handleChangeMessage(event)} value={this.state.message} class="app-form-control area" placeholder="MESSAGE" />
                                                </div>
                                                <div class="app-form-group buttons">
                                                    <button onClick={() => this.handleSendMail()} class="app-form-button">Envoyer</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </>
        );
    }
}

export default Home;
