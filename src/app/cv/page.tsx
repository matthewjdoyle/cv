'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import PrintableCV from '@/components/PrintableCV';

// Animation variants
const pageVariants = {
  hidden: { 
    opacity: 0
  },
  visible: { 
    opacity: 1,
    transition: { 
      duration: 0.4,
      ease: 'easeOut',
      when: 'beforeChildren'
    }
  },
  exit: { 
    opacity: 0,
    transition: { 
      duration: 0.3,
      ease: 'easeIn'
    }
  }
};

const topBarVariants = {
  hidden: { 
    y: -60,
    opacity: 0
  },
  visible: { 
    y: 0,
    opacity: 1,
    transition: { 
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.1
    }
  }
};

const cvContainerVariants = {
  hidden: { 
    opacity: 0,
    y: 30,
    scale: 0.98
  },
  visible: { 
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.2
    }
  }
};

const CVPage: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <motion.div 
      className="bg-gradient-to-b from-slate-100 to-slate-200 min-h-screen"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* Top Bar */}
      <motion.div 
        className="top-bar print-hidden bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 text-white p-4 flex justify-between items-center shadow-xl sticky top-0 z-50 backdrop-blur-sm"
        variants={topBarVariants}
      >
        <Link 
          href="/" 
          className="text-lg hover:text-blue-300 transition-all duration-300 flex items-center gap-2 group"
        >
          <motion.div
            whileHover={{ x: -4 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="transition-transform duration-300"
            >
              <path 
                d="M19 12H5M5 12L12 19M5 12L12 5" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
          <span className="group-hover:text-blue-300 transition-colors duration-300">Back to Orbit</span>
        </Link>
        
        <h1 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-white via-slate-200 to-slate-300 bg-clip-text text-transparent hidden sm:block">
          Curriculum Vitae
        </h1>
        
        <motion.button
          onClick={handlePrint}
          className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-semibold py-2 px-4 sm:px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-blue-500/25 flex items-center gap-2"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <svg 
            width="18" 
            height="18" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M6 9V2H18V9M6 18H4C3.46957 18 2.96086 17.7893 2.58579 17.4142C2.21071 17.0391 2 16.5304 2 16V11C2 10.4696 2.21071 9.96086 2.58579 9.58579C2.96086 9.21071 3.46957 9 4 9H20C20.5304 9 21.0391 9.21071 21.4142 9.58579C21.7893 9.96086 22 10.4696 22 11V16C22 16.5304 21.7893 17.0391 21.4142 17.4142C21.0391 17.7893 20.5304 18 20 18H18M6 14H18V22H6V14Z" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
          <span className="hidden sm:inline">Print / Download PDF</span>
          <span className="sm:hidden">Print</span>
        </motion.button>
      </motion.div>
      
      {/* CV Content */}
      <main className="p-4 sm:p-6 lg:p-8 print:p-0">
        <motion.div
          variants={cvContainerVariants}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden print:shadow-none print:rounded-none">
            <PrintableCV />
          </div>
        </motion.div>
      </main>
      
      {/* Footer - print hidden */}
      <motion.footer 
        className="print-hidden text-center py-6 text-slate-500 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <p>Press <kbd className="px-2 py-0.5 bg-slate-200 rounded text-slate-600 font-mono text-xs">Ctrl</kbd> + <kbd className="px-2 py-0.5 bg-slate-200 rounded text-slate-600 font-mono text-xs">P</kbd> to print or save as PDF</p>
      </motion.footer>
    </motion.div>
  );
};

export default CVPage;
