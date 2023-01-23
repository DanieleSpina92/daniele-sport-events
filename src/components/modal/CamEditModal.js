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

export default function CamEditModal({
  labelModal,
  scheduledStartDate,
  scheduledEndDate,
  callbackEditCam,
  camId
}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [startData, setStartData] = useState();
  const [endData, setEndData] = useState();

  function editCam() {
    const cam = {
      camId:camId,
      scheduledStartDate: startData.replace("Z", " ").replace("T", " "),
      scheduledEndDate: endData.replace("Z", " ").replace("T", " "),
    };
    callbackEditCam(cam);
  }
    return (
      <div style={{border: '1px solid #8FBC8F',  borderRadius: '5px'}}>
        <Button onClick={handleOpen}>{labelModal}</Button>
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

            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <FormControl fullWidth>
                <InputLabel htmlFor="filled-adornment-amount">
                  Schedule Start Data
                </InputLabel>
                <FilledInput
                  onChange={(e) => setStartData(e.target.value)}
                  type="datetime-local"
                  id="filled-adornment-amount"
                  defaultValue={scheduledStartDate}
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
                  Schedule End Data
                </InputLabel>
                <FilledInput
                  onChange={(e) => setEndData(e.target.value)}
                  type="datetime-local"
                  id="filled-adornment-amount"
                  defaultValue={scheduledEndDate}
                  style={{
                    backgroundColor: "white",
                    margin: "20px",
                    marginRight: "55px",
                    marginBottom: "55px",
                  }}
                />
              </FormControl>

              <Button style={{ textAlign: "center" }} onClick={editCam}>
                Apply
              </Button>
            </Typography>
          </Box>
        </Modal>
      </div>
    );
  
}
