import useMoveBack from "../hooks/useMoveBack.js";

function NotFound() {
    const moveBack = useMoveBack()
    return (
        <div>
            <button onClick={moveBack}>برگشت</button>
            its not found page
        </div>
    );
}

export default NotFound;