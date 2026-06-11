import useUser from "../features/authentication/useUser.js";

function Header() {
    const {data} =useUser()
    console.log(data)
    return (
        <div className={'bg-red-100 '}>
            its Header
        </div>
    );
}

export default Header;