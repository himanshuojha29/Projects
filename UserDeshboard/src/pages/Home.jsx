export default function Home() {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Cards */}
      <div className="bg-white rounded-2xl shadow p-6">
        <h3 className="text-gray-500">Total Users</h3>
        <p className="text-3xl font-bold">1,245</p>
      </div>
      <div className="bg-white rounded-2xl shadow p-6">
        <h3 className="text-gray-500">Active Sessions</h3>
        <p className="text-3xl font-bold">326</p>
      </div>
      <div className="bg-white rounded-2xl shadow p-6">
        <h3 className="text-gray-500">New Signups</h3>
        <p className="text-3xl font-bold">87</p>
      </div>

      {/* Recent Activity */}
      <div className="col-span-1 md:col-span-3 bg-white rounded-2xl shadow p-6">
        <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
        <ul className="space-y-3">
          <li className="text-gray-700"> User John updated profile</li>
          <li className="text-gray-700"> 3 new users signed up</li>
          <li className="text-gray-700"> Admin changed settings</li>
        </ul>
      </div>
    </div>
  );
}
