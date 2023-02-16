import React from "react";
import "./Header.css";

function Header() {

    function handleFormSubmit(event) {
        event.preventDefault();
      };

    return (
        <div className="header">
            <h2>รายการเคลม</h2>
            <form onSubmit={handleFormSubmit}>
                <input type="number" placeholder="วัน/เดือน/ปี"/>
                <div className="btn">
                    <button>
                    <i className="search icon"></i>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Header;