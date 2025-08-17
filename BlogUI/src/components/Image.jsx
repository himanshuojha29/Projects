import React, { useState, useEffect } from "react";

const imageCache = new Set();

const Image = React.memo(({ src, alt, className }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (imageCache.has(src) || sessionStorage.getItem(`img_cached_${src}`)) {
      setIsLoading(false);
    }
  }, [src]);

  const handleLoad = () => {
    setIsLoading(false);
    imageCache.add(src);
    sessionStorage.setItem(`img_cached_${src}`, "true");
  };

  return (
    <div
      className={`relative w-full h-full flex items-center justify-center dark:bg-gray-700 bg-gray-300 ${className}`}
    >
      {isLoading && (
        <div className="flex items-center justify-center animate-pulse w-full h-full bg-gray-300 rounded-sm sm:w-96 dark:bg-gray-700">
          <svg
            className="w-full h-48 text-gray-200 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
          >
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
          </svg>
        </div>
      )}

      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover rounded-sm ${
          isLoading ? "hidden" : "block"
        }`}
        onLoad={handleLoad}
      />
    </div>
  );
});

export default Image;