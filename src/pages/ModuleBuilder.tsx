
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Plus,
  Target,
  Video,
  FileText,
  HelpCircle,
  Trophy,
  Upload,
  Play,
  Edit3,
  Save,
  Eye,
  Users,
  Clock,
  BarChart3
} from 'lucide-react'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Input } from '../components/ui/input'
import { Textarea } from '../components/ui/textarea'
import { Badge } from '../components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog'

const ModuleBuilder = () => {


  const existingModules = [
    {
      id: 1,
      title: "Objection Handling Mastery",
      description: "Learn to handle the 10 most common sales objections with confidence.",
      type: "Interactive Course",
      duration: "45 min",
      students: 89,
      completion: 92,
      status: "published"
    },
    {
      id: 2,
      title: "Discovery Questions Toolkit",  
      description: "Master the art of discovery with proven question frameworks.",
      type: "Video Series",
      duration: "30 min",
      students: 67,
      completion: 78,
      status: "published"
    },
    {
      id: 3,
      title: "Cold Calling Bootcamp",
      description: "From dial tone to booked meeting - complete cold calling system.",
      type: "Challenge",
      duration: "60 min",
      students: 45,
      completion: 65,
      status: "draft"
    }
  ]

  const contentTypes = [
    {
      icon: Video,
      title: "Video Content",
      description: "Upload training videos, screen recordings, and presentations",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: FileText,
      title: "Text Content",
      description: "Create written lessons, guides, and documentation",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: HelpCircle,
      title: "Interactive Quiz",
      description: "Test knowledge with multiple choice and scenario questions",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Trophy,
      title: "Challenge",
      description: "Gamified activities and competitive elements",
      color: "from-purple-500 to-pink-500"
    }
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
          className="mb-8 flex justify-between items-center"
        >
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2 font-serif">
              Learning Modules
            </h1>
            <p className="text-lg text-gray-600">
              Create and manage your sales training content
            </p>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all duration-300 group">
                <Plus className="mr-2 w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
                New Module
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">Create New Module</DialogTitle>
                <DialogDescription>
                  Choose the type of content you want to create for your sales training program.
                </DialogDescription>
              </DialogHeader>
              <div className="grid grid-cols-2 gap-4 py-6">
                {contentTypes.map((type, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="h-32 flex-col space-y-3 border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 group"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${type.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <type.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-gray-900">{type.title}</div>
                      <div className="text-sm text-gray-600">{type.description}</div>
                    </div>
                  </Button>
                ))}
              </div>
            </DialogContent>
          </Dialog>
        </motion.div>

        <Tabs defaultValue="modules" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3 max-w-md">
            <TabsTrigger value="modules">All Modules</TabsTrigger>
            <TabsTrigger value="templates">Templates</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="modules">
            {/* Existing Modules */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {existingModules.map((module, index) => (
                <motion.div
                  key={module.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="group"
                >
                  <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start mb-2">
                        <Badge 
                          variant={module.status === 'published' ? 'default' : 'secondary'}
                          className={module.status === 'published' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}
                        >
                          {module.status}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {module.type}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {module.title}
                      </CardTitle>
                      <CardDescription className="text-sm">
                        {module.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {module.duration}
                          </div>
                          <div className="flex items-center">
                            <Users className="w-4 h-4 mr-1" />
                            {module.students}
                          </div>
                        </div>
                        <div className="flex items-center">
                          <BarChart3 className="w-4 h-4 mr-1" />
                          {module.completion}%
                        </div>
                      </div>
                      
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline" className="flex-1 group">
                          <Edit3 className="w-4 h-4 mr-1 group-hover:scale-110 transition-transform" />
                          Edit
                        </Button>
                        <Button size="sm" variant="outline" className="group">
                          <Eye className="w-4 h-4 group-hover:scale-110 transition-transform" />
                        </Button>
                        <Button size="sm" variant="outline" className="group">
                          <Play className="w-4 h-4 group-hover:scale-110 transition-transform" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}

              {/* Create New Module Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ scale: 1.02 }}
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <Card className="bg-white/70 backdrop-blur-sm border-2 border-dashed border-gray-300 hover:border-blue-400 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group h-full">
                      <CardContent className="flex flex-col items-center justify-center p-8 h-full min-h-[280px]">
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                          <Plus className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Create New Module</h3>
                        <p className="text-sm text-gray-600 text-center">
                          Start building your next sales training experience
                        </p>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold">Module Builder</DialogTitle>
                      <DialogDescription>
                        Create engaging sales training content with our drag-and-drop editor.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-6 py-6">
                      <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Module Title
                            </label>
                            <Input placeholder="e.g., Advanced Objection Handling" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Description
                            </label>
                            <Textarea placeholder="Brief description of what students will learn..." rows={3} />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Estimated Duration
                            </label>
                            <Input placeholder="e.g., 45 minutes" />
                          </div>
                        </div>
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Content Type
                            </label>
                            <div className="grid grid-cols-2 gap-2">
                              {contentTypes.map((type, index) => (
                                <Button
                                  key={index}
                                  variant="outline"
                                  size="sm"
                                  className="h-20 flex-col space-y-1 text-xs"
                                >
                                  <type.icon className="w-4 h-4" />
                                  {type.title}
                                </Button>
                              ))}
                            </div>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Upload Content
                            </label>
                            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors cursor-pointer">
                              <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                              <p className="text-sm text-gray-600">Drag and drop files here, or click to browse</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-end space-x-3 pt-6 border-t">
                        <Button variant="outline">Save as Draft</Button>
                        <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                          <Save className="w-4 h-4 mr-2" />
                          Create Module
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </motion.div>
            </div>
          </TabsContent>

          <TabsContent value="templates">
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Template Library Coming Soon</h3>
              <p className="text-gray-600 max-w-md mx-auto">
                Pre-built templates for common sales training scenarios will be available soon.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="analytics">
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Module Analytics</h3>
              <p className="text-gray-600 max-w-md mx-auto">
                Detailed insights into module performance and student engagement coming soon.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default ModuleBuilder