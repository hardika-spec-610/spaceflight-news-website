import { useEffect, useState } from "react";
import SingleArticle from "./SingleArticle";
import { ArticleInterface } from "../Component/ArticleInterface";
import "../Component/styles.css";
import { Row, Col } from "react-bootstrap";

const Homepage = () => {
  const [articles, setArticles] = useState<ArticleInterface[]>([]);

  useEffect(() => {
    getArticles();
  }, []);

  const getArticles = async () => {
    try {
      let response = await fetch(
        "https://api.spaceflightnewsapi.net/v3/articles"
      );
      if (response.ok) {
        const articles = await response.json();
        console.log("articles", articles);
        setArticles(articles);
      } else {
        console.log("There is something wrong with API fetch.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1 className="my-4 text-center "> Spaceflight News Articles</h1>
      <Row>
        <Col xs={12} sm={12} md={8} lg={8}>
          {articles.map((article, i) => (
            <SingleArticle key={i} article={article}></SingleArticle>
          ))}
        </Col>
        <Col xs={12} sm={12} md={4} lg={4}>
          <div className="trending-btn">
            <a href="#trending">Trending Videos</a>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Homepage;
