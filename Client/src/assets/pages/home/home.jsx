import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import MapSection from '../../components/section/Map/MapSection';
import ImageGallery from '../../components/section/ImageGallery';
import GenderViolence from '../../components/section/GenderViolence';
import ToxicRelationship from '../../components/section/ToxicRelationship';
import Organizations from '../../components/section/Organizations/Organizations';

function Home() {
    return (
        <div className="container-home">
            <header>
                <Header />
            </header>
            <section className="main-section">
                <MapSection />
                <ImageGallery />
                <GenderViolence />
                <ToxicRelationship />
                <Organizations />
            </section>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default Home;