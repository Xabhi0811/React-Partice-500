import { useState } from "react";
export default function Q416() {
  const [comments, setComments] = useState([{
    id: 1,
    text: "Root",
    replies: [{
      id: 2,
      text: "Reply"
    }]
  }]);
  const update = () => setComments(list => list.map(comment => ({
    ...comment,
    replies: comment.replies.map(reply => ({
      ...reply,
      text: `${reply.text}!`
    }))
  })));
  return <div><button onClick={update}>Update nested reply</button><output>{comments[0].replies[0].text}</output></div>;
}
