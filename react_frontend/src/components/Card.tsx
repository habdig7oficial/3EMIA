import { Card, Button } from "react-bootstrap";

interface props {
  title: string;
  subtitle: string;
  img: string;
}

export default function MyCard({ title, subtitle, img }: props) {
  return (
    <>
      <Card className="m-3" style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body className="d-flex flex-column align-items-center justify-content-center">
          <Card.Title className="text-center">{title}</Card.Title>
          <Card.Text className="text-justify">{subtitle}</Card.Text>
          <Button variant="primary">Descubra já</Button>
        </Card.Body>
      </Card>
    </>
  );
}
