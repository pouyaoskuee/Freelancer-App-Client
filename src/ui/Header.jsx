import useUser from "../features/authentication/useUser.js";

function Header() {
    const {data} =useUser()
    console.log(data)
    return (
        <div className={'border-r-2 border-secondary-100'}>
            its Header
        </div>
    );
}

export default Header;