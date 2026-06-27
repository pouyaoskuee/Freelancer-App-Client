import Loading from "./Loading.jsx";

function ButtonPrimary({isLoading , label}) {
    return (
        <div className={'w-full'}>
            {
                isLoading ? <Loading/>:
                    <button
                        type="submit"
                        className={' w-full btn btn--primary py-2'}
                    >{label}</button>
            }
        </div>

    );
}

export default ButtonPrimary;