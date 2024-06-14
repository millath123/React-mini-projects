import React, { useState } from 'react';
import image from './image_post.png'; 

const Post = () => {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([
   
  ]);
  const [newComment, setNewComment] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleComment = (e) => {
    e.preventDefault();
    if (newComment) {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4">
        <div className="mb-2">
          <img src={image} alt="Post" className="w-full h-64 object-cover"/>
        </div>
        <div className="flex justify-between items-center mb-4">
          <div className="flex space-x-4">
            <button onClick={handleLike} className="flex items-center space-x-2 text-red-500">
              <span>❤️</span>
              <span>{likes}</span>
            </button>
            <button className="flex items-center space-x-2 text-blue-500">
              <span>🔄</span>
              <span>Share</span>
            </button>
          </div>
          <span onClick={() => setShowModal(true)} className="cursor-pointer">{comments.length} comments</span>
        </div>
        <div className="mt-4">
          <form onSubmit={handleComment} className="flex space-x-2">
            <input 
              type="text" 
              value={newComment} 
              onChange={(e) => setNewComment(e.target.value)} 
              className="flex-1 px-4 py-2 border rounded-lg"
              placeholder="Add a comment..." 
            />
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg">Post</button>
          </form>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Comments</h2>
              <button onClick={() => setShowModal(false)} className="text-red-500">Close</button>
            </div>
            <div className="space-y-2">
              {comments.map((comment, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <span className="font-semibold">User:</span>
                  <span>{comment}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Post;
