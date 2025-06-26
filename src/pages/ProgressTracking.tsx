import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Target,
  Users,
  TrendingUp,
  Award,
  Clock,
  CheckCircle2,
  BarChart3,
  Download,
  Filter,
  Search,
  Star,
  ArrowUpRight,
  Trophy,
  Zap
} from 'lucide-react'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Input } from '../components/ui/input'
import { Progress } from '../components/ui/progress'
import { Badge } from '../components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts'

const ProgressTracking = () => {
  const studentData = [
    {
      id: 1,
      name: "Alex Johnson",
      email: "alex.j@techflow.com",
      company: "TechFlow Solutions",
      avatar: "AJ",
      progress: 94,
      completedModules: 8,
      totalModules: 10,
      lastActive: "2 hours ago",
      score: 92,
      rank: 1,
      badges: ["Closer Champion", "Quiz Master"]
    },
    {
      id: 2,
      name: "Sarah Chen",
      email: "s.chen@salespro.com",
      company: "SalesPro Inc",
      avatar: "SC",
      progress: 87,
      completedModules: 7,
      totalModules: 10,
      lastActive: "5 hours ago",
      score: 89,
      rank: 2,
      badges: ["Discovery Expert"]
    },
    {
      id: 3,
      name: "Mike Rodriguez",  
      email: "mike.r@leadgen.com",
      company: "LeadGen Corp",
      avatar: "MR",
      progress: 76,
      completedModules: 6,
      totalModules: 10,
      lastActive: "1 day ago",
      score: 84,
      rank: 3,
      badges: ["Cold Call Pro"]
    },
    {
      id: 4,
      name: "Emily Watson",
      email: "e.watson@growth.co",
      company: "Growth Dynamics",
      avatar: "EW",
      progress: 69,
      completedModules: 5,
      totalModules: 10,
      lastActive: "2 days ago",
      score: 78,
      rank: 5,
      badges: ["Team Player"]
    }
  ]

  const performanceData = [
    { month: 'Jan', completion: 65, engagement: 72, performance: 68 },
    { month: 'Feb', completion: 71, engagement: 78, performance: 74 },
    { month: 'Mar', completion: 78, engagement: 82, performance: 80 },
    { month: 'Apr', completion: 84, engagement: 85, performance: 87 },
    { month: 'May', completion: 87, engagement: 88, performance: 92 },
    { month: 'Jun', completion: 92, engagement: 91, performance: 95 }
  ]

  const moduleStats = [
    { name: 'Objection Handling', completed: 89, total: 100 },
    { name: 'Discovery Questions', completed: 78, total: 100 },
    { name: 'Closing Techniques', completed: 65, total: 100 },
    { name: 'Cold Calling', completed: 84, total: 100 },
    { name: 'Negotiation', completed: 56, total: 100 }
  ]

  const engagementData = [
    { name: 'High', value: 45, color: '#10b981' },
    { name: 'Medium', value: 35, color: '#f59e0b' },
    { name: 'Low', value: 20, color: '#ef4444' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  SalesMaster OS™
                </span>
              </Link>
            </div>
            <div className="flex items-center space-x-6">
              <Link to="/dashboard" className="text-gray-600 hover:text-blue-600 transition-colors">Dashboard</Link>
              <Link to="/modules" className="text-gray-600 hover:text-blue-600 transition-colors">Modules</Link>
              <Link to="/roleplay" className="text-gray-600 hover:text-blue-600 transition-colors">AI Coach</Link>
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                ST
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex justify-between items-center"
        >
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2 font-serif">
              Progress & Analytics
            </h1>
            <p className="text-lg text-gray-600">
              Track student performance and training effectiveness
            </p>
          </div>
          <div className="flex space-x-3">
            <Button variant="outline" className="group">
              <Download className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
              Export Report
            </Button>
            <Button variant="outline" className="group">
              <Filter className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
              Filter
            </Button>
          </div>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            {
              title: "Total Students",
              value: "247",
              change: "+12%",
              icon: Users,
              color: "from-blue-500 to-cyan-500"
            },
            {
              title: "Avg. Completion",
              value: "87%",
              change: "+5%",
              icon: CheckCircle2,
              color: "from-green-500 to-emerald-500"
            },
            {
              title: "Performance Score",
              value: "92/100",
              change: "+8%",
              icon: Trophy,
              color: "from-purple-500 to-pink-500"
            },
            {
              title: "Engagement Rate",
              value: "94%",
              change: "+15%",
              icon: Zap,
              color: "from-orange-500 to-red-500"
            }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="relative overflow-hidden bg-white/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
                      <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                      <div className="flex items-center mt-2">
                        <ArrowUpRight className="w-4 h-4 text-green-500 mr-1" />
                        <span className="text-sm font-medium text-green-600">{stat.change}</span>
                        <span className="text-sm text-gray-500 ml-1">vs last month</span>
                      </div>
                    </div>
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center`}>
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 max-w-2xl">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="students">Students</TabsTrigger>
            <TabsTrigger value="modules">Modules</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Performance Trends */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <TrendingUp className="w-5 h-5 mr-2 text-blue-600" />
                      Performance Trends
                    </CardTitle>
                    <CardDescription>6-month progress overview</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart data={performanceData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="completion" stroke="#3b82f6" strokeWidth={3} />
                        <Line type="monotone" dataKey="engagement" stroke="#10b981" strokeWidth={3} />
                        <Line type="monotone" dataKey="performance" stroke="#8b5cf6" strokeWidth={3} />
                      </LineChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Module Completion */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <BarChart3 className="w-5 h-5 mr-2 text-green-600" />
                      Module Completion Rates
                    </CardTitle>
                    <CardDescription>Current completion status by module</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={moduleStats}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="completed" fill="#10b981" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Engagement Distribution */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Award className="w-5 h-5 mr-2 text-purple-600" />
                      Engagement Distribution
                    </CardTitle>
                    <CardDescription>Student engagement levels</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={250}>
                      <PieChart>
                        <Pie
                          data={engagementData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={100}
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {engagementData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                    <div className="flex justify-center space-x-6 mt-4">
                      {engagementData.map((item, index) => (
                        <div key={index} className="flex items-center">
                          <div 
                            className="w-3 h-3 rounded-full mr-2" 
                            style={{ backgroundColor: item.color }}
                          />
                          <span className="text-sm font-medium">{item.name}: {item.value}%</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle>Quick Insights</CardTitle>
                    <CardDescription>Key performance indicators</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      { label: "Average Session Time", value: "28 minutes", trend: "+5%" },
                      { label: "Course Completion Rate", value: "87%", trend: "+12%" },
                      { label: "Quiz Success Rate", value: "91%", trend: "+8%" },
                      { label: "Student Satisfaction", value: "4.8/5", trend: "+3%" }
                    ].map((insight, index) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-gray-50/50 rounded-lg">
                        <div>
                          <p className="font-medium text-gray-900">{insight.label}</p>
                          <p className="text-2xl font-bold text-blue-600">{insight.value}</p>
                        </div>
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          {insight.trend}
                        </Badge>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </TabsContent>

          <TabsContent value="students">
            <div className="space-y-6">
              {/* Search and Filter */}
              <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="relative flex-1">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <Input placeholder="Search students..." className="pl-10" />
                    </div>
                    <Button variant="outline">
                      <Filter className="w-4 h-4 mr-2" />
                      Filter
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Student List */}
              <div className="grid gap-4">
                {studentData.map((student, index) => (
                  <motion.div
                    key={student.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                              {student.avatar}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center space-x-3 mb-2">
                                <h3 className="font-bold text-gray-900">{student.name}</h3>
                                <Badge variant="outline" className="text-xs">
                                  #{student.rank}
                                </Badge>
                                <div className="flex items-center">
                                  <Star className="w-4 h-4 text-yellow-500 mr-1" />
                                  <span className="text-sm font-medium">{student.score}</span>
                                </div>
                              </div>
                              <p className="text-sm text-gray-600 mb-1">{student.email}</p>
                              <p className="text-sm text-gray-500">{student.company}</p>
                              <div className="flex space-x-2 mt-2">
                                {student.badges.map((badge, badgeIndex) => (
                                  <Badge key={badgeIndex} variant="secondary" className="text-xs bg-blue-100 text-blue-800">
                                    {badge}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                          <div className="text-right min-w-[200px]">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm text-gray-600">Progress</span>
                              <span className="text-sm font-medium">{student.progress}%</span>
                            </div>
                            <Progress value={student.progress} className="mb-3" />
                            <div className="flex items-center justify-between text-sm text-gray-600">
                              <span>{student.completedModules}/{student.totalModules} modules</span>
                              <span className="flex items-center">
                                <Clock className="w-3 h-3 mr-1" />
                                {student.lastActive}
                              </span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="modules">
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Module Analytics</h3>
              <p className="text-gray-600 max-w-md mx-auto">
                Detailed module performance and engagement metrics coming soon.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="reports">
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Download className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Custom Reports</h3>
              <p className="text-gray-600 max-w-md mx-auto">
                Generate custom reports for clients and stakeholders.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default ProgressTracking