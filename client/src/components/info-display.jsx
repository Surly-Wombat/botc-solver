import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

export default function InfoDisplay({ id, night, summary }) {
    const [show, setShow] = useState(false);

    function handleDelete() {
        // Handle delete
        setShow(false);
    }

    return (
        <>
            <tr>
                <td>{night}</td>
                <td>{summary}</td>
                <td><FontAwesomeIcon icon={faTrashCan} onClick={() => setShow(true)} /></td>
            </tr>

            <Modal show={show} onHide={() => setShow(false)} centered animation={false}>
                <Modal.Body>Are you sure you want to delete the info "{summary}"?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShow(false)}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={handleDelete}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}