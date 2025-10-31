
const Error = ({message , refetch}) => {
  return (
    <div className="flex flex-col items-center mt-60 gap-5">
      <h1 className="text-red-500">Uzgunuz bir sorun olustu</h1>
      
      <h2 className="font-semibold text-red-400">{message}</h2>
    
      <button className="mt-5 py-2 px-4 border hover:bg-zinc-200/20 transition rounded" onClick={refetch}>Tekrar dene</button>
    </div>
  )
}

export default Error