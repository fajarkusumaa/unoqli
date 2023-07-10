import { SkeletonLoader } from "next-skeleton-loader";

const ArticleLoader = () => (
  <div className="flex flex-col justify-between mb-2 h-[350px]">
    <div className="relative h-64">
      <SkeletonLoader height="100%" />
    </div>
    <button className="p-2 bg-gray-800 text-white hover:bg-gray-950 rounded-xl top-0 right-0 absolute">
      <SkeletonLoader width="24px" height="24px" />
    </button>
    <p className="mt-2 text-base font-semibold line-clamp-2 overflow-hidden">
      <SkeletonLoader />
    </p>
    <p className="mt-auto font-semibold text-rose-700 text-xl">
      <SkeletonLoader width="60%" />
    </p>
  </div>
);

export default ArticleLoader;
