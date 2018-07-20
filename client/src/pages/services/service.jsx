import React from "react";

const AvailableServices = () => {
    return (
        <div className="container card bg-light">
            <div className="card-body">
                <h2 className="mt-2 pt-">Our services</h2>
                <hr />

                <br />
                <div className="row">
                    <div className="col-sm-3">
                        <h4>What is Lorem Ipsum?</h4>
                        <p className="text-justify">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.{" "}
                        </p>
                    </div>
                    <div className="col-sm-3">
                        <h4>Why do we use it?</h4>
                        <p className="text-justify">
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout. The point of using Lorem
                            Ipsum is that it has a more-or-less normal
                            distribution of letters, as opposed to using
                            'Content here,
                        </p>
                    </div>
                    <div className="col-sm-3">
                        <h4>Where does it come from?</h4>
                        <p className="text-justify">
                            Contrary to popular belief, Lorem Ipsum is not
                            simply random text. It has roots in a piece of
                            classical Latin literature from 45 BC, making it
                            over 2000 years old. Richard McClintock,
                        </p>
                    </div>
                    <div className="col-sm-3">
                        <h4>Where can I get some?</h4>
                        <p className="text-justify">
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form, by injected humour, or randomised
                            words which don't look even slightly believable.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AvailableServices;
