import { TimelineViewerData } from '@/types/TimelineViewer.types';
import { cn } from '@/lib/utils';

const TimelineViewer = ({ data }: { data: TimelineViewerData[] }) => {
  return (
    <div className="relative flex flex-col gap-0">
      {data.map((item, index) => (
        <div key={index} className="relative flex gap-4 pb-8 last:pb-0">
          {/* Timeline line and dot */}
          <div className="flex flex-col items-center">
            <div
              className={cn(
                'mt-1 h-3 w-3 rounded-full border-2 shrink-0',
                item.latest
                  ? 'border-primary bg-primary'
                  : 'border-muted-foreground bg-background'
              )}
            />
            {index < data.length - 1 && (
              <div className="mt-1 w-0.5 flex-1 bg-border" />
            )}
          </div>

          {/* Content */}
          <div className="flex flex-col gap-1 pb-2">
            <h3 className="text-base font-semibold leading-tight">
              {item.title}
            </h3>
            <p className="text-sm text-muted-foreground">{item.date}</p>
            <p className="text-sm text-foreground/80 mt-1">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimelineViewer;