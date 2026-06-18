import Content1 from "./content";
import Footer1 from "./footer";
import Header1 from "./header";
import Nav1 from "./nav";


function Example1() {
    return (
        <div>
            <Header1 />
            <div style={{ display: "flex" }}>
                <Nav1 />
                <Content1 />
            </div>
            <Footer1 />
        </div>
    )
}
export default Example1;