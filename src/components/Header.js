// Import Assets
import profile from '../assets/profile.png';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="Prajwal Masulkar" />

            <div className='header__content'>
                <h2>Hi, I'm Prajwal Masulkar</h2>
                <p><small><small>B.Tech in Data Science and AI | Clubhead of Ciphercell at IIITNR | Exploring web3</small></small></p>
                <a href="mailto:prajwalmasulkar10@email.com" className='button'>Get In Touch</a>
            </div>
        </section>
    );
}

export default Header;