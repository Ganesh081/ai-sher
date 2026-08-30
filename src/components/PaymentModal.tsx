import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Lock, ShieldCheck, Zap, QrCode, ArrowRight, CheckCircle2, Sparkles, Smartphone, CreditCard, ExternalLink } from 'lucide-react';
import { BundleConfig } from '../types';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: BundleConfig;
  onPaymentSuccess: () => void;
}

export const PaymentModal: React.FC<PaymentModalProps> = ({
  isOpen,
  onClose,
  config,
  onPaymentSuccess
}) => {
  const [activeTab, setActiveTab] = useState<'qr' | 'link'>('qr');
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isOpen) return null;

  const handleSimulatePayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      onPaymentSuccess();
    }, 1200);
  };

  const handleOpenGateway = () => {
    window.open(config.paymentLink, '_blank');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
        
        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-lg rounded-3xl bg-[#0c0c0c] border border-lime-400/50 p-6 sm:p-7 shadow-[0_0_60px_rgba(163,230,53,0.25)] my-8"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-black border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/20 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Modal Header */}
          <div className="text-left mb-6">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded bg-lime-500/20 text-lime-400 text-[10px] font-black border border-lime-400/30">
                INSTANT CHECKOUT
              </span>
              <span className="text-[11px] text-gray-400">256-Bit Encrypted</span>
            </div>
            <h3 className="text-2xl font-black text-white uppercase font-display mt-1">
              300+ AI HULK REELS + <span className="text-yellow-400">1000+ BONUS</span>
            </h3>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-gray-500 line-through text-xs font-bold">₹{config.originalPrice}</span>
              <span className="text-2xl font-black text-lime-400 font-display text-glow-lime">
                ONLY ₹{config.price}
              </span>
              <span className="text-[10px] text-yellow-300 font-bold px-1.5 py-0.5 rounded bg-yellow-950/60 border border-yellow-500/30">
                97% OFF
              </span>
            </div>
          </div>

          {/* Checkout Payment Tabs */}
          <div className="grid grid-cols-2 gap-2 p-1 rounded-xl bg-black border border-white/10 mb-5 text-xs font-bold">
            <button
              onClick={() => setActiveTab('qr')}
              className={`py-2 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-all ${
                activeTab === 'qr'
                  ? 'bg-lime-400 text-black font-black shadow'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <QrCode className="w-3.5 h-3.5" />
              <span>Fast UPI / QR (₹29)</span>
            </button>
            <button
              onClick={() => setActiveTab('link')}
              className={`py-2 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-all ${
                activeTab === 'link'
                  ? 'bg-lime-400 text-black font-black shadow'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <CreditCard className="w-3.5 h-3.5" />
              <span>Gateway / Card Link</span>
            </button>
          </div>

          {/* Tab 1: Fast UPI QR Code */}
          {activeTab === 'qr' && (
            <div className="space-y-4 text-center">
              <div className="p-4 rounded-2xl bg-black border border-white/10 flex flex-col items-center">
                {/* Visual Simulated QR Code */}
                <div className="relative w-44 h-44 rounded-xl bg-white p-3 shadow-inner flex flex-col items-center justify-center">
                  {/* Cyber QR Pattern Graphics */}
                  <div className="w-full h-full border-4 border-black p-1 flex flex-col justify-between">
                    <div className="flex justify-between">
                      <div className="w-8 h-8 bg-black border-2 border-white" />
                      <div className="w-8 h-8 bg-black border-2 border-white" />
                    </div>
                    <div className="my-auto text-center font-mono font-black text-black text-xs tracking-tight">
                      <div>UPI: ₹{config.price}</div>
                      <div className="text-[9px] text-zinc-600">AI HULK BUNDLE</div>
                    </div>
                    <div className="flex justify-between">
                      <div className="w-8 h-8 bg-black border-2 border-white" />
                      <div className="w-8 h-8 bg-lime-600 text-black text-[9px] font-black flex items-center justify-center">
                        ₹29
                      </div>
                    </div>
                  </div>

                  {/* Corner Brand Logo Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-9 h-9 rounded-lg bg-black text-lime-400 font-black text-xs flex items-center justify-center border-2 border-white shadow">
                      H
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 mt-3 text-[11px] text-gray-300 font-bold">
                  <span>Google Pay</span> • <span>PhonePe</span> • <span>Paytm</span> • <span>BHIM</span>
                </div>
                <p className="text-[10px] text-gray-400 mt-1">
                  Scan QR with any UPI app on another device, or tap Complete Payment below.
                </p>
              </div>

              {/* Action Button: I Have Paid / Complete */}
              <button
                onClick={handleSimulatePayment}
                disabled={isProcessing}
                className="w-full py-4 px-6 rounded-xl bg-lime-400 hover:bg-lime-300 text-black font-black text-sm uppercase italic tracking-wider transition-all shadow-[0_0_25px_rgba(163,230,53,0.5)] flex items-center justify-center gap-2"
              >
                {isProcessing ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    <span>Verifying Access (₹29)...</span>
                  </div>
                ) : (
                  <>
                    <CheckCircle2 className="w-5 h-5" />
                    <span>I HAVE COMPLETED PAYMENT (GET ACCESS)</span>
                  </>
                )}
              </button>
            </div>
          )}

          {/* Tab 2: Custom Payment Link */}
          {activeTab === 'link' && (
            <div className="space-y-4 text-left">
              <div className="p-4 rounded-2xl bg-black border border-white/10 space-y-3">
                <div className="text-xs font-bold text-white flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-yellow-400" />
                  Direct Payment Gateway URL:
                </div>
                <div className="p-2.5 rounded-lg bg-[#121212] border border-white/10 text-gray-300 text-xs font-mono truncate">
                  {config.paymentLink}
                </div>
                <p className="text-[11px] text-gray-400">
                  Clicking the button below will open your secure payment portal in a new tab. After paying, return here to open your Google Drive files.
                </p>
              </div>

              <button
                onClick={handleOpenGateway}
                className="w-full py-3.5 px-6 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-black font-black text-sm uppercase italic tracking-wider transition-all shadow-[0_0_20px_rgba(250,204,21,0.4)] flex items-center justify-center gap-2"
              >
                <span>OPEN SECURE PAYMENT LINK</span>
                <ExternalLink className="w-4 h-4" />
              </button>

              <button
                onClick={handleSimulatePayment}
                disabled={isProcessing}
                className="w-full py-3 px-6 rounded-xl bg-white/5 hover:bg-white/10 text-lime-400 border border-lime-400/40 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
              >
                {isProcessing ? 'Verifying...' : 'Click Here After Completing Payment'}
              </button>
            </div>
          )}

          {/* Bottom Security Footer */}
          <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-gray-400">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-lime-400" />
              Instant Drive Redirection
            </span>
            <span className="text-gray-500">100% Virus-Free &amp; Verified</span>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
