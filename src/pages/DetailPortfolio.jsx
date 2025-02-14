import { useParams, Navigate } from "react-router-dom";
import '../styles/DetailPortfolio.css';
import { portfolioList } from '../data/DataPortfolio';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

function DetailPortfolio() {
    const { id } = useParams();
    const data = portfolioList.find((item) => item.id === id);
    
    if (!data) {
        return <Navigate to='/page-not-found' />;
    }

    return (
        <>
            <Navbar />
            <section id="detail-portfolio">
                <div className="wrapper">
                    <h1>{data.title}</h1>
                    <img src={data.image} alt="Main project" />

                    {/* Looping untuk menampilkan gambar khusus dari portfolioList */}
                    {data.phoneImages.map((img, index) => (
                        <img key={index} src={img} alt={`Preview ${index + 1}`} />
                    ))}

                    <p className="skill"><b>Skills:</b> {data.skill}</p>
                </div>
            </section>
            <Footer />
            <ScrollToTop />
        </>
    );
}

export default DetailPortfolio;
