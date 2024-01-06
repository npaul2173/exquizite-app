export function TopicView() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <div className="relative h-16 w-16 rounded-full bg-gray-200">
          {/* <img src={iconPath} alt={title} className="w-6 h-6 mx-auto" /> */}
          {/* We need to allow some image to be used */}
        </div>
        <p className="mt-2 text-center text-sm font-medium text-gray-600">
          {"title"}
        </p>
      </div>
    </div>
  );
}
