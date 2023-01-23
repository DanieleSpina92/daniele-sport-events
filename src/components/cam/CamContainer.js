import { Divider } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  editAllScheduleCam,
  editAllStatusCam,
  getEventById,
  getEventsCamByEvent,
} from "../../utils/Manager";
import CamElement from "./CamElement";
import { editCam } from "../../utils/Manager";
import CamEditAllStatusModal from "../modal/CamEditAllStatusModal";
import CamEditModal from "../modal/CamEditModal";
import { useParams } from "react-router-dom";

const CamContainer = () => {
  let { eventID } = useParams();

  const [listCam, setListCam] = useState(
    getEventsCamByEvent(eventID)[0].camList
  );
  const [active, setActive] = useState();

  function editCurrentCam(cam) {
    setListCam(editCam(eventID, cam));
    setActive(Math.random);
  }

  function editStatusAllCam(status) {
    setListCam(editAllStatusCam(eventID, status));
    setActive(Math.random);
  }

  function editAllSchedule(cam) {
    setListCam(
      editAllScheduleCam(eventID, cam.scheduledStartDate, cam.scheduledEndDate)
    );
    setActive(Math.random);
  }

  useEffect(() => {}, [listCam]);

  return (
    <div>
      <div className="App" style={{ fontSize: "30px", textAlign: "center" }}>
        <Divider>
          {getEventById(eventID)[0].eventName} -{" "}
          {getEventById(eventID)[0].eventData}
        </Divider>
        <br /> <br />
        <div>
          <CamEditModal
            callbackEditCam={editAllSchedule}
            labelModal="Edit All Schedule Cam"
          />
          <br />
          <CamEditAllStatusModal
            callbackEditStatusCam={editStatusAllCam}
            labelModal="Edit All Status Cam"
          />
          <br />
        </div>
        <br />
        {listCam.map((camElement, index) => {
          return (
            <CamElement
              key={index}
              camElement={camElement}
              editCamCallback={editCurrentCam}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CamContainer;
