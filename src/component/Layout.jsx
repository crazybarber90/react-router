import React from "react";

function Layout({ title, children }) {
  //children mora da se destrukturira , dolazi gde god wrapujemo sa <Layout><Layout/>
  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <div className="col-8 offset-2">
            <h1 className="text-center mb-5">{title}</h1>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
