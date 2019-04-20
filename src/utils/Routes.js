const apiURL = process.env.REACT_APP_API_URL;

// index
export const startHeroku = `${apiURL}/`; //GET
export const contact = `${apiURL}/contact`; //POST
//users
export const loginToken = `${apiURL}/users/loginTokenGenerate`; //GET
export const protectedRoute = `${apiURL}/users/protected`; //GET with auth
//resources
export const allResources = `${apiURL}/resources`; //GET with auth
export const viewResource = `${apiURL}/resources/view/`; //GET with auth
export const filterResource = `${apiURL}/resources`; //POST with auth
export const likeResource = `${apiURL}/resources/like/`; //GET with auth
export const commentResource = `${apiURL}/resources/comment/`; //POST with auth
export const addResource = `${apiURL}/resources/add`; //POST with admin auth
export const getResourceBeforeUpdate = `${apiURL}/resources/update/`; //GET with admin auth
export const updateResource = `${apiURL}/resources/update/`; //POST with admin auth
export const deleteResource = `${apiURL}/resources/delete/`; //GET with admin auth
//blogs
export const allBlogs = `${apiURL}/blogs`; //GET with auth
export const viewBlog = `${apiURL}/blogs/view/`; //GET with auth
export const filterBlog = `${apiURL}/blogs`; //POST with auth
export const likeBlog = `${apiURL}/blogs/like/`; //GET with auth
export const commentBlog = `${apiURL}/blogs/comment/`; //POST with auth
export const addBlog = `${apiURL}/blogs/add`; //POST with admin auth
export const getBlogBeforeUpdate = `${apiURL}/blogs/update/`; //GET with admin auth
export const updateBlog = `${apiURL}/blogs/update/`; //POST with admin auth
export const deleteBlog = `${apiURL}/blogs/delete/`; //GET with admin auth
//contest
export const ongoingContest = `${apiURL}/contest/ongoing`; //GET
export const upcomingContest = `${apiURL}/contest/upcoming`; //GET
//admin
export const messages = `${apiURL}/admin/messages`; //GET with admin auth
export const users = `${apiURL}/admin/users`; //GET with admin auth
