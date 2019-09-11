import { useEffect } from 'react';
import { AllPosts } from '../components';
import loadFonts from '../lib/utils/fontLoader';

const Home = () => {
  useEffect(() => {
    loadFonts();
  }, []);

   return <AllPosts />;
};

export default Home;
