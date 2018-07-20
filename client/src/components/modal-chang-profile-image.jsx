import React, { Component } from "react";
import "./upload-img.css";

import ImageUploader from "react-images-upload";

class ChangeProfileImage extends Component {
    constructor(props) {
        super(props);
        this.state = { pictures: [] };
        this.onDrop = this.onDrop.bind(this);
    }

    onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture)
        });
    }

    render() {
        return (
            <div>
                <button
                    type="button"
                    className="btn float-right custom-shadow-button"
                    data-toggle="modal"
                    data-target="#changeProfileImage"
                >
                    <i className="far fa-edit" /> Edit Info
                </button>

                <div
                    className="modal fade text-dark"
                    id="changeProfileImage"
                    tabIndex="-1"
                    role="dialog"
                    aria-labelledby="changeProfileImageTitle"
                    aria-hidden="true"
                >
                    <div
                        className="modal-dialog modal-dialog-centered"
                        role="document"
                    >
                        <form onSubmit={this.onSubmit}>
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5
                                        className="modal-title"
                                        id="changeProfileImageTitle"
                                    >
                                        Modal title
                                    </h5>
                                    <button
                                        type="button"
                                        className="close"
                                        data-dismiss="modal"
                                        aria-label="Close"
                                    >
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <ImageUploader
                                        withIcon={true}
                                        buttonText="Choose images"
                                        onChange={this.onDrop}
                                        imgExtension={[
                                            ".jpg",
                                            ".gif",
                                            ".png",
                                            ".gif"
                                        ]}
                                        maxFileSize={5242880}
                                    />
                                </div>
                                <div className="modal-footer">
                                    <button
                                        type="button"
                                        className="btn btn-danger"
                                        data-dismiss="modal"
                                    >
                                        Close
                                    </button>
                                    <button
                                        type="Submit"
                                        className="btn btn-success"
                                    >
                                        Save changes
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default ChangeProfileImage;
