import React, { useEffect } from 'react';

// Add type declaration to avoid TypeScript errors for the Zalo SDK global object
declare global {
  interface Window {
    ZaloSocialSDK?: {
      reload: () => void;
    };
  }
}

export const ZaloWidget: React.FC = () => {
  useEffect(() => {
    // The Zalo SDK script might run before React renders this component.
    // This timeout ensures that we re-scan the page for the widget div
    // after the component has mounted, allowing the SDK to initialize the chat button.
    const timer = setTimeout(() => {
        if (window.ZaloSocialSDK && typeof window.ZaloSocialSDK.reload === 'function') {
            window.ZaloSocialSDK.reload();
        }
    }, 500);

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  return (
    <div 
      className="zalo-chat-widget" 
      data-oaid="3344721850796509073" 
      data-welcome-message="Rất vui khi được hỗ trợ bạn!" 
      data-autopopup="0" 
      data-width="350"
      data-height="450"
    ></div>
  );
};
