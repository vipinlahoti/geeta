import { useState } from "react";
import { Modal } from "./Modal";

export const ModalTrigger = (props: any) => {
  let [modalIsOpen, setModalIsOpen] = useState(false);
  const { trigger, children, title, modalProps } = props;

  const clickHandler = (event: any) => {
    event.preventDefault();
    openModal();
  };

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const triggerComponent = <span onClick={clickHandler}>{trigger}</span>;

  return (
    <div className="modal-trigger">
      {triggerComponent}
      <Modal
        show={modalIsOpen}
        onHide={closeModal}
        title={title}
        {...modalProps}
      >
        {children}
      </Modal>
    </div>
  );
};
