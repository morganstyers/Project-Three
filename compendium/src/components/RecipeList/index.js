import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";

// Exporting both DataList and DataListItem from this file

// DataList renders a bootstrap list item
export function DataList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

// DataListItem renders a bootstrap list item containing data from the recipe api call
export function DataListItem({
  thumbnail = "https://placehold.it/300x300",
  title,
  ingredients,
  href
}) {
  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="xs-4 sm-2">
            <Thumbnail src={thumbnail} />
          </Col>
          <Col size="xs-8 sm-9">
            <h3>{title}</h3>
            <p>Ingredients: {ingredients}</p>
            <a rel="noreferrer noopener" target="_blank" href={href}>
              Go to recipe!
            </a>
          </Col>
        </Row>
      </Container>
    </li>
  );
}
