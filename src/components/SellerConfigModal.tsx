import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Settings, Link2, Download, MessageCircle, DollarSign, Check, Eye, Image as ImageIcon, Upload } from 'lucide-react';
import { BundleConfig } from '../types';

interface SellerConfigProps {
  isOpen: boolean;
  onClose: () => void;
  config: BundleConfig;
  onSave: (newConfig: BundleConfig) => void;
  onPreviewAccessPage: () => void;
}

export const SellerConfigModal: React.FC<SellerConfigProps> = ({
  isOpen,
  onClose,
  config,
  onSave,
  onPreviewAccessPage
}) => {
  const [formData, setFormData] = useState<BundleConfig>({ ...config });
  const [savedSuccess, setSavedSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const headerFileInputRef = useRef<HTMLInputElement | null>(null);

  if (!isOpen) return null;

  const handleImageFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setFormData({ ...formData, productImageUrl: event.target.result as string });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleHeaderImageFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setFormData({ ...formData, headerImageUrl: event.target.result as string });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-xl rounded-3xl bg-[#0c0c0c] border border-lime-400/50 p-6 sm:p-7 shadow-[0_0_50px_rgba(163,230,53,0.25)] my-8"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-black border border-white/10 flex items-center justify-center text-gray-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Header */}
          <div className="flex items-center gap-2.5 mb-5">
            <div className="w-10 h-10 rounded-xl bg-lime-950/80 border border-lime-400/50 flex items-center justify-center text-lime-400">
              <Settings className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-black text-white font-display">
                Seller &amp; Gateway Settings
              </h3>
              <p className="text-xs text-gray-400">
                Customize your payment link, Google Drive download link, and WhatsApp support.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            {/* Headline / Title Banner Graphic */}
            <div>
              <label className="block text-xs font-bold text-yellow-400 uppercase mb-1 flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <ImageIcon className="w-3.5 h-3.5 text-yellow-400" />
                  <span>Hero Headline Image (Massive Opportunity / 300+ AI HULK):</span>
                </span>
                <button
                  type="button"
                  onClick={() => headerFileInputRef.current?.click()}
                  className="text-[10px] text-yellow-300 hover:text-white underline flex items-center gap-1"
                >
                  <Upload className="w-3 h-3" />
                  Upload Image File
                </button>
              </label>

              <input
                ref={headerFileInputRef}
                type="file"
                accept="image/*"
                onChange={handleHeaderImageFile}
                className="hidden"
              />

              <div className="flex gap-2">
                <input
                  type="text"
                  value={formData.headerImageUrl || ''}
                  onChange={e => setFormData({ ...formData, headerImageUrl: e.target.value })}
                  placeholder="https://... or click upload file"
                  className="flex-1 px-3.5 py-2.5 rounded-xl bg-black border border-white/10 focus:border-yellow-400 text-white text-xs outline-none font-mono"
                />
                {formData.headerImageUrl && (
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, headerImageUrl: '' })}
                    className="px-3 py-2 text-xs bg-red-950/60 border border-red-500/40 text-red-300 rounded-xl hover:bg-red-900"
                  >
                    Clear
                  </button>
                )}
              </div>
              <span className="text-[10px] text-gray-500 mt-0.5 block">
                Replaces the "Massive Opportunity / 300+ AI HULK REELS BUNDLE" text header with your custom uploaded graphic.
              </span>
            </div>

            {/* Product Image / Poster Graphic */}
            <div>
              <label className="block text-xs font-bold text-lime-400 uppercase mb-1 flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <ImageIcon className="w-3.5 h-3.5 text-lime-400" />
                  <span>Custom Product Image / Bundle Poster:</span>
                </span>
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="text-[10px] text-lime-300 hover:text-white underline flex items-center gap-1"
                >
                  <Upload className="w-3 h-3" />
                  Upload Image File
                </button>
              </label>

              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageFile}
                className="hidden"
              />

              <div className="flex gap-2">
                <input
                  type="text"
                  value={formData.productImageUrl || ''}
                  onChange={e => setFormData({ ...formData, productImageUrl: e.target.value })}
                  placeholder="https://... or click upload file"
                  className="flex-1 px-3.5 py-2.5 rounded-xl bg-black border border-white/10 focus:border-lime-400 text-white text-xs outline-none font-mono"
                />
                {formData.productImageUrl && (
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, productImageUrl: '' })}
                    className="px-3 py-2 text-xs bg-red-950/60 border border-red-500/40 text-red-300 rounded-xl hover:bg-red-900"
                  >
                    Clear
                  </button>
                )}
              </div>
              <span className="text-[10px] text-gray-500 mt-0.5 block">
                Upload your screenshot image or paste an image link to show on the 3D bundle box.
              </span>
            </div>

            {/* Payment Gateway Link */}
            <div>
              <label className="block text-xs font-bold text-yellow-300 uppercase mb-1 flex items-center gap-1.5">
                <Link2 className="w-3.5 h-3.5" />
                <span>Your Payment Gateway Link (Cashfree / Cosmofeed / UPI / Razorpay):</span>
              </label>
              <input
                type="url"
                required
                value={formData.paymentLink}
                onChange={e => setFormData({ ...formData, paymentLink: e.target.value })}
                placeholder="https://payments.cashfree.com/forms?code=unlockeverything"
                className="w-full px-3.5 py-2.5 rounded-xl bg-black border border-white/10 focus:border-lime-400 text-white text-xs outline-none font-mono"
              />
              <span className="text-[10px] text-gray-500 mt-0.5 block">
                The secure checkout link connected to all "BUY NOW" buttons.
              </span>
            </div>

            {/* Google Drive Download Link */}
            <div>
              <label className="block text-xs font-bold text-lime-400 uppercase mb-1 flex items-center gap-1.5">
                <Download className="w-3.5 h-3.5" />
                <span>Your Google Drive / Download Folder URL:</span>
              </label>
              <input
                type="url"
                required
                value={formData.downloadLink}
                onChange={e => setFormData({ ...formData, downloadLink: e.target.value })}
                placeholder="https://drive.google.com/drive/folders/your-folder-id"
                className="w-full px-3.5 py-2.5 rounded-xl bg-black border border-white/10 focus:border-lime-400 text-white text-xs outline-none font-mono"
              />
              <span className="text-[10px] text-gray-500 mt-0.5 block">
                The folder customers receive after successful payment.
              </span>
            </div>

            {/* WhatsApp Number & Message */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-gray-300 uppercase mb-1 flex items-center gap-1.5">
                  <MessageCircle className="w-3.5 h-3.5 text-lime-400" />
                  <span>WhatsApp Number:</span>
                </label>
                <input
                  type="text"
                  value={formData.whatsappNumber}
                  onChange={e => setFormData({ ...formData, whatsappNumber: e.target.value })}
                  placeholder="+91 6394927894"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-black border border-white/10 focus:border-lime-400 text-white text-xs outline-none font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-300 uppercase mb-1 flex items-center gap-1.5">
                  <DollarSign className="w-3.5 h-3.5 text-yellow-400" />
                  <span>Offer Price (₹):</span>
                </label>
                <input
                  type="number"
                  value={formData.price}
                  onChange={e => setFormData({ ...formData, price: Number(e.target.value) })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-black border border-white/10 focus:border-lime-400 text-white text-xs outline-none font-mono"
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="pt-3 border-t border-white/10 flex flex-col sm:flex-row items-center gap-3">
              <button
                type="submit"
                className="w-full sm:w-1/2 py-3 px-4 rounded-xl bg-lime-400 hover:bg-lime-300 text-black font-black text-xs uppercase italic tracking-wider transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(163,230,53,0.4)]"
              >
                <Check className="w-4 h-4" />
                <span>{savedSuccess ? 'Saved Successfully!' : 'Save Configuration'}</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  onClose();
                  onPreviewAccessPage();
                }}
                className="w-full sm:w-1/2 py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-yellow-400 border border-yellow-400/40 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
              >
                <Eye className="w-4 h-4" />
                <span>Preview Access Page</span>
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
