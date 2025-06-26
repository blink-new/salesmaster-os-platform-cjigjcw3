import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Users, 

  Brain,
  Award,
  Plus,
  BarChart3,
  Target,
  Clock,
  CheckCircle2,
  ArrowUpRight,
  Play,
  Star
} from 'lucide-react'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Progress } from '../components/ui/progress'
import { Badge } from '../components/ui/badge'

const Dashboard = () => {
  const stats = [
    {
      title: "Active Students",
      value: "247",
      change: "+12%",
      icon: Users,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Course Completion",
      value: "87%",
      change: "+5%",
      icon: CheckCircle2,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Avg. Performance",
      value: "92/100",
      change: "+8%",
      icon: Target,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Training Hours",
      value: "1,247",
      change: "+23%",
      icon: Clock,
      color: "from-orange-500 to-red-500"
    }
  ]

  const recentActivity = [
    {
      student: "Alex Johnson",
      action: "Completed 'Objection Handling Mastery'",
      score: 94,
      time: "2 hours ago"
    },
    {
      student: "Sarah Chen",
      action: "Started AI Roleplay with CFO Persona",
      score: null,
      time: "3 hours ago"
    },
    {
      student: "Mike Rodriguez",
      action: "Achieved 'Closer Champion' Badge",
      score: null,
      time: "5 hours ago"
    },
    {
      student: "Emily Watson",
      action: "Completed Quiz: 'Discovery Questions'",
      score: 88,
      time: "1 day ago"
    }
  ]

  const topPerformers = [
    { name: "Jessica Park", company: "TechFlow", score: 96, trend: "+12" },
    { name: "David Kim", company: "SalesPro", score: 94, trend: "+8" },
    { name: "Rachel Green", company: "LeadGen Inc", score: 92, trend: "+15" }
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
              <Link to="/modules" className="text-gray-600 hover:text-blue-600 transition-colors">Modules</Link>
              <Link to="/progress" className="text-gray-600 hover:text-blue-600 transition-colors">Progress</Link>
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
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-2 font-serif">
            Welcome back, Sales Trainer! 👋
          </h1>
          <p className="text-lg text-gray-600">
            Here's what's happening with your training programs today.
          </p>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
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

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">Quick Actions</CardTitle>
                  <CardDescription>Jump right into your most common tasks</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { icon: Plus, label: "New Module", link: "/modules", color: "from-blue-500 to-cyan-500" },
                      { icon: Brain, label: "AI Roleplay", link: "/roleplay", color: "from-purple-500 to-pink-500" },
                      { icon: BarChart3, label: "Analytics", link: "/progress", color: "from-green-500 to-emerald-500" },
                      { icon: Award, label: "Challenges", link: "#", color: "from-orange-500 to-red-500" }
                    ].map((action, index) => (
                      <Link key={index} to={action.link}>
                        <Button 
                          variant="outline" 
                          className="h-20 w-full flex-col space-y-2 border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 group"
                        >
                          <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${action.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                            <action.icon className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-sm font-medium">{action.label}</span>
                        </Button>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Recent Activity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">Recent Activity</CardTitle>
                  <CardDescription>Latest student interactions and completions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivity.map((activity, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-gray-50/50 rounded-lg hover:bg-gray-100/50 transition-colors">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                            {activity.student.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">{activity.student}</p>
                            <p className="text-sm text-gray-600">{activity.action}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          {activity.score && (
                            <Badge variant="secondary" className="mb-1 bg-green-100 text-green-800">
                              {activity.score}/100
                            </Badge>
                          )}
                          <p className="text-sm text-gray-500">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Top Performers */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-gray-900 flex items-center">
                    <Star className="w-5 h-5 mr-2 text-yellow-500" />
                    Top Performers
                  </CardTitle>
                  <CardDescription>This month's highest scorers</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {topPerformers.map((performer, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold ${
                            index === 0 ? 'bg-yellow-500' : index === 1 ? 'bg-gray-400' : 'bg-orange-500'
                          }`}>
                            {index + 1}
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">{performer.name}</p>
                            <p className="text-sm text-gray-600">{performer.company}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-gray-900">{performer.score}</p>
                          <p className="text-sm text-green-600">{performer.trend}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Training Progress */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-gray-900">Training Progress</CardTitle>
                  <CardDescription>Overall completion rates</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {[
                      { name: "Objection Handling", progress: 92, color: "bg-blue-500" },
                      { name: "Discovery Questions", progress: 78, color: "bg-green-500" },
                      { name: "Closing Techniques", progress: 65, color: "bg-purple-500" },
                      { name: "Cold Calling", progress: 84, color: "bg-orange-500" }
                    ].map((course, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-gray-900">{course.name}</span>
                          <span className="text-sm text-gray-600">{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* AI Coaching CTA */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <Card className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Brain className="w-8 h-8 mr-3" />
                    <div>
                      <h3 className="font-bold text-lg">AI Roleplay Coach</h3>
                      <p className="text-purple-100 text-sm">Practice with AI personas</p>
                    </div>
                  </div>
                  <p className="text-purple-100 mb-4 text-sm">
                    Try our advanced AI coaching feature with realistic buyer personas and get instant feedback.
                  </p>
                  <Link to="/roleplay">
                    <Button variant="secondary" className="w-full group">
                      <Play className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                      Start Roleplay Session
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard