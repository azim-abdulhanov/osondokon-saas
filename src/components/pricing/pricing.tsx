import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

type Plan = {
  name: string
  price: string
  description: string
  features: string[]
  highlight: boolean
}

const plans: {
  monthly: Plan[]
  yearly: Plan[]
} = {
  monthly: [
    {
      name: 'Starter',
      price: 'Free',
      description: 'Start with minimal options..',
      features: ['1 site', 'Limited design', '1GB storage', 'Community support'],
      highlight: false
    },
    {
      name: 'Pro',
      price: '$19',
      description: 'Extensive professional mode.',
      features: ['5 site', 'All designs', '10GB storage', 'Email support'],
      highlight: true
    },
    {
      name: 'Business',
      price: '$49',
      description: 'The perfect solution for large teams.',
      features: [
        '10 site',
        'Premium designs',
        '50GB storage',
        'Priority support'
      ],
      highlight: false
    }
  ],
  yearly: [
    {
      name: 'Starter',
      price: 'Free',
      description: 'Start with minimal options.',
      features: ['1 site', 'Limited design', '1GB storage'],
      highlight: false
    },
    {
      name: 'Pro',
      price: '$15',
      description: 'Economical mode with annual payment.',
      features: ['5 site', 'All designs', '10GB storage', 'Email support'],
      highlight: true
    },
    {
      name: 'Business',
      price: '$39',
      description: 'The perfect solution for large teams.',
      features: [
        '10 site',
        'Premium designs',
        '50GB storage',
        'Priority support'
      ],
      highlight: false
    }
  ]
}

export default function Pricing() {
  return (
    <section className='py-20 bg-gray-50 dark:bg-black'>
      <div className='text-center mb-12'>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-4xl font-bold text-gray-900 dark:text-white'
        >
          Pricing Plans
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className='text-gray-600 dark:text-gray-400 mt-4 max-w-xl mx-auto'
        >
          Choose the plan that's right for you
        </motion.p>
      </div>

      <Tabs defaultValue='monthly' className='max-w-6xl mx-auto px-6'>
        <TabsList className='flex justify-center items-center gap-4 mx-auto mb-10 bg-gray-200 dark:bg-gray-800 p-2 rounded-md'>
          <TabsTrigger
            value='monthly'
            className='data-[state=active]:bg-white data-[state=active]:text-black dark:data-[state=active]:bg-gray-900 dark:data-[state=active]:text-white rounded-md px-3 py-3 text-sm font-medium transition'
          >
            Monthly
          </TabsTrigger>
          <TabsTrigger
            value='yearly'
            className='data-[state=active]:bg-white data-[state=active]:text-black dark:data-[state=active]:bg-gray-900 dark:data-[state=active]:text-white rounded-md px-3 py-3 text-sm font-medium transition'
          >
            Yearly
          </TabsTrigger>
        </TabsList>

        {['monthly', 'yearly'].map(period => (
          <TabsContent key={period} value={period}>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {plans[period].map((plan, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.2, duration: 0.6 }}
                  className={`rounded-xl p-6 shadow-lg border transition hover:scale-[1.02] duration-300 ${
                    plan.highlight
                      ? 'bg-blue-600 dark:bg-blue-500 text-white border-blue-600'
                      : 'bg-white text-gray-800 dark:bg-gray-900 dark:text-white border-gray-200 dark:border-gray-700'
                  }`}
                >
                  <h3 className='text-xl font-semibold mb-2'>{plan.name}</h3>
                  <p className='text-3xl font-bold mb-4'>{plan.price}</p>
                  <p
                    className={`mb-6 ${
                      plan.highlight
                        ? 'text-white dark:gray-900'
                        : 'text-gray-500 dark:text-white'
                    }`}
                  >
                    {plan.description}
                  </p>
                  <ul className='space-y-3 mb-6'>
                    {plan.features.map((feature, i) => (
                      <li key={i} className='flex items-center gap-2'>
                        <CheckCircle className='text-green-400 w-5 h-5' />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`w-full py-2 rounded-lg font-semibold transition cursor-pointer ${
                      plan.highlight
                        ? 'bg-white text-blue-600 hover:bg-gray-100'
                        : 'bg-black text-white hover:bg-gray-900 dark:hover:bg-gray-800'
                    }`}
                  >
                    {plan.highlight ? 'Get Started' : 'Start Free'}
                  </button>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  )
}
