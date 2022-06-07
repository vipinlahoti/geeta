import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Modal } from "./Modal";

export const ModalTrigger = (props: any) => {
  let [modalIsOpen, setModalIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { trigger, children, title, modalProps } = props;

  const clickHandler = (event: any) => {
    event.preventDefault();
    openModal();
  };

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  useEffect(() => {
    if (modalIsOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  });

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  const triggerComponent = <span onClick={clickHandler}>{trigger}</span>;

  const modal = (
    <Modal show={modalIsOpen} onHide={closeModal} title={title} {...modalProps}>
      {children}
    </Modal>
  );

  return mounted ? (
    <>
      {triggerComponent}
      {createPortal(modal, document.body)}
    </>
  ) : null;
};
