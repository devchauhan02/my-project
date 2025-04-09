const Shimmer = () => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {Array(8)
          .fill("")
          .map((_, i) => (
            <div
              key={i}
              className="h-48 rounded-lg bg-gray-200 animate-pulse shadow-md"
            >
              <div className="h-full w-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer bg-[length:200%_100%] rounded-lg" />
            </div>
          ))}
      </div>
    );
  };
  
  export default Shimmer;
  