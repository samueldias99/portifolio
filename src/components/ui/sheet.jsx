import React from 'react';

const Sheet = ({ open, onOpenChange, children, ...props }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="fixed inset-y-0 right-0 z-50 w-3/4 border-l bg-background sm:max-w-sm">
        {React.Children.map(children, child => 
          React.cloneElement(child, { onOpenChange })
        )}
      </div>
    </div>
  );
};

const SheetTrigger = ({ asChild = false, children, ...props }) => {
  return React.cloneElement(children, props);
};

const SheetContent = ({ children, className = '', ...props }) => {
  return (
    <div className={`flex h-full flex-col ${className}`} {...props}>
      {children}
    </div>
  );
};

const SheetClose = ({ children, ...props }) => {
  return React.cloneElement(children, props);
};

export { Sheet, SheetTrigger, SheetContent, SheetClose };
