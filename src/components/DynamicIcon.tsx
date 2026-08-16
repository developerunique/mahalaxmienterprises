import React from 'react';
import {
  Factory,
  Boxes,
  CheckCircle2,
  Building2,
  Briefcase,
  Cpu,
  ShieldCheck,
  MapPin,
  Award,
  TrendingUp,
  Users2,
  FileSpreadsheet,
  Car,
  Truck,
  Stethoscope,
  ShoppingBag,
  HardHat,
  Laptop,
  Mail,
  Phone,
  Clock,
  ChevronRight,
  ArrowRight,
  ExternalLink,
  Copy,
  Check,
  Sparkles,
  Search,
  SlidersHorizontal,
  X,
  FileText,
  AlertCircle
} from 'lucide-react';

interface IconHelperProps {
  name: string;
  className?: string;
}

export const DynamicIcon: React.FC<IconHelperProps> = ({ name, className = 'w-5 h-5' }) => {
  switch (name) {
    case 'Factory':
      return <Factory className={className} />;
    case 'Boxes':
      return <Boxes className={className} />;
    case 'CheckCircle2':
      return <CheckCircle2 className={className} />;
    case 'Building2':
      return <Building2 className={className} />;
    case 'Briefcase':
      return <Briefcase className={className} />;
    case 'Cpu':
      return <Cpu className={className} />;
    case 'ShieldCheck':
      return <ShieldCheck className={className} />;
    case 'MapPin':
      return <MapPin className={className} />;
    case 'Award':
      return <Award className={className} />;
    case 'TrendingUp':
      return <TrendingUp className={className} />;
    case 'Users2':
      return <Users2 className={className} />;
    case 'FileSpreadsheet':
      return <FileSpreadsheet className={className} />;
    case 'Car':
      return <Car className={className} />;
    case 'Truck':
      return <Truck className={className} />;
    case 'Stethoscope':
      return <Stethoscope className={className} />;
    case 'ShoppingBag':
      return <ShoppingBag className={className} />;
    case 'HardHat':
      return <HardHat className={className} />;
    case 'Laptop':
      return <Laptop className={className} />;
    case 'Mail':
      return <Mail className={className} />;
    case 'Phone':
      return <Phone className={className} />;
    case 'Clock':
      return <Clock className={className} />;
    case 'ChevronRight':
      return <ChevronRight className={className} />;
    case 'ArrowRight':
      return <ArrowRight className={className} />;
    case 'ExternalLink':
      return <ExternalLink className={className} />;
    case 'Copy':
      return <Copy className={className} />;
    case 'Check':
      return <Check className={className} />;
    case 'Sparkles':
      return <Sparkles className={className} />;
    case 'FileText':
      return <FileText className={className} />;
    case 'AlertCircle':
      return <AlertCircle className={className} />;
    default:
      return <CheckCircle2 className={className} />;
  }
};
