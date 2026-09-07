import React from 'react';
import * as LucideIcons from 'lucide-react';

export default function IconResolver({ name, size = 20, color, strokeWidth = 2, className = '' }) {
  const IconComponent = LucideIcons[name] || LucideIcons.HelpCircle;
  return <IconComponent size={size} color={color} strokeWidth={strokeWidth} className={className} />;
}
