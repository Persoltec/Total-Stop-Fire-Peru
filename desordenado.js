  
 {titulo && (
    <section class="section">
    <div class="container">
  <div className="columns">
  <div className="column is-3">
        sssssssssss
  </div>
        <div className="column is-9">
        {children}
        </div>
        </div> 
         </div>
        </section> 
)}

{!titulo && (
 
        {children}
        
)}

  <React.Fragment>
                {alert(JSON.stringify(items, null, 4))}


  <StaticQuery
                  query={graphql`
                    query {
                      personal: file(relativePath: { eq: "personal.png" }) {
                        childImageSharp {
                          sizes(maxWidth: 400) {
                            ...GatsbyImageSharpSizes_tracedSVG
                          }
                        }
                      }
                    }
                  `}
                  render={data => (
                    <Img
                      style={{ width: "160px", margin: "0 auto" }}
                      sizes={data.personal.childImageSharp.sizes}
                    />
                  )}
                />

