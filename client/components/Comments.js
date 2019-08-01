import React, {Component} from 'react';

class Comments extends Component {

    constructor(props) {
        super(props)

        this.renderComment = this.renderComment.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    //create a render function when it doesn't make sense to create a separate component
    renderComment(comment, i) {
        return (
            <div className="comment">
                <p>
                    <strong>{comment.user}</strong>
                    {comment.text}
                    <button className="remove-comment" onClick={this.props.removeComment.bind(null, this.props.params.postId, i)}>&times;</button>
                </p>
            </div>
        )
    }

    handleSubmit(e) {
        e.preventDefault();
        
        const { postId } = this.props.params;

        const author = this.refs.author.value;
        const comment = this.refs.comment.value;

        //Call the actionCreator to dispatch action to the reducer
        this.props.addComment(postId, author, comment);
        //Clear the form
        this.refs.commentForm.reset();
    }

    render() {
        if (this.props.postComments.length === 5) {
            // Simulate a JS error
            throw new Error('I crashed!');
          }
        return (
            <div className="comments">

                {this.props.postComments.map(this.renderComment)}

                <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
                    <input type="text" ref="author" placeholder="author" />
                    <input type="text" ref="comment" placeholder="comment" />
                    <input type="submit" hidden />
                </form>
            </div>
        )
    }
}

export default Comments;