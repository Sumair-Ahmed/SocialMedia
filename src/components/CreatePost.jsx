import { useContext } from "react";
import { Form, redirect } from "react-router-dom";
import { PostList } from "../store/post-list-store";
const CreatePost = () => {
  return (
    <Form method="POST" className="create-post">
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Enter Your User ID here
        </label>
        <input
          name="userId"
          type="text"
          className="form-control"
          id="userId"
          placeholder="Your User Id"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          name="postTitle"
          type="text"
          className="form-control"
          id="title"
          placeholder="How are you feeling today..."
        />
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          name="postBody"
          rows="4"
          type="text"
          className="form-control"
          id="body"
          placeholder="Tell us more about it."
        />
      </div>

      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Number of reactions
        </label>
        <input
          name="reactions"
          type="text"
          className="form-control"
          id="reactions"
          placeholder="How many people reacted to this post"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter your hastags here
        </label>
        <input
          name="tags"
          type="text"
          className="form-control"
          id="tags"
          placeholder="Please enter tags using space"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </Form>
  );
};

export async function HandleSubmition(data) {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");

  console.log("here is a Data", postData);

  // addPost(
  //   postData.userId,
  //   postData.postTitle,
  //   postData.postBody,
  //   postData.reactions,
  //   tags
  // );

  return redirect("/");
}

export default CreatePost;
