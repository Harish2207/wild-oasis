import { useQuery } from "@tanstack/react-query";
import { getBooking } from "../../services/apiBookings";
import { useParams } from "react-router-dom";

export function useBooking() {



  const {bookingId} = useParams(); // getting the id of the booking

  const {
    isLoading,
    data: booking,
    error,
  } = useQuery({
    queryKey: ["booking",bookingId], //uniquely identifies the data we are going to query,
    queryFn: ()=>getBooking(bookingId),retry:false //must return a promisr
  });

  return { isLoading, error, booking };
}
