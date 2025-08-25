import Banner from './components/Banner';
import Header from './components/Header';
import MovieSection from './components/MovieSection';
import Newsletter from './components/NewsLetter';
import Footer from './Footer';

function App() {

  return (
 <>
 <Header />
 <Banner src="./banner Desktop.png" alt="Banner" />
 <MovieSection />
 <Banner src="./combo.png"  alt="combo" />
 <Newsletter />
<Footer />
 
 </>
  );
};

export default App;
