import React from "react";

import "./Modal.css";

import useHexToRgb from "./hooks/useHexToRgb";

export default function Modal({
  modalWidth,
  modalHeight,
  modalBackgroundColor,
  isModalCloseIcon,
  modalCloseIcon,
  extendedModalStyle,
  backgroundBgColor,
  backgroundOpacity,
  showModal,
  hideModal,
  children,
}) {
  const [r, g, b] = useHexToRgb(backgroundBgColor);

  const modalStyle = {
    ...extendedModalStyle,
    width: modalWidth,
    height: modalHeight,
    backgroundColor: modalBackgroundColor,
  };

  const modalBGStyle = {
    backgroundColor: `rgba(${r}, ${g}, ${b}, ${backgroundOpacity})`,
  };

  return (
    <>
      {showModal && (
        <>
          <div style={modalStyle} className="modal">
            <button className="modal__close-button" onClick={hideModal}>
              {modalCloseIcon ? (
                modalCloseIcon
              ) : (
                <>
                  {isModalCloseIcon && (
                    <span className="modal__close-icon--default">X</span>
                  )}
                </>
              )}
            </button>
            {children}
          </div>
          <div style={modalBGStyle} className="modal-bg" onClick={hideModal} />
        </>
      )}
    </>
  );
}
