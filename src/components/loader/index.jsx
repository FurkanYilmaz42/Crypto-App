import { LoaderCircle } from "lucide-react"

const Loader = ({designs}) => {
  return (
    <div className={`flex items-center justify-center ${designs} my-[200px]`}>
      <LoaderCircle className="animate-spin text-blue-500 size-8"/>
    </div>
  )
}

export default Loader