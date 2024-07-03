import { useLoaderData } from "react-router-dom";

import EventsList from "../components/EventsList";

function EventsPage() {
  const fetchedData = useLoaderData();

  return <EventsList events={fetchedData} />;
}

export default EventsPage;

export async function loader() {
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
    //...incorrect response
  } else {
    const resData = await response.json();
    return resData.events;
  }
}
