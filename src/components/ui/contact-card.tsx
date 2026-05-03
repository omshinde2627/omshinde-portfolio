import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon, PlusIcon } from 'lucide-react';

type ContactInfoProps = React.ComponentProps<'div'> & {
  icon: LucideIcon;
  label: string;
  value: string;
};

type ContactCardProps = React.ComponentProps<'div'> & {
  title?: string;
  description?: string;
  contactInfo?: ContactInfoProps[];
  formSectionClassName?: string;
};

export function ContactCard({
  title = 'Contact With Us',
  description = 'If you have any questions regarding our Services or need help, please fill out the form here. We do our best to respond within 1 business day.',
  contactInfo,
  className,
  formSectionClassName,
  children,
  ...props
}: ContactCardProps) {
  return (
    <div
      className={cn(
        'bg-card border relative grid h-full w-full shadow flex-col lg:grid-cols-3',
        className
      )}
      {...props}
    >
      <PlusIcon className="absolute -top-3 -left-3 h-6 w-6" />
      <PlusIcon className="absolute -top-3 -right-3 h-6 w-6" />
      <PlusIcon className="absolute -bottom-3 -left-3 h-6 w-6" />
      <PlusIcon className="absolute -right-3 -bottom-3 h-6 w-6" />

      <div className="flex flex-col justify-between lg:col-span-2">
        <div className="relative h-full space-y-4 px-4 py-6 md:p-8">
          <h1 className="text-2xl font-bold md:text-3xl lg:text-4xl">
            {title}
          </h1>
          <p className="text-muted-foreground max-w-xl text-sm md:text-base">
            {description}
          </p>
          <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {contactInfo?.map((info, index) => (
              <ContactInfo key={index} {...info} />
            ))}
          </div>
        </div>
      </div>

      <div
        className={cn(
          'bg-muted/40 flex h-full w-full items-center border-t p-4 md:p-6 lg:col-span-1 lg:border-t-0 lg:border-l',
          formSectionClassName
        )}
      >
        {children}
      </div>
    </div>
  );
}

function ContactInfo({
  icon: Icon,
  label,
  value,
  className,
  ...props
}: ContactInfoProps) {
  return (
    <div className={cn('flex items-center gap-2 py-2', className)} {...props}>
      <div className="bg-muted/40 rounded-lg p-2">
        <Icon className="h-4 w-4 md:h-5 md:w-5" />
      </div>
      <div>
        <p className="font-medium text-sm">{label}</p>
        <p className="text-muted-foreground text-xs">{value}</p>
      </div>
    </div>
  );
}
