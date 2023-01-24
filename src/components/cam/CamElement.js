import React from "react";
import { Card, TextField, Grid, Typography, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import BasicModal from "../modal/BasicModal";
import CamEditModal from "../modal/CamEditModal";

const CamElement = ({ camElement, editCamCallback }) => {
  function editCam(cam) {
    editCamCallback(cam);
  }
  const [status, setStatus] = React.useState(camElement.status);

  function getColorStatus(status) {
    switch (status) {
      case "Start":
        return "Green";
      case "Stop":
        return "#8B0000";
      default:
        return "blue";
    }
  }

  return (
    <>
      <Card
        style={{
          backgroundColor: "#F8F8F8",
          marginBottom: "25px",
          fontWeight: "bold",
          border: `1px solid ${getColorStatus(status)}`,
        }}
        sx={{ display: "flex" }}
        s
      >
        <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12}>
            <Typography
              paragraph
              style={{
                fontWeight: "bold",
                color: "white",
                textDecoration: "underline",
                backgroundColor: getColorStatus(status),
              }}
            >
              CAM {camElement.camId}: {camElement.camName}
            </Typography>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 2, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                fullWidth
                id="outlined-read-only-input"
                label="Drive Name"
                variant="standard"
                defaultValue={camElement.driverName}
                InputProps={{
                  readOnly: true,
                }}
              />
              <TextField
                fullWidth
                id="outlined-read-only-input"
                label="Service Key"
                variant="standard"
                defaultValue={camElement.serviceKey}
                InputProps={{
                  readOnly: true,
                }}
              />

              <TextField
                fullWidth
                id="outlined-read-only-input"
                label="Schedule Start"
                variant="standard"
                defaultValue={camElement.scheduledStartDate}
                InputProps={{
                  readOnly: true,
                }}
              />
              <TextField
                id="outlined-read-only-input"
                label="Schedule End"
                variant="standard"
                defaultValue={camElement.scheduledEndDate}
                InputProps={{
                  readOnly: true                  
                }}    
                  
              />
              <div style={{display: 'flex', marginLeft: '486px'}}>
              <CamEditModal
                callbackEditCam={editCam}
                labelModal="Edit Cam"
                scheduledStartDate={camElement.scheduledStartDate}
                scheduledEndDate={camElement.scheduledEndDate}
                camId={camElement.camId}
              />
              <BasicModal
                labelModal="Force Start Schedule"
                isSimpleModal={true}
                message="Do you want to proceed with Starting the scheduler? Press OK to continue."
              />
              <BasicModal
                labelModal="Force Stop Schedule"
                isSimpleModal={true}
                message="Do you want to proceed with Stopping the scheduler? Press OK to continue."
              />
              
              </div>
            </Box>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default CamElement;
