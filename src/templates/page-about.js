import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from "gatsby";
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import Img from "gatsby-image";
import { valor }  from "../tool/funciones"

export const DefaultNosotrosTemplate = ({
 title, content, contentComponent
}) => {
  const PageContent = contentComponent || Content

  return (
    <React.Fragment>
              <PageContent className="content " content={content} />

              <StaticQuery
                query={graphql`
                  query {
allCockpitTotalstopfire(filter: {cockpitId: {eq: "5c6465253262630c69000101"}, lang: {eq: "es"}}) {
  edges {
    node {
      contenido {
        value {
          parsed
        }
      }
    }
  }
}
}
                `}
                render={data => (
                  <div className="widget-social-links">

                    {data.allCockpitTotalstopfire.edges.map((items, i) => {
                      return(
                       <React.Fragment>
                       <div className="title">{items.node.contenido.value.parsed[1]["name"]}</div>
                       <div className="text" dangerouslySetInnerHTML={{ __html: items.node.contenido.value.parsed[1]["settings"]["html"] }} />
<br/>
                       <div className="title">{items.node.contenido.value.parsed[2]["name"]}</div>
                       <div className="text" dangerouslySetInnerHTML={{ __html: items.node.contenido.value.parsed[2]["settings"]["html"] }} />
<br/>
<div className="title">{items.node.contenido.value.parsed[3]["name"]}</div>
<div className="text" dangerouslySetInnerHTML={{ __html: items.node.contenido.value.parsed[3]["settings"]["html"] }} />


<br/>
<div className="title">{items.node.contenido.value.parsed[4]["name"]}</div>


{items.node.contenido.value.parsed[4]["settings"]["contenido"].map((item, i) => {
  return (
    <React.Fragment>

<br/>
<div className="subtitle">{item["value"]["titulo"]}</div>
<div className="text" dangerouslySetInnerHTML={{ __html: item["value"]["descripcion"] }} />
</React.Fragment>
  );
})}
                        </React.Fragment>
                      );
                    })}
                  </div>
                )}
              />

    </React.Fragment>
  )
}


DefaultNosotrosTemplate.propTypes = {
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  title: PropTypes.string.isRequired,
}

const DefaultNosotros = ({ data }) => {
  const { cockpitPaginas: post } = data

  return (
    <Layout titulo={valor(post,"titulo")}>
      <DefaultNosotrosTemplate
        contentComponent={HTMLContent}
        title={valor(post,"titulo")}
        content={valor(post,"contenido")}
      />
    </Layout>
  )
}


DefaultNosotros.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}


export default DefaultNosotros

export const DefaultNosotrosQuery = graphql`
  query DefaultNosotros($id: String!) {
    cockpitPaginas(id: { eq: $id }) {
      id
      titulo {
        value
      }
      contenido {
         value
       }


  }
  }
`
