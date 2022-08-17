import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
<script dangerouslySetInnerHTML={{
__html: `
(function(){
	// /photoshop/uxp/2022/any -> /photoshop/uxp/v2/any
	const url = new URL(location);
	const yearVersionPattern = /^\/photoshop\/uxp\/202([0-9])/; 
	let { pathname } = url;
	if(yearVersionPattern.test(pathname)){
		url.pathname = pathname.replace(yearVersionPattern, '/photoshop/uxp/v$1');
		location.assign(url);
	}
})();
`, }} />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
