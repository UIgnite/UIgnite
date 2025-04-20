import {useState} from 'react';
import {Card, CardContent} from '@pkgs/uignite';
import {Button} from '@pkgs/uignite';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import {
  UserCircle,
  TrendingUp,
  Users,
  Calendar,
  Activity,
  DollarSign,
  Settings,
  Bell,
  Search,
  Menu,
  X,
} from 'lucide-react';

const revenueData = [
  {name: 'Jan', revenue: 1500, expenses: 1100, profit: 400},
  {name: 'Feb', revenue: 2200, expenses: 1300, profit: 900},
  {name: 'Mar', revenue: 1400, expenses: 900, profit: 500},
  {name: 'Apr', revenue: 2900, expenses: 1600, profit: 1300},
  {name: 'May', revenue: 1800, expenses: 1200, profit: 600},
  {name: 'Jun', revenue: 4600, expenses: 2100, profit: 2500},
  {name: 'Jul', revenue: 5700, expenses: 2400, profit: 3300},
  {name: 'Aug', revenue: 5900, expenses: 2500, profit: 3400},
  {name: 'Sep', revenue: 1600, expenses: 1000, profit: 600},
  {name: 'Oct', revenue: 3100, expenses: 1700, profit: 1400},
  {name: 'Nov', revenue: 3300, expenses: 1800, profit: 1500},
  {name: 'Dec', revenue: 6000, expenses: 2800, profit: 3200},
];

const userActivityData = [
  {name: 'Mon', users: 420},
  {name: 'Tue', users: 380},
  {name: 'Wed', users: 510},
  {name: 'Thu', users: 580},
  {name: 'Fri', users: 620},
  {name: 'Sat', users: 750},
  {name: 'Sun', users: 690},
];

const productData = [
  {name: 'Product A', value: 400},
  {name: 'Product B', value: 300},
  {name: 'Product C', value: 200},
  {name: 'Product D', value: 100},
];

const recentSales = [
  {
    name: 'Ram Bhardwaj',
    email: 'rambhardwaj@gmail.com',
    amount: '$1,999.00',
    date: 'Apr 18, 2025',
  },
  {
    name: 'Aman Gupta',
    email: 'akgbytese@gmail.com',
    amount: '$39.00',
    date: 'Apr 17, 2025',
  },
  {
    name: 'Aditya Sharma',
    email: 'adityasharma@gmail.com',
    amount: '$299.00',
    date: 'Apr 16, 2025',
  },
  {
    name: 'Saurav Jha',
    email: 'saurav@gmail.com',
    amount: '$99.00',
    date: 'Apr 15, 2025',
  },
  {
    name: 'Rohit Singh',
    email: 'rohit@gmail.com',
    amount: '$39.00',
    date: 'Apr 14, 2025',
  },
];

const upcomingEvents = [
  {title: 'UIgnite Team Meeting', time: '9:00 PM', date: 'March 26, 2025'},
  {title: 'Landing Page figma', time: '10:00 PM', date: 'Apr 2, 2025'},
  {title: 'Docs Page Implementation', time: '9:30 AM', date: 'Apr 10, 2025'},
  {title: 'Component Building', time: '2:00 PM', date: 'Apr 15, 2025'},
  {title: 'Product Launch', time: '10:30 PM', date: 'Apr 18, 2025'},
  {title: 'Product Review', time: '8:00 AM', date: 'Apr 20, 2025'},
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="flex h-screen bg-black">
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div
        className={`fixed lg:static inset-y-0 left-0 w-64 bg-zinc-900 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-300 ease-in-out z-30`}
      >
        <div className="flex items-center justify-between h-16 px-6 border-b border-zinc-800">
          <img
            src="https://res.cloudinary.com/do2tmd6xp/image/upload/v1745059613/uignite/xfj6lgzo51ov1nv6bben.png"
            alt=""
            className="h-10 w-auto"
          />
          <button className="lg:hidden" onClick={() => setSidebarOpen(false)}>
            <X className="h-6 w-6 text-gray-400" />
          </button>
        </div>
        <nav className="mt-6 px-4">
          <div className="space-y-2">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`flex items-center w-full px-4 py-2 rounded-md ${activeTab === 'dashboard' ? 'bg-zinc-800 text-white' : 'text-gray-400 hover:bg-zinc-800 hover:text-white'}`}
            >
              <Activity className="mr-3 h-5 w-5" />
              Dashboard
            </button>
            <button
              onClick={() => setActiveTab('analytics')}
              className={`flex items-center w-full px-4 py-2 rounded-md ${activeTab === 'analytics' ? 'bg-zinc-800 text-white' : 'text-gray-400 hover:bg-zinc-800 hover:text-white'}`}
            >
              <TrendingUp className="mr-3 h-5 w-5" />
              Analytics
            </button>
            <button
              onClick={() => setActiveTab('customers')}
              className={`flex items-center w-full px-4 py-2 rounded-md ${activeTab === 'customers' ? 'bg-zinc-800 text-white' : 'text-gray-400 hover:bg-zinc-800 hover:text-white'}`}
            >
              <Users className="mr-3 h-5 w-5" />
              Customers
            </button>
            <button
              onClick={() => setActiveTab('events')}
              className={`flex items-center w-full px-4 py-2 rounded-md ${activeTab === 'events' ? 'bg-zinc-800 text-white' : 'text-gray-400 hover:bg-zinc-800 hover:text-white'}`}
            >
              <Calendar className="mr-3 h-5 w-5" />
              Events
            </button>
            <button
              onClick={() => setActiveTab('settings')}
              className={`flex items-center w-full px-4 py-2 rounded-md ${activeTab === 'settings' ? 'bg-zinc-800 text-white' : 'text-gray-400 hover:bg-zinc-800 hover:text-white'}`}
            >
              <Settings className="mr-3 h-5 w-5" />
              Settings
            </button>
          </div>
        </nav>
      </div>

      
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top navigation */}
        <header className="bg-zinc-900 border-b border-zinc-800">
          <div className="flex items-center justify-between h-16 px-6">
            <div className="flex items-center">
              <button
                className="lg:hidden mr-3 text-gray-400 hover:text-white"
                onClick={() => setSidebarOpen(true)}
              >
                <Menu className="h-6 w-6" />
              </button>
              <h2 className="text-xl font-semibold text-white">Dashboard</h2>
            </div>
            <div className="flex items-center space-x-3">
              <div className="relative hidden md:block">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-64 px-4 py-2 rounded-md bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:border-blue-500"
                />
                <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              <button className="relative p-2 rounded-full bg-zinc-800 text-gray-400 hover:text-white">
                <Bell className="h-5 w-5" />
                <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-red-500"></span>
              </button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                  <span className="font-medium text-white">JD</span>
                </div>
                <span className="hidden md:inline text-white">Jane Do</span>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto bg-zinc-950 p-4 md:p-6">
          <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between">
            <h3 className="text-2xl font-bold text-white mb-3 md:mb-0">
              Analytics Overview
            </h3>
            <div className="flex flex-wrap gap-2">
              <Button className="bg-zinc-800 text-white hover:bg-zinc-700">
                Last 7 Days
              </Button>
              <Button className="bg-zinc-800 text-white hover:bg-zinc-700">
                Last 30 Days
              </Button>
              <Button className="bg-white text-black hover:bg-gray-200">
                Export Report
              </Button>
            </div>
          </div>
      
      <div className='flex flex-col items-center justify-between mb-6'>
          <div className="max-w-[1200px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <Card className="bg-gradient-to-br max-w-[290px] from-blue-900 to-black text-white shadow-md shadow-blue-900">
              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-blue-100">Total Revenue</p>
                    <h2 className="text-2xl md:text-3xl font-bold">
                      $45,231.89
                    </h2>
                    <p className="text-green-300 flex items-center mt-1">
                      <TrendingUp className="h-4 w-4 mr-1" /> +20.1% from last
                      month
                    </p>
                  </div>
                  <div className="p-2 bg-blue-900 rounded-lg">
                    <DollarSign className="h-6 w-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br max-w-[290px] from-purple-900 to-black text-white shadow-md shadow-purple-900">
              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-purple-100">Subscriptions</p>
                    <h2 className="text-2xl md:text-3xl font-bold">+2,350</h2>
                    <p className="text-green-300 flex items-center mt-1 text-sm">
                      <TrendingUp className="h-4 w-4 mr-1" /> +180.1% from last
                      month
                    </p>
                  </div>
                  <div className="p-2 bg-purple-900 rounded-lg">
                    <Users className="h-6 w-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br max-w-[290px] from-green-900 to-black text-white shadow-md shadow-green-900">
              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-green-100">Sales</p>
                    <h2 className="text-2xl md:text-3xl font-bold">+12,234</h2>
                    <p className="text-green-300 flex items-center mt-1">
                      <TrendingUp className="h-4 w-4 mr-1" /> +19% from last
                      month
                    </p>
                  </div>
                  <div className="p-2 bg-green-900 rounded-lg">
                    <Activity className="h-6 w-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br max-w-[290px] from-red-900 to-black text-white shadow-md shadow-red-900">
              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-red-100">Active Now</p>
                    <h2 className="text-2xl md:text-3xl font-bold">+573</h2>
                    <p className="text-green-300 flex items-center mt-1">
                      <TrendingUp className="h-4 w-4 mr-1" /> +201 since last
                      hour
                    </p>
                  </div>
                  <div className="p-2 bg-red-900 rounded-lg">
                    <Users className="h-6 w-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

         
          <div className="max-w-[1200px] grid grid-cols-3 mb-6 gap-6">
            <Card className="bg-zinc-900 text-white border border-zinc-800">
              <CardContent className="p-4">
                <div className="flex justify-between items-center mb-4">
                  <p className="text-lg font-semibold">Revenue Overview</p>
                  <div className="flex items-center text-sm">
                    <div className="flex items-center mr-3">
                      <div className="w-3 h-3 rounded-full bg-blue-900 mr-1"></div>
                      <span>Revenue</span>
                    </div>
                    <div className="flex items-center mr-3">
                      <div className="w-3 h-3 rounded-full bg-red-900 mr-1"></div>
                      <span>Expenses</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-green-900 mr-1"></div>
                      <span>Profit</span>
                    </div>
                  </div>
                </div>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={revenueData}>
                    <XAxis dataKey="name" stroke="#ccc" />
                    <YAxis stroke="#ccc" />
                    <Tooltip wrapperClassName="text-black" />
                    <Bar
                      dataKey="revenue"
                      fill="#1e3a8a"
                      radius={[4, 4, 0, 0]}
                    />
                    <Bar
                      dataKey="expenses"
                      fill="#7f1d1d"
                      radius={[4, 4, 0, 0]}
                    />
                    <Bar
                      dataKey="profit"
                      fill="#14532d"
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            <Card className="bg-zinc-900 text-white border border-zinc-800">
              <CardContent className="p-4">
                <div className="flex justify-between items-center mb-4">
                  <p className="text-lg font-semibold">User Activity</p>
                  <Button className="bg-zinc-800 text-white hover:bg-zinc-700 text-sm">
                    View Details
                  </Button>
                </div>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={userActivityData}>
                    <XAxis dataKey="name" stroke="#ccc" />
                    <YAxis stroke="#ccc" />
                    <Tooltip wrapperClassName="text-black" />
                    <Line
                      type="monotone"
                      dataKey="users"
                      stroke="#8884d8"
                      strokeWidth={2}
                      dot={{r: 4}}
                      activeDot={{r: 6}}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            <Card className="bg-zinc-900 text-white border border-zinc-800">
              <CardContent className="p-4">
                <p className="text-lg font-semibold mb-4">
                  Product Performance
                </p>
                <div className="flex justify-center">
                  <ResponsiveContainer width="100%" height={200}>
                    <PieChart>
                      <Pie
                        data={productData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {productData.map((_, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                      <Tooltip wrapperClassName="text-black" />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  {productData.map((entry, index) => (
                    <div key={index} className="flex items-center">
                      <div
                        className="w-3 h-3 rounded-full mr-2"
                        style={{backgroundColor: COLORS[index % COLORS.length]}}
                      ></div>
                      <span className="text-sm">{entry.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          
          <div className=" max-w-[1200px]  flex justify-center items-center gap-5">
           
            <Card className="bg-zinc-900  w-[1200px] text-white border border-zinc-800 lg:col-span-2">
              <CardContent className="p-4">
                <div className="flex justify-between items-center mb-4">
                  <p className="text-lg font-semibold">Recent Sales</p>
                  <Button className="bg-zinc-800 text-white hover:bg-zinc-700 text-sm">
                    View All
                  </Button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="text-left text-gray-400 border-b border-zinc-800">
                        <th className="pb-2">Customer</th>
                        <th className="pb-2">Amount</th>
                        <th className="pb-2">Date</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-800">
                      {recentSales.map((sale, index) => (
                        <tr key={index} className="hover:bg-zinc-800">
                          <td className="py-3">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center">
                                <UserCircle className="w-6 h-6 text-gray-400" />
                              </div>
                              <div>
                                <p className="font-medium">{sale.name}</p>
                                <p className="text-sm text-gray-400">
                                  {sale.email}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="py-3 font-semibold">{sale.amount}</td>
                          <td className="py-3 text-gray-400">{sale.date}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

           
            <div className="mt-7 mr-5">
             
              <Card className="bg-zinc-900 text-white border border-zinc-800">
                <CardContent className="p-4">
                  <p className="text-lg font-semibold mb-4">Upcoming Events</p>
                  <div className="space-y-3">
                    {upcomingEvents.map((event, index) => (
                      <div
                        key={index}
                        className="flex items-start p-2 rounded bg-zinc-800"
                      >
                        <div className="mr-3 p-2 bg-zinc-700 rounded-lg">
                          <Calendar className="h-5 w-5 text-blue-400" />
                        </div>
                        <div>
                          <p className="font-medium">{event.title}</p>
                          <p className="text-sm text-gray-400">
                            {event.time} - {event.date}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          </div>
        </main>
      </div>
    </div>
  );
}
