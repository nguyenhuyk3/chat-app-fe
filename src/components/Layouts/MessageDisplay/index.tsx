import classNames from "classnames/bind";

import Content from "./Content";
import { container } from "./styles"

function MessageDisplay() {
    return (
        <div className="flex items-center justify-center h-screen" style={container}>
            <Content />
        </div>
    );
}

export default MessageDisplay;