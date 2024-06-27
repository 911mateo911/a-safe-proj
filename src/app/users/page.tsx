import { getFakeUsers } from "../_shared/__mocks__/fakeUsers"
import { UsersTable } from "../_shared/containers/UsersTable";

export default async function Users() {
  const usersData = await getFakeUsers();

  return (
    <div
      className="w-full h-[500px]"
    >
      <UsersTable
        users={usersData}
      />
    </div>
  )
}
