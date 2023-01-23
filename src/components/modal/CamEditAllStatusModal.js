import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

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

export default function CamEditAllStatusModal({
  labelModal,
  callbackEditStatusCam,
}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [status, setStatus] = React.useState("");

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  function editStatusCam() {
    callbackEditStatusCam(status);
  }
  return (
    <div style={{ border: "1px solid #8FBC8F", borderRadius: "5px" }}>
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
              <InputLabel>Status</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                value={status}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value="Start">Start</MenuItem>
                <MenuItem value="Stop">Stop</MenuItem>
                <MenuItem value="Pending">Pending</MenuItem>
              </Select>
            </FormControl>
            <Button style={{ textAlign: "center" }} onClick={editStatusCam}>
              Apply
            </Button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
