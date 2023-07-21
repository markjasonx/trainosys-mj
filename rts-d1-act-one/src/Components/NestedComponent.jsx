import Nested1 from "./Nested1";

const NestedComponent = () => {
    return (
        <div className="NestedComponent">
        <h1>Nested Component</h1>
            <div>
                <Nested1/>
            </div>

        </div>
    )
}

export default NestedComponent;
