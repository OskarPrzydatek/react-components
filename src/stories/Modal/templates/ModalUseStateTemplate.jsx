import React from "react";

import Modal from "../../../components/Modal/Modal";

const ModalUseStateTemplate = (args) => {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <div>
      <button onClick={() => setShowModal(true)}>Show Modal</button>
      <Modal
        {...args}
        showModal={showModal}
        hideModal={() => setShowModal(false)}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p>Modal content</p>
        </div>
      </Modal>
    </div>
  );
};

export default ModalUseStateTemplate;