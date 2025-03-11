import React from "react";

export default function Blogs() {
  const videoReviews = [
    {
      id: 1,
      title: "Customer Review: Best Cat Litter Ever!",
      videoUrl: "https://www.youtube.com/embed/DLzxrzFCyOs",
      date: "February 15, 2024",
    },
    {
      id: 2,
      title: "Unboxing: Kathrence Cat Litter",
      videoUrl: "https://www.youtube.com/embed/DLzxrzFCyOs",
      date: "February 10, 2024",
    },
    // Add more video reviews as needed
  ];

  return (
    <div className="mt-20">
      <div className="wrapper">
        <div className="mx-auto py-8">
          <h2 className="mb-4 text-3xl font-bold">Latest Video Reviews</h2>
          {videoReviews.map((review) => (
            <div key={review.id} className="mb-8">
              <h3 className="mb-2 text-xl font-bold">{review.title}</h3>
              <p className="mb-2 text-gray-600">{review.date}</p>
              <div className="relative h-0" style={{ paddingTop: "56.25%" }}>
                <iframe
                  title={review.title}
                  src={review.videoUrl}
                  className="absolute left-0 top-0 h-full w-full"
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
