import ButtonPrimary from "../../ui/ButtonPrimary.jsx";
import ButtonSecondary from "../../ui/ButtonSecondary.jsx";
import WorkBox from "./WorkBox.jsx";
import WorkWithoutBox from "./WorkWithoutBox.jsx";
import NavBar from "./NavBar.jsx";
import FreelancerCard from "./FreelancerCard.jsx";

function HomeContainer() {
    return (
        <main className={' space-y-10'}>
            <section className={'flex flex-col gap-8 p-6 bg-primary-50/50 sm:flex-row  '}>
                <div className={'space-y-6 sm:w-1/2 text-center '}>
                    <h2 className={'text-2xl'} >Lorem ipsum dolor sit amet.</h2>
                    <h3 className={'text-xl'} >Lorem ipsum dolor sit.</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.que cumque dignissimos eius praesentium quae quaerat, saepe sit vitae.</p>
                    <div className={'flex flex-col items-center gap-4 sm:w-4/5'}>
                        <ButtonPrimary label={'Lorem ipsum dolor'}/>
                        <ButtonSecondary label={'Lorem ipsum dolor'}/>
                    </div>
                </div>
                <img className={' rounded-2xl'} src="/pictures/hero.png" alt="hero image" />
            </section>

            <section className={'space-y-4 p-6'}>
                <NavBar label={'دسته بندی محبوب'}/>
                <div className={'grid grid-cols-3'}>
                    <WorkBox label={'طراحی و گرافیک'} src={'design-creative.png'}/>
                    <WorkBox label={'طراحی و گرافیک'} src={'marketing.png'}/>
                    <WorkBox label={'طراحی و گرافیک'} src={'mobile-development.png'}/>
                    <WorkBox label={'طراحی و گرافیک'} src={'web-development.png'}/>
                    <WorkBox label={'طراحی و گرافیک'} src={'writing-translation.png'}/>
                    <WorkBox label={'طراحی و گرافیک'} src={'ai-services.png'}/>
                </div>
            </section>

            <section>
                <div className={'flex justify-evenly items-center bg-primary-50/50 p-4'}>
                    <WorkWithoutBox label={'همه پروژه های انجام شده'} src={'projects-completed.png'} number={'+۲۵ هزار'}/>
                    <WorkWithoutBox label={'فریلنسر فعال'} src={'active-freelancers.png'} number={'+۸ هزار'}/>
                    <WorkWithoutBox label={'رضایت مشتریان'} src={'success-rate.png'} number={'۹۸ ٪'}/>
                    <WorkWithoutBox label={'میانگین امتیاز'} src={'client-rating.png'} number={'۴.۹ از ۵'}/>
                </div>
            </section>

            <section className={'p-6 space-y-4'}>
                <NavBar label={'فریلنسر های برتر'}/>
                <div className={'flex justify-evenly items-center gap-4 '}>
                    <FreelancerCard src={'freelancer-mehdi-photo.png'} name={'مهدی رضایی'} stack={'توسعه دهنده موبایل'} star={'۴.۸ از ۵'} price={'از ۸۰۰ هزار تومن'} />
                    <FreelancerCard src={'freelancer-sara-photo.png'} name={'سارا یوسفی'} stack={'طراح ui/ux'} star={'۴.۷ از ۵'} price={'از ۷۵۰ هزار تومن'} />
                    <FreelancerCard src={'freelancer-kamran-photo.png'} name={'کامران محمودی'} stack={'توسعه دهنده فول استک'} star={'۴.۹ از ۵'} price={'از ۹۵۰ هزار تومن'} />
                </div>
            </section>

            <section></section>

            <section></section>

            <section></section>

            <section></section>

            <section></section>

        </main>
    );
}

export default HomeContainer;