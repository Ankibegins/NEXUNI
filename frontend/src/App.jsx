import React from 'react';
import {
  Hexagon,
  LayoutDashboard,
  Package,
  BarChart3,
  MessageSquare,
  Settings,
  Plus,
  Search,
  Bell,
  Briefcase,
  Tag,
  Banknote,
  ShoppingCart,
  Eye,
  Star,
  MoreHorizontal
} from 'lucide-react';

export default function App() {
  return (
    <div className="flex h-screen overflow-hidden bg-background-light text-slate-900 font-display">
      {/* Sidebar Navigation */}
      <aside className="w-64 flex-shrink-0 border-r border-slate-200 bg-white flex flex-col justify-between p-4">
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-3 px-2">
            <div className="bg-primary rounded-lg p-1.5 flex items-center justify-center">
              <Hexagon className="text-white w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-slate-900 text-lg font-bold leading-tight tracking-tight">NEXUNI</h1>
              <p className="text-slate-500 text-xs font-medium">Seller Portal</p>
            </div>
          </div>

          <nav className="flex flex-col gap-1">
            <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-primary font-bold shadow-sm">
              <LayoutDashboard className="w-5 h-5" />
              <span className="text-sm">Dashboard</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors">
              <Package className="w-5 h-5" />
              <span className="text-sm">Manage Orders</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors">
              <BarChart3 className="w-5 h-5" />
              <span className="text-sm">Analytics</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors relative">
              <MessageSquare className="w-5 h-5" />
              <span className="text-sm">Messages</span>
              <span className="absolute right-3 top-3 w-2 h-2 bg-primary rounded-full"></span>
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors">
              <Settings className="w-5 h-5" />
              <span className="text-sm">Settings</span>
            </a>
          </nav>
        </div>

        <div className="flex flex-col gap-4">
          <div className="bg-primary/5 rounded-xl p-4 border border-primary/10">
            <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">Current Tier</p>
            <p className="text-sm font-bold text-slate-900 mb-1">Pro Seller</p>
            <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
              <div className="bg-primary h-full w-3/4"></div>
            </div>
            <p className="text-[10px] text-slate-500 mt-2">75% to Platinum Badge</p>
          </div>
          <button className="w-full bg-primary hover:bg-primary-hover text-white py-3 rounded-xl font-bold text-sm shadow-premium hover:shadow-lg transition-all flex items-center justify-center gap-2 group">
            <Plus className="w-4 h-4 group-hover:rotate-90 transition-transform" />
            New Listing
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-16 border-b border-slate-200 bg-white flex items-center justify-between px-8 shrink-0">
          <div className="flex items-center gap-4 flex-1">
            <div className="relative max-w-md w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search orders, clients or analytics..."
                className="w-full pl-10 pr-4 py-2 bg-slate-100 border-none rounded-lg text-sm focus:ring-2 focus:ring-primary/20 placeholder:text-slate-500 outline-none"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="relative p-2 text-slate-500 hover:bg-slate-100 rounded-lg transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 border-2 border-white rounded-full"></span>
            </button>
            <div className="h-8 w-[1px] bg-slate-200 mx-2"></div>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-sm font-bold text-slate-900">Alex Rivera</p>
                <p className="text-[10px] text-slate-500 font-medium">Verified Seller</p>
              </div>
              <div className="h-10 w-10 rounded-full bg-slate-200 overflow-hidden ring-2 ring-primary/10">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqALPVaf7i4_3stMxfrGs4iGDYM0L3aJnzomwi_knD_duQOUi3ZSO1HsarcA_j_r_SaQmMqcG73akIEzzlk10oU-adJTQI6OLB5-mEkaAFvZvDAhUFUiFnxDNjMxUnEuedgD-vmCPTRl1mp0LsIK_HdUsKzftbFj2f9UoSkjxz-2Wvwg8mGM46SUqKxoOkH3eTw-97BlsbhmOFrGQGY9YHpeoFVYLA2M9bqc_ArPUwYNT5iNgr0Lrqd4a64Luf0bdqsndbhaoDh5M"
                  alt="User avatar"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Body */}
        <div className="flex-1 overflow-y-auto p-8 bg-background-light">
          <div className="max-w-7xl mx-auto space-y-8">

            {/* Welcome Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h2 className="text-3xl font-black text-slate-900 tracking-tight">Welcome back, Alex!</h2>
                <p className="text-slate-500 mt-1">Here's what's happening with your store today.</p>
              </div>
              <div className="flex items-center gap-3">
                <button className="bg-primary text-white px-5 py-2.5 rounded-lg font-bold text-sm flex items-center gap-2 hover:bg-primary/90 transition-all shadow-md shadow-primary/10">
                  <Briefcase className="w-5 h-5" />
                  Add Freelance Service
                </button>
                <button className="bg-white text-slate-700 border border-slate-200 px-5 py-2.5 rounded-lg font-bold text-sm flex items-center gap-2 hover:bg-slate-50 transition-all">
                  <Tag className="w-5 h-5" />
                  List Product
                </button>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-card hover:shadow-premium transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 bg-primary/10 rounded-xl">
                    <Banknote className="text-primary w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">+12.4%</span>
                </div>
                <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">Total Revenue</p>
                <h3 className="text-3xl font-black text-slate-900 mt-1 tracking-tight">$12,845.00</h3>
              </div>

              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-card hover:shadow-premium transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 bg-orange-50 rounded-xl">
                    <ShoppingCart className="text-orange-500 w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">+5.2%</span>
                </div>
                <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">Active Orders</p>
                <h3 className="text-3xl font-black text-slate-900 mt-1 tracking-tight">43</h3>
              </div>

              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-card hover:shadow-premium transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 bg-purple-50 rounded-xl">
                    <Eye className="text-purple-600 w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-red-600 bg-red-50 px-2.5 py-1 rounded-full">-2.1%</span>
                </div>
                <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">Profile Views</p>
                <h3 className="text-3xl font-black text-slate-900 mt-1 tracking-tight">1,240</h3>
              </div>

              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-card hover:shadow-premium transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 bg-blue-50 rounded-xl">
                    <Star className="text-blue-600 w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-slate-400 bg-slate-50 px-2.5 py-1 rounded-full">Static</span>
                </div>
                <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">Rating</p>
                <h3 className="text-3xl font-black text-slate-900 mt-1 tracking-tight">4.9/5.0</h3>
              </div>
            </div>
          </div>

          {/* Charts & Orders */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Sales Chart Placeholder */}
            <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h4 className="font-bold text-slate-900">Sales & Performance</h4>
                <select className="text-sm border-slate-200 bg-transparent rounded-lg focus:ring-primary focus:border-primary py-1 outline-none">
                  <option>Last 7 Days</option>
                  <option>Last 30 Days</option>
                </select>
              </div>

              <div className="h-[300px] w-full relative flex flex-col justify-end gap-2 px-4 group">
                <div className="flex items-end justify-between h-full w-full gap-4">
                  <div className="bg-primary/20 hover:bg-primary w-full h-[40%] rounded-t transition-all cursor-pointer relative group/bar">
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover/bar:opacity-100 transition-opacity whitespace-nowrap">$420</span>
                  </div>
                  <div className="bg-primary/20 hover:bg-primary w-full h-[65%] rounded-t transition-all cursor-pointer relative group/bar">
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover/bar:opacity-100 transition-opacity whitespace-nowrap">$680</span>
                  </div>
                  <div className="bg-primary/20 hover:bg-primary w-full h-[55%] rounded-t transition-all cursor-pointer relative group/bar">
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover/bar:opacity-100 transition-opacity whitespace-nowrap">$590</span>
                  </div>
                  <div className="bg-primary/20 hover:bg-primary w-full h-[90%] rounded-t transition-all cursor-pointer relative group/bar">
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover/bar:opacity-100 transition-opacity whitespace-nowrap">$980</span>
                  </div>
                  <div className="bg-primary w-full h-[75%] rounded-t transition-all cursor-pointer relative group/bar">
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover/bar:opacity-100 transition-opacity whitespace-nowrap">$810</span>
                  </div>
                  <div className="bg-primary/20 hover:bg-primary w-full h-[45%] rounded-t transition-all cursor-pointer relative group/bar">
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover/bar:opacity-100 transition-opacity whitespace-nowrap">$490</span>
                  </div>
                  <div className="bg-primary/20 hover:bg-primary w-full h-[85%] rounded-t transition-all cursor-pointer relative group/bar">
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover/bar:opacity-100 transition-opacity whitespace-nowrap">$910</span>
                  </div>
                </div>
                <div className="flex justify-between w-full pt-4 border-t border-slate-100">
                  <span className="text-[10px] text-slate-400 font-bold">MON</span>
                  <span className="text-[10px] text-slate-400 font-bold">TUE</span>
                  <span className="text-[10px] text-slate-400 font-bold">WED</span>
                  <span className="text-[10px] text-slate-400 font-bold">THU</span>
                  <span className="text-[10px] text-slate-400 font-bold">FRI</span>
                  <span className="text-[10px] text-slate-400 font-bold">SAT</span>
                  <span className="text-[10px] text-slate-400 font-bold">SUN</span>
                </div>
              </div>
            </div>

            {/* Recent Messages */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <h4 className="font-bold text-slate-900">Active Chats</h4>
                <span className="bg-primary text-white text-[10px] font-black px-2 py-0.5 rounded-full">3 NEW</span>
              </div>

              <div className="space-y-4 flex-1 overflow-y-auto pr-1">
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer border border-transparent hover:border-slate-100">
                  <div className="relative">
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBofXwKb-D7GCzyL_anIUjQXqVx-qHRbAoHa9SJIjMaFBi47dh3FLpXdLlJ-3HQyQY75Z73_txY1IF2R64N3a7CGze0G6kqfa0h9aY0n4YZsRc3h1RWJjDPV7E2QC_FdDqCMeho_iflImUpXPe8OVoHguxv-Wdi-xcsMn2apVlPxKDfRkevH1Ovmj-I23rt3yfnqRK0qdiKy-UPg52UIx_juBmLcyexZGdzo74z-ApOP0rIgqutvJ2GIHnUAoXFyyusGT-fJaLOWA" alt="Maria" className="w-10 h-10 rounded-full bg-slate-100 object-cover" />
                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-white rounded-full"></span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <p className="text-sm font-bold text-slate-900 truncate">Maria Kovalska</p>
                      <span className="text-[10px] text-slate-400">12m</span>
                    </div>
                    <p className="text-xs text-slate-500 truncate font-medium">Is the Web Design gig still...</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer border border-transparent hover:border-slate-100">
                  <div className="relative">
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDE3I5V_t5HrdRoKCDQhGsdrejvu40E0Uv2hn4ttIFKn5Entgp5HXASgaPrRxZkO6srbJ6EEqM4uJJOdioNI-sosMGidBiHYq1oJ_Ob5h1lCTJzub3Y6OghKNtMas2KdtK3YsJiqVVufeE3MJM4248jdHErTNj1TS7R-tWWkCqBRnxpErQ2wePRkCpPBKwLXhLlRL4wj2tL8h7gITTpfOIKaUeVlslKNoW502o0LEQgSiMbcrsMHMIJsYpMtxDY9YAn0u5yhfgMFcs" alt="James" className="w-10 h-10 rounded-full bg-slate-100 object-cover" />
                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-slate-300 rounded-full border-2 border-white"></span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <p className="text-sm font-bold text-slate-900 truncate">James Anderson</p>
                      <span className="text-[10px] text-slate-400">2h</span>
                    </div>
                    <p className="text-xs text-slate-500 truncate">Thanks for the update!</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer border border-transparent hover:border-slate-100">
                  <div className="relative">
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCE37TfK3qDoHYNZPVu0m5T7NTVhOOyg-YT3JSAFOIxJmG_F8EFFGchnYvgXJfFOYirt1Axfk1tvq--qQX7b1g356It4HsYtQ1Vn2MtKaIIGfJdEtxzUrPC_tgtOucsF2BTkOEJD3_dFTQgd8fbj41p2fPccHTVtZgl3GEzYdLH9Ie1y8V0O1sXvXENGO6w6fyowMBwkAyhSUZmBqgDct8RLnH195PKTI6zvd4p3g3Qx8QL_ye_rwKnTV6FAmRs0hGLv9Dn1mVDf4Q" alt="Linda" className="w-10 h-10 rounded-full bg-slate-100 object-cover" />
                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-white rounded-full"></span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <p className="text-sm font-bold text-slate-900 truncate">Linda Wu</p>
                      <span className="text-[10px] text-slate-400">5h</span>
                    </div>
                    <p className="text-xs text-slate-500 truncate font-medium">I'd like to buy the used...</p>
                  </div>
                </div>
              </div>

              <button className="w-full mt-4 py-2 text-primary font-bold text-xs hover:bg-primary/5 rounded-lg transition-colors">
                VIEW ALL MESSAGES
              </button>
            </div>
          </div>

          {/* Recent Orders Table */}
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
              <h4 className="font-bold text-slate-900">Recent Orders</h4>
              <button className="text-primary text-xs font-bold hover:underline">Download CSV</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="px-6 py-3 text-[10px] font-black text-slate-500 uppercase tracking-widest">Order ID</th>
                    <th className="px-6 py-3 text-[10px] font-black text-slate-500 uppercase tracking-widest">Customer</th>
                    <th className="px-6 py-3 text-[10px] font-black text-slate-500 uppercase tracking-widest">Service/Product</th>
                    <th className="px-6 py-3 text-[10px] font-black text-slate-500 uppercase tracking-widest">Amount</th>
                    <th className="px-6 py-3 text-[10px] font-black text-slate-500 uppercase tracking-widest">Status</th>
                    <th className="px-6 py-3 text-[10px] font-black text-slate-500 uppercase tracking-widest text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 text-xs font-bold text-primary">#NX-8902</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-slate-100 overflow-hidden">
                          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSE_njGIF0A2evTJPFRSLj0ucyhVqpDtu-qc1Kf270GDNfNAZ1NXb72A--NbKRlQiBb527CZjBskREhlAaHuogq5IaLuMPwIaMwktEWjWDWgLt9TpAjWbF8p1vZmUh7j_Nl7_VSDCtrBPcnQ6kAt-wYEImyGGw_XOZ0PxQ3s9RhZu53iK9jfiYqU1BpraUdzmHWvtjodARKwq1ILg7g1rvYURzAmV5hsg7SrLAThjFOR3lbr4bAigIWgkF7LcrGjjeS6IMkmZfGQY" alt="Thomas" className="w-full h-full object-cover" />
                        </div>
                        <span className="text-xs font-semibold text-slate-900">Thomas Shelby</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-slate-900">UI/UX Design Kit</span>
                        <span className="text-[10px] text-slate-500 uppercase">Freelance Service</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-xs font-black text-slate-900">$1,200.00</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-700">
                        IN PROGRESS
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-slate-400 hover:text-primary transition-colors">
                        <MoreHorizontal className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 text-xs font-bold text-primary">#NX-8895</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-slate-100 overflow-hidden">
                          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZm0v5G1HEW2fgGT-2ZAeUnFzxIUf4q_QkmL-eTR_AHrP2LNJsqSjKHFKVW1ZP0noRUTHUbbr6gf7oJJwkuGvecMoL2146TzDeykylPPt2JgqwWq2zWIgHWT74RSsZBX2okVbxymrgmfhIM3K79VKhAjqXZN-VEUiWT1gJjy3FNkxz_bbN5cWoaLm90ndkpnHdBARCIyw0wuFKW16XR9V1nj2LI_vr7uIiun-guyRsc4KX8Tco0gb6IBWgM1LEzQvFD2agoXph1-w" alt="Sara" className="w-full h-full object-cover" />
                        </div>
                        <span className="text-xs font-semibold text-slate-900">Sara Jenkins</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-slate-900">Mechanical Keyboard</span>
                        <span className="text-[10px] text-slate-500 uppercase">Second-hand Product</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-xs font-black text-slate-900">$85.00</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-700">
                        SHIPPED
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-slate-400 hover:text-primary transition-colors">
                        <MoreHorizontal className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 text-xs font-bold text-primary">#NX-8891</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-slate-100 overflow-hidden">
                          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuA652_lCBRV66Qxi2fWGvUKI9kwe0BiNNHYyYQdvzP6LsVX7rBY55mZVLjTFbJiW6XhFbXpJOdImXpI24udiQKBHTX8JJglQeDhqDj8QOTQcRi4adb9ZIU2FDZuCo9yKjhvL4VKJ4GDRr9RL3Mu8vpSQgAMTCJB7Et5JeFFFJZf8pXwUg4IYeoNIYpwsz2ZVUbh63ZiUI8fUIAKO-dKDs6T8shdO6F9CfEmFXAyuvjp433o0k-15Ff_TjHWBZArtMFqr5hlD9K3K18" alt="Mark" className="w-full h-full object-cover" />
                        </div>
                        <span className="text-xs font-semibold text-slate-900">Mark Zuckerberg</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-slate-900">Python Scripting</span>
                        <span className="text-[10px] text-slate-500 uppercase">Freelance Service</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-xs font-black text-slate-900">$450.00</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-100 text-blue-700">
                        COMPLETED
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-slate-400 hover:text-primary transition-colors">
                        <MoreHorizontal className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}