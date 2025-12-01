"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cva, type VariantProps } from "class-variance-authority"
import { X, CheckCircle2, AlertCircle, Info, AlertTriangle } from "lucide-react"
import { cn } from "@/lib/utils"

const alertVariants = cva(
  "relative w-full rounded-lg border p-4 shadow-lg backdrop-blur-sm",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground border-border",
        success: "bg-green-500/10 border-green-500/20 text-green-700 dark:text-green-400",
        error: "bg-red-500/10 border-red-500/20 text-red-700 dark:text-red-400",
        warning: "bg-orange-500/10 border-orange-500/20 text-orange-700 dark:text-orange-400",
        info: "bg-blue-500/10 border-blue-500/20 text-blue-700 dark:text-blue-400",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const iconMap = {
  success: CheckCircle2,
  error: AlertCircle,
  warning: AlertTriangle,
  info: Info,
  default: Info,
}

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  title?: string
  description?: string
  showIcon?: boolean
  dismissible?: boolean
  onDismiss?: () => void
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      className,
      variant,
      title,
      description,
      showIcon = true,
      dismissible = false,
      onDismiss,
      children,
      ...props
    },
    ref
  ) => {
    const Icon = variant ? iconMap[variant] : iconMap.default

    // Filter out conflicting props that don't work with motion.div
    const {
      onDrag,
      onDragStart,
      onDragEnd,
      onAnimationStart,
      onAnimationEnd,
      onTransitionEnd,
      ...motionProps
    } = props

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: -20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -20, scale: 0.95 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={cn(alertVariants({ variant }), className)}
        {...(motionProps as any)}
      >
        <div className="flex items-start gap-3">
          {showIcon && Icon && (
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
            >
              <Icon className="h-5 w-5 flex-shrink-0 mt-0.5" />
            </motion.div>
          )}
          <div className="flex-1">
            {title && (
              <h4 className="font-semibold mb-1">{title}</h4>
            )}
            {description && (
              <p className="text-sm opacity-90">{description}</p>
            )}
            {children}
          </div>
          {dismissible && onDismiss && (
            <button
              onClick={onDismiss}
              className="absolute top-2 right-2 rounded-md p-1 hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </motion.div>
    )
  }
)
Alert.displayName = "Alert"

export { Alert, alertVariants }

