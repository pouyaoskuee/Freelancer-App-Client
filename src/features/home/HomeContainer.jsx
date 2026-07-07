import ButtonPrimary from "../../ui/ButtonPrimary.jsx";
import ButtonSecondary from "../../ui/ButtonSecondary.jsx";

function HomeContainer() {
    return (
        <main className={'px-10 pt-10'}>
            <section className={'flex flex-col gap-6 sm:flex-row'}>
                <div className={'space-y-6 sm:w-1/2 text-center '}>
                    <h2 className={'text-2xl'} >Lorem ipsum dolor sit amet.</h2>
                    <h3 className={'text-xl'} >Lorem ipsum dolor sit.</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.que cumque dignissimos eius praesentium quae quaerat, saepe sit vitae.</p>
                    <div className={'flex flex-col items-center gap-4 sm:w-4/5'}>
                        <ButtonPrimary label={'Lorem ipsum dolor'}/>
                        <ButtonSecondary label={'Lorem ipsum dolor'}/>
                    </div>
                </div>
                <img className={''} src="/pictures/hero.webp" alt="hero image" />
                <div>

                </div>
            </section>
            
        </main>
    );
}

export default HomeContainer;