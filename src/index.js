import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from "react-helmet";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Helmet
      title={'breadcounter'}
      meta={[
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: `@taro_osg` },
        { name: 'twitter:creator', content: `@taro_osg` },
        { name: 'twitter:title', content: 'breadcounter' },
        { name: 'twitter:image', content: 'https://breadcounter.netlify.app/banner.png' },
        { property: 'og:image', content: 'https://breadcounter.netlify.app/banner.png' },
        { property: 'og:title', content: 'breadcounter' },
        { property: 'og:type', content: 'website' },
        { property: 'og:description', content: 'breadcounter' },
        { property: 'og:url', content: 'https://breadcounter.netlify.app/' },
      ]}
    />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.register();
