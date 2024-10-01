import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export function MyVerticallyCenteredModal(props) {
    const [toggle,setToggle]=useState(false);
    const [cardData , setCardData] = useState([]);

    useEffect(()=>{
            var card = props.data.filter((val,i)=>props.id===val.id);
            if (card.length>0) {
                setToggle(true);
                setCardData(card);
            }
        },[props]);

  return (
   <>
   {toggle &&  <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
        <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {cardData[0].title}
        </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <img src={cardData[0].image} width={200} height={200} alt={cardData[0].title} /><br/>
            <br/>
            <strong>Category : </strong><span>{cardData[0].category}</span><br/>
            <strong>Description : </strong><span>{cardData[0].description}</span><br/>
            <strong>Price : </strong><span>{cardData[0].price}</span><br/>
            <strong>Category : </strong><span>{cardData[0].category}</span><br/>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
    </Modal>}
   </>
  );
}


