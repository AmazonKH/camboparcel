import React from 'react';

const EditProfileInfoModal = () => {
    return (
        <div>
            <button
                type="button"
                className="btn text-light float-right  btn-success custom-shadow-button"
                data-toggle="modal"
                data-target="#editProfileInfo"
            >
                <i className="far fa-edit" /> Edit Info
            </button>

            <div
                className="modal fade"
                id="editProfileInfo"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="editProfileInfoTitle"
                aria-hidden="true"
            >
                <div
                    className="modal-dialog modal-dialog-centered"
                    role="document"
                >
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5
                                className="modal-title"
                                id="editProfileInfoTitle"
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
                            <h3>
                                this part will be use to change user information
                            </h3>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-danger"
                                data-dismiss="modal"
                            >
                                Close
                            </button>
                            <button type="button" className="btn btn-success">
                                Save changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditProfileInfoModal;
