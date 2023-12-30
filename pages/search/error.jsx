const Error = () => {
  function getReload() {
    window.location.reload()
  }
  return (
    <div className="flex flex-col justify-center items-center space-y-4 pt-14 ">
      <h1 className="text-3xl">Something went wrong</h1>
      <button className="text-blue-500" onClick={getReload}>
        Try again
      </button>
    </div>
  )
} 

export default Error
