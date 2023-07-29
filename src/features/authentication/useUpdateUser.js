import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { updateCurrentUser } from "../../services/apiAuth";

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: ({user}) => {
      toast.success("User account successfully updated");
      queryClient.setQueryData(["user"],user) //Manual updating of cache to force new avatar image update
      queryClient.invalidateQueries({ queryKey: ["user"] }); // forces refetch of data
      // resets if the form submission was a success
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { updateUser, isUpdating };
}
