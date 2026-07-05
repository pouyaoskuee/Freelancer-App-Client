import {NavLink} from "react-router-dom";
import useUser from "../features/authentication/useUser.js";
import {HiBars3} from "react-icons/hi2";
import {useState} from "react";

function NavBarMenu() {
    const [modal, setModal] = useState(false)
    return (
        <div>
            <nav className={'hidden sm:block'}>
                <UnOrderList/>
            </nav>
            <div onClick={()=>setModal(prevState => !prevState)} className={'sm:hidden'}>
                <HiBars3 size={'30'}/>
            </div>
            {modal && (
                <div className={'bg-secondary-0 w-full p-4 fixed top-20 left-0 sm:hidden '}>
                    <UnOrderList/>
                </div>
            )}
        </div>

    );
}

export default NavBarMenu;

function UnOrderList () {
    const {isLoading , user} = useUser()

    return (
        <ul className={`flex flex-col gap-4 *:border-b *:border-secondary-100 *:pb-1  sm:space-x-4 sm:*:border-none sm:flex-row ${isLoading && 'blur-sm opacity-50'}`}>
            <NavLink to={'/'}>همه پرژه ها</NavLink>
            {!user ? <NavLink to={'/'}>کسب درامد </NavLink> : user?.role === 'OWNER' ?
                <NavLink to={'/'}>پروژه های ایجاد شده من </NavLink> : user?.role === 'FREELANCER' ?
                    <NavLink to={'/'}>پروژه های مرتبط مهارت من </NavLink> : null}
            <NavLink to={'/'}> آزمون ها</NavLink>
            <NavLink to={'/'}> راهنما </NavLink>
        </ul>
        )

}