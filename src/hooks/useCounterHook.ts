import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'

const COUNTER_KEY = 'counter'

export function useCounter() {
  const queryClient = useQueryClient()
  
  const { data: count = 0 } = useQuery({
    queryKey: [COUNTER_KEY],
    queryFn: () => Promise.resolve(0), // Initial value
  })

  const incrementMutation = useMutation({
    mutationFn: (amount: number) => Promise.resolve(count + amount),
    onSuccess: (newCount) => {
      queryClient.setQueryData([COUNTER_KEY], newCount)
    },
  })

  const decrementMutation = useMutation({
    mutationFn: (amount: number) => Promise.resolve(count - amount),
    onSuccess: (newCount) => {
      queryClient.setQueryData([COUNTER_KEY], newCount)
    },
  })

  return {
    count,
    increment: () => incrementMutation.mutate(1),
    decrement: () => decrementMutation.mutate(1)
  }
}