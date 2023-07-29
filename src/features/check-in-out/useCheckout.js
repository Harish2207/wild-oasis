/* eslint-disable no-unused-vars */
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import { toast } from "react-hot-toast";


export function useCheckout() {
  const queryClient = useQueryClient();


  const { mutate: checkout, isLoading: isCheckingOut } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: "checked-out",
      }),

    onSuccess: (data) => {
      // data is return from updatebooking,i.e. the mutation function
      toast.success(`Booking #${data.id} successfully checked out`);
      queryClient.invalidateQueries({ active: true }); //invalidates all queries that are active on the page
    },

    onError: () => toast.error(`There was an error while checking out`),
  });

  return { checkout, isCheckingOut };
}
