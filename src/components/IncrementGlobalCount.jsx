import { Button } from "react-bootstrap";

function IncrementGlobalCount({ incrementCount }) {

    return (
        <Button variant="warning" onClick={incrementCount}>
            Incrementar GlobalCount
        </Button>
    );
}

export default IncrementGlobalCount;