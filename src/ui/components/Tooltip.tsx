import React, { type ReactNode, type ReactElement, useRef } from 'react';
import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  useHover,
  useFocus,
  useDismiss,
  useRole,
  useInteractions,
  FloatingPortal,
  arrow,
} from '@floating-ui/react';

interface TooltipProps {
  content: ReactNode;
  children: ReactElement;
  placement?: 'top' | 'bottom' | 'left' | 'right';
  offset?: number;
  delay?: number;
  disabled?: boolean;
}

export function Tooltip({
  content,
  children,
  placement = 'top',
  offset: offsetValue = 8,
  delay = 300,
  disabled = false,
}: TooltipProps): ReactElement {
  const [isOpen, setIsOpen] = React.useState(false);
  const arrowRef = useRef<HTMLDivElement>(null);

  const { refs, floatingStyles, context, middlewareData } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement,
    // Update position when scrolling/resizing to handle container overflow
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(offsetValue),
      flip({
        crossAxis: placement.includes('top') || placement.includes('bottom'),
        fallbackAxisSideDirection: 'start',
        padding: 8,
      }),
      shift({ padding: 8 }),
      arrow({
        element: arrowRef,
      }),
    ],
  });

  const hover = useHover(context, {
    move: false,
    delay: { open: delay, close: 100 },
  });
  const focus = useFocus(context);
  const dismiss = useDismiss(context);
  const role = useRole(context, { role: 'tooltip' });

  const { getReferenceProps, getFloatingProps } = useInteractions([hover, focus, dismiss, role]);

  if (disabled) {
    return children;
  }

  // Calculate arrow position
  const arrowX = middlewareData.arrow?.x;
  const arrowY = middlewareData.arrow?.y;
  const side = context.placement.split('-')[0] as 'top' | 'bottom' | 'left' | 'right';

  const arrowStaticSide = {
    top: 'bottom',
    right: 'left',
    bottom: 'top',
    left: 'right',
  }[side];

  return (
    <>
      {React.cloneElement(
        children,
        getReferenceProps({
          ref: refs.setReference,
        }),
      )}
      <FloatingPortal>
        {isOpen && (
          <div
            ref={refs.setFloating}
            style={floatingStyles}
            className="z-[9999] px-3 py-2 text-sm text-white bg-gray-900 rounded-lg shadow-lg border border-gray-700 max-w-xs"
            {...getFloatingProps()}
          >
            {content}
            <div
              ref={arrowRef}
              className="absolute w-2 h-2 bg-gray-900 border-gray-700 rotate-45"
              style={{
                left: arrowX != null ? `${arrowX}px` : '',
                top: arrowY != null ? `${arrowY}px` : '',
                right: '',
                bottom: '',
                [arrowStaticSide!]: '-4px',
                borderTopWidth: arrowStaticSide === 'bottom' ? '1px' : '0',
                borderRightWidth: arrowStaticSide === 'left' ? '1px' : '0',
                borderBottomWidth: arrowStaticSide === 'top' ? '1px' : '0',
                borderLeftWidth: arrowStaticSide === 'right' ? '1px' : '0',
              }}
            />
          </div>
        )}
      </FloatingPortal>
    </>
  );
}
