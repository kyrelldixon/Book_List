import React from 'react';
import { connect } from 'react-redux';

class BookDetail extends React.Component {
    
    render() {
        if (!this.props.book) {
            return <div className="">Select a book to get started.</div>
        }

        return (
            <div className="book-detail">
                <h3>Details for:</h3>
                <div>{this.props.book.title}</div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        book: state.activeBook
    }
}

export default connect(mapStateToProps)(BookDetail);
