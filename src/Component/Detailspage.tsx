import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ArticleInterface } from "../Component/ArticleInterface";
import { Row, Col, Card } from "react-bootstrap";

const Detailspage = () => {
  const [details, setDetails] = useState<ArticleInterface | null>(null);
  const params = useParams<{ id: string }>();
  console.log("PARAMS ARE: ", params);

  const getDetails = async () => {
    try {
      let response = await fetch(
        `https://api.spaceflightnewsapi.net/v3/articles/${params.id}`
      );
      if (response.ok) {
        const details = await response.json();
        console.log("details", details);
        setDetails(details);
      } else {
        console.log("There is something wrong in fetching API data");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.id]);

  return (
    <>
      <h3 className="my-4 ">{details?.title}</h3>
      <Row className="row-cursor">
        <Col xs={12} sm={12} md={4} lg={4}>
          <Card.Img
            src={details?.imageUrl}
            alt={details?.title}
            width="200px"
            height="100%"
          />
        </Col>
        <Col xs={12} sm={12} md={8} lg={8}>
          <Card.Body className="px-0">
            <Card.Text> {details?.summary}</Card.Text>
            <Card.Text> Details From: {details?.newsSite}</Card.Text>
            <Card.Text>
              Published On: {details?.publishedAt.slice(0, 10)}
            </Card.Text>
            <Card.Text>
              To visit the website, click here:{" "}
              <a href={details?.url} rel="noreferrer" target="_blank">
                Details
              </a>
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </>
  );
};
export default Detailspage;
