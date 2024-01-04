import React from 'react';

function badge(color) {
  const badgeClass = "badge filter rounded-4 bg-" + color;
  const badge = React.createElement("span", { className: badgeClass });
  
  return badge;
}

function ProductBadge(props) {
  const colors = props.colors;

  return (
    React.createElement(React.Fragment, null,
      React.createElement("div", null, colors.map(color => badge(color)))
    )
  );
}

export default ProductBadge;