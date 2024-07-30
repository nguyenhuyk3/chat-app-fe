import { container } from "./styles"
import Header from "./Header";

function Sidebar() {
    return (
        <div className="h-screen" style={container}>
             <Header />   
        </div>
    );
}

export default Sidebar;