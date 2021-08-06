import React from "react";
import { Route } from "react-router-dom";

const RouteWithLayout = (props) => {
  const { minimal, layout: Layout, component: Component, ...rest } = props;

  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <Layout minimal={minimal}>
          <Component {...matchProps} />
        </Layout>
      )}
    />
  );
};

export default RouteWithLayout;
