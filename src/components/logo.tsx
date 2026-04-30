import { BookOpen } from "lucide-react"

const logo = ({className}: {className?: string}) => {
  return (
    <div className={`rounded-md bg-primary flex items-center justify-center ${className}`}>
      <BookOpen className="text-white size-1/2" />
    </div>
  )
}

export default logo
