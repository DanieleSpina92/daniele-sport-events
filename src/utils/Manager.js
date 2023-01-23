import events from '../data/events.json'
import eventsCam from '../data/eventsCam.json'

const eventJson = events.data
const eventCamJson = eventsCam.data

export function getEvents() {
    return eventJson
}

export function addEvent(newEvent) {
    eventJson.push(newEvent)
    return eventJson 
}

export function getEventsCamByEvent(eventId) {
    return eventCamJson.filter( element => element.eventId ==eventId)
}

export function getEventCamByEventAndCamID(eventId, camId) {
    return eventCamJson.filter( element => element.eventId ==eventId)[0].camList.filter( element => element.camId ==camId)
   }

export function editCam(eventId, cam) {
   const a = eventCamJson.filter( element => element.eventId ==eventId)[0].camList
   const currentCam = getEventCamByEventAndCamID(eventId, cam.camId)
   const newValue = {
    "camId":1,
    "status":"Pending",
    "driverName":"Driver name cam1 modificato",
    "serviceKey":333,
    "camName":"Cam name cam1 di 456",
    "scheduledStartDate":"2023-12-12 20:30",
    "scheduledEndDate":"2023-12-12 20:30",
    "forceStartDate":"2023-12-12 20:30",
    "forceEndDate":"2023-12-12 23:30",
    "eventName": "Spagna F1",
    "eventData":"2023-12-12 20:30"
   }
   currentCam[0] = newValue
   console.log('modificato: ', a[cam.camId]);
   return eventCamJson 
}

export function editAllStatusCam(eventId, status) {
    eventCamJson.filter( element => element.eventId ==eventId)[0].camList.forEach((cam) => {
        cam.status =status
    });
   return eventCamJson.filter( element => element.eventId ==123)[0].camList
}

export function editAllScheduleCam(eventId, scheduledStartDate, scheduledEndDate) {
    eventCamJson.filter( element => element.eventId ==eventId)[0].camList.forEach((cam) => {
        cam.scheduledStartDate = scheduledStartDate
        cam.scheduledEndDate = scheduledEndDate
    });
    return eventCamJson.filter( element => element.eventId ==123)[0].camList
}