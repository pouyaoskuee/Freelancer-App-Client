import Loading from "./Loading.jsx";

function ButtonPrimary({isLoading , label}) {
    return (
        <div>
            {
                isLoading ? <Loading/>:
                    <button
                        type="submit"
                        className={' w-full btn btn--primary mt-1 rounded-xl py-2'}
                    >{label}</button>
            }
        </div>

    );
}

export default ButtonPrimary;