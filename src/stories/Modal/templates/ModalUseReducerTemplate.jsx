import React from "react";

import Modal from "../../../components/Modal/Modal";

const initState = {
  x: 1,
  showModal: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "SHOW_MODAL":
      return {
        ...state,
        showModal: true,
      };
    case "HIDE_MODAL":
      return {
        ...state,
        showModal: false,
      };
    case "INCREMENT_X":
      return { ...state, x: state.x + 1 };
    case "DECREMENT_X":
      return { ...state, x: state.x - 1 };
    default:
      throw new Error("Invalid reducer action");
  }
}

const ModalUseReducerTemplate = (args) => {
  const [state, dispatch] = React.useReducer(reducer, initState);

  return (
    <div>
      <button onClick={() => dispatch({ type: "SHOW_MODAL" })}>
        Show Modal
      </button>
      <Modal
        {...args}
        showModal={state.showModal}
        hideModal={() => dispatch({ type: "HIDE_MODAL" })}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p>Modal x value: {state.x}</p>
          <div>
            <button onClick={() => dispatch({ type: "INCREMENT_X" })}>+</button>
            <button onClick={() => dispatch({ type: "DECREMENT_X" })}>-</button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ModalUseReducerTemplate;
