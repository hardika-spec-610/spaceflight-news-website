import { Row, Col, Card } from "react-bootstrap";
import { ArticleInterface } from "../Component/ArticleInterface";
import { Link } from "react-router-dom";

interface SingleArticleProps {
  article: ArticleInterface;
  aricleID: number;
}

const SingleArticle = (props: SingleArticleProps) => {
  return (
    <>
      <hr />
      <Link to={"/details/" + props.aricleID} className="link-color">
        <Row className="row-cursor">
          <Col xs={12} sm={12} md={4} lg={4}>
            <Card.Img
              src={props.article.imageUrl}
              width="200px"
              height="100%"
            />
          </Col>
          <Col xs={12} sm={12} md={8} lg={8}>
            <Card.Body className="px-0">
              <Card.Title>{props.article.title} </Card.Title>

              <Card.Text> {props.article.summary}</Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Link>
    </>
  );
};
export default SingleArticle;
