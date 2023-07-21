import Nested2 from "./Nested2";

const Nested1 = () => {
    return (
        <div className="Nested-1">
        <h2>This is a Parent</h2>
            <Nested2/>
        </div>
    )
}

export default Nested1;