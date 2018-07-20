import React from "react";

class FormAwesome extends React.Component {
    constructor(props) {
        super(props);
        this.state = { values: [{ type: "package" }] };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    parcelLetter = ["A", "B", "C", "D", "E"];

    handleSelectedType(i, e) {
        e.preventDefault();
        console.log(i);

        let value = e.target.value;
        let cureentState = Object.assign({}, this.state);
        cureentState.values[i].type = value;
        this.setState({ cureentState });
    }

    onTypeChange(i) {
        return this.state.values[i].type === "package" ? (
            <div className="input-group custom-shadow">
                <input
                    type="number"
                    min={0}
                    max={200}
                    placeholder="w(cm)"
                    className="form-control"
                />
                <input
                    type="number"
                    min={0}
                    max={200}
                    placeholder="h(cm)"
                    className="form-control"
                />
                <input
                    type="number"
                    min={0}
                    max={200}
                    placeholder="l(cm)"
                    className="form-control"
                />
                <input
                    type="number"
                    min={0}
                    max={5}
                    placeholder="w(kg)"
                    className="form-control"
                />
            </div>
        ) : (
            <div className="input-group custom-shadow">
                <div className="input-group-text form-control">
                    <input
                        type="radio"
                        aria-label="Radio button for following text input"
                        className="mr-2"
                    />
                    A10
                </div>
                <div className="input-group-text form-control">
                    <input
                        type="radio"
                        aria-label="Radio button for following text input"
                        className="mr-2"
                    />
                    A9
                </div>
                <div className="input-group-text form-control">
                    <input
                        type="radio"
                        aria-label="Radio button for following text input"
                        className="mr-2"
                    />
                    A8
                </div>
                <div className="input-group-text form-control">
                    <input
                        type="radio"
                        aria-label="Radio button for following text input"
                        className="mr-1"
                    />
                    A7
                </div>
                <div className="input-group-text form-control">
                    <input
                        type="radio"
                        aria-label="Radio button for following text input"
                        className="mr-2"
                    />
                    A6
                </div>
                <div className="input-group-text form-control">
                    <input
                        type="radio"
                        aria-label="Radio button for following text input"
                        className="mr-2 "
                    />
                    A2
                </div>
            </div>
        );
    }
    createUI() {
        return this.state.values.map((el, i) => (
            <div className="mb-3" key={i}>
                <div key={i} className="input-group mb-2 custom-shadow">
                        <div className="form-control bg-success text-white">
                            Parcel {this.parcelLetter[i]}
                        </div>
                    <select
                        id="parcelType"
                        className="form-control"
                        onChange={e => this.handleSelectedType(i, e)}
                    >
                        <option key="0">package</option>
                        <option key="1">envelope</option>
                    </select>
                        <input type="text" placeholder="Quantity" className="form-control"/>
                    <div className="input-group-append">
                        {this.state.values.length > 1 ? (
                            <button
                                className="btn btn-danger"
                                type="button"
                                value="remove"
                                onClick={this.removeClick.bind(this, i)}
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        ) : (
                            <button
                                className="btn btn-danger"
                                type="button"
                                value="remove"
                                disabled
                                onClick={this.removeClick.bind(this, i)}
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        )}
                    </div>
                </div>
                {this.onTypeChange(i)}
            </div>
        ));
    }

    handleChange(i, event) {
        let values = [...this.state.values];
        values[i] = event.target.value;
        this.setState({ values });
    }

    addClick() {
        this.setState(prevState => ({
            values: [...prevState.values, { type: "package" }]
        }));
    }

    removeClick(i) {
        let values = [...this.state.values];
        values.splice(i, 1);
        this.setState({ values });
    }

    handleSubmit(event) {
        alert("A name was submitted: " + this.state.values.join(", "));
        event.preventDefault();
    }
    render() {
        return (
            <div>
                {this.createUI()}
                {this.state.values.length > 4 ? (
                    ""
                ) : (
                    <button
                        className="btn btn-primary float-right custom-shadow-button"
                        type="button"
                        value="add more"
                        onClick={this.addClick.bind(this)}
                    >
                        <i className="fas fa-plus" />
                    </button>
                )}
                <br />
                <br />
            </div>
        );
    }
}

export default FormAwesome;
