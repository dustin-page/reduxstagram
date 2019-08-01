import React, {Component} from 'react';

import Photo from './Photo';

class PhotoGrid extends Component {
    render() {
        return (
            <div className="photo-grid">

                {this.props.posts.map((post, i) => <Photo {...this.props} key={i} i={i} post={post} />)}

                {/* <pre>
                    {JSON.stringify(this.props.posts, null, ' ')}
                </pre> */}
            </div>
        )
    }
}

export default PhotoGrid;