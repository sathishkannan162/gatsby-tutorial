import * as React from "react";
// import { graphql, useStaticQuery } from "gatsby";

const Seo = ({ title }) => {
  // const siteData = useStaticQuery(graphql`
  //   query MyQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `);
  return (
    <title>
      {title} {/* | {siteData.site.siteMetadata.title} */}
    </title>
  );
};

export default Seo;