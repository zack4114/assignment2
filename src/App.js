import './App.css';
import ListingSection from './Components/listing-section';
import TNCSection from './Components/tnc-section';
import Footer from './Components/footer.js';
import Header from './Components/header.js';
import { CONTACT_INFO, LIST_SECTION_DATA, TNC_DATA, FOOTER_DATA, HEADER_DATA, COLLETION_SECTION_DATA } from './constants';
import ContactDetails from './Components/contact-details';
import CollectionSection from './Components/collection-section';

function App() {
  return (
    <div className="App">
      <Header data={HEADER_DATA}/>
      <ListingSection data={LIST_SECTION_DATA}/>
      <CollectionSection data={COLLETION_SECTION_DATA}/>
      <TNCSection data={TNC_DATA}/>
      <ContactDetails data={CONTACT_INFO}/>
      <Footer data={FOOTER_DATA}/>
    </div>
  );
}

export default App;
