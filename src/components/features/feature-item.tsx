import { motion } from 'framer-motion'
import type { FC, ReactNode } from 'react'

interface FeatureItemProps {
  icon: ReactNode
  title: string
  description: string
  delay?: number
}

const FeatureItem: FC<FeatureItemProps> = ({ icon, title, description, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="p-6 bg-white dark:bg-zinc-900 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
    >
      <div className="text-4xl mb-4 text-primary">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </motion.div>
  )
}

export default FeatureItem
