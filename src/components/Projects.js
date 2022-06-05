// Import Assets
import uniswap from '../assets/uniswap.png';
import compound from '../assets/compound.png';
import aave from '../assets/aave.png';
import portfolioSite from '../assets/sal.png';

const Projects = () => {
    return (
        <section className="projects">
            <h2>My Projects</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3>Sentiment Analysis</h3>
                    <img src={portfolioSite} alt="Uniswap Swap Page" />
                    <p>Created a Web App for Sentimental Analysis which predicts whether the tweet refers to a Positive,
Negative, Neutral Sentiment.

                    </p>

                    <a href="https://sentiment-analysis-logistic.herokuapp.com/polls/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/PrajwalMasulkar/Sentiment-Analysis-heroku" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>Compound</h3>
                    <img src={compound} alt="Compound Landing Page" />
                    <p>
                    </p>

                    <a href="https://compound.finance/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/compound-finance/compound-protocol" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>Aave</h3>
                    <img src={aave} alt="Aave Landing Page" />
                    <p>
                    </p>

                    <a href="https://aave.com/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/aave/aave-v3-core" target="_blank" className="button">Code</a>
                </div>
            </div>
        </section>
    );
}

export default Projects;