import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
function Modals() {
    const [show, setShow] = useState(false);

    return (
        <>
            <Button variant="dark" onClick={() => setShow(true)}>
                Modals
            </Button>

            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="Cart-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="Cart-custom-modal-styling-title">Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>
             
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Modals;