import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Cardsdata from "./CardsData";
import { useState } from "react";
import "./style.css";
function Cards() {
  const [data, setData] = useState(Cardsdata);
  // console.log(data);
  return (
    <div className="container mt-3  ">
      <h2 className="text-center">Nepson Mart🛒</h2>
      <div className="row d-flex justify-content-center align-items-center">
        {data.map((element, id) => {
          return (
            <>
              <Card
                style={{ width: "22rem", border: "none" }}
                className="mx-2 mt-4 card_style"
              >
                <Card.Img
                  variant="top"
                  src={element.imgdata}
                  style={{ height: "16rem" }}
                  className="mt-3"
                />
                <Card.Body>
                  <Card.Title>{element.rname}</Card.Title>
                  <Card.Text>Price: {element.price}</Card.Text>
                  <div className="button_div d-flex justify-content-center">
                    <Button variant="primary" className="col-lg-12">
                      Add to Cart
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Cards;
