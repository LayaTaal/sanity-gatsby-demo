import React from "react";
import { graphql } from "gatsby";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";
import Layout from "../containers/layout";

const PageTemplate = props => {
  const { errors } = props;
  return (
    <Layout>
      {errors && <SEO title="GraphQL Error" />}
      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}
      This is a page!
    </Layout>
  );
};

export default PageTemplate;
