import Modal from "../../components/Modal/Modal";

import ModalUseStateTemplate from "./templates/ModalUseStateTemplate";
import ModalUseReducerTemplate from "./templates/ModalUseReducerTemplate";

export default {
  title: "components/Modal",
  component: Modal,
};

export const ModalUseStateStory = ModalUseStateTemplate.bind({});
ModalUseStateStory.args = {
  modalWidth: "40%",
  modalHeight: "30%",
  modalBackgroundColor: "#ffffff",
  isModalCloseIcon: true,
  extendedModalStyle: {
    fontSize: "2rem",
    color: "#020202",
  },
  backgroundBgColor: "#000000",
  backgroundOpacity: 0.6,
};

export const ModalUseReducerStory = ModalUseReducerTemplate.bind({});
ModalUseReducerStory.args = {
  modalWidth: "40%",
  modalHeight: "40%",
  modalBackgroundColor: "#ffffff",
  isModalCloseIcon: true,
  extendedModalStyle: {
    fontSize: "2rem",
    color: "#020202",
  },
  backgroundBgColor: "#000000",
  backgroundOpacity: 0.6,
};
