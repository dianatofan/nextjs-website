'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';
// import { classNames as cn } from 'classnames';

export default function ProjectNavigation({
  previousProject,
  nextProject,
  className,
}) {
  return (
    <section className={`bg-gray-50 py-12 px-8 ${className}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center gap-8">
        {previousProject ? (
          <Link href={previousProject.href} className="flex-1">
            <Button
              variant="outline"
              className="w-full justify-start group hover:border-primary bg-transparent"
            >
              <ArrowLeftIcon className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              <div className="text-left">
                <div className="text-xs text-gray-500 uppercase tracking-wide">
                  Previous
                </div>
                <div className="font-semibold">{previousProject.title}</div>
              </div>
            </Button>
          </Link>
        ) : (
          <div className="flex-1" />
        )}

        {nextProject ? (
          <Link href={nextProject.href} className="flex-1">
            <Button
              variant="outline"
              className="w-full justify-end group hover:border-primary bg-transparent"
            >
              <div className="text-right">
                <div className="text-xs text-gray-500 uppercase tracking-wide">
                  Next
                </div>
                <div className="font-semibold">{nextProject.title}</div>
              </div>
              <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        ) : (
          <div className="flex-1" />
        )}
      </div>
    </section>
  );
}
