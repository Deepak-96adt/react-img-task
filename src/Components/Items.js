// import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { MyVerticallyCenteredModal } from './Model';
import { useState } from 'react';

export function Items({ currentItems }) {
  const [modalShow, setModalShow] = useState(false);
  const [cardId, setCardId] = useState();

  const handleCard=(id)=>{
    setCardId(id);
    setModalShow(true);
  }

    return (
      <> <div className="row">
            {currentItems && currentItems.map((row, i) => (
                <div className="m-2 col-sm-3" key={i}  >
                <Link style={{width:"100",height:"150",textDecoration:"none"}} onClick={() =>handleCard(row.id)}>
                    <div key={i} >
                    <div className="card">
                        <div id='cardd' className="card-body">
                        <img src={row.image} alt={row.title} style={{ width: '100px', height: '100px' }} />
                        <h5 className="card-title">{row.title.split(' ').slice(0,2).join(' ')}</h5>
                        </div>
                    </div>
                    </div>
                </Link>
                </div>
                
            ))}
             {modalShow && <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    id={cardId}
                    data={currentItems}
              />}
        </div>
      </>
    );
  }

