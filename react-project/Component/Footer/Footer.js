import React, {Component} from 'react';
import './Footer.css';

class Footer extends Component {
    render() {
        const urlCompany = 'https://nutnet.ru';
        const nameCompany = 'Nutnet';

        return (
            <footer className="footer">
                <div className="container h-100">
                    <div className="row h-100 justify-content-between align-items-center">
                        <div className="col-12 text-center">
                            <div className="footer__text">Сделано в <a href={urlCompany} target='_blank'  rel='noopener noreferrer' >{nameCompany}</a>, 2018
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
    )
    }
}

export default Footer;
