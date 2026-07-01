import {Link} from "react-router-dom";

function Home() {
    return (
        <div>
            its home page
            <Link to={'/auth'}>go to auth</Link>
        </div>
    );
}

export default Home;