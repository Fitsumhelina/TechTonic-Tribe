const Blog = require('./../models/Blog.js');
const User = require('./../models/User.js');

const getAllBlogs = async (req, res, next) => {
  let blogs;
  try {
    blogs = await Blog.find().populate("user");
  } catch (error) {
    console.log(error);
  }
  if (!blogs) {
    return res.status(404).json({ message: "No Blog Found!" });
  }
  return res.status(200).json({ blogs });
};

const addBlog = async (req, res, next) => {
  const { title, content, image, user } = req.body;

  let existingUser;
  try {
    existingUser = await User.findById(user);
  } catch (error) {
    return console.log(error);
  }
  if (!existingUser) {
    return res.status(400).json({ message: "Unable to Find user by this Id" });
  }

  const blog = new Blog({
    title,
    content,
    image,
    user,
  });
  try {
    await blog.save();
    existingUser.blogs.push(blog);
    await existingUser.save();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error });
  }
  return res.status(200).json({ blog });
};

const updateBlog = async (req, res, next) => {
  const { title, content, image } = req.body;
  const blogId = req.params.id;

  let blog;
  try {
    blog = await Blog.findByIdAndUpdate(blogId, {
      title,
      content,
      image,
    });
  } catch (error) {
    return console.log(error);
  }
  if (!blog) {
    return res.status(500).json({ message: "Unable to update Blog" });
  }
  return res.status(200).json({ blog });
};

const getBlogById = async (req, res, next) => {
  const id = req.params.id;

  let blog;
  try {
    blog = await Blog.findById(id);
  } catch (error) {
    return console.log(error);
  }
  if (!blog) {
    return res.status(404).json({ message: "No blog found!" });
  }
  return res.status(200).json({ blog });
};

const deleteBlog = async (req, res, next) => {
  let blog;
  try {
    // Find the blog by ID and populate the 'user' field
    blog = await Blog.findByIdAndRemove(req.params.id).populate("user");

    // If blog is not found, return an error response
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    // Remove the deleted blog from the user's blogs array
    const user = await User.findById(blog.user._id);
    user.blogs.pull(blog);
    await user.save();
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Unable to delete blog" });
  }

  // If everything is successful, send a success response
  return res.status(200).json({ message: "Blog deleted successfully" });
};


const getUserById = async (req, res, next) => {
  let userBlogs;
  try {
    userBlogs = await User.findById(req.params.id).populate("blogs");
  } catch (error) {
    console.log(error);
  }
  if (!userBlogs) {
    return res.status(400).json({ message: "No blogs found!" });
  }
  return res.status(200).json({ user: userBlogs });
};

module.exports = {
  getAllBlogs,
  addBlog,
  updateBlog,
  getBlogById,
  deleteBlog,
  getUserById,
};
