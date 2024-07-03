import { useParams } from "react-router-dom";

function EventDetailPage() {
  const params = useParams();
  console.log(params);
  return (
    <>
      <h1>Event Detail Page</h1>
      <h2>Current Event: {params.eventId}</h2>
    </>
  );
}

export default EventDetailPage;
