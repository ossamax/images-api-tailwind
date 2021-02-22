import React from "react";

export default function imagesCard({image}) {
  return (
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={image.webformatURL} alt="" className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2 ">
          Photo By {image.user}
        </div>
        <ul>
          <li>
            <strong>Views : </strong>
            {image.views}
          </li>
          <li>
            <strong>Downloads : </strong>
            {image.downloads}
          </li>
          <li>
            <strong>likes : </strong>
            {image.likes}
          </li>
        </ul>
        <div className="px-6 py-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #tag1
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #tag2
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #tag3
          </span>
        </div>
      </div>
    </div>
  );
}
