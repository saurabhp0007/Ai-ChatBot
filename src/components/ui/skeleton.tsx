import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted bg-gradient-to-r from-blue-200  to-blue-500", className)}
      {...props}
    />
  )
}

export { Skeleton }
