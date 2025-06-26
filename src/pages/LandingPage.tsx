import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Target, ArrowRight } from 'lucide-react'
import { Button } from '../components/ui/button'

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 p-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center"
      >
        <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl flex items-center justify-center shadow-lg">
          <Target className="w-12 h-12 text-white" />
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight font-serif text-gray-900 dark:text-white">
          SalesMaster OS™
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-md mx-auto leading-relaxed">
          Your Entire Sales Training Business in One App.
        </p>
        <Link to="/dashboard">
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 text-xl rounded-xl hover:shadow-xl transition-all duration-300 group"
          >
            Enter Application
            <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </Button>
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        className="absolute bottom-8 text-sm text-gray-500 dark:text-gray-400"
      >
        © 2024 SalesMaster OS. All rights reserved.
      </motion.div>
    </div>
  )
}

export default LandingPage