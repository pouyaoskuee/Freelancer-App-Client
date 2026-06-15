
function ConfirmDelete({resourceName , onClose , disabled ,  onConfirm}) {
    return (
        <div className={'space-y-4'}>
            <h1> ایا از حذف پروژه {resourceName} مطمین هستید؟</h1>
            <div className={'flex justify-between items-center'}>
                <button onClick={onClose} className={'btn btn--primary w-1/2'}>لغو</button>
                <button onClick={onConfirm} className={'btn btn--danger w-1/3 '} disabled={disabled}>تایید</button>
            </div>
        </div>
    );
}

export default ConfirmDelete;