import UserTable from "../features/admin/UserTable.jsx";

function Users() {
    return (
        <div>
            <h1 className={'text-center font-semibold mb-10 text-base sm:text-xl'}>همه کاربران</h1>
            <UserTable/>
        </div>
    );
}

export default Users;