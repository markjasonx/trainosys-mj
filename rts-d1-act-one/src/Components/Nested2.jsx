import Nested3 from "./Nested3";

const Nested2 = () => {
    return (
        <div className="Nested-2">
        <h2>This is a Child</h2>
            <Nested3/>
        </div>
    )
}

export default Nested2;