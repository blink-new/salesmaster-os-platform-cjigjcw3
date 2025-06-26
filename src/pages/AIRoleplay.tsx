import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Target,
  Brain,
  Mic,
  MicOff,
  Play,
  Square,
  RotateCcw,
  Award,
  MessageCircle,
  Star,
  Clock,
  TrendingUp,
  User,
  Bot,
  Send,
  Volume2
} from 'lucide-react'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs'
import { Input } from '../components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select'

const AIRoleplay = () => {
  const [isRecording, setIsRecording] = useState(false)
  const [currentSession, setCurrentSession] = useState<string | null>(null)
  const [messages, setMessages] = useState<Array<{role: 'user' | 'ai', content: string, timestamp: string}>>([])
  const [inputMessage, setInputMessage] = useState('')

  const personas = [
    {
      id: 'cfo',
      name: 'CFO - Financial Executive',
      description: 'Cost-conscious, analytical, focused on ROI and budget implications',
      difficulty: 'Hard',
      avatar: '💼',
      traits: ['Budget-focused', 'Analytical', 'Risk-averse', 'ROI-driven']
    },
    {
      id: 'vp-sales',
      name: 'VP Sales - Revenue Leader',
      description: 'Results-driven, competitive, focused on revenue growth and team performance',
      difficulty: 'Medium',
      avatar: '📈',
      traits: ['Results-oriented', 'Competitive', 'Team-focused', 'Growth-minded']
    },
    {
      id: 'procurement',
      name: 'Procurement Manager',
      description: 'Process-oriented, vendor comparison focused, negotiation-heavy',
      difficulty: 'Hard',
      avatar: '📋',
      traits: ['Process-driven', 'Comparison-focused', 'Negotiation-savvy', 'Vendor-experienced']
    },
    {
      id: 'startup-ceo',
      name: 'Startup CEO',
      description: 'Fast-moving, budget-conscious, looking for scalable solutions',
      difficulty: 'Medium',
      avatar: '🚀',
      traits: ['Fast-paced', 'Budget-aware', 'Scale-focused', 'Innovation-driven']
    }
  ]

  const previousSessions = [
    {
      id: 1,
      persona: 'CFO - Financial Executive',
      date: '2 hours ago',
      duration: '12 min',
      score: 87,
      feedback: 'Strong on ROI presentation, could improve objection handling'
    },
    {
      id: 2,
      persona: 'VP Sales - Revenue Leader', 
      date: '1 day ago',
      duration: '15 min',
      score: 92,
      feedback: 'Excellent rapport building and competitive positioning'
    },
    {
      id: 3,
      persona: 'Procurement Manager',
      date: '2 days ago', 
      duration: '18 min',
      score: 78,
      feedback: 'Good process understanding, need to work on value articulation'
    }
  ]

  const startSession = (personaId: string) => {
    setCurrentSession(personaId)
    setMessages([
      {
        role: 'ai',
        content: "Hello! I'm ready to begin our roleplay session. I'll be playing the role of a CFO evaluating your solution. Please introduce yourself and your company, then tell me what you're hoping to accomplish in our meeting today.",
        timestamp: new Date().toLocaleTimeString()
      }
    ])
  }

  const sendMessage = () => {
    if (!inputMessage.trim()) return
    
    const newMessage = {
      role: 'user' as const,
      content: inputMessage,
      timestamp: new Date().toLocaleTimeString()
    }
    
    setMessages([...messages, newMessage])
    setInputMessage('')
    
    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "That's interesting. Can you help me understand the specific ROI we can expect? I need to justify any new investment to the board.",
        "I appreciate the overview. However, I'm concerned about the implementation timeline. How quickly can we see results?",
        "Your solution sounds promising, but I need to understand how it compares to our current approach. What makes this different?",
        "Budget is a key concern for us right now. Can you walk me through the pricing structure and any hidden costs?",
        "I like what I'm hearing, but I'll need to discuss this with my team. What information would you need from us to move forward?"
      ]
      
      const aiResponse = {
        role: 'ai' as const,
        content: responses[Math.floor(Math.random() * responses.length)],
        timestamp: new Date().toLocaleTimeString()
      }
      
      setMessages(prev => [...prev, aiResponse])
    }, 1500)
  }

  const endSession = () => {
    setCurrentSession(null)
    setMessages([])
    // Show session summary/scoring
  }

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
              <Link to="/progress" className="text-gray-600 hover:text-blue-600 transition-colors">Progress</Link>
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
          <h1 className="text-4xl font-bold text-gray-900 mb-2 font-serif flex items-center">
            <Brain className="w-10 h-10 mr-4 text-purple-600" />
            AI Roleplay Coach
          </h1>
          <p className="text-lg text-gray-600">
            Practice your sales conversations with realistic AI personas
          </p>
        </motion.div>

        {!currentSession ? (
          <Tabs defaultValue="personas" className="space-y-8">
            <TabsList className="grid w-full grid-cols-3 max-w-lg">
              <TabsTrigger value="personas">Choose Persona</TabsTrigger>
              <TabsTrigger value="history">Session History</TabsTrigger>
              <TabsTrigger value="analytics">Performance</TabsTrigger>
            </TabsList>

            <TabsContent value="personas">
              <div className="grid md:grid-cols-2 gap-6">
                {personas.map((persona, index) => (
                  <motion.div
                    key={persona.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-3">
                          <div className="text-4xl">{persona.avatar}</div>
                          <Badge 
                            variant={persona.difficulty === 'Hard' ? 'destructive' : 'secondary'}
                            className={persona.difficulty === 'Hard' ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'}
                          >
                            {persona.difficulty}
                          </Badge>
                        </div>
                        <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                          {persona.name}
                        </CardTitle>
                        <CardDescription className="text-sm leading-relaxed">
                          {persona.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {persona.traits.map((trait, traitIndex) => (
                            <Badge key={traitIndex} variant="outline" className="text-xs">
                              {trait}
                            </Badge>
                          ))}
                        </div>
                        <Button 
                          onClick={() => startSession(persona.id)}
                          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg transition-all duration-300 group"
                        >
                          <Play className="mr-2 w-4 h-4 group-hover:scale-110 transition-transform" />
                          Start Roleplay
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="history">
              <div className="space-y-4">
                {previousSessions.map((session, index) => (
                  <motion.div
                    key={session.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${
                              session.score >= 90 ? 'bg-green-100' : session.score >= 80 ? 'bg-blue-100' : 'bg-orange-100'
                            }`}>
                              {session.persona.includes('CFO') ? '💼' : session.persona.includes('VP') ? '📈' : '📋'}
                            </div>
                            <div>
                              <h3 className="font-bold text-gray-900">{session.persona}</h3>
                              <p className="text-sm text-gray-600">{session.feedback}</p>
                              <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                                <span className="flex items-center">
                                  <Clock className="w-3 h-3 mr-1" />
                                  {session.duration}
                                </span>
                                <span>{session.date}</span>
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center mb-2">
                              <Star className="w-4 h-4 text-yellow-500 mr-1" />
                              <span className="text-2xl font-bold text-gray-900">{session.score}</span>
                              <span className="text-gray-500">/100</span>
                            </div>
                            <Button size="sm" variant="outline" className="group">
                              <Play className="w-3 h-3 mr-1 group-hover:scale-110 transition-transform" />
                              Review
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="analytics">
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg">
                      <TrendingUp className="w-5 h-5 mr-2 text-green-600" />
                      Avg. Score
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-gray-900 mb-2">85.7</div>
                    <div className="flex items-center text-sm text-green-600">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      +12% this month
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg">
                      <Clock className="w-5 h-5 mr-2 text-blue-600" />
                      Total Practice
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-gray-900 mb-2">47h</div>
                    <div className="text-sm text-gray-600">
                      23 sessions completed
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg">
                      <Award className="w-5 h-5 mr-2 text-purple-600" />
                      Best Persona
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-lg font-bold text-gray-900 mb-2">VP Sales</div>
                    <div className="text-sm text-gray-600">
                      92% avg. score
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        ) : (
          // Active Session Interface
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg h-[600px] flex flex-col">
                <CardHeader className="border-b">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white text-lg">
                        💼
                      </div>
                      <div>
                        <CardTitle className="text-lg">CFO - Financial Executive</CardTitle>
                        <CardDescription>Practice session in progress</CardDescription>
                      </div>
                    </div>
                    <Button 
                      onClick={endSession}
                      variant="destructive" 
                      size="sm"
                      className="group"
                    >
                      <Square className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                      End Session
                    </Button>
                  </div>
                </CardHeader>

                {/* Chat Messages */}
                <div className="flex-1 p-6 overflow-y-auto space-y-4">
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`flex items-start space-x-3 ${
                        message.role === 'user' ? 'justify-end' : 'justify-start'
                      }`}
                    >
                      {message.role === 'ai' && (
                        <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white text-sm">
                          <Bot className="w-4 h-4" />
                        </div>
                      )}
                      <div
                        className={`max-w-md p-4 rounded-2xl ${
                          message.role === 'user'
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 text-gray-900'
                        }`}
                      >
                        <p className="text-sm">{message.content}</p>
                        <p className={`text-xs mt-2 opacity-70`}>
                          {message.timestamp}
                        </p>
                      </div>
                      {message.role === 'user' && (
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-sm">
                          <User className="w-4 h-4" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Message Input */}
                <div className="p-6 border-t">
                  <div className="flex items-center space-x-3">
                    <div className="flex-1 flex items-center space-x-2">
                      <Input
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        placeholder="Type your response..."
                        onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                        className="flex-1"
                      />
                      <Button
                        onClick={sendMessage}
                        disabled={!inputMessage.trim()}
                        className="bg-blue-600 text-white hover:bg-blue-700 group"
                      >
                        <Send className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      </Button>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setIsRecording(!isRecording)}
                        className={isRecording ? 'bg-red-100 text-red-600' : ''}
                      >
                        {isRecording ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                      </Button>
                      <Button variant="outline" size="sm">
                        <Volume2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Session Controls */}
            <div className="space-y-6">
              <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">Session Controls</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="outline" className="w-full group">
                    <RotateCcw className="w-4 h-4 mr-2 group-hover:rotate-180 transition-transform duration-500" />
                    Reset Session
                  </Button>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Difficulty Level</label>
                    <Select defaultValue="medium">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="easy">Easy</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="hard">Hard</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">Real-time Feedback</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Rapport Building</span>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">Good</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Question Quality</span>
                      <Badge variant="secondary" className="bg-blue-100 text-blue-800">Excellent</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Objection Handling</span>
                      <Badge variant="secondary" className="bg-orange-100 text-orange-800">Needs Work</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <MessageCircle className="w-6 h-6 mr-2" />
                    <span className="font-bold">Quick Tips</span>
                  </div>
                  <div className="text-sm space-y-2 text-purple-100">
                    <p>• Ask about their current challenges</p>
                    <p>• Focus on ROI and financial impact</p>
                    <p>• Use specific numbers and metrics</p>
                    <p>• Address budget concerns directly</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default AIRoleplay