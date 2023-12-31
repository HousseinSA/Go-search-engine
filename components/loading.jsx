import ContentLoader from "react-content-loader"

const Loading = ({ type }) => {
  return (
    <main className="pt-4 w-full">
      {type === "web" ? (
        <div className="flex flex-col p-4 space-y-4 ">
          {[1, 2, 3, 4, 5].map((item) => (
            <ContentLoader id="id-1" key={item} height={60}>
              <rect x="0" y="0" rx="3" ry="3" width="80%" height="20" />
              <rect x="" y="30" rx="3" ry="3" width="80%" height="20" />
            </ContentLoader>
          ))}
        </div>
      ) : (
        <div className="grid p-4 justify-center items-center grid-cols-1 w-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {[...Array(20)].map((page, index) => (
            <div
              key={`loader-${type}-${index}`}
              className="flex justify-center w-full items-center"
              style={{ width: "100%" }}
            >
              <ContentLoader
                id={`loader-${type}-${index}`}
                className="flex justify-center"
              >
                <rect
                  x="0"
                  y="0"
                  className="w-full"
                  rx="3"
                  ry="3"
                  width="200"
                  height="200"
                />
              </ContentLoader>
            </div>
          ))}
        </div>
      )}
    </main>
  )
}

export default Loading
