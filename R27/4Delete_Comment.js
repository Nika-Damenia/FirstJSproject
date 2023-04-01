//  4. კომენტარის წაშლა

let userIsAdmin = false;
let userIsModerator = false;
let userIsCommentAuthor = true;

const userCanDelete = userIsAdmin || userIsModerator || userIsCommentAuthor;

console.log(userCanDelete);