import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';

const WarningBanner = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-yellow-50 border-l-4 border-yellow-400 p-4"
    >
      <div className="flex items-center">
        <AlertTriangle className="h-6 w-6 text-yellow-400 mr-3" />
        <div>
          <p className="text-sm text-yellow-700">
            <span className="font-bold">మెసేజ్</span>
          </p>
          <p className="font-sans text-sm text-yellow-700">
            మీరు కెఎల్ యూనివర్సిటీ విద్యార్థి అయితే, మీ హాజరు అవసరాలపై ఎల్లప్పుడూ దృష్టి పెట్టడం ఎంత ముఖ్యమో మీకు తెలుసు. మా స్మార్ట్ హాజరు ట్రాకింగ్ సిస్టమ్ మీకు దీనిని చేయడంలో సహాయపడటానికి రూపొందించబడింది, రియల్-టైమ్ ఇన్‌సైట్‌లు మరియు స్మార్ట్ ప్రిడిక్షన్‌లను అందించడం ద్వారా ఒక తరగతిని లేదా గడువును ఎప్పుడూ కోల్పోకుండా చూసుకోవడానికి.
          </p>
          <p className="font-sans text-sm text-yellow-700">
            మా వ్యవస్థతో, మీరు మీ హాజరు చరిత్రను ట్రాక్ చేయవచ్చు, లక్ష్యాలను నిర్దేశించవచ్చు మరియు మీ విద్యా మార్గం గురించి సమాచారంతో కూడిన నిర్ణయాలు తీసుకోవచ్చు. అలాగే, హాజరు అవసరాలు, గడువు తేదీలు మరియు షెడ్యూల్ మార్పులపై తక్షణ సమాచారాన్ని అందుకున్నారు, కాబట్టి మీరు మీ విద్యపై దృష్టి పెట్టగలరు – ఇది మీకు అత్యంత ముఖ్యమైనది.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default WarningBanner;
