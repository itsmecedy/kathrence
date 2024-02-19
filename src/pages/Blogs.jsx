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
    <div className="wrapper ">
      <div className="mx-auto py-8 test">
        <h2 className="text-3xl font-bold mb-4">Latest Video Reviews</h2>
        {videoReviews.map((review) => (
          <div key={review.id} className="mb-8 test">
            <h3 className="text-xl font-bold mb-2">{review.title}</h3>
            <p className="text-gray-600 mb-2">{review.date}</p>
            <div className="relative h-0" style={{ paddingTop: "56.25%" }}>
              <iframe
                title={review.title}
                src={review.videoUrl}
                className="absolute top-0 left-0 w-full h-full"
                frameBorder="0"
                allowFullScreen
              />
            </div>
          </div>
        ))}
      </div>
      {/* TODO:
                might change it to blogs & || reviews. blogs sounds like focuses on content 
                make video work in different platforms tiktok facebook yt insta etc.
                

                */}
    </div>
  );
}
