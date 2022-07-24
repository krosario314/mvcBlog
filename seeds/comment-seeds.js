const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 5,
        comment_text: "That's actually really cool!"
    },
    {
        user_id: 4,
        post_id: 4,
        comment_text: "Wow, amazing work! congrats!!"
    },
    {
        user_id: 1,
        post_id: 4,
        comment_text: "I greatly appreciated my team, great job!"
    },
    {
        user_id: 3,
        post_id: 5,
        comment_text: "we met goal for this week! WOOHOO!"
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "This is great news!"
    },
    {
        user_id: 3,
        post_id: 4,
        comment_text: "Keep up the good work!"
    },
    {
        user_id: 5,
        post_id: 3,
        comment_text: "How can I access the resources used?"
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "Nice tool!"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;