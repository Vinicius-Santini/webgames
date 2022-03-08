import '../styles/base.sass';
import { storeWrapper } from '../redux/store';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header></Header>
      <Component {...pageProps} />
      <Footer></Footer>
    </>
  );
}

export default storeWrapper.withRedux(MyApp);
