import { Divider } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  editAllScheduleCam,
  editAllStatusCam,
  getEventsCamByEvent,
} from "../../utils/Manager";
import CamElement from "./CamElement";
import { editCam } from "../../utils/Manager";
import CamEditAllStatusModal from "../modal/CamEditAllStatusModal";
import CamEditModal from "../modal/CamEditModal";
import { useParams } from "react-router-dom";

const CamContainer = () => {

  let { eventID } = useParams();
  console.log('id da paramentro: ' , eventID);
  const [listCam, setListCam] = useState(getEventsCamByEvent(eventID)[0].camList);
  const [active, setActive] = useState();

  function editCurrentCam(cam) {
    setListCam(editCam(eventID, cam));
    setActive(Math.random);
  }

  useEffect(() => {}, [listCam]);

  return (
    <div>
      <div className="App" style={{ fontSize: "30px", textAlign: "center" }}>
        <Divider>
          {getEventsCamByEvent(eventID)[0].camList[0].eventName}
        </Divider>
        <div>
          <CamEditModal
            callbackEditCam={editAllScheduleCam}
            labelModal="Edit All Schedule Cam"
          />
          <br />
          <CamEditAllStatusModal
            callbackEditStausCam={editAllStatusCam}
            labelModal="Edit All Status Cam"
          />
          <br />
        </div>
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