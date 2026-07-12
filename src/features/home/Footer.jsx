import {NavLink} from "react-router-dom";

function Footer() {
    return (
        <div className={'bg-primary-50/50 dark:bg-secondary-50 rounded-t-2xl flex flex-col-reverse px-6 sm:justify-between sm:flex-row'}>
            <div className={'border-b border-secondary-100 py-4 space-y-2'}>
                <h4 className={'font-bold text-lg'}>خبرنامه</h4>
                <div className={'space-y-2'}>
                    <p>برای دریافت جدید ترین مطالب ایمیل خود را وارد کنید</p>
                    <div className={'flex gap-2 '}>
                        <button className={'btn btn--primary'}>عضویت</button>
                        <input className={'input w-full '} type={'email'} placeholder={'ایمیل شما'}/>
                    </div>
                </div>
            </div>

            <div className={'border-b border-secondary-100 py-4 space-y-2'}>
                <h4 className={'font-bold text-lg'}>شرکت</h4>
                <div className={'flex flex-col gap-2'}>
                    <NavLink to={'/not-build'}>درباره ما</NavLink>
                    <NavLink to={'/not-build'}>فرصت های شغلی</NavLink>
                    <NavLink to={'/not-build'}>وبلاگ</NavLink>
                </div>
            </div>

            <div className={'border-b border-secondary-100 py-4 space-y-2'}>
                <h4 className={'font-bold text-lg'}>برای فریلنسر</h4>
                <div className={'flex flex-col gap-2'}>
                    <NavLink to={'/not-build'}>ثبت نام فریلنسر</NavLink>
                    <NavLink to={'/not-build'}>ایجاد پروفایل</NavLink>
                    <NavLink to={'/not-build'}>منابع فریلنسری</NavLink>
                </div>
            </div>

            <div className={'border-b border-secondary-100 py-4 space-y-2'}>
                <h4 className={'font-bold text-lg'}>برای کارفرما</h4>
                <div className={'flex flex-col gap-2'}>
                    <NavLink to={'/not-build'}>چطور کار میکند</NavLink>
                    <NavLink to={'/not-build'}>جستجوی فریلنسر</NavLink>
                    <NavLink to={'/not-build'}>ارسال پروژه</NavLink>
                </div>
            </div>

            <div className={'border-b border-secondary-100 py-4 space-y-2'}>
                <h4 className={'font-bold text-lg'}>deadlancer</h4>
                <div>
                    <p>بهترین مکان برای استخدام فریلنسر ها <br/> و انجام پروژه ها به صورت حرفه ای</p>
                    <div className={'flex gap-2'}>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default Footer;