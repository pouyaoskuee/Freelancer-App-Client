import ButtonPrimary from "../../ui/ButtonPrimary.jsx";
import ButtonSecondary from "../../ui/ButtonSecondary.jsx";
import WorkBox from "./WorkBox.jsx";
import WorkWithoutBox from "./WorkWithoutBox.jsx";
import NavBar from "./NavBar.jsx";
import FreelancerCard from "./FreelancerCard.jsx";
import ProjectCard from "./projectCard.jsx";
import HowWorkBox from "./HowWorkBox.jsx";
import LongArow from "./LongArow.jsx";

function HomeContainer() {
    return (
        <div className={'bg-background '}>
            <section className={'flex flex-col gap-8 p-6 dark:bg-background bg-primary-50/50  sm:flex-row  '}>
                <div className={'space-y-4 sm:w-1/2 text-center '}>
                    <div className={'bg-primary-100 text-primary-900 font-bold rounded-2xl p-2 w-max mx-auto '}>بزرگترین بازار فریلنسری ایران</div>
                    <h2 className={'text-2xl font-bold '} >بهترین فریلنسر هارا استخدام کنید</h2>
                    <h3 className={'text-xl font-medium text-primary-900'} >تیم رویایی خود را بسازید</h3>
                    <p className={'text-secondary-500 leading-5'}>با متخصصان حرفه ای همکاری برقرار کنید.همکاری بدون مرز را تجربه کنید<br/>و پروژه های خود را سریع و با کیفت و در بودجه انجام دهید</p>
                    <div className={'flex flex-col items-center gap-4 sm:w-4/5'}>
                        <ButtonPrimary label={'استخدام فریلنسر'}/>
                        <ButtonSecondary label={'ثبت نام به عنوان فریلنسر'}/>
                    </div>
                    <div className={'flex items-center justify-center gap-2 text-sm '}>
                        <div>
                            <p className={'font-bold'}>+۲۵ هزار</p>
                            <p className={'text-secondary-500'}>کارفرمایان راضی</p>
                        </div>
                        <div>
                            <img className={'w-60 h-15 dark:bg-secondary-900 rounded-full p-2'} src="/pictures/hero-avatar-stack.png" alt=""/>
                        </div>
                    </div>
                </div>
                <img className={' rounded-2xl'} src="/pictures/hero.png" alt="hero image" />
            </section>

            <section className={'space-y-4 py-6 px-2  '}>
                <div className={'text-center space-y-2'}>
                    <h3 className={'text-xl font-medium'}>ددلسنر چگونه کار میکند</h3>
                    <p className={'text-secondary-500 font-medium'}>پروژه خود را در ۴ مرحله ساده برونسپاری کنید</p>
                </div>
                <div className={'flex items-start justify-center'}>
                    <HowWorkBox src={'step-post-project.png'} title={'۱-ثبت پروژه'} description={'جزعیات پروژه خود را ثبت کنید'} />
                    <LongArow/>
                    <HowWorkBox src={'step-receive-proposals.png'} title={'۲-دریافت پیشنهاد'} description={'پیشنهاد هارا از فریلنسر ها دریافت کنید'} />
                    <LongArow/>
                    <HowWorkBox src={'step-hire-collaborate.png'} title={'۳-استخدام و همکاری'} description={'بهترین فریلنسر را انتخاب کنید'} />
                    <LongArow/>
                    <HowWorkBox src={'step-pay-securely.png'} title={'۴-پرداخت امن'} description={'با خیال راحت پرداخت امن انجام دهید'}/>
                </div>
            </section>

            <section className={'space-y-4 p-6'}>
                <NavBar label={'دسته بندی محبوب'}/>
                <div className={'grid grid-cols-3 gap-4'}>
                    <WorkBox label={'توسعه موبایل'} src={'mobile.png'} numOfFreelancer={3737} />
                    <WorkBox label={'برنامه نویسی و توسعه'} src={'development.png'} numOfFreelancer={1286} />
                    <WorkBox label={'طراحی و گرافیک'} src={'graphic.png'} numOfFreelancer={2742} />
                    <WorkBox label={'هوش مصنوعی'} src={'ai.png'} numOfFreelancer={1525} />
                    <WorkBox label={'تولید محتوا و ترجمه'} src={'translate.png'} numOfFreelancer={7362} />
                    <WorkBox label={'بازاریابی دیجتال'} src={'marketing.png'} numOfFreelancer={4372} />
                </div>
            </section>

            <section>
                <div className={'flex justify-evenly items-center dark:bg-secondary-50 bg-primary-50/50 py-6 px-2'}>
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

            <section className={'p-6 space-y-4'}>
                <NavBar label={'پروژه های برتر'}/>
                <div className={'flex justify-evenly items-center gap-4 '}>
                    <ProjectCard src={'project-brand-identity.png'} budge={'برند سازی'} price={'5000000'} title={'طراحی هویت بصری'} />
                    <ProjectCard src={'project-saas-dashboard.png'} budge={'وبسایت'} price={'2800000'} title={'پنل مدریت فروشگاه'} />
                    <ProjectCard src={'project-mobile-app.png'} budge={'اپلکیشن'} price={'3500000'} title={'اپلکیشن تناسب اندام'} />
                </div>


            </section>

            <section className={'p-6 space-y-4'}>
                <NavBar label={'نظر کارفرمایان ما'}/>
                <div className={' dark:bg-secondary-50 bg-primary-50/50 rounded-lg px-2 py-4 shadow-lg border border-secondary-100 space-y-5'}>
                    <div className={'flex'}>
                        <img className={'w-8 h-6'} src="/pictures/quote-icon.png" alt=""/>
                        <p className={'px-6 text-secondary-500 font-semibold'}>ددلنسر به من کمک کرد بهترین توسعه دهنده را برای پروژم پیدا کنم.فرایند کار بسیار اسان و نتیجه فوق العاده بود</p>
                        <img className={'w-8 h-6'} src="/pictures/quote-icon.png" alt=""/>
                    </div>
                    <div className={'flex items-center justify-end gap-2 pl-10'}>
                        <p><span className={'text-secondary-400'}>مدیر عمل تکنوکیو</span> رضا احمدی</p>
                        <img src="/pictures/testimonial-reza-avatar.png" alt=""/>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default HomeContainer;