import Loading from "./Loading.jsx";

function ButtonSecondary({isLoading , label}) {
    return (
        <div className={'w-full'}>
            {
                isLoading ? <Loading/>:
                    <button
                        type="submit"
                        className={' w-full btn btn--secondary py-2'}
                    >{label}</button>
            }
        </div>

    );
}

export default ButtonSecondary;