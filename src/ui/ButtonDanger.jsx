
function ButtonDanger({onClick , isPending=false , label}) {
    return (
        <button onClick={onClick} className={'btn btn--danger w-full py-2 '} disabled={isPending}>{label}</button>
    );
}

export default ButtonDanger;