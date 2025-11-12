import React from "react";
import { FaShareAlt, FaStar, FaEye, FaRegBookmark } from "react-icons/fa";

const NewsCard = ({ news }) => {
    const {
        title,
        author,
        rating,
        total_view,
        details,
        thumbnail_url,
        tags,
    } = news;

    return (
        <div className="card bg-base-100 shadow-md  overflow-hidden">
            {/* Header */}
            <div className="flex bg-base-200 items-center justify-between p-4">
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={author?.img} alt={author?.name} />
                        </div>
                    </div>
                    <div>
                        <h3 className="font-semibold">{author?.name}</h3>
                        <p className="text-sm text-gray-500">
                            {new Date(author?.published_date).toDateString()}
                        </p>
                    </div>
                </div>
                <div className="flex gap-1 items-center">
                    <FaRegBookmark></FaRegBookmark>
                    <FaShareAlt className="text-gray-600 text-xl cursor-pointer hover:text-primary transition" />
                </div>
            </div>

            {/* Title */}
            <div className="px-4 mt-2">
                <h2 className="text-lg font-bold leading-snug mb-2">
                    {title}
                </h2>
            </div>

            {/* Image */}
            <figure className="px-4">
                <img
                    src={thumbnail_url}
                    alt={title}
                    className="rounded-xl w-full object-cover"
                />
            </figure>

            {/* Details */}
            <div className="px-4 py-3 text-sm text-gray-600">
                {details.length > 200 ? (
                    <>
                        {details.slice(0, 200)}...
                        <span className="text-primary font-semibold cursor-pointer">
                            Read More
                        </span>
                    </>
                ) : (
                    details
                )}
            </div>

            {/* Tags */}
            <div className="px-4 pb-2 flex flex-wrap gap-2">
                {tags.map((tag, idx) => (
                    <div
                        key={idx}
                        className="badge badge-outline badge-primary lowercase"
                    >
                        #{tag}
                    </div>
                ))}
            </div>

            {/* Footer */}
            <div className="card-actions justify-between items-center px-4 py-3 border-t">
                <div className="flex items-center gap-2 text-orange-400">
                    {[...Array(rating.number)].map((_, i) => (
                        <FaStar key={i} />
                    ))}
                    <span className="text-gray-600 font-medium">
                        {rating.number.toFixed(1)}
                    </span>
                </div>

                <div className="flex items-center text-gray-500 text-sm gap-1">
                    <FaEye />
                    <span>{total_view}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
