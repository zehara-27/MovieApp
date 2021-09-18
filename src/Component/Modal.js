import React, {Component} from "react";
import "./Modal.css";
//import styled from'styled-component' 

class Modal extends Component {
    render() {
        return(
            this.props.isOpen && (
                <div className="position-absolute modal_wrapper" tabIndex="-1" aria-label="Modal for movie details">
                    <div class="modal_content">
                            {this.props.children}
                            <div className="text-center mt-5">
                                <button ariaLabel="close"
                                onClick={this.props.closeModal}
                                className="text-light rounded px-4 py-1" style={{backgroundColor: "#29508F", border: "unset"}}>Close</button>
                            </div>
                        </div>
                </div>
            )
        );
    };
}

export default Modal;
