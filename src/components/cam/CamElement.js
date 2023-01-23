import React from "react";
import {
  Card,
  TextField,
  Divider,
  FormControlLabel,
  Grid,
  Radio,
} from "@mui/material";
import { Box } from "@mui/system";
import BasicModal from "../modal/BasicModal";
import CamEditModal from "../modal/CamEditModal";

const CamElement = ({ camElement, editCamCallback }) => {
  
  function editCam(cam) {
    editCamCallback(cam);
  }

  return (
    <>
      <Card
        style={{
          backgroundColor: "#f5fffa",
          marginBottom: "25px",
          fontWeight: "bold",
          border: "1px solid grey",
        }}
        sx={{ display: "flex" }}
      >
        <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <div style={{ marginLeft: "30px" }}>
                <p
                  style={{
                    fontSize: "19px",
                    fontWeight: "bold",
                    textDecoration: "underline",
                    textAlign: "left",
                  }}
                >
                  Generic Info
                </p>
              </div>

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
                id="outlined-read-only-input"
                label="Cam Name"
                variant="standard"
                defaultValue={camElement.camName}
                InputProps={{
                  readOnly: true,
                }}
              />

              <TextField
                id="outlined-read-only-input"
                label="Service Key"
                variant="standard"
                defaultValue={camElement.serviceKey}
                InputProps={{
                  readOnly: true,
                }}
              />

              <TextField
                id="outlined-read-only-input"
                label="Event Data"
                variant="standard"
                s
                defaultValue={camElement.eventData}
                InputProps={{
                  readOnly: true,
                }}
              />
              <FormControlLabel
                control={
                  <Radio
                    style={{
                      color: camElement.status === "Pending" ? "red" : "yellow",
                    }}
                  />
                }
                label="Status"
              />
            </Box>
          </Grid>

          <Divider orientation="vertical" flexItem>
            <CamEditModal
              callbackEditCam={editCam}
              labelModal="Edit Cam"
              scheduledStartDate={camElement.scheduledStartDate}
              scheduledEndDate={camElement.scheduledEndDate}
              camId={camElement.camId}
            />
          </Divider>

          <Grid item xs={5}>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "21ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <div style={{ marginLeft: "153px", marginBottom: "10px" }}>
                <p
                  style={{
                    fontSize: "19px",
                    fontWeight: "bold",
                    textDecoration: "underline",
                    textAlign: "left",
                  }}
                >
                  Schedule Info
                </p>
              </div>

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
                  readOnly: true,
                }}
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
            </Box>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default CamElement;
