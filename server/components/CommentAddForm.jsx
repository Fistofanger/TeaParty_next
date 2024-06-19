const React = require('react')

function CommentAddForm({ teaData }) {
    return (
        <form
            action="/api/comments/add"
            method="POST"
            className="CommentAddForm flex"
            data-teaid={teaData.id}
        >
            <input
                type="text"
                placeholder="Your comment"
                name="commentText"
                required
                minlength="2"
            />
            <button type="submit">Add comment</button>
        </form>
    )
}

module.exports = CommentAddForm
