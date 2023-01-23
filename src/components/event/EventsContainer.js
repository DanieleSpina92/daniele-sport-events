import React, { useEffect, useState } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";
import { addEvent } from "../../utils/Manager";
import BasicModal from "../modal/BasicModal";

export default function EventsContainer({ lista }) {
  const [listEvents, setListEvents] = useState(lista);
  const [active, setActive] = useState();

  function addnewEvent(newEvent) {
    setListEvents(addEvent(newEvent));
    // setListEvents((old)=> {
    //   var newEvent = addEvent()
    //   return [...newEvent]
    // });
    setActive(Math.random);
  }

  useEffect(() => {}, [listEvents]);

  return (
    <div>
      <div className="App" style={{ fontSize: "30px", textAlign: "center" }}>
        <Divider>Events List</Divider>
      </div>
      <BasicModal 
        callbackAddEvent={addnewEvent} 
        labelModal="Add New Event"
      />
      {listEvents.map((el, index) => {
        return (
          <Card
            style={{
              backgroundColor: "#f5fffa",
              marginBottom: "25px",
              fontWeight: "bold",
            }}
            sx={{ display: "flex" }}
            key={index}
          >
            <CardActionArea href="#">
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="h5">
                  {el.eventName}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  {el.id} - {el.eventData}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        );
      })}
    </div>
  );
}
