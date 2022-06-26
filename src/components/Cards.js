import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
function Cards() {
  return (
    <div className="container mt-3  ">
      <h2 className="text-center">Nepson Mart🛒</h2>
      <div className="row">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Cards;
