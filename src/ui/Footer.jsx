import {NavLink} from "react-router-dom";
import {HiCollection, HiHome, HiQuestionMarkCircle, HiUser} from "react-icons/hi";
import {HiBanknotes} from "react-icons/hi2";

function Footer() {
    return (
        <footer className={'px-6 bg-secondary-0 w-full fixed bottom-0 sm:hidden'}>
            <div className={'flex justify-between '}>
                <NavBarMobile to={'/'} icon={<HiHome/>} label={'خانه'}/>
                <NavBarMobile to={'/not-build'} icon={<HiCollection/>} label={'همه پروژه ها'}/>
                <NavLink className={({isActive})=> isActive?'flex flex-col items-center text-sm -translate-y-5 text-primary-900':'flex flex-col items-center text-sm -translate-y-5 text-secondary-600'} to={'/not-build'} ><HiBanknotes className={'text-5xl bg-primary-900 p-2 rounded-full text-secondary-0 '}/>کسب درامد</NavLink>
                <NavBarMobile to={'/not-build'} icon={<HiQuestionMarkCircle/>} label={'راهنما'}/>
                <NavBarMobile to={'/not-build'} icon={<HiUser/>} label={'حساب کاربری'}/>
            </div>
        </footer>
    );
}

export default Footer;


function NavBarMobile ({label , icon , to}) {
    return (
        <NavLink className={({isActive})=> isActive?'flex flex-col justify-center items-center text-sm text-primary-900':'flex flex-col items-center justify-center text-sm text-secondary-600'} to={to}><span className={'text-xl'}>{icon}</span>{label}</NavLink>
    )
}