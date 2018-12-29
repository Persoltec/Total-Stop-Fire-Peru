import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'

export default class IndexPage extends React.Component {
  render() {
 
    return (
      <Layout>
        <section className="section">
          <div className="container">
            
              <h1 className="has-text-weight-bold is-size-2">Latest Stories</h1>
             
           
                
             
          </div>
        </section>
      </Layout>
    )
  }
}