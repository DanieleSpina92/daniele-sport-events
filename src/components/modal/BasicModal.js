import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { FilledInput, FormControl, InputLabel } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({
  callbackAddEvent,
  labelModal,
  isSimpleModal,
  message
}) {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [id, setId] = useState("");
  const [eventName, setEventName] = React.useState("");
  const [eventData, setEventData] = useState();

  function addnewEvent() {
    const newEvent = {
      id: id,
      eventName: eventName,
      eventData: eventData.replace("Z", " ").replace("T", " "),
    };
    callbackAddEvent(newEvent);
  }

  return (
    <div>
      <Button onClick={handleOpen}>
        {labelModal}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            style={{ textAlign: "center" }}
            id="modal-modal-title"
            variant="h6"
            component="h1"
          >
            {labelModal}
          </Typography>
          {isSimpleModal ? (
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {message}
              <Button style={{ textAlign: "center" }} onClick={addnewEvent}>
                OK
              </Button>
            </Typography>
            
          ) : (
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <FormControl fullWidth>
                <InputLabel htmlFor="filled-adornment-amount">
                  Event Id
                </InputLabel>
                <FilledInput
                  onChange={(e) => setId(e.target.value)}
                  id="filled-adornment-amount"
                  style={{
                    backgroundColor: "white",
                    margin: "20px",
                    marginRight: "55px",
                    marginBottom: "55px",
                  }}
                />
              </FormControl>
              <FormControl fullWidth>
                <InputLabel htmlFor="filled-adornment-amount">
                  Event Name
                </InputLabel>
                <FilledInput
                  onChange={(e) => setEventName(e.target.value)}
                  id="filled-adornment-amount"
                  style={{
                    backgroundColor: "white",
                    margin: "20px",
                    marginRight: "55px",
                    marginBottom: "55px",
                  }}
                />
              </FormControl>
              <FormControl fullWidth>
                <InputLabel htmlFor="filled-adornment-amount">
                  Event Data
                </InputLabel>
                <FilledInput
                  onChange={(e) => setEventData(e.target.value)}
                  type="datetime-local"
                  id="filled-adornment-amount"
                  style={{
                    backgroundColor: "white",
                    margin: "20px",
                    marginRight: "55px",
                    marginBottom: "55px",
                  }}
                />
              </FormControl>
              <Button style={{ textAlign: "center" }} onClick={addnewEvent}>
                Add event
              </Button>
            </Typography>
          )}
        </Box>
      </Modal>
    </div>
  );
}
