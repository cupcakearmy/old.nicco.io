import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import './index.styl'

//@ts-ignore
const _paq = window._paq || [];
_paq.push(['trackPageView']);
_paq.push(['enableLinkTracking']);
(function () {
    var u = "//stats.nicco.io/";
    _paq.push(['setTrackerUrl', u + 'p_unicorns']);
    _paq.push(['setSiteId', '1']);
    var d = document, g = d.createElement('script'), s = d.getElementsByTagName('script')[0];
    g.type = 'text/javascript'; g.async = true; g.defer = true; g.src = u + 'j_unicorns'; s.parentNode.insertBefore(g, s);
})();

ReactDOM.render(<App />, document.getElementById('root'))